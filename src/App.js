import React from 'react';
import {BrowserRouter,Routes, Route} from "react-router-dom";
import Login from './screens/Login';
import Cadastro from './screens/Cadastro';
import PagInicial from './screens/PagInicial';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/cadastro' element={<Cadastro/>} />
      <Route path='/inicial' element={<PagInicial/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
