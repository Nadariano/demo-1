// import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation'
import Players from './components/Players'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello, I am Nadariano!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <Navigation/>
      <Players/>
      <Footer/>
    </div>
  );
}

export default App;
