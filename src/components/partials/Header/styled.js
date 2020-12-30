import styled from 'styled-components';

export const HeaderArea = styled.div`
    background-color: #fff;
    width: 100%;
    height: 90px;
    border-bottom: solid 1px #f4f0f0;
    padding: 15px;

    .container{

        max-width: 83rem;
        margin: auto;
        display: flex;
        justify-content: space-between;
        height: 100%;

        .logo-area{

            display: flex;

            a{
                display: flex;
                align-items: center;
            }

            img{
                width: 100px;
                height: auto;
            }

        }

        nav{
            display: flex;

            ul, li{
                margin: 0;
                padding: 0;
                list-style: none;
            }

            ul{
                display: flex;
                align-items: center;
            }
            li{
                margin-right: 10px;
                margin-left: 10px;
            }

            a, button{
                text-decoration: none;
                outline: 0;
                border: 0;
                font-size: 14px;
                color: #535151;
                background-color: transparent;
                cursor: pointer;

                &:hover{
                    color: #867f7f;
                }

            }

            .post-btn{
                display: flex;
                align-items: center;
                background-color: #ff5707;
                color: #fff;
                padding: 10px 5px;
                border-radius: 5px;
                box-shadow: 1px 1px 1px #bbb0b0;

                &:hover{
                    background-color: #e24b03;
                    color: #fff;
                }
            }
        }
        
        
    }

    @media (max-width: 600px){
        &{
            height: auto;
        }
        .container{
            flex-direction: column;

            nav {
                margin-top: 15px;
                justify-content: center;
                ul{
                    flex-direction: column;
                    flex: 1;

                    li{
                        
                        width: 100%;
                        border-bottom: solid 1px #ddd;
                    }
                    a, button{
                        display: inline-block;
                        padding: 15px 10px;
                        width: 100%;
                        text-align: left;
                    }

                    .post-btn{ 
                        height: 49px;
                    }
                }

            }
        }
    }
`;