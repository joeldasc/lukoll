import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import Logo from '../../assets/img/logo.png';

class Login extends Component {
    render() {
        return(
            <div className="lukoll__wrapper">
                <div className="lukoll__logo">
                    <img src={ Logo } alt="Logo Lukoll"/>
                </div>
                <div className="lukoll__form">
                    <h1 className="lukoll__title text-center">Inicia sesión</h1>
                    <form action="">
                        <div className="lukoll__form-group">
                            <label htmlFor="name">Usuario</label>
                            <input id="name" type="text" autocomplete="off"/>
                        </div>
                        <div className="lukoll__form-group">
                            <label htmlFor="password">Contraseña</label>
                            <input id="password" type="password" autocomplete="new-password"/>
                        </div>
                        <Link to="/obtener-informacion" className="lukoll__btn">Ingresar</Link>
                    </form>
                    <p className="lukoll__excert text-center">
                        No tengo una cuenta, <Link to="/registrate">crea una</Link>
                    </p>
                </div>                
            </div>
        );
    }
}

export default Login;
