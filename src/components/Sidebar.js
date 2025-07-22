// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => (
  <div style={{
    width: '200px',
    height: '100vh',
    background: '#f8f9fa',
    padding: '20px',
    borderRight: '1px solid #ddd'
  }}>
    <h4>Menu</h4>
    <ul style={{ listStyle: 'none', padding: 0 }}>
      <li><strong>Membros</strong></li>
      <ul>
        <li><Link to="/membros/novo">Novo</Link></li>
        <li><Link to="/membros/listar">Ver</Link></li>
      </ul>
      {/* Aqui você pode adicionar outros menus futuramente */}
    </ul>
  </div>
);

export default Sidebar;