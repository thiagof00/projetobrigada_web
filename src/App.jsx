import './App.css'
import { Routes, Route} from 'react-router-dom'
import LogIn from './pages/LogIn'
import Home from './pages/Home'
import Register from './pages/Register'
import Layout from './components/Layout'
function App() {

  return (
    <>
        <Routes>
          <Route path="/" element={<LogIn/>}/>
            <Route element={<Layout/>}>
            <Route path='/home' element={<Home/>}/>
            <Route path='/cadastrar' element={<Register/>}/>
          </Route>
        </Routes>      
    </>
  )
}

export default App
