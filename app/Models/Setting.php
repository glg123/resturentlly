<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Setting extends Model
{

    use SoftDeletes;

    protected $table = 'settings';
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
        'abilities' => 'json'
    ];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'slider_title_ar',
        'slider_title_en',
        'slider_description_ar',
        'slider_description_en',
        'slider_back_img',
        'slider_front_img',

    ];
    protected $appends = ['title', 'description','about_us'];

    public function getTitleAttribute()
    {
        $locale = 'ar';
        if (app()->getLocale()) {
            $locale =app()->getLocale();

        }

        $colum_name = 'slider_title_' . $locale;
        return $this->$colum_name;
    }

    public function getDescriptionAttribute()
    {
        $locale = 'ar';
        if (app()->getLocale()) {
            $locale =app()->getLocale();

        }

        $colum_name = 'slider_description_' . $locale;
        return $this->$colum_name;
    }
    public function getAboutUsAttribute()
    {
        $locale = 'ar';
        if (app()->getLocale()) {
            $locale =app()->getLocale();

        }

        $colum_name = 'about_us_' . $locale;
        return $this->$colum_name;
    }

    public function getSliderFrontImgAttribute($value)
    {

        if ($value) {


            return \Storage::disk('setting')->url($value);
        }
        return $value;

    }
    public function getSliderBackImgAttribute($value)
    {

        if ($value) {


            return \Storage::disk('setting')->url($value);
        }
        return $value;

    }
}
