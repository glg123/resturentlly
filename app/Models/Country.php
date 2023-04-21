<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Country extends Model
{

    use SoftDeletes;


    /**
     * The attributes that are guarded from  mass assignable.
     *
     * @var array
     */
    // protected $connection = 'customer';

    protected $table = 'countries';

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
        'fips_code',
        'numeric_code',
        'phonecode',
        'capital',
        'currency',
        'currency_name',
        'currency_symbol',
        'tld',
        'native',
        'region',
        'subregion',
        'timezones',
        'translations',
        'emoji',
        'emojiU',
        'iso3',
        'iso2',
        'type',
        'country_id',
        'country_code',
        'latitude',
        'longitude',
        'longitude',
        'flag',
        'wikiDataId',


    ];
    protected $appends = ['role_name'];
    protected $with=['RolePermissions'];

    public function getRoleNameAttribute()
    {
        $locale = 'ar';
        if (app()->getLocale()) {
            $locale = app()->getLocale();

        }

        $colum_name = 'role_name_' . $locale;
        return $this->$colum_name;
    }

    public function RolePermissions()
    {
        return $this->hasOne(RolePermission::class, 'role_id');
    }

}
