<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ProductModel extends Model
{
    use HasFactory;

    protected $table = 'product';

    protected $fillable = [
        'name',
        'description',
        'image',
        'price',
        'qtt_storage',
    ];

   /*  public function orders(){
        return $this->belongsToMany(OrderModel::class,'order_products', 'order_id','product_id');
    } */
    
}
