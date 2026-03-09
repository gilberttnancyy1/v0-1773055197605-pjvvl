// components/services.tsx
import { Palette, Globe, BarChart3, Layers } from 'lucide-react'

const services = [
  {
    icon: Palette,
    title: 'Brand Identity',
    description: 'We create distinctive visual identities that communicate your brand\'s essence and resonate with your audience.',
  },
  {
    icon: Globe,
    title: 'Web Design & Dev',
    description: 'Beautiful, performant websites built with modern technologies that convert visitors into customers.',
  },
  {
    icon: BarChart3,
    title: 'Digital Strategy',
    description: 'Data-driven strategies that align your digital presence with your business goals and growth targets.',
  },
  {
    icon: Layers,
    title: 'UI/UX Design',
    description: 'Intuitive interfaces and seamless user experiences that delight users and drive engagement.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 max-w-7xl mx-auto px-6">
      <div className="mb-16">
        <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-4">What we do</p>
        <h2 className="text-4xl md:text-5xl font-bold max-w-xl">Services built for modern brands</h2>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => {
          const Icon = service.icon
          return (
            <div key={service.title} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-600 transition-colors group">
              <div className="w-10 h-10 bg-amber-400/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-amber-400/20 transition-colors">
                <Icon size={20} className="text-amber-400" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{service.description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}