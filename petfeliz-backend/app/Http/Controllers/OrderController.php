<?php

namespace App\Http\Controllers;

use App\Models\OrderModel;
use App\Models\ProductModel;
use App\Http\Controllers\ProductController;
use App\Http\Requests\StoreOrderRequest;
use App\Mail\petfeliz;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class OrderController extends Controller
{
    public function store(Request $request){
        //check if we have as many products as ordered in stock (simultaneous shopping workaround)
        $products = $request->input('products');
        foreach($products as $product){
            $dbProduct = ProductModel::where('id','=',$product["id"])->first();
            if(($dbProduct->qtt_storage) < ($product["qtt"])){
                $response = ['success' => false ,'message' => 'Produto não está disponível.'];
                return response($response);
            }
        }
        
        $order = OrderModel::create($request->except('products'));
        foreach($products as $product){
            $order->products()->attach($product["id"],[
                'product_qtt' => $product["qtt"],
            ]);
        }
        if($order->save()){
            foreach($order->products as $product){
                $this->updateStock($product->id, $products);
            }
            $response = ['success' => true ,'message' => 'Seu pedido foi realizado. Enviaremos um e-mail com os detalhes da entrega.'];

            Mail::send(new petfeliz($order));
            
        }
        else
            $response = ['success' => false ,'message' => 'Houve um problema no processamento do seu pedido. Por favor, tente novamente mais tarde!'];
        return response($response);
    }

    public function updateStock($productId , $products){
        foreach($products as $product){
            if($product['id'] == $productId){
                ProductController::updateQttStorage($productId, $product['qtt']);
            }
        }
    }

}
