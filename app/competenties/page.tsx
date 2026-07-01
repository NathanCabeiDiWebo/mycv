"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowLeft,
  BookOpen,
  CircuitBoard,
  Hammer,
  Settings,
  Zap,
  HeartHandshake,
  Search,
  GraduationCap,
  ChevronRight,
} from "lucide-react"
import { useRouter } from "next/navigation"

export default function CompetentiesPage() {
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
        <div className="absolute h-[300px] w-[300px] rounded-full bg-purple-500/20 blur-3xl -top-20 -right-20"></div>
        <div className="absolute h-[250px] w-[250px] rounded-full bg-blue-500/20 blur-3xl bottom-10 -left-20"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <Button
          variant="ghost"
          className="mb-6 text-white hover:text-purple-300 hover:bg-white/5"
          onClick={() => router.push("/")}
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Terug naar CV
        </Button>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2 flex items-center">
            <GraduationCap className="w-8 h-8 mr-3 text-purple-400" />
            De competenties van een student Elektrotechnicus
          </h1>
          <p className="text-lg text-white/80">
            Een overzicht van de belangrijkste competenties die een elektrotechnicus moet beheersen
          </p>
        </div>

        {/* General Introduction */}
        <Card className="bg-white/10 border-0 backdrop-blur-sm overflow-hidden rounded-xl relative mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent pointer-events-none"></div>
          <CardHeader className="pb-2 border-b border-white/10">
            <CardTitle className="text-2xl font-semibold flex items-center text-white">
              <GraduationCap className="w-6 h-6 mr-2 text-purple-400" /> Inleiding
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-white mb-4">
              De opleiding Elektrotechniek aan de Hogeschool Rotterdam is gericht op het ontwikkelen van acht essentiële
              competenties die een afgestudeerde elektrotechnicus nodig heeft in het werkveld. Deze competenties vormen
              samen het profiel van een bekwame elektrotechnicus die in staat is om complexe technische vraagstukken op
              te lossen en innovatieve oplossingen te ontwikkelen.
            </p>
            <p className="text-white mb-4">
              Gedurende de opleiding worden deze competenties systematisch ontwikkeld door middel van projecten,
              praktijkopdrachten, stages en theoretische vakken. Elke competentie vertegenwoordigt een specifiek aspect
              van het werk van een elektrotechnicus en samen vormen ze een compleet beeld van de kennis, vaardigheden en
              attitudes die nodig zijn om succesvol te zijn in het vakgebied.
            </p>
            <p className="text-white">
              Hieronder volgt een gedetailleerde beschrijving van elke competentie en hoe deze bijdraagt aan het
              professionele profiel van een elektrotechnicus.
            </p>
          </CardContent>
        </Card>

        {/* Competenties in Detail */}
        <div className="space-y-6">
          {/* Analyseren */}
          <Card className="bg-white/10 border-0 backdrop-blur-sm overflow-hidden rounded-xl relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent pointer-events-none"></div>
            <CardHeader className="pb-2 border-b border-white/10">
              <CardTitle className="text-2xl font-semibold flex items-center text-white">
                <BookOpen className="w-6 h-6 mr-2 text-blue-400" /> Analyseren
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-white mb-4">
                De competentie Analyseren omvat het vermogen om elektrotechnische vraagstukken systematisch te
                onderzoeken en te ontleden. Een elektrotechnicus moet in staat zijn om complexe problemen te begrijpen,
                relevante informatie te verzamelen en deze te verwerken tot bruikbare inzichten.
              </p>
              <div className="bg-white/5 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-300 mb-3">Kernvaardigheden</h3>
                <ul className="space-y-2 text-white">
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-blue-400 mt-1 mr-2 flex-shrink-0" />
                    <span>
                      Het identificeren en formuleren van elektrotechnische vraagstukken op basis van wensen en eisen
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-blue-400 mt-1 mr-2 flex-shrink-0" />
                    <span>Het verzamelen en interpreteren van relevante informatie uit verschillende bronnen</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-blue-400 mt-1 mr-2 flex-shrink-0" />
                    <span>
                      Het toepassen van wiskundige en natuurkundige principes om elektrotechnische problemen te
                      analyseren
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-blue-400 mt-1 mr-2 flex-shrink-0" />
                    <span>
                      Het vertalen van praktische vraagstukken naar technische specificaties en randvoorwaarden
                    </span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Ontwerpen */}
          <Card className="bg-white/10 border-0 backdrop-blur-sm overflow-hidden rounded-xl relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-transparent pointer-events-none"></div>
            <CardHeader className="pb-2 border-b border-white/10">
              <CardTitle className="text-2xl font-semibold flex items-center text-white">
                <CircuitBoard className="w-6 h-6 mr-2 text-green-400" /> Ontwerpen
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-white mb-4">
                De competentie Ontwerpen betreft het vermogen om elektrotechnische systemen, componenten of processen te
                ontwerpen die voldoen aan specifieke eisen en wensen. Een elektrotechnicus moet creatieve en innovatieve
                oplossingen kunnen bedenken voor technische uitdagingen.
              </p>
              <div className="bg-white/5 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-green-300 mb-3">Kernvaardigheden</h3>
                <ul className="space-y-2 text-white">
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-green-400 mt-1 mr-2 flex-shrink-0" />
                    <span>Het ontwikkelen van conceptuele ontwerpen voor elektrotechnische systemen</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-green-400 mt-1 mr-2 flex-shrink-0" />
                    <span>Het maken van gedetailleerde technische ontwerpen, inclusief schema's en specificaties</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-green-400 mt-1 mr-2 flex-shrink-0" />
                    <span>Het toepassen van ontwerpprincipes en -methodieken om tot optimale oplossingen te komen</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-green-400 mt-1 mr-2 flex-shrink-0" />
                    <span>
                      Het rekening houden met technische, economische, maatschappelijke en duurzaamheidsaspecten in het
                      ontwerpproces
                    </span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Realiseren */}
          <Card className="bg-white/10 border-0 backdrop-blur-sm overflow-hidden rounded-xl relative">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-transparent pointer-events-none"></div>
            <CardHeader className="pb-2 border-b border-white/10">
              <CardTitle className="text-2xl font-semibold flex items-center text-white">
                <Hammer className="w-6 h-6 mr-2 text-amber-400" /> Realiseren
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-white mb-4">
                De competentie Realiseren omvat het vermogen om elektrotechnische ontwerpen om te zetten in concrete
                producten, systemen of diensten. Een elektrotechnicus moet in staat zijn om ontwerpen te implementeren,
                te testen en in bedrijf te stellen.
              </p>
              <div className="bg-white/5 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-amber-300 mb-3">Kernvaardigheden</h3>
                <ul className="space-y-2 text-white">
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-amber-400 mt-1 mr-2 flex-shrink-0" />
                    <span>Het selecteren en toepassen van geschikte materialen, componenten en technieken</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-amber-400 mt-1 mr-2 flex-shrink-0" />
                    <span>Het bouwen, assembleren en implementeren van elektrotechnische systemen</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-amber-400 mt-1 mr-2 flex-shrink-0" />
                    <span>Het testen, valideren en documenteren van gerealiseerde systemen</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-amber-400 mt-1 mr-2 flex-shrink-0" />
                    <span>Het in bedrijf stellen en overdragen van gerealiseerde systemen aan gebruikers</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Beheren */}
          <Card className="bg-white/10 border-0 backdrop-blur-sm overflow-hidden rounded-xl relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent pointer-events-none"></div>
            <CardHeader className="pb-2 border-b border-white/10">
              <CardTitle className="text-2xl font-semibold flex items-center text-white">
                <Settings className="w-6 h-6 mr-2 text-blue-400" /> Beheren
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-white mb-4">
                De competentie Beheren betreft het vermogen om elektrotechnische systemen gedurende hun levenscyclus te
                beheren en te onderhouden. Een elektrotechnicus moet in staat zijn om de prestaties van systemen te
                monitoren, problemen op te lossen en verbeteringen door te voeren.
              </p>
              <p className="text-white mb-4">
                Een belangrijk onderdeel van beheren is het bijhouden van heldere documentatie. Door onderhoudslogboeken,
                configuraties en storingsrapporten nauwkeurig te documenteren, blijft een systeem beheersbaar en kunnen
                toekomstige problemen sneller worden opgelost.
              </p>
              <div className="bg-white/5 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-300 mb-3">Kernvaardigheden</h3>
                <ul className="space-y-2 text-white">
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-blue-400 mt-1 mr-2 flex-shrink-0" />
                    <span>Het opstellen en uitvoeren van onderhoudsplannen voor elektrotechnische systemen</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-blue-400 mt-1 mr-2 flex-shrink-0" />
                    <span>Het monitoren en evalueren van de prestaties van systemen</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-blue-400 mt-1 mr-2 flex-shrink-0" />
                    <span>Het diagnosticeren en oplossen van storingen en problemen</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-blue-400 mt-1 mr-2 flex-shrink-0" />
                    <span>Het implementeren van verbeteringen en optimalisaties</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Managen */}
          <Card className="bg-white/10 border-0 backdrop-blur-sm overflow-hidden rounded-xl relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent pointer-events-none"></div>
            <CardHeader className="pb-2 border-b border-white/10">
              <CardTitle className="text-2xl font-semibold flex items-center text-white">
                <Zap className="w-6 h-6 mr-2 text-purple-400" /> Managen
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-white mb-4">
                De competentie Managen omvat het vermogen om elektrotechnische projecten en processen te plannen, te
                organiseren en te leiden. Een elektrotechnicus moet in staat zijn om projecten binnen de gestelde tijd,
                budget en kwaliteitseisen te realiseren.
              </p>
              <div className="bg-white/5 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-300 mb-3">Kernvaardigheden</h3>
                <ul className="space-y-2 text-white">
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-purple-400 mt-1 mr-2 flex-shrink-0" />
                    <span>Het plannen, organiseren en coördineren van elektrotechnische projecten</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-purple-400 mt-1 mr-2 flex-shrink-0" />
                    <span>Het managen van resources, tijd en budget</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-purple-400 mt-1 mr-2 flex-shrink-0" />
                    <span>Het leiden en motiveren van projectteams</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-purple-400 mt-1 mr-2 flex-shrink-0" />
                    <span>Het bewaken van kwaliteit, voortgang en risico's</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Adviseren */}
          <Card className="bg-white/10 border-0 backdrop-blur-sm overflow-hidden rounded-xl relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-transparent pointer-events-none"></div>
            <CardHeader className="pb-2 border-b border-white/10">
              <CardTitle className="text-2xl font-semibold flex items-center text-white">
                <HeartHandshake className="w-6 h-6 mr-2 text-green-400" /> Adviseren
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-white mb-4">
                De competentie Adviseren betreft het vermogen om stakeholders te adviseren over elektrotechnische
                vraagstukken, oplossingen en innovaties. Een elektrotechnicus moet in staat zijn om technische kennis te
                vertalen naar begrijpelijke adviezen voor verschillende doelgroepen.
              </p>
              <div className="bg-white/5 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-green-300 mb-3">Kernvaardigheden</h3>
                <ul className="space-y-2 text-white">
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-green-400 mt-1 mr-2 flex-shrink-0" />
                    <span>Het analyseren van de behoeften en wensen van stakeholders</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-green-400 mt-1 mr-2 flex-shrink-0" />
                    <span>Het formuleren van onderbouwde adviezen over elektrotechnische oplossingen</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-green-400 mt-1 mr-2 flex-shrink-0" />
                    <span>Het communiceren van technische informatie op een begrijpelijke manier</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-green-400 mt-1 mr-2 flex-shrink-0" />
                    <span>Het overtuigend presenteren van adviezen en het beantwoorden van vragen</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Onderzoeken */}
          <Card className="bg-white/10 border-0 backdrop-blur-sm overflow-hidden rounded-xl relative">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-transparent pointer-events-none"></div>
            <CardHeader className="pb-2 border-b border-white/10">
              <CardTitle className="text-2xl font-semibold flex items-center text-white">
                <Search className="w-6 h-6 mr-2 text-amber-400" /> Onderzoeken
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-white mb-4">
                De competentie Onderzoeken omvat het vermogen om systematisch onderzoek te doen naar elektrotechnische
                vraagstukken en innovaties. Een elektrotechnicus moet in staat zijn om onderzoeksvragen te formuleren,
                onderzoeksmethoden toe te passen en resultaten te interpreteren.
              </p>
              <div className="bg-white/5 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-amber-300 mb-3">Kernvaardigheden</h3>
                <ul className="space-y-2 text-white">
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-amber-400 mt-1 mr-2 flex-shrink-0" />
                    <span>Het formuleren van relevante onderzoeksvragen en hypothesen</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-amber-400 mt-1 mr-2 flex-shrink-0" />
                    <span>Het selecteren en toepassen van geschikte onderzoeksmethoden</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-amber-400 mt-1 mr-2 flex-shrink-0" />
                    <span>Het verzamelen, analyseren en interpreteren van onderzoeksgegevens</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-amber-400 mt-1 mr-2 flex-shrink-0" />
                    <span>Het trekken van onderbouwde conclusies en het doen van aanbevelingen</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Professionaliseren */}
          <Card className="bg-white/10 border-0 backdrop-blur-sm overflow-hidden rounded-xl relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent pointer-events-none"></div>
            <CardHeader className="pb-2 border-b border-white/10">
              <CardTitle className="text-2xl font-semibold flex items-center text-white">
                <GraduationCap className="w-6 h-6 mr-2 text-blue-400" /> Professionaliseren
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-white mb-4">
                De competentie Professionaliseren betreft het vermogen om continu te werken aan de eigen professionele
                ontwikkeling. Een elektrotechnicus moet in staat zijn om te reflecteren op het eigen functioneren,
                nieuwe kennis en vaardigheden te verwerven en ethisch verantwoord te handelen.
              </p>
              <div className="bg-white/5 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-300 mb-3">Kernvaardigheden</h3>
                <ul className="space-y-2 text-white">
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-blue-400 mt-1 mr-2 flex-shrink-0" />
                    <span>Het reflecteren op het eigen functioneren en het identificeren van ontwikkelpunten</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-blue-400 mt-1 mr-2 flex-shrink-0" />
                    <span>
                      Het bijhouden van ontwikkelingen in het vakgebied en het verwerven van nieuwe kennis en
                      vaardigheden
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-blue-400 mt-1 mr-2 flex-shrink-0" />
                    <span>Het ethisch verantwoord handelen en rekening houden met maatschappelijke aspecten</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-blue-400 mt-1 mr-2 flex-shrink-0" />
                    <span>
                      Het effectief samenwerken in multidisciplinaire teams en het communiceren met verschillende
                      doelgroepen
                    </span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
