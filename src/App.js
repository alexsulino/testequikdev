import React from 'react';
//import Routes from './Routes';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from './Componentes/Header';
import Footer from './Componentes/Footer';

import Main from './Pages/Main';
import Login from './Pages/Login';
import Contato from './Pages/Contato';

import Tutorial from './Pages/Tutorial';
import ManipulandoElementosForm from './Pages/Tutorial/ManipulandoElementosForm';
import ListaMap from './Pages/Tutorial/ListaMap';
import ListaCarros from './Pages/Tutorial/ListaCarros';

function App (){
  return (
    <div>

    <Header />

      <Router>
          <Routes>
          <Route exact path="/" element={<Main/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/contato" element={<Contato/>} />

          <Route exact path="/tutorial" element={<Tutorial/>} />
          <Route exact path="/tutorial/ManipulandoElementosForm" element={<ManipulandoElementosForm/>} />
          <Route exact path="/tutorial/ListaMap" element={<ListaMap/>} />
          <Route exact path="/tutorial/ListaCarros" element={<ListaCarros/>} />
          
          </Routes>
      </Router>

      <Footer />

    </div>
  );
}

export default App;
