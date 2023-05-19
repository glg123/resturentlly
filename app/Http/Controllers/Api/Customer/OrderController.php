<?php

namespace App\Http\Controllers\Api\Customer;

use App\Helpers\JsonResponse;
use App\Http\Controllers\Controller;
use App\Http\Middleware\Customer;
use App\Http\Resources\UserMealOrderResource;
use App\Models\Admin;
use App\Models\AdminPermission;
use App\Models\AdminRole;
use App\Models\RestaurantRate;
use App\Models\RolePermission;
use App\Models\Setting;
use App\Models\UserMealOrder;
use Auth;
use App\Models\User;
use Illuminate\Support\Facades\Storage;
use Validator;
use Illuminate\Http\Request;

class OrderController extends Controller
{

    public function myOrders(Request $request)
    {


        //dd($request->header());
        if (!$request->user()) {
            //return JsonResponse::fail('Credentials not match', 401);
            //  return response()->error(__('views.not authorized'));
            //return JsonResponse::fail(__('views.not authorized'));
            return JsonResponse::fail(__('views.not authorized'), 400);
        }
        try {
            $user = $request->user();

            $user = \App\Models\Customer::where('id', $user->id)
                ->first();
            $orders = $user->userMealOrder()->paginate();


            $orders = UserMealOrderResource::collection($orders)->response()->getData(true);

            // $orders = UserMealOrderResource::collection($orders);
            return response()->json($orders);
            //  return response()->success(__('views.User Profile'), $user);
        } catch (\Exception $e) {
            return JsonResponse::fail($e->getMessage(), 400);

        };


    }

    public function singleOrder(Request $request, $id)
    {


        //dd($request->header());
        if (!$request->user()) {
            //return JsonResponse::fail('Credentials not match', 401);
            //  return response()->error(__('views.not authorized'));
            //return JsonResponse::fail(__('views.not authorized'));
            return JsonResponse::fail(__('views.not authorized'), 400);
        }
        try {
            $user = $request->user();

            $user = \App\Models\Customer::where('id', $user->id)
                ->first();
            $order = $user->userMealOrder()->where('id', $id)->first();



            $order = UserMealOrderResource::collection([$order]);

            // $orders = UserMealOrderResource::collection($orders);
            return response()->json($order[0]);
            //  return response()->success(__('views.User Profile'), $user);
        } catch (\Exception $e) {
            return JsonResponse::fail($e->getMessage(), 400);

        };


    }


    public function sendRate(Request $request)
    {
        //dd($request->header());
        if (!$request->user()) {
            //return JsonResponse::fail('Credentials not match', 401);
            //  return response()->error(__('views.not authorized'));
            //return JsonResponse::fail(__('views.not authorized'));
            return JsonResponse::fail(__('views.not authorized'), 400);
        }
        try {
            $user = $request->user();

            $user = \App\Models\Customer::where('id', $user->id)
                ->first();
            $rules = Validator::make($request->all(), [


                'order_id' => 'required|exists:user_meal_orders,id',
                'price_rate' => 'required',
                'service_rate' => 'required',
                'food_rate' => 'required',
                'note' => 'sometimes|required',


            ]);

            if ($rules->fails()) {
                return JsonResponse::fail($rules->errors()->first(), 400);
            }


            $total_rate = ($request->get('price_rate') + $request->get('food_rate')) / 3;

            $user_order = UserMealOrder::find($request->get('order_id'));

            $request->merge([

                'total_rate' => $total_rate,
                'user_id' => $user->id,
                'restaurant_id' => $user_order ? $user_order->restaurant_id : null,

            ]);


            $rate = RestaurantRate::create($request->only([
                'restaurant_id',
                'price_rate',
                'service_rate',
                'order_id',
                'food_rate',
                'total_rate',
                'note',
                'user_id',

            ]));


            $rate =RestaurantRate::find($rate->id);

            return JsonResponse::success($rate, __("views.Done"));

            //  return response()->json($user);
            //  return response()->success(__('views.User Profile'), $user);
        } catch (\Exception $e) {
            return JsonResponse::fail($e->getMessage(), 400);

        }

    }


}
