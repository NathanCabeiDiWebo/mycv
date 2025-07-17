"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  Car,
  Cpu,
  Zap,
  Eye,
  Code,
  Layers,
  Wrench,
  ChevronRight,
  RotateCw,
  Gauge,
  Lightbulb,
  Clock,
  FileText,
  Users,
  Workflow,
} from "lucide-react"
import { useRouter } from "next/navigation"

export default function PEE20Page() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Circuit Board Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="circuit-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M0 50 L100 50 M50 0 L50 100" stroke="currentColor" strokeWidth="1" />
            <circle cx="50" cy="50" r="5" fill="currentColor" />
            <circle cx="0" cy="50" r="5" fill="currentColor" />
            <circle cx="100" cy="50" r="5" fill="currentColor" />
            <circle cx="50" cy="0" r="5" fill="currentColor" />
            <circle cx="50" cy="100" r="5" fill="currentColor" />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#circuit-pattern)" />
        </svg>
      </div>

      {/* Animated Circuit Lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute h-[300px] w-[300px] rounded-full bg-teal-500/20 blur-3xl -top-20 -right-20"></div>
        <div className="absolute h-[250px] w-[250px] rounded-full bg-blue-500/20 blur-3xl bottom-10 -left-20"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <Button
          variant="ghost"
          className="mb-6 text-white hover:text-teal-300 hover:bg-white/5"
          onClick={() => router.push("/")}
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Terug naar CV
        </Button>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2 flex items-center">
            <Car className="w-8 h-8 mr-3 text-teal-400" />
            Project PEE20: Autonome Robot
          </h1>
          <p className="text-lg text-white/80">
            Een gedetailleerd verslag van het ontwerp- en bouwproces van een autonome robot met MSP430G2553
          </p>
        </div>

        {/* Project Overview */}
        <Card className="bg-white/10 border-0 backdrop-blur-sm overflow-hidden rounded-xl relative mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-transparent"></div>
          <CardHeader className="pb-2 border-b border-white/10">
            <CardTitle className="text-2xl font-semibold flex items-center text-white">
              <FileText className="w-6 h-6 mr-2 text-teal-400" /> Projectoverzicht
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="rounded-lg overflow-hidden mb-6 bg-gradient-to-r from-slate-700 to-slate-800 p-1">
                <div className="h-48 bg-slate-800 rounded flex items-center justify-center relative overflow-hidden">
                  <Car className="w-24 h-24 text-teal-400/30" />
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-slate-900"></div>
                </div>
              </div>

              <p className="text-white">
                Project PEE20 was een groepsopdracht waarbij we een autonome robot moesten ontwerpen en bouwen die
                obstakels kan detecteren en vermijden. De robot moest in staat zijn om zelfstandig door een parcours te
                navigeren en verschillende taken uit te voeren. Dit project combineerde verschillende aspecten van
                elektrotechniek, waaronder microcontroller-programmering, sensortechnologie, motoraansturing en
                mechanisch ontwerp.
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                <Badge variant="outline" className="bg-teal-500/10 text-teal-300 border-teal-500/30">
                  MSP430G2553
                </Badge>
                <Badge variant="outline" className="bg-teal-500/10 text-teal-300 border-teal-500/30">
                  Ultrasone Sensoren
                </Badge>
                <Badge variant="outline" className="bg-teal-500/10 text-teal-300 border-teal-500/30">
                  DC Motoren
                </Badge>
                <Badge variant="outline" className="bg-teal-500/10 text-teal-300 border-teal-500/30">
                  C Programmeren
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Project Team and Planning */}
        <Card className="bg-white/10 border-0 backdrop-blur-sm overflow-hidden rounded-xl relative mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent"></div>
          <CardHeader className="pb-2 border-b border-white/10">
            <CardTitle className="text-2xl font-semibold flex items-center text-white">
              <Users className="w-6 h-6 mr-2 text-blue-400" /> Projectteam en Planning
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-blue-300 mb-3">Teamsamenstelling</h3>
                <p className="text-white mb-4">
                  Het project werd uitgevoerd door een team van vier studenten, elk met verschillende
                  verantwoordelijkheden:
                </p>
                <ul className="space-y-2 text-white">
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-blue-400 mt-1 mr-2 flex-shrink-0" />
                    <span>
                      <span className="font-semibold">Teamlid 1:</span> Verantwoordelijk voor
                      microcontroller-programmering en algoritmes
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-blue-400 mt-1 mr-2 flex-shrink-0" />
                    <span>
                      <span className="font-semibold">Teamlid 2:</span> Verantwoordelijk voor sensorintegratie en
                      kalibratie
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-blue-400 mt-1 mr-2 flex-shrink-0" />
                    <span>
                      <span className="font-semibold">Teamlid 3:</span> Verantwoordelijk voor motoraansturing en
                      energievoorziening
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-blue-400 mt-1 mr-2 flex-shrink-0" />
                    <span>
                      <span className="font-semibold">Teamlid 4:</span> Verantwoordelijk voor mechanisch ontwerp en
                      constructie
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-blue-300 mb-3">Projectplanning</h3>
                <div className="bg-white/5 p-4 rounded-lg">
                  <h4 className="text-lg font-medium text-blue-200 flex items-center mb-3">
                    <Clock className="w-5 h-5 mr-2 text-blue-400" /> Tijdlijn
                  </h4>
                  <ul className="space-y-2 text-white">
                    <li className="flex items-start">
                      <ChevronRight className="w-4 h-4 text-blue-400 mt-1 mr-2 flex-shrink-0" />
                      <span>
                        <span className="font-semibold">Week 1-2:</span> Projectdefinitie, onderzoek en
                        componentenselectie
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-4 h-4 text-blue-400 mt-1 mr-2 flex-shrink-0" />
                      <span>
                        <span className="font-semibold">Week 3-4:</span> Ontwerp van elektrische schema's en mechanische
                        structuur
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-4 h-4 text-blue-400 mt-1 mr-2 flex-shrink-0" />
                      <span>
                        <span className="font-semibold">Week 5-6:</span> Bouw van prototype en initiële programmering
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-4 h-4 text-blue-400 mt-1 mr-2 flex-shrink-0" />
                      <span>
                        <span className="font-semibold">Week 7-8:</span> Testen, debuggen en optimalisatie
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-4 h-4 text-blue-400 mt-1 mr-2 flex-shrink-0" />
                      <span>
                        <span className="font-semibold">Week 9-10:</span> Eindtests, documentatie en presentatie
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-blue-300 mb-3">Projectmethodologie</h3>
                <p className="text-white mb-4">
                  We hebben een agile aanpak gebruikt met wekelijkse sprints en stand-up meetings om de voortgang te
                  bespreken en problemen op te lossen. Deze methodologie stelde ons in staat om flexibel te blijven en
                  snel aanpassingen te maken wanneer we tegen uitdagingen aanliepen.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Hardware Components */}
        <Card className="bg-white/10 border-0 backdrop-blur-sm overflow-hidden rounded-xl relative mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-transparent"></div>
          <CardHeader className="pb-2 border-b border-white/10">
            <CardTitle className="text-2xl font-semibold flex items-center text-white">
              <Cpu className="w-6 h-6 mr-2 text-green-400" /> Hardware Componenten
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-6">
              <div className="bg-white/5 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-green-300 flex items-center mb-3">
                  <Cpu className="w-5 h-5 mr-2" /> MSP430G2553 Microcontroller
                </h3>
                <p className="text-white mb-3">
                  De MSP430G2553 is een 16-bit ultra-low-power microcontroller van Texas Instruments die we hebben
                  gebruikt als het brein van onze robot. Deze microcontroller biedt een goede balans tussen
                  verwerkingskracht, energieverbruik en beschikbare I/O-poorten.
                </p>
                <ul className="space-y-2 text-white">
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-green-400 mt-1 mr-2 flex-shrink-0" />
                    <span>16-bit RISC architectuur met maximaal 16 MHz kloksnelheid</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-green-400 mt-1 mr-2 flex-shrink-0" />
                    <span>16 KB Flash geheugen en 512 bytes RAM</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-green-400 mt-1 mr-2 flex-shrink-0" />
                    <span>10-bit ADC voor nauwkeurige sensormetingen</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-green-400 mt-1 mr-2 flex-shrink-0" />
                    <span>Meerdere timers voor PWM-generatie voor motoraansturing</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-green-400 mt-1 mr-2 flex-shrink-0" />
                    <span>Laag energieverbruik, ideaal voor batterijgevoede toepassingen</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-green-300 flex items-center mb-3">
                  <Eye className="w-5 h-5 mr-2" /> Sensoren
                </h3>
                <p className="text-white mb-3">
                  Voor obstakeldetectie en omgevingswaarneming hebben we de volgende sensoren gebruikt:
                </p>
                <ul className="space-y-2 text-white">
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-green-400 mt-1 mr-2 flex-shrink-0" />
                    <span>
                      <span className="font-semibold">HC-SR04 Ultrasone Sensoren:</span> Twee sensoren voor
                      afstandsmeting aan de voorzijde en één aan de zijkant, met een bereik van 2 cm tot 400 cm
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-green-400 mt-1 mr-2 flex-shrink-0" />
                    <span>
                      <span className="font-semibold">TCRT5000 IR Reflectiesensoren:</span> Drie sensoren aan de
                      onderkant voor lijnvolging en randdetectie
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-green-400 mt-1 mr-2 flex-shrink-0" />
                    <span>
                      <span className="font-semibold">MPU6050 Gyroscoop/Accelerometer:</span> Voor oriëntatiebepaling en
                      stabiliteitscontrole
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-green-300 flex items-center mb-3">
                  <RotateCw className="w-5 h-5 mr-2" /> Aandrijving en Beweging
                </h3>
                <p className="text-white mb-3">
                  Voor de beweging en besturing van de robot hebben we de volgende componenten gebruikt:
                </p>
                <ul className="space-y-2 text-white">
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-green-400 mt-1 mr-2 flex-shrink-0" />
                    <span>
                      <span className="font-semibold">2x DC Motoren:</span> 6V motoren met reductietandwielen voor
                      aandrijving van de wielen
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-green-400 mt-1 mr-2 flex-shrink-0" />
                    <span>
                      <span className="font-semibold">L293D H-Bridge Motor Driver:</span> Voor bidirectionele aansturing
                      van de DC motoren
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-green-400 mt-1 mr-2 flex-shrink-0" />
                    <span>
                      <span className="font-semibold">Wielen:</span> Rubberen wielen met goede grip voor nauwkeurige
                      beweging
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-green-400 mt-1 mr-2 flex-shrink-0" />
                    <span>
                      <span className="font-semibold">Zwenkwiel:</span> Een vrij draaiend zwenkwiel aan de achterkant
                      voor stabiliteit en soepele beweging
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-green-300 flex items-center mb-3">
                  <Zap className="w-5 h-5 mr-2" /> Voeding en Elektronica
                </h3>
                <p className="text-white mb-3">
                  Voor de energievoorziening en elektrische componenten hebben we het volgende gebruikt:
                </p>
                <ul className="space-y-2 text-white">
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-green-400 mt-1 mr-2 flex-shrink-0" />
                    <span>
                      <span className="font-semibold">7.4V 2200mAh LiPo Batterij:</span> Voor langdurige werking zonder
                      frequente oplaadmomenten
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-green-400 mt-1 mr-2 flex-shrink-0" />
                    <span>
                      <span className="font-semibold">LM7805 Spanningsregelaar:</span> Voor stabiele 5V voeding voor de
                      elektronica
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-green-400 mt-1 mr-2 flex-shrink-0" />
                    <span>
                      <span className="font-semibold">Aangepaste PCB:</span> Zelf ontworpen printplaat voor alle
                      verbindingen en componenten
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-green-400 mt-1 mr-2 flex-shrink-0" />
                    <span>
                      <span className="font-semibold">Aan/uit schakelaar en LED-indicators:</span> Voor gebruiksgemak en
                      statusweergave
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-green-300 flex items-center mb-3">
                  <Workflow className="w-5 h-5 mr-2" /> Chassis en Constructie
                </h3>
                <p className="text-white mb-3">
                  Voor het fysieke ontwerp van de robot hebben we de volgende materialen en technieken gebruikt:
                </p>
                <ul className="space-y-2 text-white">
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-green-400 mt-1 mr-2 flex-shrink-0" />
                    <span>
                      <span className="font-semibold">Acrylplaten:</span> Lichtgewicht en duurzaam materiaal voor de
                      basisstructuur
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-green-400 mt-1 mr-2 flex-shrink-0" />
                    <span>
                      <span className="font-semibold">3D-geprinte componenten:</span> Aangepaste houders voor sensoren
                      en andere specifieke onderdelen
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-green-400 mt-1 mr-2 flex-shrink-0" />
                    <span>
                      <span className="font-semibold">Modulair ontwerp:</span> Eenvoudig te demonteren en aan te passen
                      voor toekomstige verbeteringen
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Software Implementation */}
        <Card className="bg-white/10 border-0 backdrop-blur-sm overflow-hidden rounded-xl relative mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent"></div>
          <CardHeader className="pb-2 border-b border-white/10">
            <CardTitle className="text-2xl font-semibold flex items-center text-white">
              <Code className="w-6 h-6 mr-2 text-purple-400" /> Software Implementatie
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-6">
              <p className="text-white">
                De software voor onze robot is geschreven in C en ontwikkeld met behulp van Code Composer Studio, de
                ontwikkelomgeving van Texas Instruments voor MSP430 microcontrollers. We hebben een modulaire aanpak
                gebruikt om de code overzichtelijk en onderhoudbaar te houden.
              </p>

              <div className="bg-white/5 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-300 flex items-center mb-3">
                  <Layers className="w-5 h-5 mr-2" /> Softwarearchitectuur
                </h3>
                <p className="text-white mb-3">
                  Onze code is opgebouwd uit verschillende modules, elk met een specifieke functionaliteit:
                </p>
                <ul className="space-y-2 text-white">
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-purple-400 mt-1 mr-2 flex-shrink-0" />
                    <span>
                      <span className="font-semibold">main.c:</span> Hoofdprogramma met initialisatie en hoofdlus
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-purple-400 mt-1 mr-2 flex-shrink-0" />
                    <span>
                      <span className="font-semibold">sensors.c:</span> Functies voor het uitlezen en verwerken van
                      sensorgegevens
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-purple-400 mt-1 mr-2 flex-shrink-0" />
                    <span>
                      <span className="font-semibold">motors.c:</span> Functies voor motoraansturing en
                      bewegingscontrole
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-purple-400 mt-1 mr-2 flex-shrink-0" />
                    <span>
                      <span className="font-semibold">navigation.c:</span> Algoritmes voor obstakelontwijking en
                      routeplanning
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-purple-400 mt-1 mr-2 flex-shrink-0" />
                    <span>
                      <span className="font-semibold">utils.c:</span> Hulpfuncties voor timers, interrupts en andere
                      algemene functionaliteiten
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-300 flex items-center mb-3">
                  <Gauge className="w-5 h-5 mr-2" /> Belangrijke Algoritmes
                </h3>
                <ul className="space-y-2 text-white">
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-purple-400 mt-1 mr-2 flex-shrink-0" />
                    <span>
                      <span className="font-semibold">Obstakeldetectie:</span> Algoritme dat continu de afstandssensoren
                      monitort en obstakels detecteert binnen een vooraf ingestelde drempelwaarde
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-purple-400 mt-1 mr-2 flex-shrink-0" />
                    <span>
                      <span className="font-semibold">Obstakelontwijking:</span> Beslissingsalgoritme dat bepaalt hoe de
                      robot moet reageren op gedetecteerde obstakels (stoppen, draaien, omweg zoeken)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-purple-400 mt-1 mr-2 flex-shrink-0" />
                    <span>
                      <span className="font-semibold">Motorbesturing:</span> PWM-gebaseerde aansturing voor nauwkeurige
                      snelheidsregeling van de motoren
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-purple-400 mt-1 mr-2 flex-shrink-0" />
                    <span>
                      <span className="font-semibold">Sensorfiltering:</span> Algoritmes voor het filteren van
                      sensorgegevens om ruis te verminderen en nauwkeurigheid te verbeteren
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-300 flex items-center mb-3">
                  <Code className="w-5 h-5 mr-2" /> Code Voorbeeld: Ultrasone Sensor Uitlezen
                </h3>
                <div className="bg-slate-900 p-4 rounded-md overflow-x-auto">
                  <pre className="text-white text-sm">
                    <code>{`// Functie om afstand te meten met HC-SR04 ultrasone sensor
uint16_t measureDistance(uint8_t sensor_id) {
    uint16_t pulse_time;
    uint16_t distance;
    
    // Selecteer de juiste trigger en echo pins op basis van sensor_id
    GPIO_PIN trigger_pin, echo_pin;
    if (sensor_id == FRONT_SENSOR) {
        trigger_pin = FRONT_TRIGGER_PIN;
        echo_pin = FRONT_ECHO_PIN;
    } else if (sensor_id == RIGHT_SENSOR) {
        trigger_pin = RIGHT_TRIGGER_PIN;
        echo_pin = RIGHT_ECHO_PIN;
    } else {
        return 0; // Ongeldige sensor_id
    }
    
    // Stuur 10us trigger puls
    GPIO_setOutputLow(trigger_pin);
    __delay_cycles(2);
    GPIO_setOutputHigh(trigger_pin);
    __delay_cycles(10);
    GPIO_setOutputLow(trigger_pin);
    
    // Wacht op echo puls
    while(GPIO_getInputPinValue(echo_pin) == 0);
    
    // Start timer
    TIMER_A0_start();
    
    // Wacht tot echo puls eindigt
    while(GPIO_getInputPinValue(echo_pin) == 1);
    
    // Stop timer en lees waarde
    pulse_time = TIMER_A0_stop();
    
    // Bereken afstand in cm (gebaseerd op geluidssnelheid)
    distance = pulse_time / 58;
    
    return distance;
}`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Challenges and Solutions */}
        <Card className="bg-white/10 border-0 backdrop-blur-sm overflow-hidden rounded-xl relative mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-transparent"></div>
          <CardHeader className="pb-2 border-b border-white/10">
            <CardTitle className="text-2xl font-semibold flex items-center text-white">
              <Wrench className="w-6 h-6 mr-2 text-amber-400" /> Uitdagingen en Oplossingen
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-6">
              <div className="bg-white/5 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-amber-300 mb-3">Nauwkeurigheid van Sensoren</h3>
                <p className="text-white">
                  Een van de grootste uitdagingen was de betrouwbaarheid van de ultrasone sensoren, die soms
                  inconsistente metingen gaven door reflecties of hoekige oppervlakken. We hebben dit opgelost door
                  meerdere metingen te doen en een gemiddelde te nemen, en door een algoritme te implementeren dat
                  uitschieters filtert. Daarnaast hebben we de sensoren onder een kleine hoek geplaatst om reflecties te
                  minimaliseren.
                </p>
              </div>

              <div className="bg-white/5 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-amber-300 mb-3">Energieverbruik</h3>
                <p className="text-white">
                  De MSP430 is een low-power microcontroller, maar de motoren en sensoren verbruikten aanzienlijk meer
                  energie dan verwacht, wat leidde tot een kortere batterijduur. We hebben dit aangepakt door
                  energiebesparende technieken te implementeren, zoals het periodiek uitschakelen van sensoren wanneer
                  ze niet nodig zijn en het optimaliseren van de motoraansturing om onnodig energieverbruik te
                  voorkomen.
                </p>
              </div>

              <div className="bg-white/5 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-amber-300 mb-3">Mechanische Stabiliteit</h3>
                <p className="text-white">
                  Tijdens de eerste tests merkten we dat de robot niet stabiel genoeg was, wat leidde tot onnauwkeurige
                  bewegingen. We hebben het ontwerp aangepast door het zwaartepunt te verlagen en de wielbasis te
                  verbreden. Daarnaast hebben we de bevestiging van de motoren verstevigd om trillingen te verminderen.
                </p>
              </div>

              <div className="bg-white/5 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-amber-300 mb-3">Softwarecomplexiteit</h3>
                <p className="text-white">
                  De beperkte geheugenruimte van de MSP430G2553 (16KB Flash, 512B RAM) was een uitdaging bij het
                  implementeren van complexe algoritmes. We hebben de code geoptimaliseerd door efficiënte
                  datastructuren te gebruiken en door sommige berekeningen te vereenvoudigen zonder de functionaliteit
                  te compromitteren.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results and Conclusion */}
        <Card className="bg-white/10 border-0 backdrop-blur-sm overflow-hidden rounded-xl relative">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-transparent"></div>
          <CardHeader className="pb-2 border-b border-white/10">
            <CardTitle className="text-2xl font-semibold flex items-center text-white">
              <Lightbulb className="w-6 h-6 mr-2 text-teal-400" /> Resultaten en Conclusie
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-teal-300 mb-3">Behaalde Resultaten</h3>
                <p className="text-white mb-4">
                  Onze robot was in staat om succesvol door een parcours te navigeren en obstakels te vermijden met een
                  nauwkeurigheid van ongeveer 90%. De batterijduur was ongeveer 2 uur bij continu gebruik, wat voldoende
                  was voor de demonstratie en tests. De robot kon obstakels detecteren op een afstand van maximaal 2
                  meter en kon beslissingen nemen over de te volgen route op basis van deze informatie.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-teal-300 mb-3">Leerpunten</h3>
                <ul className="space-y-2 text-white">
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-teal-400 mt-1 mr-2 flex-shrink-0" />
                    <span>
                      Het belang van grondig testen en iteratief ontwerpen bij het ontwikkelen van roboticasystemen
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-teal-400 mt-1 mr-2 flex-shrink-0" />
                    <span>
                      De uitdagingen van het werken met beperkte hardware-resources en hoe deze efficiënt te benutten
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-teal-400 mt-1 mr-2 flex-shrink-0" />
                    <span>
                      Het belang van goede teamcommunicatie en taakverdeling bij complexe technische projecten
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-teal-400 mt-1 mr-2 flex-shrink-0" />
                    <span>
                      Praktische ervaring met microcontroller-programmering, sensortechnologie en motoraansturing
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-teal-300 mb-3">Toekomstige Verbeteringen</h3>
                <ul className="space-y-2 text-white">
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-teal-400 mt-1 mr-2 flex-shrink-0" />
                    <span>
                      Implementatie van machine learning-algoritmes voor betere obstakelherkenning en routeplanning
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-teal-400 mt-1 mr-2 flex-shrink-0" />
                    <span>Toevoegen van een camera voor visuele navigatie en objectherkenning</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-teal-400 mt-1 mr-2 flex-shrink-0" />
                    <span>
                      Verbeteren van de energiebeheer voor langere batterijduur en efficiënter energieverbruik
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-teal-400 mt-1 mr-2 flex-shrink-0" />
                    <span>
                      Toevoegen van draadloze communicatie voor real-time monitoring en besturing via een mobiele app
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-teal-300 mb-3">Conclusie</h3>
                <p className="text-white">
                  Project PEE20 was een uitdagend maar zeer leerzaam project dat ons in staat stelde om theoretische
                  kennis in de praktijk toe te passen. We hebben niet alleen technische vaardigheden ontwikkeld op het
                  gebied van elektrotechniek en programmeren, maar ook belangrijke soft skills zoals teamwork,
                  probleemoplossing en projectmanagement. De ervaring en kennis die we hebben opgedaan tijdens dit
                  project zullen waardevol zijn voor toekomstige projecten en onze professionele carrières.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
