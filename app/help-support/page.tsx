"use client";

import { useState } from "react";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";

export default function HelpSupport() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 max-w-2xl mx-auto px-6 pt-32 pb-24 w-full">
        <div className="mb-12 text-center">
          <h1 className="heading-section text-4xl md:text-5xl mb-4 text-ink">Help & Support</h1>
          <p className="text-ink/70">
            Have a question or need assistance? Fill out the form below and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="bg-parchment/30 p-8 md:p-10 rounded-3xl shadow-sm border border-sage/10 relative overflow-hidden">
          <div className="absolute inset-0 cross-pattern-subtle opacity-50 pointer-events-none"></div>
          
          <div className="relative z-10">
            {isSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="mx-auto w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-ink">Message Sent Successfully!</h2>
                <p className="text-ink/70 max-w-md mx-auto">
                  Thank you for reaching out. Your message has been received, and our team will get back to you shortly.
                </p>
                <Button 
                  onClick={() => setIsSubmitted(false)} 
                  variant="outline" 
                  className="mt-8 rounded-xl border-sage/20 text-ink hover:bg-sage/5 hover:text-ink"
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-ink">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 rounded-xl border border-sage/20 bg-background focus:outline-none focus:ring-2 focus:ring-sage/20 focus:border-sage transition-colors text-ink placeholder:text-ink/30"
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-ink">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-xl border border-sage/20 bg-background focus:outline-none focus:ring-2 focus:ring-sage/20 focus:border-sage transition-colors text-ink placeholder:text-ink/30"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-sm font-medium text-ink">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 rounded-xl border border-sage/20 bg-background focus:outline-none focus:ring-2 focus:ring-sage/20 focus:border-sage transition-colors text-ink placeholder:text-ink/30"
                    placeholder="How can we help?"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="description" className="block text-sm font-medium text-ink">
                    Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-sage/20 bg-background focus:outline-none focus:ring-2 focus:ring-sage/20 focus:border-sage transition-colors text-ink placeholder:text-ink/30 resize-none"
                    placeholder="Please describe your issue or question in detail..."
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full h-12 text-base rounded-xl mt-4" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}