<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Restaurant extends Model
{

    use SoftDeletes;


    /**
     * The attributes that are guarded from  mass assignable.
     *
     * @var array
     */
    // protected $connection = 'customer';

    protected $table = 'restaurants';

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
        'name_en',
        'name_ar',
        'website',
        'city_id',
        'about_ar',
        'about_en',
        'status',
        'state_id',
        'country_id',
        'avatar',
        'mobile',
        'note_ar',
        'note_en',
        'facebook',
        'twitter',
        'instagram',
        'dress_code_ar',
        'dress_code_en',
        'is_hidden',
        'signature',
        'day_start_hour',
        'day_end_hour',
        'days',
        'manager_id',


        'style_food_en',
        'style_food_ar',
        'address_ar',
        'address_en',
        'owner_id',
        'type',
        'count_emp',
        'parent_id',
    ];


    protected $appends = [
        'state_name',
        'country_name',
        'city_name',
        'name',
        'owner_name',
        'maneger_name',
    ];
    protected $with = ['RestaurantStatistic'];

    public function getNameAttribute()
    {
        $locale = 'ar';
        if (app()->getLocale()) {
            $locale = app()->getLocale();

        }

        $colum_name = 'name_' . $locale;
        return $this->$colum_name;
    }

    public function State()
    {
        return $this->hasOne(State::class, 'id', 'state_id');
    }

    public function Country()
    {
        return $this->hasOne(Country::class, 'id', 'country_id');
    }

    public function City()
    {
        return $this->hasOne(City::class, 'id', 'city_id');
    }

    public function Owner()
    {
        return $this->hasOne(User::class, 'id', 'owner_id');
    }

    public function Maneger()
    {
        return $this->hasOne(User::class, 'id', 'manager_id');
    }

    public function getCountryNameAttribute()
    {


        return @$this->Country->name;
    }

    public function getStateNameAttribute()
    {


        return @$this->State->name;
    }

    public function getCityNameAttribute()
    {


        return @$this->City->name;
    }

    public function getOwnerNameAttribute()
    {


        return @$this->Owner->first_name . ' ' . @$this->Owner->last_name;
    }

    public function getManegerNameAttribute()
    {


        return @$this->Maneger->first_name . ' ' . @$this->Maneger->last_name;
    }

    public function getAvatarAttribute($value)
    {

        if ($value) {


            return \Storage::disk('Rest')->url($value);
        }
        return $value;

    }


    public function RestaurantService()
    {
        return $this->hasMany(RestaurantService::class, 'restaurant_id');
    }

    public function RestaurantStatistic()
    {
        return $this->hasOne(RestaurantStatistic::class, 'restaurant_id');
    }

    public function RestaurantRate()
    {
        return $this->hasMany(RestaurantRate::class, 'restaurant_id');
    }

    public function Branch()
    {
        return $this->hasMany(Restaurant::class, 'parent_id');
    }


}
