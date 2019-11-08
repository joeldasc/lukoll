import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

import classnames from 'classnames';

import iconWebsite from '../../assets/img/icons/icon-website.svg';
import iconResume from '../../assets/img/icons/icon-resume.svg';
import iconTable from '../../assets/img/icons/icon-table.svg';
import iconLogout from '../../assets/img/icons/icon-logout.svg';

class SidebarMenu extends Component {
    render() {
        const { activeMenu } = this.props;

        return(
            <aside className={ classnames('lukoll__sidebar', { 'active': activeMenu })}>
                <div className="lukoll__sidebar__user">
                    <h2>
                        Hola
                        <div className="name">Carlos</div>
                    </h2>
                    <div className="name-circle"><span>C</span></div>
                </div>
                <ul>
                    <li>
                        <NavLink
                            to={ '/obtener-informacion' }
                            exact
                            activeClassName="active"
                        >
                            <img src={ iconWebsite } alt="obtener información"/>
                            <span className="deskt-none">Obtener información</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={ '/generar-archivo' }
                            exact
                            activeClassName="active"
                        >
                            <img src={ iconResume } alt="obtener información"/>
                            <span className="deskt-none">Generar Archivo</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={ '/parrillas-norte-sur' }
                            exact
                            activeClassName="active"
                        >
                            <img src={ iconTable } alt="Parrillas norte y sur"/>
                            <span className="deskt-none">Parrillas norte y sur</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={ '/' }
                            exact
                        >
                            <img src={ iconLogout } alt="Cerrar sesión"/>
                            <span className="deskt-none">Cerrar sesión</span>
                        </NavLink>
                    </li>
                </ul>
            </aside>
        );
    }
}

export default SidebarMenu;
