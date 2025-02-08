import { Button } from "@/components/ui/button";
import { ArrowRight, PackageCheck, Truck, Sparkles, Timer } from "lucide-react";
import Link from "next/link";

export default function HowItWorks() {
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
              Simple Steps to
              <span className="block text-primary">Fresh Laundry</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg leading-8 text-muted-foreground">
              Experience the convenience of our premium laundry service in four easy steps. From pickup to delivery, we handle everything with care and precision.
            </p>
            <div className="mt-8 sm:mt-10 flex items-center justify-center gap-x-6">
              <Link href="/schedule">
                <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90">
                  Get Started Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 sm:py-24 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:gap-y-20 lg:grid-cols-2 lg:gap-x-16">
            {/* Step 1 */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-lg ring-1 ring-border">
                <img
                  src="https://images.unsplash.com/photo-1582735689369-4fe89db7114c?q=80&w=2070&auto=format&fit=crop"
                  alt="Schedule pickup"
                  className="w-full h-[300px] sm:h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0 flex items-end p-6 sm:p-8">
                  <div className="text-white">
                    <h3 className="text-xl sm:text-2xl font-bold">1. Schedule Pickup</h3>
                    <p className="mt-2 text-sm sm:text-base text-gray-200">Book your preferred time slot online</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 sm:-bottom-10 -right-6 sm:-right-10 bg-background rounded-2xl p-4 sm:p-6 shadow-xl ring-1 ring-border">
                <PackageCheck className="h-8 sm:h-12 w-8 sm:w-12 text-primary" />
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-lg ring-1 ring-border">
                <img
                  src="https://images.unsplash.com/photo-1545173168-9f1947eebb7f?q=80&w=2071&auto=format&fit=crop"
                  alt="Professional cleaning"
                  className="w-full h-[300px] sm:h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0 flex items-end p-6 sm:p-8">
                  <div className="text-white">
                    <h3 className="text-xl sm:text-2xl font-bold">2. We Clean</h3>
                    <p className="mt-2 text-sm sm:text-base text-gray-200">Expert cleaning with premium products</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 sm:-bottom-10 -right-6 sm:-right-10 bg-background rounded-2xl p-4 sm:p-6 shadow-xl ring-1 ring-border">
                <Sparkles className="h-8 sm:h-12 w-8 sm:w-12 text-primary" />
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-lg ring-1 ring-border">
                <img
                  src="https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?q=80&w=2070&auto=format&fit=crop"
                  alt="Quality check"
                  className="w-full h-[300px] sm:h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0 flex items-end p-6 sm:p-8">
                  <div className="text-white">
                    <h3 className="text-xl sm:text-2xl font-bold">3. Quality Check</h3>
                    <p className="mt-2 text-sm sm:text-base text-gray-200">Thorough inspection and perfect folding</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 sm:-bottom-10 -right-6 sm:-right-10 bg-background rounded-2xl p-4 sm:p-6 shadow-xl ring-1 ring-border">
                <Timer className="h-8 sm:h-12 w-8 sm:w-12 text-primary" />
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-lg ring-1 ring-border">
                <img
                  src="https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=2070&auto=format&fit=crop"
                  alt="Delivery"
                  className="w-full h-[300px] sm:h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0 flex items-end p-6 sm:p-8">
                  <div className="text-white">
                    <h3 className="text-xl sm:text-2xl font-bold">4. Fast Delivery</h3>
                    <p className="mt-2 text-sm sm:text-base text-gray-200">Right to your doorstep within 24 hours</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 sm:-bottom-10 -right-6 sm:-right-10 bg-background rounded-2xl p-4 sm:p-6 shadow-xl ring-1 ring-border">
                <Truck className="h-8 sm:h-12 w-8 sm:w-12 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 sm:py-24">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5"></div>
          <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-background shadow-xl shadow-primary/10 ring-1 ring-primary/5"></div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight lg:text-4xl">
              Ready to experience effortless laundry care?
            </h2>
            <p className="mt-6 text-base sm:text-lg leading-8 text-muted-foreground">
              Join thousands of satisfied customers who have made laundry day stress-free with TidyRide.
            </p>
            <div className="mt-8 sm:mt-10 flex items-center justify-center gap-x-6">
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