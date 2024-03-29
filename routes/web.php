<?php

use Illuminate\Support\Facades\Route;
//dd(bcrypt('123456'));
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('{any2}/{any?}', function () {
    return view('application');
})->where('any', '^(?!graphql|telescope|price)[/\w\·-]*')
->where('any2', 'staff|not-authorized-guest|not-authorized|forgot-password|register|customers|choose_login|dashboards|admin|login|build|pricing|pages|forms');
/*Route::get('{any?}', function() {
    return view('application');
})->where('any', '.*');*/

Route::group(['namespace' => 'App\Http\Controllers', 'middleware' => 'Language'], function () {
    Route::get('/', 'SettingController@home')->name('home'); // new
    Route::get('/logout', 'SettingController@logout')->name('logout'); // new

    Route::get('/price', function () {
        return view('price');
    })->name('price');
    Route::get('/lang/{lang}', 'SettingController@lang')->name('site.dashboard.lang'); // new
});
