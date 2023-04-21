<?php

namespace App\Http\Controllers\Api;

use App\Helpers\JsonResponse;
use App\Http\Controllers\Controller;
use App\Http\Resources\ClientResource;
use App\Models\Admin;
use App\Models\AdminPermission;
use App\Models\AdminRole;
use App\Models\RolePermission;
use App\Models\Setting;
use Auth;
use App\Models\User;
use Illuminate\Support\Facades\Storage;
use Validator;
use Illuminate\Http\Request;

class ClientController extends Controller
{
    public function clients(Request $request)
    {
        $user = auth()->guard('Admin')->user();

        $status = 401;
        $response = ['error' => 'Unauthorised'];

        if ($user == null) {

            return response()->json($response, $status);
        }
        $clients = User::query();
        if ($request->get('status')) {
            $clients = $clients->where('status', $request->get('status'));
        }
        if ($request->get('role')) {
            $clients = $clients->where('role', $request->get('role'));
        }
        if ($request->get('type')) {
            $clients = $clients->where('type', $request->get('type'));
        }
        if ($request->get('q')) {
            $clients = $clients->where('name', 'like', '%' . $request->get('q') . '%');
        }
        $clients = $clients->paginate(10);


        return response()->json($clients);
    }

    public function single_client($id)
    {


        $user = auth()->guard('Admin')->user();

        $status = 401;
        $response = ['error' => 'Unauthorised'];

        if ($user == null) {

            return response()->json($response, $status);
        }
        $user = User::find($id);
        $user = ClientResource::collection([$user]);
        return response()->json($user[0]);
        //  return ['data' => $user];
    }


}
