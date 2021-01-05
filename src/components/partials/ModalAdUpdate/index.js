import React, {useState, useEffect, useRef} from 'react';
import {FormArea} from './styled';
import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import useApi from '../../../helpers/OlxAPI';
import {ErrorMsg} from '../../MainComponents';
import {formatCurrencyToNumber, formatNumberToReal} from '../../../helpers/Utils';

export default ({selectedAd, setStatus}) => {
    const api = useApi();

    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [priceNegotiable, setPriceNegotiable] = useState(false);
    const [description, setDescription] = useState('');
    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState('');
    const [categories, setCategories] = useState([]);

    const fileField = useRef();

    useEffect(()=>{
        const getCategories = () =>{
            api.getCategories().then((categories)=>setCategories(categories));  
        };
        getCategories();
    }, []);

    useEffect(()=>{
        setTitle(selectedAd.title || '');
        setDescription(selectedAd.description || '');
        setPrice(formatNumberToReal(selectedAd.price || ''));
        setPriceNegotiable(selectedAd.priceNegotiable || '');
    }, [selectedAd]);

    const mask = createNumberMask({
        prefix: 'R$ ',
        thousandsSeparatorSymbol: '.',
        decimalSymbol: ',',
        requireDecimal: true
    });
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisabled(true);

        const fData = new FormData();
        fData.append('id', selectedAd.id);
        fData.append('title', title);
        fData.append('price', price ? formatCurrencyToNumber(price) : '');
        fData.append('priceNegotiable', priceNegotiable);
        fData.append('description', description);
        fData.append('category', category);

        if(fileField.current.files.length > 0){
            for(let i = 0 ; i < fileField.current.files.length ; i++){
                fData.append('img', fileField.current.files[i]);
            }
        }

        const result = await api.updateAd(fData, selectedAd);
        if(result.error){
            setError(result.error);
        }else{
            setStatus(false);
            window.location.reload(true);
        }
        setDisabled(false);
    }

    return (
        <FormArea>
            {error &&
                    <ErrorMsg>{error}</ErrorMsg>
            } 
            <form onSubmit={(e) => handleSubmit(e)} encType="multipart/form-data">
                <label className="area">
                    <div className="area-title">Titulo</div>
                    <div className="area-input">
                        <input type="text" onChange={(e)=> setTitle(e.target.value)} value={title} disabled={disabled} />
                    </div>                  
                </label>
                <label className="area">
                    <div className="area-title">Categoria</div>
                    <div className="area-input">
                        <select onChange={(e)=>setCategory(e.target.value)} disabled={disabled}>
                            <option value={selectedAd.category?.id}>{selectedAd.category?.name}</option>
                            {categories.map(item =>  
                                <option key={item.id} value={item.id}>{item.name}</option>
                            )}                        
                        </select>
                    </div>                  
                </label>
                <label className="area">
                    <div className="area-title">Preço</div>
                    <div className="area-input">
                        <MaskedInput mask={mask} 
                        placeholder="R$"
                        className="price-input" 
                        onChange={(e)=> setPrice(e.target.value)} 
                        disabled={disabled} value={price}/>
                    </div>                  
                </label>
                <label className="area">
                    <div className="area-title">Preço Negociável</div>
                    <div className="area-input">
                        <input type="checkbox" onChange={(e)=> setPriceNegotiable(!priceNegotiable)} disabled={disabled} checked={priceNegotiable}/>
                    </div>                  
                </label>
                <label className="area">
                    <div className="area-title">Descrição</div>
                    <div className="area-input">
                        <textarea onChange={(e)=>setDescription(e.target.value)} disabled={disabled}/>
                    </div>                  
                </label>
                <label className="area">
                    <div className="area-title">Imagem (1 ou mais)</div>
                    <div className="area-input">
                        <input type="file" ref={fileField} multiple disabled={disabled}/>
                    </div>                  
                </label>
                <label className="area">
                    <div className="area-title"></div>
                    <div className="area-input">    
                        <input className="form-btn" type="submit" value="Postar Anúncio " disabled={disabled}/>
                    </div>                  
                </label>
            </form>
        </FormArea>
    );
} 