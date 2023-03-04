<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as Middleware;

class VerifyCsrfToken extends Middleware
{
    /**
     * The URIs that should be excluded from CSRF verification.
     *
     * @var array<int, string>
     */
    protected $except = [
        'payfort',
        'payfort/*',
        '/*',
        'api/*',
        'api/v3/*',
        'api/v3',
        'api',
        'api/dashboard/*',
        'api/dashboard',
        'sub.domain.zone' => [
            'prefix/*'
        ],
        "/api/*"=> [
            "target"=> "http://127.0.0.1:8000",
            "secure"=> false,
            "logLevel"=> "debug"
        ]
    ];
}
