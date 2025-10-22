import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const FAQ = () => {
  const faqs = [
    {
      question: "What services does Startit Technologies offer?",
      answer: "We specialize in three main areas: Website Development, Mobile App Development, and Video Editing & Branding. Each service comes in Lite, Standard, and Pro packages to suit different business needs and budgets.",
    },
    {
      question: "How long does it take to complete a project?",
      answer: "Project timelines vary based on complexity and package level. Typically, website projects take 2-8 weeks, mobile apps take 6-16 weeks, and video projects take 1-4 weeks. We'll provide a detailed timeline during our initial consultation.",
    },
    {
      question: "What is included in the different package tiers?",
      answer: "Our Lite packages are perfect for startups with essential features. Standard packages add more functionality and are ideal for growing businesses. Pro packages offer comprehensive solutions with unlimited revisions, priority support, and advanced features for enterprises.",
    },
    {
      question: "Do you offer ongoing support and maintenance?",
      answer: "Yes! All our Pro packages include ongoing support. For Lite and Standard packages, we offer optional maintenance plans that can be added after project completion. This includes updates, bug fixes, and technical support.",
    },
    {
      question: "Can you help with hosting and domain setup?",
      answer: "Absolutely! We can handle all technical aspects including domain registration, hosting setup, SSL certificates, and email configuration. We'll recommend the best hosting solutions based on your project requirements.",
    },
    {
      question: "What technologies do you use for development?",
      answer: "We use modern, industry-standard technologies including React, Next.js for websites, React Native and Flutter for mobile apps, and professional video editing software like Adobe Premiere Pro and After Effects for video projects.",
    },
    {
      question: "Do you provide SEO services?",
      answer: "Yes! All our website packages include SEO optimization. Basic SEO is included in Lite packages, while Standard and Pro packages offer advanced SEO features including keyword research, on-page optimization, and analytics setup.",
    },
    {
      question: "Can I upgrade my package after starting the project?",
      answer: "Yes, you can upgrade your package at any time during development. We'll adjust the timeline and provide updated pricing for the additional features and services included in the higher tier.",
    },
    {
      question: "What is your payment structure?",
      answer: "We typically require a 50% deposit to begin work, with the remaining 50% due upon project completion. For larger projects, we can arrange milestone-based payments. All payment terms will be clearly outlined in your project contract.",
    },
    {
      question: "Do you sign NDAs and protect client confidentiality?",
      answer: "Yes, we take confidentiality very seriously. We're happy to sign non-disclosure agreements (NDAs) and all client information is kept strictly confidential. Your intellectual property rights are fully protected.",
    },
    {
      question: "What happens if I'm not satisfied with the final product?",
      answer: "Client satisfaction is our priority. Each package includes multiple revision rounds. We work closely with you throughout the development process to ensure the final product meets your expectations. Our goal is to exceed your expectations, not just meet them.",
    },
    {
      question: "Do you work with international clients?",
      answer: "Yes! We work with clients worldwide. We use modern collaboration tools and maintain clear communication across time zones to ensure smooth project execution regardless of your location.",
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
              Frequently Asked <span className="bg-gradient-primary bg-clip-text text-transparent">Questions</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Find answers to common questions about our services, packages, and processes.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border rounded-lg px-6 bg-card shadow-soft"
              >
                <AccordionTrigger className="text-left hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
