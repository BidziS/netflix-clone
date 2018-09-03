import React from 'react';

import classes from './ChoosePlan.scss';

const choosePlan = (props) => {
    return (
        <div className={classes.ChoosePlan}>
            <div className={classes.Join}>
                <div className={classes.Item}>
                    <h2>Wybierz plan i oglądaj do woli.</h2>
                </div>
                <div className={classes.Item}><button>ZACZNIJ BEZPŁATNY MIESIĄC</button></div>
            </div>
            <table>
                <tbody>
                    <tr>
                        <th></th>
                        <th>Podstawowy</th>
                        <th>Standard</th>
                        <th>Premium</th>
                    </tr>
                    <tr>
                        <td>Opłata miesięczna po zakończeniu bezpłatnego miesiąca w dniu 02.10.18</td>
                        <td>34 zł</td>
                        <td>43 zł</td>
                        <td>52 zł</td>
                    </tr>
                    <tr>
                        <td>Dostępna jakość HD</td>
                        <td><span className="icon-cancel" /></td>
                        <td><span className="icon-ok" /></td>
                        <td><span className="icon-ok" /></td>
                    </tr>
                    <tr>
                        <td>Dostępna jakość Ultra HD</td>
                        <td><span className="icon-cancel" /></td>
                        <td><span className="icon-cancel" /></td>
                        <td><span className="icon-ok" /></td>
                    </tr>
                    <tr>
                        <td>Liczba ekranów do jednoczesnego oglądania</td>
                        <td>1</td>
                        <td>2</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>Oglądaj na laptopie, telewizorze, telefonie i tablecie</td>
                        <td><span className="icon-ok" /></td>
                        <td><span className="icon-ok" /></td>
                        <td><span className="icon-ok" /></td>
                    </tr>
                    <tr>
                        <td>Nieograniczona oferta filmów, seriali i programów</td>
                        <td><span className="icon-ok" /></td>
                        <td><span className="icon-ok" /></td>
                        <td><span className="icon-ok" /></td>
                    </tr>
                    <tr>
                        <td>Możesz anulować członkostwo w każdej chwili</td>
                        <td><span className="icon-ok" /></td>
                        <td><span className="icon-ok" /></td>
                        <td><span className="icon-ok" /></td>
                    </tr>
                    <tr>
                        <td>Pierwszy miesiąc za darmo</td>
                        <td><span className="icon-ok" /></td>
                        <td><span className="icon-ok" /></td>
                        <td><span className="icon-ok" /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
export default choosePlan;