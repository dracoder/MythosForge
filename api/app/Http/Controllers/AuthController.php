<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests;
use App\Http\Resources\ProfileResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Illuminate\Validation\Rules\Password as RulesPassword;

class AuthController extends Controller
{
    public function login(Requests\Auth\LoginRequest $request)
    {
        $credentials = $request->only(['email', 'password']);

        if (!Auth::attempt($credentials)) {
            return $this->response(false, [], __('messages.invalid_credentials'), 401);
        }
        $user = Auth::user();
        $token = $user->createToken('auth_token')->plainTextToken;
        $data = [
            'user' => $user,
            'token' => $token,
        ];
        return $this->response(true, $data, __('messages.login_successfully'));
    }

    public function logout(Request $request)
    {
        $user = $request->user();

        DB::table('personal_access_tokens')->where('tokenable_id', $user->id)->delete();
        DB::table('sessions')->where('user_id', $user->id)->delete();

        return $this->response(true, [], __('messages.logout_success'));
    }

    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|min:8',
        ]);
        $data = $request->all();
        $data['password'] = bcrypt($request->password);

        $user = User::create($data);

        Auth::attempt($request->only(['email', 'password']));

        $user = Auth::user();

        $user->assignRole('user');

        $token = $user->createToken('auth_token')->plainTextToken;
        $data = [
            'user' => $user,
            'token' => $token,
        ];
        return $this->response(true, $data, __('messages.model_action.create_success', ['attribute' => __('messages.profile')]));
    }

    public function recoverPassword(Request $request)
    {
        $request->validate(['email' => 'required|email']);
        $status = Password::sendResetLink(
            $request->only('email')
        );
        return $status === Password::RESET_LINK_SENT
            ? $this->response(true, [], __($status))
            : $this->response(false, [], __($status), 400);
    }

    public function resetPassword(Request $request)
    {
        $request->validate([
            'token' => 'required',
            'email' => 'required|email',
            'password' => 'required|confirmed|min:8',
        ]);


        $status = Password::reset(
            $request->only('email', 'password', 'password_confirmation', 'token'),
            function ($user, $password) {
                $user->forceFill([
                    'password' => bcrypt($password),
                ])->save();
            }
        );
        return $status == Password::PASSWORD_RESET
            ? $this->response(true, [], __($status))
            : $this->response(false, [], __($status), 400);
    }

    ##
    ## Authenticated
    ##

    public function getProfile(Request $request)
    {
        try {
            $user = $request->user();
            $data = new ProfileResource($user);
            return  $this->response(true, $data, __('messages.user_details'));
        } catch (\Throwable $e) {
            log_error($e);
            return  $this->response(false, [], $e->getMessage());
        }
    }

    public function updateProfile(Requests\Auth\ProfileRequest $request)
    {
        try {
            $user = $request->user();
            $data = $request->all();

            $user->update($data);

            $data = array(
                'user' => new ProfileResource($user),
            );
            return  $this->response(true, $data, __('messages.model_action.update_success', ['attribute' => __('messages.profile')]));
        } catch (\Throwable $e) {
            log_error($e);
            return  $this->response(false, [], $e->getMessage());
        }
    }

    /**
     * Update the user's password.
     */
    public function updatePassword(Request $request)
    {
        $validated = $request->validate([
            'current_password' => ['required', 'current_password'],
            'password' => ['required', RulesPassword::defaults(), 'confirmed'],
        ]);

        $request->user()->update([
            'password' => Hash::make($validated['password']),
        ]);

        return $this->response(true, [], __('messages.model_action.update_success', ['attribute' => __('messages.password')]));
    }
}
