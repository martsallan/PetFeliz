<?php

use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductController;
use App\Mail\petfeliz;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group([
        'prefix'=>'products'
    ],function(){
        Route::get('/', [ProductController::class, 'index'] );
        Route::get('/{id}',[ProductController::class, 'getProduct']);
});

Route::group([
    'prefix'=>'order'
],function(){
    Route::post('/store', [OrderController::class, 'store'] );
});

/* Route::get('/email',function(){
    //return new petfeliz;
    $user = new stdClass();
    $user->id = 1;
    $user->email = 'pmontel@gmail.com';
    return view('mail.petfeliz');
    //Mail::send(new petfeliz($user));
}); */
