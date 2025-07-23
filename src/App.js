import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Cadastro from './pages/membros/Cadastro';
import ListaMembros from './pages/membros/ListaMembros';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <Router>
      <div className="d-flex">
        <Sidebar />
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