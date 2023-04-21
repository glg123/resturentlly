<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Plan extends Model
{

    use SoftDeletes;


    /**
     * The attributes that are guarded from  mass assignable.
     *
     * @var array
     */
    // protected $connection = 'customer';

    protected $table = 'plans';

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
        'name_ar',
        'name_en',
        'description_ar',
        'description_en',
        'logo',
        'price',
        'type',
        'count_emp',
        'count_branch',
        'count_interval',
        'status',
        'is_popular',



    ];
    protected $appends = ['name','description'];


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

    public function getLogoAttribute($value)
    {

        if ($value) {


            return \Storage::disk('Plan')->url($value);
        }
        return $value;

    }

}
