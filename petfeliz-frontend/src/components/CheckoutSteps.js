import React from 'react'

export default function CheckoutSteps(props) {
    return (
        <div className="checkout-steps row">
            <div className={props.step1 ? 'active' : ''}>Efetuar Login</div>
            <div className={props.step2 ? 'active' : ''}>Dados de entrega</div>
            <div className={props.step3 ? 'active' : ''}>Efeturar Pedido</div>
        </div>
    )
}
