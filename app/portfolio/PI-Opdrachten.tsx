"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowLeft,
  FileText,
  Calendar,
  Building,
  CheckCircle,
  MapPin,
  Users,
  Lightbulb,
  Star,
  Briefcase,
  Globe,
  Award,
  CheckSquare,
} from "lucide-react"
import { useRouter } from "next/navigation"

export default function PortfolioPage() {
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
        <div className="absolute h-[300px] w-[300px] rounded-full bg-amber-500/20 blur-3xl -top-20 -right-20"></div>
        <div className="absolute h-[250px] w-[250px] rounded-full bg-blue-500/20 blur-3xl bottom-10 -left-20"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <Button
          variant="ghost"
          className="mb-6 text-white hover:text-amber-300 hover:bg-white/5"
          onClick={() => router.push("/")}
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Terug naar Portfolio-pagina
        </Button>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2 flex items-center">
            <FileText className="w-8 h-8 mr-3 text-amber-400" />
            Portfolio PI Les Jaar 1
          </h1>
          <p className="text-lg text-white/80">
            Overzicht van mijn portfolio-items voor het eerste jaar van de PI-opdracht
          </p>
        </div>

        {/* Onderbouwing Keuzevakken Section */}
        <Card className="bg-white/10 border-0 backdrop-blur-sm overflow-hidden rounded-xl relative mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-transparent"></div>
          <CardHeader className="pb-2 border-b border-white/10">
            <CardTitle className="text-2xl font-semibold flex items-center text-white">
              <FileText className="w-6 h-6 mr-2 text-amber-400" /> Onderbouwing Keuzevakken
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-amber-300 mb-3">Overzicht Keuzevakken</h3>
                <p className="text-white mb-4">
                  Tijdens het eerste jaar van de opleiding Elektrotechniek moet je tenmisnte 2 keuzevakken kiezen. Ik heb de volgende keuzevakken gekozen.
                </p>

                <div className="space-y-4">
                  <div className="bg-white/5 p-4 rounded-lg">
                    <h4 className="text-lg font-medium text-amber-200 flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2 text-green-400" /> "Iedereen kan programmeren"
                    </h4>
                    <p className="mt-2 text-white">
                      Dit keuzevak biedt een introductie aan Python. Ik heb dit vak gekozen want in het eerste jaar leer je hoe je moet programmeren in Python en C. Dit vak zou handig zijn als een introductie voor EMS10.
                    </p>
                  </div>

                  <div className="bg-white/5 p-4 rounded-lg">
                    <h4 className="text-lg font-medium text-amber-200 flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2 text-green-400" /> "Spelen met LEGO"
                    </h4>
                    <p className="mt-2 text-white">
                      In dit keuzevak moet je een robot gaat bouwen met een lego EV3 kit. Ik heb dit vak gekozen want je leert hoe je de gedrag van een zelfrijdende robot en en het zou meer inzicht en hulp geven voor project PEE20.
                    </p>
                  </div>

                  <div className="bg-white/5 p-4 rounded-lg">
                    <h4 className="text-lg font-medium text-amber-200 flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2 text-green-400" /> Klein Vaarbewijs
                    </h4>
                    <p className="mt-2 text-white">
                      Dit keuzevak gaat over het besturen van kleine schepen/boten en hoe je op zee moet omgaan. Ik heb dit vak gekozen want ik ben opgegroeid naast boten en op het strand (toen ik nog op aruba woonde).
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-amber-300 mb-3">Motivatie</h3>
                <p className="text-white mb-4">
                  Mijn keuze voor deze vakken is gebaseerd op mijn interesse en de vakken die ik tijden de opleiding ELEKTROTECHNIEK ga krijgen. Het dient als een introductie voor sommige eerste jaars vakken en/of als een leuke ervaring die mischien in de toekomst handig zou zijn.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Bezoek Jaarbeurs WOTS 2024 Section */}
        <Card className="bg-white/10 border-0 backdrop-blur-sm overflow-hidden rounded-xl relative mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent"></div>
          <CardHeader className="pb-2 border-b border-white/10">
            <CardTitle className="text-2xl font-semibold flex items-center text-white">
              <Calendar className="w-6 h-6 mr-2 text-blue-400" /> Bezoek Jaarbeurs WOTS 2024
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row gap-4 items-start md:items-center mb-4">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 text-blue-400 mr-2" />
                  <span>27-30 September 2024</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-red-400 mr-2" />
                  <span>Jaarbeurs Utrecht</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-green-400 mr-2" />
                  <span>Bezoek met medestudenten</span>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-blue-300 mb-3">Over de Beurs</h3>
                <p className="text-white mb-4">
                  De World of Technology & Science (WOTS) is een toonaangevende vakbeurs voor industriële
                  automatisering, laboratoriumtechnologie, motion & drives en elektronica. De beurs biedt een platform
                  voor innovaties en netwerkmogelijkheden in de technologiesector.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-blue-300 mb-3">Verslag bezoek Jaarbeurs</h3>
                <p className="text-white mb-4">
                  Een opdracht voor de PI-Porfolio is dat je de jaarbeurs World of Technology & Science WOTS, World of Electronics in Utrecht moet bezoeken. Een verlsag van ongeveer een halve A4 moet worden geschreven over het bezoek van de jaarbeurs. 
                  Op 25 september 2024 bezocht ik de World of Technology & Science beurs, World of Electronics, in de Jaarbeurs  in Utrecht. Deze beurs brengt technologische innovaties, bedrijven en onderwijsinstellingen samen op het gebied van elektronica, automatisering en embedded systems. Dit bezoek dient om je inzicht te geven over wat voor soort werk je gaat doen als HBO-elektrotechnicus.
                  WOTS was heel interessant en leuk want er waren diverse bedrijven die specialiseren in verschillende richtingen uit het elektrotechniek. Tijdens het bezoek gaven de bedrijven informatieve presentaties/demonstraties over wat ze doen en hoe hun onderzoek/producten werken. Het was een leerzame ervaring die ik heel leuk vond.
                  De exposanten presenteerden producten die te maken hebben met Artificial Intelligence (AI), embedden systems/software of het verbeteren van bestaande technologien. Deze producten  werden niet alleen met detail uitgelegd maar ook gedemonstreerd. Bij sommige demonstraties kreeg je de kans om de producten te testen en je kon zelf zien hoe het werkt. 
                  Een van de exposanten presenteerde een robot-dog van Boston Dynamics. De robot maakte rondje rond de workshop. Hij maakte bochten en begon te dansen. Er waren ook obstakels die de robot kon zien en ontwijken. Dit werd allemaal in real time uitgevoerd(de bestuurden had een laptop die de robot kon besturen).
                  Tijdens dit bezoek is te zien hoe de theorie en praktijk lessen in het bedrijfs wereld worden uitgevoerd. Enkele voorbeelden zijn projectmatig werken, het ontwerpen/bouwen van schakelingen, programmeren, etc.
                  Uit bezoek heb ik veel geleerd. Ik zag hoe verschillende systemen met elkaar kunnen communiceren en hoe data wordt verwerkt tot het uitvoeren van diverse taken.. Het leukst waren de demonstaties, vooral de robots. Het is echt interessant hoe een idee wordt gerealiseerd tot een werkend product die een verandering maakt in het echte wereld.
                  Om dit verslag te samenvatten was dit bezoek echt interessant. Verschillende bedrijven presenteerden innovatieve technologieën zoals IoT-oplossingen en slimme sensoren. Het bezoek gaf mij nieuwe inzichten en sloot goed aan bij mijn studie, waardoor het een leerzame en inspirerende ervaring was.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Bedrijfspresentatie Section */}
        <Card className="bg-white/10 border-0 backdrop-blur-sm overflow-hidden rounded-xl relative mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent"></div>
          <CardHeader className="pb-2 border-b border-white/10">
            <CardTitle className="text-2xl font-semibold flex items-center text-white">
              <Building className="w-6 h-6 mr-2 text-purple-400" /> Bedrijfspresentatie
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row gap-4 items-start md:items-center mb-4">
                <div className="flex items-center">
                  <Building className="w-5 h-5 text-purple-400 mr-2" />
                  <span>TechnoVision B.V.</span>
                </div>
                <div className="flex items-center">
                  <Briefcase className="w-5 h-5 text-blue-400 mr-2" />
                  <span>Elektronica & Automatisering</span>
                </div>
                <div className="flex items-center">
                  <Globe className="w-5 h-5 text-green-400 mr-2" />
                  <span>Rotterdam, Nederland</span>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-purple-300 mb-3">Bedrijfsprofiel</h3>
                <p className="text-white mb-4">
                  TechnoVision B.V. is een innovatief technologiebedrijf gespecialiseerd in het ontwikkelen van
                  geavanceerde elektronische systemen voor industriële automatisering en smart agriculture. Het bedrijf
                  is opgericht in 2010 en heeft sindsdien een sterke reputatie opgebouwd in het leveren van hoogwaardige
                  oplossingen voor complexe technische uitdagingen.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-purple-300 mb-3">Kernactiviteiten</h3>
                <div className="space-y-4">
                  <div className="bg-white/5 p-4 rounded-lg">
                    <h4 className="text-lg font-medium text-purple-200 flex items-center">
                      <CheckSquare className="w-5 h-5 mr-2 text-blue-400" /> Smart Farming Solutions
                    </h4>
                    <p className="mt-2 text-white">
                      Ontwikkeling van geïntegreerde systemen voor precisielandbouw, waaronder sensortechnologie voor
                      bodemmonitoring, automatische irrigatiesystemen en klimaatbeheersing voor kassen.
                    </p>
                  </div>

                  <div className="bg-white/5 p-4 rounded-lg">
                    <h4 className="text-lg font-medium text-purple-200 flex items-center">
                      <CheckSquare className="w-5 h-5 mr-2 text-blue-400" /> Industrial IoT
                    </h4>
                    <p className="mt-2 text-white">
                      Implementatie van IoT-oplossingen voor industriële toepassingen, met focus op real-time
                      monitoring, predictief onderhoud en procesoptimalisatie.
                    </p>
                  </div>

                  <div className="bg-white/5 p-4 rounded-lg">
                    <h4 className="text-lg font-medium text-purple-200 flex items-center">
                      <CheckSquare className="w-5 h-5 mr-2 text-blue-400" /> Custom Electronics Design
                    </h4>
                    <p className="mt-2 text-white">
                      Ontwerp en productie van op maat gemaakte elektronische systemen, PCB's en embedded software voor
                      specifieke klantbehoeften.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-purple-300 mb-3">Innovatieve Projecten</h3>
                <div className="space-y-4">
                  <div className="bg-white/5 p-4 rounded-lg">
                    <h4 className="text-lg font-medium text-purple-200 flex items-center">
                      <Award className="w-5 h-5 mr-2 text-yellow-400" /> AgroSense Platform
                    </h4>
                    <p className="mt-2 text-white">
                      Een geïntegreerd platform voor precisielandbouw dat boeren helpt bij het optimaliseren van
                      gewasopbrengsten door middel van geavanceerde sensortechnologie en data-analyse.
                    </p>
                  </div>

                  <div className="bg-white/5 p-4 rounded-lg">
                    <h4 className="text-lg font-medium text-purple-200 flex items-center">
                      <Award className="w-5 h-5 mr-2 text-yellow-400" /> EnergyOptimizer
                    </h4>
                    <p className="mt-2 text-white">
                      Een intelligent energiebeheersysteem dat het energieverbruik in industriële omgevingen
                      optimaliseert, resulterend in aanzienlijke kostenbesparingen en verminderde CO2-uitstoot.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-purple-300 mb-3">Reflectie op Bedrijfsbezoek</h3>
                <p className="text-white mb-4">
                  Het bezoek aan TechnoVision B.V. was bijzonder inspirerend en informatief. De mogelijkheid om direct
                  met ingenieurs en projectmanagers te spreken gaf me waardevolle inzichten in hoe theoretische kennis
                  uit mijn studie wordt toegepast in praktische, commerciële oplossingen.
                </p>
                <p className="text-white">
                  Vooral de focus van het bedrijf op duurzame technologieën en smart farming sluit perfect aan bij mijn
                  eigen interesses en onderzoeksgebied. De presentatie heeft mijn enthousiasme voor het werken in deze
                  sector verder versterkt en me concrete ideeën gegeven voor mogelijke stageprojecten in de toekomst.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-purple-300 mb-3">Leerpunten voor mijn Studie</h3>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <CheckSquare className="w-5 h-5 text-green-400 mr-2 mt-0.5" />
                    <p className="text-white">
                      Het belang van multidisciplinaire kennis: naast elektrotechniek is ook kennis van software,
                      data-analyse en domeinspecifieke kennis (zoals landbouw) essentieel.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <CheckSquare className="w-5 h-5 text-green-400 mr-2 mt-0.5" />
                    <p className="text-white">
                      De waarde van praktijkervaring: het werken aan concrete projecten tijdens mijn studie zal me beter
                      voorbereiden op de arbeidsmarkt.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <CheckSquare className="w-5 h-5 text-green-400 mr-2 mt-0.5" />
                    <p className="text-white">
                      Focus op duurzaamheid: bedrijven zoals TechnoVision laten zien dat er een groeiende markt is voor
                      technologische oplossingen die bijdragen aan duurzaamheid.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
