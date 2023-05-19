<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Meal extends Model
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

    protected $table='meals';
    protected $fillable = [
        'restaurant_id',
        'name_ar',
        'name_en',
        'description_ar',
        'description_en',
        'components_ar',
        'components_en',
        'category_id',
        'sub_category_id',
        'sub_sub_category_id',
        'maneger_id',
        'staff_id',
        'avatar',
        'price',
        'meal_class_id',
        'status',



    ];
    protected $appends = ['description','name','components'];





    public function Restaurant()
    {
        return $this->hasOne(Restaurant::class,'id', 'restaurant_id');
    }
    public function Category()
    {
        return $this->belongsTo(Category::class, 'category_id');
    }
    public function subCategory()
    {
        return $this->belongsTo(Category::class, 'sub_category_id','id');
    }
    public function subSubCategory()
    {
        return $this->belongsTo(SubCategory::class, 'sub_sub_category_id','id');
    }
    public function Maneger()
    {
        return $this->belongsTo(User::class, 'maneger_id','id');
    }
    public function Staff()
    {
        return $this->belongsTo(User::class, 'staff_id','id');
    }
    public function mealClass()
    {
        return $this->belongsTo(MealClass::class, 'meal_class_id','id');
    }
    public function getAvatarAttribute($value)
    {

        if ($value) {


            return \Storage::disk('Meal')->url($value);
        }
        return $value;

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
    public function getComponentsAttribute()
    {
        $locale = 'ar';
        if (app()->getLocale()) {
            $locale = app()->getLocale();

        }

        $colum_name = 'components_' . $locale;
        return $this->$colum_name;
    }



}
