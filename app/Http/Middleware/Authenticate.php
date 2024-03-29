<?php

namespace App\Http\Middleware;

use App\Helpers\JsonResponse;
use Illuminate\Auth\Middleware\Authenticate as Middleware;

class Authenticate extends Middleware
{
    /**
     * Get the path the user should be redirected to when they are not authenticated.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    protected function redirectTo($request)
    {


        if (! $request->expectsJson()) {
            //return route('login');
            return JsonResponse::fail('Credentials not match', 401);
        }
    }
    protected function unauthenticated($request, array $guards)
    {
        return JsonResponse::fail('Credentials not match', 401);

    }
}
