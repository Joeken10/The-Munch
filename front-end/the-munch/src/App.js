import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<h2>Home Page</h2>} />
          <Route path="/menu" element={<h2>Menu Page</h2>} />
          <Route path="/description" element={<h2>Description Page</h2>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
