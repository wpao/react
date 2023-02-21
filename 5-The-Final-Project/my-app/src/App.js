import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Blogdetail from './pages/Blogdetail';

function App() {
  return (
    <div className="App">
      <div className='brand'>Website Nauval</div>
      <nav>
        <ul className='nav-list'>
        <Link to="/" className='nav-item'>Home</Link>
        <Link to="profile" className='nav-item'>Profile</Link>
        <Link to="blog" className='nav-item'>Blog</Link>
        <Link to="contact" className='nav-item'>Contact</Link>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:id" element={<Blogdetail />} />
        <Route path="contact" element={<Contact />} />
      </Routes>    
    </div>
  );
}

export default App;
