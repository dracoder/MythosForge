<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class UserBattery extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'user_id',
        'total_tokens',
        'used_tokens',
        'remaining_tokens',
        'fully_used',
    ];

    protected $casts = [
        'fully_used' => 'boolean',
    ];

    public function scopeNotFullyUsed($query)
    {
        return $query->where('fully_used', false);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
