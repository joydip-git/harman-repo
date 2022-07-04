import Welcome from './components/Welcome';
import Description from './components/Description';

function App() {
    //const design = React.createElement('div', null, 'Welcome to React JS')
    const welcomeComponent = Welcome()
    const descriptionComponent = Description()
    const design = document.createElement('div')
    design.appendChild(welcomeComponent)
    design.appendChild(descriptionComponent)
    return design
}

export default App;
