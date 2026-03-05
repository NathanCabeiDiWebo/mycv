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
import Image from "next/image"

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
            Een gedetailleerd overzicht van het ontwerp- en bouwproces van een autonome robot met verschillende
            functies.
          </p>
        </div>

        {/* Project Overview */}
        <Card className="bg-white/10 border-0 backdrop-blur-sm overflow-hidden rounded-xl relative mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-transparent pointer-events-none"></div>
          <CardHeader className="pb-2 border-b border-white/10">
            <CardTitle className="text-2xl font-semibold flex items-center text-white">
              <FileText className="w-6 h-6 mr-2 text-teal-400" /> Projectoverzicht
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="rounded-lg overflow-hidden mb-6 bg-gradient-to-r from-slate-700 to-slate-800 p-1">
                <div className="h-48 bg-slate-800 rounded flex items-center justify-center relative overflow-hidden">
                  <Image
                    src="/images/pee20-robot.jpeg"
                    alt="PEE20 Autonome Robot - Voltooide robot met blauwe LED verlichting"
                    fill
                    className="object-contain"
                    crossOrigin="anonymous"
                  />
                </div>
              </div>

              <p className="text-white">
                Project PEE20 was een groepsopdracht waarbij we een autonome robot moesten ontwerpen en bouwen die
                obstakels kan detecteren en vermijden. De robot moest in staat zijn om zelfstandig door een parcours te
                navigeren en verschillende taken uit te voeren. Dit project combineerde verschillende aspecten van
                elektrotechniek, waaronder microcontroller-programmering, sensortechnologie, motoraansturing.
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
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent pointer-events-none"></div>
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
                      <span className="font-semibold">Teamlid 1 (Teamleider):</span> Verantwoordelijk voor
                      objectdetectie en knoppen verwerking
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-blue-400 mt-1 mr-2 flex-shrink-0" />
                    <span>
                      <span className="font-semibold">Teamlid 2:</span> Verantwoordelijk voor navigatie en voeding
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-blue-400 mt-1 mr-2 flex-shrink-0" />
                    <span>
                      <span className="font-semibold">Teamlid 3:</span> Verantwoordelijk voor motoraansturing, display
                      en LEDs
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-blue-400 mt-1 mr-2 flex-shrink-0" />
                    <span>
                      <span className="font-semibold">Teamlid 4:</span> Verantwoordelijk voor verwerking van NFC data
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
                        <span className="font-semibold">Week 1-4:</span> Projectdefinitie, onderzoek en
                        componentenselectie
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-4 h-4 text-blue-400 mt-1 mr-2 flex-shrink-0" />
                      <span>
                        <span className="font-semibold">Week 5-8:</span> Ontwerp van elektrische schema's en mechanische
                        structuur
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-4 h-4 text-blue-400 mt-1 mr-2 flex-shrink-0" />
                      <span>
                        <span className="font-semibold">Week 9-12:</span> Bouw van prototype en initiële programmering
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-4 h-4 text-blue-400 mt-1 mr-2 flex-shrink-0" />
                      <span>
                        <span className="font-semibold">Week 13-19:</span> Testen, debuggen en optimalisatie
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-4 h-4 text-blue-400 mt-1 mr-2 flex-shrink-0" />
                      <span>
                        <span className="font-semibold">Week 20:</span> Eindtests, documentatie en presentatie
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-blue-300 mb-3">Projectmethodologie</h3>
                <p className="text-white mb-4">
                  We hebben een agile aanpak gebruikt met wekelijkse sprints en vergaderingen om de voortgang te
                  bespreken en problemen op te lossen. Deze methodologie stelde ons in staat om flexibel te blijven en
                  snel aanpassingen te maken wanneer we tegen uitdagingen aanliepen.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Hardware Components */}
        <Card className="bg-white/10 border-0 backdrop-blur-sm overflow-hidden rounded-xl relative mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-transparent pointer-events-none"></div>
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
                      <span className="font-semibold">HR-201 IR:</span> Vijf sensoren aan de onderkant voor lijnvolging
                      en randdetectie
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-green-400 mt-1 mr-2 flex-shrink-0" />
                    <span>
                      <span className="font-semibold">LM393 IR-Sensor module:</span> Voor meting van afstan/snelheid
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
                      <span className="font-semibold">L298H H-Bridge Motor Driver:</span> Voor bidirectionele aansturing
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
                      <span className="font-semibold">9V Batterij:</span> Voor langdurige werking zonder frequente
                      oplaadmomenten
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-green-400 mt-1 mr-2 flex-shrink-0" />
                    <span>
                      <span className="font-semibold">LM2596 Spanningsregelaar:</span> Voor stabiele 3.3V/5V voeding
                      voor de elektronica
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
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent pointer-events-none"></div>
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
                  Onze code is opgebouwd uit verschillende modules, elk met een specifieke functionaliteit. De software
                  wordt op bitbucket geupload
                </p>
              </div>

              <div className="bg-white/5 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-300 flex items-center mb-3">
                  <Gauge className="w-5 h-5 mr-2" /> Belangrijke functies
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
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
        {/* Results and Conclusion */}
        <Card className="bg-white/10 border-0 backdrop-blur-sm overflow-hidden rounded-xl relative">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-transparent pointer-events-none"></div>
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
                  Onze robot was in staat om succesvol door een parcours te navigeren en obstakels te vermijden. Heelaas
                  was de integratie van het scherm met de robot niet gelukt dus aan het einde werd het scherm niet
                  gebruikt. Tijdens het project was een groepslid uit de groep gegooid, dus een deelsysteem was
                  uitgevallen. was voor de demonstratie en tests. Voor de rest deed het wat het moest doen.
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
