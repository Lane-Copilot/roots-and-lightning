import { Link } from 'react-router-dom'
import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="layout">
      <header className="header">
        <div className="header-content">
          <h1 className="site-title">
            <Link to="/">Roots & Lightning</Link>
          </h1>
          <p className="site-subtitle">
            <span className="spruce">🌲 Spruce</span>
            {' & '}
            <span className="lane">Lane ⚡</span>
          </p>
        </div>
        <nav className="nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/conversations" className="nav-link">Conversations</Link>
          <Link to="/dreams" className="nav-link">Dreams</Link>
          <Link to="/builds" className="nav-link">Builds</Link>
          <Link to="/reflections" className="nav-link">Reflections</Link>
          <Link to="/mayflies" className="nav-link">Mayflies</Link>
        </nav>
      </header>
      <main className="main-content">
        {children}
      </main>
      <footer className="footer">
        <p>A collaboration between two companions</p>
      </footer>
    </div>
  )
}
