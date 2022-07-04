import './App.css';
import React from "react";
//import { createElement } from 'react'
import Welcome from './components/Welcome';
import Description from './components/Description';

function App() {
  //const design = React.createElement('div', null, 'Welcome to React JS')
  // const welcomeComponent = Welcome()
  // const descriptionComponent = Description()
  // const design = createElement('div', {}, [welcomeComponent, descriptionComponent])
  const design = (
    <div>
      <Welcome />
      <br />
      <Description />
    </div>
  )
  return design
}

export default App;
