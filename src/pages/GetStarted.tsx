import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Plan = 'Startup' | 'Growth' | 'Enterprise' | null;

const pricingPlans = [
  { name: 'Startup', price: 999, features: ['Core Website Dev', 'UI/UX Basics', '30-day Support'] },
  { name: 'Growth', price: 2499, features: ['Advanced Website', 'Custom UI/UX', 'SEO Optimization', '60-day Support'] },
  { name: 'Enterprise', price: 'Custom', features: ['Full-stack App', '3D Integration', 'Dedicated Team', 'Ongoing Retainer'] },
];

const GetStarted: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<Plan>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const handleSelectPlan = (planName: Plan) => {
    setSelectedPlan(planName);
    setIsSubmitted(false);
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());
    console.log("Inquiry Submitted:", data);
    setIsSubmitted(true);
    setSelectedPlan(null);
  };
  
  return (
    <div className="container mx-auto px-6 py-24">
      {/* Step 1: Pricing Cards */}
      <motion.section
        className="text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter">Choose Your Plan</h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-white/70">
          Select a package that best fits your project goals. Each plan is crafted to deliver maximum value and impact.
        </p>
      </motion.section>

      <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={plan.name}
            className={`p-8 rounded-lg border flex flex-col ${plan.name === 'Growth' ? 'border-2 border-brand-purple shadow-[0_0_25px_rgba(139,92,246,0.4)]' : 'border-white/10'}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h2 className="text-2xl font-bold">{plan.name}</h2>
            <p className="text-5xl font-bold my-4 bg-clip-text text-transparent bg-gradient-to-r from-brand-purple to-brand-cyan">
              {typeof plan.price === 'number' ? `$${plan.price}` : plan.price}
            </p>
            <ul className="space-y-2 text-white/70 flex-grow">
              {plan.features.map(feature => <li key={feature}>✓ {feature}</li>)}
            </ul>
            <button
              onClick={() => handleSelectPlan(plan.name as Plan)}
              className={`mt-8 w-full py-3 rounded-md font-semibold transition-colors duration-300 ${plan.name === 'Growth' ? 'bg-brand-purple text-white hover:bg-opacity-80' : 'bg-white/10 hover:bg-white/20'}`}
            >
              Select Plan
            </button>
          </motion.div>
        ))}
      </section>

      {/* Step 2: Dynamic Form */}
      <div ref={formRef} className="mt-24">
        <AnimatePresence>
          {selectedPlan && (
            <motion.section
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="bg-white/5 p-8 rounded-lg border border-white/10">
                <h2 className="text-3xl font-bold text-center mb-8">Project Details for: <span className="text-brand-cyan">{selectedPlan}</span> Plan</h2>
                <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white/80">Full Name</label>
                    <input type="text" name="name" required className="mt-1 block w-full bg-white/5 border border-white/20 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-purple" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/80">Email Address</label>
                    <input type="email" name="email" required className="mt-1 block w-full bg-white/5 border border-white/20 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-purple" />
                  </div>
                  <input type="hidden" name="selectedPlan" value={selectedPlan} />
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-white/80">Estimated Budget (USD)</label>
                    <input type="number" name="budget" placeholder="e.g., 5000" className="mt-1 block w-full bg-white/5 border border-white/20 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-purple" />
                  </div>
                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-white/80">Project Description</label>
                    <textarea name="description" rows={4} required className="mt-1 block w-full bg-white/5 border border-white/20 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-purple"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-brand-purple text-white px-6 py-3 rounded-md font-semibold hover:bg-opacity-80 transition-all duration-300 shadow-[0_0_15px_rgba(139,92,246,0.5)]">
                    Submit Inquiry
                  </button>
                </form>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
        {isSubmitted && (
             <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-8 text-center bg-brand-cyan/10 border border-brand-cyan/50 text-brand-cyan p-4 rounded-md"
            >
                Inquiry sent successfully! We will contact you within 24 hours.
            </motion.div>
        )}
      </div>
    </div>
  );
};

export default GetStarted;
