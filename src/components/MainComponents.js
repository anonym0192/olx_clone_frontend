import React from 'react';
import styled from 'styled-components';

export const Template = styled.div`
    background-color: #fff;
    min-height: 100vh;
`;

export const PageTitle = styled.h1`
    padding: 0 5px;
    font-size: 30px;
`;

export const PageContainer = styled.div`
    max-width: 83rem;
    /*min-height: 100vh;*/
    margin: auto;
`;

export const PageBody = styled.div``;


export const ErrorMsg = styled.div`
    background-color: #ffcaca;
    color: #000;
    border: solid #ff0000 2px;
    padding: 5px;
    margin: 10px 0;
`;

export const SuccessMsg = styled.div`
    background-color: #0bff12;
    color: #fff;
    border: solid #9cff95 2px;
    padding: 5px;
    margin: 10px 0;
`;