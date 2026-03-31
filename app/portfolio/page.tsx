"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { cn } from "@/lib/utils"

const categories = [
  { id: "all", name: "All Projects" },
  { id: "residential", name: "Residential" },
  { id: "commercial", name: "Commercial" },
  { id: "exterior", name: "Exterior" },
  { id: "designer", name: "Designer" },
]

const projects = [
  {
    id: 1,
    title: "Modern Living Room",
    category: "residential",
    location: "Andheri West",
    image: "/images/residential.jpg",
    description: "Complete interior transformation with warm neutral tones",
  },
  {
    id: 2,
    title: "Master Bedroom Suite",
    category: "residential",
    location: "Bandra",
    image: "/images/portfolio-bedroom.jpg",
    description: "Elegant grey palette creating a serene atmosphere",
  },
  {
    id: 3,
    title: "Corporate Office",
    category: "commercial",
    location: "Lower Parel",
    image: "/images/commercial.jpg",
    description: "Professional office space with clean white finish",
  },
  {
    id: 4,
    title: "Tech Startup Office",
    category: "commercial",
    location: "Powai",
    image: "/images/portfolio-office.jpg",
    description: "Modern open-plan workspace transformation",
  },
  {
    id: 5,
    title: "Residential Building",
    category: "exterior",
    location: "Juhu",
    image: "/images/exterior.jpg",
    description: "Full exterior repaint with weather-resistant finish",
  },
  {
    id: 6,
    title: "Apartment Complex",
    category: "exterior",
    location: "Malad",
    image: "/images/portfolio-building.jpg",
    description: "Large-scale exterior project with waterproofing",
  },
  {
    id: 7,
    title: "Textured Feature Wall",
    category: "designer",
    location: "Worli",
    image: "/images/texture.jpg",
    description: "Custom textured accent wall with metallic finish",
  },
  {
    id: 8,
    title: "Artistic Accent Wall",
    category: "designer",
    location: "Khar",
    image: "/images/portfolio-accent.jpg",
    description: "Designer textured wall with warm earth tones",
  },
]

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter((project) => project.category === activeCategory)

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Our Work
            </p>
            <h1 className="mt-2 font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Portfolio
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Explore our collection of completed projects across Mumbai. From cozy homes 
              to corporate offices, each project showcases our commitment to quality and 
              attention to detail.
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Gallery */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "px-6 py-2 text-sm font-medium rounded-full transition-colors",
                  activeCategory === category.id
                    ? "bg-foreground text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-border"
                )}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/70 transition-colors duration-300" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs font-medium uppercase tracking-wider text-primary-foreground/70">
                    {project.location}
                  </span>
                  <h3 className="mt-1 text-lg font-semibold text-primary-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-primary-foreground/80">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-24 grid grid-cols-2 gap-8 md:grid-cols-4 border-t border-border pt-12">
            <div className="text-center">
              <p className="font-serif text-4xl font-bold text-foreground">500+</p>
              <p className="mt-1 text-sm text-muted-foreground">Projects Completed</p>
            </div>
            <div className="text-center">
              <p className="font-serif text-4xl font-bold text-foreground">10+</p>
              <p className="mt-1 text-sm text-muted-foreground">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="font-serif text-4xl font-bold text-foreground">100%</p>
              <p className="mt-1 text-sm text-muted-foreground">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <p className="font-serif text-4xl font-bold text-foreground">5.0</p>
              <p className="mt-1 text-sm text-muted-foreground">Star Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-foreground">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            Like What You See?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Let us transform your space next. Get in touch for a free consultation.
          </p>
          <div className="mt-10">
            <Button asChild size="lg" className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90">
              <Link href="/contact">Start Your Project</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
