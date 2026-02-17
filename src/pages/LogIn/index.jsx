import {Link} from 'react-router-dom'
import "./index.css"
function LogIn() {

  return (
    <>
    <h1>Sistema de cadastro</h1>

    <div className="box-login">
      <div className="inputs-login">
        
        <label htmlFor="usuario">Usuario</label>
        <input type="text" name="usuario" id="usuario" />

        <label htmlFor="senha">Senha</label>
        <input type="password" name="senha" id="senha" />

      </div>
      <button type="button"><Link to="/home">Entrar</Link></button>
    </div>
    </>
  )
}

export default LogIn
