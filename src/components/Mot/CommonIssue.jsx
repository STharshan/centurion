import { FiAlertTriangle, FiClock, FiInfo } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";

const issuesData = [
  {
    title: "Common MOT Failures We Fix",
    icon: FiAlertTriangle,
    points: [
      "Worn or damaged tyres",
      "Blown bulbs or faulty lights",
      "Brake wear or uneven braking",
      "Suspension faults",
      "Exhaust leaks or emissions issues",
    ],
    note: "Book your MOT today and avoid the last-minute rush.",
  },
  {
    title: "Signs Your Car Needs a Service",
    icon: FiClock,
    points: [
      "Dashboard warning lights",
      "Strange noises or vibrations",
      "Poor fuel economy",
      "Smoke from the exhaust",
      "Rough idling or stalling",
    ],
    note: "Don't wait until something goes wrong—keep your car in peak condition today.",
  },
];

export default function CommonIssues() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Common Issues We Fix</h2>
            <p className="text-muted-foreground text-lg">
              Don't wait until something goes wrong—we're here to help
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {issuesData.map((issue, idx) => {
              const Icon = issue.icon;
              return (
                <div
                  key={idx}
                  className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-lg border-gray-300 hover:shadow-lg hover:shadow-red-600 active:shadow-red-600 active:shadow-lg"
                >
                  {/* Card Header */}
                  <div className="grid auto-rows-min items-start gap-1.5 px-6">
                    <div className="leading-none font-semibold flex items-center space-x-2">
                      <Icon className={`h-5 w-5 text-red-600`} />
                      <span>{issue.title}</span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="px-6">
                    <div className="space-y-3">
                      {issue.points.map((point, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <GoDotFill
                            className={`h-4 w-4 ${issue.colorClass} flex-shrink-0 `}
                          />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-start mt-4 space-x-2 text-sm text-muted-foreground">
                      <FiInfo className="h-4 w-4 mt-0.5 flex-shrink-0 text-red-600" />
                      <span>{issue.note}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
