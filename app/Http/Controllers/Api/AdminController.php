<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Admin;
use Auth;
use App\Models\User;
use Validator;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function admins()
    {
        $user = auth()->guard('Admin')->user();

        $status = 401;
        $response = ['error' => 'Unauthorised'];

        if ($user == null) {

            return response()->json($response, $status);
        }
        return response()->json(Admin::paginate(1));
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
                'accessToken' =>   Auth::user()->createToken('api_token')->plainTextToken,
                'userAbilities' =>   [
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



    public function showOrders(User $user)
    {
        return response()->json($user->orders()->with(['product'])->get());
    }

}
