import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { login } from '../actions/userActions';
import LoadingScreen from '../components/LoadingScreen';
import MessageScreen from '../components/MessageScreen';

export default function LoginPage(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const redirect = props.location.search ?
        props.location.search.split('=')[1] :
        '/';
    
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo, loading, error } = userLogin;

    const dispatch = useDispatch();
    const submitHandler = (element) => {
        element.preventDefault();
        dispatch(login(email, password));
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
                    <h1>Efetuar Login</h1>
                </div>
                {loading && (<LoadingScreen></LoadingScreen>)}
                { error && (<MessageScreen >{error}</MessageScreen>) }
                <div className="card-body">
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
                        <button type="submit">Entrar</button>
                    </div>
                </div>
                <div><small>Ainda não tem cadastro? <Link to={`/registrar?redirect=${redirect}`}>Registre-se aqui!</Link> </small></div>
            </form>
        </div>
    )
}
