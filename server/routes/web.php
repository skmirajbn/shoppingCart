<?php

use App\Http\Controllers\CartProductController;
use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::group(['prefix' => 'api'], function () {
    Route::get('/products', [ProductController::class, 'index']);
});
Route::group(['prefix' => 'api', 'middleware' => ['auth:sanctum']], function () {
    Route::get('/cart', [CartProductController::class, 'index']);
    Route::post('/add-product', [ProductController::class, 'store']);
    Route::delete('/product/{product}', [ProductController::class, 'destroy']);
    Route::post('/cart', [CartProductController::class, 'store']);
    Route::get('/cart', [CartProductController::class, 'index']);
    Route::delete('/cart/{cartProduct}', [CartProductController::class, 'destroy']);

    Route::post('/cart/sync', [CartProductController::class, 'sync']);
});



require __DIR__ . '/auth.php';
