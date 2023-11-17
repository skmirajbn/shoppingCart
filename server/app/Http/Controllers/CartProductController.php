<?php

namespace App\Http\Controllers;

use App\Models\CartProduct;
use App\Http\Requests\StoreCartProductRequest;
use App\Http\Requests\UpdateCartProductRequest;
use App\Models\Product;
use App\Models\User;
use Illuminate\Http\Request;

class CartProductController extends Controller {
    public function sync(Request $request) {
        $productIds = $request->product_ids;
        $user = auth()->user()->id;

        foreach ($productIds as $productId) {
            $cartProduct = new CartProduct();
            $cartProduct->user_id = $user;
            $cartProduct->product_id = $productId;
            $cartProduct->save();
        }
        //return no content
        return response()->noContent();


    }

    public function clear() {
        $user = auth()->user()->id;
        CartProduct::where('user_id', $user)->delete();
        return response()->noContent();
    }
    /**
     * Display a listing of the resource.
     */
    public function index() {
        $products = User::find(auth()->user()->id)->cartProducts()->get();
        return response()->json($products);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create() {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCartProductRequest $request) {
        $cartProduct = new CartProduct();
        $cartProduct->user_id = auth()->user()->id;
        ;
        $cartProduct->product_id = $request->product_id;
        $cartProduct->save();
        return response()->json($cartProduct);
    }

    /**
     * Display the specified resource.
     */
    public function show(CartProduct $cartProduct) {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(CartProduct $cartProduct) {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCartProductRequest $request, CartProduct $cartProduct) {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(CartProduct $cartProduct) {
        if ($cartProduct->user_id == auth()->user()->id) {
            $cartProduct->delete();
            return response()->json($cartProduct);
        }
    }
}
