import './App.css'
import { Routes, Route} from 'react-router-dom'
import LogIn from './pages/LogIn'
import Home from './pages/Home'
function App() {

  return (
    <>
        <Routes>
          <Route path="/" element={<LogIn/>}/>
          <Route path='/home' element={<Home/>}/>
        </Routes>      
    </>
  )
}

export default App
