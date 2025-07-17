<?php

namespace App\Repositories;

use App\Models\SubscriptionPlan;
use App\Models\SubscriptionProduct;
use Stripe\StripeClient;

class SubscriptionPlanRepository extends BaseRepository
{
    protected $model;
    protected $stripe;

    public function __construct()
    {
        $this->model = new SubscriptionPlan();
        $this->stripe = new  StripeClient(config('cashier.secret'));
    }

    public function store($data)
    {
        $subscriptionProduct = $data['subscription_product'];
        unset($data['subscription_product']);
        if ((isset($data['frequency']) && $data['frequency'] === 'one-time') || (isset($data['interval']) && $data['interval'] === 'one-time')) {
            // create single-time-purchase product (batteries)
            $plan = SubscriptionPlan::create([
                'subscription_product_id' => $subscriptionProduct->id,
                'name' => $data['name'],
                'description' => $data['description'],
                'frequency' => 'one-time',
                'price' => $data['price'],
                'stripe_id' => '.',
            ]);
            $stripePlan = $this->stripe->prices->create([
                'product' => $subscriptionProduct->stripe_id,
                'unit_amount' => $data['price'] * 100,
                'currency' => config('cashier.currency'),
                'nickname' => $data['name'],
            ]);

            $plan->update([
                'stripe_id' => $stripePlan->id
            ]);

            return $plan;
        }

        $frequency = isset($data['interval']) ? ($data['interval'] . 'ly') : $data['frequency'];
        $interval = isset($data['interval']) ? $data['interval'] : str_replace('ly', '', $data['frequency']);

        $subscriptionPlan = SubscriptionPlan::create([
            'subscription_product_id' => $subscriptionProduct->id,
            'name' => $data['name'],
            'description' => $data['description'],
            'frequency' => $frequency,
            'price' => $data['price'],
            'stripe_id' => '.',
        ]);
        $plan = $this->stripe->plans->create([
            'product' => $subscriptionProduct->stripe_id,
            'nickname' => $data['name'],
            'interval' => $interval,
            'interval_count' => 1,
            'amount' => $data['price'] * 100,
            'currency' => config('cashier.currency'),
        ]);

        $subscriptionPlan->update([
            'stripe_id' => $plan->id
        ]);

        return $subscriptionPlan;
    }
}
