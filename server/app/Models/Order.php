<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model {
    use HasFactory;

    function user() {
        return $this->belongsTo(User::class, 'user_id');
    }
    function orderProducts() {
        return $this->hasMany(OrderProduct::class, 'order_id');
    }
}
