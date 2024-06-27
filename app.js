import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import React from 'react';
import Homepage from './pages/home';
import Editpage from './pages/edit';

function App() {
  return (
    <div className="App">
    <h1>Meme Generator</h1>
    <Routes>
    <Route path='/' element={<Homepage/>}/>
    <Route path='/edit' element={<Editpage/>}/>

    </Routes>
      
    </div>
  );
}
 
export default App;
