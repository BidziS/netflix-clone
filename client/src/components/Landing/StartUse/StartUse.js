import React from 'react';

import cancelAnytimeImg from '../../../assets/images/cancel_anytime.png';
import classes from './StartUse.scss';

const startUse = (props) => {
    return (
        <div className={classes.StartUse}>
            <div className={[classes.Column, classes.WithText].join(' ')}>
                <div className={classes.Text}>
                    Jeśli uznasz, że Netflix nie jest dla Ciebie, nie ma sprawy. Nie masz żadnych zobowiązań. Anuluj online w każdej chwili.
                </div>
                <button>ZACZNIJ BEZPŁATNY MIESIĄC</button>
            </div>
            <div className={classes.Column}>
                <img className={classes.Image} src={cancelAnytimeImg} alt="Cancel anytime" />
            </div>
        </div>
    );
}
export default startUse;