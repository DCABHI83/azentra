import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Target } from 'lucide-react';

const TeamMemberCard: React.FC<{ name: string; role: string; imageUrl: string }> = ({ name, role, imageUrl }) => (
  <motion.div
    className="text-center"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5 }}
  >
    <img src={imageUrl} alt={name} className="w-32 h-32 mx-auto rounded-full object-cover" />
    <h3 className="mt-4 text-xl font-semibold">{name}</h3>
    <p className="text-brand-cyan">{role}</p>
  </motion.div>
);

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-24">
      {/* Hero Section */}
      <motion.section 
        className="text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter">Our Story & Vision</h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-white/70">
          We are more than a digital agency. We are architects of the virtual world, driven by a passion for innovation and a commitment to excellence.
        </p>
      </motion.section>

      {/* Company History */}
      <motion.section 
        className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOT二次N3wwfDF8c2VhcmNofDIyfHx0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwwfHx8fDE3MTUyMDI5MDB8MA&ixlib=rb-4.0.3&q=80&w=800" alt="Azentra Team" className="rounded-lg shadow-2xl" />
        </div>
        <div>
          <h2 className="text-4xl font-bold">From Idea to Industry Leader</h2>
          <p className="mt-4 text-white/70">
            Founded in 2020, Azentra Solutions started with a simple goal: to bridge the gap between brilliant ideas and their digital realization. We saw a need for an agency that didn't just build websites, but crafted comprehensive digital experiences. Today, we've helped dozens of businesses, from startups to enterprises, navigate the digital landscape and achieve remarkable success.
          </p>
          <p className="mt-4 text-white/70">
            Our journey is one of constant learning and adaptation, always staying at the forefront of technology to deliver solutions that are not just current, but future-proof.
          </p>
        </div>
      </motion.section>

      {/* Vision & Mission */}
      <motion.section 
        className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
      >
        <motion.div 
            className="bg-white/5 p-8 rounded-lg border border-white/10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Award className="mx-auto text-brand-purple" size={40} />
          <h3 className="mt-4 text-2xl font-semibold">Our Mission</h3>
          <p className="mt-2 text-white/70">To empower businesses with transformative digital solutions that drive growth, innovation, and market leadership.</p>
        </motion.div>
        <motion.div 
            className="bg-white/5 p-8 rounded-lg border border-white/10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Target className="mx-auto text-brand-cyan" size={40} />
          <h3 className="mt-4 text-2xl font-semibold">Our Vision</h3>
          <p className="mt-2 text-white/70">To be the leading architect of immersive and intelligent digital experiences that shape the future of human-computer interaction.</p>
        </motion.div>
        <motion.div 
            className="bg-white/5 p-8 rounded-lg border border-white/10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Users className="mx-auto text-brand-purple" size={40} />
          <h3 className="mt-4 text-2xl font-semibold">Our Values</h3>
          <p className="mt-2 text-white/70">Innovation, Integrity, Collaboration, and an unwavering commitment to client success guide everything we do.</p>
        </motion.div>
      </motion.section>

      {/* Team Grid */}
      <section className="mt-24">
        <h2 className="text-4xl font-bold text-center">Meet the Innovators</h2>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          <TeamMemberCard name="Alex Johnson" role="Founder & CEO" imageUrl="https://i.pravatar.cc/200?img=3" />
          <TeamMemberCard name="Maria Garcia" role="Lead Designer" imageUrl="https://i.pravatar.cc/200?img=5" />
          <TeamMemberCard name="David Chen" role="Head of Engineering" imageUrl="https://i.pravatar.cc/200?img=7" />
          <TeamMemberCard name="Sarah Lee" role="Project Manager" imageUrl="https://i.pravatar.cc/200?img=8" />
        </div>
      </section>
    </div>
  );
};

export default About;
