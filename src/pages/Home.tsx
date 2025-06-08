import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { BookOpen, User, Clock, Brain, Library, ArrowRight, Crown, Church, FileText, ExternalLink } from 'lucide-react'
import platonBusto from '/images/platon_busto.jpg'

export function Home() {
  const [platoQuote, setPlatoQuote] = useState('')

  useEffect(() => {
    // Cargar cita destacada de Platón
    const loadQuote = async () => {
      try {
        const response = await fetch('/data/platon_citas_textuales.json')
        const data = await response.json()
        if (data.features && data.features.length > 0) {
          const randomQuote = data.features[Math.floor(Math.random() * data.features.length)]
          setPlatoQuote(randomQuote.details || randomQuote.concept)
        }
      } catch (error) {
        console.error('Error loading quote:', error)
        setPlatoQuote('La ignorancia es la raíz de todo mal.')
      }
    }
    loadQuote()
  }, [])

  const sections = [
    {
      title: 'Biografía',
      path: '/biografia',
      icon: User,
      description: 'Vida personal, cronología y contexto familiar del filósofo ateniense.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Contexto Histórico',
      path: '/contexto-historico',
      icon: Clock,
      description: 'La Grecia clásica, la Guerra del Peloponeso y el ambiente intelectual.',
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Pensamiento Filosófico',
      path: '/pensamiento-filosofico',
      icon: Brain,
      description: 'La Teoría de las Ideas, epistemología y filosofía política.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Obras Principales',
      path: '/obras-principales',
      icon: Library,
      description: 'Diálogos completos con enlaces a versiones en español.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'Influencias Recibidas',
      path: '/influencias-recibidas',
      icon: ArrowRight,
      description: 'Sócrates, pitagóricos, heraclitianos y pensadores presocráticos.',
      color: 'from-teal-500 to-teal-600'
    },
    {
      title: 'Influencias Ejercidas',
      path: '/influencias-ejercidas',
      icon: Crown,
      description: 'Impacto en Aristóteles, neoplatonismo y filosofía posterior.',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      title: 'Influencias en la Teología',
      path: '/influencias-teologia',
      icon: Church,
      description: 'Impacto profundo en cristianismo, judaísmo e islam.',
      color: 'from-rose-500 to-rose-600',
      highlight: true
    },
    {
      title: 'Fuentes y Referencias',
      path: '/fuentes-referencias',
      icon: FileText,
      description: 'Enlaces académicos, obras originales y fuentes de investigación.',
      color: 'from-gray-500 to-gray-600'
    }
  ]

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-12">
          <div className="space-y-6">
            <div className="space-y-4">
              <Badge className="bg-white/20 text-white border-white/30">
                427 a.C. - 347 a.C.
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Platón
              </h1>
              <p className="text-lg lg:text-xl text-blue-100 leading-relaxed">
                El Filósofo de las Ideas Eternas
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <blockquote className="text-lg italic text-blue-100 leading-relaxed">
                "{platoQuote}"
              </blockquote>
              <cite className="block mt-3 text-sm text-blue-200">— Platón</cite>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link to="/pensamiento-filosofico">
                <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 font-semibold">
                  Explorar Filosofía
                  <Brain className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/influencias-teologia">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-semibold">
                  Influencias Teológicas
                  <Church className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-2xl blur-xl"></div>
              <img
                src={platonBusto}
                alt="Busto de Platón"
                className="relative w-80 h-80 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Introducción */}
      <section className="max-w-4xl mx-auto">
        <Card className="border-l-4 border-l-blue-500">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BookOpen className="h-6 w-6 text-blue-500" />
              <span>Introducción</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed">
              <strong>Platón</strong> (427-347 a.C.) fue uno de los filósofos más influyentes de la historia occidental. 
              Discípulo de Sócrates y maestro de Aristóteles, fundó la Academia de Atenas, la primera institución 
              de educación superior del mundo occidental. Su pensamiento filosófico, centrado en la Teoría de las Ideas, 
              ha ejercido una influencia profunda no solo en la filosofía, sino también en la <strong>teología cristiana, 
              judía e islámica</strong>.
            </p>
            <p className="text-gray-700 leading-relaxed">
              A través de sus diálogos, Platón exploró temas fundamentales como la naturaleza de la realidad, 
              la justicia, el conocimiento y el alma humana. Su legado intelectual trasciende los límites de la 
              filosofía antigua para influir decisivamente en el desarrollo del pensamiento teológico medieval 
              y moderno.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Secciones principales */}
      <section>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Explora el Mundo de Platón</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre todos los aspectos de la vida, obra y legado del gran filósofo ateniense
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section) => {
            const Icon = section.icon
            return (
              <Link key={section.path} to={section.path}>
                <Card className={`h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-0 overflow-hidden ${
                  section.highlight ? 'ring-2 ring-rose-200 bg-gradient-to-br from-rose-50 to-purple-50' : ''
                }`}>
                  <CardHeader className="pb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${section.color} flex items-center justify-center mb-3`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">
                      {section.title}
                      {section.highlight && (
                        <Badge className="ml-2 bg-rose-100 text-rose-700 text-xs">
                          Destacado
                        </Badge>
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {section.description}
                    </p>
                    <div className="flex items-center text-blue-600 font-medium text-sm">
                      <span>Explorar sección</span>
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </section>

      {/* Datos destacados */}
      <section className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Datos Destacados</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">80</div>
            <p className="text-gray-600">Años de vida</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">36+</div>
            <p className="text-gray-600">Diálogos escritos</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">900</div>
            <p className="text-gray-600">Años funcionó su Academia</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-rose-600 mb-2">2400+</div>
            <p className="text-gray-600">Años de influencia</p>
          </div>
        </div>
      </section>
    </div>
  )
}
