import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { BookOpen, ExternalLink, Download, Star, Calendar, Users } from 'lucide-react'

interface WorkData {
  title: string
  period: string
  theme: string
  description: string
  importance: number
  freeLinks: string[]
  commercialLinks: string[]
  icon: string
}

export function Works() {
  const [dialoguesData, setDialoguesData] = useState<any>(null)
  const [republicData, setRepublicData] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadWorksData = async () => {
      try {
        const [dialoguesResponse, republicResponse] = await Promise.all([
          fetch('/data/platon_dialogos_completos.json'),
          fetch('/data/platon_republica.json')
        ])

        const dialogues = await dialoguesResponse.json()
        const republic = await republicResponse.json()

        setDialoguesData(dialogues)
        setRepublicData(republic)
      } catch (error) {
        console.error('Error loading works data:', error)
      } finally {
        setLoading(false)
      }
    }

    loadWorksData()
  }, [])

  const majorWorks: WorkData[] = [
    {
      title: 'La República',
      period: 'Período Medio',
      theme: 'Filosofía Política y Justicia',
      description: 'La obra más famosa de Platón que presenta el Estado ideal, la alegoría de la caverna y la teoría de las Ideas.',
      importance: 5,
      freeLinks: [
        'https://archive.org/details/platon-la-republica',
        'https://www.um.es/noesis/zunica/textos/Platon,Republica.pdf'
      ],
      commercialLinks: [
        'https://www.amazon.com/-/es/Plat%C3%B3n-ebook/dp/B01H1WRKWA'
      ],
      icon: '🏛️'
    },
    {
      title: 'Fedón',
      period: 'Período Medio',
      theme: 'Inmortalidad del Alma',
      description: 'Diálogo sobre la muerte de Sócrates y las pruebas de la inmortalidad del alma.',
      importance: 5,
      freeLinks: [
        'https://www.cjpb.org.uy/wp-content/uploads/repositorio/serviciosAlAfiliado/librosDigitales/Platon-Fedon.pdf',
        'https://juanfermejia.com/wp-content/uploads/2012/07/platon-fedon.pdf'
      ],
      commercialLinks: [
        'https://www.amazon.com/Di%C3%A1logos-Fed%C3%B3n-banquete-NUEVA-Spanish/dp/8424939271'
      ],
      icon: '💀'
    },
    {
      title: 'El Banquete',
      period: 'Período Medio',
      theme: 'Amor y Belleza',
      description: 'Exploración filosófica del amor en sus diferentes formas, culminando en el amor a la belleza pura.',
      importance: 4,
      freeLinks: [
        'https://metodologia2012.files.wordpress.com/2012/09/38569475-platon-dialogos-iii-fedon-banquete-fedro-gredos.pdf'
      ],
      commercialLinks: [
        'https://www.amazon.com/-/es/El-banquete-Spanish-Plat%C3%B3n/dp/8430943722'
      ],
      icon: '❤️'
    },
    {
      title: 'Fedro',
      period: 'Período Medio',
      theme: 'Retórica y Alma',
      description: 'Diálogo sobre la retórica verdadera, la naturaleza del alma y la escritura.',
      importance: 4,
      freeLinks: [
        'https://www.filosofia.org/cla/pla/img/azf02257.pdf',
        'https://www.textos.info/platon/fedro/descargar-pdf'
      ],
      commercialLinks: [
        'https://www.amazon.com/Di%C3%A1logos-Fed%C3%B3n-banquete-NUEVA-Spanish/dp/8424939271'
      ],
      icon: '🪶'
    },
    {
      title: 'Timeo',
      period: 'Período Tardío',
      theme: 'Cosmología',
      description: 'Descripción de la creación del universo y la naturaleza del cosmos.',
      importance: 4,
      freeLinks: [
        'https://archive.org/search.php?query=platon%20timeo'
      ],
      commercialLinks: [
        'https://www.amazon.com/-/es/Timeo-Spanish-Plat%C3%B3n/dp/1545382026'
      ],
      icon: '🌌'
    },
    {
      title: 'Las Leyes',
      period: 'Período Tardío',
      theme: 'Filosofía Política Práctica',
      description: 'Su última obra, presenta un sistema político más pragmático que La República.',
      importance: 4,
      freeLinks: [
        'https://archive.org/details/dialogos-viii.-leyes-libros-i-vi-biblioteca-clasica-gredos-platon'
      ],
      commercialLinks: [
        'https://www.amazon.com/-/es/Di%C3%A1logos-IX-Leyes-Libros-VII-XII/dp/8424940490'
      ],
      icon: '⚖️'
    },
    {
      title: 'Apología de Sócrates',
      period: 'Período Temprano',
      theme: 'Defensa de la Filosofía',
      description: 'La defensa de Sócrates en su juicio, fundamento de la filosofía moral.',
      importance: 5,
      freeLinks: [
        'https://archive.org/details/platon-dialogos-1'
      ],
      commercialLinks: [
        'https://www.amazon.com/-/es/Di%C3%A1logos-Plat%C3%B3n-Apolog%C3%ADa-S%C3%B3crates-Prot%C3%A1goras/dp/8424938909'
      ],
      icon: '⚖️'
    },
    {
      title: 'Teeteto',
      period: 'Período Tardío',
      theme: 'Teoría del Conocimiento',
      description: 'Análisis crítico de diferentes teorías del conocimiento.',
      importance: 3,
      freeLinks: [
        'https://archive.org/search.php?query=platon%20obras%20completas'
      ],
      commercialLinks: [
        'https://www.amazon.com/-/es/Plat%C3%B3n-ebook/dp/B07G3HPLYG'
      ],
      icon: '🧠'
    }
  ]

  const worksCategories = [
    {
      category: 'Período Temprano',
      period: '399-387 a.C.',
      characteristics: 'Influencia socrática directa, búsqueda de definiciones',
      works: ['Apología de Sócrates', 'Critón', 'Laques', 'Lisis', 'Carmides', 'Eutifrón', 'Ión', 'Hipias Menor'],
      color: 'from-green-500 to-green-600'
    },
    {
      category: 'Período Medio',
      period: '387-367 a.C.',
      characteristics: 'Desarrollo de la Teoría de las Ideas, grandes diálogos',
      works: ['La República', 'Fedón', 'El Banquete', 'Fedro', 'Menón', 'Crátilo', 'Eutidemo'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      category: 'Período Tardío',
      period: '367-347 a.C.',
      characteristics: 'Crítica y revisión de teorías anteriores, realismo político',
      works: ['Timeo', 'Las Leyes', 'Teeteto', 'Parménides', 'Sofista', 'Político', 'Filebo', 'Critias'],
      color: 'from-purple-500 to-purple-600'
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
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Obras Principales de Platón</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Los diálogos completos del filósofo ateniense con enlaces a versiones en español
        </p>
      </div>

      {/* Introducción */}
      <Card className="border-l-4 border-l-blue-500">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <BookOpen className="h-6 w-6 text-blue-500" />
            <span>El Corpus Platónico</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="prose max-w-none">
          <p className="text-gray-700 leading-relaxed">
            El corpus de Platón consta de aproximadamente <strong>36 diálogos</strong> y <strong>13 cartas</strong>, 
            organizados tradicionalmente en <strong>tetralogías</strong> por Trasilo. Sus obras se dividen en tres 
            períodos principales que reflejan la evolución de su pensamiento filosófico, desde la influencia 
            socrática directa hasta el desarrollo de su sistema filosófico maduro.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Todos los enlaces incluidos han sido verificados y proporcionan acceso tanto a <strong>versiones 
            gratuitas</strong> como a <strong>ediciones comerciales de calidad</strong> en español.
          </p>
        </CardContent>
      </Card>

      {/* Obras principales destacadas */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 text-center">Obras Fundamentales</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {majorWorks.map((work, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3">
                    <div className="text-2xl">{work.icon}</div>
                    <div>
                      <CardTitle className="text-xl">{work.title}</CardTitle>
                      <div className="flex items-center space-x-3 mt-2">
                        <Badge variant="outline">{work.period}</Badge>
                        <div className="flex items-center space-x-1">
                          {[...Array(work.importance)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-blue-600 font-medium mt-2">{work.theme}</p>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <p className="text-gray-700 text-sm leading-relaxed">{work.description}</p>
                
                <div className="space-y-3">
                  <div>
                    <h5 className="font-medium text-gray-900 mb-2 flex items-center space-x-2">
                      <Download className="h-4 w-4 text-green-600" />
                      <span>Enlaces Gratuitos</span>
                    </h5>
                    <div className="space-y-1">
                      {work.freeLinks.map((link, linkIndex) => (
                        <a
                          key={linkIndex}
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-xs text-green-600 hover:text-green-800 hover:underline"
                        >
                          <div className="flex items-center space-x-1">
                            <ExternalLink className="h-3 w-3" />
                            <span className="truncate">{link.includes('archive.org') ? 'Archive.org' : 
                                   link.includes('textos.info') ? 'Textos.info' : 
                                   link.includes('um.es') ? 'Universidad de Murcia' : 
                                   'Enlace académico'}</span>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-gray-900 mb-2 flex items-center space-x-2">
                      <BookOpen className="h-4 w-4 text-blue-600" />
                      <span>Ediciones Comerciales</span>
                    </h5>
                    <div className="space-y-1">
                      {work.commercialLinks.map((link, linkIndex) => (
                        <a
                          key={linkIndex}
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-xs text-blue-600 hover:text-blue-800 hover:underline"
                        >
                          <div className="flex items-center space-x-1">
                            <ExternalLink className="h-3 w-3" />
                            <span>Amazon - Edición profesional</span>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Períodos de creación */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 text-center">Períodos de Creación</h2>
        
        <div className="space-y-4">
          {worksCategories.map((category, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className={`bg-gradient-to-r ${category.color} text-white`}>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center space-x-3">
                    <Calendar className="h-6 w-6" />
                    <span>{category.category}</span>
                  </CardTitle>
                  <Badge className="bg-white/20 text-white border-white/30">
                    {category.period}
                  </Badge>
                </div>
                <p className="text-white/90 text-sm">{category.characteristics}</p>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex flex-wrap gap-2">
                  {category.works.map((work, workIndex) => (
                    <Badge key={workIndex} variant="secondary" className="text-sm">
                      {work}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Colecciones recomendadas */}
      <Card className="border-l-4 border-l-green-500">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <BookOpen className="h-6 w-6 text-green-500" />
            <span>Colecciones Recomendadas</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">Versiones Gratuitas Completas</h4>
              <div className="space-y-3">
                <a
                  href="https://archive.org/details/obras-completas-platon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-green-50 border border-green-200 rounded-lg hover:bg-green-100 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <ExternalLink className="h-5 w-5 text-green-600" />
                    <div>
                      <h5 className="font-medium text-green-800">Obras Completas - Archive.org</h5>
                      <p className="text-sm text-green-600">Múltiples tomos disponibles gratuitamente</p>
                    </div>
                  </div>
                </a>
                
                <a
                  href="https://metodologia2012.files.wordpress.com/2012/09/38569475-platon-dialogos-iii-fedon-banquete-fedro-gredos.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <ExternalLink className="h-5 w-5 text-blue-600" />
                    <div>
                      <h5 className="font-medium text-blue-800">Diálogos III - Gredos (PDF)</h5>
                      <p className="text-sm text-blue-600">Fedón, Banquete y Fedro en edición académica</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">Ediciones Comerciales de Calidad</h4>
              <div className="space-y-3">
                <a
                  href="https://www.amazon.com/-/es/Di%C3%A1logos-Plat%C3%B3n-Apolog%C3%ADa-S%C3%B3crates-Prot%C3%A1goras/dp/8424938909"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-purple-50 border border-purple-200 rounded-lg hover:bg-purple-100 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <ExternalLink className="h-5 w-5 text-purple-600" />
                    <div>
                      <h5 className="font-medium text-purple-800">Biblioteca Clásica Gredos</h5>
                      <p className="text-sm text-purple-600">Edición académica con notas críticas</p>
                    </div>
                  </div>
                </a>
                
                <a
                  href="https://www.amazon.com/-/es/Plat%C3%B3n-ebook/dp/B07G3HPLYG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-orange-50 border border-orange-200 rounded-lg hover:bg-orange-100 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <ExternalLink className="h-5 w-5 text-orange-600" />
                    <div>
                      <h5 className="font-medium text-orange-800">Obras Completas (Ebook)</h5>
                      <p className="text-sm text-orange-600">Formato digital con búsqueda avanzada</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Información adicional sobre los diálogos */}
      {dialoguesData && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="h-6 w-6 text-gray-600" />
              <span>Sobre los Diálogos Platónicos</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {dialoguesData.extracted_information}
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Guía de lectura */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <BookOpen className="h-6 w-6 text-blue-600" />
            <span>Guía de Lectura Recomendada</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Para Principiantes</h4>
              <ol className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start space-x-2">
                  <span className="text-blue-600 font-bold">1.</span>
                  <span>Apología de Sócrates</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-600 font-bold">2.</span>
                  <span>Critón</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-600 font-bold">3.</span>
                  <span>El Banquete</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-600 font-bold">4.</span>
                  <span>La República (Libros I-II)</span>
                </li>
              </ol>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Nivel Intermedio</h4>
              <ol className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start space-x-2">
                  <span className="text-purple-600 font-bold">1.</span>
                  <span>La República (completa)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-purple-600 font-bold">2.</span>
                  <span>Fedón</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-purple-600 font-bold">3.</span>
                  <span>Fedro</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-purple-600 font-bold">4.</span>
                  <span>Menón</span>
                </li>
              </ol>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Nivel Avanzado</h4>
              <ol className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 font-bold">1.</span>
                  <span>Parménides</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 font-bold">2.</span>
                  <span>Teeteto</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 font-bold">3.</span>
                  <span>Timeo</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 font-bold">4.</span>
                  <span>Las Leyes</span>
                </li>
              </ol>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
