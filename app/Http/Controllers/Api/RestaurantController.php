<?php

namespace App\Http\Controllers\Api;

use App\Helpers\JsonResponse;
use App\Http\Controllers\Controller;
use App\Http\Resources\RestaurantResource;
use App\Http\Resources\RestaurantStatisticResource;
use App\Models\Admin;
use App\Models\City;
use App\Models\Country;
use App\Models\Restaurant;
use App\Models\Service;
use App\Models\Setting;
use App\Models\State;
use Auth;
use App\Models\User;
use Illuminate\Support\Facades\Storage;
use Validator;
use Illuminate\Http\Request;

class RestaurantController extends Controller
{



    public function restaurants(Request $request)
    {
        $user = auth()->guard('Admin')->user();

        $status = 401;
        $response = ['error' => 'Unauthorised'];

        if ($user == null) {

            return response()->json($response, $status);
        }
        $restaurants = Restaurant::query();
        if ($request->get('status')) {
            $restaurants = $restaurants->where('status', $request->get('status'));
        }
        if ($request->get('role')) {
            $restaurants = $restaurants->where('role', $request->get('role'));
        }
        if ($request->get('q')) {
            $restaurants = $restaurants->where('name', 'like', '%' . $request->get('q') . '%');
        }
        $restaurants = $restaurants->paginate(10);

        return response()->json($restaurants);
    }

    public function single_restaurant(Request $request,$id)
    {
        $user = auth()->guard('Admin')->user();

        $status = 401;
        $response = ['error' => 'Unauthorised'];

        if ($user == null) {

            return response()->json($response, $status);
        }
        $restaurant = Restaurant::find($id);
        $restaurant = RestaurantResource::collection([$restaurant]);

        return response()->json($restaurant[0]);
    }
    public function edit_single_restaurant(Request $request, $id)
    {
        $user = auth()->guard('Admin')->user();

        $status = 401;
        $response = ['error' => 'Unauthorised'];

        if ($user == null) {

            return response()->json($response, $status);
        }


        $rules = Validator::make($request->all(), [


            'name' => 'sometimes|required',
            'name_en'=> 'sometimes|required',
            'name_ar'=> 'sometimes|required',
            'website'=> 'sometimes|required',
            'about_ar'=> 'sometimes|required',
            'about_en'=> 'sometimes|required',
            'status'=> 'sometimes|required',
            'mobile'=> 'sometimes|required',
            'note_ar'=> 'sometimes|required',
            'note_en'=> 'sometimes|required',

        ]);

        if ($rules->fails()) {
            return JsonResponse::fail($rules->errors()->first(), 400);
        }

        $restaurant = Restaurant::where('id', $id)->first();





        $restaurant->update($request->only([

            'name_en',
            'name_ar',
            'website',
            'about_ar',
            'about_en',
            'status',
            'mobile',
            'note_ar',
            'note_en',
        ]));


        $restaurant = Restaurant::where('id', $id)->first();

        return response()->json($restaurant);
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
}
