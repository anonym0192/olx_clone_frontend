import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {PageContainer, PageTitle} from '../../components/MainComponents';
import ReactPaginate from 'react-paginate';
import {SearchArea, PageArea} from './styled'; 
import useApi from '../../helpers/OlxAPI';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import AdItem from '../../components/partials/AdItem';

const Home = () => {

    const api = useApi();

    const [stateList, setStateList] = useState([]);
    const [categoryList, setCategoryList] = useState([]);
    const [adList, setAdList] = useState([]);

    useEffect( () => {
        const getStatesList = async () => {
            const states = await api.getStates();
            setStateList(states);
        };
        getStatesList();
    }, []);

    useEffect(() => {
        const getCategoryList = async () => {
            const categories = await api.getCategories();
            setCategoryList(categories);
        };
        getCategoryList();
    }, []);

    useEffect(() => {
        const getAdList = async () =>  {
            const result = await api.getAds({
                sort: 'desc',
                limit: '12'
            });
            if(result.ads){
                setAdList(result.ads);
            }
        }
        getAdList();
    }, []);


    return (
    <>
        <SearchArea>
            <PageContainer>
                <div className="search-box">
                    <form method="get" action="/ads">
                        <input type="text" name="q" placeholder="O que você procura?"/>
                        <select name="state">
                            <option></option>
                            {
                                    stateList.map((state, key) => 
                                    <option key={key} value={state.name}>{state.name}</option>
                            )
                            }
                        </select>
                        <button type="submit"><FontAwesomeIcon icon={faSearch} size="sm" />Pesquisar</button>
                    </form>
                </div>

                <div className="category-list">
                    {
                        categoryList.map((cat, key) => 
                            <Link key={key} to={`/ads?cat=${cat.slug}`} className="category-item">
                                <div className="icon-area">
                                    <img src={cat.icon} alt={`${cat.name} icon`} />
                                </div>
                                <span>{cat.name}</span>
                            </Link>
                        )
                    }
                </div>
            </PageContainer>
        </SearchArea>

        <PageContainer>
            <PageArea>
                <h2>Recent Ads</h2>
                <div className="ad-list">
                    {
                        adList.map( (ad , key) => 
                            <AdItem key={key} data={ad} />
                    )}
                </div>

                <Link to="/ads" className="see-all-link">View All >></Link>

                <hr/>
                        
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </p>

                <hr/>

                <p>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.    
                </p>
            </PageArea>
        </PageContainer>
    </>
    );

}

export default Home;