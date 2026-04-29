import { motion } from 'framer-motion'
import { FadeIn, ScrollStagger, fadeUpVariant } from '../components/Motion'
import data from '../data/portfolioData.json'

function GithubIcon() {
  return (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  )
}

function ExternalIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6m0 0v6m0-6L10 14" />
    </svg>
  )
}

export default function Projects() {
  const { projects } = data

  return (
    <section className="section-alt">
      <div className="mx-auto max-w-6xl px-6 py-20">

      {/* ── Header ── */}
      <FadeIn>
        <span className="section-label">Portfolio</span>
        <h1 className="section-title">Things I've built</h1>
        <p className="section-desc">
          A few projects I've worked on while learning. Each one taught me
          something new.
        </p>
      </FadeIn>

      {/* ── Project Cards Grid ── */}
      <ScrollStagger stagger={0.12} className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <motion.article
            key={project.title}
            variants={fadeUpVariant}
            className="group flex flex-col overflow-hidden rounded-xl border
              border-gray-200 bg-white
              dark:border-white/5 dark:bg-gray-900
              transition-all duration-300 ease-out
              hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-600/5
              dark:hover:shadow-blue-500/5
              hover:border-blue-200 dark:hover:border-blue-500/15"
          >
            {/* ── Project image ── */}
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover transition-transform duration-500 ease-out
                  group-hover:scale-105"
              />
              {/* Subtle overlay on hover */}
              <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent
                opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>

            {/* ── Card body ── */}
            <div className="flex flex-1 flex-col p-6">

              {/* Title */}
              <h2 className="text-lg font-semibold
                text-gray-900 dark:text-white
                transition-colors duration-200
                group-hover:text-blue-600 dark:group-hover:text-blue-400">
                {project.title}
              </h2>

              {/* Description */}
              <p className="mt-3 flex-1 text-base leading-relaxed
                text-gray-500 dark:text-gray-400">
                {project.description}
              </p>

              {/* Tech badges */}
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>

              {/* Action buttons */}
              <div className="mt-6 flex items-center gap-3 border-t pt-5
                border-gray-100 dark:border-white/5">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} GitHub repository`}
                  className="inline-flex items-center gap-2 rounded-lg border px-4 py-2
                    text-xs font-semibold transition-all duration-200
                    border-gray-200 text-gray-600
                    hover:border-gray-900 hover:text-gray-900
                    dark:border-white/10 dark:text-gray-400
                    dark:hover:border-white/30 dark:hover:text-white"
                >
                  <GithubIcon />
                  GitHub
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} live demo`}
                    className="inline-flex items-center gap-2 rounded-lg px-4 py-2
                      text-xs font-semibold transition-all duration-200
                      bg-blue-600 text-white
                      hover:bg-blue-700 hover:shadow-md hover:shadow-blue-600/20
                      dark:bg-blue-600 dark:hover:bg-blue-500 dark:hover:shadow-blue-500/20"
                  >
                    <ExternalIcon />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}

        {/* ── Fallback placeholder cards ── */}
        {Array.from({ length: Math.max(0, 3 - projects.length) }).map((_, i) => (
          <motion.article
            key={`placeholder-${i}`}
            variants={fadeUpVariant}
            className="group flex flex-col overflow-hidden rounded-xl border-2 border-dashed
              border-gray-200 dark:border-white/10
              transition-all duration-300 ease-out"
          >
            {/* ── Placeholder image area ── */}
            <div className="relative flex h-48 items-center justify-center
              bg-gray-50 dark:bg-white/2">
              <div className="flex flex-col items-center gap-3 text-gray-300 dark:text-gray-600">
                <svg className="h-10 w-10 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </div>
            </div>

            {/* ── Placeholder body ── */}
            <div className="flex flex-1 flex-col items-center justify-center p-6 text-center">
              <p className="text-sm font-semibold uppercase tracking-wider
                text-gray-400 dark:text-gray-500">
                Coming Soon
              </p>
              <p className="mt-2 max-w-[200px] text-xs leading-relaxed
                text-gray-300 dark:text-gray-600">
                This spot is reserved for a project that's currently in the works.
              </p>

              {/* Placeholder tech badges */}
              <div className="mt-5 flex gap-2">
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-300
                  dark:bg-white/3 dark:text-gray-600">???</span>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-300
                  dark:bg-white/3 dark:text-gray-600">???</span>
              </div>

              {/* Placeholder footer to match height */}
              <div className="mt-6 w-full border-t pt-5 border-gray-100 dark:border-white/5">
                <p className="text-xs italic text-gray-300 dark:text-gray-600">
                  Stay tuned ✦
                </p>
              </div>
            </div>
          </motion.article>
        ))}
      </ScrollStagger>
      </div>
    </section>
  )
}
