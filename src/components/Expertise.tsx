import React from 'react';
import { motion } from 'motion/react';
import { Shield, Droplets, Zap, Leaf, ArrowRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const expertise = [
  {
    title: 'Anti-Carbonation Paints',
    description: 'Advanced CO2 barrier for urban flyovers and viaducts, preventing concrete decay.',
    icon: Shield,
    color: 'text-neon-cyan',
    bg: 'bg-neon-cyan/10',
    size: 'col-span-1 md:col-span-2',
    image: 'https://images.unsplash.com/photo-1545459720-aac273a27b3d?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Anti-Corrosive Additives',
    description: 'Maximizing RCC lifespan in harsh coastal and marine zones.',
    icon: Zap,
    color: 'text-yellow-400',
    bg: 'bg-yellow-400/10',
    size: 'col-span-1',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Nano-Sealants',
    description: 'UV-resistant, deep-penetrating waterproofing for tunnels and high-rises.',
    icon: Droplets,
    color: 'text-blue-400',
    bg: 'bg-blue-400/10',
    size: 'col-span-1',
    image: 'https://images.unsplash.com/photo-1503387762-592dee58c460?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Sustainability R&D',
    description: 'Low VOC formulations and eco-friendly infrastructure protection.',
    icon: Leaf,
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10',
    size: 'col-span-1 md:col-span-2',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800'
  }
];

export default function Expertise() {
  return (
    <section id="expertise" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-neon-cyan font-mono text-sm uppercase tracking-widest mb-4 block"
            >
              Industrial Science
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-display font-bold leading-tight"
            >
              Pioneering <span className="text-metallic-silver">Structural</span> Durability
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-metallic-silver max-w-sm"
          >
            We leverage nano-technology to create barriers that defy time, elements, and environmental degradation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {expertise.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "group relative overflow-hidden rounded-3xl glass p-8 min-h-[400px] flex flex-col justify-end",
                item.size
              )}
            >
              <div className="absolute inset-0 z-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="scan-line hidden group-hover:block" />
              </div>
              
              <div className="relative z-10">
                <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-6", item.bg)}>
                  <item.icon className={item.color} size={24} />
                </div>
                <h3 className="text-2xl font-display font-bold mb-3">{item.title}</h3>
                <p className="text-metallic-silver mb-6 max-w-md">{item.description}</p>
                <button className="flex items-center gap-2 text-neon-cyan font-bold text-sm uppercase tracking-widest group/btn">
                  Learn More <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
