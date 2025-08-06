import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Clock, Headphones } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-foreground">Transform Your Business with</span>
            <br />
            <span className="text-primary">Custom Software Solutions</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            IAT Technologies delivers cutting-edge CRM, QMS, and LMS systems that streamline operations, 
            boost productivity, and drive growth for forward-thinking businesses.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              onClick={() => scrollToSection('contact')}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 text-lg shadow-glow"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              onClick={() => scrollToSection('products')}
              variant="outline"
              size="lg"
              className="border-border hover:bg-card/50 text-foreground font-semibold px-8 py-4 text-lg"
            >
              Explore Products
            </Button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex items-center justify-center space-x-3 text-center">
              <Users className="h-8 w-8 text-primary" />
              <div>
                <div className="text-2xl md:text-3xl font-bold text-foreground">500+</div>
                <div className="text-muted-foreground">Satisfied Clients</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3 text-center">
              <Clock className="h-8 w-8 text-primary" />
              <div>
                <div className="text-2xl md:text-3xl font-bold text-foreground">10+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3 text-center">
              <Headphones className="h-8 w-8 text-primary" />
              <div>
                <div className="text-2xl md:text-3xl font-bold text-foreground">24/7</div>
                <div className="text-muted-foreground">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-transparent to-background/30 pointer-events-none" />
    </section>
  );
};

export default HeroSection;