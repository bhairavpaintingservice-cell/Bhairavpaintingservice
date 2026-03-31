"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "+91 9158800517",
    href: "tel:+919158800517",
  },
  {
    icon: Mail,
    title: "Email",
    value: "Bhairavpaintingservice@gmail.com",
    href: "mailto:Bhairavpaintingservice@gmail.com",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Mumbai, Maharashtra, India",
    href: null,
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: "Mon-Sat: 8AM - 7PM",
    href: null,
  },
]

const services = [
  "Residential Painting",
  "Commercial Painting",
  "Building & Exterior Painting",
  "Designer & Textured Painting",
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: "", email: "", phone: "", service: "", message: "" })
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Get In Touch
            </p>
            <h1 className="mt-2 font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Contact Us
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Ready to transform your space? Get in touch with us for a free consultation 
              and quote. We&apos;re here to answer your questions and help bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="font-serif text-2xl font-bold tracking-tight text-foreground">
                Request a Free Quote
              </h2>
              <p className="mt-2 text-muted-foreground">
                Fill out the form below and we&apos;ll get back to you within 24 hours.
              </p>

              {isSubmitted ? (
                <Card className="mt-8 border-0 bg-secondary">
                  <CardContent className="p-8 text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-foreground">
                      <CheckCircle className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="mt-6 font-semibold text-foreground text-lg">
                      Thank You!
                    </h3>
                    <p className="mt-2 text-muted-foreground">
                      Your message has been received. We&apos;ll get back to you within 24 hours.
                    </p>
                    <Button
                      className="mt-6"
                      onClick={() => setIsSubmitted(false)}
                    >
                      Send Another Message
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 9876543210"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Project Details *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project - property type, approximate area, specific requirements..."
                      rows={5}
                    />
                  </div>

                  <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="font-serif text-2xl font-bold tracking-tight text-foreground">
                Contact Information
              </h2>
              <p className="mt-2 text-muted-foreground">
                Reach out directly or visit us during business hours.
              </p>

              <div className="mt-8 space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-secondary">
                      <item.icon className="h-6 w-6 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">{item.title}</h3>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Contact Card */}
              <Card className="mt-12 border-0 bg-foreground">
                <CardContent className="p-8">
                  <h3 className="font-semibold text-primary-foreground text-lg">
                    Prefer to call?
                  </h3>
                  <p className="mt-2 text-primary-foreground/80 text-sm">
                    Speak directly with Bhavirav for immediate assistance with your project.
                  </p>
                  <Button
                    asChild
                    size="lg"
                    className="mt-6 w-full bg-primary-foreground text-foreground hover:bg-primary-foreground/90"
                  >
                    <a href="tel:+919158800517" className="flex items-center justify-center gap-2">
                      <Phone className="h-5 w-5" />
                      +91 9158800517
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <div className="mt-8 aspect-video rounded-lg bg-muted flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin className="h-12 w-12 text-muted-foreground mx-auto" />
                  <p className="mt-4 text-muted-foreground">
                    Serving all areas of Mumbai, Maharashtra
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              FAQ
            </p>
            <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="font-semibold text-foreground">
                How do I get a quote?
              </h3>
              <p className="mt-2 text-muted-foreground">
                Fill out our contact form or call us directly. We&apos;ll schedule a free 
                site visit to assess your requirements and provide a detailed quote.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">
                What areas do you serve?
              </h3>
              <p className="mt-2 text-muted-foreground">
                We serve all areas of Mumbai including Andheri, Bandra, Juhu, Powai, 
                Lower Parel, Worli, and surrounding regions.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">
                What brands of paint do you use?
              </h3>
              <p className="mt-2 text-muted-foreground">
                We use premium brands like Asian Paints, Berger, Nerolac, and others 
                based on your preference and budget.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">
                Do you offer any warranty?
              </h3>
              <p className="mt-2 text-muted-foreground">
                Yes, we provide a quality guarantee on all our work. The specific 
                warranty terms depend on the type of paint and service chosen.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
