//Não esta funcionando !!!!!!!!!!!!!!
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


import Main from './Pages/Main';
import Login from './Pages/Login';
import Contato from './Pages/Contato';
import Tutoriais from './Pages/Tutoriais';

function Routes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" exact component={Main} />
                <Route path="/login" component={Login} />
                <Route path="/contato" component={Contato} />
                <Route path="/tutoriais" component={Tutoriais} />
            </Routes>        
        </BrowserRouter>
    );
};

export default Routes;