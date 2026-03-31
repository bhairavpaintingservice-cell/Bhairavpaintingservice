import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, CheckCircle, Star, Clock, Users, Award } from "lucide-react"

const services = [
  {
    title: "Residential Painting",
    description: "Transform your home with expert interior and exterior painting services.",
    image: "/images/residential.jpg",
    href: "/services#residential",
  },
  {
    title: "Commercial Painting",
    description: "Professional solutions for offices, shops, and commercial spaces.",
    image: "/images/commercial.jpg",
    href: "/services#commercial",
  },
  {
    title: "Exterior Painting",
    description: "Weather-resistant finishes for buildings and exterior surfaces.",
    image: "/images/exterior.jpg",
    href: "/services#building",
  },
  {
    title: "Textured Finishes",
    description: "Custom accent walls, stencils, and decorative painting.",
    image: "/images/texture.jpg",
    href: "/services#designer",
  },
]

const features = [
  {
    icon: Users,
    title: "Professional Team",
    description: "Skilled painters with years of experience",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "Top-grade paints and materials only",
  },
  {
    icon: Clock,
    title: "On-Time Completion",
    description: "We respect your time and deadlines",
  },
  {
    icon: CheckCircle,
    title: "100% Satisfaction",
    description: "Quality guarantee on every project",
  },
]

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Homeowner, Andheri",
    content: "Bhavirav and his team did an amazing job painting our entire apartment. The attention to detail was impressive, and they completed the work ahead of schedule!",
    rating: 5,
  },
  {
    name: "Rajesh Patel",
    role: "Business Owner, Bandra",
    content: "We hired them for our office renovation. Professional service, clean work, and the results exceeded our expectations. Highly recommend!",
    rating: 5,
  },
  {
    name: "Anita Desai",
    role: "Homeowner, Juhu",
    content: "The textured accent wall they created in our living room is absolutely stunning. True craftsmen who take pride in their work.",
    rating: 5,
  },
]

const stats = [
  { value: "500+", label: "Happy Customers" },
  { value: "10+", label: "Years Experience" },
  { value: "5.0", label: "Star Rating" },
  { value: "100%", label: "Satisfaction" },
]

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-painting.jpg"
            alt="Professional painting service"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-widest text-primary-foreground/80">
              Professional Painting Services in Mumbai
            </p>
            <h1 className="mt-4 font-serif text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl text-balance">
              Transforming Your Homes and Offices
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
              With over 10 years of experience, we bring your vision to life with precision, 
              quality, and care. From residential to commercial, we handle it all.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90">
                <Link href="/contact">Get a Free Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                <a href="tel:+919158800517" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-foreground py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-serif text-3xl font-bold text-primary-foreground sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-primary-foreground/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Our Services
            </p>
            <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Complete Painting Solutions
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              From homes to offices, we offer comprehensive painting services tailored to your needs.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Link key={service.title} href={service.href} className="group">
                <Card className="overflow-hidden border-0 shadow-sm transition-shadow hover:shadow-lg">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg" variant="outline">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                Why Choose Us
              </p>
              <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Excellence in Every Brushstroke
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                At Bhavirav Painting Service, we believe that great painting is more than just 
                applying color to walls. It&apos;s about understanding your vision, using the right 
                techniques, and delivering results that transform spaces.
              </p>
              
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {features.map((feature) => (
                  <div key={feature.title} className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-foreground">
                      <feature.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{feature.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative aspect-square lg:aspect-[4/5]">
              <Image
                src="/images/texture.jpg"
                alt="Quality painting work"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Testimonials
            </p>
            <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What Our Clients Say
            </h2>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="border-0 shadow-sm">
                <CardContent className="p-8">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="mt-6 text-muted-foreground leading-relaxed">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                  <div className="mt-6 border-t border-border pt-6">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
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
            Ready to Transform Your Space?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Get in touch today for a free consultation and quote. Let&apos;s bring your vision to life.
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
