import React,{useState, useEffect} from 'react';
import {PageContainer} from '../../components/MainComponents';
import RelatedAds from '../../components/partials/RelatedAds';
import {PageArea, FakeLoad, BreadCrumb} from './styled';
import {useParams, Link} from 'react-router-dom';
import useApi from '../../helpers/OlxAPI';
import {Slide} from 'react-slideshow-image';
import {formatDate} from '../../helpers/Utils';


const AdPage = () => {

    const api = useApi();
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [adInfo, setAdInfo] = useState({});
    
    useEffect(() => {

        window.scrollTo(0,0);
        const getAd = async (id) => {

            const ad = await api.getAd(id, true);

            setAdInfo(ad);
            setLoading(false);     
        }
        getAd(id);
    } , [id]);

    return (
        <PageContainer>
            { adInfo.category &&
                <BreadCrumb>
                    <Link to="/"> Home </Link>
                    / 
                    <Link to={`/ads?state=${adInfo.state}`}> {adInfo.state} </Link>
                    / 
                    <Link to={`/ads?state=${adInfo.state}&cat=${adInfo.category.slug}`}> {adInfo.category.name} </Link>
                    / {adInfo.title}
                </BreadCrumb>
            }
            <PageArea>
                <div className="left-side">
                    <div className="box">
                         <div className="ad-image">
                             {loading && <FakeLoad height={'100%'}/> }

                             {adInfo.images && adInfo.images?.length > 1 &&
                                <Slide>
                                    {adInfo.images.map((img, key) =>
                                        <div key={key} className="each-image">
                                            <img src={img} alt={`Product ${key}`}/>
                                        </div>
                                    )}
                                </Slide>
                            }
                            {adInfo.images?.length <= 1 &&
                                <img src={adInfo.images[0]} alt={`Product`}/>
                            }
                         </div>
                         <div className="ad-info">
                            <div className="ad-name">
                                {loading && <FakeLoad height={'20px'}/> }
                                {adInfo.title &&
                                    <h2>{adInfo.title}</h2>
                                }
                                {adInfo.dateCreated &&
                                    <small>{formatDate(adInfo.dateCreated)}</small>
                                }
                            </div>
                            <div className="ad-description">
                                {loading && <FakeLoad height={'20px'}/> }
                                {adInfo?.description}
                                <hr/>
                                <small>Visualizações: {adInfo.views}</small>                
                            </div>
                         </div>
                    </div>
                </div>

                <div className="right-side">
                    <div className="box box-padding">
                        {loading && <FakeLoad height={'20px'}/> }
                        {adInfo.priceNegotiable &&
                            <span><b>Preço Negociavel</b></span>
                        }
                        {!adInfo.priceNegotiable && adInfo.price !== undefined &&               
                            <div className="price">Preço: <br/><span>{`R$ ${adInfo.price?.toFixed(2)}`}</span> </div>                         
                        }
                    </div>       
                    { adInfo.user && 
                        <>
                            <a className="seller-link" href={`mailto:${adInfo.user?.email}`} target="_blank">Fale com o vendedor</a>
                            <div className="box box-padding created-by">
                                <span> <strong>{`Nome: ${adInfo.user?.name}`}</strong> </span>
                                <span><small>{`E-mail: ${adInfo.user?.email}`}</small></span>
                                <span><small>{`Estado: ${adInfo.state}`}</small></span>
                            </div>
                        </>
                    }
                </div>    
            </PageArea>

            <RelatedAds ads={adInfo.others || []}/>
                    
        </PageContainer>
    );
}

export default AdPage;