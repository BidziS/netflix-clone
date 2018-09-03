import React, { Component } from 'react';

import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import Aux from '../../hoc/Auxiliary/Auxiliary';
import Join from '../../components/Landing/Join/Join';
import LandingNavigation from '../../components/Landing/LandingNavigation/LandingNavigation';
import Footer from '../../components/Landing/Footer/Footer';

import ChoosePlan from '../../components/Landing/ChoosePlan/ChoosePlan';
import StartUse from '../../components/Landing/StartUse/StartUse';
import WatchEverywhere from '../../components/Landing/WatchEverywhere/WatchEverywhere';

import classses from './LandingPage.scss';

class LandingPage extends Component {
    render() {
        return (
            <Aux>
                <div className={classses.LandingPage}>
                    <div className={classses.Background}>
                        <Join />
                    </div>
                </div>
                <div className={classses.Join}>
                    <LandingNavigation />
                    <Switch>
                        <Route path="/start-use" component={StartUse} />
                        <Route path="/watch-everywhere" component={WatchEverywhere} />
                        <Route path="/choose-plan" component={ChoosePlan} />
                        <Redirect to="/start-use" />
                    </Switch>
                </div>
                <Footer />
            </Aux>
        )
    }
}
export default LandingPage;
