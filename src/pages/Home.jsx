import { Link } from 'react-router-dom'
import { FadeIn } from '../components/Motion'
import data from '../data/portfolioData.json'

export default function Home() {
  const { personal, stats } = data

  return (
    <section className="relative flex min-h-[calc(100vh-5rem)] items-center overflow-hidden">

      {/* ── Subtle background glow ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2
          h-[480px] w-[720px] rounded-full blur-[120px]
          bg-blue-600/5 dark:bg-blue-600/8"
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-20 sm:py-28 lg:py-32">
        <div className="max-w-2xl">

          {/* ── Greeting tag ── */}
          <FadeIn>
            <span className="inline-block rounded-full border px-4 py-1.5
              text-xs font-semibold uppercase tracking-widest
              border-blue-200 bg-blue-50 text-blue-600
              dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400">
              {personal.greeting}
            </span>
          </FadeIn>

          {/* ── Name ── */}
          <FadeIn delay={0.1}>
            <h1 className="mt-6 text-4xl font-bold leading-[1.15] tracking-tight
              text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              Hi, I'm{' '}
              <span className="text-blue-600 dark:text-blue-400">{personal.name}</span>
            </h1>
          </FadeIn>

          {/* ── Intro ── */}
          <FadeIn delay={0.2}>
            <p className="mt-5 max-w-lg text-base leading-relaxed sm:text-lg
              text-gray-500 dark:text-gray-400">
              {personal.tagline}
            </p>
          </FadeIn>

          {/* ── CTA buttons ── */}
          <FadeIn delay={0.3}>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link to="/projects" className="btn-primary">
                View Projects
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link to="/contact" className="btn-ghost">
                Contact Me
              </Link>
            </div>
          </FadeIn>

          {/* ── Quick stats ── */}
          <FadeIn delay={0.4}>
            <div className="mt-14 grid grid-cols-3 gap-6 sm:gap-10 border-t pt-8
              border-gray-200 dark:border-white/5">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-wider
                    text-gray-400 dark:text-gray-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
