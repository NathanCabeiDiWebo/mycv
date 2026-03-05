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
} from "lucide-react"
import { useRouter } from "next/navigation"

export default function RobotCarPage() {
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
            Autonomous Robot Car Project
          </h1>
          <p className="text-lg text-white/80">Een gedetailleerd overzicht van mijn autonome robot car project</p>
        </div>

        {/* Project Overview */}
        <Card className="bg-white/10 border-0 backdrop-blur-sm overflow-hidden rounded-xl relative mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-transparent pointer-events-none"></div>
          <CardHeader className="pb-2 border-b border-white/10">
            <CardTitle className="text-2xl font-semibold flex items-center text-white">
              <Lightbulb className="w-6 h-6 mr-2 text-teal-400" /> Project Overzicht
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
                Dit project omvat het ontwerpen en bouwen van een autonome robot car die obstakels kan detecteren en
                vermijden, en een lijn kan volgen op een vooraf gedefinieerd parcours. De robot maakt gebruik van
                infrarood sensoren voor obstakeldetectie en lijnvolging, en wordt aangestuurd door een MSP430G2553
                microcontroller.
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                <Badge variant="outline" className="bg-teal-500/10 text-teal-300 border-teal-500/30">
                  Robotica
                </Badge>
                <Badge variant="outline" className="bg-teal-500/10 text-teal-300 border-teal-500/30">
                  Embedded Systems
                </Badge>
                <Badge variant="outline" className="bg-teal-500/10 text-teal-300 border-teal-500/30">
                  Sensortechnologie
                </Badge>
                <Badge variant="outline" className="bg-teal-500/10 text-teal-300 border-teal-500/30">
                  C Programmeren
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Hardware Components */}
        <Card className="bg-white/10 border-0 backdrop-blur-sm overflow-hidden rounded-xl relative mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent pointer-events-none"></div>
          <CardHeader className="pb-2 border-b border-white/10">
            <CardTitle className="text-2xl font-semibold flex items-center text-white">
              <Cpu className="w-6 h-6 mr-2 text-blue-400" /> Hardware Componenten
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-6">
              <div className="bg-white/5 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-300 flex items-center mb-3">
                  <Cpu className="w-5 h-5 mr-2" /> MSP430G2553 Microcontroller
                </h3>
                <p className="text-white mb-3">
                  De MSP430G2553 is een 16-bit ultra-low-power microcontroller van Texas Instruments, gebruikt als het
                  brein van de robot car. Deze microcontroller is gekozen vanwege zijn lage energieverbruik en voldoende
                  verwerkingskracht voor de benodigde taken.
                </p>
                <ul className="space-y-2 text-white">
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-blue-400 mt-1 mr-2 flex-shrink-0" />
                    <span>16-bit RISC architectuur, tot 16 MHz kloksnelheid</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-blue-400 mt-1 mr-2 flex-shrink-0" />
                    <span>16 KB Flash geheugen, 512 bytes RAM</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-blue-400 mt-1 mr-2 flex-shrink-0" />
                    <span>10-bit ADC, UART, SPI, I²C communicatie-interfaces</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-300 flex items-center mb-3">
                  <Eye className="w-5 h-5 mr-2" /> IR Sensoren
                </h3>
                <p className="text-white mb-3">
                  De robot maakt gebruik van meerdere infrarood (IR) sensoren voor verschillende doeleinden:
                </p>
                <ul className="space-y-2 text-white">
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-blue-400 mt-1 mr-2 flex-shrink-0" />
                    <span>
                      3x TCRT5000 IR reflectie sensoren voor lijnvolging, geplaatst aan de onderkant van de robot
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-blue-400 mt-1 mr-2 flex-shrink-0" />
                    <span>
                      2x HC-SR04 ultrasone sensoren voor obstakeldetectie, geplaatst aan de voorkant en zijkant
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-blue-400 mt-1 mr-2 flex-shrink-0" />
                    <span>Detectiebereik van 2-30 cm voor nauwkeurige navigatie</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-300 flex items-center mb-3">
                  <RotateCw className="w-5 h-5 mr-2" /> Motoren en Aandrijving
                </h3>
                <p className="text-white mb-3">
                  Voor de beweging van de robot car worden de volgende componenten gebruikt:
                </p>
                <ul className="space-y-2 text-white">
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-blue-400 mt-1 mr-2 flex-shrink-0" />
                    <span>2x DC motoren met reductietandwielen voor de aandrijving van de wielen</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-blue-400 mt-1 mr-2 flex-shrink-0" />
                    <span>L293D H-bridge motor driver voor de aansturing van de DC motoren</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-blue-400 mt-1 mr-2 flex-shrink-0" />
                    <span>PWM (Pulse Width Modulation) voor snelheidsregeling</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-300 flex items-center mb-3">
                  <Zap className="w-5 h-5 mr-2" /> Voeding
                </h3>
                <p className="text-white mb-3">De robot wordt gevoed door een oplaadbare LiPo batterij:</p>
                <ul className="space-y-2 text-white">
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-blue-400 mt-1 mr-2 flex-shrink-0" />
                    <span>7.4V 1500mAh LiPo batterij</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-blue-400 mt-1 mr-2 flex-shrink-0" />
                    <span>LM7805 spanningsregelaar voor stabiele 5V voeding voor de elektronica</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-blue-400 mt-1 mr-2 flex-shrink-0" />
                    <span>Aan/uit schakelaar en LED-indicator voor batterijstatus</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Software Implementation */}
        <Card className="bg-white/10 border-0 backdrop-blur-sm overflow-hidden rounded-xl relative mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-transparent pointer-events-none"></div>
          <CardHeader className="pb-2 border-b border-white/10">
            <CardTitle className="text-2xl font-semibold flex items-center text-white">
              <Code className="w-6 h-6 mr-2 text-green-400" /> Software Implementatie
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-6">
              <p className="text-white">
                De software voor de robot car is geschreven in C en geïmplementeerd met behulp van de Code Composer
                Studio IDE, specifiek voor de MSP430 microcontroller. De code is modulair opgebouwd met verschillende
                functies voor de verschillende taken.
              </p>

              <div className="bg-white/5 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-green-300 flex items-center mb-3">
                  <Layers className="w-5 h-5 mr-2" /> Belangrijkste Softwaremodules
                </h3>
                <ul className="space-y-2 text-white">
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-green-400 mt-1 mr-2 flex-shrink-0" />
                    <span>
                      <span className="font-semibold">Sensor Module:</span> Leest de IR-sensoren uit en verwerkt de
                      gegevens voor obstakeldetectie en lijnvolging
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-green-400 mt-1 mr-2 flex-shrink-0" />
                    <span>
                      <span className="font-semibold">Motor Control Module:</span> Bestuurt de DC-motoren met PWM voor
                      nauwkeurige snelheidsregeling
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-green-400 mt-1 mr-2 flex-shrink-0" />
                    <span>
                      <span className="font-semibold">Navigation Module:</span> Implementeert algoritmes voor
                      obstakelontwijking en lijnvolging
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-green-400 mt-1 mr-2 flex-shrink-0" />
                    <span>
                      <span className="font-semibold">Main Control Loop:</span> Coördineert de verschillende modules en
                      implementeert de beslissingslogica
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-green-300 flex items-center mb-3">
                  <Gauge className="w-5 h-5 mr-2" /> Algoritmes
                </h3>
                <ul className="space-y-2 text-white">
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-green-400 mt-1 mr-2 flex-shrink-0" />
                    <span>
                      <span className="font-semibold">PID Controller:</span> Voor nauwkeurige lijnvolging, met
                      aanpasbare parameters voor verschillende oppervlakken
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-green-400 mt-1 mr-2 flex-shrink-0" />
                    <span>
                      <span className="font-semibold">Obstacle Avoidance:</span> Implementeert een algoritme dat
                      obstakels detecteert en omzeilt door alternatieve routes te berekenen
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-green-400 mt-1 mr-2 flex-shrink-0" />
                    <span>
                      <span className="font-semibold">Path Planning:</span> Eenvoudig algoritme voor het plannen van een
                      pad naar een doel, rekening houdend met gedetecteerde obstakels
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Challenges and Solutions */}
        <Card className="bg-white/10 border-0 backdrop-blur-sm overflow-hidden rounded-xl relative mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent pointer-events-none"></div>
          <CardHeader className="pb-2 border-b border-white/10">
            <CardTitle className="text-2xl font-semibold flex items-center text-white">
              <Wrench className="w-6 h-6 mr-2 text-purple-400" /> Uitdagingen en Oplossingen
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-6">
              <div className="bg-white/5 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-300 mb-3">Sensor Kalibratie</h3>
                <p className="text-white">
                  Een van de grootste uitdagingen was het nauwkeurig kalibreren van de IR-sensoren voor verschillende
                  lichtomstandigheden en oppervlakken. Dit is opgelost door een automatische kalibratieroutine te
                  implementeren die bij het opstarten wordt uitgevoerd, waarbij de sensoren worden gekalibreerd op basis
                  van de huidige omgevingsomstandigheden.
                </p>
              </div>

              <div className="bg-white/5 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-300 mb-3">Motorsnelheid en Nauwkeurigheid</h3>
                <p className="text-white">
                  Het bereiken van een consistente motorsnelheid en nauwkeurige bewegingen was een uitdaging vanwege
                  variaties in de batterijspanning en mechanische weerstand. Dit is opgelost door een PID-regelaar te
                  implementeren die de motorsnelheid continu aanpast op basis van feedback van de sensoren, wat
                  resulteert in soepelere en nauwkeurigere bewegingen.
                </p>
              </div>

              <div className="bg-white/5 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-300 mb-3">Energieverbruik</h3>
                <p className="text-white">
                  Het optimaliseren van het energieverbruik om de batterijduur te verlengen was een belangrijke
                  overweging. Dit is aangepakt door de low-power modi van de MSP430 microcontroller te benutten en de
                  sensoren alleen te activeren wanneer dat nodig is, in plaats van continu te scannen.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results and Future Improvements */}
        <Card className="bg-white/10 border-0 backdrop-blur-sm overflow-hidden rounded-xl relative">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-transparent pointer-events-none"></div>
          <CardHeader className="pb-2 border-b border-white/10">
            <CardTitle className="text-2xl font-semibold flex items-center text-white">
              <Lightbulb className="w-6 h-6 mr-2 text-amber-400" /> Resultaten en Toekomstige Verbeteringen
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-amber-300 mb-3">Behaalde Resultaten</h3>
                <p className="text-white mb-4">
                  De robot car is succesvol in het volgen van lijnen op verschillende oppervlakken en kan obstakels
                  detecteren en vermijden met een nauwkeurigheid van ongeveer 90%. De batterijduur is ongeveer 2 uur bij
                  continu gebruik, wat voldoende is voor demonstratie- en testdoeleinden.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-amber-300 mb-3">Toekomstige Verbeteringen</h3>
                <ul className="space-y-2 text-white">
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-amber-400 mt-1 mr-2 flex-shrink-0" />
                    <span>Toevoegen van Bluetooth-connectiviteit voor draadloze besturing en monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-amber-400 mt-1 mr-2 flex-shrink-0" />
                    <span>Implementeren van een camera en beeldherkenning voor geavanceerdere navigatie</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-amber-400 mt-1 mr-2 flex-shrink-0" />
                    <span>Ontwikkelen van een mobiele app voor real-time monitoring en besturing</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-amber-400 mt-1 mr-2 flex-shrink-0" />
                    <span>Verbeteren van het mechanische ontwerp voor betere stabiliteit en duurzaamheid</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
