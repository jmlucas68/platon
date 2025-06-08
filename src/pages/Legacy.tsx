import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Crown, BookOpen, Church, Brain, Globe, Star, Users, Clock } from 'lucide-react'

export function Legacy() {
  const majorInfluences = [
    {
      name: 'Aristóteles',
      period: '384-322 a.C.',
      icon: Brain,
      color: 'from-green-500 to-green-600',
      relationship: 'Discípulo directo (367-347 a.C.)',
      keyInfluences: [
        'Método dialéctico y sistemático',
        'Importancia de la educación filosófica',
        'Distinción entre forma y materia (influencia de Ideas)',
        'Búsqueda de principios universales',
        'Filosofía política sistemática',
        'Crítica constructiva que desarrolló el pensamiento'
      ],
      legacy: 'Aunque crítico de la Teoría de las Ideas, Aristóteles desarrolló muchos conceptos platónicos en nuevas direcciones, creando el sistema filosófico más influyente de la Antigüedad después de Platón.',
      innovations: ['Lógica formal', 'Filosofía de la ciencia', 'Ética de las virtudes', 'Política empírica']
    },
    {
      name: 'Neoplatonismo',
      period: 'Siglos III-VI d.C.',
      icon: Star,
      color: 'from-purple-500 to-purple-600',
      relationship: 'Escuela filosófica basada en Platón',
      keyInfluences: [
        'Teoría de las Ideas como jerarquía de emanaciones',
        'El Uno como principio supremo (Idea del Bien)',
        'Proceso de emanación y retorno',
        'Contemplación mística de las Ideas',
        'Síntesis con elementos aristotélicos y estoicos',
        'Interpretación alegórica de los mitos platónicos'
      ],
      legacy: 'Los neoplatónicos, especialmente Plotino, Proclo y Damascio, desarrollaron una síntesis sistemática del platonismo que influyó profundamente en la teología cristiana, judía e islámica.',
      innovations: ['Sistema de emanaciones', 'Mística filosófica', 'Teología negativa', 'Síntesis filosófico-religiosa']
    },
    {
      name: 'Filosofía Medieval',
      period: 'Siglos V-XV d.C.',
      icon: Church,
      color: 'from-blue-500 to-blue-600',
      relationship: 'Síntesis teológico-filosófica',
      keyInfluences: [
        'Conceptos platónicos en la teología cristiana',
        'Agustinismo como platonismo cristiano',
        'Influencia en la filosofía islámica medieval',
        'Tradición platónica en el judaísmo medieval',
        'Universidad medieval y métodos educativos',
        'Dialéctica como método teológico'
      ],
      legacy: 'La síntesis platónico-cristiana de San Agustín dominó el pensamiento medieval occidental, mientras que en el mundo islámico, pensadores como Al-Farabi desarrollaron síntesis platónico-aristotélicas.',
      innovations: ['Teología platónica', 'Síntesis fe-razón', 'Filosofía islámica', 'Cábala judía']
    },
    {
      name: 'Renacimiento',
      period: 'Siglos XV-XVI d.C.',
      icon: Crown,
      color: 'from-orange-500 to-red-500',
      relationship: 'Resurgimiento del platonismo',
      keyInfluences: [
        'Academia Platónica de Florencia (Marsilio Ficino)',
        'Traducción de obras platónicas al latín',
        'Síntesis platónico-hermética',
        'Influencia en el humanismo renacentista',
        'Arte y arquitectura inspirados en Ideas platónicas',
        'Filosofía política utópica'
      ],
      legacy: 'El renacimiento platónico influyó en el arte, la ciencia y la política del Renacimiento, proporcionando una alternativa al aristotelismo escolástico.',
      innovations: ['Humanismo platónico', 'Arte neoplatónico', 'Filosofía hermética', 'Política utópica']
    },
    {
      name: 'Filosofía Moderna',
      period: 'Siglos XVII-XVIII d.C.',
      icon: Globe,
      color: 'from-indigo-500 to-purple-500',
      relationship: 'Influencia en racionalismo e idealismo',
      keyInfluences: [
        'Racionalismo cartesiano (Ideas innatas)',
        'Idealismo de Berkeley (esse est percipi)',
        'Filosofía política contractualista',
        'Teorías del conocimiento a priori',
        'Dualismo mente-cuerpo',
        'Búsqueda de principios universales'
      ],
      legacy: 'Elementos platónicos influyeron en el racionalismo continental y prepararon el terreno para el idealismo alemán.',
      innovations: ['Racionalismo moderno', 'Idealismo subjetivo', 'Filosofía política moderna', 'Epistemología a priori']
    },
    {
      name: 'Filosofía Contemporánea',
      period: 'Siglos XIX-XXI d.C.',
      icon: BookOpen,
      color: 'from-teal-500 to-green-500',
      relationship: 'Influencia continua y reinterpretación',
      keyInfluences: [
        'Idealismo alemán (Hegel, Schelling)',
        'Filosofía analítica (Frege, Russell)',
        'Fenomenología (Husserl)',
        'Filosofía política liberal',
        'Teorías de la educación',
        'Filosofía de las matemáticas'
      ],
      legacy: 'El platonismo sigue siendo una posición respetable en filosofía de las matemáticas, metafísica y filosofía política, demostrando la vigencia perenne de las preguntas platónicas.',
      innovations: ['Realismo matemático', 'Idealismo absoluto', 'Fenomenología', 'Liberalismo político']
    }
  ]

  const modernFields = [
    {
      field: 'Filosofía de las Matemáticas',
      description: 'El platonismo matemático sostiene que los objetos matemáticos existen independientemente de la mente humana',
      modernThinkers: ['Kurt Gödel', 'Roger Penrose', 'Alain Badiou'],
      applications: ['Teoría de conjuntos', 'Filosofía de la lógica', 'Fundamentación matemática']
    },
    {
      field: 'Filosofía Política',
      description: 'Conceptos como justicia, Estado ideal y educación cívica siguen influenciando el pensamiento político',
      modernThinkers: ['John Rawls', 'Leo Strauss', 'Allan Bloom'],
      applications: ['Teoría de la justicia', 'Educación liberal', 'Filosofía del derecho']
    },
    {
      field: 'Filosofía de la Educación',
      description: 'El modelo educativo platónico sigue influyendo en teorías pedagógicas contemporáneas',
      modernThinkers: ['John Dewey', 'Martha Nussbaum', 'Harvey Siegel'],
      applications: ['Educación liberal', 'Pensamiento crítico', 'Formación del carácter']
    },
    {
      field: 'Metafísica',
      description: 'Debates sobre universales, propiedades y realismo siguen la tradición platónica',
      modernThinkers: ['David Lewis', 'Trenton Merricks', 'Theodore Sider'],
      applications: ['Teoría de universales', 'Ontología modal', 'Metafísica fundamental']
    }
  ]

  const chronologicalInfluence = [
    {
      period: 'Antigüedad Tardía',
      dates: '200-600 d.C.',
      keyEvents: [
        'Plotino desarrolla el neoplatonismo (205-270 d.C.)',
        'San Agustín sintetiza platonismo y cristianismo (354-430 d.C.)',
        'Proclo sistematiza el neoplatonismo (412-485 d.C.)',
        'Cierre de la Academia por Justiniano (529 d.C.)'
      ]
    },
    {
      period: 'Edad Media',
      dates: '600-1400 d.C.',
      keyEvents: [
        'Transmisión árabe del platonismo (siglos VIII-XII)',
        'Escuela de Chartres revive el platonismo (siglo XII)',
        'Dante incorpora elementos platónicos (1265-1321)',
        'Desarrollo de la Cábala judía (siglos XII-XIII)'
      ]
    },
    {
      period: 'Renacimiento',
      dates: '1400-1600 d.C.',
      keyEvents: [
        'Gemisto Pletón promueve el platonismo (1355-1452)',
        'Marsilio Ficino traduce a Platón (1433-1499)',
        'Academia Platónica de Florencia (1462-1494)',
        'Pico della Mirandola sintetiza tradiciones (1463-1494)'
      ]
    },
    {
      period: 'Modernidad',
      dates: '1600-1900 d.C.',
      keyEvents: [
        'Descartes desarrolla racionalismo (1596-1650)',
        'Escuela de Cambridge revive platonismo (siglo XVII)',
        'Kant critica y transforma platonismo (1724-1804)',
        'Hegel desarrolla idealismo absoluto (1770-1831)'
      ]
    }
  ]

  return (
    <div className="space-y-8">
      {/* Encabezado */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Influencias Ejercidas por Platón</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          El impacto duradero del pensamiento platónico en 2400 años de historia intelectual
        </p>
      </div>

      {/* Introducción */}
      <Card className="border-l-4 border-l-blue-500">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Crown className="h-6 w-6 text-blue-500" />
            <span>Un Legado Intelectual de 2400 Años</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="prose max-w-none">
          <p className="text-gray-700 leading-relaxed">
            La influencia de Platón en la historia del pensamiento occidental es <strong>incalculable</strong>. 
            Alfred North Whitehead famosamente observó que "toda la filosofía occidental no es más que una 
            serie de notas al pie de Platón." Esta influencia se extiende desde la Antigüedad tardía hasta 
            la filosofía contemporánea, pasando por la teología medieval, el Renacimiento, la Ilustración 
            y la modernidad.
          </p>
          <p className="text-gray-700 leading-relaxed">
            El platonismo no fue simplemente una escuela filosófica antigua, sino una <strong>tradición 
            viva</strong> que se ha adaptado y transformado a través de diferentes épocas y contextos 
            culturales, manteniendo siempre su núcleo de preguntas fundamentales sobre la realidad, 
            el conocimiento, la justicia y el bien.
          </p>
        </CardContent>
      </Card>

      {/* Influencias principales por período */}
      <div className="space-y-8">
        <h2 className="text-2xl font-bold text-gray-900 text-center">Líneas de Influencia Principales</h2>
        
        {majorInfluences.map((influence, index) => {
          const Icon = influence.icon
          return (
            <Card key={index} className="overflow-hidden">
              <CardHeader className={`bg-gradient-to-r ${influence.color} text-white`}>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center space-x-3">
                    <Icon className="h-7 w-7" />
                    <div>
                      <h3 className="text-2xl font-bold">{influence.name}</h3>
                      <p className="text-white/90 text-sm">{influence.relationship}</p>
                    </div>
                  </CardTitle>
                  <Badge className="bg-white/20 text-white border-white/30 text-sm">
                    {influence.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Elementos Platónicos Transmitidos</h4>
                      <div className="space-y-2">
                        {influence.keyInfluences.map((concept, conceptIndex) => (
                          <div key={conceptIndex} className="flex items-start space-x-2">
                            <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-sm text-gray-700">{concept}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Innovaciones Desarrolladas</h4>
                      <div className="flex flex-wrap gap-2">
                        {influence.innovations.map((innovation, innovationIndex) => (
                          <Badge key={innovationIndex} variant="secondary" className="text-xs">
                            {innovation}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Legado e Impacto</h4>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-gray-700 text-sm leading-relaxed">{influence.legacy}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Influencia en campos modernos */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 text-center">Platonismo en la Filosofía Contemporánea</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {modernFields.map((field, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle className="text-lg flex items-center space-x-2">
                  <BookOpen className="h-5 w-5 text-purple-500" />
                  <span>{field.field}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-gray-700 leading-relaxed">{field.description}</p>
                
                <div>
                  <h5 className="font-medium text-gray-900 mb-2">Pensadores Contemporáneos</h5>
                  <div className="flex flex-wrap gap-1">
                    {field.modernThinkers.map((thinker, thinkerIndex) => (
                      <Badge key={thinkerIndex} variant="outline" className="text-xs">
                        {thinker}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h5 className="font-medium text-gray-900 mb-2">Aplicaciones</h5>
                  <ul className="space-y-1">
                    {field.applications.map((application, appIndex) => (
                      <li key={appIndex} className="text-xs text-gray-600 flex items-start space-x-2">
                        <span className="text-gray-400 mt-1">•</span>
                        <span>{application}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Cronología de influencia */}
      <Card className="border-l-4 border-l-green-500">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Clock className="h-6 w-6 text-green-500" />
            <span>Cronología de la Influencia Platónica</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {chronologicalInfluence.map((period, index) => (
              <div key={index} className="border-l-2 border-gray-200 pl-6 relative">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-green-500 rounded-full"></div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <h4 className="font-semibold text-gray-900">{period.period}</h4>
                    <Badge variant="outline">{period.dates}</Badge>
                  </div>
                  <ul className="space-y-2">
                    {period.keyEvents.map((event, eventIndex) => (
                      <li key={eventIndex} className="text-sm text-gray-700 flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                        <span>{event}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Estadísticas de influencia */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Globe className="h-6 w-6 text-blue-600" />
            <span>Alcance Global de la Influencia Platónica</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-white rounded-lg border">
              <div className="text-3xl font-bold text-blue-600 mb-2">2400+</div>
              <p className="text-sm text-gray-600">Años de influencia continua</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border">
              <div className="text-3xl font-bold text-purple-600 mb-2">3</div>
              <p className="text-sm text-gray-600">Tradiciones religiosas influenciadas</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border">
              <div className="text-3xl font-bold text-green-600 mb-2">100+</div>
              <p className="text-sm text-gray-600">Generaciones de filósofos</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border">
              <div className="text-3xl font-bold text-orange-600 mb-2">∞</div>
              <p className="text-sm text-gray-600">Preguntas perennes planteadas</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Platonismo contemporáneo */}
      <Card className="border-2 border-purple-200 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Star className="h-6 w-6 text-purple-600" />
            <span>El Platonismo en el Siglo XXI</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            En la filosofía contemporánea, el platonismo mantiene su relevancia en múltiples campos:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 border">
              <h4 className="font-semibold text-gray-900 mb-2">Filosofía de las Matemáticas</h4>
              <p className="text-sm text-gray-600">El realismo matemático sostiene que los números y las estructuras matemáticas existen independientemente de la mente humana, una posición claramente platónica.</p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 border">
              <h4 className="font-semibold text-gray-900 mb-2">Teoría Política</h4>
              <p className="text-sm text-gray-600">Conceptos como justicia distributiva, educación cívica y el papel de la filosofía en la política siguen siendo relevantes en el debate contemporáneo.</p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 border">
              <h4 className="font-semibold text-gray-900 mb-2">Metafísica</h4>
              <p className="text-sm text-gray-600">Los debates sobre universales, propiedades, modalidad y la naturaleza de la realidad mantienen viva la tradición platónica en la filosofía analítica.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Conclusión */}
      <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Un Legado Vivo</h3>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            La influencia de Platón trasciende las categorías académicas para constituir parte del 
            <strong> patrimonio intelectual de la humanidad</strong>. Sus preguntas sobre la naturaleza 
            de la realidad, la justicia, el conocimiento y el bien siguen siendo relevantes porque 
            abordan cuestiones fundamentales de la condición humana. En cada época, nuevas generaciones 
            de pensadores han encontrado en Platón inspiración para enfrentar los desafíos intelectuales 
            y morales de su tiempo.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
