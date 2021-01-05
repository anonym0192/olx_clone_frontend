import styled from 'styled-components';

const PageArea = styled.div`

display: flex;
margin-top: 10px;
min-height: 100vh;

.left-side{
    min-width: 25%;
    padding: 5px;
     input, select{
        padding: 5px;
        width: 100%;
        height: 40px;
        font-size: 17px;
        outline: none;
        border: 2px solid #9bb83c;
        border-radius: 5px;
    }
    .filter-name{
        margin-top: 10px;
    }

    ul, li{
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .category-item{
        display: flex;
        align-items: center;
        padding: 10px 5px;
        border-radius: 5px;
        cursor: pointer; 

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

        span{
            font-size: 14px;
            margin-left: 5px;
        }
    }

    .category-item:hover,
    .category-item.active{
        background-color: #9bb83c;
        color: #fff;
    }
}

.right-side{
    padding: 5px;

    .warning-msg{
        padding: 15px;
        font-size: 16px;
    }
    h2{
        font-size: 20px;
        padding: 0 10px;
    }
    .ad-list{
        display: flex;
        flex-wrap: wrap;
        min-height: 490px;
        .ad-item{
            width: 33%;
        }
    }

    .pagination-area{
        display: flex;
        justify-content: center;
        margin-bottom: 20px;

        .pagination{
            display: flex;
            list-style: none;
            li{
                margin: 0 15px;
                height: 30px;
                display: flex;
                align-items: center;
                border-radius: 5px;
                cursor: pointer;
            }
            a{
                display: inline-block;
                padding: 5px 10px;
                border-radius: 5px;
                flex: 1;    
            }
            .previous,
            .next,
            .active{
                background-color: #ff5707;
                color: #fff;
            }
        }
        .page-item{
            border: 1px solid #000;
            width: 25px;
            height: 25px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: 10px;
            cursor: pointer;

            &:hover{
                border: 1px solid #999;
            }    
        }
        .active{
            background-color: #ccc;
        }
    }
}

@media (max-width: 600px){
    flex-direction: column;

    .left-side{
        padding: 10px;

        ul{
            display: flex;
            flex-wrap: wrap;
            li{
                width: 50%;
            }
        }

    }

    .right-side{
        padding: 10px;
        .ad-list{
            .ad-item{
                width: 50%
            }
        }

    }
}

`;

export {PageArea};

