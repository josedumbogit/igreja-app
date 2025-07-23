import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="bg-dark text-white p-3 min-vh-100" style={{ width: '250px' }}>
      <h4 className="mb-4 text-center border-bottom pb-2">Painel</h4>

      {/* Membros */}
      <div className="mb-3">
        <button
          className="btn btn-dark w-100 text-start d-flex justify-content-between align-items-center"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#submenuMembros"
          aria-expanded="false"
          aria-controls="submenuMembros"
        >
          <span>Membros</span>
          <i className="bi bi-chevron-down"></i> {/* Ícone opcional do Bootstrap Icons */}
        </button>

        <div className="collapse mt-2" id="submenuMembros">
          <ul className="list-group list-group-flush">
            <li className="list-group-item bg-dark border-0 ps-4 py-2">
              <Link to="/membros/novo" className="text-white text-decoration-none d-block">Cadastrar</Link>
            </li>
            <li className="list-group-item bg-dark border-0 ps-4 py-2">
              <Link to="/membros/ver" className="text-white text-decoration-none d-block">Listar</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Outro Menu Exemplo */}
      <div className="mb-3 border-top pt-3">
        <button
          className="btn btn-dark w-100 text-start d-flex justify-content-between align-items-center"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#submenuOutros"
          aria-expanded="false"
          aria-controls="submenuOutros"
        >
          <span>Outros</span>
          <i className="bi bi-chevron-down"></i>
        </button>

        <div className="collapse mt-2" id="submenuOutros">
          <ul className="list-group list-group-flush">
            <li className="list-group-item bg-dark border-0 ps-4 py-2">
              <Link to="/configuracoes" className="text-white text-decoration-none d-block">Configurações</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;