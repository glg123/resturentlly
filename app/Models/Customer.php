<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;

class Customer extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, HasRoles;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $table = 'users';
    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'password',
        'api_token',
        'confirmation_code',
        'status',
        'confirmation_password_code',
        'role',
        'type',
        'avatar',
        'mobile',
        'manager_id',
        'user_role_id',
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



    public function userMealOrder()
    {
        return $this->hasMany(UserMealOrder::class, 'user_id');
    }





    public function Userabilitie()
    {
        return $this->hasOne(UserRole::class, 'id', 'user_role_id',);
    }

    public function getAvatarAttribute($value)
    {

        if ($value) {


            return \Storage::disk('User')->url($value);
        }
        return $value;

    }
}
