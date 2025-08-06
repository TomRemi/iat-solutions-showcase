import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Play, ArrowRight, Users, Shield, GraduationCap } from "lucide-react";
import { useState } from "react";
import crmImage from "@/assets/crm-product.jpg";
import qmsImage from "@/assets/qms-product.jpg";
import lmsImage from "@/assets/lms-product.jpg";

const ProductCarousel = () => {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const products = [
    {
      id: "crm",
      name: "CRM",
      title: "Customer Relationship Management",
      description: "Streamline your sales process and manage customer relationships effectively",
      image: crmImage,
      icon: Users,
      details: {
        what: "A comprehensive customer management solution that centralizes all customer interactions, sales pipelines, and relationship data in one powerful platform.",
        for: "Sales teams, marketing departments, and customer service representatives who want to improve customer relationships and boost revenue.",
        why: "Increase sales conversion rates by 30%, improve customer retention, and gain valuable insights into customer behavior and preferences."
      },
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Placeholder
    },
    {
      id: "qms",
      name: "QMS",
      title: "Quality Management System",
      description: "Ensure compliance and maintain quality standards across your organization",
      image: qmsImage,
      icon: Shield,
      details: {
        what: "A robust quality management system that helps organizations maintain compliance, track quality metrics, and implement continuous improvement processes.",
        for: "Manufacturing companies, healthcare organizations, and any business that needs to maintain strict quality standards and regulatory compliance.",
        why: "Reduce quality-related costs by 40%, ensure regulatory compliance, and build customer trust through consistent quality delivery."
      },
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Placeholder
    },
    {
      id: "lms",
      name: "LMS",
      title: "Learning Management System",
      description: "Deliver effective training and development programs for your workforce",
      image: lmsImage,
      icon: GraduationCap,
      details: {
        what: "A modern learning management system that enables organizations to create, deliver, and track training programs and educational content efficiently.",
        for: "HR departments, training managers, and educational institutions looking to provide scalable and engaging learning experiences.",
        why: "Improve employee skills by 50%, reduce training costs, and ensure consistent knowledge transfer across your organization."
      },
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Placeholder
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="products" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Explore Our Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our comprehensive suite of software solutions designed to transform your business operations
          </p>
        </div>

        {/* Horizontal Scrollable Product Cards */}
        <div className="overflow-x-auto pb-6">
          <div className="flex space-x-6 min-w-max">
            {products.map((product, index) => {
              const IconComponent = product.icon;
              return (
                <Card 
                  key={product.id} 
                  className="flex-shrink-0 w-80 bg-gradient-card border-border hover:shadow-glow transition-all duration-300 hover:-translate-y-2 group"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="p-6">
                    {/* Product Image */}
                    <div className="relative mb-6 overflow-hidden rounded-lg">
                      <img 
                        src={product.image} 
                        alt={product.title}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button 
                              size="lg" 
                              className="bg-primary/90 hover:bg-primary text-primary-foreground"
                              onClick={() => setSelectedProduct(product.id)}
                            >
                              <Play className="mr-2 h-5 w-5" />
                              Watch Demo
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl bg-card border-border">
                            <DialogHeader>
                              <DialogTitle className="text-card-foreground">{product.title} Demo</DialogTitle>
                            </DialogHeader>
                            <div className="aspect-video">
                              <iframe
                                src={product.videoUrl}
                                className="w-full h-full rounded-lg"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                              />
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="flex items-center mb-4">
                      <IconComponent className="h-8 w-8 text-primary mr-3" />
                      <div>
                        <h3 className="text-2xl font-bold text-card-foreground">{product.name}</h3>
                        <p className="text-sm text-muted-foreground">{product.title}</p>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Product Details */}
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="font-semibold text-card-foreground mb-2">What it does:</h4>
                        <p className="text-sm text-muted-foreground">{product.details.what}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-card-foreground mb-2">Who it's for:</h4>
                        <p className="text-sm text-muted-foreground">{product.details.for}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-card-foreground mb-2">Why it matters:</h4>
                        <p className="text-sm text-muted-foreground">{product.details.why}</p>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Button 
                      onClick={scrollToContact}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                    >
                      Request Demo
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="text-center mt-8">
          <p className="text-muted-foreground text-sm">
            <span className="hidden md:inline">Scroll horizontally to explore all products</span>
            <span className="md:hidden">Swipe to explore all products</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;