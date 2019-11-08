import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import classnames from 'classnames';

import Logo from '../../assets/img/logo.png';
import iconLogout from '../../assets/img/icons/icon-logout.svg';

class Header extends Component {
    
    render() {
        const { toggleMenu, activeMenu } = this.props;
        
        return(
            <header className="lukoll__header">
                <div className="lukoll__container">
                    <div className="content">
                        <div
                            onClick={ toggleMenu }
                            className={ classnames('lukoll__header__hamburger', { 'active': activeMenu })}
                        >
                            <span className="line"></span>
                            <span className="line"></span>
                            <span className="line"></span>
                        </div>
                        <div className="lukoll__header__logo">
                            <img src={ Logo } alt="Logo Lukoll"/>
                        </div>
                    </div>
                    <div className="lukoll__header__logout">
                        <Link to="/" >
                            <span className="deskt-none">Cerrar sesión</span>
                            <img className="mob-none" src={ iconLogout } alt="cerrar sesión"/>
                        </Link>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
