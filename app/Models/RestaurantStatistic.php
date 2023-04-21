<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class RestaurantStatistic extends Model
{

    use SoftDeletes;


    /**
     * The attributes that are guarded from  mass assignable.
     *
     * @var array
     */
    // protected $connection = 'customer';


    public function setDateAttribute($value)
    {
        $this->attributes['date'] = (new Carbon($value))->format('Y-m-d h:i:s');
    }

    protected $casts = [
        'created_at' => 'datetime:Y-m-d h:i:s',
        'updated_at' => 'datetime:Y-m-d h:i:s',
        'deleted_at' => 'datetime:Y-m-d h:i:s',

    ];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'restaurant_id',
        'price_range',
        'star_rating',
        'avg_food',
        'avg_ambience',
        'avg_service',
        'avg_value',
        'price_rating',
        'children_admitted',
        'animal_admitted',
        'age_allowed',
        'total_invoices',
        'paid_invoices',
        'unpaid_invoices',
        'booking_covers',
        'count_branch',
        'hours_operation',
        'quoted_wait_time',
        'count_emp',
        'reviews_count',
        'today_booking_count',
        'booking_fee',
        'status',


    ];


}
