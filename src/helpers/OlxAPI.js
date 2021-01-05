import Cookies from 'js-cookie';
import qs from 'qs';

const basename = 'http://localhost:7777';//"http://alunos.b7web.com.br:501";

const apiFetchPost = async (pathname, body) => {

    if(!body.token){
        const token = Cookies.get('token'); 
        console.log(token);
        if(token){
            body.token = token;
        }
    }

    const res = await fetch(basename+pathname, 
        {
            method: 'post',
            headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'                
            },
            body: JSON.stringify(body)
        });

        const json = await res.json();

        if(json.notallowed){
            window.location.href = '/';
            return;
        }
        return json;
}

const apiFetchGet = async (pathname, params ,fullname = false) => {

    let url = "";

    if(fullname){       
         url = pathname;
    }else{
        url = basename+pathname;  
        if(params){
            url += "?"+qs.stringify(params);
        }
    }
    const res = await fetch(url,{
        method: 'get',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json; charset=utf-8'
        }
    });
    const json = await res.json();

    if(json.notallowed){
        window.location.href = '/signin';
        return;
    }

    return json;   
}

const apiFetchFile = async (pathname, body) =>{

    if(!body.token){
        const token = Cookies.get('token');
        if(token){
            body.append('token', token);
        }
    }

    const res = await fetch(basename+pathname, 
        {
            method: 'post',
            body
        });

        const json = await res.json();

        if(json.notallowed){
            window.location.href = '/signin';
            return;
        }

        return json;

}

const apiFetchPut = async (pathname, body) => {

    if(!body.token){
        const token = Cookies.get('token');
        if(token){
            body.token = Cookies.get('token');
        }
    }

    const res = await fetch(basename+pathname, 
        {
            method: 'put',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(body)
                
        });

    const json = await res.json();
    return json;
}

const OlxAPI = {
    login: async function(email, password){

        const json = await apiFetchPost('/signin', {email, password});
        return (json) ? json : '';
    },

    register: async function(name, email, password, stateLocal){

        const json = await apiFetchPost('/signup', {
            name,
            email,
            password,
            state: stateLocal
        });

        return json;
    },
    getStates: async function(){

        const json = await apiFetchGet('/states');
         
        return (json.data) ? json.data : [];
         
    },

    getCategories: async () => {
        
        const json = await apiFetchGet('/categories');
        return (json.data) ? json.data : [];

        },

    getAds: async (options) => {
        let url = '/ads';
        const json = await apiFetchGet(url, options, false);

        return (json.data) ? json.data : {};
    },

    getAd: async (id, other = false) => {
        
        const params = {id, other};    
        const json = await apiFetchGet('/ad/item', params ,false);
        
        return (json.data) ? json.data : '';
    },

    postAd: async (fData) => {

        const json = await apiFetchFile('/ad/add', fData);
        return json;
    },

    updateAd: async (fData, id) => {
        
        const json = await apiFetchFile(`/ad/${id}`, fData);
        return json;
    },

    getUser: async () => {

        const token = Cookies.get('token');
        

        const json = await apiFetchGet('/user/me', {token});
        
        return json.data ? json.data : '' ;

    },
    updateUser: async (name, email, state, password) => {

        let data = {};

        if(name){
          data.name = name;  
        }
        if(email){
            data.email = email;
        }
        if(state){
            data.state = state;
        }
        if(password){
            data.password = password;
        }
        
        const json = await apiFetchPut('/user/me', data);
        return json;
    }
};

export default () => OlxAPI;