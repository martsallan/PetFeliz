import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { createOrder } from '../actions/orderActions';
import CheckoutSteps from '../components/CheckoutSteps';
import LoadingScreen from '../components/LoadingScreen';
import MessageScreen from '../components/MessageScreen';
import { ORDER_CREATE_RESET } from '../constants/orderConstants';

export default function PlaceOrderPage(props) {
    const cart = useSelector(state => state.cart);
    if (!cart.shippingAddress) {
        props.history.push('/dados-entrega')
    }

    const orderCreate = useSelector(state => state.orderCreate);
    const { loading, success,error, order } = orderCreate;

    const toPrice = (num) => Number(num.toFixed(2));

    cart.itemsPrice = toPrice(
        cart.cartItems.reduce((a, c) => a + c.qty * c.price, 0)
    );
    
    cart.shippingPrice = cart.itemsPrice > 100 ? toPrice(0) : toPrice(10);
    cart.totalPrice = cart.itemsPrice + cart.shippingPrice;
    const dispatch = useDispatch();
    const placeOrderHandler = () => {
        dispatch(createOrder({ ...cart, orderItems: cart.cartItems }));
    }

    useEffect(() => {
        if (success) {
            props.history.push(`/order/${order._id}`);
            dispatch({ type: ORDER_CREATE_RESET })
        }
    }, [dispatch, order, props.history,success]);
    
    return (
        <div>
            <CheckoutSteps step1 step2 step3></CheckoutSteps>
            <div className="row top">
                <div className="col-2">
                    <ul>
                        <li>
                            <div className="card card-body">
                                <h2>Envio</h2>
                                <p>
                                    <strong>Nome:</strong> {cart.shippingAddress.fullName}
                                    <strong>Endereço:</strong> {cart.shippingAddress.street},
                                    {cart.shippingAddress.neighbourhood}, {cart.shippingAddress.city},
                                    {cart.shippingAddress.state} - {cart.shippingAddress.zip}
                                    
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="card card-body">
                                <h2>Pagamento</h2>
                                <p>
                                    <strong>Método pagamento:</strong> {cart.shippingAddress.paymentMethod}
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="card card-body">
                                <h2>Pedido</h2>
                                <ul>
                                    {cart.cartItems.map((item) => (
                                        <li key={item.product}>
                                            <div className="row">
                                            <div>
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="small"
                                                ></img>
                                            </div>
                                            <div className="min-30">
                                                <Link to={`/product/${item.product}`}>
                                                    {item.name}
                                                </Link>
                                            </div>
                                                <div>{item.qty} x ${item.price} = { item.price * item.qty}</div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="col-1">
                    <div className="card card-body">
                        <ul>
                            <li>
                                <h2> Resumo do Pedido </h2>
                            </li>
                            <li>
                                <div className="row">
                                    <div>Items</div>
                                    <div>${cart.itemsPrice}</div>
                                </div>
                            </li>
                             <li>
                                <div className="row">
                                    <div>Frete</div>
                                    <div>${cart.shippingPrice}</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div><strong>Total</strong></div>
                                    <div><strong>${cart.totalPrice}</strong></div>
                                </div>
                            </li>
                            <li>
                                <button onClick={placeOrderHandler} disabled={cart.cartItems.length === 0}>Finalizar Pedido</button>
                            </li>
                            {loading && (<LoadingScreen></LoadingScreen>)}
                            {error && (<MessageScreen >{error}</MessageScreen>)}
                        </ul>
                    </div>
                </div>
            </div>
        
        </div>
    )
}
