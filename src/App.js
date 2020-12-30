import React from 'react';
import {connect} from 'react-redux'; 
import Routes from './Routes';
import {BrowserRouter} from 'react-router-dom';
import {Template} from './components/MainComponents';
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';
import "./App.css";

function App(){

  return(
    <BrowserRouter>
      <Template>
        <Header />   
        <Routes/>
        <Footer />
      </Template>
    </BrowserRouter>
    
  );
}


const mapStateToProps = (state) => ({
  user: state.user
});

const mapDispatchToProps = (dispatch) => ({

  setEmail: (newEmail) =>  dispatch({
    type: 'SET_EMAIL',
    payload: {email: newEmail}
    })
  });




export default connect(mapStateToProps, mapDispatchToProps)(App);
