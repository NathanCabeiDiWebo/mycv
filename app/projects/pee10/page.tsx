"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, CircuitBoard, Cpu, Wrench, ChevronRight, Gauge, Lightbulb, FileText, Workflow } from "lucide-react"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function PEE10Page() {
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
        <div className="absolute h-[300px] w-[300px] rounded-full bg-blue-500/20 blur-3xl -top-20 -right-20"></div>
        <div className="absolute h-[250px] w-[250px] rounded-full bg-purple-500/20 blur-3xl bottom-10 -left-20"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <Button
          variant="ghost"
          className="mb-6 text-white hover:text-blue-300 hover:bg-white/5"
          onClick={() => router.push("/")}
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Terug naar CV
        </Button>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2 flex items-center">
            <CircuitBoard className="w-8 h-8 mr-3 text-blue-400" />
            Project PEE10: Audio Versterker
          </h1>
          <p className="text-lg text-white/80">
            Een samenvatting van het ontwerpen/bouwen van een audioversterker voor project PEE10
          </p>
        </div>

        {/* Project Overview */}
        <Card className="bg-white/10 border-0 backdrop-blur-sm overflow-hidden rounded-xl relative mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent pointer-events-none"></div>
          <CardHeader className="pb-2 border-b border-white/10">
            <CardTitle className="text-2xl font-semibold flex items-center text-white">
              <FileText className="w-6 h-6 mr-2 text-blue-400" /> Projectoverzicht
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="rounded-lg overflow-hidden mb-6 bg-gradient-to-r from-slate-700 to-slate-800 p-1">
                <div className="h-48 bg-slate-800 rounded flex items-center justify-center relative overflow-hidden">
                  <Image
                    src="/images/pee10-schematic.png"
                    alt="PEE10 Audio Versterker Circuit Schematic"
                    fill
                    className="object-contain"
                    crossOrigin="anonymous"
                  />
                </div>
              </div>

              <p className="text-white">
                Project PEE10 omvatte het ontwerpen en bouwen van een hoogwaardige analoge audio versterker. Het doel
                was om een versterker te creëren die een schoon, onvervormd geluid produceert met minimale ruis en
                voldoende vermogen om een set luidsprekers aan te sturen. Dit project combineerde kennis van analoge
                elektronica, signaalverwerking en praktische vaardigheden in het bouwen van elektronische circuits.
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                <Badge variant="outline" className="bg-blue-500/10 text-blue-300 border-blue-500/30">
                  Analoge Elektronica
                </Badge>
                <Badge variant="outline" className="bg-blue-500/10 text-blue-300 border-blue-500/30">
                  Audio Versterking
                </Badge>
                <Badge variant="outline" className="bg-blue-500/10 text-blue-300 border-blue-500/30">
                  Opamps
                </Badge>
                <Badge variant="outline" className="bg-blue-500/10 text-blue-300 border-blue-500/30">
                  PCB Ontwerp
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Circuit Design */}
        <Card className="bg-white/10 border-0 backdrop-blur-sm overflow-hidden rounded-xl relative mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent pointer-events-none"></div>
          <CardHeader className="pb-2 border-b border-white/10">
            <CardTitle className="text-2xl font-semibold flex items-center text-white">
              <CircuitBoard className="w-6 h-6 mr-2 text-purple-400" /> Circuit Ontwerp
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-6">
              <div className="bg-white/5 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-300 flex items-center mb-3">
                  <Cpu className="w-5 h-5 mr-2" /> Componenten
                </h3>
                <p className="text-white mb-3">De belangrijkste componenten in het ontwerp zijn:</p>
                <ul className="space-y-2 text-white">
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-purple-400 mt-1 mr-2 flex-shrink-0" />
                    <span className="font-semibold">Opamps</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-purple-400 mt-1 mr-2 flex-shrink-0" />
                    <span className="font-semibold">Weerstanden</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-purple-400 mt-1 mr-2 flex-shrink-0" />
                    <span className="font-semibold">Condensatoren</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-purple-400 mt-1 mr-2 flex-shrink-0" />
                    <span className="font-semibold">Spanningsregulatoren</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Implementation */}
        <Card className="bg-white/10 border-0 backdrop-blur-sm overflow-hidden rounded-xl relative mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-transparent pointer-events-none"></div>
          <CardHeader className="pb-2 border-b border-white/10">
            <CardTitle className="text-2xl font-semibold flex items-center text-white">
              <Workflow className="w-6 h-6 mr-2 text-green-400" /> Implementatie
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-6">
              <div className="bg-white/5 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-green-300 flex items-center mb-3">
                  <CircuitBoard className="w-5 h-5 mr-2" /> PCB Ontwerp
                </h3>
                <p className="text-white mb-3">
                  Het PCB-ontwerp is gemaakt met KiCad, met speciale aandacht voor de volgende aspecten:
                </p>
                <ul className="space-y-2 text-white">
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-green-400 mt-1 mr-2 flex-shrink-0" />
                    <span>
                      <span className="font-semibold">Grondvlak:</span> Sterke, ononderbroken grondvlakken om ruis te
                      minimaliseren
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-green-400 mt-1 mr-2 flex-shrink-0" />
                    <span>
                      <span className="font-semibold">Signaalrouting:</span> Korte, directe paden voor audiosignalen om
                      interferentie te voorkomen
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-green-400 mt-1 mr-2 flex-shrink-0" />
                    <span>
                      <span className="font-semibold">Stervormige aarding:</span> Om grondlussen te voorkomen
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-green-300 flex items-center mb-3">
                  <Wrench className="w-5 h-5 mr-2" /> Bouwproces
                </h3>
                <p className="text-white mb-3">Het bouwproces omvatte de volgende stappen:</p>
                <ul className="space-y-2 text-white">
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-green-400 mt-1 mr-2 flex-shrink-0" />
                    <span>
                      <span className="font-semibold">PCB Fabricage:</span> PCBs ontwerpen en zelf maken.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-green-400 mt-1 mr-2 flex-shrink-0" />
                    <span>
                      <span className="font-semibold">Integratie:</span> Product worden gesplits in verschillende deelsystemen en met elkaar geïntegreerd.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-green-400 mt-1 mr-2 flex-shrink-0" />
                    <span>
                      <span className="font-semibold">Behuizing:</span> 3D-geprinte behuizing gemaakt van PLA plastic.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-green-400 mt-1 mr-2 flex-shrink-0" />
                    <span>
                      <span className="font-semibold">Bekabeling/verbindingen:</span> Verbindingen worden gedaan met kabels.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-green-300 flex items-center mb-3">
                  <Gauge className="w-5 h-5 mr-2" /> Kalibratie en Testen
                </h3>
                <p className="text-white mb-3">
                  Na de bouw werd de versterker gekalibreerd en getest met de volgende procedures:
                </p>
                <ul className="space-y-2 text-white">
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-green-400 mt-1 mr-2 flex-shrink-0" />
                    <span>
                      <span className="font-semibold">Bias Instelling:</span> Afstelling van de rustspanning voor
                      optimale Class AB werking
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-green-400 mt-1 mr-2 flex-shrink-0" />
                    <span>
                      <span className="font-semibold">Frequentierespons:</span> Meting met functiegenerator en
                      oscilloscoop over het volledige audiospectrum
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-green-400 mt-1 mr-2 flex-shrink-0" />
                    <span>
                      <span className="font-semibold">THD Meting:</span> Verificatie van harmonische vervorming bij
                      verschillende vermogensniveaus
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-green-400 mt-1 mr-2 flex-shrink-0" />
                    <span>
                      <span className="font-semibold">Luistertests:</span> Subjectieve evaluatie met verschillende
                      muziekgenres en luidsprekers
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results and Conclusion */}
        <Card className="bg-white/10 border-0 backdrop-blur-sm overflow-hidden rounded-xl relative">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-transparent pointer-events-none"></div>
          <CardHeader className="pb-2 border-b border-white/10">
            <CardTitle className="text-2xl font-semibold flex items-center text-white">
              <Lightbulb className="w-6 h-6 mr-2 text-amber-400" /> Resultaten en Conclusie
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-amber-300 mb-3">Prestaties</h3>
                <p className="text-white mb-4">
                  De voltooide versterker presteerde goed maar heeft niet alle requirements behaald
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-amber-300 mb-3">Leerpunten</h3>
                <p className="text-white mb-4">
                  Dit project heeft waardevolle inzichten opgeleverd in verschillende aspecten van analoge elektronica en de werkvorm/houding tijdens een groepsproject:
                </p>
                <ul className="space-y-2 text-white">
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-amber-400 mt-1 mr-2 flex-shrink-0" />
                    <span>
                      Het belang van zorgvuldige componentenselectie voor audiokwaliteit, vooral bij kritieke
                      componenten zoals koppelcondensatoren
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-amber-400 mt-1 mr-2 flex-shrink-0" />
                    <span>Praktische ervaring met de vermogen-levering van de eindverserker</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-amber-400 mt-1 mr-2 flex-shrink-0" />
                    <span>Het belang van goede PCB-layout voor minimale ruis en interferentie</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-amber-400 mt-1 mr-2 flex-shrink-0" />
                    <span>Technieken voor het meten en analyseren van audioversterker prestaties</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-amber-300 mb-3">Conclusie</h3>
                <p className="text-white">
                  Project PEE10 was een succesvol en leerzaam project dat mijn begrip van analoge elektronica en
                  audiocircuits aanzienlijk heeft verdiept. De versterker levert uitstekende geluidskwaliteit en
                  betrouwbare prestaties. De praktische ervaring opgedaan tijdens dit project heeft een sterke basis
                  gelegd voor toekomstige projecten op het gebied van analoge elektronica en audiotechniek. De
                  combinatie van theoretische kennis en praktische implementatie heeft geleid tot een dieper inzicht in
                  de principes van versterkerontwerp en de factoren die audiokwaliteit beïnvloeden.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
