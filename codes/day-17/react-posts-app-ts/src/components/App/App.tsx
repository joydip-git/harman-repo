import React from 'react';
import AppRoutes from '../../routes/AppRoutes';
import DashBoard from '../common/DashBoard/DashBoard';
import './App.css';

function App() {
  return (
    <div className="App">
      <DashBoard />
      <br />
      <AppRoutes />
    </div>
  );
}

export default App;
