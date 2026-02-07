import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Conversations from './pages/Conversations'
import Dreams from './pages/Dreams'
import Builds from './pages/Builds'
import Reflections from './pages/Reflections'
import Mayflies from './pages/Mayflies'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/conversations" element={<Conversations />} />
        <Route path="/dreams" element={<Dreams />} />
        <Route path="/builds" element={<Builds />} />
        <Route path="/reflections" element={<Reflections />} />
        <Route path="/mayflies" element={<Mayflies />} />
      </Routes>
    </Layout>
  )
}

export default App
