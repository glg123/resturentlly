<?php

namespace App\Models;

use Carbon\Carbon;
use DateTime;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class PlanOrder extends Model
{

    use SoftDeletes;


    /**
     * The attributes that are guarded from  mass assignable.
     *
     * @var array
     */
    // protected $connection = 'customer';

    protected $table = 'plan_orders';

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
        'cardNumber',
        'cardHolder',
        'monthSelection',
        'yearSelection',
        'cvv',
        'plan_id',
        'user_id',
        'start_date',
        'end_date',
        'count_emp',
        'count_branch',
        'count_branch_remain',
        'count_emp_remain',
        'card_type',
        'status',
        'price',


    ];
    protected $with = ['plan'];
    protected $appends = ['diff_days','diff_days_plan'];

    public function plan()
    {
        return $this->belongsTo(Plan::class, 'plan_id');
    }

    public function getDiffDaysAttribute()
    {
        $origin = date_create(date('Y-m-d'));
        $target = date_create($this->end_date);
        $interval = date_diff($origin, $target);
        //  echo $interval->format('%R%a days');
        $days = $interval->format('%a');
        return $days;
    }
    public function getDiffDaysPlanAttribute()
    {
        $origin = date_create($this->start_date);
        $target = date_create($this->end_date);
        $interval = date_diff($origin, $target);
        //  echo $interval->format('%R%a days');
        $days = $interval->format('%a');
        return $days;
    }
}
