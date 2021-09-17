import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingAddress } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps'

export default function ShippingAddressPage(props) {
    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    const cart = useSelector(state => state.cart);
    const { shippingAddress } = cart;

    if (!userInfo) {
        props.history.push('/login');
    }

    const [fullName, setFullName] = useState(shippingAddress.fullName);
    const [paymentMethod, setPaymentMethod] = useState(shippingAddress.paymentMethod);
    const [street, setStreet] = useState(shippingAddress.street);
    const [neighbourhood, setNeighbourhood] = useState(shippingAddress.neighbourhood);
    const [city, setCity] = useState(shippingAddress.city);
    const [state, setState] = useState(shippingAddress.state);
    const [zip, setZip] = useState(shippingAddress.zip);

    const dispatch = useDispatch();

    const submitHandler = (element) => {
        element.preventDefault();
        dispatch(saveShippingAddress({ fullName, street, neighbourhood, city, state, zip, paymentMethod }));
        props.history.push('/finalizar-pedido');
    }

    // const getZip = () => {
    //     axios.get(`viacep.com.br/ws/${this.zip}/json`)
    //         .then(res => {
    //             this.setStreet(res.logradouro);
    //             this.setNeighbourhood(res.bairro);
    //             this.setCity(res.localidade);
    //             this.setState(res.uf);
    //         }).catch(e => {
    //             alert(e.message);
    //         })
    // }

    return (
        <div>
            <CheckoutSteps step1 step2></CheckoutSteps>
            <form onSubmit={submitHandler}>
                <div className="">
                    <h1>Dados para entrega</h1>
                </div>
                <div>
                    <label htmlFor="fullName">Nome do destinatário</label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        placeholder="Quem receberá a encomenda?"
                        value={fullName}
                        onChange={(element) => setFullName(element.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="zip" /*onBlur={getZip}*/ >CEP</label>
                    <input
                        type="text"
                        id="zip"
                        name="zip"
                        placeholder="Ex: 23747214"
                        value={zip}
                        onChange={(element) => setZip(element.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="street">Rua</label>
                    <input
                        type="text"
                        id="street"
                        name="street"
                        placeholder="Ex: Marques de paraná"
                        value={street}
                        onChange={(element) => setStreet(element.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="neighbourhood">Bairro</label>
                    <input
                        type="text"
                        id="neighbourhood"
                        name="neighbourhood"
                        placeholder="Ex: Fonseca"
                        value={neighbourhood}
                        onChange={(element) => setNeighbourhood(element.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="city">Cidade</label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        placeholder="Ex: Niterói"
                        value={city}
                        onChange={(element) => setCity(element.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="state">UF</label>
                    <input
                        type="text"
                        id="state"
                        name="state"
                        placeholder="Ex: Rio de Janeiro"
                        value={state}
                        onChange={(element) => setState(element.target.value)}
                        required
                    />
                </div>
                
                <div>
                    <select name="paymentMethod" onChange={(element) => setPaymentMethod(element.target.value)} id="paymentMethod">
                        <option value='card'>Cartão</option>
                        <option value='money'>Dinheiro</option>
                    </select>
                </div>
                
                <div>
                    <button type='submit'>Avançar</button>
                </div>
            </form>
        </div>
    )
}
