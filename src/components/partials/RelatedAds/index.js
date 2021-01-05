import React, {useState, useEffect} from 'react';
import {Container} from './styled';
import {concat, slice} from 'lodash';
import AdItem from '../../partials/AdItem';

export default ({ads, limit}) =>{

    const LIMIT = limit || 8;
    const LENGTH = ads.length;

    const [showMore,setShowMore] = useState(true);
    const [list,setList] = useState([]);
    const [index,setIndex] = useState(LIMIT);

    
    const loadMore = () =>{
        const newIndex = index + LIMIT;
        const newShowMore = newIndex < LENGTH ;
        const newList = concat(list, slice(ads, index, newIndex));

        setIndex(newIndex);
        setList(newList);
        setShowMore(newShowMore);
    }

    useEffect(()=>{
            setShowMore(LENGTH > LIMIT);  
            setList(slice(ads, 0, LIMIT));
            setIndex(0 + LIMIT);
    },[ads]);

        return (
            <Container>
                        {ads?.length > 0 &&
                        <>
                            <h2>Outras ofertas do vendedor</h2>
                            <div className="related-list">
                            {
                                list.map((item, key) => 
                                    <AdItem key={key} data={item}/>
                                )
                            }
                            </div>

                            {showMore && 
                                <div className="loadMore-area">
                                    <button onClick={loadMore}> Carregar Mais </button>
                                </div>
                            }
                        </>
                        }
            </Container>
        )

}