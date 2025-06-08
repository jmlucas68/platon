import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Users, Brain, Circle, Triangle, Atom, Quote } from 'lucide-react'

export function Influences() {
  const majorInfluences = [
    {
      name: 'Sócrates',
      period: '470-399 a.C.',
      icon: Users,
      color: 'from-blue-500 to-blue-600',
      relationship: 'Maestro directo (407-399 a.C.)',
      keyInfluences: [
        'Método dialéctico de pregunta y respuesta',
        'Búsqueda de definiciones universales',
        'Identificación de virtud y conocimiento',
        'Importancia del autoconocimiento ("conócete a ti mismo")',
        'Ironía socrática y confesión de ignorancia',
        'Prioridad de la vida del alma sobre el cuerpo'
      ],
      legacy: 'Sócrates fue la influencia más determinante en la formación filosófica de Platón. Su método de investigación dialéctica y su compromiso ético con la búsqueda de la verdad se convirtieron en el fundamento del platonismo.',
      quote: 'Una vida sin examen no merece ser vivida.'
    },
    {
      name: 'Pitagóricos',
      period: 'Siglos VI-V a.C.',
      icon: Triangle,
      color: 'from-purple-500 to-purple-600',
      relationship: 'Influencia intelectual indirecta',
      keyInfluences: [
        'Importancia de las matemáticas en la comprensión del cosmos',
        'Dualismo alma-cuerpo',
        'Doctrina de la inmortalidad y transmigración del alma',
        'Idea de purificación del alma a través del conocimiento',
        'Concepción del número como principio de todas las cosas',
        'Armonía como principio universal'
      ],
      legacy: 'Los pitagóricos proporcionaron a Platón el marco matemático y místico que integró en su teoría de las Ideas. La famosa inscripción en la Academia "Que no entre nadie que no sepa geometría" refleja esta influencia.',
      quote: 'Todo es número.'
    },
    {
      name: 'Heráclito',
      period: 'c. 535-475 a.C.',
      icon: Circle,
      color: 'from-orange-500 to-red-500',
      relationship: 'Influencia conceptual sobre el mundo sensible',
      keyInfluences: [
        'Doctrina del flujo perpetuo ("todo fluye")',
        'Unidad de los opuestos',
        'El Logos como principio racional universal',
        'Crítica a la confianza en los sentidos',
        'Concepto de armonía oculta',
        'Cambio constante como característica del mundo sensible'
      ],
      legacy: 'La descripción heraclitiana del mundo sensible como cambiante influyó en la distinción platónica entre el mundo sensible (en flujo) y el mundo inteligible (inmutable).',
      quote: 'No es posible descender dos veces al mismo río.'
    },
    {
      name: 'Parménides',
      period: 'c. 515-450 a.C.',
      icon: Brain,
      color: 'from-green-500 to-teal-500',
      relationship: 'Influencia ontológica fundamental',
      keyInfluences: [
        'Distinción entre "lo que es" y "lo que parece ser"',
        'Crítica al conocimiento sensorial',
        'Inmutabilidad del ser verdadero',
        'Unidad, eternidad e indivisibilidad del ser',
        'Prioridad del pensamiento sobre los sentidos',
        'Negación de la posibilidad del no-ser'
      ],
      legacy: 'Parménides influyó decisivamente en la concepción platónica de las Ideas como realidades inmutables y eternas, accesibles solo al pensamiento.',
      quote: 'El ser es, el no-ser no es.'
    },
    {
      name: 'Anaxágoras',
      period: 'c. 500-428 a.C.',
      icon: Atom,
      color: 'from-indigo-500 to-blue-500',
      relationship: 'Influencia cosmológica',
      keyInfluences: [
        'Concepto del Nous (Mente) como principio ordenador',
        'Distinción entre mente y materia',
        'Teleología en la explicación del cosmos',
        'Crítica al mecanicismo puro',
        'Importancia de la inteligencia en la organización del mundo',
        'Pluralismo de elementos básicos'
      ],
      legacy: 'La noción de Nous en Anaxágoras influyó en la concepción platónica de la Idea del Bien como principio supremo ordenador del cosmos inteligible.',
      quote: 'Todas las cosas estaban juntas, entonces vino la Mente y las ordenó.'
    }
  ]

  const otherInfluences = [
    {
      category: 'Sofistas',
      figures: ['Protágoras', 'Gorgias', 'Pródico'],
      influence: 'Oposición dialéctica',
      description: 'Aunque Platón se opuso a su relativismo, los sofistas influyeron en su comprensión de la retórica y la necesidad de fundamentar el conocimiento en bases absolutas.'
    },
    {
      category: 'Tradición Órfica',
      figures: ['Orfeo', 'Misterios órficos'],
      influence: 'Elementos místicos',
      description: 'Doctrinas sobre la inmortalidad del alma, purificación y el destino post-mortem influyeron en la escatología platónica.'
    },
    {
      category: 'Tradición Homérica',
      figures: ['Homero', 'Hesíodo'],
      influence: 'Crítica y reinterpretación',
      description: 'Aunque criticó la poesía tradicional, Platón se nutrió de la tradición mitológica griega para desarrollar sus propios mitos filosóficos.'
    }
  ]

  return (
    <div className="space-y-8">
      {/* Encabezado */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Influencias Recibidas por Platón</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Los pensadores y tradiciones que formaron el fundamento del pensamiento platónico
        </p>
      </div>

      {/* Introducción */}
      <Card className="border-l-4 border-l-blue-500">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Brain className="h-6 w-6 text-blue-500" />
            <span>Síntesis Filosófica</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="prose max-w-none">
          <p className="text-gray-700 leading-relaxed">
            El genio de Platón no consistió únicamente en la originalidad de sus ideas, sino en su 
            capacidad para <strong>sintetizar y transformar</strong> las corrientes filosóficas de su época 
            en un sistema coherente y revolucionario. Su pensamiento representa una síntesis creativa 
            de influencias diversas: el método socrático, la matemática pitagórica, la ontología 
            parmenídea y la cosmología de los físicos presocráticos.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Esta síntesis no fue ecléctica, sino que respondió a problemas filosóficos fundamentales 
            a través de una arquitectura conceptual original que integró elementos aparentemente 
            contradictorios en una visión unitaria del cosmos, el conocimiento y la ética.
          </p>
        </CardContent>
      </Card>

      {/* Influencias principales */}
      <div className="space-y-8">
        <h2 className="text-2xl font-bold text-gray-900 text-center">Influencias Fundamentales</h2>
        
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
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2 space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Conceptos Clave Transmitidos</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {influence.keyInfluences.map((concept, conceptIndex) => (
                          <div key={conceptIndex} className="flex items-start space-x-2">
                            <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-sm text-gray-700">{concept}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Legado en el Platonismo</h4>
                      <p className="text-gray-700 text-sm leading-relaxed">{influence.legacy}</p>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-1">
                    <div className="bg-gray-50 rounded-lg p-6 h-full flex flex-col justify-center">
                      <Quote className="h-8 w-8 text-gray-400 mb-4 mx-auto" />
                      <blockquote className="text-gray-700 italic text-center text-sm leading-relaxed mb-3">
                        "{influence.quote}"
                      </blockquote>
                      <cite className="text-gray-500 text-xs text-center">— {influence.name}</cite>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Otras influencias */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 text-center">Otras Influencias Significativas</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {otherInfluences.map((influence, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle className="text-lg">{influence.category}</CardTitle>
                <div className="flex flex-wrap gap-1">
                  {influence.figures.map((figure, figureIndex) => (
                    <Badge key={figureIndex} variant="outline" className="text-xs">
                      {figure}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h5 className="font-medium text-gray-900 mb-1">Tipo de Influencia</h5>
                  <Badge variant="secondary" className="text-xs">{influence.influence}</Badge>
                </div>
                <div>
                  <h5 className="font-medium text-gray-900 mb-2">Descripción</h5>
                  <p className="text-sm text-gray-600 leading-relaxed">{influence.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Síntesis metodológica */}
      <Card className="border-l-4 border-l-purple-500">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Brain className="h-6 w-6 text-purple-500" />
            <span>Síntesis Metodológica de Platón</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Platón no fue un simple compilador de ideas previas, sino un pensador original que transformó 
            las influencias recibidas en una nueva síntesis filosófica. Su método consistió en:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Proceso de Síntesis</h4>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-sm text-gray-600">Asimilación crítica de doctrinas previas</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-sm text-gray-600">Resolución de contradicciones aparentes</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-sm text-gray-600">Integración en un sistema coherente</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-sm text-gray-600">Desarrollo de nuevos conceptos explicativos</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Innovaciones Originales</h4>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-sm text-gray-600">Teoría de las Ideas como síntesis ontológica</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-sm text-gray-600">Método dialéctico sistemático</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-sm text-gray-600">Filosofía política basada en la psicología</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-sm text-gray-600">Integración de ética, política y metafísica</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Cronología de influencias */}
      <Card className="bg-gradient-to-r from-gray-50 to-blue-50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Users className="h-6 w-6 text-gray-600" />
            <span>Cronología de Influencias</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-white rounded-lg border border-purple-200">
                <div className="text-lg font-bold text-purple-600 mb-2">Siglo VI a.C.</div>
                <p className="text-sm text-gray-600">Pitagóricos y Heráclito</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg border border-green-200">
                <div className="text-lg font-bold text-green-600 mb-2">Siglo V a.C.</div>
                <p className="text-sm text-gray-600">Parménides y Anaxágoras</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg border border-blue-200">
                <div className="text-lg font-bold text-blue-600 mb-2">470-399 a.C.</div>
                <p className="text-sm text-gray-600">Sócrates (influencia directa)</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg border border-orange-200">
                <div className="text-lg font-bold text-orange-600 mb-2">Siglo V a.C.</div>
                <p className="text-sm text-gray-600">Sofistas (oposición)</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Conclusión */}
      <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">La Originalidad de la Síntesis Platónica</h3>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            La grandeza de Platón reside en haber transformado influencias dispares en una visión coherente 
            del cosmos, el conocimiento y la ética. Su capacidad para integrar el rigor matemático pitagórico, 
            la búsqueda socrática de la verdad, la ontología parmenídea y la cosmología presocrática en 
            la Teoría de las Ideas constituye uno de los logros intelectuales más notables de la historia 
            del pensamiento occidental.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
