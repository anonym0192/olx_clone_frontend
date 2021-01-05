import styled from 'styled-components';

const Container = styled.div`
min-height: 60vh;
    .related-list{

        display: flex;
        flex-wrap: wrap;

        .ad-item{
            width: 25%;
        }
    }

    @media (max-width: 600px){
        padding: 15px;
        .related-list{
            .ad-item {
                width: 50%;
            }
        }
    }

    .loadMore-area{
        text-align: center;
        margin 15px 0 50px;

        button{
                background-color: #ff5707;
                color: #fff;
                padding: 10px 5px;
                border-radius: 5px;
                border: 0;
                box-shadow: 1px 1px 1px #bbb0b0;
                width: 280px;
                font-size: 15px;

                &:active{
                    background-color: #e24b03;
                    color: #fff;
                }

        }
    }
`;

export {Container};