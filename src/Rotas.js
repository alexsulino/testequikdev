import React from 'react';
import { BrowserRouter as Router, Routes, Route, Container } from "react-router-dom";


import Homepage from './Pages/Homepage';
import Login from './Pages/Login';
import Contato from './Pages/Contato';

import Tutorial from './Pages/Tutorial';
import ManipulandoElementosForm from './Pages/Tutorial/ManipulandoElementosForm';
import ListaMap from './Pages/Tutorial/ListaMap';
import ListaCarros from './Pages/Tutorial/ListaCarros';

import NewProject from './Project/NewProject';
import Projects from './Project/Projects';
import Project from './Project/Project';

function Rotas (){
        return(
        <>
       <Router>
      
          <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/contato" element={<Contato/>} />

            <Route path="/tutorial" element={<Tutorial/>} />
            <Route path="/tutorial/ManipulandoElementosForm" element={<ManipulandoElementosForm/>} />
            <Route path="/tutorial/ListaMap" element={<ListaMap/>} />
            <Route path="/tutorial/ListaCarros" element={<ListaCarros/>} />

            <Route path="/project/newProject" element={<NewProject/>} />
            <Route path="/project/projects" element={<Projects/>} />
            <Route path="/project/project/:id" element={<Project/>} />

          </Routes>
         
      </Router>     
        </> 
    );
};
export default Rotas;
