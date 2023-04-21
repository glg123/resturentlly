<?php

namespace App\Providers;

// use Illuminate\Support\Facades\Gate;
use App\Models\Admin;
use App\Models\User;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Auth;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The model to policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        // 'App\Models\Model' => 'App\Policies\ModelPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {

        if (app('request')->is('api/*')) {
            $authorization = app('request')->header('auth');

            $type_user = app('request')->header('type');
            $role = app('request')->header('role');
            $authorization = explode(' ', $authorization);
            $type = $authorization[0];


            //  dd($authorization);


            /*   if($role && $type)
               {

               }*/
            if ($type_user && $type) {

                $type_user = ucfirst($type_user);

                if ($type == 'token') {
                    $token = isset($authorization[1]) ? $authorization[1] : '';


                }


                if ($token) {

                    $type_user = 'App\Models\\' . ucfirst($type_user);


                    if ($type === 'token') {


                        $user = $type_user::where('api_token', $token)
                            ->first();


                        if (app('request')->header('type') && $user != null) {

                            //    dd(auth()->guard($role)->loginUsingId($user->id));
                            return auth()->guard('Admin')->loginUsingId($user->id);


                        }


                        if ($user == null) {

                            return null;

                        }


                        return Auth::loginUsingId($user->id);
                        //  if($user) return $user;


                    }


                }

                return null;

            }


            if ($type == 'token') {
                $token = isset($authorization[1]) ? $authorization[1] : '';


            }


            if (isset($token)) {

                //  $role = 'App\\Models\\' . ucfirst($role);

                if ($type_user) {
                    $role = 'App\Models\dashboard\Admin';
                } elseif ($role) {
                    if ($role == 'EstateFund') {
                        $role = 'App\EstateFund';
                    }
                } else {
                    $role = 'App\User';
                }


                if ($type === 'token') {
                    $user = $role::where('api_token', $token)->first();


                    //    dd(Auth::loginUsingId($user->id));

                    //   dd($user);
                    //   dd(\auth()->guard('estate_fund')->loginUsingId($user->id));


                    if (app('request')->header('role') && $user != null && app('request')->header('role') != 'rent') {

                        return auth()->guard('Fund')->loginUsingId($user->id);
                        dd($user->id);

                    }
                    if (app('request')->header('role') && $user != null && app('request')->header('role') == 'rent') {

//

                        return auth()->guard('Rent')->loginUsingId($user->id);
                    }

                    if ($user == null) {

                        return null;

                    }


                    return Auth::loginUsingId($user->id);
                    //  if($user) return $user;


                }
                if ($type === 'device_id') {
                    return $role::where('device_id', $token)->first();
                }
                if ($type === 'uuid') {
                    return $role::where('uuid', $token)->first();
                }

            }
        }

        app()->setLocale('ar');
        //  dd(app('request')->get('token'));
        if (app('request')->is('/*')) {

            $authorization = isset($_COOKIE["auth"]) ? $_COOKIE["auth"] : null;

            if (!$authorization) {
                return false;
            }
            $user = User::where('api_token', $authorization)->first();


            if (!$user) {
                return redirect('/login');
            }
           return Auth::loginUsingId($user->id);

           // dd(auth()->guard('Admin')->loginUsingId($user->id));
            return auth()->guard('Admin')->loginUsingId($user->id);


            $authorization = explode(' ', $authorization);
            $type = $authorization[0];
            $type_user = app('request')->header('type');


            if ($type_user && $type) {

                $type_user = ucfirst($type_user);

                if ($type == 'token') {
                    $token = isset($authorization[1]) ? $authorization[1] : '';


                }


                if ($token) {

                    $type_user = 'App\Models\\' . ucfirst($type_user);


                    if ($type === 'token') {


                        $user = $type_user::where('api_token', $token)
                            ->first();


                        if (app('request')->header('type') && $user != null) {


                            //    dd(auth()->guard($role)->loginUsingId($user->id));

                            if (app('request')->header('type') != 'Admin') {

                                return auth()->guard('Restaurant')->loginUsingId($user->id);
                            } else {


                                return auth()->guard('Admin')->loginUsingId($user->id);


                            }


                        }


                        if ($user == null) {

                            return null;

                        }


                        return Auth::loginUsingId($user->id);
                        //  if($user) return $user;


                    }


                }

                return null;

            }


            $role = 'User';


            $token = '';
            if ($type == 'token') {
                $token = isset($authorization[1]) ? $authorization[1] : '';


            }


            if ($token) {

                $role = 'App\\Models\\' . ucfirst($role);

                if ($type === 'token') {
                    $user = $role::where('api_token', $token)->first();


                    if ($user == null) {

                        return null;

                    }


                    return Auth::loginUsingId($user->id);
                    //  if($user) return $user;


                }
                if ($type === 'device_id') {
                    return $role::where('device_id', $token)->first();
                }
                if ($type === 'uuid') {
                    return $role::where('uuid', $token)->first();
                }

            }
        }
        $this->registerPolicies();

        //
    }
}
