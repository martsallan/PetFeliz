@component('mail::message')
<h1>Olá {{$order->name}}!<h1>
<h2> Muito obrigado por escolher a gente!</h2>
<small>O seu pedido foi registrado com sucesso!</small>
<h2>O endereço de entrega é: {{$order->address}}</h2>
<h2>O número do seu pedido é #{{$order->id}}</h2>
<ul style="list-style: none; background-color: #F04819;color:white;border-radius:15px;font-size:18px;padding:20px;">
    @foreach($order->products as $product)
        <li style="margin-top:10px;display:flex !important;width:100% !important;">
                <div style="flex-grow:1 !important;">
                    {{$product->pivot->product_qtt}} x {{$product->name}}
				</div>
				<div style="flex-grow:1 !important;text-align:end !important;">
					R$ {{number_format(($product->price * $product->pivot->product_qtt),2,",",".")}}
				</div>
        </li>
    @endforeach
</ul>
<div style="margin-top: 10px;display:flex !important;width:100% !important;">
    <div style="flex-grow:1 !important;">
		<h2>Total:</h2>
	</div>
	<div style="flex-grow:1 !important;text-align:end !important;">
		<h2>R$ {{number_format(($order->cost + $order->shipping_cost),2,",",".")}}</h2>
	</div>
</div>
@endcomponent