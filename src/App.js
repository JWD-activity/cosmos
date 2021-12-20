import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { PUBLIC } from './utils/config';
import Home from './screen/Home/Home';
import Spacecraft from './screen/Spacecraft/Spacecraft';
import SpacecraftDetails from './screen/SpacecraftDetails/SpacecraftDetails';
import Astronauts from './screen/Astronauts/Astronauts';
import AstronautDetails from './screen/AstronautDetails/AstronautDetails';
import News from './screen/News/News';
import Navigation from './components/Navigation/Navigation';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Main>
          <Routes>
            <Route path={PUBLIC + '/'} element={<Home />} />
            <Route
              path={process.env.PUBLIC_URL + 'spacecraft'}
              element={<Spacecraft />}
            />
            <Route path='spacecraft/:id' element={<SpacecraftDetails />} />
            <Route path='astronauts' element={<Astronauts />} />
            <Route path='astronauts/:id' element={<AstronautDetails />} />
            <Route path='news' element={<News />} />
          </Routes>
        </Main>
      </Router>
      <Footer />
    </>
  );
}

export default App;
