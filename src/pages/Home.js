import React from 'react';

const Home = () => {
  return (
    <div className="text-center">
      <h1 className="mb-4">Bem-vindo ao Sistema de Gestão de Informação de Igrejas</h1>
      <p className="lead">Utilize o menu lateral para navegar pelas funcionalidades do sistema.</p>
      <img
        src="https://source.unsplash.com/600x300/?church"
        alt="Igreja"
        className="img-fluid rounded shadow"
      />
    </div>
  );
};

export default Home;