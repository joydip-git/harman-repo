import React from 'react';
import App from './App';
import { act } from "react-dom/test-utils";
import { unmountComponentAtNode } from 'react-dom';
import { render } from 'react-dom';
//import { createRoot } from 'react-dom/client';

describe(
  'testing App component render',
  () => {

    let container = null
    //let root = null
    beforeEach(
      () => {
        container = document.createElement('div')
        document.body.appendChild(container)
      }
    )

    afterEach(
      () => {
        unmountComponentAtNode(container)
        container.remove()
        container = null
      }
    )

    it(
      'render test for App',
      () => {
        act(
          () => {
            render(<App />, container)
          }
        )
        expect(container).toHaveTextContent('Hello, stranger')
      }
    )
  }
)




