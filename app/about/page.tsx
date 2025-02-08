import { Button } from "@/components/ui/button";
import { Users, Heart, Leaf, Shield, ArrowRight } from "lucide-react";
import Link from "next/link";

const values = [
  {
    name: "Customer First",
    description: "Your satisfaction is our top priority. We go above and beyond to ensure a premium service experience.",
    icon: Heart
  },
  {
    name: "Eco-Friendly",
    description: "We use environmentally conscious products and practices to minimize our impact on the planet.",
    icon: Leaf
  },
  {
    name: "Quality Assured",
    description: "Every garment is treated with care and undergoes thorough quality checks before delivery.",
    icon: Shield
  },
  {
    name: "Community Focused",
    description: "We're proud to serve and support local communities across North America, creating jobs and partnerships.",
    icon: Users
  }
];

export default function About() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative pt-20 overflow-hidden">
        <div className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary/20 to-primary/10 opacity-30"></div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-16 sm:pb-20">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight lg:text-6xl">Our Story & Mission</h1>
            <p className="mt-6 text-base sm:text-lg leading-8 text-muted-foreground">
              Founded in 2025, TidyRide was born from a simple idea: make laundry day the easiest part of your week.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 sm:py-24 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:gap-16 lg:grid-cols-2 lg:gap-24">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?q=80&w=2070&auto=format&fit=crop"
                alt="Our story"
                className="aspect-[3/2] w-full rounded-2xl object-cover shadow-lg ring-1 ring-border"
              />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Our Journey</h2>
              <p className="mt-6 text-base sm:text-lg leading-8 text-muted-foreground">
                What started as a solution to a common problem has grown into North America's most trusted laundry service. We combine technology with exceptional service to deliver a seamless experience.
              </p>
              <p className="mt-6 text-base sm:text-lg leading-8 text-muted-foreground">
                Today, we serve thousands of customers across the United States and Canada, maintaining the same commitment to quality and service that inspired our founding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight lg:text-4xl">Our Values</h2>
            <p className="mt-6 text-base sm:text-lg leading-8 text-muted-foreground">
              These core principles guide everything we do at TidyRide.
            </p>
          </div>
          <div className="mx-auto mt-12 sm:mt-16 lg:mt-24 max-w-2xl lg:max-w-none">
            <dl className="grid grid-cols-1 gap-8 sm:gap-12 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <div key={value.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base sm:text-lg font-semibold leading-7">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                      <value.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    {value.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-sm sm:text-base leading-7 text-muted-foreground">
                    <p className="flex-auto">{value.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
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
              Join the TidyRide Family
            </h2>
            <p className="mt-6 text-base sm:text-lg leading-8 text-muted-foreground">
              Experience our commitment to excellence firsthand.
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