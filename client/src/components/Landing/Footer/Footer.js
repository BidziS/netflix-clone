import React from 'react';

import classes from './Footer.scss';

const footer = () => {
    return (
        <div className={classes.Footer}>
            <div className={classes.Container}>
                <p className={classes.FooterTop}><a href="https://help.netflix.com/contactus">Masz pytania? Skontaktuj się z&nbsp;nami.</a></p>
                <ul>
                    <li>
                        <a href="https://help.netflix.com/support/412">
                            <span>Często zadawane pytania</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://help.netflix.com">
                            <span>Centrum pomocy</span>
                        </a>
                    </li>
                    <li>
                        <a href="/youraccount">
                            <span>Konto</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://media.netflix.com/">
                            <span>Media Center</span>
                        </a>
                    </li>
                    <li>
                        <a href="http://ir.netflix.com/">
                            <span>Relacje z&nbsp;inwestorami</span>
                        </a>
                    </li>
                    <li><a href="https://jobs.netflix.com/jobs">
                        <span>Praca</span>
                    </a>
                    </li>
                    <li>
                        <a href="/redeem">
                            <span>Karty podarunkowe</span>
                        </a>
                    </li>
                    <li>
                        <a href="/watch">
                            <span>Jak obejrzeć</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://help.netflix.com/legal/termsofuse">
                            <span>Warunki korzystania</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://help.netflix.com/legal/privacy">
                            <span>Prywatność</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://help.netflix.com/legal/privacy#cookies">
                            <span>Ustawienia plików cookie</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://help.netflix.com/pl/node/2101">
                            <span>Informacje o&nbsp;firmie</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://help.netflix.com/contactus">
                            <span>Skontaktuj się z&nbsp;nami</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://fast.com">
                            <span>Test prędkości połączenia</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://help.netflix.com/legal/notices">
                            <span>Informacje prawne</span>
                        </a>
                    </li>
                    <li>
                        <a href="/pl/originals">
                            <span>Netflix Originals</span>
                        </a>
                    </li>
                </ul>
                <div className={classes.ChangeLanguageSection}>
                    <div className={classes.PicklistContainer}>
                        <select tabIndex="0" placeholder="lang-switcher">
                            <option defaultValue value="/pl/">Polski</option>
                            <option value="/pl-en/">English</option>
                        </select>
                    </div>
                </div>
                <p className={classes.FooterBottom}>Netflix Polska</p>
            </div>
        </div>
    );
}
export default footer;