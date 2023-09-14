import React from 'react';
import { Route,Routes } from 'react-router-dom';

import Home from '../pages/home';
import RegisterComponent from '../pages/register';
import ProfilComponent from '../pages/profil';
import LoginComponent from '../pages/login';
import {Header} from '../src/components/header/index';
//import CharacterList from './CharacterList';
import './App.css';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Header />} >
        <Route index element={<Home />} />
        <Route path="/register" element={<RegisterComponent />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/profil" element={<ProfilComponent />} />
        <Route path="/logout" />
        </Route>
      </Routes>
      
  
)}

export default App;
