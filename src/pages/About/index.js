import React from 'react';
import {PageArea} from './style';
import {PageContainer} from '../../components/MainComponents';

const About = () => {
    return (
    <PageContainer>
        <PageArea>
            <h1>About Page</h1>
            <p style={{color: '#0000ff'}}>Here goes the about content...</p>
        </PageArea>
    </PageContainer>
    );
}

export default About;