import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import useAPI from '../../helpers/OlxAPI';
import {PageTitle, PageContainer, ErrorMsg, SuccessMsg} from '../../components/MainComponents';
import { PageArea, UserProduct } from './style';
import {formatNumberToReal} from '../../helpers/Utils';
import Modal from '../../components/partials/Modal';
import ModalAdUpdate from '../../components/partials/ModalAdUpdate';

function MyAccount(){

    const api = useAPI();
    const history = useHistory();
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [state, setState] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [disabled, setDisable] = useState(false);
    const [modalStatus, setModalStatus] = useState(false);
    const [selectedAd, setSelectedAd] = useState('');

    const [stateList, setStateList] = useState([]);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [adList, setAdList] = useState([]);

    useEffect(() => {

        const getStates = async () => {
           const states = await api.getStates();
           setStateList(states);
        }
        getStates();
    }, []);

    useEffect(() => {

        const getUser = async () => {

            const user = await api.getUser();
            if(user){       
                setName(user.name);
                setEmail(user.email);
                setState(user.state.name);
                setAdList(user.ads);
            }   
        };
        getUser();
    }, []);

    const submitHandle = async (e) => {
    
        e.preventDefault();
        
        setError('');
        setSuccess('');
        setDisable(true);

        let result = '';
        if(e.target.id.includes('password-btn')){
            
            if(password !== confirmPassword){
                setError("As duas senhas não batem");
                setDisable(false);
                return;
            }
            result = await api.updateUser('', '', '', password);
        }else{
            result = await api.updateUser(name, email, state, '');
        }

        if(result.error){
            if(Array.isArray(result.error))
                setError(result.error[0]);
            else
                setError(result.error)
        }else{
            history.push('/my-account');
            setSuccess('Os dados foram alterados com sucesso!')
        }
        setDisable(false);
    }

    const adClickHandle = (ad) =>{   
        setSelectedAd(ad);
        setModalStatus(true);
    }

    return (
        <PageContainer>
            <PageArea className="v-height">       
                <PageTitle>Minha Conta</PageTitle>

                <h2>Editar Dados Pessoais</h2>

                {error &&
                    <ErrorMsg>{error}</ErrorMsg>
                }
                {success &&
                    <SuccessMsg>{success}</SuccessMsg>
                }
                <div className="form-area">
                    <form method="post">
                        <label className="area">
                            <div className="area-title">Nome</div>
                            <div className="area-input">
                                <input type="text" required onChange={(e) => setName(e.target.value)} 
                                value={name} disabled={disabled}/>
                            </div>                  
                        </label>
                        <label className="area">
                            <div className="area-title">Email</div>
                            <div className="area-input">
                                <input type="email" required onChange={(e) => setEmail(e.target.value)}
                                value={email} disabled={disabled}/>
                            </div>                  
                        </label>
                        <label className="area">
                            <div className="area-title">Estado</div>
                            <div className="area-input">
                                <select name="state" onChange={(e)=>setState(e.target.value)}>
                                    <option>{state}</option>
                                    {stateList.map((i, k) =>
                                        <option key={k}>{i.name}</option>
                                        )}
                                </select>
                            </div>                  
                        </label>
                        <label className="area">
                            <div className="area-title"></div>
                            <div className="area-input">
                                <input type="submit"
                                className="form-btn" id="userInfo-btn" onClick={submitHandle} disabled={disabled}/>
                            </div>                  
                        </label>       
                    </form>

                    <form method="post">
                        <label className="area">
                                <div className="area-title">Nova Senha</div>
                                <div className="area-input">
                                    <input type="password" required onChange={(e) => setPassword(e.target.value)}
                                    value={password} disabled={disabled}/>
                                </div>                  
                            </label>
                            <label className="area">
                                <div className="area-title">Confirmar Nova Senha</div>
                                <div className="area-input">
                                    <input type="password" required onChange={(e) => setConfirmPassword(e.target.value)}
                                    value={confirmPassword} disabled={disabled}/>
                                </div>                  
                            </label>
                            <label className="area">
                            <div className="area-title"></div>
                            <div className="area-input">
                                <input type="submit"
                                className="form-btn" id="password-btn" onClick={submitHandle} disabled={disabled}/>
                            </div>                  
                        </label>
                    </form>
                </div>

                <h2>Meus Produtos</h2>
                             
                <div className="ad-list">
                    {
                        adList.map((ad, key) => 
                            <UserProduct key={ad.id} onClick={()=>{adClickHandle(ad)}}>
                                <div className="ad-image">
                                    <img src={ad?.images[0]} alt="Product" />
                                </div>
                                <div className="ad-info">
                                    <div className="title">{ad.title}</div>
                                    {<div className="price">{formatNumberToReal(ad.price)}</div>}
                                </div>
                            </UserProduct>
                        )
                    }
                </div>
                <Modal status={modalStatus} setStatus={setModalStatus} >
                    <ModalAdUpdate selectedAd={selectedAd} setStatus={setModalStatus}/>
                </Modal>
            </PageArea>
        </PageContainer>
    );
}
export default MyAccount;