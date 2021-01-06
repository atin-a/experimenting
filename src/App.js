import Alert from 'react-bootstrap/Alert';
import logo from './assets/images/logo.svg';
import './App.css';
import { Navigation } from "./components/Nav";


function App() {
  return (
    <div className="App">
      <Navigation />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Alert variant="primary">
          This is a primary alert—check it out!
        </Alert>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
