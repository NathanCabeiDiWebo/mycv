"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CircuitBoard,
  Car,
  Cpu,
  Zap,
  Lightbulb,
  GraduationCap,
  ChevronRight,
  Mail,
  Github,
  MapPin,
  Phone,
  FileText,
  Building,
  Calendar,
  ArrowRight,
  GraduationCapIcon,
} from "lucide-react"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function Component() {
  const [mounted, setMounted] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

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

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 flex flex-col md:flex-row gap-6">
            {/* Profile Picture */}
            <div className="flex-shrink-0">
              <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-xl overflow-hidden border-2 border-teal-400/50 bg-slate-800">
                <Image
                  src="/images/profile-picture.png"
                  alt="Profile Picture"
                  fill
                  className="object-cover"
                  crossOrigin="anonymous"
                />
                {/* Circuit pattern overlay */}
                <div className="absolute inset-0 opacity-20 mix-blend-overlay">
                  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <pattern id="profile-circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M0 10 L20 10 M10 0 L10 20" stroke="currentColor" strokeWidth="0.5" />
                      <circle cx="10" cy="10" r="1" fill="currentColor" />
                    </pattern>
                    <rect x="0" y="0" width="100%" height="100%" fill="url(#profile-circuit)" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Title and Description */}
            <div className="flex-grow">
              <div className="flex items-center mb-4">
                <Cpu className="w-10 h-10 text-teal-400 mr-4" />
                <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
                  Elektrotechniek Student
                </h1>
              </div>
              <div className="flex items-center mb-6">
                <GraduationCap className="w-5 h-5 text-blue-400 mr-2" />
                <p className="text-xl text-blue-300">Hogeschool Rotterdam | Eerste Jaar</p>
              </div>
              <p className="text-lg border-l-4 border-teal-400 pl-4 py-2 bg-white/5 rounded-r-md text-white">
                Ik ben een student elektrotechniek met een brede interesse in industriële elektronica en automatisering.
                In dit portfolio laat ik verschillende schoolprojecten, opdrachten en praktische toepassingen zien die
                mijn groei en ontwikkeling binnen dit vakgebied weerspiegelen. Mijn interesse ligt vooral in het werken
                met industriële systemen en het bedenken van technische oplossingen voor realistische uitdagingen.
              </p>
            </div>
          </div>

          {/* Contact Information Card */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-teal-500/20 rounded-xl"></div>
            <Card className="h-full bg-white/10 border-0 backdrop-blur-sm overflow-hidden rounded-xl">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-semibold flex items-center text-white">
                  <Zap className="w-5 h-5 mr-2 text-yellow-400" /> Contactgegevens
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <a
                    href="mailto:1070608@hr.nl"
                    className="flex items-center text-white hover:text-teal-300 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center mr-3 group-hover:bg-teal-900 transition-colors">
                      <Mail className="w-4 h-4 text-teal-400" />
                    </div>
                    <span>1070608@hr.nl</span>
                  </a>

                  <a
                    href="https://github.com/NathanCabeiDiWebo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-white hover:text-purple-300 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center mr-3 group-hover:bg-purple-900 transition-colors">
                      <Github className="w-4 h-4 text-purple-400" />
                    </div>
                    <span>github.com/NathanCabeiDiWebo</span>
                  </a>

                  <div className="flex items-center text-white">
                    <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center mr-3">
                      <Phone className="w-4 h-4 text-green-400" />
                    </div>
                    <span>+31 6 39045492</span>
                  </div>

                  <div className="flex items-center text-white">
                    <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center mr-3">
                      <MapPin className="w-4 h-4 text-red-400" />
                    </div>
                    <span>Rotterdam, Nederland</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Main Content - Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Education Section - Now spans 2 columns */}
          <Card className="bg-white/10 border-0 backdrop-blur-sm overflow-hidden rounded-xl relative group md:col-span-2">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <CardHeader className="pb-2 border-b border-white/10">
              <CardTitle className="text-2xl font-semibold flex items-center text-white">
                <GraduationCap className="w-6 h-6 mr-2 text-blue-400" /> Opleiding/ervaring
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              {/* Elektrotechniek Section */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-teal-300">Bachelor of Science in Elektrotechniek</h3>
                <p className="text-blue-200 mb-3">Hogeschool Rotterdam | 2023 - Heden</p>
                <ul className="space-y-2 text-white">
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-teal-400 mt-1 mr-2 flex-shrink-0" />
                    <span>Eerste-jaars student met focus op robotica en circuit ontwerp</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-teal-400 mt-1 mr-2 flex-shrink-0" />
                    <span>Relevante vakken: Elektronica, Digitale Systemen, Embedded systems, Energiebeheer</span>
                  </li>
                </ul>
              </div>

              {/* Mechatronica Section */}
              <div>
                <h3 className="text-xl font-semibold text-teal-300">Mechatronica (gestopt)</h3>
                <p className="text-blue-200 mb-3">Hogeschool Rotterdam | 2021 - 2022</p> {/* Placeholder for years */}
                <ul className="space-y-2 text-white">
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-teal-400 mt-1 mr-2 flex-shrink-0" />
                    <span>Relevante vakken: Statica, Sterkteleer, Programmeren, Pneumatiek, CAD Ontwerp</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Circuit Design Project */}
          <Card
            className="bg-white/10 border-0 backdrop-blur-sm overflow-hidden rounded-xl relative group cursor-pointer hover:bg-white/15 transition-colors"
            onClick={() => router.push("/projects/pee10")}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <CardHeader className="pb-2 border-b border-white/10">
              <CardTitle className="text-2xl font-semibold flex items-center text-white">
                <CircuitBoard className="w-6 h-6 mr-2 text-blue-400" /> Project PEE10
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="relative">
                <div className="rounded-lg overflow-hidden mb-3 bg-gradient-to-r from-slate-700 to-slate-800 p-2">
                  <div className="h-48 bg-slate-800 rounded flex items-center justify-center relative overflow-hidden">
                    <Image
                      src="/images/pee10-schematic.png"
                      alt="PEE10 Audio Versterker Circuit Schematic"
                      fill
                      className="object-contain p-2"
                      crossOrigin="anonymous"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-blue-300">Audio Versterker</h3>
                <p className="mt-2 text-white">
                  Ontwerp en bouw van een analoge audio versterker met hoogwaardige componenten voor optimale
                  geluidskwaliteit.
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <Badge variant="outline" className="bg-blue-500/10 text-blue-300 border-blue-500/30">
                    PCB Ontwerp
                  </Badge>
                  <Badge variant="outline" className="bg-blue-500/10 text-blue-300 border-blue-500/30">
                    Analoge Elektronica
                  </Badge>
                </div>
                <div className="flex justify-end mt-2">
                  <div className="text-blue-400 group-hover:text-blue-300 transition-colors flex items-center">
                    <span className="text-sm mr-1">Meer details</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Additional Skills Card */}
          <Card className="bg-white/10 border-0 backdrop-blur-sm overflow-hidden rounded-xl relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <CardHeader className="pb-2 border-b border-white/10">
              <CardTitle className="text-2xl font-semibold flex items-center text-white">
                <Zap className="w-6 h-6 mr-2 text-purple-400" /> Aanvullende Vaardigheden
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center text-white">
                  <ChevronRight className="w-4 h-4 text-purple-400" />
                  <span>Solderen</span>
                </div>
                <div className="flex items-center text-white">
                  <ChevronRight className="w-4 h-4 text-purple-400" />
                  <span>CAD Ontwerp</span>
                </div>
                <div className="flex items-center text-white">
                  <ChevronRight className="w-4 h-4 text-purple-400" />
                  <span>Prototyping</span>
                </div>
                <div className="flex items-center text-white">
                  <ChevronRight className="w-4 h-4 text-purple-400" />
                  <span>Troubleshooting</span>
                </div>
                <div className="flex items-center text-white">
                  <ChevronRight className="w-4 h-4 text-purple-400" />
                  <span>Data Analyse</span>
                </div>
                <div className="flex items-center text-white">
                  <ChevronRight className="w-4 h-4 text-purple-400" />
                  <span>Teamleiderschap</span>
                </div>
                <div className="flex items-center text-white">
                  <ChevronRight className="w-4 h-4 text-purple-400" />
                  <span>Simuleren</span>
                </div>
                <div className="flex items-center text-white">
                  <ChevronRight className="w-4 h-4 text-purple-400" />
                  <span>Ontwerpen</span>
                </div>
                <div className="flex items-center text-white">
                  <ChevronRight className="w-4 h-4 text-purple-400" />
                  <span>Zelfstandig werken</span>
                </div>
                <div className="flex items-center text-white">
                  <ChevronRight className="w-4 h-4 text-purple-400" />
                  <span>Samenwerking</span>
                </div>
                <div className="flex items-center text-white">
                  <ChevronRight className="w-4 h-4 text-purple-400" />
                  <span>Wiskunde kennis</span>
                </div>
                <div className="flex items-center text-white">
                  <ChevronRight className="w-4 h-4 text-purple-400" />
                  <span>Creatief</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Technical Skills Section */}
          <Card className="bg-white/10 border-0 backdrop-blur-sm overflow-hidden rounded-xl relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <CardHeader className="pb-2 border-b border-white/10">
              <CardTitle className="text-2xl font-semibold flex items-center text-white">
                <Lightbulb className="w-6 h-6 mr-2 text-yellow-400" /> Technische Vaardigheden
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-teal-300 mb-2">Programmeren</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-white">
                      <span>C++/C</span>
                      <div className="w-24 h-2 bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-teal-400 to-blue-500 w-[85%]"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-white">
                      <span>Kotlin</span>
                      <div className="w-24 h-2 bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-teal-400 to-blue-500 w-[33%]"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-white">
                      <span>Python</span>
                      <div className="w-24 h-2 bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-teal-400 to-blue-500 w-[70%]"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-teal-300 mb-2">Hardware</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-white">
                      <span>PCB Ontwerp</span>
                      <div className="w-24 h-2 bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-teal-400 to-blue-500 w-[75%]"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-white">
                      <span>Microcontrollers</span>
                      <div className="w-24 h-2 bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-teal-400 to-blue-500 w-[90%]"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-white">
                      <span>3D Printen</span>
                      <div className="w-24 h-2 bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-teal-400 to-blue-500 w-[65%]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Project PEE20 Card */}
          <Card
            className="bg-white/10 border-0 backdrop-blur-sm overflow-hidden rounded-xl relative group cursor-pointer hover:bg-white/15 transition-colors"
            onClick={() => router.push("/projects/pee20")}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <CardHeader className="pb-2 border-b border-white/10">
              <CardTitle className="text-2xl font-semibold flex items-center text-white">
                <Car className="w-6 h-6 mr-2 text-teal-400" /> Project PEE20
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="relative">
                <div className="rounded-lg overflow-hidden mb-3 bg-gradient-to-r from-slate-700 to-slate-800 p-2">
                  <div className="h-48 bg-slate-800 rounded flex items-center justify-center relative overflow-hidden">
                    <Image
                      src="/images/pee20-robot.jpeg"
                      alt="PEE20 Autonome Robot - Voltooide robot met blauwe LED verlichting"
                      fill
                      className="object-contain p-2"
                      crossOrigin="anonymous"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-teal-300">Autonome Robot</h3>
                <p className="mt-2 text-white">
                  Ontwerp en bouw van een autonome robot met MSP430G2553 microcontroller, ultrasone sensoren en
                  geavanceerde obstakelontwijking.
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <Badge variant="outline" className="bg-blue-500/10 text-blue-300 border-blue-500/30">
                    MSP430G2553
                  </Badge>
                  <Badge variant="outline" className="bg-blue-500/10 text-blue-300 border-blue-500/30">
                    Ultrasone Sensoren
                  </Badge>
                </div>
                <div className="flex justify-end mt-2">
                  <div className="text-teal-400 group-hover:text-teal-300 transition-colors flex items-center">
                    <span className="text-sm mr-1">Meer details</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Portfolio PI Les Jaar 1 Card */}
          <Card
            className="bg-white/10 border-0 backdrop-blur-sm overflow-hidden rounded-xl relative group lg:col-span-3 cursor-pointer hover:bg-white/15 transition-colors"
            onClick={() => router.push("/portfolio")}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <CardHeader className="pb-2 border-b border-white/10">
              <CardTitle className="text-2xl font-semibold flex items-center text-white">
                <FileText className="w-6 h-6 mr-2 text-amber-400" /> Portfolio PI Les Jaar 1
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-colors">
                  <h3 className="text-xl font-semibold text-amber-300 flex items-center mb-3">
                    <FileText className="w-5 h-5 mr-2" /> Onderbouwing Keuzevakken
                  </h3>
                  <p className="text-white">
                    Documentatie en motivatie voor de gekozen keuzevakken tijdens het eerste jaar van de opleiding.
                  </p>
                  <div className="mt-3">
                    <Badge variant="outline" className="bg-amber-500/10 text-amber-300 border-amber-500/30">
                      Documentatie
                    </Badge>
                  </div>
                </div>

                <div className="bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-colors">
                  <h3 className="text-xl font-semibold text-amber-300 flex items-center mb-3">
                    <Calendar className="w-5 h-5 mr-2" /> Bezoek Jaarbeurs WOTS 2024
                  </h3>
                  <p className="text-white">
                    Verslag en inzichten van het bezoek aan de World of Technology & Science beurs 2024.
                  </p>
                  <div className="mt-3">
                    <Badge variant="outline" className="bg-amber-500/10 text-amber-300 border-amber-500/30">
                      Evenement
                    </Badge>
                  </div>
                </div>

                <div className="bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-colors">
                  <h3 className="text-xl font-semibold text-amber-300 flex items-center mb-3">
                    <Building className="w-5 h-5 mr-2" /> Bedrijfspresentatie
                  </h3>
                  <p className="text-white">
                    Presentatie over een innovatief technologiebedrijf en hun bijdrage aan de elektronica-industrie.
                  </p>
                  <div className="mt-3">
                    <Badge variant="outline" className="bg-amber-500/10 text-amber-300 border-amber-500/30">
                      Bedrijfspresentatie
                    </Badge>
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-6">
                <div className="flex items-center text-amber-300 group-hover:text-amber-200 transition-colors">
                  <span className="mr-2">Bekijk volledige portfolio</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Competenties Card */}
          <Card
            className="bg-white/10 border-0 backdrop-blur-sm overflow-hidden rounded-xl relative group lg:col-span-3 cursor-pointer hover:bg-white/15 transition-colors"
            onClick={() => router.push("/competenties")}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <CardHeader className="pb-2 border-b border-white/10">
              <CardTitle className="text-2xl font-semibold flex items-center text-white">
                <GraduationCapIcon className="w-6 h-6 mr-2 text-purple-400" /> De competenties van een student
                Elektrotechnicus
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-colors text-center">
                  <h3 className="text-lg font-semibold text-purple-300">Analyseren</h3>
                </div>

                <div className="bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-colors text-center">
                  <h3 className="text-lg font-semibold text-purple-300">Ontwerpen</h3>
                </div>

                <div className="bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-colors text-center">
                  <h3 className="text-lg font-semibold text-purple-300">Realiseren</h3>
                </div>

                <div className="bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-colors text-center">
                  <h3 className="text-lg font-semibold text-purple-300">Beheren</h3>
                </div>

                <div className="bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-colors text-center">
                  <h3 className="text-lg font-semibold text-purple-300">Managen</h3>
                </div>

                <div className="bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-colors text-center">
                  <h3 className="text-lg font-semibold text-purple-300">Adviseren</h3>
                </div>

                <div className="bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-colors text-center">
                  <h3 className="text-lg font-semibold text-purple-300">Onderzoeken</h3>
                </div>

                <div className="bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-colors text-center">
                  <h3 className="text-lg font-semibold text-purple-300">Professionaliseren</h3>
                </div>
              </div>
              <div className="flex justify-center mt-6">
                <div className="flex items-center text-purple-300 group-hover:text-purple-200 transition-colors">
                  <span className="mr-2">Bekijk alle competenties</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
