<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\OrderProduct;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class OrderController extends Controller {
    /**
     * Display a listing of the resource.
     */
    public function index() {
        $orders = User::find(auth()->user()->id)->orders()->with('orderProducts.product')->orderBy('created_at', 'desc')->get();
        return response()->json($orders);
    }

    public function orderProducts(Order $order) {
        if (auth()->user()->id == $order->user_id) {
            return response()->json($order->orderProducts->load('product'));
        }
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
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request) {
        DB::transaction(function () use ($request) {
            $userId = auth()->user()->id;
            $order = new Order();
            $order->user_id = $userId;
            $order->save();

            $productIds = $request->product_ids;
            $quantities = $request->quantities;
            foreach ($productIds as $index => $productId) {
                $orderProduct = new OrderProduct();
                $orderProduct->product_id = $productId;
                $orderProduct->order_id = $order->id;
                $orderProduct->quantity = $quantities[$index];
                $orderProduct->save();
            }
        });
    }

    /**
     * Display the specified resource.
     */
    public function show(Order $order) {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Order $order) {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Order $order) {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Order $order) {
        //
    }
}
