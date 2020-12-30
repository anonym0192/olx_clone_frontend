import styled from 'styled-components';

const PageArea = styled.div`

padding: 10px;

h2{
    padding: 0 5px;
    font-size: 20px;
}

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
 .ad-list{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
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
    .ad-list{
        grid-template-columns: repeat(2, 1fr);
     }
}
`;


const UserProduct = styled.div`
    display: block;
    padding: 10px; 
    background-color: #fff;
    width: 100%;
    border-radius: 5px;
    margin-bottom: 25px;
    border: solid 1px transparent;
    overflow-wrap: break-word;
    
    &:hover{
        border: solid 1px #a1a1a1;
    }
    .ad-image{     
        width: 100%;
        height: auto;
        text-align: center;
        img{
            max-width: 100%;
            max-height: 100%;
        }
    }
    .title{
        color: #1da4ec;
        padding: 2px;
        font-size: 17px;
        font-weight: 600;
    }
    .price{
        color: #444242;
        padding: 2px;
    }
}
`;

export {PageArea, UserProduct};