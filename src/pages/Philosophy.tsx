import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Brain, Eye, Scale, Crown, Lightbulb, Quote, BookOpen } from 'lucide-react'

interface PhilosophyData {
  extracted_information: string
  features?: Array<{
    concept: string
    details: string
  }>
}

export function Philosophy() {
  const [philosophyData, setPhilosophyData] = useState<PhilosophyData | null>(null)
  const [quotesData, setQuotesData] = useState<PhilosophyData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadPhilosophyData = async () => {
      try {
        const [philosophyResponse, quotesResponse] = await Promise.all([
          fetch('/data/platon_teoria_ideas.json'),
          fetch('/data/platon_citas_textuales.json')
        ])

        const philosophy = await philosophyResponse.json()
        const quotes = await quotesResponse.json()

        setPhilosophyData(philosophy)
        setQuotesData(quotes)
      } catch (error) {
        console.error('Error loading philosophy data:', error)
      } finally {
        setLoading(false)
      }
    }

    loadPhilosophyData()
  }, [])

  const philosophicalConcepts = [
    {
      title: 'Teoría de las Ideas',
      icon: Lightbulb,
      color: 'from-yellow-500 to-orange-500',
      description: 'El mundo de las Ideas eternas e inmutables como verdadera realidad',
      details: [
        'Distinción entre mundo sensible y mundo inteligible',
        'Las Ideas como modelos perfectos de toda realidad',
        'La Idea del Bien como la más alta de todas las Ideas',
        'Participación de las cosas sensibles en las Ideas'
      ]
    },
    {
      title: 'Epistemología',
      icon: Eye,
      color: 'from-blue-500 to-purple-500',
      description: 'Teoría del conocimiento basada en la reminiscencia y la dialéctica',
      details: [
        'El conocimiento como reminiscencia (anámnesis)',
        'Distinción entre opinión (doxa) y conocimiento (episteme)',
        'El método dialéctico como camino al conocimiento',
        'La alegoría de la caverna como explicación del conocimiento'
      ]
    },
    {
      title: 'Filosofía Política',
      icon: Crown,
      color: 'from-purple-500 to-pink-500',
      description: 'La República ideal y la justicia como armonía del alma y el Estado',
      details: [
        'El Estado ideal como alma en grande',
        'Las tres clases sociales: gobernantes, guardianes, productores',
        'Los filósofos-reyes como gobernantes ideales',
        'Educación como base de la justicia social'
      ]
    },
    {
      title: 'Ética y Virtud',
      icon: Scale,
      color: 'from-green-500 to-teal-500',
      description: 'Las virtudes cardinales y la justicia como armonía del alma',
      details: [
        'Prudencia (sabiduría) en la parte racional del alma',
        'Fortaleza (valor) en la parte irascible',
        'Templanza en la parte concupiscible',
        'Justicia como armonía entre las tres partes'
      ]
    }
  ]

  const platonicQuotes = [
    {
      quote: "La ignorancia es la raíz de todo mal.",
      context: "Sobre el conocimiento y la virtud"
    },
    {
      quote: "No hay nada más poderoso que el conocimiento.",
      context: "Sobre la importancia del saber"
    },
    {
      quote: "El alma del hombre es inmortal e indestructible.",
      context: "Sobre la naturaleza del alma"
    },
    {
      quote: "La justicia es dar a cada uno lo que le corresponde.",
      context: "Sobre la justicia y la ética"
    }
  ]

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Encabezado */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Pensamiento Filosófico de Platón</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Las ideas fundamentales que transformaron la filosofía occidental
        </p>
      </div>

      {/* Introducción con imagen */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <Card className="border-l-4 border-l-purple-500 h-full">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Brain className="h-6 w-6 text-purple-500" />
                <span>Fundamentos del Pensamiento Platónico</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                El pensamiento filosófico de Platón se estructura alrededor de varios pilares fundamentales 
                que han influido en toda la tradición occidental. Su <strong>Teoría de las Ideas</strong> 
                constituye el núcleo de su sistema filosófico, proporcionando una base metafísica para 
                sus teorías del conocimiento, la ética y la política.
              </p>
              <p className="text-gray-700 leading-relaxed">
                A través de diálogos como <em>La República</em>, <em>Fedón</em>, y <em>Fedro</em>, 
                Platón desarrolló una visión comprehensiva de la realidad que distingue entre el mundo 
                sensible (material) y el mundo inteligible (de las Ideas).
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge variant="secondary">Metafísica</Badge>
                <Badge variant="secondary">Epistemología</Badge>
                <Badge variant="secondary">Ética</Badge>
                <Badge variant="secondary">Política</Badge>
                <Badge variant="secondary">Estética</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
        <div>
          <img
            src="/images/manuscrito_filosofia.jpg"
            alt="Manuscrito filosófico"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Conceptos filosóficos principales */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 text-center">Conceptos Filosóficos Principales</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {philosophicalConcepts.map((concept, index) => {
            const Icon = concept.icon
            return (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardHeader className={`bg-gradient-to-r ${concept.color} text-white`}>
                  <CardTitle className="flex items-center space-x-3">
                    <Icon className="h-6 w-6" />
                    <span>{concept.title}</span>
                  </CardTitle>
                  <p className="text-white/90 text-sm">{concept.description}</p>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {concept.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start space-x-3">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-700 text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* La Teoría de las Ideas - Sección destacada */}
      <Card className="border-2 border-yellow-300 bg-gradient-to-br from-yellow-50 to-orange-50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-2xl">
            <Lightbulb className="h-8 w-8 text-yellow-600" />
            <span>La Teoría de las Ideas: El Corazón del Platonismo</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Mundo Sensible vs. Mundo Inteligible</h4>
              <div className="space-y-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h5 className="font-medium text-blue-800 mb-2">Mundo Sensible</h5>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Material y cambiante</li>
                    <li>• Conocido por los sentidos</li>
                    <li>• Copia imperfecta de las Ideas</li>
                    <li>• Sujeto a generación y corrupción</li>
                  </ul>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <h5 className="font-medium text-purple-800 mb-2">Mundo Inteligible</h5>
                  <ul className="text-sm text-purple-700 space-y-1">
                    <li>• Inmaterial e inmutable</li>
                    <li>• Conocido por la razón</li>
                    <li>• Modelos perfectos (Ideas)</li>
                    <li>• Eterno e indestructible</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Ejemplos de Ideas</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-white rounded-lg border">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">B</span>
                  </div>
                  <div>
                    <span className="font-medium">Idea del Bien</span>
                    <p className="text-xs text-gray-600">La más alta de todas las Ideas, fuente de verdad y ser</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-white rounded-lg border">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">J</span>
                  </div>
                  <div>
                    <span className="font-medium">Idea de Justicia</span>
                    <p className="text-xs text-gray-600">Modelo perfecto de la justicia en el alma y el Estado</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-white rounded-lg border">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">B</span>
                  </div>
                  <div>
                    <span className="font-medium">Idea de Belleza</span>
                    <p className="text-xs text-gray-600">Fuente de toda belleza en el mundo sensible</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {philosophyData && (
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 border border-yellow-200">
              <h4 className="font-semibold text-gray-900 mb-3">Información Detallada</h4>
              <p className="text-gray-700 leading-relaxed text-sm whitespace-pre-line">
                {philosophyData.extracted_information}
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* La Alegoría de la Caverna */}
      <Card className="border-l-4 border-l-indigo-500">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Eye className="h-6 w-6 text-indigo-500" />
            <span>La Alegoría de la Caverna</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Una de las metáforas más famosas de la filosofía occidental, presentada en el Libro VII de 
            <em> La República</em>, ilustra el proceso de adquisición del conocimiento y la liberación 
            de la ignorancia.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl mb-2">🔗</div>
              <h4 className="font-medium text-gray-900 mb-1">Prisioneros</h4>
              <p className="text-xs text-gray-600">Atados y viendo solo sombras</p>
            </div>
            <div className="text-center p-4 bg-yellow-50 rounded-lg">
              <div className="text-2xl mb-2">🔥</div>
              <h4 className="font-medium text-gray-900 mb-1">Fuego</h4>
              <p className="text-xs text-gray-600">Proyecta sombras en la pared</p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl mb-2">🚶</div>
              <h4 className="font-medium text-gray-900 mb-1">Liberación</h4>
              <p className="text-xs text-gray-600">Uno se libera y ve la realidad</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl mb-2">☀️</div>
              <h4 className="font-medium text-gray-900 mb-1">Sol</h4>
              <p className="text-xs text-gray-600">Representa la Idea del Bien</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Citas destacadas */}
      <Card className="bg-gradient-to-r from-purple-50 to-blue-50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Quote className="h-6 w-6 text-purple-600" />
            <span>Citas Filosóficas Destacadas</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {platonicQuotes.map((quote, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-purple-100">
                <blockquote className="text-gray-700 italic mb-3 text-lg leading-relaxed">
                  "{quote.quote}"
                </blockquote>
                <div className="flex items-center justify-between">
                  <cite className="text-purple-600 font-medium">— Platón</cite>
                  <Badge variant="outline" className="text-xs">{quote.context}</Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Las virtudes cardinales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="text-center">
          <CardHeader className="pb-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <CardTitle className="text-lg">Prudencia</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">Sabiduría en la parte racional del alma</p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardHeader className="pb-3">
            <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <Crown className="h-6 w-6 text-white" />
            </div>
            <CardTitle className="text-lg">Fortaleza</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">Valor en la parte irascible</p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardHeader className="pb-3">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <Scale className="h-6 w-6 text-white" />
            </div>
            <CardTitle className="text-lg">Templanza</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">Control en la parte concupiscible</p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardHeader className="pb-3">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <CardTitle className="text-lg">Justicia</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">Armonía entre las tres partes</p>
          </CardContent>
        </Card>
      </div>

      {/* Métodos filosóficos */}
      <Card className="border-l-4 border-l-green-500">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <BookOpen className="h-6 w-6 text-green-500" />
            <span>Métodos Filosóficos</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">El Método Dialéctico</h4>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                Proceso de pregunta y respuesta que lleva del error a la verdad, del mundo sensible 
                al inteligible. Inspirado en el método socrático pero desarrollado sistemáticamente.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Eliminación de contradicciones</li>
                <li>• Ascenso de lo particular a lo universal</li>
                <li>• Búsqueda de definiciones esenciales</li>
                <li>• Contemplación de las Ideas</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">La Reminiscencia (Anámnesis)</h4>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                Teoría según la cual aprender es recordar conocimientos que el alma ya poseía antes 
                de encarnarse, adquiridos en su contemplación directa de las Ideas.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• El alma es inmortal y preexiste</li>
                <li>• Conoció las Ideas antes de encarnarse</li>
                <li>• El aprendizaje es un proceso de recuerdo</li>
                <li>• Demostrado en el diálogo Menón</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
