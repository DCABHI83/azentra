import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: <Twitter size={20} />, href: '#' },
    { icon: <Github size={20} />, href: '#' },
    { icon: <Linkedin size={20} />, href: '#' },
    { icon: <Instagram size={20} />, href: '#' },
  ];

  return (
    <footer className="bg-black/20 border-t border-white/10 mt-24">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Brand */}
          <div className="col-span-1">
            <h3 className="text-2xl font-bold">Azentra<span className="text-brand-purple">.</span></h3>
            <p className="text-white/60 mt-4 text-sm">Elevating Digital Realities with cutting-edge design and technology.</p>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((link, index) => (
                <a key={index} href={link.href} className="text-white/60 hover:text-brand-purple transition-colors">
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-span-1">
            <h4 className="font-semibold text-white">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              <li><Link to="/about" className="text-white/60 hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link to="/services" className="text-white/60 hover:text-white transition-colors text-sm">Services</Link></li>
              <li><Link to="#" className="text-white/60 hover:text-white transition-colors text-sm">Projects</Link></li>
              <li><Link to="/contact" className="text-white/60 hover:text-white transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="col-span-1">
            <h4 className="font-semibold text-white">Services</h4>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Web Development</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">App Development</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">UI/UX Design</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">3D Modeling</a></li>
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div className="col-span-1">
            <h4 className="font-semibold text-white">Legal</h4>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-white/50 text-sm">&copy; {new Date().getFullYear()} Azentra Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
