<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderProduct extends Model {
    use HasFactory;

    function order() {
        return $this->belongsTo(Order::class, 'order_id');
    }
    function product() {
        return $this->belongsTo(Product::class, 'product_id');
    }
}
