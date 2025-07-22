import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../../supabaseClient' // ✅ correto

function Cadastro() {
  const [name, setNome] = useState('')
  const [gender, setGenero] = useState('')
  const [birth_date, setNascimento] = useState('')
  const navigate = useNavigate()

  async function adicionarMembro() {
    if (!name) return alert('Nome obrigatório.')
    if (!gender) return alert('Gênero obrigatório.')

    const { error } = await supabase.from('Pessoas').insert([
      { name, birth_date, gender }
    ])
    
    if (error) {
      alert('Erro ao salvar: ' + error.message)
    } else {
      alert('Membro salvo com sucesso!')
      navigate('/')
    }
  }

  return (
    <div style={{ maxWidth: 400 }}>
      <h2>➕ Cadastrar Novo Membro</h2>

      <label>Nome:</label>
      <input
        placeholder="Nome completo"
        value={name}
        onChange={e => setNome(e.target.value)}
        style={{ width: '100%', marginBottom: 10 }}
      />

      <label>Data de Nascimento:</label>
      <input
        type="date"
        value={birth_date}
        onChange={e => setNascimento(e.target.value)}
        style={{ width: '100%', marginBottom: 10 }}
      />

      <label>Gênero:</label>
      <select
        value={gender}
        onChange={e => setGenero(e.target.value)}
        style={{ width: '100%', marginBottom: 20 }}
      >
        <option value="">Selecione o gênero</option>
        <option value="M">Masculino</option>
        <option value="F">Feminino</option>
      </select>

      <button onClick={adicionarMembro} style={{ width: '100%', padding: 10, backgroundColor: '#4CAF50', color: 'white', border: 'none' }}>
        Salvar
      </button>
    </div>
  )
}

export default Cadastro