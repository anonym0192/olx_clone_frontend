import Cookies from 'js-cookie';

export const isLogged = () => {

    let token = Cookies.get("token");
    
    if( token ){
        return true;
    }else{
        return false;
    } 
}

export const doLogin = ( token , remember = false) => {

    if(remember===true){
        Cookies.set("token", token, {expires: 90});
    }else{
        Cookies.set("token", token);
    } 
}

export const doLogout = () => {
    Cookies.remove('token');
}
