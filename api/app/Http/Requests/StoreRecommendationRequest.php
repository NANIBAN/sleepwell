<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreRecommendationRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'main_choice_id' => 'required|numeric',
            'recommendation' => 'required|string',
            'like' => 'nullable|boolean',
            'dislike' => 'nullable|boolean'
        ];
    }
}
