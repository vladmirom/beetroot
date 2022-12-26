import './App.css';

import Navigation from './components/Navigation';

import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogItem from './pages/BlogItem';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return <Router>
    <div className="App">
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/blog' element={<Blog />}></Route>
          <Route path='/blog/:id/:slug' element={<BlogItem />}></Route>
        </Routes>
    </div>
  </Router>;
}

export default App;
