// import { ExternalLink } from "lucide-react";
// import { Card } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import Navigation from "@/components/Navigation";
// import Footer from "@/components/Footer";

// const Portfolio = () => {
//   const projects = [
//     {
//       title: "E-Commerce Platform",
//       category: "Website",
//       description: "A modern e-commerce solution with seamless checkout and inventory management.",
//       tags: ["React", "Node.js", "Stripe"],
//     },
//     {
//       title: "Fitness Tracking App",
//       category: "Mobile App",
//       description: "Cross-platform mobile app for tracking workouts and nutrition.",
//       tags: ["React Native", "Firebase", "iOS/Android"],
//     },
//     {
//       title: "Brand Identity Package",
//       category: "Branding",
//       description: "Complete brand identity including logo, color scheme, and marketing materials.",
//       tags: ["Brand Design", "Logo", "Marketing"],
//     },
//     {
//       title: "Real Estate Portal",
//       category: "Website",
//       description: "Property listing platform with advanced search and virtual tours.",
//       tags: ["Next.js", "PostgreSQL", "Maps API"],
//     },
//     {
//       title: "Food Delivery App",
//       category: "Mobile App",
//       description: "On-demand food delivery service with real-time tracking.",
//       tags: ["Flutter", "Google Maps", "Payment Gateway"],
//     },
//     {
//       title: "Corporate Video",
//       category: "Video",
//       description: "Professional corporate video showcasing company culture and values.",
//       tags: ["Video Production", "Motion Graphics", "Editing"],
//     },
//     {
//       title: "SaaS Dashboard",
//       category: "Website",
//       description: "Analytics dashboard for business intelligence and data visualization.",
//       tags: ["React", "D3.js", "API Integration"],
//     },
//     {
//       title: "Social Networking App",
//       category: "Mobile App",
//       description: "Community platform connecting users with shared interests.",
//       tags: ["Native", "Chat", "Social Features"],
//     },
//     {
//       title: "Product Launch Campaign",
//       category: "Video",
//       description: "Engaging video campaign for new product launch across social media.",
//       tags: ["Animation", "Social Media", "Marketing"],
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
//               Our <span className="bg-gradient-primary bg-clip-text text-transparent">Portfolio</span>
//             </h1>
//             <p className="text-xl text-muted-foreground">
//               Explore our successful projects and see how we've helped businesses achieve their digital goals.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Portfolio Grid */}
//       <section className="py-20 px-4">
//         <div className="container mx-auto">
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {projects.map((project, index) => (
//               <Card key={index} className="overflow-hidden group hover:shadow-elegant transition-smooth">
//                 <div className="aspect-video bg-gradient-primary relative overflow-hidden">
//                   <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-smooth" />
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <ExternalLink className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-smooth" />
//                   </div>
//                 </div>
//                 <div className="p-6">
//                   <div className="flex items-center justify-between mb-3">
//                     <h3 className="text-xl font-semibold">{project.title}</h3>
//                     <Badge variant="secondary">{project.category}</Badge>
//                   </div>
//                   <p className="text-muted-foreground mb-4 text-sm">
//                     {project.description}
//                   </p>
//                   <div className="flex flex-wrap gap-2">
//                     {project.tags.map((tag, idx) => (
//                       <Badge key={idx} variant="outline" className="text-xs">
//                         {tag}
//                       </Badge>
//                     ))}
//                   </div>
//                 </div>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default Portfolio;


import { ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Store",
      category: "E-Commerce Website",
      description:
        "A modern e-commerce platform with secure payments, product management, and smooth checkout experience.",
      tags: ["React", "Node.js", "Payment Gateway", "Admin Panel"],
      image:
        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80",
      link: "https://heven.in.net",
    },
    {
      title: "Photoshoot Portfolio",
      category: "Photography Website",
      description:
        "A visually rich portfolio website showcasing professional photoshoots with gallery and booking features.",
      tags: ["Portfolio", "Gallery", "UI/UX", "Responsive Design"],
      image:
        "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=1200&q=80",
      link: "https://pixora.in.net",
    },
    {
      title: "Clothing Brand Website",
      category: "Fashion Website",
      description:
        "A stylish clothing brand website with product collections, lookbooks, and brand storytelling.",
      tags: ["Fashion", "Branding", "E-Commerce", "Modern UI"],
      image:
        "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=80",
      link: "https://example-clothingbrand.com",
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
                Portfolio
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              A glimpse of our work in e-commerce, fashion, and visual branding.
            </p>
          </div>
        </div>
      </section>

      {/* ================= PORTFOLIO GRID ================= */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="overflow-hidden hover:shadow-elegant transition-smooth cursor-pointer h-full">
                  {/* Image */}
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center">
                      <ExternalLink className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold">
                        {project.title}
                      </h3>
                      <Badge variant="secondary">
                        {project.category}
                      </Badge>
                    </div>

                    <p className="text-muted-foreground mb-4 text-sm">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, idx) => (
                        <Badge
                          key={idx}
                          variant="outline"
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
