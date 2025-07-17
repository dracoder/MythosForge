<?php

namespace Database\Seeders;

use App\Models\SubscriptionPlan;
use App\Models\SubscriptionProduct;
use App\Repositories\SubscriptionPlanRepository;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class SubscriptionPlanTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $products = [
            [
                'name' => config('cashier.types.recurring'),
                'plans' => [
                    [
                        'name' => 'Basic',
                        'interval' => 'month',
                        'price' => 12.00,
                        'description' => 'Ideal to starter players',
                        'features' => [
                            "Unlimited stories",
                            "Full access",
                            "Multi-user account",
                            "Images Feature",
                            "Shareable stories",
                        ],
                    ],
                    [
                        'name' => 'Basic',
                        'interval' => 'year',
                        'price' => 120.00,
                        'description' => 'Ideal to starter players',
                        'features' => [
                            "Unlimited stories",
                            "Full access",
                            "Multi-user account",
                            "Images Feature",
                            "Shareable stories",
                        ],
                    ],
                    [
                        'name' => 'Premium',
                        'interval' => 'month',
                        'interval_count' => 1,
                        'price' => 28.00,
                        'description' => 'Ideal to experienced players',
                        'features' => [
                            "Unlimited stories",
                            "Full access",
                            "Multi-user account",
                            "Images Feature",
                            "Shareable stories",
                        ],
                    ],
                    [
                        'name' => 'Premium',
                        'interval' => 'year',
                        'interval_count' => 1,
                        'price' => 280.00,
                        'description' => 'Ideal to experienced players',
                        'features' => [
                            "Unlimited stories",
                            "Full access",
                            "Multi-user account",
                            "Images Feature",
                            "Shareable stories",
                        ],
                    ]
                ]
            ],
            [
                'name' => config('cashier.types.one-time'),
                'plans' => [
                    [
                        'name' => 'Silver Battery',
                        'interval' => 'one-time',
                        'price' => 7.50,
                        'description' => 'Silver MythosForge Battery',
                        'features' => [
                            "Small size battery pack",
                        ],
                    ]
                ]
            ]
        ];

        $stripe = new  \Stripe\StripeClient(config('cashier.secret'));
        foreach ($products as $product) {
            $subscriptionProduct = null;
            foreach ($stripe->products->all() as $stripe_product) {
                // this product already exists in STRIPE
                if ($stripe_product->name == $product['name']) {
                    $stripeProduct = $stripe_product;
                    // checking if this product already exists in our database
                    $subscriptionProduct = SubscriptionProduct::where('stripe_id', $stripeProduct->id)->first();
                    if (!$subscriptionProduct) { // if not, create it
                        $subscriptionProduct = SubscriptionProduct::create([
                            'name' => $product['name'],
                            'key' => Str::slug($product['name'], '_'),
                            'stripe_id' => $stripeProduct->id,
                        ]);
                    }
                }
            }
            // this product does not exist in STRIPE
            if (!$subscriptionProduct) {
                $stripeProduct = $stripe->products->create([
                    'name' => $product['name']
                ]);
                $subscriptionProduct = SubscriptionProduct::create([
                    'name' => $product['name'],
                    'key' => Str::slug($product['name'], '_'),
                    'stripe_id' => $stripeProduct->id,
                ]);
            }

            foreach ($product['plans'] as $plan) {
                // check if this plan already exists in our database
                $subscriptionPlan = null;

                // this plan does not exist in STRIPE
                $subscriptionPlan = SubscriptionPlan::query()
                    ->where('name', $plan['name'])
                    ->where('frequency', $plan['interval'] == 'one-time' ? 'one-time' : $plan['interval'] . 'ly')
                    ->where('subscription_product_id', $subscriptionProduct->id)
                    ->first();
                if (!$subscriptionPlan) {
                    $repository = new SubscriptionPlanRepository();
                    $repository->store([
                        ...$plan,
                        'subscription_product' => $subscriptionProduct
                    ]);
                }
            }
        }
    }
}
