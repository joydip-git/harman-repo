import React from 'react';
import './App.css';
import ErrorHandler from './ErrorHandler';
//import Hero from './Hero';
import SimpleHero from './SimpleHero';

const logError = (err: Error, errorStack: any) => {
  console.log(err.message);
  console.log(errorStack);
}

function App() {
  return (
    <div className="App">
      <span>Welcome to Error handling</span>
      <br />
      {/* <Hero heroName='Batman' />
      <Hero heroName='Superman' />
      <Hero heroName='Joker' /> */}
      <SimpleHero heroName='Batman' />
      <SimpleHero heroName='Superman' />
      <ErrorHandler errorLogger={logError}>
        <SimpleHero heroName='Joker' />
      </ErrorHandler>
    </div>
  );
}

export default App;
