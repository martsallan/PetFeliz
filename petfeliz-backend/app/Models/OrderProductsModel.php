<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderProductsModel extends Model
{
    use HasFactory;

    protected $table = 'order_products';

    protected $primaryKey = 'order_id';

    protected $fillable = [
        'product_qtt',
    ];

   /*  public function products(){
        return $this->belongsToMany(ProductModel::class);
    }

    public function orders(){
        return $this->belongsToMany(OrderModel::class);
    } */
}
