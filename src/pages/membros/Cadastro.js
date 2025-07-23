import React, { useState } from 'react';
import { supabase } from '../../supabaseClient';
import { Form, Container, Row, Col } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Cadastro.css'; // Arquivo CSS customizado

function Cadastro() {
  const [formData, setFormData] = useState({ name: '', gender: '', birth_date: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error } = await supabase.from('Pessoas').insert([formData]);

    if (error) {
      toast.error('❌ Erro ao cadastrar membro. Verifique os dados.');
    } else {
      toast.success('✅ Membro cadastrado com sucesso!');
      setFormData({ name: '', gender: '', birth_date: '' });
    }
  };

  const handleReset = () => {
    setFormData({ name: '', gender: '', birth_date: '' });
  };

  return (
    <div className="cadastro-full-page">
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col md={10}>
            <h2 className="mb-4 text-center">Cadastro de Membro</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-4">
                <Form.Label>Nome Completo</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Digite o nome completo"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Gênero</Form.Label>
                <Form.Select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecione o gênero</option>
                  <option value="Masculino">Masculino</option>
                  <option value="Feminino">Feminino</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Data de Nascimento</Form.Label>
                <Form.Control
                  type="date"
                  name="birth_date"
                  value={formData.birth_date}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>

      <div className="botao-flutuante">
        <button className="btn btn-secondary me-3" onClick={handleReset}>🧹 Limpar</button>
        <button className="btn btn-primary" onClick={handleSubmit}>💾 Salvar</button>
      </div>

      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </div>
  );
}

export default Cadastro;