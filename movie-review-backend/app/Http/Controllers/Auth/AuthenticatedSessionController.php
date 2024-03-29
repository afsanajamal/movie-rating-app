<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class AuthenticatedSessionController extends Controller
{
    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request): JsonResponse
    {
        $request->authenticate();

        // $request->session()->regenerate();

        $user = $request->user();

        $user->tokens()->delete();

        $token = $user->createToken('API Token of ' . $user->name);

        return response()->json([
            'user' => $user,
            'token' => $token->plainTextToken
        ]);
    }

    public function destroy(Request $request): Response
    {
        $user = $request->user();
    
        if ($user) {
            $user->currentAccessToken()->delete();
        }
    
        return response()->noContent();
    }
    
}
