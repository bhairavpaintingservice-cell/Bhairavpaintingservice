import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Heart, Award, Users } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Bhavirav Painting Service",
  description: "Learn about Bhavirav Painting Service - Mumbai's trusted painting professionals with 10+ years of experience transforming homes and offices.",
}

const values = [
  {
    icon: Target,
    title: "Quality First",
    description: "We never compromise on quality. Only premium paints and materials are used in every project.",
  },
  {
    icon: Heart,
    title: "Customer Focus",
    description: "Your satisfaction is our priority. We listen, adapt, and deliver beyond expectations.",
  },
  {
    icon: Award,
    title: "Professionalism",
    description: "From timely arrivals to clean workspaces, we maintain the highest professional standards.",
  },
  {
    icon: Users,
    title: "Team Excellence",
    description: "Our skilled painters bring years of experience and dedication to every brushstroke.",
  },
]

const milestones = [
  { year: "2015", title: "Founded", description: "Started with a vision to transform Mumbai spaces" },
  { year: "2017", title: "100 Projects", description: "Reached our first major milestone" },
  { year: "2020", title: "Expanded Team", description: "Grew our team of skilled professionals" },
  { year: "2023", title: "500+ Customers", description: "Serving happy customers across Mumbai" },
]

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              About Us
            </p>
            <h1 className="mt-2 font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Our Story
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Founded in 2015, Bhavirav Painting Service was born from a simple vision: 
              to make professional painting services accessible, reliable, and stress-free 
              for every home and business in Mumbai.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="relative aspect-[4/3] lg:aspect-square">
              <Image
                src="/images/founder.jpg"
                alt="Bhavirav - Founder"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            
            <div>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Meet Our Founder
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Bhavirav started his journey as a painter over 10 years ago, learning the 
                craft from experienced masters and developing an eye for detail that sets 
                his work apart.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                What began as individual projects soon grew through word-of-mouth 
                recommendations from satisfied customers. Today, Bhavirav leads a team of 
                skilled professionals who share his passion for transforming spaces and 
                exceeding customer expectations.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                &ldquo;Every wall tells a story. Our job is to help you write yours with the 
                perfect colors and finishes.&rdquo;
              </p>
              <p className="mt-4 font-semibold text-foreground">
                — Bhavirav, Founder & Lead Painter
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-foreground">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary-foreground/70">
            Our Mission
          </p>
          <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl max-w-4xl mx-auto text-balance">
            To transform spaces into lasting works of art that inspire and delight
          </h2>
          <p className="mt-6 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            We believe that great painting goes beyond color. It&apos;s about understanding 
            your vision and bringing it to life with skill, care, and attention to detail.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Our Values
            </p>
            <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What We Stand For
            </h2>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <Card key={value.title} className="border-0 shadow-sm text-center">
                <CardContent className="p-8">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-foreground">
                    <value.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h3 className="mt-6 font-semibold text-foreground">{value.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                Our Team
              </p>
              <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Skilled Professionals
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Our team consists of experienced painters who have been trained in various 
                techniques and finishes. Each member shares our commitment to quality and 
                customer satisfaction.
              </p>
              <ul className="mt-8 space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-accent shrink-0" />
                  <span className="text-muted-foreground">Trained in latest painting techniques and finishes</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-accent shrink-0" />
                  <span className="text-muted-foreground">Professional conduct and clean workmanship</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-accent shrink-0" />
                  <span className="text-muted-foreground">Respectful of your home and belongings</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-accent shrink-0" />
                  <span className="text-muted-foreground">Committed to project timelines</span>
                </li>
              </ul>
            </div>
            
            <div className="relative aspect-[4/3] order-1 lg:order-2">
              <Image
                src="/images/team.jpg"
                alt="Our professional painting team"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Our Journey
            </p>
            <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Milestones
            </h2>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {milestones.map((milestone) => (
              <div key={milestone.year} className="text-center">
                <span className="font-serif text-5xl font-bold text-border">
                  {milestone.year}
                </span>
                <h3 className="mt-4 font-semibold text-foreground">{milestone.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-foreground">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            Ready to Work With Us?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Let&apos;s discuss your project and how we can help transform your space.
          </p>
          <div className="mt-10">
            <Button asChild size="lg" className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90">
              <Link href="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
