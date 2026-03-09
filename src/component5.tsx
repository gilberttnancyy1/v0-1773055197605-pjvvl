// components/stats.tsx
const stats = [
  { value: '150+', label: 'Projects delivered' },
  { value: '8+', label: 'Years of experience' },
  { value: '40+', label: 'Happy clients' },
  { value: '12', label: 'Industry awards' },
]

export default function Stats() {
  return (
    <section className="border-y border-zinc-800 py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">{stat.value}</div>
            <div className="text-sm text-zinc-500">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}