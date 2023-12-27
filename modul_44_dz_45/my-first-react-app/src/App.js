import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContainer from './components/MainConteiner';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="content">
        <Sidebar />
        <MainContainer />
      </div>
    </div>
  );
};

export default App;