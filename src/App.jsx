import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Products from './pages/Products'
import Solutions from './pages/Solutions'
import Resources from './pages/Resources'
import Company from './pages/Company'
import Login from './pages/Login'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products/*" element={<Products />} />
          <Route path="solutions/*" element={<Solutions />} />
          <Route path="resources" element={<Resources />} />
          <Route path="company" element={<Company />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
