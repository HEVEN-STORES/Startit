import { Target, Eye, Users, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To empower businesses with innovative digital solutions that drive growth and success.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "To be the leading provider of digital services, setting industry standards for quality and innovation.",
    },
    {
      icon: Users,
      title: "Our Team",
      description: "A passionate group of developers, designers, and strategists dedicated to your success.",
    },
    {
      icon: Award,
      title: "Our Values",
      description: "Quality, integrity, innovation, and customer satisfaction guide everything we do.",
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
              About <span className="bg-gradient-primary bg-clip-text text-transparent">Startit Technologies</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              We're a team of passionate professionals dedicated to helping businesses succeed in the digital world.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded with a vision to democratize access to professional digital services, Startit Technologies has been helping businesses of all sizes achieve their online goals.
                </p>
                <p>
                  With over 5 years of experience and 150+ successful projects, we've built a reputation for delivering high-quality, innovative solutions that drive real business results.
                </p>
                <p>
                  Our team combines technical expertise with creative thinking to deliver solutions that not only meet but exceed our clients' expectations.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video bg-gradient-primary rounded-2xl shadow-elegant" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-elegant transition-smooth">
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location Map */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Visit Our Office</h2>
            <p className="text-xl text-muted-foreground">
              123 Tech Street, Innovation City, TC 12345
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video bg-muted rounded-2xl shadow-soft flex items-center justify-center">
              <p className="text-muted-foreground">
                Google Maps integration will be added here
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
