"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CircuitBoard,
  Car,
  Sprout,
  Cpu,
  Zap,
  Lightbulb,
  Microscope,
  GraduationCap,
  ChevronRight,
  Mail,
  Github,
  Linkedin,
  MapPin,
  Phone,
  FileText,
  Building,
  Calendar,
} from "lucide-react"
import { useEffect, useState } from "react"

export default function Component() {
  const [mounted, setMounted] = useState(false)

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
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden border-2 border-teal-400/50 bg-slate-800">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center">
                  {/* Placeholder for profile picture */}
                  <div className="w-full h-full bg-slate-800 flex items-center justify-center">
                    <Cpu className="w-16 h-16 text-teal-400/30" />
                  </div>
                </div>
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
                  Electrical Engineering Student
                </h1>
              </div>
              <div className="flex items-center mb-6">
                <GraduationCap className="w-5 h-5 text-blue-400 mr-2" />
                <p className="text-xl text-blue-300">Rotterdam University | Second Year</p>
              </div>
              <p className="text-lg border-l-4 border-teal-400 pl-4 py-2 bg-white/5 rounded-r-md text-white">
                Passionate electrical engineering student with hands-on experience in robotics and circuit design.
                Currently researching innovative approaches to improve food production through technology.
              </p>
            </div>
          </div>

          {/* Contact Information Card */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-teal-500/20 rounded-xl"></div>
            <Card className="h-full bg-white/10 border-0 backdrop-blur-sm overflow-hidden rounded-xl">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-semibold flex items-center text-white">
                  <Zap className="w-5 h-5 mr-2 text-yellow-400" /> Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <a
                    href="mailto:your.email@rotterdam.edu"
                    className="flex items-center text-white hover:text-teal-300 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center mr-3 group-hover:bg-teal-900 transition-colors">
                      <Mail className="w-4 h-4 text-teal-400" />
                    </div>
                    <span>your.email@rotterdam.edu</span>
                  </a>

                  <a
                    href="https://linkedin.com/in/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-white hover:text-blue-300 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center mr-3 group-hover:bg-blue-900 transition-colors">
                      <Linkedin className="w-4 h-4 text-blue-400" />
                    </div>
                    <span>linkedin.com/in/yourprofile</span>
                  </a>

                  <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-white hover:text-purple-300 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center mr-3 group-hover:bg-purple-900 transition-colors">
                      <Github className="w-4 h-4 text-purple-400" />
                    </div>
                    <span>github.com/yourusername</span>
                  </a>

                  <div className="flex items-center text-white">
                    <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center mr-3">
                      <Phone className="w-4 h-4 text-green-400" />
                    </div>
                    <span>+31 6 12345678</span>
                  </div>

                  <div className="flex items-center text-white">
                    <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center mr-3">
                      <MapPin className="w-4 h-4 text-red-400" />
                    </div>
                    <span>Rotterdam, Netherlands</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Main Content - Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Education Section */}
          <Card className="bg-white/10 border-0 backdrop-blur-sm overflow-hidden rounded-xl relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <CardHeader className="pb-2 border-b border-white/10">
              <CardTitle className="text-2xl font-semibold flex items-center text-white">
                <GraduationCap className="w-6 h-6 mr-2 text-blue-400" /> Education
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <h3 className="text-xl font-semibold text-teal-300">Bachelor of Science in Electrical Engineering</h3>
              <p className="text-blue-200 mb-3">Rotterdam University | 2022 - Present</p>
              <ul className="space-y-2 text-white">
                <li className="flex items-start">
                  <ChevronRight className="w-4 h-4 text-teal-400 mt-1 mr-2 flex-shrink-0" />
                  <span>Second-year student with focus on robotics and circuit design</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-4 h-4 text-teal-400 mt-1 mr-2 flex-shrink-0" />
                  <span>Relevant coursework: Circuit Analysis, Digital Systems, Microcontrollers, Robotics</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Technical Skills Section */}
          <Card className="bg-white/10 border-0 backdrop-blur-sm overflow-hidden rounded-xl relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <CardHeader className="pb-2 border-b border-white/10">
              <CardTitle className="text-2xl font-semibold flex items-center text-white">
                <Lightbulb className="w-6 h-6 mr-2 text-yellow-400" /> Technical Skills
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-teal-300 mb-2">Programming</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-white">
                      <span>C++</span>
                      <div className="w-24 h-2 bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-teal-400 to-blue-500 w-[85%]"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-white">
                      <span>MATLAB</span>
                      <div className="w-24 h-2 bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-teal-400 to-blue-500 w-[80%]"></div>
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
                      <span>PCB Design</span>
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
                      <span>3D Printing</span>
                      <div className="w-24 h-2 bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-teal-400 to-blue-500 w-[65%]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Research Section */}
          <Card className="bg-white/10 border-0 backdrop-blur-sm overflow-hidden rounded-xl relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <CardHeader className="pb-2 border-b border-white/10">
              <CardTitle className="text-2xl font-semibold flex items-center text-white">
                <Microscope className="w-6 h-6 mr-2 text-green-400" /> Research
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="relative">
                <div className="rounded-lg overflow-hidden mb-3 bg-gradient-to-r from-slate-700 to-slate-800 p-1">
                  <div className="h-32 bg-slate-800 rounded flex items-center justify-center relative overflow-hidden">
                    <Sprout className="w-16 h-16 text-green-400/30" />
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-slate-900"></div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-green-300 flex items-center">
                  <Sprout className="w-5 h-5 mr-2" /> Improving Food Production
                </h3>
                <p className="mt-2 text-white">
                  Researching innovative electrical engineering applications to enhance food production efficiency and
                  sustainability.
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <Badge variant="outline" className="bg-green-500/10 text-green-300 border-green-500/30">
                    Automation
                  </Badge>
                  <Badge variant="outline" className="bg-green-500/10 text-green-300 border-green-500/30">
                    Sustainability
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Robot Car Project */}
          <Card className="bg-white/10 border-0 backdrop-blur-sm overflow-hidden rounded-xl relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <CardHeader className="pb-2 border-b border-white/10">
              <CardTitle className="text-2xl font-semibold flex items-center text-white">
                <Car className="w-6 h-6 mr-2 text-teal-400" /> Robot Car
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="relative">
                <div className="rounded-lg overflow-hidden mb-3 bg-gradient-to-r from-slate-700 to-slate-800 p-1">
                  <div className="h-32 bg-slate-800 rounded flex items-center justify-center relative overflow-hidden">
                    <Car className="w-16 h-16 text-teal-400/30" />
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-slate-900"></div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-teal-300">Autonomous Vehicle</h3>
                <p className="mt-2 text-white">
                  Designed and built an autonomous robot car using Arduino, featuring obstacle avoidance and
                  line-following capabilities.
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <Badge variant="outline" className="bg-blue-500/10 text-blue-300 border-blue-500/30">
                    Arduino
                  </Badge>
                  <Badge variant="outline" className="bg-blue-500/10 text-blue-300 border-blue-500/30">
                    Sensors
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Circuit Design Project */}
          <Card className="bg-white/10 border-0 backdrop-blur-sm overflow-hidden rounded-xl relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <CardHeader className="pb-2 border-b border-white/10">
              <CardTitle className="text-2xl font-semibold flex items-center text-white">
                <CircuitBoard className="w-6 h-6 mr-2 text-blue-400" /> Circuit Design
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="relative">
                <div className="rounded-lg overflow-hidden mb-3 bg-gradient-to-r from-slate-700 to-slate-800 p-1">
                  <div className="h-32 bg-slate-800 rounded flex items-center justify-center relative overflow-hidden">
                    <CircuitBoard className="w-16 h-16 text-blue-400/30" />
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-slate-900"></div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-blue-300">Advanced Circuits</h3>
                <p className="mt-2 text-white">
                  Created complex circuits for various applications, including amplifiers, filters, and digital logic
                  systems.
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <Badge variant="outline" className="bg-blue-500/10 text-blue-300 border-blue-500/30">
                    PCB Design
                  </Badge>
                  <Badge variant="outline" className="bg-blue-500/10 text-blue-300 border-blue-500/30">
                    Digital Logic
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Additional Skills Card */}
          <Card className="bg-white/10 border-0 backdrop-blur-sm overflow-hidden rounded-xl relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <CardHeader className="pb-2 border-b border-white/10">
              <CardTitle className="text-2xl font-semibold flex items-center text-white">
                <Zap className="w-6 h-6 mr-2 text-purple-400" /> Additional Skills
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center text-white">
                  <ChevronRight className="w-4 h-4 text-purple-400" />
                  <span>Soldering</span>
                </div>
                <div className="flex items-center text-white">
                  <ChevronRight className="w-4 h-4 text-purple-400" />
                  <span>CAD Design</span>
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
                  <span>Data Analysis</span>
                </div>
                <div className="flex items-center text-white">
                  <ChevronRight className="w-4 h-4 text-purple-400" />
                  <span>Team Leadership</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Portfolio PI Les Jaar 1 Card */}
          <Card className="bg-white/10 border-0 backdrop-blur-sm overflow-hidden rounded-xl relative group lg:col-span-3">
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
                      Presentatie
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
