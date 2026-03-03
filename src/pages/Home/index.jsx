import { Link } from "react-router-dom"
function Home() {

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
          <tr>
            <th>Nome</th>
            <th>CPF</th>
            <th>Endereço</th>
            <th>Telefone</th>
          </tr>

          <tr>
            <td>Nome</td>
            <td>CPF</td>
            <td>Endereço</td>
            <td>Telefone</td>
          </tr>

        </table>
      </div>
    </main>

    </>
  )
}

export default Home
