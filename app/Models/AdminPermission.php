<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class AdminPermission extends Model
{

    use SoftDeletes;

    protected $table='admins_permissions';

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
        'title_ar',
        'title_en',
        'slug',
        'status',


    ];
    protected $appends = ['title'];

    public function getTitleAttribute()
    {
        $locale = 'ar';
        if (app()->getLocale()) {
            $locale =app()->getLocale();

        }

        $colum_name = 'title_' . $locale;
        return $this->$colum_name;
    }



}
