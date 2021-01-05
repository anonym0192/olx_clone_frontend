import React, {useState, useEffect , useRef} from 'react';
import {PageTitle, PageContainer, ErrorMsg} from '../../components/MainComponents';
import {useHistory} from 'react-router-dom';
import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import { PageArea } from './styled';
import useAPI from '../../helpers/OlxAPI';
import {formatCurrencyToNumber} from '../../helpers/Utils';

function PostNewAd(){

    const api = useAPI();
    const history = useHistory();
    
    const [categories, setCategories] = useState([]);
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [priceNegotiable, setpriceNegotiable] = useState(false);
    const [description, setDescription] = useState('');
    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState('');

    const mask = createNumberMask({
                    prefix: 'R$ ',
                    includeThousandsSeparator: true,
                    thousandsSeparatorSymbol: '.',
                    decimalSymbol: ',',
                    allowDecimal: true
                    });

    let fileField = useRef();

    useEffect(() => {

        const getCategories = async () => {

            const categories = await api.getCategories();
            setCategories(categories);
        }  
        getCategories();
    }, []);
    

    const handleSubmit = async (e) => {
        
        e.preventDefault();
        setDisabled(true);

        setError('');

        let erros = [];

        if(!title.trim()){
            erros.push("O título não foi preenchido");
        }
        if(!category){
            erros.push("Categoria não selecionada");
        }
        if(!price && !priceNegotiable){
            erros.push("Preço não selecionado");
        }
        if(fileField.current.files.length === 0){
            erros.push("Imagem não selecionada");
        }

        if(erros.length === 0){

            let fData = new FormData();
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
            
            const json = await api.postAd(fData); 

            if(json.error){
                setError(json.error);
            }else{
                history.push(`/ad/item/${json.data.id}`);
                }
        }else{
            setError(erros[0]);
        } 
        setDisabled(false);   
    }
    return (
        <PageContainer>
            <PageTitle>Postar Novo Anúncio</PageTitle>
            { error &&
                <ErrorMsg>{error}</ErrorMsg>
            }
            <PageArea className="v-height">
                    <form onSubmit={(e) => handleSubmit(e)} encType="multipart/form-data">

                        <label className="area">
                            <div className="area-title">Titulo</div>
                            <div className="area-input">
                                <input type="text" required onChange={ e => setTitle(e.target.value)}
                                min="3" max="15" disabled={disabled}/>
                            </div>                  
                        </label>

                        <label className="area">
                            <div className="area-title">Categoria</div>
                            <div className="area-input">
                                <select onChange={(e) => setCategory(e.target.value)} disabled={disabled}>
                                    <option></option>
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
                                onChange={ e => setPrice(e.target.value)} 
                                disabled={disabled}/>
                            </div>                  
                        </label>
                        <label className="area">
                            <div className="area-title">Preço Negociável</div>
                            <div className="area-input">
                                <input type="checkbox" onChange={ e => setpriceNegotiable(!priceNegotiable)} disabled={disabled} />
                            </div>                  
                        </label>
                        <label className="area">
                            <div className="area-title">Descrição</div>
                            <div className="area-input">
                                <textarea onChange={ e => setDescription(e.target.value )} disabled={disabled}/>
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
                                <input className="form-btn" onClick={(e)=>handleSubmit(e)} type="submit" value="Postar Anúncio " disabled={disabled}/>
                            </div>                  
                        </label>
                    </form>
            </PageArea>
        </PageContainer>
    );                        
}
export default PostNewAd;