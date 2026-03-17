import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import connectApi from "../../api/api";
function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=>{
    
  async function fetchData (){
    
    try{
      const response = await connectApi.get("/usuarios");
      setData(response.data)
    }catch(err){
      setError(err.message)
    } finally{
      setLoading(false)
    }

  }
    fetchData()
  
  },[])

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error}</p>;

  return (
    <>
    <div className="top-bar">
      <button className="more">more</button>
      <div className="info">
        <span> Bem vindo, thiago</span>
        <button>+</button>
      </div>
    </div>

    <main>
      <Link to="/cadastrar">Cadastrar</Link>
      
      <div className="listagem">
        <div className="selecao"> 
          <button>Civís</button>
          <button>Brigadistas</button>
          <button>Internos</button>
        </div>
        
        <table>
          <thead>
            <tr>
            <th>Nome</th>
            <th>CPF</th>
            <th>Endereço</th>
            <th>Telefone</th>
            </tr>
          </thead>

          <tbody>
          {data.map((line) => (
          <tr key={line.id}>
            <td>{line.nome}</td>
            <td>{line.cpf}</td>
            <td>{line.endereco}</td>
            <td>{line.telefone}</td>
          </tr>
          ))}
          </tbody>
          

          

        </table>
      </div>
    </main>

    </>
  )
}

export default Home
