<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class RestaurantWorkDay extends Model
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
        'work_day_id',



    ];
    public function restaurant()
    {
        return $this->belongsTo(Restaurant::class,'restaurant_id');
    }
    public function work_day()
    {
        return $this->belongsTo(WorkDay::class,'work_day_id');
    }

}
