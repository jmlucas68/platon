import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { FileText, ExternalLink, Book, Download, Globe, Archive, GraduationCap, Library } from 'lucide-react'

interface SourceData {
  extracted_information: string
  references?: string[]
}

export function Sources() {
  const [academicSources, setAcademicSources] = useState<SourceData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadSourcesData = async () => {
      try {
        const response = await fetch('/data/platon_academic_sources.json')
        const data = await response.json()
        setAcademicSources(data)
      } catch (error) {
        console.error('Error loading sources data:', error)
      } finally {
        setLoading(false)
      }
    }

    loadSourcesData()
  }, [])

  const primarySources = [
    {
      category: 'Obras Completas - Versiones Gratuitas',
      icon: Archive,
      color: 'from-green-500 to-green-600',
      sources: [
        {
          title: 'Obras Completas de Platón - Archive.org',
          url: 'https://archive.org/details/obras-completas-platon',
          description: 'Colección completa de las obras de Platón en español, múltiples tomos disponibles.',
          type: 'Gratuito'
        },
        {
          title: 'Diálogos I - Archive.org',
          url: 'https://archive.org/details/platon-dialogos-1',
          description: 'Primer tomo de los diálogos platónicos incluyendo Apología de Sócrates.',
          type: 'Gratuito'
        },
        {
          title: 'Diálogos III: Fedón, Banquete y Fedro - PDF Gredos',
          url: 'https://metodologia2012.files.wordpress.com/2012/09/38569475-platon-dialogos-iii-fedon-banquete-fedro-gredos.pdf',
          description: 'Edición académica de alta calidad de los diálogos del período medio.',
          type: 'Gratuito'
        },
        {
          title: 'La República - Universidad de Murcia',
          url: 'https://www.um.es/noesis/zunica/textos/Platon,Republica.pdf',
          description: 'Versión académica de La República, la obra más famosa de Platón.',
          type: 'Gratuito'
        }
      ]
    },
    {
      category: 'Ediciones Comerciales de Referencia',
      icon: Book,
      color: 'from-blue-500 to-blue-600',
      sources: [
        {
          title: 'Biblioteca Clásica Gredos - Diálogos Completos',
          url: 'https://www.amazon.com/-/es/Di%C3%A1logos-Plat%C3%B3n-Apolog%C3%ADa-S%C3%B3crates-Prot%C3%A1goras/dp/8424938909',
          description: 'La edición académica más prestigiosa en español con notas críticas y comentarios.',
          type: 'Comercial'
        },
        {
          title: 'Obras Completas (Ebook)',
          url: 'https://www.amazon.com/-/es/Plat%C3%B3n-ebook/dp/B07G3HPLYG',
          description: 'Versión digital completa con funciones de búsqueda avanzada.',
          type: 'Comercial'
        },
        {
          title: 'La República - Nueva Biblioteca Clásica Gredos',
          url: 'https://www.amazon.com/-/es/Plat%C3%B3n-ebook/dp/B01H1WRKWA',
          description: 'Edición crítica moderna de La República con introducción académica.',
          type: 'Comercial'
        }
      ]
    }
  ]

  const academicResources = [
    {
      category: 'Enciclopedias y Referencias Académicas',
      icon: GraduationCap,
      color: 'from-purple-500 to-purple-600',
      sources: [
        {
          title: 'Stanford Encyclopedia of Philosophy - Plato',
          url: 'https://plato.stanford.edu/entries/plato/',
          description: 'Artículo académico completo sobre Platón, actualizado regularmente por especialistas.',
          type: 'Académico'
        },
        {
          title: 'Internet Encyclopedia of Philosophy - Plato',
          url: 'https://iep.utm.edu/plato/',
          description: 'Recurso académico peer-reviewed sobre la filosofía platónica.',
          type: 'Académico'
        },
        {
          title: 'Britannica Academic - Plato',
          url: 'https://academic.eb.com/levels/collegiate/article/Plato/108738',
          description: 'Artículo académico de la Enciclopedia Británica sobre Platón.',
          type: 'Académico'
        },
        {
          title: 'Perseus Digital Library',
          url: 'https://www.perseus.tufts.edu/hopper/collection?collection=Perseus:collection:Greco-Roman',
          description: 'Biblioteca digital con textos griegos originales y traducciones.',
          type: 'Académico'
        }
      ]
    },
    {
      category: 'Recursos Especializados en Platonismo',
      icon: Library,
      color: 'from-orange-500 to-red-500',
      sources: [
        {
          title: 'International Plato Society',
          url: 'https://platosociety.org/',
          description: 'Sociedad internacional de estudios platónicos con recursos y publicaciones.',
          type: 'Especializado'
        },
        {
          title: 'Plato Bibliography',
          url: 'https://www.phil-fak.uni-duesseldorf.de/philo/platon/bibliographie/',
          description: 'Bibliografía exhaustiva de estudios platónicos modernos.',
          type: 'Especializado'
        },
        {
          title: 'Centro de Estudios Clásicos - UNAM',
          url: 'https://www.iifl.unam.mx/cecla/',
          description: 'Centro académico especializado en estudios clásicos incluyendo filosofía griega.',
          type: 'Académico'
        },
        {
          title: 'Webdianoia - Textos de Platón',
          url: 'https://www.webdianoia.com/platon/platon_text.htm',
          description: 'Selección de fragmentos y textos platónicos con comentarios.',
          type: 'Educativo'
        }
      ]
    },
    {
      category: 'Bases de Datos Académicas',
      icon: Globe,
      color: 'from-teal-500 to-green-500',
      sources: [
        {
          title: 'JSTOR - Artículos sobre Platón',
          url: 'https://www.jstor.org/action/doBasicSearch?Query=Plato+philosophy',
          description: 'Base de datos con miles de artículos académicos sobre Platón.',
          type: 'Base de Datos'
        },
        {
          title: 'PhilPapers - Plato',
          url: 'https://philpapers.org/browse/plato',
          description: 'Índice completo de literatura filosófica contemporánea sobre Platón.',
          type: 'Base de Datos'
        },
        {
          title: 'Project MUSE - Classical Studies',
          url: 'https://muse.jhu.edu/browse/classics',
          description: 'Revistas académicas especializadas en estudios clásicos.',
          type: 'Base de Datos'
        },
        {
          title: 'Academia.edu - Plato Studies',
          url: 'https://www.academia.edu/search?q=plato%20philosophy',
          description: 'Plataforma académica con papers y investigaciones recientes.',
          type: 'Base de Datos'
        }
      ]
    }
  ]

  const researchInstitutions = [
    {
      name: 'Centro de Estudios Platónicos - Universidad de Cambridge',
      location: 'Reino Unido',
      specialization: 'Investigación avanzada en filosofía platónica',
      website: 'https://www.classics.cam.ac.uk/'
    },
    {
      name: 'Institute for Advanced Study - Princeton',
      location: 'Estados Unidos',
      specialization: 'Estudios clásicos y filosofía antigua',
      website: 'https://www.ias.edu/'
    },
    {
      name: 'Sorbonne - Département de Philosophie',
      location: 'Francia',
      specialization: 'Filosofía griega clásica',
      website: 'https://www.sorbonne-universite.fr/'
    },
    {
      name: 'Universidad Complutense - Estudios Clásicos',
      location: 'España',
      specialization: 'Filología y filosofía griega',
      website: 'https://www.ucm.es/'
    }
  ]

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Encabezado */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Fuentes y Referencias Académicas</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Recursos académicos, obras originales y fuentes de investigación sobre Platón
        </p>
      </div>

      {/* Introducción metodológica */}
      <Card className="border-l-4 border-l-blue-500">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <FileText className="h-6 w-6 text-blue-500" />
            <span>Metodología de Investigación</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="prose max-w-none">
          <p className="text-gray-700 leading-relaxed">
            Este sitio web se basa en una investigación exhaustiva que incluye <strong>fuentes primarias</strong> 
            (obras originales de Platón), <strong>fuentes secundarias</strong> (estudios académicos contemporáneos) 
            y <strong>recursos digitales especializados</strong>. Todas las fuentes han sido verificadas y 
            organizadas por categorías para facilitar la investigación académica.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Se ha dado prioridad a recursos de <strong>acceso abierto</strong> y <strong>alta calidad académica</strong>, 
            incluyendo tanto versiones gratuitas como ediciones comerciales de referencia.
          </p>
        </CardContent>
      </Card>

      {/* Fuentes primarias */}
      <div className="space-y-8">
        <h2 className="text-2xl font-bold text-gray-900 text-center">Fuentes Primarias: Obras de Platón</h2>
        
        {primarySources.map((category, index) => {
          const Icon = category.icon
          return (
            <Card key={index} className="overflow-hidden">
              <CardHeader className={`bg-gradient-to-r ${category.color} text-white`}>
                <CardTitle className="flex items-center space-x-3">
                  <Icon className="h-6 w-6" />
                  <span>{category.category}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.sources.map((source, sourceIndex) => (
                    <div key={sourceIndex} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="font-semibold text-gray-900 text-sm">{source.title}</h4>
                        <Badge 
                          variant={source.type === 'Gratuito' ? 'default' : 'secondary'} 
                          className="text-xs ml-2 flex-shrink-0"
                        >
                          {source.type}
                        </Badge>
                      </div>
                      <p className="text-xs text-gray-600 mb-3 leading-relaxed">{source.description}</p>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1 text-blue-600 hover:text-blue-800 text-xs"
                      >
                        <ExternalLink className="h-3 w-3" />
                        <span>Acceder al recurso</span>
                      </a>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Recursos académicos */}
      <div className="space-y-8">
        <h2 className="text-2xl font-bold text-gray-900 text-center">Recursos Académicos Especializados</h2>
        
        {academicResources.map((category, index) => {
          const Icon = category.icon
          return (
            <Card key={index} className="overflow-hidden">
              <CardHeader className={`bg-gradient-to-r ${category.color} text-white`}>
                <CardTitle className="flex items-center space-x-3">
                  <Icon className="h-6 w-6" />
                  <span>{category.category}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.sources.map((source, sourceIndex) => (
                    <div key={sourceIndex} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="font-semibold text-gray-900 text-sm">{source.title}</h4>
                        <Badge variant="outline" className="text-xs ml-2 flex-shrink-0">
                          {source.type}
                        </Badge>
                      </div>
                      <p className="text-xs text-gray-600 mb-3 leading-relaxed">{source.description}</p>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1 text-blue-600 hover:text-blue-800 text-xs"
                      >
                        <ExternalLink className="h-3 w-3" />
                        <span>Visitar sitio web</span>
                      </a>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Instituciones de investigación */}
      <Card className="border-l-4 border-l-purple-500">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <GraduationCap className="h-6 w-6 text-purple-500" />
            <span>Instituciones de Investigación Especializadas</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {researchInstitutions.map((institution, index) => (
              <div key={index} className="bg-purple-50 rounded-lg p-6 border border-purple-200">
                <h4 className="font-semibold text-gray-900 mb-2">{institution.name}</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline" className="text-xs">{institution.location}</Badge>
                  </div>
                  <p className="text-sm text-gray-600">{institution.specialization}</p>
                  <a
                    href={institution.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-purple-600 hover:text-purple-800 text-xs"
                  >
                    <ExternalLink className="h-3 w-3" />
                    <span>Sitio web institucional</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Información sobre fuentes académicas */}
      {academicSources && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Library className="h-6 w-6 text-gray-600" />
              <span>Información Adicional sobre Fuentes Académicas</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {academicSources.extracted_information}
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Guía de uso de recursos */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Book className="h-6 w-6 text-blue-600" />
            <span>Guía de Uso de Recursos</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Para Estudiantes</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start space-x-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Comenzar con versiones gratuitas de Archive.org</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Consultar Stanford Encyclopedia para contexto</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Usar Webdianoia para textos introductorios</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Para Investigadores</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start space-x-2">
                  <span className="text-purple-600 font-bold">•</span>
                  <span>Acceder a bases de datos especializadas</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-purple-600 font-bold">•</span>
                  <span>Consultar ediciones críticas Gredos</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-purple-600 font-bold">•</span>
                  <span>Utilizar Perseus para textos originales</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Para Profesores</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span>Combinar recursos gratuitos y comerciales</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span>Usar International Plato Society</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span>Contactar centros de investigación</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Enlaces de descarga rápida */}
      <Card className="border-l-4 border-l-green-500">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Download className="h-6 w-6 text-green-500" />
            <span>Acceso Rápido a Obras Principales</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <a
              href="https://archive.org/details/platon-la-republica"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 bg-green-50 border border-green-200 rounded-lg hover:bg-green-100 transition-colors text-center"
            >
              <Download className="h-6 w-6 text-green-600 mx-auto mb-2" />
              <h5 className="font-medium text-green-800 mb-1">La República</h5>
              <p className="text-xs text-green-600">PDF gratuito</p>
            </a>
            
            <a
              href="https://www.cjpb.org.uy/wp-content/uploads/repositorio/serviciosAlAfiliado/librosDigitales/Platon-Fedon.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 transition-colors text-center"
            >
              <Download className="h-6 w-6 text-blue-600 mx-auto mb-2" />
              <h5 className="font-medium text-blue-800 mb-1">Fedón</h5>
              <p className="text-xs text-blue-600">PDF gratuito</p>
            </a>
            
            <a
              href="https://www.textos.info/platon/fedro/descargar-pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 bg-purple-50 border border-purple-200 rounded-lg hover:bg-purple-100 transition-colors text-center"
            >
              <Download className="h-6 w-6 text-purple-600 mx-auto mb-2" />
              <h5 className="font-medium text-purple-800 mb-1">Fedro</h5>
              <p className="text-xs text-purple-600">PDF y ePub</p>
            </a>
            
            <a
              href="https://archive.org/details/platon-dialogos-1"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 bg-orange-50 border border-orange-200 rounded-lg hover:bg-orange-100 transition-colors text-center"
            >
              <Download className="h-6 w-6 text-orange-600 mx-auto mb-2" />
              <h5 className="font-medium text-orange-800 mb-1">Diálogos I</h5>
              <p className="text-xs text-orange-600">Colección completa</p>
            </a>
          </div>
        </CardContent>
      </Card>

      {/* Metodología de citación */}
      <Card className="bg-gradient-to-r from-gray-50 to-blue-50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <FileText className="h-6 w-6 text-gray-600" />
            <span>Cómo Citar estas Fuentes</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Para uso académico, se recomienda seguir las normas de citación estándar:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-4 border">
              <h4 className="font-semibold text-gray-900 mb-2">Ejemplo para fuentes digitales:</h4>
              <code className="text-xs text-gray-600 bg-gray-100 p-2 rounded block">
                Platón. <em>La República</em>. Archive.org. 
                https://archive.org/details/platon-la-republica 
                (consultado: [fecha])
              </code>
            </div>
            <div className="bg-white rounded-lg p-4 border">
              <h4 className="font-semibold text-gray-900 mb-2">Ejemplo para ediciones comerciales:</h4>
              <code className="text-xs text-gray-600 bg-gray-100 p-2 rounded block">
                Platón. <em>Diálogos</em>. 
                Biblioteca Clásica Gredos. Madrid: Editorial Gredos, [año].
              </code>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Nota final */}
      <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Compromiso con la Excelencia Académica</h3>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            Todas las fuentes incluidas en este sitio han sido cuidadosamente seleccionadas por su 
            <strong> rigor académico</strong> y <strong>accesibilidad</strong>. Nuestro objetivo es 
            proporcionar a estudiantes, investigadores y entusiastas de la filosofía las mejores 
            herramientas disponibles para el estudio del pensamiento platónico, manteniendo siempre 
            los más altos estándares de calidad académica.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
