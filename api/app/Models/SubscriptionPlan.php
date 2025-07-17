<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class SubscriptionPlan extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'subscription_product_id',
        'is_active',
        'frequency',
        'stripe_id',
        'name',
        'description',
        'price',
    ];

    protected $casts = [
        'is_active' => 'boolean',
        'price' => 'float',
    ];

    public function product()
    {
        return $this->belongsTo(SubscriptionProduct::class, 'subscription_product_id');
    }
}
