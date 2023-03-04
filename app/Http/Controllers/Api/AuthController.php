<?php

namespace App\Http\Controllers\Api;

use App\Helpers\JsonResponse;
use App\Http\Controllers\Controller;
use App\Models\Adminabilitie;
use Auth;
use App\Models\User;
use Validator;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function index()
    {
        return response()->json(User::with(['orders'])->get());
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


    public function admin_login2(Request $request)
    {
        $status = 401;
        $response = ['error' => 'Unauthorised'];

        // dd(auth()->guard('Admin'));

        if (Auth::guard('Admin')->attempt($request->only(['email', 'password']))) {
            $status = 200;
            $response = [
                'userData' => Auth::guard('Admin')->user(),
                'accessToken' => Auth::guard('Admin')->user()->createToken('api_token')->plainTextToken,
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

    public function admin_login(Request $request)
    {
        // TODO when facebook user doesn't have email just phone number


        $rules = Validator::make($request->all(), [

            'email' => 'required',
            'password' => 'required',


        ]);

        if ($rules->fails()) {
            return JsonResponse::fail($rules->errors()->first(), 400);
        }


        $username_column = 'email';
        $email = $request->get('email');


        $request->merge([
            $username_column => $email,
            'status' => true
        ]);
        $credentials = $request->only($username_column, 'password', 'status');

        $class = new \App\Models\Admin();

        $user = $class::where($username_column, $credentials[$username_column])->first();


        if (!$user && $email) { //  TODO remove later after 2019-12-30


            //$user = $class::where($username_column, $old_mobile)->where('country_code', 966)->first();
            $user = $class::where($username_column, $email)->first();
        }

        if ((!$user) ||
            (app('hash')->check($credentials['password'], $user->password) === false)) {
            /*  return response([
                  'error' => [
                      'status'      => 422,
                      'name'        => 'UserPasswordMismatchError',
                      'description' => trans('messages.incorrect login'),
                      'details'     => [trans('messages.phone or password is incorrect')]
                  ]
              ], 422);/*


  */
            return JsonResponse::fail('UserPasswordMismatchError', 400);
        }


        if ($user->api_token == null) {
            $user->api_token = $user->createToken('api_token')->plainTextToken;


        }
        $user->device_token = $request->get('device_token');
        // $user->api_token = $user->createToken('api_token')->plainTextToken;
        $user->save();
        $user = $user->first();

        $status = 200;
        $response = [
            'userData' => $user->first(),
            'accessToken' => $user->api_token,
            'userAbilities' => $user->adminAbilities,

        ];
        return response()->json($response, $status);
       // return JsonResponse::success("User Profile", $user);
        //  return ['data' => $user];
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

    public function show(User $user)
    {
        return response()->json($user);
    }

    public function showOrders(User $user)
    {
        return response()->json($user->orders()->with(['product'])->get());
    }

}
