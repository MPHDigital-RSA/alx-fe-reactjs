import { Route, Routes } from 'react-router-dom'
import './App.css'
import Search from './components/Search'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Search />} />
        <Route path='/home' element={<Search />} />
      </Routes>

    </>
  )
}

export default App
