import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {isLogged} from '../helpers/AuthHandler';

export default ( {children , ...rest}) => {

    let logged = isLogged();
    let authorized = (rest.private && !logged) ? false : true ;

    return (
    <>
        {authorized &&
            <Route {...rest}>{children}</Route>
        }
        {!authorized &&
            <Redirect to="/signup"/>
        }
    </>
    );
}


