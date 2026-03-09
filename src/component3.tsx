// components/navbar.tsx
'use client'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-xl font-bold tracking-tight">FORMA</span>
        
        <div className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#work" className="hover:text-white transition-colors">Work</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
        
        <button className="hidden md:block bg-amber-400 text-zinc-950 text-sm font-semibold px-4 py-2 rounded-full hover:bg-amber-300 transition-colors">
          Start a project
        </button>
        
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      
      {open && (
        <div className="md:hidden border-t border-zinc-800 bg-zinc-950 px-6 py-4 flex flex-col gap-4 text-sm">
          <a href="#services" className="text-zinc-400 hover:text-white">Services</a>
          <a href="#work" className="text-zinc-400 hover:text-white">Work</a>
          <a href="#about" className="text-zinc-400 hover:text-white">About</a>
          <a href="#contact" className="text-zinc-400 hover:text-white">Contact</a>
          <button className="bg-amber-400 text-zinc-950 font-semibold px-4 py-2 rounded-full w-full">
            Start a project
          </button>
        </div>
      )}
    </nav>
  )
}