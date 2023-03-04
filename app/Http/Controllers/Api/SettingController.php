<?php

namespace App\Http\Controllers\Api;

use App\Helpers\JsonResponse;
use App\Http\Controllers\Controller;
use App\Models\Admin;
use App\Models\Setting;
use Auth;
use App\Models\User;
use Illuminate\Support\Facades\Storage;
use Validator;
use Illuminate\Http\Request;

class SettingController extends Controller
{
    public function setting()
    {
        $user = auth()->guard('Admin')->user();

        $status = 401;
        $response = ['error' => 'Unauthorised'];

        if ($user == null) {

            return response()->json($response, $status);
        }
        return response()->json(Setting::first());
    }

    public function save_setting(Request $request)
    {
        $user = auth()->guard('Admin')->user();

        $status = 401;
        $response = ['error' => 'Unauthorised'];

        if ($user == null) {

            return response()->json($response, $status);
        }






        $rules = Validator::make($request->all(), [


            'slider_title_ar'=> 'sometimes|required',
            'slider_title_en'=> 'sometimes|required',
            'slider_description_ar'=> 'sometimes|required',
            'slider_description_en'=> 'sometimes|required',
            'slider_back_img'=> 'sometimes|required',
            'slider_front_img'=> 'sometimes|required',

        ]);

        if ($rules->fails()) {
            return JsonResponse::fail($rules->errors()->first(), 400);
        }

        $setting=Setting::first();

        $request->merge([

        ]);







        $setting->update($request->only([
            'slider_title_ar',
            'slider_title_en',
            'slider_description_ar',
            'slider_description_en',
         //   'slider_back_img',
         //   'slider_front_img',

        ]));
        if (preg_match('/^data:image\/(\w+);base64,/', $request->get('slider_back_img'))) {
            $data = substr($request->get('slider_back_img'), strpos($request->get('slider_back_img'), ',') + 1);
            $data = base64_decode($data);
            $image_info = getimagesize($request->get('slider_back_img'));

            $extension = (isset($image_info["mime"]) ? explode('/', $image_info["mime"] )[1]: "");
            $safeName = str_random(10).'.'.$extension;
            Storage::disk('setting')->put($safeName, $data);
            $setting->slider_back_img='storage/settings/'.$safeName;
            $setting->save();
            return response()->json(Setting::first());
        }
        if (preg_match('/^data:image\/(\w+);base64,/', $request->get('slider_front_img'))) {
            $data = substr($request->get('slider_front_img'), strpos($request->get('slider_front_img'), ',') + 1);

            $data = base64_decode($data);
            $image_info = getimagesize($request->get('slider_front_img'));

            $extension = (isset($image_info["mime"]) ? explode('/', $image_info["mime"] )[1]: "");
            $safeName = str_random(10).'.'.$extension;
            Storage::disk('setting')->put($safeName, $data);




          //  $path =$data->store($safeName, 'setting');

            $setting->slider_front_img='storage/settings/'.$safeName;
            $setting->save();
        }

        return response()->json(Setting::first());
    }
/*        $file = base64_decode($request['image']);
         $safeName = str_random(10).'.'.'png';
         $success = file_put_contents(public_path().'/uploads/'.$safeName, $file);*/

}
