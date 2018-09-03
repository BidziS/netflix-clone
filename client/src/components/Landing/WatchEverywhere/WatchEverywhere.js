import React from 'react';

import tvUI from '../../../assets/images/TV_UI.png'
import mobileUI from '../../../assets/images/mobile_tablet_UI.png'
import websiteUI from '../../../assets/images/website_UI.png'
import classes from './WatchEverywhere.scss';

const watchEverywhere = (props) => {
    return (
        <div className={classes.WatchEverywhere}>
            <div className={classes.Join}>
                <div className={classes.Text}>
                    Oglądaj filmy, seriale i programy w dowolnym miejscu i o każdej porze — spersonalizowane dla Ciebie.
                </div>
                <div className={classes.Link}>
                    <button>ZACZNIJ BEZPŁATNY MIESIĄC</button>
                </div>
            </div>
            <div className={classes.WatchImage}>
                <div className={classes.WatchItem}>
                    <img src={tvUI} alt="" />
                </div>
                <div className={classes.WatchItem}>
                    <img src={mobileUI} alt="" />
                </div>
                <div className={classes.WatchItem}>
                    <img src={websiteUI} alt="" />
                </div>
            </div>
            <div className={classes.WatchText}>
                <div className={classes.WatchItem}>
                    <div className={classes.Text}>
                        <h3>
                            Oglądaj na telewizorze
                        </h3>
                        <span>
                            Obsługiwane urządzenia: telewizory Smart TV, konsole PlayStation oraz Xbox, odtwarzacze Chromecast, Apple TV oraz Blu‑ray i nie tylko.
                        </span>
                    </div>
                </div>
                <div className={classes.WatchItem}>
                    <div className={classes.Text}>
                        <h3>
                            Oglądaj od razu lub pobierz i obejrzyj później
                        </h3>
                        <span>
                            Dostępne na telefonach i tabletach, w każdym miejscu.
                        </span>
                    </div>
                </div>
                <div className={classes.WatchItem}>
                    <div className={classes.Text}>
                        <h3>
                            Korzystaj z dowolnego komputera
                        </h3>
                        <span>
                            Oglądaj na Netflix.com.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default watchEverywhere;