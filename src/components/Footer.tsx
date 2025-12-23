import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-hero text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Startit Technologies</h3>
            <p className="text-white/80 mb-4">
              Professional digital solutions for startups and businesses. We transform ideas into reality.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary-glow transition-smooth">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary-glow transition-smooth">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary-glow transition-smooth">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-white/80 hover:text-white transition-smooth">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/80 hover:text-white transition-smooth">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/packages" className="text-white/80 hover:text-white transition-smooth">
                  Packages
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-white/80 hover:text-white transition-smooth">
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-white/80">Website Development</li>
              <li className="text-white/80">Mobile App Development</li>
              <li className="text-white/80">Video Editing</li>
              <li className="text-white/80">Branding Services</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span className="text-white/80">startittechnologies@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span className="text-white/80">+91 7993822718</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1" />
                <span className="text-white/80">
                  302 3rd Floor , Beerumguda Main Rd , Ramachandra Reddy Nagar , Hyderabad , Telangana - 502032
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/80">
            © {new Date().getFullYear()} Startit Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
