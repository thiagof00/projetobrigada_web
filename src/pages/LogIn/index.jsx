import {Link} from 'react-router-dom'
import styles from "./style.module.css"
function LogIn() {

  return (
    <>
    <main>
    <h1 className={styles.titleLogin}>Sistema de cadastro</h1>

    <div className={styles.boxLogin}>
        
        <label htmlFor="usuario">Usuario</label>
        <input type="text" name="usuario" id="usuario" />

        <label htmlFor="senha">Senha</label>
        <input type="password" name="senha" id="senha" />

      <button type="button"><Link to="/home" style={{ color: 'white', textDecoration: 'none', fontWeight:"bold", fontSize: "1.1rem"}}>Entrar</Link></button>
    </div>
    </main>
    </>
  )
}

export default LogIn
