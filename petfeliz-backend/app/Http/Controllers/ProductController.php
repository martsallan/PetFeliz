<?php

namespace App\Http\Controllers;

use App\Models\ProductModel;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index(){
        $products =  ProductModel::all();
        $response =  $products ? response(['success' => true,'products' => $products->toArray()]) : response(['success' => false,'message' => 'Não há produtos cadastrados.']);
        return $response;
    }

    public function getProduct(Request $request){
        $product = ProductModel::where('id','=',$request->id)->first();
        $response =  $product ? response(['success' => true,'product' => $product->toArray()]) : response(['success' => false,'message' => 'Produto não encontrado.']);
        return $response;
    }

    public static function updateQttStorage($productId, $unitsTaken){
        $product = ProductModel::where('id', '=' , $productId)->first();
        $product->qtt_storage -= $unitsTaken;
        return $product->save() ? true : false;
    }
}
