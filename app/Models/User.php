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
        'confirmation_code',
        'status',
        'confirmation_password_code',
        'role',
        'type',
        'avatar',
        'mobile',
        'manager_id',
        'user_role_id',
        'count_emp',
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

    protected $appends = ['has_plan', 'my_plan_id','can_add_emp','can_add_bran'];


    public function Restaurants_Owner()
    {
        return $this->hasMany(Restaurant::class, 'owner_id')->where('role', 'manager');
    }

    public function Branches_Owner()
    {
        return $this->hasMany(User::class, 'manager_id');
    }

    public function Restaurants_Maneger()
    {
        return $this->belongsTo(Restaurant::class,'id','manager_id');
    }
    public function Branch()
    {
        return $this->belongsTo(Restaurant::class,'id','manager_id');
    }

    public function Userabilitie()
    {
        return $this->hasOne(UserRole::class, 'id', 'user_role_id',);
    }

    public function myPlan()
    {
        return $this->hasOne(PlanOrder::class, 'user_id')->where('plan_orders.status', 'active');
    }

    public function getAvatarAttribute($value)
    {

        if ($value) {


            return \Storage::disk('User')->url($value);
        }
        return $value;

    }


    public function getHasPlanAttribute()
    {

        if ($this->myPlan) {
            return 1;
        }
        return 0;
    }

    public function getMyPlanIdAttribute()
    {

        if ($this->myPlan) {
            return @$this->myPlan->plan_id;
        }
        return null;
    }


    public function getCanAddEmpAttribute()
    {

        if ($this->myPlan) {
            return @$this->myPlan->count_emp_remain>0;
        }
        return null;
    }
    public function getCanAddBranAttribute()
    {

        if ($this->myPlan) {
            return @$this->myPlan->count_branch_remain>0;
        }
        return null;
    }



}
