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

    });
    Route::post('login', 'Api\AuthController@login');
    Route::middleware(['auth:sanctum'])->group(function () {
        Route::get('admins/list', 'Api\AdminController@admins');
        Route::get('roles/list', 'Api\AdminController@roles');
        Route::get('admins/{id}/get', 'Api\AdminController@single_admin');
        Route::post('admins/{id}', 'Api\AdminController@update_admin');
        Route::post('add/admins', 'Api\AdminController@add_admin');
        Route::get('settings', 'Api\SettingController@setting');
        Route::post('settings', 'Api\SettingController@save_setting');
        Route::get('services', 'Api\SettingController@services');
        Route::post('services', 'Api\SettingController@save_service');
    });
});
Route::get('/users', function (Request $request) {
    return \App\Models\User::get();
});




