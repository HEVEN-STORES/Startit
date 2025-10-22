import { ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Website",
      description: "A modern e-commerce solution with seamless checkout and inventory management.",
      tags: ["React", "Node.js", "Stripe"],
    },
    {
      title: "Fitness Tracking App",
      category: "Mobile App",
      description: "Cross-platform mobile app for tracking workouts and nutrition.",
      tags: ["React Native", "Firebase", "iOS/Android"],
    },
    {
      title: "Brand Identity Package",
      category: "Branding",
      description: "Complete brand identity including logo, color scheme, and marketing materials.",
      tags: ["Brand Design", "Logo", "Marketing"],
    },
    {
      title: "Real Estate Portal",
      category: "Website",
      description: "Property listing platform with advanced search and virtual tours.",
      tags: ["Next.js", "PostgreSQL", "Maps API"],
    },
    {
      title: "Food Delivery App",
      category: "Mobile App",
      description: "On-demand food delivery service with real-time tracking.",
      tags: ["Flutter", "Google Maps", "Payment Gateway"],
    },
    {
      title: "Corporate Video",
      category: "Video",
      description: "Professional corporate video showcasing company culture and values.",
      tags: ["Video Production", "Motion Graphics", "Editing"],
    },
    {
      title: "SaaS Dashboard",
      category: "Website",
      description: "Analytics dashboard for business intelligence and data visualization.",
      tags: ["React", "D3.js", "API Integration"],
    },
    {
      title: "Social Networking App",
      category: "Mobile App",
      description: "Community platform connecting users with shared interests.",
      tags: ["Native", "Chat", "Social Features"],
    },
    {
      title: "Product Launch Campaign",
      category: "Video",
      description: "Engaging video campaign for new product launch across social media.",
      tags: ["Animation", "Social Media", "Marketing"],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-subtle">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="bg-gradient-primary bg-clip-text text-transparent">Portfolio</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Explore our successful projects and see how we've helped businesses achieve their digital goals.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-elegant transition-smooth">
                <div className="aspect-video bg-gradient-primary relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-smooth" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ExternalLink className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-smooth" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <Badge variant="secondary">{project.category}</Badge>
                  </div>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
