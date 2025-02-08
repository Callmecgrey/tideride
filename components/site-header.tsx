"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Shirt } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

const navigation = [
  { name: "Home", href: "/" },
  { name: "How It Works", href: "/how-it-works" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl">
        <div className="flex h-20 items-center justify-between px-6 lg:px-8">
          <div className="flex lg:flex-1">
            <Link href="/" className="flex items-center gap-x-2">
              <div className="rounded-lg bg-primary p-2">
                <Shirt className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold tracking-tight">TidyRide</span>
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

          <div className="flex items-center gap-4 lg:flex-1 lg:justify-end">
            <ThemeToggle />
            <Link href="/schedule">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Schedule Pickup
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}