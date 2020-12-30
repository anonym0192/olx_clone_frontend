import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {PageTitle, PageContainer, ErrorMsg } from '../../components/MainComponents';
import {PageArea} from './styled';
import useAPI from '../../helpers/OlxAPI';
import {doLogin, doLogout, isLogged} from '../../helpers/AuthHandler';


function SignIn(){

    const api = useAPI();
    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);
    const [disabled, setDisable] = useState(false);
    const [error, setError] = useState('');

    useEffect(()=>{
        if(isLogged()){
            history.push('/');
        }
    },[]);


     const handleSubmit = async (e) => {

        e.preventDefault();
        setDisable(true);

        const result = await api.login(email, password);

        if(result.error){
            setError(result.error);
        }else{
            console.log(result.token);
            doLogin( result.token, remember);
            window.location.href = "/";
        }

        setDisable(false);

        };


    return (
        <> 
        <PageContainer>
            { error &&
                <ErrorMsg>{error}</ErrorMsg>
            }

            <PageTitle>Login</PageTitle>
            <PageArea className="v-height">
                <form onSubmit={(e) => handleSubmit(e)}>
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
                        <div className="area-title">Remember password</div>
                        <div className="area-input">
                            <input type="checkbox" onChange={() => setRemember( !remember )} disabled={disabled}/>
                        </div>                  
                    </label>
                    <label className="area">
                        <div className="area-title"></div>
                        <div className="area-input">    
                            <input className="form-btn" type="submit" value="Login" disabled={disabled}/>
                        </div>                  
                    </label>

                </form>
            </PageArea>
        </PageContainer>

        </>
    );

    
}

export default SignIn;