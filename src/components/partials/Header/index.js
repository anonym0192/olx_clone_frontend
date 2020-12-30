import React from 'react';
import {HeaderArea} from './styled';
import {Link} from 'react-router-dom';
import logo from '../../../assets/images/olx-logo.png';
import {isLogged} from '../../../helpers/AuthHandler';
import {doLogout} from '../../../helpers/AuthHandler';


function Header(){

    let logged = isLogged();

    const handleLogout = () => {

        doLogout();
        window.location.href = "/";
    }

    return(
    <>
        <HeaderArea>
            <div className="container">
                <div className="logo-area">
                    <Link to="/">
                        <img src={logo} alt="Olx Logo"></img>
                    </Link>
                </div>

                <nav>
                    <ul>
                        { logged &&
                            <>
                                <li><Link to="/my-account">Minha Conta</Link></li>
                                <li><button onClick={handleLogout}>Sair</button></li>
                                <li><Link to="/post-ad" className="post-btn">Postar um Anúncio</Link></li>
                            </>
                        }

                        { !logged &&
                            <>
                                <li><Link to="/signin">Login</Link></li>
                                <li><Link to="/signup">Cadastrar</Link></li>
                                <li><Link to="/post-ad" className="post-btn">Postar um Anúncio</Link></li>
                            </>                 
                        }

                    </ul>
                </nav>
            </div>
            
        </HeaderArea>
    </>
    );
}

export default Header;