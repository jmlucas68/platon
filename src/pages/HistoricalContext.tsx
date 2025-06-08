import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Clock, Sword, Users, Building, Scroll, Crown } from 'lucide-react'

export function HistoricalContext() {
  const historicalPeriods = [
    {
      period: 'Guerra del Peloponeso',
      dates: '431-404 a.C.',
      icon: Sword,
      color: 'from-red-500 to-red-600',
      events: [
        'Plaga de Atenas (430-427 a.C.) - Reducción de población a un tercio',
        'Muerte de Pericles (429 a.C.) - Fin del liderazgo democrático',
        'Expedición a Sicilia (413 a.C.) - Desastre militar ateniense',
        'Derrota final de Atenas (404 a.C.) - Fin de la hegemonía ateniense'
      ]
    },
    {
      period: 'Crisis Política',
      dates: '404-403 a.C.',
      icon: Crown,
      color: 'from-orange-500 to-orange-600',
      events: [
        'Tiranía de los Treinta (404-403 a.C.) - Gobierno oligárquico brutal',
        'Persecución de demócratas y filósofos',
        'Restauración democrática (403 a.C.)',
        'Amnistía general pero tensiones persistentes'
      ]
    },
    {
      period: 'Muerte de Sócrates',
      dates: '399 a.C.',
      icon: Users,
      color: 'from-purple-500 to-purple-600',
      events: [
        'Acusación de corromper a la juventud',
        'Cargo de introducir nuevos dioses',
        'Juicio y condena por la democracia restaurada',
        'Impacto profundo en Platón y otros discípulos'
      ]
    }
  ]

  const intellectualContext = [
    {
      group: 'Los Sofistas',
      leader: 'Protágoras, Gorgias',
      philosophy: 'Relativismo y retórica',
      influence: 'Enseñaban técnicas persuasivas para el éxito político',
      impact: 'Platón desarrolló su filosofía en oposición a sus ideas'
    },
    {
      group: 'Socráticos',
      leader: 'Sócrates',
      philosophy: 'Búsqueda de la verdad moral',
      influence: 'Método dialéctico y autoconocimiento',
      impact: 'Base fundamental del pensamiento platónico'
    },
    {
      group: 'Presocráticos',
      leader: 'Heráclito, Parménides',
      philosophy: 'Cosmología y ontología',
      influence: 'Teorías sobre el ser y el devenir',
      impact: 'Influencia en la Teoría de las Ideas'
    }
  ]

  return (
    <div className="space-y-8">
      {/* Encabezado */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Contexto Histórico y Filosófico</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          La Grecia clásica del siglo V-IV a.C. y el ambiente intelectual que formó a Platón
        </p>
      </div>

      {/* La Grecia de Platón */}
      <Card className="border-l-4 border-l-blue-500">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Building className="h-6 w-6 text-blue-500" />
            <span>La Grecia Clásica del Siglo V-IV a.C.</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Platón vivió durante uno de los períodos más turbulentos y ricos de la historia griega. 
                La Atenas de su juventud era el centro del mundo griego, pero también estaba sumida en 
                una guerra devastadora que transformaría para siempre el paisaje político y cultural del 
                mundo helénico.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Este contexto de crisis política, militar y social influyó profundamente en su desarrollo 
                filosófico, especialmente en su visión crítica de la democracia ateniense y su búsqueda 
                de formas ideales de gobierno.
              </p>
            </div>
            <div>
              <img
                src="/images/filosofos_griegos.png"
                alt="Filósofos griegos"
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Eventos históricos clave */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 text-center">Eventos Históricos Clave</h2>
        
        {historicalPeriods.map((period, index) => {
          const Icon = period.icon
          return (
            <Card key={index} className="overflow-hidden">
              <CardHeader className={`bg-gradient-to-r ${period.color} text-white`}>
                <CardTitle className="flex items-center space-x-3">
                  <Icon className="h-6 w-6" />
                  <span>{period.period}</span>
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                    {period.dates}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {period.events.map((event, eventIndex) => (
                    <li key={eventIndex} className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-700">{event}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Impacto en Platón */}
      <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Users className="h-6 w-6 text-blue-600" />
            <span>Impacto en la Formación de Platón</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Crisis de la Democracia</h4>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                La experiencia de ver cómo la democracia ateniense condenó a muerte a su maestro Sócrates 
                marcó profundamente a Platón, llevándolo a desarrollar una crítica sistemática de los 
                sistemas políticos de su época.
              </p>
              <div className="space-y-2">
                <Badge variant="outline" className="text-xs">Crítica a la democracia directa</Badge>
                <Badge variant="outline" className="text-xs">Búsqueda de la justicia ideal</Badge>
                <Badge variant="outline" className="text-xs">Filosofía política sistemática</Badge>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Influencia de la Guerra</h4>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                La Guerra del Peloponeso y sus consecuencias devastadoras influyeron en la visión platónica 
                sobre la necesidad de una educación filosófica para los gobernantes y la importancia de la 
                justicia en el Estado.
              </p>
              <div className="space-y-2">
                <Badge variant="outline" className="text-xs">Teoría del filósofo-rey</Badge>
                <Badge variant="outline" className="text-xs">Educación como salvación política</Badge>
                <Badge variant="outline" className="text-xs">Crítica al militarismo</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Ambiente intelectual */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 text-center">El Ambiente Intelectual</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {intellectualContext.map((group, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle className="text-lg flex items-center space-x-2">
                  <Scroll className="h-5 w-5 text-purple-500" />
                  <span>{group.group}</span>
                </CardTitle>
                <p className="text-sm text-gray-600">{group.leader}</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h5 className="font-medium text-gray-900 mb-1">Filosofía</h5>
                  <p className="text-sm text-gray-600">{group.philosophy}</p>
                </div>
                <div>
                  <h5 className="font-medium text-gray-900 mb-1">Influencia</h5>
                  <p className="text-sm text-gray-600">{group.influence}</p>
                </div>
                <div>
                  <h5 className="font-medium text-gray-900 mb-1">Impacto en Platón</h5>
                  <p className="text-sm text-gray-600">{group.impact}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* La Academia como respuesta */}
      <Card className="border-l-4 border-l-green-500">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Building className="h-6 w-6 text-green-500" />
            <span>La Academia: Respuesta al Contexto Histórico</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            La fundación de la Academia en 387 a.C. fue la respuesta de Platón a la crisis política e 
            intelectual de su época. Consciente de que las soluciones políticas inmediatas habían fracasado, 
            optó por una estrategia a largo plazo: formar una nueva generación de pensadores y líderes a 
            través de la educación filosófica.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Objetivos de la Academia</h4>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-sm text-gray-600">Formar filósofos-gobernantes</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-sm text-gray-600">Desarrollar el método dialéctico</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-sm text-gray-600">Integrar matemáticas y filosofía</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-sm text-gray-600">Crear una comunidad intelectual estable</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Legado Histórico</h4>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-sm text-gray-600">Primera universidad del mundo occidental</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-sm text-gray-600">Funcionó durante 900 años</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-sm text-gray-600">Formó a Aristóteles y otros grandes pensadores</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-sm text-gray-600">Modelo para instituciones posteriores</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Línea temporal */}
      <Card className="bg-gradient-to-r from-gray-50 to-blue-50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Clock className="h-6 w-6 text-gray-600" />
            <span>Línea Temporal del Contexto Histórico</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-white rounded-lg border border-red-200">
                <div className="text-lg font-bold text-red-600 mb-2">431-404 a.C.</div>
                <p className="text-sm text-gray-600">Guerra del Peloponeso</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg border border-orange-200">
                <div className="text-lg font-bold text-orange-600 mb-2">404-403 a.C.</div>
                <p className="text-sm text-gray-600">Tiranía de los Treinta</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg border border-purple-200">
                <div className="text-lg font-bold text-purple-600 mb-2">399 a.C.</div>
                <p className="text-sm text-gray-600">Muerte de Sócrates</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg border border-green-200">
                <div className="text-lg font-bold text-green-600 mb-2">387 a.C.</div>
                <p className="text-sm text-gray-600">Fundación de la Academia</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
