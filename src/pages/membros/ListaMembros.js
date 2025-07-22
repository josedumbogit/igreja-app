import React, { useEffect, useState } from 'react';
import { Table, Form } from 'react-bootstrap';
import { supabase } from '../../supabaseClient';

function ListaMembros() {
  const [membros, setMembros] = useState([]);
  const [nomeFiltro, setNomeFiltro] = useState('');
  const [generoFiltro, setGeneroFiltro] = useState('');

  useEffect(() => {
    fetchMembros();
  }, []);

  async function fetchMembros() {
    const { data, error } = await supabase.from('Pessoas').select('*');
    if (!error) setMembros(data);
  }

  const membrosFiltrados = membros.filter(m =>
    m.name.toLowerCase().includes(nomeFiltro.toLowerCase()) &&
    (generoFiltro === '' || m.gender === generoFiltro)
  );

  return (
    <div>
      <h3>Lista de Membros</h3>
      <Form className="row mb-3">
        <Form.Group className="col-md-6">
          <Form.Label>Filtrar por Nome</Form.Label>
          <Form.Control type="text" value={nomeFiltro} onChange={e => setNomeFiltro(e.target.value)} />
        </Form.Group>
        <Form.Group className="col-md-6">
          <Form.Label>Filtrar por Gênero</Form.Label>
          <Form.Select value={generoFiltro} onChange={e => setGeneroFiltro(e.target.value)}>
            <option value="">Todos</option>
            <option value="M">Masculino</option>
            <option value="F">Feminino</option>
          </Form.Select>
        </Form.Group>
      </Form>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Data de Nascimento</th>
            <th>Gênero</th>
          </tr>
        </thead>
        <tbody>
          {membrosFiltrados.map(m => (
            <tr key={m.id}>
              <td>{m.name}</td>
              <td>{new Date(m.birth_date).toLocaleDateString()}</td>
              <td>{m.gender === 'M' ? 'Masculino' : 'Feminino'}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default ListaMembros;