import React from 'react'
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import MainHall from './components/Basic/Main/MainHall';
import DialogsContainer from './components/Basic/Dialogs/DialogsContainer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Settings from './components/Basic/Settings/Settings';
import Create from './components/Basic/Table/Create/Create';



const App = (props) => { 
  
  return (
      <Router>
      <div className="app-request">
        <Header />
        <Navbar />
        <div className="app-request-content">
          <Routes>
            <Route path="/MainHall" element={<MainHall />} />
            <Route path="/Dialogs" element={<DialogsContainer />} />
            <Route path="/Create" element={<Create />} />
            <Route path="/Settings" element={<Settings state={props.state} dispatch={props.dispatch} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
