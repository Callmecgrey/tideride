"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Message Sent",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Get in Touch</h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Have questions? We're here to help. Reach out to our team and we'll get back to you shortly.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="relative py-24 bg-muted/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-2 lg:gap-x-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Contact Information</h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Get in touch with us through any of these channels or fill out the contact form.
              </p>

              <dl className="mt-10 space-y-4 text-base leading-7 text-muted-foreground">
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Address</span>
                    <MapPin className="h-7 w-6 text-primary" aria-hidden="true" />
                  </dt>
                  <dd>
                    123 Laundry Lane<br />
                    Toronto, ON M5V 2T6
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Telephone</span>
                    <Phone className="h-7 w-6 text-primary" aria-hidden="true" />
                  </dt>
                  <dd>
                    <a className="hover:text-primary transition-colors" href="tel:+1 (555) 234-5678">
                      +1 (555) 234-5678
                    </a>
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Email</span>
                    <Mail className="h-7 w-6 text-primary" aria-hidden="true" />
                  </dt>
                  <dd>
                    <a className="hover:text-primary transition-colors" href="mailto:hello@tidyride.com">
                      hello@tidyride.com
                    </a>
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Hours</span>
                    <Clock className="h-7 w-6 text-primary" aria-hidden="true" />
                  </dt>
                  <dd>
                    Monday - Sunday<br />
                    7:00 AM - 9:00 PM
                  </dd>
                </div>
              </dl>
            </div>

            <form onSubmit={handleSubmit} className="bg-background rounded-2xl shadow-xl ring-1 ring-border p-8">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium">
                    Name
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="mt-1"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1"
                    required
                  />
                </div>
                <div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    Send Message
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}