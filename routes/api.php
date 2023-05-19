<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['namespace' => 'App\Http\Controllers','middleware'=>'LanguageSwitcher'], function () {
    Route::group(['middleware' => ['guest']], function () {
        Route::post('login', 'Api\AuthController@login');
        Route::post('register', 'Api\AuthController@register');
        Route::post('admin/login', 'Api\AuthController@admin_login');
        Route::post('customer/login', 'Api\AuthController@customer_login');
        Route::post('client/login', 'Api\AuthController@client_login');
        Route::post('staff/login', 'Api\AuthController@staff_login');


        Route::post('forget-password','Api\AuthController@submitForgetPasswordForm')->name('forget.password.post');
        Route::post('check-token','Api\AuthController@checkToken')->name('checkToken');
        Route::post('activate-account','Api\AuthController@activateAccount')->name('activateAccount');
        Route::post('rest-password','Api\AuthController@restPassword')->name('restPassword');
       // Route::get('reset-password/{token}', [ForgotPasswordController::class, 'showResetPasswordForm'])->name('reset.password.get');
      //  Route::post('reset-password', [ForgotPasswordController::class, 'submitResetPasswordForm'])->name('reset.password.post');
    });
    Route::post('login', 'Api\AuthController@login');

    Route::middleware(['auth:sanctum'])->group(function () {
        Route::middleware(['auth:Admin'])->group(function () {
            //////////////////////admins
            Route::get('admins/list', 'Api\AdminController@admins');
            Route::post('admins/{id}', 'Api\AdminController@update_admin');
            Route::post('add/admins', 'Api\AdminController@add_admin');
/////////////////////////////////////////////////////

            Route::get('admins/permissions/list', 'Api\AdminController@admins_permissions');
            Route::post('roles/permissions', 'Api\AdminController@add_roles_permissions');
            Route::post('edit/{id}/roles/permissions', 'Api\AdminController@edit_roles_permissions');
            Route::post('delete/{id}/roles/permissions', 'Api\AdminController@delete_roles_permissions');
            Route::get('roles/list', 'Api\AdminController@roles');
            Route::get('roles/select', 'Api\AdminController@roles_select');
            Route::get('admins/{id}/get', 'Api\AdminController@single_admin');
            Route::get('roles/{id}/get', 'Api\AdminController@single_roles');
            Route::get('settings', 'Api\SettingController@setting');
            Route::post('settings', 'Api\SettingController@save_setting');
            Route::get('services', 'Api\SettingController@services');
            Route::post('services', 'Api\SettingController@save_service');

            Route::get('cities', 'Api\SettingController@cities');
            Route::post('cities', 'Api\SettingController@save_cities');
            Route::post('cities/{id}', 'Api\SettingController@delete_cities');


            Route::get('states', 'Api\SettingController@states');
            Route::post('states', 'Api\SettingController@save_states');
            Route::post('states/{id}', 'Api\SettingController@delete_states');


            Route::get('countries', 'Api\SettingController@countries');
            Route::post('countries', 'Api\SettingController@save_countries');
            Route::post('countries/{id}', 'Api\SettingController@delete_countries');


            /////////////// restaurants admin
            Route::get('restaurants', 'Api\RestaurantController@restaurants');
            Route::get('single/{id}/restaurant', 'Api\RestaurantController@single_restaurant');
            Route::post('single/{id}/restaurant', 'Api\RestaurantController@edit_single_restaurant');
////////////////////////////////////////////
            //////////////////////plans
            Route::get('plans/list', 'Api\PlanController@plans');
            Route::get('plans/home/list', 'Api\PlanController@plans_home');
            Route::post('plan/{id}', 'Api\PlanController@update_plan');
            Route::get('single/{id}/plan', 'Api\PlanController@single_plan');
            Route::post('add/plans', 'Api\PlanController@add_plan');
            Route::post('delete/{id}/plan', 'Api\PlanController@delete_plan');

/////////////////////////////////////////////////////
//////////////////////////////////////////////clients

            Route::get('clients/list', 'Api\ClientController@clients');
            Route::get('single/{id}/client', 'Api\ClientController@single_client');


            /////////////////////////////////////////////


            //////////////////////faqs
            Route::get('faqs/list', 'Api\SettingController@faqs');
            Route::get('faqs/home/list', 'Api\SettingController@faqs_home');
            Route::post('faq/{id}', 'Api\SettingController@update_faq');
            Route::get('single/{id}/faq', 'Api\SettingController@single_faq');
            Route::post('add/faq', 'Api\SettingController@add_faq');
            Route::post('delete/{id}/faq', 'Api\SettingController@delete_faq');
        });
        Route::middleware(['auth:customer'])->group(function () {
            Route::get('my/profile', 'Api\Customer\CustomerController@show');
            Route::post('edit/my/profile', 'Api\Customer\CustomerController@editMyProfile');
            Route::get('my/orders', 'Api\Customer\OrderController@myOrders');
            Route::get('customer/single/{id}/order', 'Api\Customer\OrderController@singleOrder');
            Route::post('customer/send/rate', 'Api\Customer\OrderController@sendRate');
        });
        Route::group(['prefix' => 'client','middleware'=>'auth:user'], function () {

            Route::get('my/profile', 'Api\Client\ClientController@show');
            Route::get('my/manager/branches', 'Api\Client\ClientController@myManagerBranches');
            Route::post('add/manager/branche', 'Api\Client\ClientController@addManagerBranche');
            Route::get('single/manager/{id}/branche', 'Api\Client\ClientController@singleManagerBranche');
            Route::get('my/branches', 'Api\Client\ClientController@myBranches');
            // Route::get('my/plan', 'Api\Client\ClientController@myPlan');
            Route::post('edit/my/profile', 'Api\Client\ClientController@editMyProfile');
            Route::post('subscribe/plan', 'Api\Client\ClientController@subscribePlan');
            Route::post('cancel/subscribe/plan', 'Api\Client\ClientController@cancelSubscribePlan');
            Route::post('upgrade/subscribe/plan', 'Api\Client\ClientController@upgradeSubscribePlan');
            Route::get('my/plan', 'Api\Client\ClientController@myPlan');

        });

        Route::group(['prefix' => 'staff','middleware'=>'auth:user'], function () {

            Route::get('my/profile', 'Api\Staff\StaffController@show');
            Route::post('edit/my/profile', 'Api\Staff\StaffController@editMyProfile');


        });
        /////////////////////////////////////////////////////
    });
});
Route::get('/users', function (Request $request) {
    return \App\Models\User::get();
});




