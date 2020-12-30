import styled from 'styled-components';

const SearchArea = styled.div`

    padding: 20px 0;
    background-color: #efedeb;
    border-top: solid 2px #c3c3c3;
    border-bottom: solid 2px #c3c3c3;

    .search-box{

        background-color: #8db740;
        padding: 20px 12px;
        border-radius: 5px;

        form{
            display: flex;

            input, 
            select{

                height: 40px;
                font-size: 15px;
                outline: none;
                color: #111;
                margin-right: 20px;
                padding: 0px 10px;
                border-radius: 5px;
                border: none;
            

            }
            input{
                flex: 1;
            }
            select{
                width: 90px;
            }

            button{

                height: 40px;
                font-size: 15px;
                padding: 0 18px;
                background-color: #1da4ec;
                color: #fff;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                
                outline: none;

                svg{
                    margin-right: 7px;
                    vertical-align: bottom;
                }

            }
        }

    }
    .category-list{

        display: flex;
        flex-wrap: wrap;
        padding: 15px 10px;
        overflow-x: hidden;

        .category-item{
            align-items: center;
            margin-top: 15px;
            padding: 0 15px;
            text-decoration: none;
            color: #1da4ec;
            width: 25%;
            display: flex;
            align-items: center;
            .icon-area{
                background-color: #f9f9f9;
                padding: 15px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 35px;
                margin-right: 10px;
            }
                img{
                    width: 25px;
                    height: auto;
                }
            }

        }
        

    }

    @media (max-width: 600px){
        .search-box {
            form{
                flex-direction: column;
                input, select, button{
                    margin-top: 15px;
                    width: 100%;
                    flex: none;
                }
            }
        }

        .category-list{
            flex-wrap: wrap;
            .category-item{
                padding: 7px;
                width: 50%;
            }
        }
        
    }

`;

const PageArea = styled.div`
    min-height: 100vh;
    h2{
        font-size: 20px;
        font-weight: bold;
        margin: 40px 10px;
    }

    .ad-list{
        display: flex;
        flex-wrap: wrap;
        
        .ad-item{
            width: 25%;
            
        }
    }

    .see-all-link{
        color: #1da4ec;
        font-size: 14px;
        text-decoration: none;
        font-weight: 600;
        float: right;
        margin: 20px 0;
        padding: 10px;
        display: inline-block;
    }

    hr{
        clear: both;
    }

    p{
        margin: 25px 10px;
        line-height: 1.5;
        color: #2f2e2f;
        font-size: 14px;
    }

    @media (max-width: 600px){
        .ad-list{
            .ad-item{
                width: 50%
            }
        }
    }
`;

export {SearchArea, PageArea};

