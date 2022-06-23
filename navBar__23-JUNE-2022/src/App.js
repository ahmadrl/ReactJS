import logo from './logo.svg';
import './App.css';
import SortChars from './components/SortChars';
import Map from './components/Map';
import SearchFilter from './components/SearchFilter';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
          <Routes>
            <Route path="/" element={ <Home />}/>
            <Route path="/about" element={ <About />}/>
            <Route path="/contact" element={ <Contact />}/>
          </Routes>
      </div>
    </BrowserRouter>
  );
}
  // return (
  //   <>
  //   <Map />
  //   <SortChars />
  //   <SearchFilter />
  //   </>

  // );
// }

export default App;
