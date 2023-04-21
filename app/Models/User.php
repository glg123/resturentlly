<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, HasRoles;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'password',
        'api_token',
        'role',
        'type',
        'avatar',
        'mobile',
        'manager_id',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
    protected $appends = ['userAbilities'];

    public function getuserAbilitiesAttribute()
    {


        return [
           array('action' => 'manage',
               'subject' => 'all'),
            array('action' => 'manage',
                'subject' => 'all')



        ];

    }

    public function Restaurants_Owner()
    {
        return $this->hasMany(Restaurant::class, 'owner_id')->where('role','manager');
    }
    public function Restaurants_Maneger()
    {
        return $this->hasOne(Restaurant::class, 'manager_id')->where('role','staff');
    }
    public function Userabilitie()
    {
        return $this->hasOne(UserRole::class, 'id','user_role_id',);
    }
    public function getAvatarAttribute($value)
    {

        if ($value) {


            return \Storage::disk('Admin')->url($value);
        }
        return $value;

    }
}
