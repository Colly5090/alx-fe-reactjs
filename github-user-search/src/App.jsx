import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import Search from './components/Search'


function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Search />}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
