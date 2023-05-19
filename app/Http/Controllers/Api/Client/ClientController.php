<?php

namespace App\Http\Controllers\Api\Client;

use App\Helpers\JsonResponse;
use App\Http\Controllers\Controller;
use App\Http\Middleware\Customer;
use App\Http\Resources\UserMealOrderResource;
use App\Models\Admin;
use App\Models\AdminPermission;
use App\Models\AdminRole;
use App\Models\Category;
use App\Models\Meal;
use App\Models\MealClass;
use App\Models\Plan;
use App\Models\PlanOrder;
use App\Models\Restaurant;
use App\Models\RolePermission;
use App\Models\Setting;
use App\Models\SubCategory;
use Auth;
use App\Models\User;
use Illuminate\Support\Facades\Storage;
use Validator;
use Illuminate\Http\Request;

class ClientController extends Controller
{
    public function show(Request $request)
    {


        //dd($request->header());
        if (!$request->user()) {
            //return JsonResponse::fail('Credentials not match', 401);
            //  return response()->error(__('views.not authorized'));
            //return JsonResponse::fail(__('views.not authorized'));
            return JsonResponse::fail(__('views.not authorized'), 400);
        }
        try {
            $user = $request->user();

            $user = \App\Models\User::where('id', $user->id)
                ->first();

            return response()->json($user);
            //  return response()->success(__('views.User Profile'), $user);
        } catch (\Exception $e) {
            return JsonResponse::fail($e->getMessage(), 400);

        };


    }

    public function myManagerBranches(Request $request)
    {


        //dd($request->header());
        if (!$request->user()) {
            //return JsonResponse::fail('Credentials not match', 401);
            //  return response()->error(__('views.not authorized'));
            //return JsonResponse::fail(__('views.not authorized'));
            return JsonResponse::fail(__('views.not authorized'), 400);
        }
        try {
            $user = $request->user();

            $user = \App\Models\User::where('id', $user->id)
                ->first();
            $branches = $user->Branches_Owner()->paginate();
            return response()->json($branches);
            //  return response()->success(__('views.User Profile'), $user);
        } catch (\Exception $e) {
            return JsonResponse::fail($e->getMessage(), 400);

        };


    }

    public function singleManagerBranche(Request $request,$id)
    {


        //dd($request->header());
        if (!$request->user()) {
            //return JsonResponse::fail('Credentials not match', 401);
            //  return response()->error(__('views.not authorized'));
            //return JsonResponse::fail(__('views.not authorized'));
            return JsonResponse::fail(__('views.not authorized'), 400);
        }
        try {
            $user = $request->user();

            $user = \App\Models\User::where('id', $user->id)
                ->first();
            $branche = User::where('id',$id)
               // ->with('Branch')
                ->first();

          //  $rest=Restaurant::where('manager_id',$branche->id)->first();
          //  dd($branche);
            return response()->json($branche);
            //  return response()->success(__('views.User Profile'), $user);
        } catch (\Exception $e) {
            return JsonResponse::fail($e->getMessage(), 400);

        };


    }


    public function addManagerBranche(Request $request)
    {
        //dd($request->header());
        if (!$request->user()) {
            //return JsonResponse::fail('Credentials not match', 401);
            //  return response()->error(__('views.not authorized'));
            //return JsonResponse::fail(__('views.not authorized'));
            return JsonResponse::fail(__('views.not authorized'), 400);
        }
        try {
            $user = $request->user();

            $user = \App\Models\User::where('id', $user->id)
                ->first();
            $rules = Validator::make($request->all(), [

                'first_name' => 'required',
                'last_name' => 'required',
                'password' => 'required',
                'mobile' => 'required',
                'status' => 'required',
                'email' => 'required|unique:users,email',

            ]);

            if ($rules->fails()) {
                return JsonResponse::fail($rules->errors()->first(), 400);
            }


            $request->merge([

                'password' => bcrypt($request->get('password')),
                'manager_id' => $user->id,
                'role' => 'staff',
                'type' => 'client',
                'user_role_id' => 6,

            ]);


            $staff = User::create($request->only([
                'first_name',
                'last_name',
                'email',
                'password',
                'mobile',
                'status',
                'role',
                'type',
                'manager_id',
                'user_role_id',
                'count_emp',

            ]));

            $staff->api_token = $staff->createToken('api_token')->plainTextToken;
            $staff->save();
            $staff = User::find($staff->id);
            $user = User::where('id', $user->id)->first();
            $planOrder=PlanOrder::where('user_id',$user->id)->first();
            $planOrder->count_branch_remain=$planOrder->count_branch_remain-1;
            $planOrder->count_emp_remain=$planOrder->count_emp_remain-$request->get('count_emp');
            $planOrder->save();
            $request->merge([

                'name_en' =>$request->get('first_name'),
                'name_ar' =>$request->get('first_name'),
                'manager_id' => $staff->id,
                'owner_id' => $user->id,
                'status' => 'active',
                'type' => 'branch',
                'count_emp' => $request->get('count_emp'),


            ]);
            $rest = Restaurant::create($request->only([
                'name_en',
                'name_ar',
                'website',
                'count_emp',
                'city_id',
                'about_ar',
                'about_en',
                'status',
                'state_id',
                'country_id',
                'avatar',
                'mobile',
                'note_ar',
                'note_en',
                'facebook',
                'twitter',
                'instagram',
                'dress_code_ar',
                'dress_code_en',
                'is_hidden',
                'signature',
                'day_start_hour',
                'day_end_hour',
                'days',
                'manager_id',
                'style_food_en',
                'style_food_ar',
                'address_ar',
                'address_en',
                'owner_id',
                'type',
                'parent_id',

            ]));


            $user = $user->with('Userabilitie.UserRolePermissions')->where('id', $user->id)->first();


            $status = 200;
            $response = [
                'userData' => $user,
                'accessToken' => $user->api_token,
                'userAbilities' => $user->Userabilitie->UserRolePermissions->abilities,


            ];
            return response()->json($response, $status);

        } catch (\Exception $e) {
            return JsonResponse::fail($e->getMessage(), 400);

        }

    }

    public function editMyProfile(Request $request)
    {
        //dd($request->header());
        if (!$request->user()) {
            //return JsonResponse::fail('Credentials not match', 401);
            //  return response()->error(__('views.not authorized'));
            //return JsonResponse::fail(__('views.not authorized'));
            return JsonResponse::fail(__('views.not authorized'), 400);
        }
        try {
            $user = $request->user();

            $user = \App\Models\User::where('id', $user->id)
                ->first();
            $rules = Validator::make($request->all(), [

                'first_name' => 'sometimes|required',
                'last_name' => 'sometimes|required',
                'password' => 'sometimes|required',
                'avatar' => 'sometimes|required',
                'email' => 'sometimes|required|unique:users,email,' . $user->id . ',id,deleted_at,NULL',

            ]);

            if ($rules->fails()) {
                return JsonResponse::fail($rules->errors()->first(), 400);
            }


            $user = \App\Models\Customer::find($user->id);

            if ($request->get('password')) {
                $request->merge([

                    'password' => bcrypt($request->get('password')),

                ]);
            }


            $user->update($request->only([
                'first_name',
                'last_name',
                'email',
                'password',
                'mobile',

            ]));


            $user = \App\Models\User::find($user->id);
            if (preg_match('/^data:image\/(\w+);base64,/', $request->get('avatar'))) {
                $data = substr($request->get('avatar'), strpos($request->get('avatar'), ',') + 1);
                $data = base64_decode($data);
                $image_info = getimagesize($request->get('avatar'));

                $extension = (isset($image_info["mime"]) ? explode('/', $image_info["mime"])[1] : "");
                $safeName = str_random(10) . '.' . $extension;
                Storage::disk('User')->put($safeName, $data);
                $user->avatar = 'storage/users/' . $safeName;
                $user->save();
                // return response()->json($user);
            }

            if (mb_strpos($_SERVER['HTTP_USER_AGENT'], "okhttp") === false) {
                // return ['data' => $user];

            }

            return JsonResponse::success($user, __("views.User Profile"));

            //  return response()->json($user);
            //  return response()->success(__('views.User Profile'), $user);
        } catch (\Exception $e) {
            return JsonResponse::fail($e->getMessage(), 400);

        }

    }


    public function subscribePlan(Request $request)
    {
        //dd($request->header());
        if (!$request->user()) {
            //return JsonResponse::fail('Credentials not match', 401);
            //  return response()->error(__('views.not authorized'));
            //return JsonResponse::fail(__('views.not authorized'));
            return JsonResponse::fail(__('views.not authorized'), 400);
        }
        try {
            $user = $request->user();

            $user = \App\Models\User::where('id', $user->id)
                ->first();
            $rules = Validator::make($request->all(), [

                'cardNumber' => 'required',
                'cardHolder' => 'required',
                'monthSelection' => 'required',
                'yearSelection' => 'required',
                'cvv' => 'required',
                'plan_id' => 'required|exists:plans,id',

            ]);

            if ($rules->fails()) {
                return JsonResponse::fail($rules->errors()->first(), 400);
            }


            $plan = Plan::find($request->get('plan_id'));
            $date = date('Y-m-d');
            $request->merge([
                'user_id' => $user->id,
                'count_emp' => $plan->count_emp,
                'count_branch' => $plan->count_branch,
                'count_emp_remain' => $plan->count_emp,
                'count_branch_remain' => $plan->count_branch,
                'start_date' => date('Y-m-d'),
                'end_date' => date('Y-m-d', strtotime($date . ' +' . $plan->count_interval . ' day')),
                'status' => 'active',
                'price' => $plan->price,
            ]);


            $planOrder = PlanOrder::create($request->only([
                'cardNumber',
                'cardHolder',
                'monthSelection',
                'yearSelection',
                'cvv',
                'plan_id',
                'price',
                'user_id',
                'start_date',
                'end_date',
                'count_emp',
                'count_branch',
                'count_emp_remain',
                'count_branch_remain',
                'status',

            ]));
            $user = User::where('id', $user->id)->first();


            $user = $user->with('Userabilitie.UserRolePermissions')->where('id', $user->id)->first();


            $status = 200;
            $response = [
                'userData' => $user,
                'accessToken' => $user->api_token,
                'userAbilities' => $user->Userabilitie->UserRolePermissions->abilities,


            ];
            return response()->json($response, $status);


        } catch (\Exception $e) {
            return JsonResponse::fail($e->getMessage(), 400);

        }

    }


    public function myPlan(Request $request)
    {


        //dd($request->header());
        if (!$request->user()) {
            //return JsonResponse::fail('Credentials not match', 401);
            //  return response()->error(__('views.not authorized'));
            //return JsonResponse::fail(__('views.not authorized'));
            return JsonResponse::fail(__('views.not authorized'), 400);
        }
        try {
            $user = $request->user();

            $user = User::where('id', $user->id)
                ->first();
            $myPlan = $user->myPlan;

            return response()->json($myPlan);
            //  return response()->success(__('views.User Profile'), $user);
        } catch (\Exception $e) {
            return JsonResponse::fail($e->getMessage(), 400);

        };


    }

    public function cancelSubscribePlan(Request $request)
    {


        //dd($request->header());
        if (!$request->user()) {
            //return JsonResponse::fail('Credentials not match', 401);
            //  return response()->error(__('views.not authorized'));
            //return JsonResponse::fail(__('views.not authorized'));
            return JsonResponse::fail(__('views.not authorized'), 400);
        }
        try {
            $user = $request->user();

            $user = User::where('id', $user->id)
                ->first();
            $myPlan = $user->myPlan;
            $staff=User::where('manager_id',$user->id)->delete();
            $restaurants=Restaurant::where('owner_id',$user->id)->delete();
            $meals=Meal::where('maneger_id',$user->id)->delete();
            $category=Category::where('manager_id',$user->id)->delete();
            $subCategory=SubCategory::where('manager_id',$user->id)->delete();
            $mealClass=MealClass::where('manager_id',$user->id)->delete();
            $planOrder=PlanOrder::where('user_id',$user->id)->delete();
            $user = User::where('id', $user->id)->first();


            $user = $user->with('Userabilitie.UserRolePermissions')->where('id', $user->id)->first();


            $status = 200;
            $response = [
                'userData' => $user,
                'accessToken' => $user->api_token,
                'userAbilities' => $user->Userabilitie->UserRolePermissions->abilities,


            ];
            return response()->json($response, $status);

            //  return response()->success(__('views.User Profile'), $user);
        } catch (\Exception $e) {
            return JsonResponse::fail($e->getMessage(), 400);

        };


    }

    public function upgradeSubscribePlan(Request $request)
    {
        //dd($request->header());
        if (!$request->user()) {
            //return JsonResponse::fail('Credentials not match', 401);
            //  return response()->error(__('views.not authorized'));
            //return JsonResponse::fail(__('views.not authorized'));
            return JsonResponse::fail(__('views.not authorized'), 400);
        }
        try {
            $user = $request->user();

            $user = \App\Models\User::where('id', $user->id)
                ->first();
            $rules = Validator::make($request->all(), [

                'cardNumber' => 'required',
                'cardHolder' => 'required',
                'monthSelection' => 'required',
                'yearSelection' => 'required',
                'cvv' => 'required',
                'plan_id' => 'required|exists:plans,id',

            ]);

            if ($rules->fails()) {
                return JsonResponse::fail($rules->errors()->first(), 400);
            }


            $plan = Plan::find($request->get('plan_id'));
            $date = date('Y-m-d');
            $request->merge([
                'user_id' => $user->id,
                'count_emp' => $plan->count_emp,
                'count_branch' => $plan->count_branch,
                'count_emp_remain' => $plan->count_emp,
                'count_branch_remain' => $plan->count_branch,
                'start_date' => date('Y-m-d'),
                'end_date' => date('Y-m-d', strtotime($date . ' +' . $plan->count_interval . ' day')),
                'status' => 'active',
                'price' => $plan->price,
            ]);

            $planOrder=PlanOrder::where('user_id',$user->id)->first();

            $planOrder = $planOrder->update($request->only([
                'cardNumber',
                'cardHolder',
                'monthSelection',
                'yearSelection',
                'cvv',
                'plan_id',
                'price',
                'user_id',
                'start_date',
                'end_date',
                'count_emp',
                'count_branch',
                'count_emp_remain',
                'count_branch_remain',
                'status',

            ]));
            $user = User::where('id', $user->id)->first();


            $user = $user->with('Userabilitie.UserRolePermissions')->where('id', $user->id)->first();


            $status = 200;
            $response = [
                'userData' => $user,
                'accessToken' => $user->api_token,
                'userAbilities' => $user->Userabilitie->UserRolePermissions->abilities,


            ];
            return response()->json($response, $status);

        } catch (\Exception $e) {
            return JsonResponse::fail($e->getMessage(), 400);

        }

    }
}
