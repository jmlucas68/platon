import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, BookOpen, User, Clock, Brain, Library, ArrowRight, Crown, Church, FileText } from 'lucide-react'
import { Button } from './ui/button'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navigationItems = [
    { path: '/', label: 'Inicio', icon: BookOpen },
    { path: '/biografia', label: 'Biografía', icon: User },
    { path: '/contexto-historico', label: 'Contexto Histórico', icon: Clock },
    { path: '/pensamiento-filosofico', label: 'Pensamiento Filosófico', icon: Brain },
    { path: '/obras-principales', label: 'Obras Principales', icon: Library },
    { path: '/influencias-recibidas', label: 'Influencias Recibidas', icon: ArrowRight },
    { path: '/influencias-ejercidas', label: 'Influencias Ejercidas', icon: Crown },
    { path: '/influencias-teologia', label: 'Influencias en la Teología', icon: Church, highlight: true },
    { path: '/fuentes-referencias', label: 'Fuentes y Referencias', icon: FileText },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo y título */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center group-hover:shadow-lg transition-all duration-300">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                Platón
              </h1>
              <p className="text-xs text-gray-500 hidden sm:block">Filosofía y Pensamiento</p>
            </div>
          </Link>

          {/* Navegación desktop */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive(item.path)
                      ? 'bg-blue-100 text-blue-700 shadow-sm'
                      : item.highlight
                      ? 'text-purple-700 hover:bg-purple-50 hover:text-purple-800'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  } ${item.highlight ? 'border border-purple-200 bg-purple-50/50' : ''}`}
                >
                  <Icon className={`h-4 w-4 ${item.highlight ? 'text-purple-600' : ''}`} />
                  <span className="hidden xl:inline">{item.label}</span>
                </Link>
              )
            })}
          </nav>

          {/* Botón menú móvil */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Menú móvil */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <nav className="py-4 space-y-2">
              {navigationItems.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive(item.path)
                        ? 'bg-blue-100 text-blue-700 border-l-4 border-blue-500'
                        : item.highlight
                        ? 'text-purple-700 hover:bg-purple-50 border-l-4 border-purple-500'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                  >
                    <Icon className={`h-5 w-5 ${item.highlight ? 'text-purple-600' : ''}`} />
                    <span>{item.label}</span>
                    {item.highlight && (
                      <span className="ml-auto bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full">
                        Destacado
                      </span>
                    )}
                  </Link>
                )
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
