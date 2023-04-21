<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class UserRole extends Model
{

    use SoftDeletes;


    /**
     * The attributes that are guarded from  mass assignable.
     *
     * @var array
     */
    // protected $connection = 'customer';

    protected $table = 'user_roles';

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
        'role_name_en',
        'role_name_ar',
        'status',


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

    public function UserRolePermissions()
    {
        return $this->hasOne(UserRolePermission::class, 'role_id');
    }

}
