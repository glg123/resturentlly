<?php

namespace App\Http\Controllers\Api;

use App\Helpers\JsonResponse;
use App\Http\Controllers\Controller;
use App\Models\Adminabilitie;
use Auth;
use App\Models\User;
use Illuminate\Support\Facades\Storage;
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

        $admin = $class::where($username_column, $credentials[$username_column])->first();


        if (!$admin && $email) { //  TODO remove later after 2019-12-30


            //$user = $class::where($username_column, $old_mobile)->where('country_code', 966)->first();
            $admin = $class::where($username_column, $email)->first();
        }

        if ((!$admin) || (app('hash')->check($credentials['password'], $admin->password) === false)) {
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


        if ($admin->api_token == null) {
            $admin->api_token = $admin->createToken('api_token')->plainTextToken;


        }
        $admin->device_token = $request->get('device_token');
        // $user->api_token = $user->createToken('api_token')->plainTextToken;
        $admin->save();
        $admin = $admin->with('Adminabilitie.RolePermissions')->where('id', $admin->id)->first();

       // dd($user->adminAbilities->abilities);
        $status = 200;
        $response = [
            'userData' => $admin,
            'accessToken' => $admin->api_token,
            'userAbilities' => $admin->Adminabilitie->RolePermissions->abilities,

        ];
        return response()->json($response, $status);
        // return JsonResponse::success("User Profile", $user);
        //  return ['data' => $user];
    }

    public function register(Request $request)
    {
        $rules = Validator::make($request->all(), [

            'email' => 'required',
            'password' => 'required',
            'first_name' => 'required',
            'last_name' => 'required',
            'type' => 'required',
            'avatar' => 'required',



        ]);

        if ($rules->fails()) {
            return JsonResponse::fail($rules->errors()->first(), 400);
        }

        $request->merge([
          'password' => bcrypt($request->get('password'))
        ]);
        $user = User::create($request->only([
            'first_name',
            'last_name',
            'email',
            'role',
            'type',
            'mobile',
            'manager_id',
            'password',

        ]));

        $user = User::where('id', $user->id)->first();
        if (preg_match('/^data:image\/(\w+);base64,/', $request->get('avatar'))) {
            $data = substr($request->get('avatar'), strpos($request->get('avatar'), ',') + 1);
            $data = base64_decode($data);
            $image_info = getimagesize($request->get('avatar'));

            $extension = (isset($image_info["mime"]) ? explode('/', $image_info["mime"])[1] : "");
            $safeName = str_random(10) . '.' . $extension;
            Storage::disk('User')->put($safeName, $data);
            $user->avatar = 'storage/users/' . $safeName;
            $user->save();
            return response()->json($user);
        }
        $user = User::where('id', $user->id)->first();
        $user->api_token = $user->createToken('api_token')->plainTextToken;
        $user->save();
        $user = $user->with('Userabilitie.UserRolePermissions')->where('id', $user->id)->first();

        $status = 200;
        $response = [
            'userData' => $user,
            'accessToken' => $user->api_token,
            'userAbilities' => $user->Userabilitie->UserRolePermissions->abilities,


        ];
        return response()->json($response, $status);
        return response()->json($user);

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
