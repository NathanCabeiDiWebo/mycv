import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CircuitBoard, Car, Sprout } from "lucide-react"

export default function Component() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">Electrical Engineering Student</CardTitle>
            <p className="text-gray-500">Rotterdam University | Second Year</p>
          </CardHeader>
          <CardContent>
            <p className="text-lg">
              Passionate electrical engineering student with hands-on experience in robotics and circuit design.
              Currently researching innovative approaches to improve food production.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">Education</CardTitle>
          </CardHeader>
          <CardContent>
            <h3 className="text-xl font-semibold">Bachelor of Science in Electrical Engineering</h3>
            <p className="text-gray-500">Rotterdam University | 2022 - Present</p>
            <ul className="list-disc list-inside mt-2">
              <li>Second-year student with focus on robotics and circuit design</li>
              <li>Relevant coursework: Circuit Analysis, Digital Systems, Microcontrollers, Robotics</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">Skills</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            <Badge variant="secondary">Circuit Design</Badge>
            <Badge variant="secondary">Robotics</Badge>
            <Badge variant="secondary">Microcontrollers</Badge>
            <Badge variant="secondary">PCB Design</Badge>
            <Badge variant="secondary">Arduino</Badge>
            <Badge variant="secondary">MATLAB</Badge>
            <Badge variant="secondary">C++</Badge>
            <Badge variant="secondary">3D Printing</Badge>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <h3 className="text-xl font-semibold flex items-center">
                <Car className="mr-2" /> Robot Car Design and Implementation
              </h3>
              <p>Designed and built an autonomous robot car using Arduino, featuring obstacle avoidance and line-following capabilities.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold flex items-center">
                <CircuitBoard className="mr-2" /> Advanced Circuit Design
              </h3>
              <p>Created complex circuits for various applications, including amplifiers, filters, and digital logic systems.</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">Research</CardTitle>
          </CardHeader>
          <CardContent>
            <h3 className="text-xl font-semibold flex items-center">
              <Sprout className="mr-2" /> Improving Food Production through Technology
            </h3>
            <p>
              Currently conducting research on innovative electrical engineering applications to enhance food production efficiency and sustainability.
              Exploring areas such as automated farming systems, precision agriculture, and energy-efficient grow lights.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}