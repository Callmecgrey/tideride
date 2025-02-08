import { Button } from "@/components/ui/button";
import { Truck, Clock, Sparkles, ArrowRight, MapPin, Shield, Users } from "lucide-react";
import Link from "next/link";

const locations = [
  "New York",
  "Los Angeles",
  "Chicago",
  "Toronto",
  "Vancouver",
  "Montreal",
  "Miami",
  "Seattle"
];

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 sm:pt-24 pb-16 sm:pb-32">
        <div className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary/20 to-primary/10 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:flex lg:items-center lg:gap-x-16 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
            <div className="flex">
              <div className="relative flex items-center gap-x-3 rounded-full px-3 py-1 text-sm leading-6 text-muted-foreground ring-1 ring-border hover:ring-ring">
                <span className="font-semibold text-primary">Now Available</span>
                <div className="h-4 w-px bg-border"></div>
                <span className="truncate">Serving major cities</span>
              </div>
            </div>
            <h1 className="mt-8 max-w-lg text-3xl font-bold tracking-tight sm:text-6xl">
              Your laundry,
              <span className="block text-primary">delivered fresh</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg leading-8 text-muted-foreground">
              Experience North America's premier laundry service. Professional washing, folding, and delivery right to your doorstep.
            </p>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-x-6">
              <Link href="/schedule">
                <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90">
                  Schedule Pickup
                </Button>
              </Link>
              <Link 
                href="/how-it-works" 
                className="group flex items-center gap-x-2 text-sm font-semibold text-foreground hover:text-primary transition-colors"
              >
                Learn more 
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
          <div className="mt-16 lg:mt-0 lg:flex-shrink-0">
            <div className="relative">
              <img
                className="relative mx-auto w-full max-w-[24rem] sm:max-w-[32rem] rounded-xl shadow-2xl ring-1 ring-border"
                src="https://images.unsplash.com/photo-1545173168-9f1947eebb7f?q=80&w=2071&auto=format&fit=crop"
                alt="Clean folded laundry"
              />
              <div className="absolute -bottom-6 sm:-bottom-8 -left-6 sm:-left-8 rounded-2xl bg-background/90 p-4 sm:p-6 shadow-lg backdrop-blur-sm ring-1 ring-border">
                <div className="flex items-center gap-x-4">
                  <div className="h-10 sm:h-12 w-10 sm:w-12 flex items-center justify-center rounded-full bg-primary">
                    <Clock className="h-5 sm:h-6 w-5 sm:w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm sm:text-base font-semibold">24-Hour Turnaround</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Quick & reliable service</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative isolate py-16 sm:py-32 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary">Premium Service</h2>
            <p className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight sm:text-4xl">
              Everything you need for pristine laundry
            </p>
            <p className="mt-6 text-base sm:text-lg leading-8 text-muted-foreground">
              Experience the convenience of professional laundry service, tailored to your schedule.
            </p>
          </div>
          
          <div className="mx-auto mt-12 sm:mt-16 max-w-2xl lg:mt-20 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base sm:text-lg font-semibold leading-7">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                    <Truck className="h-6 w-6 text-primary-foreground" />
                  </div>
                  Free Pickup & Delivery
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-sm sm:text-base leading-7 text-muted-foreground">
                  <p className="flex-auto">We come to you. Schedule a pickup and we'll handle the rest, with real-time tracking available.</p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base sm:text-lg font-semibold leading-7">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                    <Shield className="h-6 w-6 text-primary-foreground" />
                  </div>
                  Premium Quality
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-sm sm:text-base leading-7 text-muted-foreground">
                  <p className="flex-auto">Professional cleaning with eco-friendly products and meticulous attention to detail.</p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base sm:text-lg font-semibold leading-7">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                    <Users className="h-6 w-6 text-primary-foreground" />
                  </div>
                  Trusted Service
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-sm sm:text-base leading-7 text-muted-foreground">
                  <p className="flex-auto">Join thousands of satisfied customers across North America who trust us with their laundry.</p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-16 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight sm:text-4xl">Available in Major Cities</h2>
            <p className="mt-6 text-base sm:text-lg leading-8 text-muted-foreground">
              Serving communities across the United States and Canada with plans for continued expansion.
            </p>
          </div>
          <div className="mx-auto mt-12 sm:mt-16 max-w-2xl lg:mt-20 lg:max-w-none">
            <div className="grid grid-cols-2 gap-3 sm:gap-6 sm:grid-cols-3 md:grid-cols-4">
              {locations.map((location) => (
                <div
                  key={location}
                  className="relative flex items-center space-x-3 rounded-lg border bg-background px-4 sm:px-6 py-4 sm:py-5 shadow-sm hover:border-primary/50 transition-colors"
                >
                  <div className="flex-shrink-0">
                    <MapPin className="h-4 sm:h-5 w-4 sm:w-5 text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="absolute inset-0" aria-hidden="true" />
                    <p className="text-xs sm:text-sm font-medium">{location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 sm:py-32">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5"></div>
          <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-background shadow-xl shadow-primary/10 ring-1 ring-primary/5"></div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight sm:text-4xl">
              Ready for fresh, clean laundry?
            </h2>
            <p className="mt-6 text-base sm:text-lg leading-8 text-muted-foreground">
              Join thousands of satisfied customers across North America. Experience the convenience of TidyRide today.
            </p>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6">
              <Link href="/schedule">
                <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90">
                  Schedule Your First Pickup
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