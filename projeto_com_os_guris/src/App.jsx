import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Home from './Pages/Home'
import './App.css';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home}/>
      {/* <Route path="/" exact component={Home}/>
      <Route path="/Quem_Somos" exact component={QuemSomos}/>
      <Route path="/Nossos_Projetos" exact component={NossosProjetos}/> */}
    </Router>
  );
}

export default App;
