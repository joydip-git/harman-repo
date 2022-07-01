import './App.css';
import Description from './Description';
import Welcome from './Welcome';
import React from 'react'

export default function App() {

  /*
  const welcome = Welcome()
  const description = Description()

  const appDesign = (
    <div>
      {welcome}
      <hr />
      {description}
    </div>
  )
  */
  const appDesign = (
    <div>
      <Welcome />
      <hr />
      <Description />
    </div>
  )
  return appDesign
}
