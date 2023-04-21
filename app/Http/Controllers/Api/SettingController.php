<?php

namespace App\Http\Controllers\Api;

use App\Helpers\JsonResponse;
use App\Http\Controllers\Controller;
use App\Models\Admin;
use App\Models\City;
use App\Models\Country;
use App\Models\Faq;
use App\Models\Service;
use App\Models\Setting;
use App\Models\State;
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


            'slider_title_ar' => 'sometimes|required',
            'slider_title_en' => 'sometimes|required',
            'slider_description_ar' => 'sometimes|required',
            'slider_description_en' => 'sometimes|required',
            'about_us_ar' => 'sometimes|required',
            'about_us_en' => 'sometimes|required',
            'slider_back_img' => 'sometimes|required',
            'slider_front_img' => 'sometimes|required',


        ]);

        //dd(444);
        if ($rules->fails()) {
            return JsonResponse::fail($rules->errors()->first(), 400);
        }

        $setting = Setting::first();

        $request->merge([

        ]);


        $setting->update($request->only([
            'slider_title_ar',
            'slider_title_en',
            'slider_description_ar',
            'slider_description_en',
            'about_us_ar',
            'about_us_en',
            //   'slider_back_img',
            //   'slider_front_img',

        ]));
        if (preg_match('/^data:image\/(\w+);base64,/', $request->get('slider_back_img'))) {
            $data = substr($request->get('slider_back_img'), strpos($request->get('slider_back_img'), ',') + 1);
            $data = base64_decode($data);
            $image_info = getimagesize($request->get('slider_back_img'));

            $extension = (isset($image_info["mime"]) ? explode('/', $image_info["mime"])[1] : "");
            $safeName = str_random(10) . '.' . $extension;
            Storage::disk('setting')->put($safeName, $data);
            $setting->slider_back_img = 'storage/settings/' . $safeName;
            $setting->save();
            return response()->json(Setting::first());
        }
        if (preg_match('/^data:image\/(\w+);base64,/', $request->get('slider_front_img'))) {
            $data = substr($request->get('slider_front_img'), strpos($request->get('slider_front_img'), ',') + 1);

            $data = base64_decode($data);
            $image_info = getimagesize($request->get('slider_front_img'));

            $extension = (isset($image_info["mime"]) ? explode('/', $image_info["mime"])[1] : "");
            $safeName = str_random(10) . '.' . $extension;
            Storage::disk('setting')->put($safeName, $data);


            //  $path =$data->store($safeName, 'setting');

            $setting->slider_front_img = 'storage/settings/' . $safeName;
            $setting->save();
        }

        return response()->json(Setting::first());
    }

    /*        $file = base64_decode($request['image']);
             $safeName = str_random(10).'.'.'png';
             $success = file_put_contents(public_path().'/uploads/'.$safeName, $file);*/
    public function services()
    {
        $user = auth()->guard('Admin')->user();

        $status = 401;
        $response = ['error' => 'Unauthorised'];

        if ($user == null) {

            return response()->json($response, $status);
        }
        return response()->json(Service::get());
    }

    public function save_service(Request $request)
    {
        $user = auth()->guard('Admin')->user();

        $status = 401;
        $response = ['error' => 'Unauthorised'];

        if ($user == null) {

            return response()->json($response, $status);
        }


        $rules = Validator::make($request->all(), [


            'title_ar_0' => 'sometimes|required',
            'title_ar_1' => 'sometimes|required',
            'title_ar_2' => 'sometimes|required',
            'title_ar_3' => 'sometimes|required',
            'title_en_0' => 'sometimes|required',
            'title_en_1' => 'sometimes|required',
            'title_en_2' => 'sometimes|required',
            'title_en_3' => 'sometimes|required',


            'description_ar_0' => 'sometimes|required',
            'description_ar_1' => 'sometimes|required',
            'description_ar_2' => 'sometimes|required',
            'description_ar_3' => 'sometimes|required',
            'description_en_0' => 'sometimes|required',
            'description_en_1' => 'sometimes|required',
            'description_en_2' => 'sometimes|required',
            'description_en_3' => 'sometimes|required',


        ]);

        //dd(444);
        if ($rules->fails()) {
            return JsonResponse::fail($rules->errors()->first(), 400);
        }

        $services = Service::get();


        for ($i = 0; $i < count($services); $i++) {
            $request->merge([
                'title_ar' => $request->get('title_ar_' . $i),
                'title_en' => $request->get('title_en_' . $i),
                'description_ar' => $request->get('description_ar_' . $i),
                'description_en' => $request->get('description_en_' . $i),
            ]);
            $services[$i]->update($request->only([
                'title_ar',
                'title_en',
                'description_ar',
                'description_en',

                //   'slider_back_img',
                //   'slider_front_img',

            ]));
        }

        $services = Service::get();

        return response()->json($services);
    }


    public function cities(Request $request)
    {
        $user = auth()->guard('Admin')->user();

        $status = 401;
        $response = ['error' => 'Unauthorised'];

        if ($user == null) {

            return response()->json($response, $status);
        }
        $cities = City::query();
        if ($request->get('status')) {
            $cities = $cities->where('status', $request->get('status'));
        }
        if ($request->get('role')) {
            $cities = $cities->where('role', $request->get('role'));
        }
        if ($request->get('q')) {
            $cities = $cities->where('name', 'like', '%' . $request->get('q') . '%');
        }
        $cities = $cities->paginate(10);

        return response()->json($cities);
    }


    public function states(Request $request)
    {
        $user = auth()->guard('Admin')->user();

        $status = 401;
        $response = ['error' => 'Unauthorised'];

        if ($user == null) {

            return response()->json($response, $status);
        }
        $states = State::query();
        if ($request->get('status')) {
            $states = $states->where('status', $request->get('status'));
        }
        if ($request->get('role')) {
            $states = $states->where('role', $request->get('role'));
        }
        if ($request->get('q')) {
            $states = $states->where('name', 'like', '%' . $request->get('q') . '%');
        }
        $states = $states->paginate(10);

        return response()->json($states);
    }


    public function countries(Request $request)
    {
        $user = auth()->guard('Admin')->user();

        $status = 401;
        $response = ['error' => 'Unauthorised'];

        if ($user == null) {

            return response()->json($response, $status);
        }
        $countries = Country::query();
        if ($request->get('status')) {
            $countries = $countries->where('status', $request->get('status'));
        }
        if ($request->get('role')) {
            $countries = $countries->where('role', $request->get('role'));
        }
        if ($request->get('q')) {
            $countries = $countries->where('name', 'like', '%' . $request->get('q') . '%');
        }
        $countries = $countries->paginate(10);

        return response()->json($countries);
    }


    //////////////////////////// faqs
    public function faqs(Request $request)
    {
        $user = auth()->guard('Admin')->user();

        $status = 401;
        $response = ['error' => 'Unauthorised'];

        if ($user == null) {

            return response()->json($response, $status);
        }
        $faq = Faq::query();
        if ($request->get('status')) {
            $faq = $faq->where('status', $request->get('status'));
        }

        if ($request->get('q')) {
            $faq = $faq
                ->where('title_ar', 'like', '%' . $request->get('q') . '%')
                ->orwhere('title_ar', 'like', '%' . $request->get('q') . '%');
        }
        $faq = $faq->paginate(5);


        return response()->json($faq);
    }
    public function faqs_home(Request $request)
    {
        $user = auth()->guard('Admin')->user();

        $status = 401;
        $response = ['error' => 'Unauthorised'];

        if ($user == null) {

            return response()->json($response, $status);
        }
        $faq = Faq::query();
        if ($request->get('status')) {
            $faq = $faq->where('status', $request->get('status'));
        }

        if ($request->get('q')) {
            $faq = $faq
                ->where('title_ar', 'like', '%' . $request->get('q') . '%')
                ->orwhere('title_ar', 'like', '%' . $request->get('q') . '%');
        }
        $faq = $faq->get();


        return response()->json($faq);
    }


    public function single_faq($id)
    {


        $user = auth()->guard('Admin')->user();

        $status = 401;
        $response = ['error' => 'Unauthorised'];

        if ($user == null) {

            return response()->json($response, $status);
        }
        $faq = Faq::find($id);
        return response()->json($faq);
        //  return ['data' => $user];
    }


    public function update_faq(Request $request, $id)
    {
        $user = auth()->guard('Admin')->user();

        $status = 401;
        $response = ['error' => 'Unauthorised'];

        if ($user == null) {

            return response()->json($response, $status);
        }


        $rules = Validator::make($request->all(), [



            'title_ar'=> 'sometimes|required',
            'title_en'=> 'sometimes|required',
            'description_ar'=> 'sometimes|required',
            'description_en'=> 'sometimes|required',
            'status'=> 'sometimes|required',


        ]);

        if ($rules->fails()) {
            return JsonResponse::fail($rules->errors()->first(), 400);
        }

        $faq = Faq::where('id', $id)->first();





        $faq->update($request->only([
            'title_ar',
            'title_en',
            'description_ar',
            'description_en',
            'status'
        ]));



        $faq = Faq::where('id', $id)->first();

        return response()->json($faq);
    }

    public function add_faq(Request $request)
    {
        $user = auth()->guard('Admin')->user();
        $status = 401;
        $response = ['error' => 'Unauthorised'];

        if ($user == null) {

            return response()->json($response, $status);
        }


        $rules = Validator::make($request->all(), [
            'title_ar'=> 'required',
            'title_en'=> 'required',
            'description_ar'=> 'required',
            'description_en'=> 'required',
            'status'=> 'required',

        ]);

        if ($rules->fails()) {
            return JsonResponse::fail($rules->errors()->first(), 400);
        }



        $faq = Faq::create($request->only([
            'title_ar',
            'title_en',
            'description_ar',
            'description_en',
            'status'
        ]));
        $faq = Faq::where('id', $faq->id)->first();

        return response()->json($faq);
    }

    public function delete_faq($id)
    {


        $user = auth()->guard('Admin')->user();

        $status = 401;
        $response = ['error' => 'Unauthorised'];

        if ($user == null) {

            return response()->json($response, $status);
        }
        $faq = Faq::find($id);

        if ($faq) {

            $faq->delete();
        }

        return response()->json([]);
    }
    ////////////////////////////////////
}
