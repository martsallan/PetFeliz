<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderModel extends Model
{
    use HasFactory;

    protected $table = 'order';

    protected $fillable = [
        'name',
        'email',
        'cost',
        'shipping_cost',
        'address',
        'payment_method',
    ];

    public function products(){
        return $this->belongsToMany(ProductModel::class,'order_products','order_id','product_id')
        ->withPivot(['product_qtt']);
    }
}
