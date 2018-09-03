import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

import CancelIcon from '../../UI/icons/cancelIcon';
import WatchIcon from '../../UI/icons/watchIcon';
import PlanIcon from '../../UI/icons/planIcon';
import classes from './LandingNavigation.scss';

class LandingNavigation extends Component {
    
    state = {
        scrollTo: false
    }

    myRef = React.createRef();

    handleScrollToElement = () => {
        this.setState({scrollTo: true});
    }

    componentDidUpdate() {
        if (this.state.scrollTo) {
            this.myRef.current.scrollIntoView()
        } else {
            this.setState((prevState) => {
                return { scrollTo: !prevState.scrollTo };
            });
        }
    }

    render() {
        const iconHeight = '49px';
        const iconWidth = '100%';
        return (
            <div ref={this.myRef} className={classes.Container}>
                <div id="section1" className={classes.LandingNavigation}>
                    <div className={classes.LinkContainer}>
                        <NavLink to='/start-use' className={classes.NavItem} activeClassName={classes.Active} onClick={this.handleScrollToElement}>
                            <CancelIcon height={iconHeight} width={iconWidth} />
                            <div className={classes.Text}>
                                Bez zobowiązań
                            <br />
                                Możesz anulować online w każdej chwili.
                        </div>
                        </NavLink>
                        <NavLink to='/watch-everywhere' className={classes.NavItem} activeClassName={classes.Active}>
                            <WatchIcon height={iconHeight} width={iconWidth} />
                            <div className={classes.Text}>
                                Oglądaj wszędzie
                        </div>
                        </NavLink>
                        <NavLink to='/choose-plan' className={classes.NavItem} activeClassName={classes.Active}>
                            <PlanIcon height={iconHeight} width={iconWidth} />
                            <div className={classes.Text}>
                                Wybierz plan
                        </div>
                        </NavLink>
                    </div>
                </div>
            </div>
        );
    }
}
export default LandingNavigation;