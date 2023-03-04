<?php
use Illuminate\Support\Str;
function str_random($length = 16)
{
    return Str::random($length);
}
