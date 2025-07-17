<?php

namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Resources\UserResource;
use App\Models\User;
use App\Repositories\UserRepository;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index(Request $request)
    {
        $users = User::all();

        return $this->response(true, UserResource::collection($users), __('messages.model_action.retrieve_success', ['attribute' => __('messages.users')]));
    }

    public function store(Requests\UserRequest $request)
    {
        $user = User::factory()->create($request->only(app(User::class)->getFillable()));

        $user->assignRole($request->input('role'));

        return $this->response(true, new UserResource($user), __('messages.model_action.create_success', ['attribute' => __('messages.user')]));
    }

    public function show(Request $request, User $user)
    {
        return $this->response(true, new UserResource($user), __('messages.model_action.retrieve_success', ['attribute' => __('messages.user')]));
    }

    public function update(Requests\UserRequest $request, User $user)
    {
        unset($request['password']);

        (new UserRepository($user))->switchRole($request->get('role', null));

        $user->fill($request->only(app(User::class)->getFillable()));

        $user->save();

        return $this->response(true, new UserResource($user), __('messages.model_action.update_success', ['attribute' => __('messages.user')]));
    }

    public function destroy(Request $request, User $user)
    {
        $user->delete();

        return $this->response(true, [], __('messages.model_action.delete_success', ['attribute' => __('messages.user')]));
    }
}
