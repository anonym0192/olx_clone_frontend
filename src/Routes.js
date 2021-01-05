import React from 'react';
import { Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Error404 from './pages/Error404';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import AdPage from './pages/AdPage';
import PostNewAd from './pages/PostNewAd';
import Ads from './pages/Ads';
import MyAccount from './pages/MyAccount';
import RouterHandler from './components/RouterHandler';

export default () => {

    return (
        <Switch>
            <RouterHandler exact path="/">
                <Home />
            </RouterHandler>
            <RouterHandler path="/about">
                <About />
            </RouterHandler>
            <RouterHandler path="/signin">
                <SignIn/>
            </RouterHandler>
            <RouterHandler path="/signup">
                <SignUp/>
            </RouterHandler>
            <RouterHandler path="/ad/item/:id">
                <AdPage />
            </RouterHandler>
            <RouterHandler private exact path="/post-ad">
                <PostNewAd/>
            </RouterHandler>
            <RouterHandler path="/ads">
                <Ads />
            </RouterHandler>
            <RouterHandler private exact path="/my-account">
                <MyAccount />
            </RouterHandler>
            <RouterHandler>
                <Error404/>
            </RouterHandler>
        </Switch>
    );
}