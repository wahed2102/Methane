import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { LandingPage } from '../Components/LandingPage';
import { SigninPage } from '../Components/SigninPage';

export const Routes = () => {
    return (
        <Switch>
            <Route path = "/" exact component = {LandingPage}></Route>
            <Route path = "/signin" exact component = {SigninPage}></Route>
            <Route path = "/main" exact component = {LandingPage}></Route>
        </Switch>    )
}