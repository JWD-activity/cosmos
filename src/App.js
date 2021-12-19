import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './screen/Home/Home';
import Spacecraft from './screen/Spacecraft/Spacecraft';
import SpacecraftDetails from './screen/SpacecraftDetails/SpacecraftDetails';
import Astronauts from './screen/Astronauts/Astronauts';
import News from './screen/News/News';
import Navigation from './components/Navigation/Navigation';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='spacecraft' element={<Spacecraft />} />
            <Route path='spacecraft/:id' element={<SpacecraftDetails />} />
            <Route path='astronauts' element={<Astronauts />} />
            <Route path='news' element={<News />} />
          </Routes>
        </Main>
      </Router>
      <Footer />
    </>
  );
}

export default App;
