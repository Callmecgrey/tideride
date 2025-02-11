import { Button } from "@/components/ui/button";
import { Sparkles, Car, Shovel as Shoe, Shirt, ArrowRight, Check } from "lucide-react";
import Link from "next/link";

const services = [
  {
    name: "Wash and Dry Services",
    description: "Professional washing and drying for all your everyday garments",
    icon: Shirt,
    features: [
      "Expert stain removal treatment",
      "Temperature-controlled washing",
      "Gentle fabric care process",
      "Premium detergents and softeners",
      "Perfect folding and packaging",
      "Same-day service available",
      "Eco-friendly cleaning options",
      "Special care for delicates"
    ],
    image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Professional Dry Cleaning",
    description: "Specialized cleaning for your formal wear and delicate fabrics",
    icon: Sparkles,
    features: [
      "Expert handling of delicate fabrics",
      "Stain and spot treatment",
      "Professional pressing service",
      "Suit and formal wear care",
      "Wedding dress preservation",
      "Designer garment expertise",
      "Leather and suede cleaning",
      "Protective garment bags provided"
    ],
    image: "https://images.unsplash.com/photo-1489274495757-95c7c837b101?q=80&w=2815&auto=format&fit=crop"
  },
  {
    name: "Shoe Cleaning Services",
    description: "Restore and maintain your footwear with our professional shoe care",
    icon: Shoe,
    features: [
      "Deep cleaning and sanitization",
      "Leather conditioning treatment",
      "Suede and nubuck care",
      "Sole and heel repair",
      "Color restoration",
      "Waterproofing service",
      "Athletic shoe cleaning",
      "Premium polish service"
    ],
    image: "https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Car Cleaning Services",
    description: "Comprehensive auto detailing and cleaning solutions",
    icon: Car,
    features: [
      "Interior deep cleaning",
      "Exterior wash and wax",
      "Leather seat conditioning",
      "Carpet and upholstery cleaning",
      "Engine bay cleaning",
      "Paint protection treatment",
      "Odor removal service",
      "Window and mirror cleaning"
    ],
    image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=80&w=2071&auto=format&fit=crop"
  }
];

export default function Services() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative pt-16 sm:pt-20 overflow-hidden">
        <div className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary/20 to-primary/10 opacity-30"></div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-12 sm:pb-20">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight lg:text-5xl xl:text-6xl">
              Professional Cleaning
              <span className="block text-primary mt-2">Services</span>
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-muted-foreground px-2">
              From everyday laundry to premium car detailing, we offer comprehensive cleaning solutions tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 sm:space-y-16 lg:space-y-24">
            {services.map((service, index) => (
              <div
                key={service.name}
                className={`flex flex-col gap-6 sm:gap-8 lg:gap-16 lg:flex-row ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="lg:w-1/2">
                  <div className="relative h-[250px] xs:h-[300px] sm:h-[350px] lg:h-[400px] overflow-hidden rounded-xl sm:rounded-2xl shadow-lg">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/0 flex items-end p-4 sm:p-6 lg:p-8">
                      <div className="w-full">
                        <div className="flex items-center gap-x-2 sm:gap-x-3">
                          <div className="rounded-lg bg-primary/90 backdrop-blur-sm p-1.5 sm:p-2">
                            <service.icon className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-primary-foreground" />
                          </div>
                          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">{service.name}</h3>
                        </div>
                        <p className="mt-2 text-sm sm:text-base text-gray-200 line-clamp-2 sm:line-clamp-none">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2 flex items-center">
                  <div className="space-y-4 sm:space-y-6">
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight lg:text-3xl">
                      {service.name}
                    </h3>
                    <p className="text-sm sm:text-base lg:text-lg text-muted-foreground">
                      {service.description}
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 lg:gap-4 mt-4">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-x-2 sm:gap-x-3">
                          <Check className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                          <span className="text-xs sm:text-sm lg:text-base text-muted-foreground">{feature}</span>
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
      <section className="relative py-12 sm:py-16 lg:py-24 bg-primary">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?q=80&w=2070&auto=format&fit=crop"
            alt="Cleaning service"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold tracking-tight text-primary-foreground">
              Ready to experience our service?
            </h2>
            <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg leading-7 sm:leading-8 text-primary-foreground/80 px-2">
              Schedule your first service and discover the convenience of professional cleaning care.
            </p>
            <div className="mt-6 sm:mt-8 lg:mt-10">
              <Link href="/schedule" className="block sm:inline-block">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  Schedule Now
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