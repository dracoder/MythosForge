<?php

namespace App\Http\Requests;

use App\Http\Requests\BaseRequest;
use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends BaseRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string',
            'email' => $this->route('user') ? 'required|email|unique:users,email,' . $this->route('user')->id : 'required|email|unique:users,email',
            'password' => $this->route('user') ? 'nullable' : 'required|string',
            'role' => 'required|in:super-admin,admin,user',
        ];
    }
}
