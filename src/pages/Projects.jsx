import { motion } from 'framer-motion'
import { FadeIn, StaggerChildren, fadeUpVariant } from '../components/Motion'
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
    <section className="mx-auto max-w-6xl px-6 py-24">

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
      <StaggerChildren stagger={0.12} delay={0.2} className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <motion.article
            key={project.title}
            variants={fadeUpVariant}
            className="card group flex flex-col p-0!"
          >
            <div className="flex flex-1 flex-col p-6">

              {/* Title row */}
              <div className="flex items-start justify-between gap-3">
                <h2 className="text-lg font-semibold
                  text-gray-900 dark:text-white
                  group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  {project.title}
                </h2>

                <div className="flex shrink-0 items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} GitHub repository`}
                    className="text-gray-400 dark:text-gray-500
                      hover:text-gray-900 dark:hover:text-white"
                  >
                    <GithubIcon />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} live demo`}
                      className="text-gray-400 dark:text-gray-500
                        hover:text-gray-900 dark:hover:text-white"
                    >
                      <ExternalIcon />
                    </a>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="mt-3 flex-1 text-sm leading-relaxed
                text-gray-500 dark:text-gray-400">
                {project.description}
              </p>

              {/* Tech tags */}
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </StaggerChildren>
    </section>
  )
}
