import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="relative flex min-h-[calc(100vh-5rem)] items-center overflow-hidden">

      {/* ── Subtle background glow ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2
          h-[480px] w-[720px] rounded-full bg-indigo-600/10 blur-[120px]"
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-20 sm:py-28 lg:py-32">
        <div className="max-w-2xl">

          {/* ── Greeting tag ── */}
          <span className="inline-block rounded-full border border-indigo-500/20 bg-indigo-500/10
            px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-indigo-400">
            Welcome to my portfolio
          </span>

          {/* ── Name ── */}
          <h1 className="mt-6 text-4xl font-bold leading-[1.15] tracking-tight text-white
            sm:text-5xl md:text-6xl">
            Hi, I'm{' '}
            <span className="text-indigo-400">Your Name</span>
          </h1>

          {/* ── Intro ── */}
          <p className="mt-5 max-w-lg text-base leading-relaxed text-gray-400 sm:text-lg">
            A CSE student passionate about learning web development — building
            clean, user-friendly interfaces one project at a time.
          </p>

          {/* ── CTA buttons ── */}
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3
                text-sm font-semibold text-white transition
                hover:bg-indigo-500 hover:shadow-lg hover:shadow-indigo-500/25
                active:scale-[0.98]"
            >
              View Projects
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center rounded-lg border border-white/10 px-6 py-3
                text-sm font-semibold text-gray-300 transition
                hover:border-white/25 hover:text-white
                active:scale-[0.98]"
            >
              Contact Me
            </Link>
          </div>

          {/* ── Quick stats ── */}
          <div className="mt-14 flex gap-10 border-t border-white/5 pt-8">
            <div>
              <p className="text-2xl font-bold text-white">5+</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-gray-500">Projects</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">3+</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-gray-500">Tech Stack</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">1+</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-gray-500">Years Learning</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
