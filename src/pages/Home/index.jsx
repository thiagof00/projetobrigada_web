import { Link } from "react-router-dom"
function Home() {

  return (
    <>
    <h1>Home</h1>      
    <Link to="/">Log in</Link>
    <Link to="/cadastrar">Cadastrar</Link>

    </>
  )
}

export default Home
