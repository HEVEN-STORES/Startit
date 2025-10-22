import { Check, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Packages = () => {
  const websitePackages = [
    {
      name: "Lite",
      price: "$999",
      description: "Perfect for small businesses and startups",
      features: [
        { text: "Up to 5 pages", included: true },
        { text: "Responsive design", included: true },
        { text: "Basic SEO", included: true },
        { text: "Contact form", included: true },
        { text: "2 rounds of revisions", included: true },
        { text: "E-commerce integration", included: false },
        { text: "Advanced analytics", included: false },
        { text: "Priority support", included: false },
      ],
      delivery: "2-3 weeks",
    },
    {
      name: "Standard",
      price: "$2,499",
      description: "Ideal for growing businesses",
      features: [
        { text: "Up to 10 pages", included: true },
        { text: "Responsive design", included: true },
        { text: "Advanced SEO", included: true },
        { text: "Contact form", included: true },
        { text: "4 rounds of revisions", included: true },
        { text: "Basic e-commerce", included: true },
        { text: "Google Analytics", included: true },
        { text: "Priority support", included: false },
      ],
      delivery: "4-6 weeks",
      popular: true,
    },
    {
      name: "Pro",
      price: "$4,999",
      description: "Complete solution for enterprises",
      features: [
        { text: "Unlimited pages", included: true },
        { text: "Responsive design", included: true },
        { text: "Premium SEO", included: true },
        { text: "Advanced forms", included: true },
        { text: "Unlimited revisions", included: true },
        { text: "Full e-commerce", included: true },
        { text: "Advanced analytics", included: true },
        { text: "Priority support", included: true },
      ],
      delivery: "6-8 weeks",
    },
  ];

  const appPackages = [
    {
      name: "Lite",
      price: "$4,999",
      description: "Essential app for startups",
      features: [
        { text: "Single platform (iOS or Android)", included: true },
        { text: "Up to 5 screens", included: true },
        { text: "Basic UI/UX design", included: true },
        { text: "User authentication", included: true },
        { text: "App Store submission", included: true },
        { text: "Push notifications", included: false },
        { text: "Backend integration", included: false },
        { text: "Ongoing maintenance", included: false },
      ],
      delivery: "6-8 weeks",
    },
    {
      name: "Standard",
      price: "$9,999",
      description: "Feature-rich mobile solution",
      features: [
        { text: "Both iOS and Android", included: true },
        { text: "Up to 10 screens", included: true },
        { text: "Custom UI/UX design", included: true },
        { text: "User authentication", included: true },
        { text: "App Store submission", included: true },
        { text: "Push notifications", included: true },
        { text: "Basic backend", included: true },
        { text: "3 months support", included: true },
      ],
      delivery: "10-12 weeks",
      popular: true,
    },
    {
      name: "Pro",
      price: "$19,999",
      description: "Enterprise-grade application",
      features: [
        { text: "Both iOS and Android", included: true },
        { text: "Unlimited screens", included: true },
        { text: "Premium UI/UX design", included: true },
        { text: "Advanced authentication", included: true },
        { text: "App Store optimization", included: true },
        { text: "Advanced notifications", included: true },
        { text: "Full backend system", included: true },
        { text: "12 months support", included: true },
      ],
      delivery: "12-16 weeks",
    },
  ];

  const videoPackages = [
    {
      name: "Lite",
      price: "$499",
      description: "Basic video editing services",
      features: [
        { text: "Up to 2 minutes video", included: true },
        { text: "Basic editing", included: true },
        { text: "Music & sound effects", included: true },
        { text: "HD export", included: true },
        { text: "2 rounds of revisions", included: true },
        { text: "Motion graphics", included: false },
        { text: "Custom animations", included: false },
        { text: "Brand identity", included: false },
      ],
      delivery: "1 week",
    },
    {
      name: "Standard",
      price: "$1,499",
      description: "Professional video production",
      features: [
        { text: "Up to 5 minutes video", included: true },
        { text: "Professional editing", included: true },
        { text: "Licensed music", included: true },
        { text: "4K export", included: true },
        { text: "4 rounds of revisions", included: true },
        { text: "Basic motion graphics", included: true },
        { text: "Color grading", included: true },
        { text: "Logo design", included: true },
      ],
      delivery: "2 weeks",
      popular: true,
    },
    {
      name: "Pro",
      price: "$3,999",
      description: "Complete branding & video suite",
      features: [
        { text: "Unlimited duration", included: true },
        { text: "Premium editing", included: true },
        { text: "Custom soundtrack", included: true },
        { text: "8K export", included: true },
        { text: "Unlimited revisions", included: true },
        { text: "Advanced motion graphics", included: true },
        { text: "Full color grading", included: true },
        { text: "Complete brand identity", included: true },
      ],
      delivery: "3-4 weeks",
    },
  ];

  const PackageCard = ({ pkg }: { pkg: any }) => (
    <Card className={`p-8 relative ${pkg.popular ? "border-2 border-primary shadow-elegant" : ""}`}>
      {pkg.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-primary text-white px-4 py-1 rounded-full text-sm font-medium">
          Most Popular
        </div>
      )}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
        <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
          {pkg.price}
        </div>
        <p className="text-sm text-muted-foreground">{pkg.description}</p>
      </div>
      <ul className="space-y-3 mb-8">
        {pkg.features.map((feature: any, idx: number) => (
          <li key={idx} className="flex items-start gap-2">
            {feature.included ? (
              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            ) : (
              <X className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
            )}
            <span className={!feature.included ? "text-muted-foreground" : ""}>
              {feature.text}
            </span>
          </li>
        ))}
      </ul>
      <div className="text-center mb-6">
        <p className="text-sm text-muted-foreground">Delivery: {pkg.delivery}</p>
      </div>
      <Link to="/contact">
        <Button className={`w-full ${pkg.popular ? "bg-gradient-primary hover:opacity-90 text-white" : ""}`}>
          Get Started
        </Button>
      </Link>
    </Card>
  );

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-subtle">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Choose Your <span className="bg-gradient-primary bg-clip-text text-transparent">Package</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Flexible pricing plans designed to fit businesses of all sizes
            </p>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <Tabs defaultValue="website" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
              <TabsTrigger value="website">Website</TabsTrigger>
              <TabsTrigger value="app">Mobile App</TabsTrigger>
              <TabsTrigger value="video">Video</TabsTrigger>
            </TabsList>

            <TabsContent value="website">
              <div className="grid md:grid-cols-3 gap-8">
                {websitePackages.map((pkg, index) => (
                  <PackageCard key={index} pkg={pkg} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="app">
              <div className="grid md:grid-cols-3 gap-8">
                {appPackages.map((pkg, index) => (
                  <PackageCard key={index} pkg={pkg} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="video">
              <div className="grid md:grid-cols-3 gap-8">
                {videoPackages.map((pkg, index) => (
                  <PackageCard key={index} pkg={pkg} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Packages;
