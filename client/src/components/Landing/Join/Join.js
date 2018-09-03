import React from 'react';

import classes from './Join.scss';

const join = (props) => (
    <div className={classes.Join}>
        <div className={classes.Text}>
            <h1>See what's next.</h1>
            <p>OGLĄDAJ WSZĘDZIE. ANULUJ W KAŻDEJ CHWILI.</p>
        </div>
        <button>ZACZNIJ BEZPŁATNY MIESIĄC</button>
    </div>
);

export default join;