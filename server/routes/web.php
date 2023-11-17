<?php

use App\Http\Controllers\CartProductController;
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
    Route::get('/products', [\App\Http\Controllers\ProductController::class, 'index']);
});
Route::group(['prefix' => 'api', 'middleware' => ['auth:sanctum']], function () {
    Route::get('/cart', [CartProductController::class, 'index']);
});



require __DIR__ . '/auth.php';
