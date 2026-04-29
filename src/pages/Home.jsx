import { Link } from 'react-router-dom'
import { FadeIn, ScrollFadeIn } from '../components/Motion'
import data from '../data/portfolioData.json'

export default function Home() {
  const { personal, stats, currentlyLearning } = data

  return (
    <section className="relative flex min-h-[calc(100vh-5rem)] items-center overflow-hidden">

      {/* ── Subtle background glow ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2
          h-120 w-180 rounded-full blur-[120px]
          bg-blue-600/5 dark:bg-blue-600/8"
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-20">

        {/* ── Hero: two-column layout ── */}
        <div className="flex flex-col-reverse items-center gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-8">

          {/* ── Left column: text content ── */}
          <div className="max-w-xl text-center lg:text-left">

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
              <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight
                text-gray-900 dark:text-white sm:text-5xl">
                Hi, I'm{' '}
                <span className="text-blue-600 dark:text-blue-400">{personal.name}</span>
              </h1>
            </FadeIn>

            {/* ── Title ── */}
            <FadeIn delay={0.15}>
              <p className="mt-3 text-lg font-medium text-gray-700 dark:text-gray-300 sm:text-xl">
                {personal.title}
              </p>
            </FadeIn>

            {/* ── Tagline ── */}
            <FadeIn delay={0.25}>
              <p className="mt-4 max-w-lg text-base leading-relaxed sm:text-lg
                text-gray-500 dark:text-gray-400 mx-auto lg:mx-0">
                {personal.tagline}
              </p>
            </FadeIn>

            {/* ── CTA buttons ── */}
            <FadeIn delay={0.35}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                <Link to="/projects" className="btn-primary">
                  View Projects
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <a
                  href={personal.cv}
                  download
                  className="btn-ghost gap-2"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V3" />
                  </svg>
                  Download CV
                </a>
              </div>
            </FadeIn>
          </div>

          {/* ── Right column: profile image ── */}
          <FadeIn delay={0.2}>
            <div className="relative shrink-0">
              {/* Decorative ring */}
              <div className="absolute -inset-3 rounded-full bg-linear-to-tr from-blue-600/20 to-blue-400/10 blur-lg dark:from-blue-500/15 dark:to-blue-400/5" />
              <img
                src={personal.avatar}
                alt={personal.name}
                className="relative h-56 w-56 rounded-full object-cover ring-4
                  ring-white shadow-xl dark:ring-gray-800
                  sm:h-64 sm:w-64 lg:h-72 lg:w-72"
              />
            </div>
          </FadeIn>
        </div>

        {/* ── Quick stats ── */}
        <FadeIn delay={0.45}>
          <div className="mt-16 grid grid-cols-3 gap-6 sm:gap-10 border-t pt-8
            border-gray-200 dark:border-white/5 max-w-2xl mx-auto lg:mx-0">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm uppercase tracking-wider
                  text-gray-400 dark:text-gray-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* ── Currently Learning ── */}
        <ScrollFadeIn>
          <div className="mt-14 max-w-2xl mx-auto lg:mx-0">
            <h3 className="text-sm font-semibold uppercase tracking-wider
              text-gray-400 dark:text-gray-500">
              Currently Learning
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {currentlyLearning.map((item) => (
                <span key={item} className="tag">{item}</span>
              ))}
            </div>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  )
}
