import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import Logo from '../../assets/img/logo.png';

class Register extends Component {
    render() {
        return(
            <div className="lukoll__wrapper">
                <div className="lukoll__logo">
                    <img src={ Logo } alt="Logo Lukoll"/>
                </div>
                <div className="lukoll__form">
                    <h1 className="lukoll__title text-center">Registrate</h1>
                    <form action="">
                        <div className="lukoll__form-group">
                            <label htmlFor="name">Usuario</label>
                            <input id="name" type="text" autocomplete="off"/>
                        </div>
                        <div className="lukoll__form-group">
                            <label htmlFor="document">Tipo de documento</label>
                            <select id="document">
                                <option value="" disabled selected></option>
                                <option value="DNI">DNI</option>
                                <option value="CARNET DE EXTRANJERIA">CARNET DE EXTRANJERIA</option>
                                <option value="PASAPORTE">PASAPORTE</option>
                            </select>
                        </div>
                        <div className="lukoll__form-group">
                            <label htmlFor="name">N° de documento</label>
                            <input id="name" type="text" autocomplete="off"/>
                        </div>
                        <div className="lukoll__form-group">
                            <label htmlFor="password">Contraseña</label>
                            <input id="password" type="password" autocomplete="new-password"/>
                        </div>
                        <Link to="/obtener-informacion" className="lukoll__btn">Crear cuenta</Link>
                    </form>
                    <p className="lukoll__excert text-center">
                        <Link to="/inicia-sesion">Ya cuento con una cuenta</Link>
                    </p>
                </div>                
            </div>
        );
    }
}

export default Register;
