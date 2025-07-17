<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers;
use App\Http\Middleware\SearchableIndex;

Route::post('login', [Controllers\AuthController::class, 'login']);
Route::post('register', [Controllers\AuthController::class, 'register']);
Route::post('recover-password', [Controllers\AuthController::class, 'recoverPassword']);
Route::post('reset-password', [Controllers\AuthController::class, 'resetPassword'])->name('password.reset');

Route::middleware('auth:sanctum')->group(function () {
    Route::get('select-options/{model}', [Controllers\SelectController::class, 'selectOptions'])->name('select.options');

    Route::group(['prefix' => 'me'], function () {
        Route::get('', [Controllers\AuthController::class, 'getProfile']);
        Route::put('', [Controllers\AuthController::class, 'updateProfile']);
        Route::post('update-password', [Controllers\AuthController::class, 'updatePassword']);
    });

    Route::group(['prefix' => 'genres', 'as' => 'genres.'], function () {
        Route::get('', [Controllers\GenreController::class, 'index'])->name('index')->middleware(['can:genres_index', SearchableIndex::class . ':Genre']);
        Route::post('', [Controllers\GenreController::class, 'store'])->name('store')->middleware('can:genres_store');
        Route::get('{genre}', [Controllers\GenreController::class, 'show'])->name('show')->middleware('can:genres_show');
        Route::put('{genre}', [Controllers\GenreController::class, 'update'])->name('update')->middleware('can:genres_update');
        Route::delete('{genre}', [Controllers\GenreController::class, 'destroy'])->name('destroy')->middleware('can:genres_destroy');
    });

    Route::group(['prefix' => 'stories', 'as' => 'stories.'], function () {
        Route::get('', [Controllers\StoryController::class, 'index'])->name('index')->middleware(['can:stories_index', SearchableIndex::class . ':Story']);
        Route::post('', [Controllers\StoryController::class, 'store'])->name('store')->middleware('can:stories_store');
        Route::get('{story}', [Controllers\StoryController::class, 'show'])->name('show')->middleware('can:stories_show');
        Route::put('{story}', [Controllers\StoryController::class, 'update'])->name('update')->middleware('can:stories_update');
        Route::delete('{story}', [Controllers\StoryController::class, 'destroy'])->name('destroy')->middleware('can:stories_destroy');
    });

    Route::group(['prefix' => 'users', 'as' => 'users.'], function () {
        Route::get('', [Controllers\UserController::class, 'index'])->name('index')->middleware(['can:users_index', SearchableIndex::class . ':User']);
        Route::post('', [Controllers\UserController::class, 'store'])->name('store')->middleware('can:users_store');
        Route::get('{user}', [Controllers\UserController::class, 'show'])->name('show')->middleware('can:users_show');
        Route::put('{user}', [Controllers\UserController::class, 'update'])->name('update')->middleware('can:users_update');
        Route::delete('{user}', [Controllers\UserController::class, 'destroy'])->name('destroy')->middleware('can:users_destroy');
    });

    Route::group(['prefix' => 'subscription_plans', 'as' => 'subscription_plans.'], function () {
        Route::get('', [Controllers\SubscriptionPlanController::class, 'index'])->name('index')->middleware(['can:subscription_plans_index', SearchableIndex::class . ':SubscriptionPlan']);
        Route::post('', [Controllers\SubscriptionPlanController::class, 'store'])->name('store')->middleware('can:subscription_plans_store');
        Route::get('{subscription_plan}', [Controllers\SubscriptionPlanController::class, 'show'])->name('show')->middleware('can:subscription_plans_show');
        Route::put('{subscription_plan}', [Controllers\SubscriptionPlanController::class, 'update'])->name('update')->middleware('can:subscription_plans_update');
        Route::delete('{subscription_plan}', [Controllers\SubscriptionPlanController::class, 'destroy'])->name('destroy')->middleware('can:subscription_plans_destroy');
    });


    Route::post('logout', [Controllers\AuthController::class, 'logout']);
});
