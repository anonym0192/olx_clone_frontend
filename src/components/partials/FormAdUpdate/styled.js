import styled from 'styled-components';

export const FormArea = styled.div`

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
`;