// import { Code, Smartphone, Video, CheckCircle, ArrowRight } from "lucide-react";
// import { Link } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import Navigation from "@/components/Navigation";
// import Footer from "@/components/Footer";

// const Services = () => {
//   const services = [
//     {
//       icon: Code,
//       title: "Website Development",
//       description: "Create a powerful online presence with our professional website development services.",
//       features: [
//         "Custom responsive design",
//         "SEO optimization",
//         "Content management systems",
//         "E-commerce integration",
//         "Performance optimization",
//         "Ongoing maintenance & support",
//       ],
//       packages: ["Lite", "Standard", "Pro"],
//     },
//     {
//       icon: Smartphone,
//       title: "Mobile App Development",
//       description: "Bring your ideas to life with native and cross-platform mobile applications.",
//       features: [
//         "iOS & Android development",
//         "User-friendly interface design",
//         "Cloud backend integration",
//         "Push notifications",
//         "In-app purchases",
//         "App Store submission",
//       ],
//       packages: ["Lite", "Standard", "Pro"],
//     },
//     {
//       icon: Video,
//       title: "Video Editing & Branding",
//       description: "Professional video production and branding services that make your business stand out.",
//       features: [
//         "Professional video editing",
//         "Brand identity design",
//         "Motion graphics & animation",
//         "Social media content",
//         "Marketing materials",
//         "Logo & visual identity",
//       ],
//       packages: ["Lite", "Standard", "Pro"],
//     },
//   ];

//   return (
//     <div className="min-h-screen">
//       <Navigation />

//       {/* Hero Section */}
//       <section className="pt-32 pb-20 px-4 bg-gradient-subtle">
//         <div className="container mx-auto">
//           <div className="max-w-3xl mx-auto text-center">
//             <h1 className="text-5xl md:text-6xl font-bold mb-6">
//               Our <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
//             </h1>
//             <p className="text-xl text-muted-foreground">
//               Comprehensive digital solutions designed to help your business grow and succeed online.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Services Detail */}
//       <section className="py-20 px-4">
//         <div className="container mx-auto space-y-20">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className={`grid md:grid-cols-2 gap-12 items-center ${
//                 index % 2 === 1 ? "md:flex-row-reverse" : ""
//               }`}
//             >
//               <Card className="p-8 md:p-12 shadow-soft">
//                 <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center mb-6">
//                   <service.icon className="w-8 h-8 text-white" />
//                 </div>
//                 <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
//                 <p className="text-muted-foreground mb-6">{service.description}</p>
//                 <div className="space-y-3 mb-8">
//                   {service.features.map((feature, idx) => (
//                     <div key={idx} className="flex items-start gap-3">
//                       <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
//                       <span>{feature}</span>
//                     </div>
//                   ))}
//                 </div>
//                 <Link to="/packages">
//                   <Button className="bg-gradient-primary hover:opacity-90 gap-2 text-white">
//                     View Packages <ArrowRight className="w-4 h-4" />
//                   </Button>
//                 </Link>
//               </Card>

//               <div className={`${index % 2 === 1 ? "md:order-first" : ""}`}>
//                 <div className="aspect-square bg-gradient-primary rounded-2xl shadow-elegant" />
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-20 px-4 bg-gradient-hero">
//         <div className="container mx-auto text-center">
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
//             Not Sure Which Service You Need?
//           </h2>
//           <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
//             Let's discuss your project and find the perfect solution for your business needs.
//           </p>
//           <Link to="/contact">
//             <Button size="lg" variant="secondary" className="gap-2">
//               Contact Us <ArrowRight className="w-5 h-5" />
//             </Button>
//           </Link>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default Services;


import { Code, Smartphone, Video, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Website Development",
      description:
        "Create a powerful online presence with our professional website development services.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
      features: [
        "Custom responsive design",
        "SEO optimization",
        "Content management systems",
        "E-commerce integration",
        "Performance optimization",
        "Ongoing maintenance & support",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Bring your ideas to life with native and cross-platform mobile applications.",
      image:
        "https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=1200&q=80",
      features: [
        "iOS & Android development",
        "User-friendly interface design",
        "Cloud backend integration",
        "Push notifications",
        "In-app purchases",
        "App Store submission",
      ],
    },
    {
      icon: Video,
      title: "Video Editing & Branding",
      description:
        "Professional video production and branding services that make your business stand out.",
      image:
        "https://images.unsplash.com/photo-1601506521793-dc748fc80b67?auto=format&fit=crop&w=1200&q=80",
      features: [
        "Professional video editing",
        "Brand identity design",
        "Motion graphics & animation",
        "Social media content",
        "Marketing materials",
        "Logo & visual identity",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* ================= HERO ================= */}
      <section className="pt-32 pb-20 px-4 bg-gradient-subtle">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive digital solutions designed to help your business
              grow and succeed online.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-20 px-4">
        <div className="container mx-auto space-y-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              {/* Text Card */}
              <Card className="p-8 md:p-12 shadow-soft">
                <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h2 className="text-3xl font-bold mb-4">
                  {service.title}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>

                <div className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <Link to="/packages">
                  <Button className="bg-gradient-primary text-white gap-2 hover:opacity-90">
                    View Packages <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </Card>

              {/* Image */}
              <div
                className={`${
                  index % 2 === 1 ? "md:order-first" : ""
                }`}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="aspect-square w-full object-cover rounded-2xl shadow-elegant transition-transform duration-300 hover:scale-[1.02]"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 px-4 bg-gradient-hero">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and find the perfect solution for your
            business needs.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="gap-2">
              Contact Us <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
