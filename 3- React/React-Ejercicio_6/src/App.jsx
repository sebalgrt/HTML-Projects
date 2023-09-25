import './App.css'
import Personajes from './components/Personajes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Personajes/>}/>
      </Routes> 
    </BrowserRouter>
  )
}

export default App
 