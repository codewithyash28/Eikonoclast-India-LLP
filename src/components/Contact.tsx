import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-neon-cyan font-mono text-sm uppercase tracking-widest mb-4 block"
          >
            Get In Touch
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold mb-8"
          >
            Ready to <span className="text-neon-cyan">Protect</span> Your Legacy?
          </motion.h2>
          
          <div className="space-y-8 mb-12">
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-neon-cyan/10 flex items-center justify-center shrink-0">
                <MapPin className="text-neon-cyan" size={20} />
              </div>
              <div>
                <h4 className="font-display font-bold text-lg mb-1">Registered Office</h4>
                <p className="text-metallic-silver">Leelavati Sadan, Dana Bandar, Mumbai, Maharashtra 400009</p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-neon-cyan/10 flex items-center justify-center shrink-0">
                <Phone className="text-neon-cyan" size={20} />
              </div>
              <div>
                <h4 className="font-display font-bold text-lg mb-1">Direct Contact</h4>
                <p className="text-metallic-silver">+91 9082500730</p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-neon-cyan/10 flex items-center justify-center shrink-0">
                <Mail className="text-neon-cyan" size={20} />
              </div>
              <div>
                <h4 className="font-display font-bold text-lg mb-1">Official Email</h4>
                <p className="text-metallic-silver">info@eikonoclast.in</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden h-64 glass relative">
            {/* Mock Map - In a real app, use Mapbox or Google Maps */}
            <div className="absolute inset-0 bg-dark-bg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="text-neon-cyan mx-auto mb-2 animate-bounce" size={32} />
                <p className="text-xs font-mono text-metallic-silver">MUMBAI HQ COORDINATES</p>
                <p className="text-xs font-mono text-neon-cyan">18.9515° N, 72.8423° E</p>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 to-transparent pointer-events-none" />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="glass p-8 md:p-12 rounded-3xl"
        >
          <h3 className="text-2xl font-display font-bold mb-8">Project Inquiry Form</h3>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-mono text-metallic-silver uppercase">Full Name</label>
                <input
                  type="text"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-neon-cyan transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono text-metallic-silver uppercase">Email Address</label>
                <input
                  type="email"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-neon-cyan transition-colors"
                  placeholder="john@company.com"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-mono text-metallic-silver uppercase">Project Type</label>
              <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-neon-cyan transition-colors appearance-none">
                <option className="bg-dark-bg">Infrastructure Protection</option>
                <option className="bg-dark-bg">Marine/Coastal RCC</option>
                <option className="bg-dark-bg">High-Rise Waterproofing</option>
                <option className="bg-dark-bg">Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono text-metallic-silver uppercase">Message</label>
              <textarea
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-neon-cyan transition-colors"
                placeholder="Tell us about your structural challenges..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-neon-cyan text-dark-bg font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-white transition-colors group"
            >
              Submit Inquiry <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
