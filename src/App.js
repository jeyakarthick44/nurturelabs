import React from 'react';
import './App.css';
import Section from './components/Section';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';

function App() {
  return (
    <div className="App">
      <Topbar />
      <Sidebar />
      <Section />
    </div>
  );
}

export default App;
