<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class City extends Model
{

    use SoftDeletes;


    /**
     * The attributes that are guarded from  mass assignable.
     *
     * @var array
     */
    // protected $connection = 'customer';

    protected $table = 'cities';

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
        'name',
        'state_id',
        'state_code',
        'country_id',
        'country_code',
        'latitude',
        'longitude',
        'longitude',
        'flag',
        'wikiDataId',


    ];
    protected $appends = ['state_name','country_name'];




    public function State()
    {
        return $this->hasOne(State::class,'id' ,'state_id');
    }
    public function Country()
    {
        return $this->hasOne(Country::class,'id', 'country_id');
    }
    public function getCountryNameAttribute()
    {


        return @$this->Country->name;
    }
    public function getStateNameAttribute()
    {


        return @$this->State->name;
    }


}
