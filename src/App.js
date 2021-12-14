import './App.css';

import Home from './screen/Home/Home';
import Spacecraft from './screen/Spacecraft/Spacecraft';
import Astronauts from './screen/Astronauts/Astronauts';
import News from './screen/News/News';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='spacecraft' element={<Spacecraft />} />
          <Route path='astronauts' element={<Astronauts />} />
          <Route path='news' element={<News />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
