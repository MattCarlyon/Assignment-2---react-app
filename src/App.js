//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import HomePicture from './components/HomeImage';


function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
      </div>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/About" exact element={<About />}/>
          <Route path="/Contact" exact element={<Contact />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
