"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Apple, ArrowRight, Mail, Smartphone } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Schedule() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for joining!",
      description: "We'll notify you when TidyRide launches in your area.",
    });
    setEmail("");
  };

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative pt-20 overflow-hidden">
        <div className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary/20 to-primary/10 opacity-30"></div>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-24 pb-20">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Get Started with
              <span className="block text-primary">TidyRide</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Download our mobile app to schedule pickups, track orders, and manage your laundry service. Not available in your area yet? Join our waitlist to be notified when we launch!
            </p>
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <section className="py-24 bg-muted/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <div className="flex flex-col items-center gap-8">
              <div className="rounded-2xl bg-primary p-3">
                <Smartphone className="h-8 w-8 text-primary-foreground" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight">Download Our App</h2>
              <p className="text-lg text-muted-foreground">
                Get the full TidyRide experience with our mobile app
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="bg-background hover:bg-accent border-border/50 hover:border-border"
                >
                  <Apple className="mr-2 h-5 w-5" />
                  Download for iOS
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="bg-background hover:bg-accent border-border/50 hover:border-border"
                >
                  <svg viewBox="0 0 24 24" className="mr-2 h-5 w-5" fill="currentColor">
                    <path d="M17.523 15.341l2.194 2.194c.208.208.208.544 0 .751l-1.409 1.409c-.208.208-.544.208-.751 0l-2.194-2.194-2.194 2.194c-.208.208-.544.208-.751 0l-1.409-1.409c-.208-.208-.208-.544 0-.751l2.194-2.194-2.194-2.194c-.208-.208-.208-.544 0-.751l1.409-1.409c.208-.208.544-.208.751 0l2.194 2.194 2.194-2.194c.208-.208.544-.208.751 0l1.409 1.409c.208.208.208.544 0 .751l-2.194 2.194z"/>
                    <path d="M5.859 3h12.283c1.337 0 2.422 1.085 2.422 2.422v12.283c0 1.337-1.085 2.422-2.422 2.422h-12.283c-1.337 0-2.422-1.085-2.422-2.422v-12.283c0-1.337 1.085-2.422 2.422-2.422zm6.141 14.5c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5z"/>
                  </svg>
                  Download for Android
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5"></div>
          <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-background shadow-xl shadow-primary/10 ring-1 ring-primary/5"></div>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <div className="flex flex-col items-center gap-8">
              <div className="rounded-2xl bg-primary p-3">
                <Mail className="h-8 w-8 text-primary-foreground" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight">Join the Waitlist</h2>
              <p className="text-lg text-muted-foreground">
                Be the first to know when TidyRide launches in your area
              </p>
              <form onSubmit={handleSubmit} className="w-full max-w-md">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1"
                  />
                  <Button type="submit" size="lg" className="bg-primary hover:bg-primary/90">
                    Join Waitlist
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}