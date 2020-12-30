import React, {useState, useEffect} from 'react';
import {PageTitle, PageContainer, ErrorMsg} from '../../components/MainComponents';
import { PageArea } from './styled';
import {doLogin} from '../../helpers/AuthHandler';
import useAPI from '../../helpers/OlxAPI';

function SignUp(){

    const api = useAPI();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [stateLocal, setStateLocal] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState('');
    const [statesList, setStatesList] = useState([]);

    const handleSubmit = async (e) => {

        e.preventDefault();
        setDisabled(true);

        setError('');

        if(password !== confirmPassword){
            setError("As duas senhas digitadas não batem!");
            setDisabled(false);
            return;
        }

        const result = await api.register(name, email, password, stateLocal);

        if(result.error){
            setError(result.error);
        }else{
            doLogin(result.token, false);
            window.location.href = '/';
        } 
        setDisabled(false);
    }

    useEffect(() => {
        const getStates = async () => {
            const result = await api.getStates();
            if(result){
                setStatesList(result);
            }
        }
        getStates(); 
    }, []);

    return (<>
    <PageContainer>
        <PageTitle>Cadastrar Novo Usuário</PageTitle>
        { error &&
            <ErrorMsg>{error}</ErrorMsg>
        }
        <PageArea className="v-height">
        <form onSubmit={(e) => handleSubmit(e)}>

                    <label className="area">
                        <div className="area-title">Nome</div>
                        <div className="area-input">
                            <input type="text" required onChange={ e => setName(e.target.value)} disabled={disabled}/>
                        </div>                  
                    </label>

                    <label className="area">
                        <div className="area-title">Localização</div>
                        <div className="area-input">
                            <select onChange={e => setStateLocal(e.target.value)} disabled={disabled}>
                                <option></option>
                                {statesList.map((item, key) => (
                                    <option key={key}>{item.name}</option>
                                ))}
                            </select>
                        </div>                  
                    </label>
                    <label className="area">
                        <div className="area-title">Email</div>
                        <div className="area-input">
                            <input type="email" required onChange={ e => setEmail(e.target.value)} disabled={disabled}/>
                        </div>                  
                    </label>
                    <label className="area">
                        <div className="area-title">Password</div>
                        <div className="area-input">
                            <input type="password" required onChange={ e => setPassword(e.target.value)} disabled={disabled} />
                        </div>                  
                    </label>
                    <label className="area">
                        <div className="area-title">Confirm Password</div>
                        <div className="area-input">
                            <input type="password" onChange={ e => setConfirmPassword(e.target.value )} disabled={disabled}/>
                        </div>                  
                    </label>
                    <label className="area">
                        <div className="area-title"></div>
                        <div className="area-input">    
                            <input className="form-btn" type="submit" value="Sign Up" disabled={disabled}/>
                        </div>                  
                    </label>
                </form>
        </PageArea>
    </PageContainer>
    </>
    );
}

export default SignUp;