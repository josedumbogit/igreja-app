import React from 'react';
import { Card } from 'react-bootstrap';

function Home() {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '80vh' }}>
      <Card className="text-center p-5 shadow-lg">
        <h1 className="mb-4">Bem-vindo ao Sistema de Gestão de Informações de Igrejas</h1>
        <p>Utilize o menu lateral para navegar pelas funcionalidades do sistema.</p>
      </Card>
    </div>
  );
}

export default Home;