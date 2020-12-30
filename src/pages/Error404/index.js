import React from 'react';
import {Link} from 'react-router-dom';
import {PageContainer} from '../../components/MainComponents';
import { PageArea } from './style';
function Error404(){

    return (
        <PageContainer>
            <PageArea>
                <h1>Page not Found</h1>
                <p>404 Error.</p>
                <p><Link to="/">Voltar</Link></p>
            </PageArea>
        </PageContainer>

    );

}

export default Error404;