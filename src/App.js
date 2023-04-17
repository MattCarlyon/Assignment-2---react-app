//import logo from './logo.svg';
//import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import './components/About';
import './components/Contact';
import './components/HomeImage';
import HomePicture from './components/HomeImage';


function App() {
  return (
    <>
    <div>
      <Header />
    </div>
    <div>
      <HomePicture />
    </div>
    <div className="container">
      <Home />
    </div>

    </>
  );
}

export default App;
