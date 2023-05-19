<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class RestaurantRateResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'price_rate' => $this->price_rate,
            'service_rate' => $this->service_rate,
            'value_rate' => $this->value_rate,
            'food_rate' => $this->food_rate,
            'total_rate' => $this->total_rate,
            'user_id' => $this->user_id,

            'user_name' => @$this->Owner->first_name,
            'note' => $this->note,

        ];
    }
}
