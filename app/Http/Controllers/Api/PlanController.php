<?php

namespace App\Http\Controllers\Api;

use App\Helpers\JsonResponse;
use App\Http\Controllers\Controller;
use App\Models\Admin;
use App\Models\AdminPermission;
use App\Models\AdminRole;
use App\Models\Plan;
use App\Models\RolePermission;
use App\Models\Setting;
use Auth;
use App\Models\User;
use Illuminate\Support\Facades\Storage;
use Validator;
use Illuminate\Http\Request;

class PlanController extends Controller
{
    public function plans(Request $request)
    {
        $user = auth()->guard('Admin')->user();

        $status = 401;
        $response = ['error' => 'Unauthorised'];

        if ($user == null) {

            return response()->json($response, $status);
        }
        $plans = Plan::query();
        if ($request->get('status')) {
            $plans = $plans->where('status', $request->get('status'));
        }

        if ($request->get('q')) {
            $plans = $plans
                ->where('name_ar', 'like', '%' . $request->get('q') . '%')
                ->orwhere('name_en', 'like', '%' . $request->get('q') . '%');
        }
        $plans = $plans->paginate(5);


        return response()->json($plans);
    }
    public function plans_home(Request $request)
    {
       /* $user = auth()->guard('Admin')->user();

        $status = 401;
        $response = ['error' => 'Unauthorised'];

        if ($user == null) {

            return response()->json($response, $status);
        }*/
        $plans = Plan::query();
        if ($request->get('status')) {
            $plans = $plans->where('status', $request->get('status'));
        }

        if ($request->get('q')) {
            $plans = $plans
                ->where('name_ar', 'like', '%' . $request->get('q') . '%')
                ->orwhere('name_en', 'like', '%' . $request->get('q') . '%');
        }
        $plans = $plans->get();


        return response()->json($plans);
    }


    public function single_plan($id)
    {


        $user = auth()->guard('Admin')->user();

        $status = 401;
        $response = ['error' => 'Unauthorised'];

        if ($user == null) {

            return response()->json($response, $status);
        }
        $plan = Plan::find($id);
        return response()->json($plan);
        //  return ['data' => $user];
    }


    public function update_plan(Request $request, $id)
    {
        $user = auth()->guard('Admin')->user();

        $status = 401;
        $response = ['error' => 'Unauthorised'];

        if ($user == null) {

            return response()->json($response, $status);
        }


        $rules = Validator::make($request->all(), [



            'name_ar'=> 'sometimes|required',
            'name_en'=> 'sometimes|required',
            'logo'=> 'sometimes|required',
            'price'=> 'sometimes|required',
            'count_emp'=> 'sometimes|required',
            'count_branch'=> 'sometimes|required',
            'count_interval'=> 'sometimes|required',
            'status'=> 'sometimes|required',


        ]);

        if ($rules->fails()) {
            return JsonResponse::fail($rules->errors()->first(), 400);
        }

        $plan = Plan::where('id', $id)->first();





        $plan->update($request->only([
            'name_ar',
            'name_en',
            'price',
            'type',
            'count_emp',
            'count_branch',
            'count_interval',
            'status',
        ]));
        $plan = Plan::where('id', $id)->first();
        if (preg_match('/^data:image\/(\w+);base64,/', $request->get('avatar'))) {
            $data = substr($request->get('logo'), strpos($request->get('avatar'), ',') + 1);
            $data = base64_decode($data);
            $image_info = getimagesize($request->get('logo'));

            $extension = (isset($image_info["mime"]) ? explode('/', $image_info["mime"])[1] : "");
            $safeName = str_random(10) . '.' . $extension;
            Storage::disk('Plan')->put($safeName, $data);
            $plan->logo = 'storage/plans/' . $safeName;
            $plan->save();
            return response()->json($plan);
        }



        $plan = Plan::where('id', $id)->first();

        return response()->json($plan);
    }

    public function add_plan(Request $request)
    {
        $user = auth()->guard('Admin')->user();
        $status = 401;
        $response = ['error' => 'Unauthorised'];

        if ($user == null) {

            return response()->json($response, $status);
        }


        $rules = Validator::make($request->all(), [
            'name_ar'=> 'required',
            'name_en'=> 'required',
            'logo'=> 'required',
            'price'=> 'required',
            'count_emp'=> 'required',
            'count_branch'=> 'required',
            'count_interval'=> 'required',
            'status'=> 'required',

        ]);

        if ($rules->fails()) {
            return JsonResponse::fail($rules->errors()->first(), 400);
        }



        $plan = Plan::create($request->only([
            'name_ar',
            'name_en',
            'price',
            'count_emp',
            'count_branch',
            'count_interval',
            'status',
            'type',
        ]));
        $plan = Plan::where('id', $plan->id)->first();
        if (preg_match('/^data:image\/(\w+);base64,/', $request->get('logo'))) {
            $data = substr($request->get('logo'), strpos($request->get('logo'), ',') + 1);
            $data = base64_decode($data);
            $image_info = getimagesize($request->get('logo'));

            $extension = (isset($image_info["mime"]) ? explode('/', $image_info["mime"])[1] : "");
            $safeName = str_random(10) . '.' . $extension;
            Storage::disk('Plan')->put($safeName, $data);
            $plan->logo = 'storage/plans/' . $safeName;
            $plan->save();
            return response()->json($plan);
        }

        return response()->json($plan);
    }

    public function delete_plan($id)
    {


        $user = auth()->guard('Admin')->user();

        $status = 401;
        $response = ['error' => 'Unauthorised'];

        if ($user == null) {

            return response()->json($response, $status);
        }
        $plan = Plan::find($id);

        if ($plan) {

            $plan->delete();
        }

        return response()->json([]);
    }

}
