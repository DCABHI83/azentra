import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // Here you would typically send the data to a backend or email service
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="container mx-auto px-6 py-24 min-h-[80vh] flex items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
        {/* Left Side: Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter">Let's Build Something Great</h1>
          <p className="mt-4 text-lg text-white/70">
            Have a project in mind or just want to say hello? We'd love to hear from you. Fill out the form or use our contact details below.
          </p>
          <div className="mt-12 space-y-6">
            <div className="flex items-center">
              <Mail className="text-brand-purple h-6 w-6 mr-4" />
              <a href="mailto:hello@azentra.com" className="text-white/80 hover:text-white">hello@azentra.com</a>
            </div>
            <div className="flex items-center">
              <Phone className="text-brand-purple h-6 w-6 mr-4" />
              <a href="tel:+1234567890" className="text-white/80 hover:text-white">(123) 456-7890</a>
            </div>
            <div className="flex items-center">
              <MapPin className="text-brand-purple h-6 w-6 mr-4" />
              <span className="text-white/80">123 Innovation Drive, Tech City</span>
            </div>
          </div>
        </motion.div>
        
        {/* Right Side: Form */}
        <motion.div
          className="bg-white/5 p-8 rounded-lg border border-white/10"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
                <h2 className="text-2xl font-bold text-brand-cyan">Thank You!</h2>
                <p className="mt-2 text-white/80">Your message has been sent. We'll get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white/80">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full bg-white/5 border border-white/20 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-purple"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/80">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full bg-white/5 border border-white/20 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-purple"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/80">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full bg-white/5 border border-white/20 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-purple"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-brand-purple text-white px-6 py-3 rounded-md font-semibold hover:bg-opacity-80 transition-all duration-300 shadow-[0_0_15px_rgba(139,92,246,0.5)]"
                >
                  Send Message
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
