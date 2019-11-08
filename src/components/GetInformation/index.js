import React, { Component, Fragment } from 'react';

import Header from '../Header';
import SidebarMenu from '../SidebarMenu';

class GetInformation extends Component {
    state = {
        activeHamburger: false,
    }
    toggleHamburger = () => {
        const {  activeHamburger } = this.state;

        this.setState({
            activeHamburger: !activeHamburger
        });
    }
    render() {
        const { activeHamburger } = this.state;
        return(
            <Fragment>
                <Header toggleMenu={ this.toggleHamburger } activeMenu={ activeHamburger }/>
                <main>
                    <SidebarMenu activeMenu={ activeHamburger }/>
                </main>
            </Fragment>
        );
    }
}

export default GetInformation;
