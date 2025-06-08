import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, MapPin, Users, BookOpen, GraduationCap } from 'lucide-react'

interface BiographyData {
  extracted_information: string
  features?: Array<{
    concept: string
    details: string
  }>
  temporal_info?: {
    [key: string]: string
  }
}

interface CronologyData {
  extracted_information: string
  features?: Array<{
    period: string
    events: string[]
    dates: string
  }>
}

export function Biography() {
  const [biographyData, setBiographyData] = useState<BiographyData | null>(null)
  const [cronologyData, setCronologyData] = useState<CronologyData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadBiographyData = async () => {
      try {
        const [biographyResponse, cronologyResponse] = await Promise.all([
          fetch('/data/platon_biografia_wikipedia.json'),
          fetch('/data/platon_cronologia.json')
        ])

        const biography = await biographyResponse.json()
        const cronology = await cronologyResponse.json()

        setBiographyData(biography)
        setCronologyData(cronology)
      } catch (error) {
        console.error('Error loading biography data:', error)
      } finally {
        setLoading(false)
      }
    }

    loadBiographyData()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  const lifeEvents = [
    {
      year: '427 a.C.',
      title: 'Nacimiento en Atenas',
      description: 'Nace en una familia aristocrática ateniense, posiblemente en Egina.',
      icon: Calendar,
      color: 'from-blue-500 to-blue-600'
    },
    {
      year: '407 a.C.',
      title: 'Encuentro con Sócrates',
      description: 'A los 20 años conoce a Sócrates, quien se convierte en su maestro.',
      icon: Users,
      color: 'from-green-500 to-green-600'
    },
    {
      year: '399 a.C.',
      title: 'Muerte de Sócrates',
      description: 'Evento traumático que marca profundamente su filosofía.',
      icon: Users,
      color: 'from-red-500 to-red-600'
    },
    {
      year: '387 a.C.',
      title: 'Fundación de la Academia',
      description: 'Establece la primera institución de educación superior occidental.',
      icon: GraduationCap,
      color: 'from-purple-500 to-purple-600'
    },
    {
      year: '367 a.C.',
      title: 'Aristóteles ingresa en la Academia',
      description: 'Su futuro discípulo más famoso se une a la Academia.',
      icon: BookOpen,
      color: 'from-orange-500 to-orange-600'
    },
    {
      year: '347 a.C.',
      title: 'Muerte en Atenas',
      description: 'Muere a los 80 años, dejando un legado intelectual inmortal.',
      icon: Calendar,
      color: 'from-gray-500 to-gray-600'
    }
  ]

  return (
    <div className="space-y-8">
      {/* Encabezado */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Biografía de Platón</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          La vida del gran filósofo ateniense que transformó el pensamiento occidental
        </p>
      </div>

      {/* Imagen principal y datos básicos */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <img
                src="/images/platon_retrato.jpg"
                alt="Retrato de Platón"
                className="w-full h-64 lg:h-80 object-cover"
              />
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-blue-500" />
                    <span className="text-sm text-gray-600">Vida</span>
                  </div>
                  <p className="font-semibold">427 - 347 a.C. (80 años)</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-gray-600">Lugar</span>
                  </div>
                  <p className="font-semibold">Atenas, Grecia</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <GraduationCap className="h-4 w-4 text-purple-500" />
                    <span className="text-sm text-gray-600">Conocido por</span>
                  </div>
                  <p className="font-semibold">Teoría de las Ideas, la Academia</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2 space-y-6">
          {/* Información general */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="h-6 w-6 text-blue-500" />
                <span>Origen y Familia</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed">
                <strong>Platón</strong> (en griego: Πλάτων, <em>Plátōn</em>; en latín: <em>Plato</em>) nació hacia el 
                <strong> 427 a.C.</strong> en Atenas o posiblemente en Egina. Su nombre real era <strong>Aristocles</strong>, 
                siendo "Platón" un apodo que significa "el de espaldas anchas".
              </p>
              <p className="text-gray-700 leading-relaxed">
                Nació en el seno de una <strong>familia aristocrática ateniense</strong> de gran prestigio. Por parte 
                materna descendía de <strong>Solón</strong>, el famoso legislador ateniense, y por parte paterna su 
                linaje se remontaba al rey <strong>Codro</strong>. Esta noble ascendencia le proporcionó acceso a la 
                mejor educación disponible y conexiones políticas importantes.
              </p>
            </CardContent>
          </Card>

          {/* Educación y formación */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BookOpen className="h-6 w-6 text-green-500" />
                <span>Educación y Formación</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                Platón recibió la educación aristocrática completa (<em>paideia</em>), que incluía:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Badge variant="secondary">Música</Badge>
                  <Badge variant="secondary">Gimnasia</Badge>
                  <Badge variant="secondary">Matemáticas</Badge>
                  <Badge variant="secondary">Poesía</Badge>
                </div>
                <div className="space-y-2">
                  <Badge variant="secondary">Retórica</Badge>
                  <Badge variant="secondary">Filosofía</Badge>
                  <Badge variant="secondary">Política</Badge>
                  <Badge variant="secondary">Ética</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Cronología de vida */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Calendar className="h-6 w-6 text-purple-500" />
            <span>Cronología de Vida</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {lifeEvents.map((event, index) => {
              const Icon = event.icon
              return (
                <div key={index} className="flex items-start space-x-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br ${event.color} flex items-center justify-center`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
                      <Badge variant="outline">{event.year}</Badge>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{event.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Períodos de vida */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Juventud y Formación</CardTitle>
            <Badge variant="outline">427-407 a.C.</Badge>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Nacimiento durante la Guerra del Peloponeso</li>
              <li>• Educación aristocrática completa</li>
              <li>• Ambiente familiar de alta cultura</li>
              <li>• Conexiones políticas importantes</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Período Socrático</CardTitle>
            <Badge variant="outline">407-399 a.C.</Badge>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Discípulo de Sócrates durante 8 años</li>
              <li>• Desarrollo del método dialéctico</li>
              <li>• Testigo de la muerte de Sócrates</li>
              <li>• Crisis de fe en la democracia ateniense</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Viajes y Maduración</CardTitle>
            <Badge variant="outline">399-387 a.C.</Badge>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Abandono temporal de Atenas</li>
              <li>• Viajes a Megara, Cirene, Egipto</li>
              <li>• Primer viaje a Sicilia (388 a.C.)</li>
              <li>• Experiencias políticas en Siracusa</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">La Academia</CardTitle>
            <Badge variant="outline">387-347 a.C.</Badge>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Fundación de la Academia (387 a.C.)</li>
              <li>• Mayor producción filosófica</li>
              <li>• Aristóteles como discípulo (367 a.C.)</li>
              <li>• Consolidación del legado intelectual</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* La Academia */}
      <Card className="border-l-4 border-l-purple-500">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <GraduationCap className="h-6 w-6 text-purple-500" />
            <span>La Academia: Su Gran Legado Institucional</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-700 leading-relaxed mb-4">
                La <strong>Academia de Platón</strong>, fundada en 387 a.C., fue la primera institución de 
                educación superior del mundo occidental. Ubicada en un terreno dedicado al héroe Academo 
                en las afueras de Atenas, funcionó ininterrumpidamente durante casi <strong>900 años</strong> 
                hasta que el emperador Justiniano ordenó su cierre en 529 d.C.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Aristóteles</strong> fue su alumno más famoso, permaneciendo en la Academia durante 
                20 años (367-347 a.C.).
              </p>
            </div>
            <div>
              <img
                src="/images/academia_atenas.jpg"
                alt="Academia de Atenas"
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Áreas de Estudio en la Academia:</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              <Badge variant="secondary">Matemáticas y Geometría</Badge>
              <Badge variant="secondary">Astronomía</Badge>
              <Badge variant="secondary">Filosofía Política</Badge>
              <Badge variant="secondary">Ética</Badge>
              <Badge variant="secondary">Dialéctica y Retórica</Badge>
              <Badge variant="secondary">Ciencias Naturales</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Datos adicionales si están disponibles */}
      {biographyData && (
        <Card>
          <CardHeader>
            <CardTitle>Información Adicional</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {biographyData.extracted_information}
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
