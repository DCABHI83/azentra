import React from 'react';
import { Link } from 'react-router-dom';
import ThreeBackground from '../components/ThreeBackground';
import { motion } from 'framer-motion';
import { ArrowRight, Code, PenTool, Smartphone, ChevronDown, ChevronUp } from 'lucide-react';
import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
// Reusable Section component for consistent animation
const Section: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => (
  <motion.section
    className={className}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6 }}
  >
    {children}
  </motion.section>
);

// FAQ Item Component
const FaqItem: React.FC<{ question: string; answer: string; }> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <div className="border-b border-white/10 py-4">
            <button
                className="w-full flex justify-between items-center text-left"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h3 className="font-semibold">{question}</h3>
                {isOpen ? <ChevronUp /> : <ChevronDown />}
            </button>
            {isOpen && <p className="mt-2 text-white/70">{answer}</p>}
        </div>
    );
}

const Home: React.FC = () => {
  const projects = [
    { image: image1, title: 'SiteGenie', link: 'https://sitegenies.vercel.app/' },
    { image: image2, title: 'Mobile Banking App', link: 'https://visra.vercel.app/' },
    { image: image3, title: 'neatNclean', link: 'https://www.neatnclean.net/' }
  ];

  const marqueeItems = ["Web Development", "UI/UX Design", "3D Modeling", "App Development", "Brand Strategy"];

  return (
    <div className="overflow-hidden">
      <ThreeBackground />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center">
        <div className="container mx-auto px-6 z-10">
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tighter"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Elevating Digital
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-purple to-brand-cyan">Realities.</span>
          </motion.h1>
          <motion.p 
            className="mt-6 max-w-2xl mx-auto text-lg text-white/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            We craft immersive digital experiences that captivate, engage, and convert.
          </motion.p>
          <motion.div 
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <a href="#" className="bg-brand-purple text-white px-8 py-3 rounded-md font-semibold hover:bg-opacity-80 transition-all duration-300 shadow-[0_0_20px_rgba(139,92,246,0.6)]">
              Book a Call
            </a>
            <Link to="/get-started" className="border border-white/20 text-white px-8 py-3 rounded-md font-semibold hover:bg-white/10 transition-all duration-300">
              See Pricing
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Marquee Section */}
      <div className="py-8 bg-black/20 border-y border-white/10 w-full overflow-hidden whitespace-nowrap">
          <div className="flex animate-infinite-scroll">
              {[...marqueeItems, ...marqueeItems].map((item, index) => (
                  <span key={index} className="mx-8 text-xl font-semibold text-white/50 flex-shrink-0">{item}</span>
              ))}
          </div>
      </div>

      <div className="container mx-auto px-6 mt-24">
        {/* About Teaser */}
        <Section className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold">Who We Are</h2>
          <p className="mt-4 text-white/70">
            Azentra Solutions is a collective of designers, developers, and strategists passionate about building the future of the web. We merge aesthetics with functionality to create high-performance digital products that drive results.
          </p>
          <Link to="/about" className="mt-6 inline-flex items-center text-brand-cyan hover:underline">
            View More <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Section>

        {/* Services Teaser */}
        <Section className="mt-24">
          <h2 className="text-4xl font-bold text-center">Our Core Services</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Code />, title: 'Web Development', desc: 'Cutting-edge websites that are fast, secure, and scalable.' },
              { icon: <Smartphone />, title: 'App Development', desc: 'Intuitive mobile applications for iOS and Android.' },
              { icon: <PenTool />, title: 'UI/UX Design', desc: 'User-centric designs that are both beautiful and functional.' }
            ].map(service => (
              <div key={service.title} className="bg-white/5 p-8 rounded-lg border border-white/10 hover:-translate-y-2 transition-transform duration-300">
                <div className="w-12 h-12 bg-brand-purple/20 text-brand-purple rounded-md flex items-center justify-center">
                  {service.icon}
                </div>
                <h3 className="mt-4 text-xl font-semibold">{service.title}</h3>
                <p className="mt-2 text-white/70">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="bg-white/10 text-white px-8 py-3 rounded-md font-semibold hover:bg-white/20 transition-all duration-300">
              View All Services
            </Link>
          </div>
        </Section>

        {/* Brand Statement */}
        <Section className="my-32">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center max-w-4xl mx-auto tracking-tight leading-tight">
            We help brands show up with <span className="text-brand-purple">clarity</span>, <span className="text-brand-cyan">confidence</span>, and design that actually works.
          </h2>
        </Section>

      
      {/* Project Showcase */}
<Section>
  <h2 className="text-4xl font-bold text-center">Recent Work</h2>
  <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
    {projects.map((project, index) => (
      <Link 
        to={project.link} 
        key={index}
        target='_blank'
      >
        <motion.div 
          className="group relative overflow-hidden rounded-lg cursor-pointer"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <img src={project.image} alt={project.title} className="w-full h-96 object-contain" />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
            <h3 className="text-white text-xl font-semibold">{project.title}</h3>
          </div>
        </motion.div>
      </Link>
    ))}
  </div>
</Section>


        {/* How We Work */}
        <Section className="mt-24">
          <h2 className="text-4xl font-bold text-center">Our Process</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
             {[
               { num: '01', title: 'Discovery', desc: 'We dive deep into your brand, goals, and audience to build a solid foundation.' },
               { num: '02', title: 'Strategy', desc: 'Crafting a bespoke plan that aligns technology and design with your objectives.' },
               { num: '03', title: 'Execution', desc: 'Bringing the vision to life with pixel-perfect development and rigorous testing.' }
             ].map(step => (
                <div key={step.num} className="p-8 border border-white/10 rounded-lg">
                    <span className="text-5xl font-bold text-brand-purple">{step.num}</span>
                    <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
                    <p className="mt-2 text-white/70">{step.desc}</p>
                </div>
             ))}
          </div>
        </Section>
        
        {/* Social Proof & FAQ */}
        <Section className="mt-24 flex flex-col gap-5 p-10">
                      <h2 className="text-3xl font-bold">What Our Clients Say</h2>
            <div className='flex gap-10'>
              <div>
    
                <div className="mt-8 bg-white/5 p-8 rounded-lg border border-white/10">
                    <p className="text-white/80 italic">"Working with Azentra was a game-changer. Their attention to detail and creative vision transformed our online presence. The results speak for themselves."</p>
                    <div className="mt-4 flex items-center">
                        <img src="https://i.pravatar.cc/40?img=1" alt="Client" className="w-10 h-10 rounded-full"/>
                        <div className="ml-4">
                            <p className="font-semibold">Jane Doe</p>
                            <p className="text-sm text-white/60">CEO, Future Corp</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="mt-8 bg-white/5 p-8 rounded-lg border border-white/10">
                    <p className="text-white/80 italic">"Working with Azentra was a game-changer. Their attention to detail and creative vision transformed our online presence. The results speak for themselves."</p>
                    <div className="mt-4 flex items-center">
                        <img src="https://i.pravatar.cc/40?img=1" alt="Client" className="w-10 h-10 rounded-full"/>
                        <div className="ml-4">
                            <p className="font-semibold">Jane Doe</p>
                            <p className="text-sm text-white/60">CEO, Future Corp</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className='mt-10'>
                <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
                <div className="mt-8">
                    <FaqItem question="What is the average project timeline?" answer="Timelines vary based on complexity, but a typical website project takes 6-8 weeks from discovery to launch." />
                    <FaqItem question="How much does a project cost?" answer="Costs are determined by the project scope. We offer packages for startups and custom quotes for enterprise-level projects. Check our 'Get Started' page for more details." />
                    <FaqItem question="Do you offer ongoing support?" answer="Yes, we provide monthly retainers for maintenance, updates, and ongoing strategic support to ensure your digital product continues to perform optimally." />
                </div>
            </div>
        </Section>

        {/* Contact Teaser */}
        <Section className="mt-24 py-16 text-center bg-gradient-to-r from-brand-purple/20 to-brand-cyan/20 rounded-lg">
          <h2 className="text-4xl font-bold">Ready to start?</h2>
          <p className="mt-4 text-white/70">Let's build something great together.</p>
          <Link to="/contact" className="mt-8 inline-block bg-white text-brand-dark px-8 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-all duration-300">
            Contact Us
          </Link>
        </Section>
      </div>
    </div>
  );
};

export default Home;
