<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;

class Admin extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, HasRoles;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'mobile',
        'password',
        'api_token',
        'role',
        'avatar',
        'status',
        'admin_role_id',
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
  //  protected $appends = ['adminAbilities'];

    public function getadminAbilitiesAttribute()
    {

        $Adminabilitie = Adminabilitie::where('admin_id', $this->id)->first();

        return $Adminabilitie->abilities;
        if ($Adminabilitie) {
            return $Adminabilitie->value('abilities');
        }

        return null;

    }

   /* public function Adminabilitie()
    {
        return $this->hasOne(Adminabilitie::class, 'admin_id');
    }*/

    public function Adminabilitie()
    {
        return $this->hasOne(AdminRole::class, 'id','admin_role_id',);
    }
    public function getAvatarAttribute($value)
    {

        if ($value) {


            return \Storage::disk('Admin')->url($value);
        }
        return $value;

    }
}
