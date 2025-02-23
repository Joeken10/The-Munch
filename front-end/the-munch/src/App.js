import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import MenuForms from './Components/MenuForms';
import Navbar from './Components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<MenuForms />} />
          <Route path="/menu" element={<MenuForms />} />
          <Route path="/description" element={<h2>Description Page</h2>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
