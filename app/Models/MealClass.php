<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class MealClass extends Model
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

    protected $table='meals_class';
    protected $fillable = [
        'restaurant_id',
        'manager_id',
        'staff_id',
        'name_ar',
        'name_en',
        'description_ar',
        'description_en',
        'status',



    ];
    protected $appends = ['description','name'];





    public function Restaurant()
    {
        return $this->hasOne(Restaurant::class,'id', 'restaurant_id');
    }
    public function getNameAttribute()
    {
        $locale = 'ar';
        if (app()->getLocale()) {
            $locale = app()->getLocale();

        }

        $colum_name = 'name_' . $locale;
        return $this->$colum_name;
    }
    public function getDescriptionAttribute()
    {
        $locale = 'ar';
        if (app()->getLocale()) {
            $locale = app()->getLocale();

        }

        $colum_name = 'description_' . $locale;
        return $this->$colum_name;
    }


}
