import './App.css';
import Footer from './components/Footer';
// import Main from './components/Main';
import Players from './components/Players';
import Detail from './components/Detail';
import Contact from './components/Contact';
import News from './components/News';
import About from './components/About';
import Navigation from './components/Navigation';
import {
  Routes,
  Route,
} from "react-router-dom";

// import Counter from './components/Counter';
function App() {
  return (

    <div className='App'>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Players/>}>
        {/* <Route path='/' element={<Main/>}> */}
        </Route>
        <Route path='/detail/:id' element={<Detail/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/news' element={<News/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
      <Footer/>
    </div>

  );
}
export default App;
