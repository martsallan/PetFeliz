import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { register } from '../actions/userActions';
import LoadingScreen from '../components/LoadingScreen';
import MessageScreen from '../components/MessageScreen';

export default function RegisterPage(props) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    
    const redirect = props.location.search ?
        props.location.search.split('=')[1] :
        '/';
    
    const userRegister = useSelector((state) => state.userRegister);
    const { userInfo, loading, error } = userRegister;

    const dispatch = useDispatch();
    const submitHandler = (element) => {
        element.preventDefault();
        (password === confirmPassword)
            ? dispatch(register(name, email, password, phoneNumber))
            : alert('As senhas são diferentes!');
    };

    useEffect(() => {
        if (userInfo) {
            props.history.push(redirect);
        }
    }, [props.history, redirect, userInfo]);

    return (
        <div>
            <form className='card' onSubmit={submitHandler}>
                <div>
                    <h1>Register</h1>
                </div>
                {loading && (<LoadingScreen></LoadingScreen>)}
                { error && (<MessageScreen >{error}</MessageScreen>) }
                <div className="card-body">
                    <div className="row">  
                        <label htmlFor="name">Name:</label>
                        <input
                            type="texte"
                            name="name"
                            placeholder="Digite seu nome..."
                            required
                            onChange={element => setName(element.target.value)}
                        />
                    </div>
                    <div className="row">  
                        <label htmlFor="email">E-mail:</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Digite seu e-mail..."
                            required
                            onChange={element => setEmail(element.target.value)}
                        />
                    </div>
                    <div className="row">  
                        <label htmlFor="phoneNumber">Telefone</label>
                        <input
                            type="tel"
                            name="phoneNumber"
                            placeholder="Digite seu telefone..."
                            required
                            onChange={element => setPhoneNumber(element.target.value)}
                        />
                    </div>
                    <div className="row">  
                        <label htmlFor="password">Senha:</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Digite sua senha..."
                            required
                            onChange={element => setPassword(element.target.value)}
                        />
                    </div>
                    <div className="row">  
                        <label htmlFor="confirmPassword">Confirmar Senha:</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="confirme sua senha..."
                            required
                            onChange={element => setConfirmPassword(element.target.value)}
                        />
                    </div>
                    <div className="row">
                        <button type="submit">Criar conta</button>
                    </div>
                </div>
                <div><small>Já é cadastrado? <Link to={`/login?redirect=${redirect}`}>Logar!</Link> </small></div>
            </form>
        </div>
    )
}
