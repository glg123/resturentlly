<?php

namespace App\Http\Controllers;

use App\Models\Setting;
use Illuminate\Http\Request;
use Session;

class SettingController extends Controller
{


    public function home()
    {
        $settings = Setting::where('id', 1)->first();
        return view('home', compact('settings'));
    }


    public function lang(Request $request, $lang)
    {
        if (!in_array($lang, ['en', 'ar'])) {
            $lang = 'ar';
        }

        Session::put('locale', $lang);


        //  dd(Session::get('locale'));
        return back();
    }

    public function logout()
    {
        auth()->logout();
        return 'true';
    }


}
