import React from 'react';

import { NavLink } from 'react-router-dom';

import CancelIcon from '../../UI/icons/cancelIcon';
import WatchIcon from '../../UI/icons/watchIcon';
import PlanIcon from '../../UI/icons/planIcon';
import classes from './LandingNavigation.scss';

const landingNavigation = (props) => {
    const iconHeight = '49px';
    const iconWidth = '100%';
    return (
        <div className={classes.Container}>
            <div className={classes.LandingNavigation}>
                <div className={classes.LinkContainer}>
                    <NavLink to='/start-use' className={classes.NavItem} activeClassName={classes.Active}>
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
export default landingNavigation;