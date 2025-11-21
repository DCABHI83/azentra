import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, PenTool, Bot, CheckCircle } from 'lucide-react';

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; description: string; }> = ({ icon, title, description }) => (
  <motion.div
    className="bg-white/5 p-8 rounded-lg border border-white/10"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5 }}
  >
    <div className="w-12 h-12 bg-brand-purple/20 text-brand-purple rounded-md flex items-center justify-center">
      {icon}
    </div>
    <h3 className="mt-4 text-2xl font-semibold">{title}</h3>
    <p className="mt-2 text-white/70">{description}</p>
  </motion.div>
);

const Services: React.FC = () => {
  const techStack = ['React', 'Python', 'Node.js', 'Three.js', 'Figma', 'AWS'];
  const whyChooseUs = [
    'Future-Proof Technology',
    'User-Centric Design Philosophy',
    'Transparent & Agile Process',
    'Dedicated Project Management',
    'Scalable & Secure Solutions',
    'Proven Track Record of Success',
  ];

  return (
    <div className="container mx-auto px-6 py-24">
      {/* Hero Section */}
      <motion.section
        className="text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter">Our Expertise</h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-white/70">
          We provide a comprehensive suite of digital services designed to elevate your brand and accelerate your growth from every angle.
        </p>
      </motion.section>

      {/* Service List */}
      <section className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-8">
        <ServiceCard 
          icon={<Code size={24} />} 
          title="Web Development" 
          description="We build high-performance, custom websites and web applications using the latest technologies. From corporate sites to complex e-commerce platforms, we deliver solutions that are fast, responsive, and secure."
        />
        <ServiceCard 
          icon={<Smartphone size={24} />} 
          title="App Development" 
          description="Engage your users on the go with native and cross-platform mobile apps. We handle the entire lifecycle, from ideation and design to development, testing, and App Store deployment."
        />
        <ServiceCard 
          icon={<PenTool size={24} />} 
          title="UI/UX & 3D Design" 
          description="Our design process is centered on creating intuitive, beautiful, and memorable user experiences. We specialize in immersive 3D visuals and interfaces that set your brand apart."
        />
        <ServiceCard 
          icon={<Bot size={24} />} 
          title="Digital Marketing & AI" 
          description="Amplify your reach and drive conversions with data-driven marketing strategies. We leverage AI to optimize campaigns, personalize content, and provide actionable insights for continuous growth."
        />
      </section>

      {/* Tech Stack */}
      <motion.section
        className="mt-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-center">Our Technology Stack</h2>
        <div className="mt-8 flex flex-wrap justify-center items-center gap-4 md:gap-8">
          {techStack.map(tech => (
            <div key={tech} className="bg-white/10 px-6 py-2 rounded-md text-white/80 font-medium">
              {tech}
            </div>
          ))}
        </div>
      </motion.section>
      
      {/* Pricing Estimates */}
      <motion.section
        className="mt-24"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-center">Transparent Pricing</h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="border border-white/10 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold">Websites</h3>
                <p className="mt-2 text-white/70">Starting from</p>
                <p className="text-5xl font-bold mt-4 bg-clip-text text-transparent bg-gradient-to-r from-brand-purple to-brand-cyan">$5,000</p>
            </div>
            <div className="border-2 border-brand-purple p-8 rounded-lg shadow-[0_0_25px_rgba(139,92,246,0.4)]">
                <h3 className="text-2xl font-semibold">Mobile Apps</h3>
                <p className="mt-2 text-white/70">Starting from</p>
                <p className="text-5xl font-bold mt-4 bg-clip-text text-transparent bg-gradient-to-r from-brand-purple to-brand-cyan">$15,000</p>
            </div>
            <div className="border border-white/10 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold">Custom Solutions</h3>
                <p className="mt-2 text-white/70">Let's Talk</p>
                <p className="text-5xl font-bold mt-4 bg-clip-text text-transparent bg-gradient-to-r from-brand-purple to-brand-cyan">Enterprise</p>
            </div>
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section
        className="mt-24"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-center">Why Partner With Azentra?</h2>
        <div className="mt-12 max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          {whyChooseUs.map(reason => (
            <div key={reason} className="flex items-center">
              <CheckCircle className="text-brand-cyan h-5 w-5 mr-3" />
              <span>{reason}</span>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default Services;
