import { FiShield, FiTool, FiTruck } from "react-icons/fi";

export default function WhyChoose() {
  const cards = [
    {
      icon: <FiShield className="h-8 w-8 text-red-600" />,
      title: "Honest, No-Nonsense Advice",
      description: "We tell you exactly what needs doing and why",
    },
    {
      icon: <FiTool className="h-8 w-8 text-red-600" />,
      title: "Skilled Technicians",
      description: "Using genuine parts and modern diagnostic equipment",
    },
    {
      icon: <FiTruck className="h-8 w-8 text-red-600" />,
      title: "MOT & Servicing Under One Roof",
      description: "Convenient, comprehensive car care in one location",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Why Choose Centurion?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-white text-card-foreground flex flex-col gap-6 rounded-xl border border-gray-300 py-6 shadow-lg hover:shadow-lg hover:shadow-red-600 active:shadow-lg active:shadow-red-600 text-center"
              >
                <div className="px-6 pt-6">
                  <div className="flex justify-center mb-4">{card.icon}</div>
                  <h3 className="font-semibold mb-2">{card.title}</h3>
                  <p className="text-sm text-muted-foreground">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
