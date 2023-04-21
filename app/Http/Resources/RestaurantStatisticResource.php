<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class RestaurantStatisticResource extends JsonResource
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
            'restaurant_id'=>$this->restaurant_id ,
            'price_range'=>$this->price_range ,
            'star_rating'=>$this->star_rating ,
            'avg_food'=>$this->avg_food ,
            'avg_ambience'=>$this->avg_ambience ,
            'avg_service'=>$this->avg_service ,
            'avg_value'=>$this->avg_value ,
            'price_rating'=>$this->price_rating ,
            'children_admitted'=>$this->children_admitted ,
            'animal_admitted'=>$this->animal_admitted ,
            'age_allowed'=>$this->age_allowed ,
            'total_invoices'=>$this->total_invoices ,
            'paid_invoices'=>$this->paid_invoices ,
            'unpaid_invoices'=>$this->unpaid_invoices ,
            'booking_covers'=>$this->booking_covers ,
            'count_branch'=>$this->count_branch ,
            'hours_operation'=>$this->hours_operation ,
            'quoted_wait_time'=>$this->quoted_wait_time ,
            'count_emp'=>$this->count_emp ,
            'reviews_count'=>$this->reviews_count ,
            'today_booking_count'=>$this->today_booking_count ,
            'booking_fee'=>$this->booking_fee ,
            'status'=>$this->status ,

        ];
    }
}
