<?php

namespace App\Http\Controllers\Api\Customer;

use App\Helpers\JsonResponse;
use App\Http\Controllers\Controller;
use App\Http\Middleware\Customer;
use App\Http\Resources\UserMealOrderResource;
use App\Models\Admin;
use App\Models\AdminPermission;
use App\Models\AdminRole;
use App\Models\RolePermission;
use App\Models\Setting;
use Auth;
use App\Models\User;
use Illuminate\Support\Facades\Storage;
use Validator;
use Illuminate\Http\Request;

class CustomerController extends Controller
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

            $user = \App\Models\Customer::where('id', $user->id)
                ->first();
            return response()->json($user);
          //  return response()->success(__('views.User Profile'), $user);
        } catch (\Exception $e) {
            return JsonResponse::fail($e->getMessage(), 400);

        }


    ;


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

            $user = \App\Models\Customer::where('id', $user->id)
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

            if($request->get('password'))
            {
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


            $user = \App\Models\Customer::find($user->id);
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

            return JsonResponse::success($user,__("views.User Profile"));

          //  return response()->json($user);
            //  return response()->success(__('views.User Profile'), $user);
        } catch (\Exception $e) {
            return JsonResponse::fail($e->getMessage(), 400);

        }

    }




}
