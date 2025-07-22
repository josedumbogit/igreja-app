import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cadastro from './pages/membros/Cadastro';
import ListaMembros from './pages/membros/ListaMembros';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="d-flex">
        <Navbar />
        <div className="flex-grow-1 p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/membros/novo" element={<Cadastro />} />
            <Route path="/membros/ver" element={<ListaMembros />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;