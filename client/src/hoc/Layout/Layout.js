import React, { Component } from 'react';

import Aux from '../Auxiliary/Auxiliary';
import Navigation from '../../components/Navigation/Navigation';

class Layout extends Component {
    render() {
        return (
            <Aux>
                <Navigation />
                {this.props.children}
            </Aux>
        );
    }
}

export default Layout;