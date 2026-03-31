import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Phone } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Services | Bhavirav Painting Service",
  description: "Professional painting services including residential, commercial, building, and designer textured painting in Mumbai.",
}

const services = [
  {
    id: "residential",
    title: "Residential Painting",
    subtitle: "Transform Your Home",
    description: "Whether you are moving into a new home or refreshing your current space, our residential painting services cover everything from single rooms to entire properties. We work with you to choose the perfect colors and finishes that reflect your style.",
    image: "/images/residential.jpg",
    features: [
      "Interior wall painting",
      "Exterior house painting",
      "Ceiling and trim work",
      "Color consultation included",
      "Furniture and floor protection",
      "Clean-up after completion",
    ],
  },
  {
    id: "commercial",
    title: "Commercial Painting",
    subtitle: "Professional Business Spaces",
    description: "First impressions matter. Our commercial painting services help businesses create professional, inviting environments. We offer flexible scheduling including weekends to minimize disruption to your operations.",
    image: "/images/commercial.jpg",
    features: [
      "Office spaces",
      "Retail stores and showrooms",
      "Restaurants and cafes",
      "Weekend scheduling available",
      "Minimal business disruption",
      "Quick turnaround times",
    ],
  },
  {
    id: "building",
    title: "Building & Exterior Painting",
    subtitle: "Large-Scale Projects",
    description: "From apartment complexes to commercial buildings, we handle large-scale exterior projects with precision. Our weather-resistant finishes protect your property while enhancing its curb appeal.",
    image: "/images/exterior.jpg",
    features: [
      "Full building exterior painting",
      "Waterproofing solutions",
      "Weather-resistant finishes",
      "Society and complex projects",
      "Safety compliance",
      "Long-lasting results",
    ],
  },
  {
    id: "designer",
    title: "Designer & Textured Painting",
    subtitle: "Artistic Finishes",
    description: "Add character and depth to your walls with our designer painting services. From elegant textures to custom stencils, we create stunning accent features that make your space unique.",
    image: "/images/texture.jpg",
    features: [
      "Textured accent walls",
      "Stencil patterns and designs",
      "Metallic finishes",
      "Faux finishes",
      "Custom artistic designs",
      "Color matching expertise",
    ],
  },
]

const process = [
  {
    step: "01",
    title: "Consultation",
    description: "We visit your space, discuss your vision, and provide expert color recommendations.",
  },
  {
    step: "02",
    title: "Quote",
    description: "Receive a detailed, transparent quote with no hidden costs or surprises.",
  },
  {
    step: "03",
    title: "Preparation",
    description: "We protect your furniture and prepare surfaces for a flawless finish.",
  },
  {
    step: "04",
    title: "Execution",
    description: "Our skilled team completes the work with precision and attention to detail.",
  },
  {
    step: "05",
    title: "Inspection",
    description: "Final walkthrough to ensure every detail meets our high standards.",
  },
]

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Our Services
            </p>
            <h1 className="mt-2 font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Complete Painting Solutions
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              From residential homes to commercial buildings, we offer comprehensive painting 
              services tailored to your specific needs. Quality materials, expert craftsmanship, 
              and customer satisfaction guaranteed.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-32">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid gap-12 lg:grid-cols-2 lg:gap-16 items-center scroll-mt-24 ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <p className="text-sm font-medium uppercase tracking-widest text-accent">
                    {service.subtitle}
                  </p>
                  <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-accent shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-8">
                    <Button asChild>
                      <Link href="/contact">Get a Quote</Link>
                    </Button>
                  </div>
                </div>
                
                <div className={`relative aspect-[4/3] ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Our Process
            </p>
            <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              How We Work
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              A transparent, streamlined process designed to deliver exceptional results.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {process.map((item) => (
              <Card key={item.step} className="border-0 shadow-sm text-center">
                <CardContent className="p-6">
                  <span className="font-serif text-4xl font-bold text-border">
                    {item.step}
                  </span>
                  <h3 className="mt-4 font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-foreground">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            Ready to Start Your Project?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Contact us today for a free consultation and detailed quote.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90">
              <Link href="/contact">Get Free Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              <a href="tel:+919158800517" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                +91 9158800517
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
