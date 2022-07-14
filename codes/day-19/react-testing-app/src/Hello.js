import './App.css';

function Hello(props) {
    if (props.name) {
        return <h1>Hello, {props.name}</h1>
    } else {
        return <h1>Hello, stranger</h1>
    }
}

export default Hello;