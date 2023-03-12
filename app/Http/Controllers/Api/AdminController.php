<?php

namespace App\Http\Controllers\Api;

use App\Helpers\JsonResponse;
use App\Http\Controllers\Controller;
use App\Models\Admin;
use App\Models\AdminRole;
use App\Models\Setting;
use Auth;
use App\Models\User;
use Illuminate\Support\Facades\Storage;
use Validator;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function admins(Request $request)
    {
        $user = auth()->guard('Admin')->user();

        $status = 401;
        $response = ['error' => 'Unauthorised'];

        if ($user == null) {

            return response()->json($response, $status);
        }
        $admins = Admin::query();
        if ($request->get('status')) {
            $admins = $admins->where('status', $request->get('status'));
        }
        if ($request->get('role')) {
            $admins = $admins->where('role', $request->get('role'));
        }
        if ($request->get('q')) {
            $admins = $admins->where('name', 'like', '%' . $request->get('q') . '%');
        }
        $admins = $admins->paginate(1);
        $admins_active = Admin::where('status', 'active')->count();
        $admins_not_active = Admin::where('status', 'not_active')->count();
        $admins_block = Admin::where('status', 'block')->count();
        $array = [
            'admins' => $admins,
            'admins_active' => $admins_active,
            'admins_not_active' => $admins_not_active,
            'admins_block' => $admins_block,

        ];
        return response()->json($array);
    }

    public function roles(Request $request)
    {
        $user = auth()->guard('Admin')->user();

        $status = 401;
        $response = ['error' => 'Unauthorised'];

        if ($user == null) {

            return response()->json($response, $status);
        }
        $roles = AdminRole::query();
        if ($request->get('status')) {
            $roles = $roles->where('status', $request->get('status'));
        }
        if ($request->get('q')) {
            $roles = $roles
                ->where('role_name_en', 'like', '%' . $request->get('q') . '%')
                ->where('role_name_en', 'like', '%' . $request->get('q') . '%');
        }
        $roles = $roles->paginate(10);
        $array = [
            'roles' => $roles,
        ];
        return response()->json($array);
    }
    public function single_admin($id)
    {


        $user = auth()->guard('Admin')->user();

        $status = 401;
        $response = ['error' => 'Unauthorised'];

        if ($user == null) {

            return response()->json($response, $status);
        }
        $user = Admin::find($id);
        return response()->json($user);
        //  return ['data' => $user];
    }


    public function login(Request $request)
    {
        $status = 401;
        $response = ['error' => 'Unauthorised'];


        if (Auth::attempt($request->only(['email', 'password']))) {
            $status = 200;
            $response = [
                'userData' => Auth::user(),
                'accessToken' => Auth::user()->createToken('api_token')->plainTextToken,
                'userAbilities' => [
                    array('action' => 'manage',
                        'subject' => 'all'),
                    array('action' => 'manage',
                        'subject' => 'all')


                ],

            ];
        }


        return response()->json($response, $status);
    }

    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:50',
            'email' => 'required|email',
            'password' => 'required|min:6',
            'c_password' => 'required|same:password',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }

        $data = $request->only(['name', 'email', 'password']);
        $data['password'] = bcrypt($data['password']);

        $user = User::create($data);
        $user->is_admin = 0;

        return response()->json([
            'user' => $user,
            'token' => $user->createToken('bigStore')->accessToken,
        ]);
    }

    public function update_admin(Request $request, $id)
    {
        $user = auth()->guard('Admin')->user();

        $status = 401;
        $response = ['error' => 'Unauthorised'];

        if ($user == null) {

            return response()->json($response, $status);
        }


        $rules = Validator::make($request->all(), [


            'name' => 'sometimes|required',
            'email' => 'sometimes|required',
            'status' => 'sometimes|required',
            'role' => 'sometimes|required',
            'mobile' => 'sometimes|required',
            'avatar' => 'sometimes|required',
            'password' => 'sometimes|required|min:6',

        ]);

        if ($rules->fails()) {
            return JsonResponse::fail($rules->errors()->first(), 400);
        }

        $admin = Admin::where('id', $id)->first();

        $request->merge([

        ]);


        $admin->update($request->only([
            'name',
            'email',
            'mobile',
            'role',
            'status',
        ]));
        $admin = Admin::where('id', $id)->first();
        if (preg_match('/^data:image\/(\w+);base64,/', $request->get('avatar'))) {
            $data = substr($request->get('avatar'), strpos($request->get('avatar'), ',') + 1);
            $data = base64_decode($data);
            $image_info = getimagesize($request->get('avatar'));

            $extension = (isset($image_info["mime"]) ? explode('/', $image_info["mime"])[1] : "");
            $safeName = str_random(10) . '.' . $extension;
            Storage::disk('Admin')->put($safeName, $data);
            $admin->avatar = 'storage/admins/' . $safeName;
            $admin->save();
            return response()->json($admin);
        }

        if ($request->get('password')) {
            $admin->password = bcrypt($request->get('password'));
            $admin->save();
        }

        $admin = Admin::where('id', $id)->first();

        return response()->json($admin);
    }

    public function add_admin(Request $request)
    {
        $user = auth()->guard('Admin')->user();

        $status = 401;
        $response = ['error' => 'Unauthorised'];

        if ($user == null) {

            return response()->json($response, $status);
        }


        $rules = Validator::make($request->all(), [


            'name' => 'required',
            'email' => 'required',
            'status' => 'required',
            'role' => 'required',
            'mobile' => 'required',
            'avatar' => 'required',
            'password' => 'required|min:6',

        ]);

        if ($rules->fails()) {
            return JsonResponse::fail($rules->errors()->first(), 400);
        }


        $request->merge([
            'password' => bcrypt($request->get('password'))
        ]);


        $admin = Admin::create($request->only([
            'name',
            'email',
            'mobile',
            'role',
            'status',
            'password',
        ]));
        $admin = Admin::where('id', $admin->id)->first();
        if (preg_match('/^data:image\/(\w+);base64,/', $request->get('avatar'))) {
            $data = substr($request->get('avatar'), strpos($request->get('avatar'), ',') + 1);
            $data = base64_decode($data);
            $image_info = getimagesize($request->get('avatar'));

            $extension = (isset($image_info["mime"]) ? explode('/', $image_info["mime"])[1] : "");
            $safeName = str_random(10) . '.' . $extension;
            Storage::disk('Admin')->put($safeName, $data);
            $admin->avatar = 'storage/admins/' . $safeName;
            $admin->save();
            return response()->json($admin);
        }

        return response()->json($admin);
    }


}
