<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class UserMealOrder extends Model
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

    protected $table = 'user_meal_orders';
    protected $fillable = [
        'restaurant_id',
        'meal_id',
        'user_id',
        'staff_id',
        'price',
        'discount',
        'total_price',
        'type_order',
        'status',
        'rate',
        'note',


    ];
    protected $with = ['RestaurantRate'];


    public function Restaurant()
    {
        return $this->hasOne(Restaurant::class, 'id', 'restaurant_id');
    }

    public function RestaurantRate()
    {
        return $this->hasOne(RestaurantRate::class, 'order_id');
    }

    public function Customer()
    {
        return $this->belongsTo(Customer::class, 'user_id', 'id');
    }

    public function Staff()
    {
        return $this->belongsTo(User::class, 'staff_id', 'id');
    }

    public function Meal()
    {
        return $this->hasOne(Meal::class, 'id', 'meal_id');
    }
}
