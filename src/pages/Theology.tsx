import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Church, Star, Cross, Moon, BookOpen, Quote, ExternalLink, Users } from 'lucide-react'

interface TheologyData {
  extracted_information: string
  features?: Array<{
    concept: string
    details: string
  }>
  temporal_info?: {
    [key: string]: string
  }
  references?: string[]
}

export function Theology() {
  const [christianData, setChristianData] = useState<TheologyData | null>(null)
  const [islamicData, setIslamicData] = useState<TheologyData | null>(null)
  const [augustineData, setAugustineData] = useState<TheologyData | null>(null)
  const [philoData, setPhiloData] = useState<TheologyData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadTheologyData = async () => {
      try {
        const [christianResponse, islamicResponse, augustineResponse, philoResponse] = await Promise.all([
          fetch('/data/platon_influencia_cristiana.json'),
          fetch('/data/platon_influencia_islamica.json'),
          fetch('/data/platon_san_agustin.json'),
          fetch('/data/platon_filon_alejandria.json')
        ])

        const christian = await christianResponse.json()
        const islamic = await islamicResponse.json()
        const augustine = await augustineResponse.json()
        const philo = await philoResponse.json()

        setChristianData(christian)
        setIslamicData(islamic)
        setAugustineData(augustine)
        setPhiloData(philo)
      } catch (error) {
        console.error('Error loading theology data:', error)
      } finally {
        setLoading(false)
      }
    }

    loadTheologyData()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
      </div>
    )
  }

  const theologicalInfluences = [
    {
      religion: 'Cristianismo',
      icon: Cross,
      color: 'from-blue-600 to-blue-700',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      figures: ['San Agustín', 'Orígenes', 'Pseudo-Dionisio', 'Juan Escoto Erígena'],
      keyInfluences: [
        'Concepto del mal como privación del bien',
        'Dios como sustancia incorpórea',
        'Contemplación mística',
        'El término "Logos" teológico',
        'Dualismo espíritu-materia'
      ]
    },
    {
      religion: 'Judaísmo',
      icon: Star,
      color: 'from-purple-600 to-purple-700',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      figures: ['Filón de Alejandría', 'Maimónides', 'Pensadores medievales'],
      keyInfluences: [
        'Interpretación alegórica de las Escrituras',
        'Conceptos filosóficos aplicados a la teología',
        'Síntesis entre filosofía griega y judaísmo',
        'Desarrollo de la teología negativa'
      ]
    },
    {
      religion: 'Islam',
      icon: Moon,
      color: 'from-green-600 to-green-700',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      figures: ['Al-Farabi', 'Avicena', 'Averroes', 'Al-Ghazali'],
      keyInfluences: [
        'Filosofía islámica medieval',
        'Síntesis aristotélico-platónica',
        'Conceptos de emanación divina',
        'Teorías del conocimiento místico'
      ]
    }
  ]

  return (
    <div className="space-y-8">
      {/* Encabezado destacado */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative p-8 lg:p-12">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Church className="h-8 w-8 text-white" />
            </div>
          </div>
          <div className="text-center space-y-4">
            <Badge className="bg-white/20 text-white border-white/30 text-lg px-4 py-2">
              Sección Especial Destacada
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Influencias en la Teología
            </h1>
            <p className="text-lg lg:text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
              El impacto profundo y duradero del pensamiento platónico en las tradiciones teológicas 
              del cristianismo, judaísmo e islam
            </p>
          </div>
        </div>
      </div>

      {/* Introducción */}
      <Card className="border-l-4 border-l-purple-600">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <BookOpen className="h-6 w-6 text-purple-600" />
            <span>El Legado Teológico del Platonismo</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed">
            El pensamiento de Platón ha ejercido una influencia extraordinaria en el desarrollo de las principales 
            tradiciones teológicas occidentales y orientales. A través del <strong>neoplatonismo</strong> y las 
            adaptaciones directas de sus ideas, conceptos platónicos fundamentales se integraron en la teología 
            <strong> cristiana, judía e islámica</strong>, transformando la comprensión de Dios, el alma, 
            el conocimiento divino y la relación entre lo espiritual y lo material.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Esta influencia no fue meramente superficial, sino que penetró en los fundamentos mismos del 
            pensamiento teológico, dando forma a doctrinas centrales y métodos de interpretación que perduran 
            hasta nuestros días.
          </p>
        </CardContent>
      </Card>

      {/* Influencias por religión */}
      <div className="space-y-8">
        {theologicalInfluences.map((influence, index) => {
          const Icon = influence.icon
          return (
            <Card key={index} className={`border-l-4 ${influence.borderColor} ${influence.bgColor}/30`}>
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${influence.color} flex items-center justify-center`}>
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-2xl">Influencias en el {influence.religion}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center space-x-2">
                      <Users className="h-5 w-5" />
                      <span>Figuras Principales</span>
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {influence.figures.map((figure, idx) => (
                        <Badge key={idx} variant="secondary" className="text-sm">
                          {figure}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center space-x-2">
                      <BookOpen className="h-5 w-5" />
                      <span>Conceptos Clave Influenciados</span>
                    </h4>
                    <ul className="space-y-1">
                      {influence.keyInfluences.map((concept, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start space-x-2">
                          <span className="text-gray-400 mt-1">•</span>
                          <span>{concept}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* San Agustín - Caso especial */}
      {augustineData && (
        <Card className="border-2 border-blue-300 bg-gradient-to-br from-blue-50 to-indigo-50">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-xl">
              <Cross className="h-6 w-6 text-blue-600" />
              <span>San Agustín: El Puente entre Platón y el Cristianismo</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 border border-blue-200">
              <div className="flex items-start space-x-4">
                <Quote className="h-8 w-8 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-700 leading-relaxed italic mb-3">
                    "Fuertemente influenciado por los primeros neoplatónicos Plotino y Porfirio, modificó sus puntos 
                    de vista teológicos, especialmente tras pasar del maniqueísmo al cristianismo."
                  </p>
                  <cite className="text-sm text-blue-600 font-medium">— Sobre San Agustín</cite>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Influencias Platónicas Adoptadas</h4>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-sm text-gray-600">El mal como privación del bien (vs. sustancia maniquea)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-sm text-gray-600">Dios como sustancia incorpórea</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-sm text-gray-600">El alma humana como sustancia incorpórea</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-sm text-gray-600">Contemplación mística como medio para encontrar a Dios</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Experiencias Místicas</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  San Agustín describe en el Libro 7 de sus <em>Confesiones</em> experiencias místicas similares 
                  a las descritas por Plotino y Porfirio, demostrando la profunda influencia de la práctica 
                  contemplativa neoplatónica en su espiritualidad cristiana.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Conceptos teológicos específicos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">El Concepto de "Logos"</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <p className="text-sm text-gray-600 leading-relaxed">
                El término <strong>'Logos'</strong> (Λόγος), de origen filosófico griego, adquirió un significado 
                teológico profundo en el cristianismo, refiriéndose a la segunda persona de la Trinidad.
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-xs text-gray-500 mb-2">Evolución del concepto:</p>
                <div className="space-y-1">
                  <Badge variant="outline" className="text-xs">Heráclito: Razón universal</Badge>
                  <Badge variant="outline" className="text-xs">Platón: Mundo de las Ideas</Badge>
                  <Badge variant="outline" className="text-xs">Cristianismo: Segunda persona de la Trinidad</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Cristoplatonismo</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <p className="text-sm text-gray-600 leading-relaxed">
                Término utilizado para describir un dualismo que postula el reino espiritual como bueno y 
                el material como malo, considerado una influencia platónica sobre la Iglesia.
              </p>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-xs text-yellow-700">
                  <strong>Controversia:</strong> Algunos autores consideran que contradice la visión bíblica 
                  de una creación material buena.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Influencia en el pensamiento islámico */}
      {islamicData && (
        <Card className="border-l-4 border-l-green-500">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Moon className="h-6 w-6 text-green-600" />
              <span>Impacto en la Filosofía Islámica</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {islamicData.extracted_information}
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Filón de Alejandría */}
      {philoData && (
        <Card className="border-l-4 border-l-purple-500">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Star className="h-6 w-6 text-purple-600" />
              <span>Filón de Alejandría: Precursor de la Síntesis</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {philoData.extracted_information}
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Legado temporal */}
      <Card className="bg-gradient-to-r from-purple-50 to-blue-50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Church className="h-6 w-6 text-purple-600" />
            <span>Línea Temporal de Influencia Teológica</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-white rounded-lg border">
                <div className="text-2xl font-bold text-blue-600 mb-2">Siglo I-III</div>
                <p className="text-sm text-gray-600">Primeros Padres de la Iglesia</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg border">
                <div className="text-2xl font-bold text-purple-600 mb-2">Siglo IV-V</div>
                <p className="text-sm text-gray-600">San Agustín</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg border">
                <div className="text-2xl font-bold text-green-600 mb-2">Siglo IX</div>
                <p className="text-sm text-gray-600">Juan Escoto Erígena</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg border">
                <div className="text-2xl font-bold text-rose-600 mb-2">Renacimiento</div>
                <p className="text-sm text-gray-600">Marsilio Ficino</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Referencias académicas */}
      {christianData?.references && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BookOpen className="h-6 w-6 text-gray-600" />
              <span>Referencias Académicas</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {christianData.references.map((reference, index) => (
                <li key={index} className="text-sm text-gray-600 flex items-start space-x-2">
                  <ExternalLink className="h-4 w-4 mt-0.5 flex-shrink-0 text-gray-400" />
                  <span>{reference}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {/* Conclusión */}
      <Card className="border-2 border-purple-200 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Legado Teológico Duradero</h3>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            La influencia de Platón en la teología no se limita a conceptos específicos, sino que abarca 
            metodologías de pensamiento, aproximaciones a lo divino, y formas de entender la relación 
            entre razón y fe que continúan siendo relevantes en el pensamiento teológico contemporáneo 
            de las tres grandes tradiciones monoteístas.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
