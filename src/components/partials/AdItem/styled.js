import styled from 'styled-components';

const ItemArea = styled.div`
    a{
        display: block;
        padding: 10px;
        text-decoration: none;
        background-color: #fff;
        width: 100%;
        border-radius: 5px;
        margin-bottom: 25px;
        border: solid 1px #fff;
        overflow-wrap: break-word;
        color: #000;
        
        &:hover{
            border: solid 1px #a1a1a1;
        }

        .ad-image{
            
            width: 100%;
            height: 70%;
            text-align: center;
            img{
                max-width: 100%;
                max-height: 100%;
            }
        }
        .ad-title{
            font-size: 17px;
            font-weight: 600;
            color: #1da4ec;
        }

        .ad-price{
            color: #444242;
            padding: 2px;
        }
    }
`;

export {ItemArea}; 