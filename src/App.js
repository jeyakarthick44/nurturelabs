import React from 'react';
import './App.css';
import Aside from './components/Aside';
import Section from './components/Section';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';


function App() {
  return (
    <div className="App">
      <Topbar />
      <Sidebar />
      <Section />
      <Aside />
    </div>
  );
}

export default App;
