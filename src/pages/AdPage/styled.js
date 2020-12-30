import styled from 'styled-components';

export const PageArea = styled.div`

    
    display: flex;
    padding: 20px 5px;
    min-height: 90vh;

    .box{

        background-color: #fff;
        border-radius: 5px;
        margin-bottom: 20px;
        box-shadow: 0px 0px 4px;
        display: flex;
        overflow-wrap: break-word;
    }

    .box-padding{ 
        padding: 10px;
    }
    

    .left-side{
        flex: 2;
        margin-right: 15px;

        .ad-image{
            width: 320px;
            height: 320px;
            .each-image{
                img{
                    width: 320px;
                    height: 320px; 
                    margin-right: 10px;
                    background-size: cover;
                }
            }
        }

        
        .ad-info{
            flex: 1;
            .ad-name{
                padding: 10px;
                h2{
                    margin: 0;
                }
                small{
                    color: #535151;

                }
            } 
            .ad-description{
                padding: 10px;
                color: #535151;
            }
        }
        
    }

    .right-side{
        flex: 1;

        .price{
            span{
                display: inline-block;
                font-size: 22px;
                color: blue;
                font-weight: bold;
            }
        }

        .seller-link{
            text-decoration: none;
            display: block;
            background-color: blue;
            color: #fff;
            padding: 10px;
            border-radius: 5px;
            font-weight: bold;
            margin-bottom: 20px;
            text-align: center;
        }

        .created-by{
            flex-direction: column;

            span{
                margin-bottom: 10px;
                strong{
                    
                }
            }
        }
    }
    @media (max-width: 600px){
        
        flex-direction: column;

        .left-side{
            padding: 10px;
            margin: 0;
            .box{
                flex-direction: column;
                .ad-image{
                    width: 100%;
                    height: auto;

                    .each-image img{
                        width: 100%;
                        height: auto;
                    }
                }
            }

        }

        .right-side{
            padding: 10px;

        }

    }    
`;

export const FakeLoad = styled.div`
    padding: 15px;
    width: 100%;
    height: ${ props => props.height || '20px' };
    background-color: #e6e5e5;
    border-radius: 5px;
`;

export const BreadCrumb = styled.div`

    margin-top: 15px;
    margin-bottom: 15px;

    a{
        font-size: 14px;
        color: #000;
        padding: 5px;
    }

    @media (max-width: 600px){
        padding: 0 15px;
        margin-bottom: -10px;
    }
`;

export const RelatedAds = styled.div`

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


`;