import React from 'react';

import netflixLogo from '../../assets/svgs/netflix-logo.svg';

import classes from './Navigation.scss';

const navigation = (props) => {
    return (
        <div className={classes.Header}>
            <a className={classes.LogoLink}>
                <img src={netflixLogo} alt="Netflix logo" className={classes.Logo} />
            </a>
            <a className={classes.AuthLink}>
                Zaloguj się
            </a>
        </div>
    );
}
export default navigation;