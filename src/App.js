import React, { useEffect, useState } from 'react'
import { supabase } from './supabaseClient'

function App() {
  const [pessoas, setMembros] = useState([])
  const [nome, setNome] = useState('')
  const [nascimento, setNascimento] = useState('')

  useEffect(() => {
    carregarMembros()
  }, [])

  async function carregarMembros() {
    const { data, error } = await supabase.from('Pessoas').select('*')
    setMembros(data)
  }

  async function adicionarMembro() {
    if (!nome) return alert('Nome obrigatório.')
    await supabase.from('Pessoas').insert([
      { nome, data_nascimento: nascimento }
    ])
    setNome('')
    setNascimento('')
    carregarMembros()
  }

  return (
    <div style={{ padding: 30 }}>
      <h2>Gestão de Membros da Igreja</h2>

      <h3>Novo Membro</h3>
      <input placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)} /> <br />
      <input type="date" value={nascimento} onChange={e => setNascimento(e.target.value)} /> <br />
      <button onClick={adicionarMembro}>Salvar</button>

      <h3>Lista de Membros</h3>
      <ul>
        {pessoas.map(m => (
          <li key={m.id}>
            {m.nome} - {m.nascimento}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App