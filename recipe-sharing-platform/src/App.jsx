import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import HomePage from './components/HomePage'
import RecipeDetail from './components/RecipeDetail'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        {/* <Route path='/home' element={<HomePage />} /> */}
        <Route path='/recipe/:id' element={<RecipeDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
