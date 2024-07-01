import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListItem from './components/ListItem';
import Title from './components/Title';
import ProtocolDetail from './components/ProtocolDetail';
import './App.css';
import protocols from './protocols'; 
import Info from './components/Info';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Title title="Protocol Starter Pack" />
        <Routes>
         <Route path="/" element={
            <div>
              <Info />
              {protocols.map(p => (
                <ListItem key={p.number} number={p.number} title={p.title} description={p.description} />
              ))}
            </div>
          } />
          {protocols.map((protocol, index) => (
            <Route key={protocol.number} path={`/${protocol.title.toLowerCase().replace(/ /g, '-')}`} element={
              <ProtocolDetail protocol={protocol} index={index} total={protocols.length} />
            } />
          ))}
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
