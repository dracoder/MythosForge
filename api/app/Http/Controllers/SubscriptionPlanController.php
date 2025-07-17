<?php

namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Resources\SubscriptionPlanResource;
use App\Models\SubscriptionPlan;
use App\Models\SubscriptionProduct;
use App\Repositories\SubscriptionPlanRepository;
use Illuminate\Http\Request;

class SubscriptionPlanController extends Controller
{
    public function index(Request $request)
    {
        $subscription_plans = SubscriptionPlan::all();

        return $this->response(true, SubscriptionPlanResource::collection($subscription_plans), __('messages.model_action.retrieve_success', ['attribute' => __('messages.subscription_plans')]));
    }

    public function store(Requests\SubscriptionPlanRequest $request)
    {
        $data = $request->only(app(SubscriptionPlan::class)->getFillable());

        if ($request->input('frequency') === 'one-time') {
            $subscriptionProduct = SubscriptionProduct::where('name', config('cashier.types.one-time'))->first();
        } else {
            $subscriptionProduct = SubscriptionProduct::where('name', config('cashier.types.recurring'))->first();
        }

        $repository = new SubscriptionPlanRepository();
        $subscription_plan = $repository->store([
            ...$data,
            'subscription_product' => $subscriptionProduct
        ]);

        return $this->response(true, new SubscriptionPlanResource($subscription_plan), __('messages.model_action.create_success', ['attribute' => __('messages.subscription_plan')]));
    }

    public function show(Request $request, SubscriptionPlan $subscription_plan)
    {
        return $this->response(true, new SubscriptionPlanResource($subscription_plan), __('messages.model_action.retrieve_success', ['attribute' => __('messages.subscription_plan')]));
    }

    public function update(Requests\SubscriptionPlanRequest $request, SubscriptionPlan $subscription_plan)
    {
        $subscription_plan->fill($request->only(app(SubscriptionPlan::class)->getFillable()));

        $subscription_plan->save();

        $stripe = new  \Stripe\StripeClient(config('cashier.secret'));
        $stripe->plans->update($subscription_plan->stripe_id, [
            'nickname' => $subscription_plan->name
        ]);

        return $this->response(true, new SubscriptionPlanResource($subscription_plan), __('messages.model_action.update_success', ['attribute' => __('messages.subscription_plan')]));
    }

    public function destroy(Request $request, SubscriptionPlan $subscription_plan)
    {
        $stripe_id = $subscription_plan->stripe_id;

        $subscription_plan->delete();

        $stripe = new  \Stripe\StripeClient(config('cashier.secret'));
        $stripe->plans->delete($stripe_id);

        return $this->response(true, [], __('messages.model_action.delete_success', ['attribute' => __('messages.subscription_plan')]));
    }
}
