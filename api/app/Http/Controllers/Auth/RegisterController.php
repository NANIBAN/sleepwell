<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Http\Requests\Auth\RegisterRequest;

class RegisterController extends Controller
{
    public function store(RegisterRequest $request)
    {
        $user = User::registerUser($request);

        $token = $user->createToken('access-token')->plainTextToken;

        return response()->json([
            'user' => new UserResource(User::findOrFail($user->id)),
            'token' => $token
        ]);
    }
}
