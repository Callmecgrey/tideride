"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, MapPin } from "lucide-react";
import { useState } from "react";

const serviceAreas = [
  {
    city: "New York",
    state: "NY",
    country: "United States",
    zipCodes: ["10001", "10002", "10003", "10004", "10005", "10006", "10007"],
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2070&auto=format&fit=crop"
  },
  {
    city: "Los Angeles",
    state: "CA",
    country: "United States",
    zipCodes: ["90001", "90002", "90003", "90004", "90005", "90006", "90007"],
    image: "https://images.unsplash.com/photo-1515896769750-31548aa180ed?q=80&w=2034&auto=format&fit=crop"
  },
  {
    city: "Toronto",
    state: "ON",
    country: "Canada",
    postalCodes: ["M5V", "M5J", "M5H", "M5K", "M5L", "M5G", "M5B"],
    image: "https://images.unsplash.com/photo-1517090504586-fde19ea6066f?q=80&w=2070&auto=format&fit=crop"
  },
  {
    city: "Vancouver",
    state: "BC",
    country: "Canada",
    postalCodes: ["V6B", "V6C", "V6E", "V6G", "V6Z", "V6H", "V6J"],
    image: "https://images.unsplash.com/photo-1560814304-4f05b62af116?q=80&w=2074&auto=format&fit=crop"
  }
];

export default function ServiceAreas() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<typeof serviceAreas>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = () => {
    const query = searchQuery.toLowerCase();
    const results = serviceAreas.filter(area => 
      area.city.toLowerCase().includes(query) ||
      area.state.toLowerCase().includes(query) ||
      area.zipCodes?.some(zip => zip.toLowerCase().includes(query)) ||
      area.postalCodes?.some(code => code.toLowerCase().includes(query))
    );
    setSearchResults(results);
    setHasSearched(true);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

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
              Service Areas
            </h1>
            <p className="mt-6 text-base sm:text-lg leading-8 text-muted-foreground">
              Find out if TidyRide is available in your area by searching your city, ZIP code, or postal code.
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 sm:py-12 bg-muted/50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Enter city, ZIP code, or postal code..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                className="pl-10"
              />
            </div>
            <Button 
              onClick={handleSearch}
              className="w-full sm:w-auto bg-primary hover:bg-primary/90"
            >
              Search
            </Button>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {hasSearched && searchResults.length === 0 ? (
            <div className="text-center">
              <MapPin className="mx-auto h-10 sm:h-12 w-10 sm:w-12 text-muted-foreground" />
              <h3 className="mt-4 text-base sm:text-lg font-semibold">No Service Available Yet</h3>
              <p className="mt-2 text-sm sm:text-base text-muted-foreground">
                We haven't reached your area yet, but we're expanding quickly! Join our waitlist to be notified when we launch.
              </p>
              <Button
                className="mt-6 w-full sm:w-auto bg-primary hover:bg-primary/90"
                onClick={() => window.location.href = '/schedule'}
              >
                Join Waitlist
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
              {(hasSearched ? searchResults : serviceAreas).map((area) => (
                <div
                  key={area.city}
                  className="relative overflow-hidden rounded-2xl"
                >
                  <img
                    src={area.image}
                    alt={area.city}
                    className="h-48 sm:h-64 w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0 flex items-end p-6 sm:p-8">
                    <div className="text-white">
                      <h3 className="text-xl sm:text-2xl font-bold">{area.city}</h3>
                      <p className="mt-2 text-sm sm:text-base">{area.state}, {area.country}</p>
                      <p className="mt-2 text-xs sm:text-sm text-gray-300">
                        {area.zipCodes ? 'ZIP Codes' : 'Postal Codes'}: {(area.zipCodes || area.postalCodes)?.slice(0, 3).join(", ")} and more...
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}