import { Button } from "@/components/ui/button";
import { Sparkles, Timer, Shirt, Building2, ArrowRight, Check } from "lucide-react";
import Link from "next/link";

const services = [
  {
    name: "Wash & Fold",
    description: "Our signature laundry service for everyday items",
    icon: Shirt,
    features: [
      "Professional washing and expert folding",
      "Stain treatment included",
      "Temperature-controlled washing",
      "Fabric softener available",
      "Neatly folded and packaged",
      "24-hour turnaround time"
    ],
    image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Premium Care",
    description: "Specialized care for your delicate and high-end garments",
    icon: Sparkles,
    features: [
      "Hand-washing when required",
      "Special detergents for delicate fabrics",
      "Detailed inspection process",
      "Expert stain removal",
      "Precise temperature control",
      "Premium packaging"
    ],
    image: "https://images.unsplash.com/photo-1489274495757-95c7c837b101?q=80&w=2815&auto=format&fit=crop"
  },
  {
    name: "Dry Cleaning",
    description: "Professional dry cleaning for your formal and special care items",
    icon: Timer,
    features: [
      "Eco-friendly solvents",
      "Suitable for suits and formal wear",
      "Safe for delicate materials",
      "Thorough inspection process",
      "Professional pressing",
      "Protective garment bags"
    ],
    image: "https://images.unsplash.com/photo-1553915632-175f60dd8e36?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Commercial Services",
    description: "Tailored solutions for businesses of all sizes",
    icon: Building2,
    features: [
      "High-volume capacity",
      "Customized service plans",
      "Regular pickup schedules",
      "Dedicated account manager",
      "Competitive rates",
      "Quality assurance program"
    ],
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function Services() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative pt-20 overflow-hidden">
        <div className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary/20 to-primary/10 opacity-30"></div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-16 sm:pb-20">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight lg:text-6xl">
              Professional Laundry
              <span className="block text-primary">Services</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg leading-8 text-muted-foreground">
              From everyday laundry to premium garment care, we offer comprehensive solutions tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-24 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 sm:space-y-24">
            {services.map((service, index) => (
              <div
                key={service.name}
                className={`flex flex-col gap-8 sm:gap-16 lg:flex-row ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="lg:w-1/2">
                  <div className="relative h-[300px] sm:h-[400px] overflow-hidden rounded-2xl">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0 flex items-end p-6 sm:p-8">
                      <div className="w-full">
                        <div className="flex items-center gap-x-3">
                          <div className="rounded-lg bg-primary/90 backdrop-blur-sm p-2">
                            <service.icon className="h-5 sm:h-6 w-5 sm:w-6 text-primary-foreground" />
                          </div>
                          <h3 className="text-xl sm:text-2xl font-bold text-white">{service.name}</h3>
                        </div>
                        <p className="mt-2 text-sm sm:text-base text-gray-200">{service.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2 flex items-center">
                  <div className="space-y-6">
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight lg:text-3xl">
                      {service.name}
                    </h3>
                    <p className="text-base sm:text-lg text-muted-foreground">{service.description}</p>
                    <ul className="space-y-3 sm:space-y-4">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-x-3">
                          <Check className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="text-sm sm:text-base text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 sm:py-24 bg-primary">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?q=80&w=2070&auto=format&fit=crop"
            alt="Laundry service"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-primary-foreground lg:text-4xl">
              Ready to experience our service?
            </h2>
            <p className="mt-6 text-base sm:text-lg leading-8 text-primary-foreground/80">
              Schedule your first pickup and discover the convenience of professional laundry care.
            </p>
            <div className="mt-8 sm:mt-10 flex items-center justify-center gap-x-6">
              <Link href="/schedule">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  Schedule Pickup
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}