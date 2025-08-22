import { Box, Zap, Printer, Rocket } from "lucide-react"
import { HeroButton } from "@/components/ui/hero-button"
import { ServiceCard } from "@/components/ServiceCard"
import { PortfolioCard } from "@/components/PortfolioCard"
import { ContactForm } from "@/components/ContactForm"

// Import portfolio images
import heroImage from "@/assets/hero-engineering.jpg"
import portfolioCad from "@/assets/portfolio-cad.jpg"
import portfolioSimulation from "@/assets/portfolio-simulation.jpg"
import portfolio3dPrint from "@/assets/portfolio-3dprint.jpg"
import portfolioPrototype from "@/assets/portfolio-prototype.jpg"

const Index = () => {
  const services = [
    {
      icon: Box,
      title: "3D CAD Engineering & Design",
      description: "Precision-driven mechanical design and 3D modeling for manufacturing and prototyping."
    },
    {
      icon: Zap,
      title: "Multiphysics CAE & Flow Simulation",
      description: "In-depth analysis using industry-leading software like Flow3D to validate and optimize performance before production."
    },
    {
      icon: Printer,
      title: "High-Strength 3D Printing",
      description: "Rapid manufacturing of functional prototypes and end-use parts using advanced materials like Carbon Fiber and Glass Fiber composites."
    },
    {
      icon: Rocket,
      title: "Rapid Prototyping & Development",
      description: "An integrated, fast-turnaround process to take your product from initial concept to a testable physical model."
    }
  ]

  const portfolioItems = [
    {
      image: portfolioCad,
      title: "Advanced Mechanical Assembly",
      description: "Complex multi-component CAD design for industrial automation equipment."
    },
    {
      image: portfolioSimulation,
      title: "Fluid Dynamics Analysis",
      description: "CFD simulation optimizing heat transfer performance in thermal management systems."
    },
    {
      image: portfolio3dPrint,
      title: "Carbon Fiber Components",
      description: "High-performance composite parts manufactured using advanced 3D printing techniques."
    },
    {
      image: portfolioPrototype,
      title: "Rapid Development Cycle",
      description: "Complete product development from concept sketches to functional prototypes."
    }
  ]

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 inset-x-0 z-20 bg-background/70 backdrop-blur border-b border-border">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <a href="/" className="inline-flex items-center gap-2" aria-label="Design Solutions Products">
            <img src="/lovable-uploads/f525230f-6aad-498a-b974-0038b1b9f273.png" alt="Design Solutions Products (DSP) logo" className="h-8 w-auto" loading="lazy" />
          </a>
        </div>
      </header>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-hero-gradient opacity-80" />
        </div>
        
        <div className="relative z-10 text-center text-primary-foreground px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Advanced Engineering
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light max-w-3xl mx-auto leading-relaxed animate-fade-in">
            We transform complex ideas into physical reality with expert design, simulation, and high-strength 3D printing.
          </p>
          <HeroButton
            onClick={() => scrollToSection("contact")}
            size="xl"
            className="animate-fade-in"
          >
            Discuss Your Project
          </HeroButton>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-tech-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Our Core Capabilities
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8">
              Your Remote Engineering Partner
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              We are a dedicated team of two experienced engineers specializing in bringing complex hardware ideas to life. 
              Working 100% remotely, we offer world-class design and simulation expertise to a global clientele.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-tech-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Featured Projects
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {portfolioItems.map((item, index) => (
              <PortfolioCard
                key={index}
                image={item.image}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Let's Build the Future.
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Have a complex challenge? We have the design solution. Reach out to us to start the conversation.
            </p>
          </div>
          
          <div className="flex justify-center">
            <ContactForm />
          </div>
          
          <div className="text-center mt-12">
            <p className="text-muted-foreground">
              Or reach us directly at:{" "}
              <a 
                href="mailto:rrss@dspve.com" 
                className="text-primary hover:text-primary-light transition-smooth font-medium"
              >
                rrss@dspve.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Index;
