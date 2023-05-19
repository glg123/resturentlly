<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class UserMealOrderResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id'    => $this->id ,
            'meal_id'   => $this->meal_id,
            'restaurant_id'   => $this->restaurant_id,
            'staff_id'   => $this->staff_id,
            'meal_name'   => $this->Meal->name,
            'restaurant_name'   => $this->Restaurant->name,
            'restaurant_mobile'   => $this->Restaurant->mobile,
            'staff_name'   => @$this->Staff->first_name.' '.@$this->Staff->last_name,
            'price'   => $this->price,
            'discount'   => $this->discount,
            'total_price'   => $this->total_price,
            'type_order'   => $this->type_order,
            'type_order_name'   => __('views.'.$this->type_order),
            'status'   => $this->status,
            'meal_avatar'   => @$this->Meal->avatar,
            'have_rate'   => @$this->RestaurantRate->id,





        ];
    }
}
