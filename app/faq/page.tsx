"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    category: "General",
    questions: [
      {
        question: "What is TidyRide?",
        answer: "TidyRide is a premium laundry pickup and delivery service operating across major cities in the United States and Canada. We offer professional cleaning services including wash & fold, dry cleaning, and commercial laundry solutions."
      },
      {
        question: "How does the service work?",
        answer: "Simply download our mobile app or join our waitlist, schedule a pickup, and we'll handle the rest. We'll collect your laundry, clean it according to your preferences, and deliver it back to you within 24 hours."
      },
      {
        question: "What areas do you serve?",
        answer: "We currently operate in major cities across North America including New York, Los Angeles, Chicago, Toronto, Vancouver, and Montreal. Check our Service Areas page for specific coverage details."
      }
    ]
  },
  {
    category: "Services & Pricing",
    questions: [
      {
        question: "What services do you offer?",
        answer: "We offer Wash & Fold service for everyday items, Premium Care for delicate garments, Dry Cleaning for formal wear, and Commercial Services for businesses."
      },
      {
        question: "What is your turnaround time?",
        answer: "Our standard turnaround time is 24 hours for most services. Same-day service may be available in select areas for an additional fee."
      },
      {
        question: "Do you provide special care for delicate items?",
        answer: "Yes, our Premium Care service is specifically designed for delicate items, using specialized cleaning methods and premium detergents suitable for sensitive fabrics."
      }
    ]
  },
  {
    category: "Pickup & Delivery",
    questions: [
      {
        question: "How do I schedule a pickup?",
        answer: "You can schedule pickups through our mobile app or website. Simply select your preferred time slot, and we'll arrive within the specified window."
      },
      {
        question: "What are your pickup hours?",
        answer: "We offer pickup and delivery services 7 days a week, from 7:00 AM to 9:00 PM. Specific hours may vary by location."
      },
      {
        question: "Is there a minimum order requirement?",
        answer: "There is no minimum order requirement for our services, though certain promotions may have specific terms."
      }
    ]
  }
];

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFAQs = faqs.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => 
        q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

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
              Frequently Asked
              <span className="block text-primary">Questions</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Find answers to common questions about our services, coverage areas, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-muted/50">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="space-y-24">
            {filteredFAQs.map((category) => (
              <div key={category.category}>
                <h2 className="text-2xl font-bold tracking-tight">{category.category}</h2>
                <dl className="mt-8 space-y-8">
                  {category.questions.map((faq, index) => (
                    <div key={index} className="group">
                      <dt className="text-lg font-semibold leading-7 group-hover:text-primary transition-colors">
                        {faq.question}
                      </dt>
                      <dd className="mt-4 text-base leading-7 text-muted-foreground">
                        {faq.answer}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}