<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class ClientResource extends JsonResource
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
            'full_name'   => $this->first_name.' '.$this->last_name,
            'type'   => $this->type,
            'role'   => $this->role,
            'status'   => $this->status,
            'avatar'   => $this->avatar,
            'mobile'   => $this->mobile,

            'created_at' => @$this->created_at->format('Y-m-d'),

           'RestaurantStatistic'   => (RestaurantStatisticResource::collection([$this->RestaurantStatistic])[0]),



        ];
    }
}
