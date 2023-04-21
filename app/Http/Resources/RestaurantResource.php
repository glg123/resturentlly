<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class RestaurantResource extends JsonResource
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
            'name'   => $this->name,
            'name_ar'   => $this->name_ar,
            'name_en'   => $this->name_en,
            'type'   => $this->type,
            'state_name'   => $this->state_name,
            'country_name'   => $this->country_name,
            'city_name'   => $this->city_name,
            'owner_id'   => $this->owner_id,
            'owner_name'   => $this->owner_name,
            'maneger_name'   => $this->owner_name,
            'website'   => $this->website,
            'about_ar'   => $this->about_ar,
            'about_en'   => $this->about_en,
            'status'   => $this->status,
            'avatar'   => $this->avatar,
            'mobile'   => $this->mobile,
            'facebook'   => $this->facebook,
            'twitter'   => $this->twitter,
            'instagram'   => $this->instagram,
            'dress_code_ar'   => $this->dress_code_ar,
            'dress_code_en'   => $this->dress_code_en,
            'company_sing'   => $this->company_sing,
            'site_situation'   => $this->site_situation,
            'signature'   => $this->signature,
            'day_start_hour'   => $this->day_start_hour,
            'day_end_hour'   => $this->day_end_hour,
            'style_food_en'   => $this->style_food_en,
            'style_food_ar'   => $this->style_food_ar,
            'note_ar'   => $this->note_ar,
            'note_en'   => $this->note_en,
            'address_ar'   => $this->address_ar,
            'address_en'   => $this->address_en,
            'created_at' => @$this->created_at->format('Y-m-d'),
           'RestaurantService'   => (RestaurantServiceResource::collection($this->RestaurantService)),
           'RestaurantStatistic'   => (RestaurantStatisticResource::collection([$this->RestaurantStatistic])[0]),
           'RestaurantRate'   => (RestaurantRateResource::collection($this->RestaurantRate)),
           'branch'   => $this->Branch()->get(),


        ];
    }
}
