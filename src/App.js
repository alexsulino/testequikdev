import React from 'react';
import Routes from './Rotas';

import Header from './Layout/Header';
import Footer from './Layout/Footer';

function App (){
  return (
    <div>
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
