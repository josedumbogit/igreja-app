import React, { useEffect, useState } from 'react';
import { Table, Form } from 'react-bootstrap';
import { supabase } from '../../supabaseClient';

const ListaMembros = () => {
  const [membros, setMembros] = useState([]);
  const [nomeFiltro, setNomeFiltro] = useState('');
  const [generoFiltro, setGeneroFiltro] = useState('');

  useEffect(() => {
    fetchMembros();
  }, []);

  const fetchMembros = async () => {
    const { data, error } = await supabase.from('Pessoas').select('*');
    if (!error) setMembros(data);
  };


    const membrosFiltrados = membros.filter(m => {
    const nome = m?.name?.toLowerCase?.() || '';
    const genero = m?.gender?.toLowerCase?.() || '';
    return nome.includes(nomeFiltro.toLowerCase()) && genero.includes(generoFiltro.toLowerCase());
    });

  return (
    <div>
      <h2 className="mb-4">Lista de Membros</h2>
      <Form className="mb-3 d-flex gap-3">
        <Form.Control
          type="text"
          placeholder="Pesquisar por nome"
          value={nomeFiltro}
          onChange={(e) => setNomeFiltro(e.target.value)}
        />
        <Form.Select
          value={generoFiltro}
          onChange={(e) => setGeneroFiltro(e.target.value)}
        >
          <option value="">Todos os Gêneros</option>
          <option value="Masculino">Masculino</option>
          <option value="Feminino">Feminino</option>
        </Form.Select>
      </Form>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Gênero</th>
            <th>Telefone</th>
          </tr>
        </thead>
        <tbody>
          {membrosFiltrados.map((m) => (
            <tr key={m.id}>
              <td>{m.name}</td>
              <td>{m.gender}</td>
              <td>{m.birth_date}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ListaMembros;