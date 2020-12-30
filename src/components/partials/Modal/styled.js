
import styled from 'styled-components';

const ModalBackground = styled.div`
    display: ${props=>props.status ? 'flex' : 'none'};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.7);
    justify-content: center;
    align-items: center;
    z-index: 999;
`;

const ModalArea = styled.div`

    background-image: url(assets/images/bg.png);
    background-color: #fff;
    max-width: 100vw;
    max-height: 95vh;
    overflow: auto;
    border-radius: 15px;
    box-shadow: 0 0 50px #000;



    form{
        background-color: #fff;
        padding: 25px;
        border-radius: 3px;
        box-shadow: 0px 0px 5px #999; 
    
        .area{
            max-width: 500px;
            margin-bottom: 10px;
            display: flex;
            justify-content: flex-end;
    
            .area-title{
    
                margin-right: 12px;
                font-weight: bold;
                width: 200px;
                text-align: right;
    
            }
    
            .area-input{
                flex: 1;
                text-align: left;
    
                input[type=text],
                input[type=password],
                input[type=email],
                select,
                textarea,
                .price-input{
                    transition: all ease .3s;
                    height: 27px;
                    outline: none;
                    font-size: 14px;
                    outline: none;
                    padding: 5px;
                    width: 100%;
                    &:focus{ 
                        border: solid #ccc 1px;
                    }      
                }
    
                textarea{
                    width: 100%;
                    height: 150px;
                    resize: none;
                }
    
                 .form-btn{
                        background-color: #0089ff;
                        padding: 7px;
                        font-size: 14px;
                        font-weight: bold;
                        border: none;
                        color: #fff;
    
                        &:active{
                            background-color: #0a6abc;
                        }
                    }
                
            }
        }
     }
    
     @media (max-width: 600px){
        form{
           padding: 20px 10px;
            .area{
                display: block;
    
                .area-title{
                    text-align: left;
                    width: auto;
                    margin-bottom: 7px;
                }
                .area-input{
                   .form-btn{
                       padding: 12px;
                       width: 100%;
                   }
                }
            }
        }
    }
`;

export {ModalBackground, ModalArea};