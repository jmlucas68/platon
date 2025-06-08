import { BookOpen, ExternalLink, Github } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo y descripción */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <BookOpen className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-xl font-bold">Platón</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Un sitio web completo dedicado al estudio de la vida, obra y legado del gran filósofo griego Platón, 
              incluyendo su profunda influencia en la teología y el pensamiento occidental.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-blue-400">Enlaces Académicos</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://plato.stanford.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-2"
                >
                  <span>Stanford Encyclopedia of Philosophy</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </li>
              <li>
                <a
                  href="https://archive.org/search.php?query=platon%20obras%20completas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-2"
                >
                  <span>Obras Completas - Archive.org</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.perseus.tufts.edu/hopper/collection?collection=Perseus:collection:Greco-Roman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-2"
                >
                  <span>Perseus Digital Library</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </li>
            </ul>
          </div>

          {/* Información del proyecto */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-purple-400">Sobre este Sitio</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Desarrollado como un recurso académico completo sobre Platón, basado en investigación exhaustiva 
              de fuentes primarias y secundarias. Especial énfasis en las influencias teológicas del platonismo.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/jmlucas68/platon"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-2"
              >
                <Github className="h-5 w-5" />
                <span>Código Fuente</span>
              </a>
            </div>
          </div>
        </div>

        {/* Línea divisoria y copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2024 Platón - Filosofía y Pensamiento. Sitio web académico con fines educativos.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Desarrollado con React, TypeScript y Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
