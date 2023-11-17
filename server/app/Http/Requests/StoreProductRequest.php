<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreProductRequest extends FormRequest {
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool {
        // only allow when user is admin
        $user = $this->user();
        if ($user && $user->role == 'admin') {
            return true;
        }
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array {
        return [
            'name' => 'required',
            'price' => 'required',
            'image' => 'mimes:jpeg,png,jpg,gif,svg,avif,webp|max:2048',
            'rating' => 'required',
        ];
    }
}
