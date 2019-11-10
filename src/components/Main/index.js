import React, { Component, Fragment } from 'react';

import Header from '../Header';
import SidebarMenu from '../SidebarMenu';

class Main extends Component {
    state = {
        activeHamburger: false,
    }
    toggleHamburger = () => {
        const {  activeHamburger } = this.state;

        this.setState({
            activeHamburger: !activeHamburger
        });
    }
    removeActiveHamburger = () => {
        this.setState({
            activeHamburger: false
        });
    }
    render() {
        const { activeHamburger } = this.state;
        return(
            <Fragment>
                <Header toggleMenu={ this.toggleHamburger } activeMenu={ activeHamburger }/>
                <SidebarMenu removeActiveHamburger={ this.removeActiveHamburger } activeMenu={ activeHamburger }/>
            </Fragment>
        );
    }
}

export default Main;
