"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Shirt } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { useState } from "react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "How It Works", href: "/how-it-works" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl">
        <div className="flex h-16 md:h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-x-2">
              <div className="rounded-lg bg-primary p-2">
                <Shirt className="h-5 w-5 md:h-6 md:w-6 text-primary-foreground" />
              </div>
              <span className="text-lg md:text-xl font-bold tracking-tight">TidyRide</span>
            </Link>
          </div>
          
          <nav className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.href 
                    ? "text-primary after:absolute after:-bottom-7 after:left-0 after:h-0.5 after:w-full after:bg-primary" 
                    : "text-muted-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <div className="hidden sm:block">
              <Link href="/schedule">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Schedule Pickup
                </Button>
              </Link>
            </div>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] lg:hidden">
                <div className="flex flex-col h-full">
                  <div className="flex items-center border-b border-border/50 pb-4">
                    <Link href="/" className="flex items-center gap-x-2" onClick={() => setIsOpen(false)}>
                      <div className="rounded-lg bg-primary p-2">
                        <Shirt className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <span className="text-lg font-bold tracking-tight">TidyRide</span>
                    </Link>
                  </div>
                  <nav className="flex flex-col gap-y-4 mt-8">
                    {navigation.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "text-sm font-medium transition-colors hover:text-primary px-2 py-1.5 rounded-md",
                          pathname === item.href 
                            ? "text-primary bg-primary/10" 
                            : "text-muted-foreground"
                        )}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                  <div className="mt-auto border-t border-border/50 pt-4">
                    <Link href="/schedule" onClick={() => setIsOpen(false)}>
                      <Button className="w-full bg-primary hover:bg-primary/90">
                        Schedule Pickup
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}