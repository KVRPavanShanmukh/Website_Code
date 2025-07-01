import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import About from './components/About';
import Login from './components/Login';
import Register from './components/Register'
import FAQ from './components/FAQ';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About/>} />
        <Route path="/logsup" element={<Login />} />
        <Route path="/about" element={<LargestContentfulPaint/>} />
        <Route path='/register' element={<Register/>} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </Router>
    
  );
}

export default App;
