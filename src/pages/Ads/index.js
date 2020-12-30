import React, {useState, useEffect} from 'react';
import {useLocation, useHistory} from 'react-router-dom';
import {PageContainer, PageTitle} from '../../components/MainComponents';
import {PageArea} from './styled'; 
import useApi from '../../helpers/OlxAPI';
import AdItem from '../../components/partials/AdItem';
import ReactPaginate from 'react-paginate';

let timer = 0;

const Ads = () => {

    const api = useApi();
    const history = useHistory();

    const useQueryString = () => {
        return new URLSearchParams(useLocation().search);
    }

    const query = useQueryString();

    const [q, setQ] = useState(query.get('q') !== null ? query.get('q') : '');
    const [cat, setCat] = useState(query.get('cat') !== null ? query.get('cat') : '');
    const [state, setState] = useState(query.get('state') !== null ? query.get('state') : '');
    const [stateList, setStateList] = useState([]);
    const [categoryList, setCategoryList] = useState([]);
    const [adList, setAdList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
   

    let limit = 5;  //Number of ads per page
    let offset = 0;

    const getAdList = async () =>  {

        setLoading(true);

        const result = await api.getAds({
            sort: 'desc',
            limit,
            q,
            cat,
            state,
            offset
        });

        const ads = result.ads || [];
    
        setAdList(ads);
        setLoading(false);

        //Create de pagination
        if(ads.length > 0){   
            if(ads.length >= limit){   
                setPageCount(Math.ceil(result.total / ads.length));
            }
        }else{
            setPageCount(0);
        }
    }

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

    //Create update the queryString when the state change 
    useEffect(() => {

        const queryString = [];

        if(q !== ''){
            queryString.push('q='+q);
        }
        if(state !== ''){
            queryString.push('state='+state);
        }
        if(cat !== ''){
            queryString.push('cat='+cat);
        }

        history.replace({
            search: queryString.join('&')
        });

        if(timer){
            clearTimeout(timer);
        }
        timer = setTimeout(function(){
            setCurrentPage(0);
            offset = 0;
            getAdList();
            
        },2000)

    }, [q, state, cat]);

   const handlePageClick = (data) => {
        let selected = data.selected;
        offset = Math.ceil(selected * limit);
        getAdList();
      }; 


    return (
    <>
    <PageContainer>
            <PageArea>
                <div className="left-side">
                    <form method="get">
                        <input type="text" name="q" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Esta procurando algo?"/>
                        <div className="filter-name">Estado:</div>
                        <select name="state" onChange={(e) => setState(e.target.value)}>
                            <option>{state}</option>
                            {stateList.map((i, k) => 
                                <option key={k}>{i.name}</option>)
                            }
                        </select>
                        <div className="filter-name">Categoria:</div>
                        <ul>
                            {categoryList.map(item=> 
                                <li 
                                    key={item.id} 
                                    onClick={() => setCat(item.slug)}
                                    className={`category-item ${ cat == item.slug ? 'active' : ''}` }>
                                    <div className="icon-area">
                                        <img src={item.icon} alt={`${item.name} icon`} />
                                    </div>
                                    <span>{item.name}</span>
                                </li>)
                            }      
                        </ul>
                    </form>
                </div>
                <div className="right-side">
                        <h2>Resultados</h2>
                        {
                            loading && adList.length === 0 &&
                                <div className="warning-msg">Carregando...</div>
                        }
                        {
                            !loading && adList.length === 0 &&
                                <div className="warning-msg">Nenhum resultado foi encontrado</div>
                        }
                        <div className="ad-list">
                            {
                                adList.map((i, k) => 
                                    <AdItem key={k} data={i}/>
                                )
                            }
                        </div>

                        {pageCount > 1 &&         
                            <div className="pagination-area">
                                <ReactPaginate
                                    previousLabel={'previous'}
                                    nextLabel={'next'}
                                    breakLabel={'...'}
                                    breakClassName={'break-me'}
                                    pageCount={pageCount}
                                    marginPagesDisplayed={2}
                                    pageRangeDisplayed={limit}
                                    onPageChange={handlePageClick}
                                    containerClassName={'pagination'}
                                    subContainerClassName={'pages pagination'}
                                    activeClassName={'active'}
                                />
                            </div>
                        }
                </div>
            </PageArea>
        </PageContainer>
    </>
    );
}

export default Ads;