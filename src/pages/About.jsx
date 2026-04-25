import { motion } from 'framer-motion'
import { FadeIn, ScrollFadeIn, ScrollStagger, fadeUpVariant } from '../components/Motion'
import data from '../data/portfolioData.json'

/* Single-color palette: blue at different opacities */
const levelStyles = {
  Comfortable: 'bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-500/15 dark:text-blue-300 dark:border-blue-500/25',
  Learning:    'bg-blue-50 text-blue-600 border-blue-100 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/15',
  Beginner:    'bg-gray-100 text-gray-500 border-gray-200 dark:bg-blue-500/5 dark:text-blue-400/70 dark:border-blue-500/10',
}

export default function About() {
  const { about, currentlyLearning, quickFacts, skills } = data

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">

      {/* ── Header ── */}
      <FadeIn>
        <span className="section-label">About Me</span>
        <h1 className="section-title">A little bit about who I am</h1>
      </FadeIn>

      {/* ── Two-column layout ── */}
      <div className="mt-14 grid gap-8 lg:grid-cols-5">

        {/* ── Story ── */}
        <ScrollStagger stagger={0.1} className="space-y-8 lg:col-span-3">
          <motion.div variants={fadeUpVariant}>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">My Story</h2>
            <p className="mt-3 text-base leading-relaxed text-gray-500 dark:text-gray-400">
              {about.story}
            </p>
          </motion.div>

          <motion.div variants={fadeUpVariant}>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">What I'm Learning</h2>
            <p className="mt-3 text-base leading-relaxed text-gray-500 dark:text-gray-400">
              {about.learning}
            </p>
          </motion.div>

          <motion.div variants={fadeUpVariant}>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">My Goal</h2>
            <p className="mt-3 text-base leading-relaxed text-gray-500 dark:text-gray-400">
              {about.goal}
            </p>
          </motion.div>
        </ScrollStagger>

        {/* ── Sidebar ── */}
        <ScrollStagger stagger={0.15} className="space-y-8 lg:col-span-2">
          <motion.div variants={fadeUpVariant} className="card">
            <h3 className="text-sm font-semibold uppercase tracking-wider
              text-gray-600 dark:text-gray-300">
              Currently Learning
            </h3>
            <ul className="mt-4 space-y-3">
              {currentlyLearning.map((item) => (
                <li key={item} className="flex items-center gap-3 text-base
                  text-gray-500 dark:text-gray-400">
                  <span className="h-1.5 w-1.5 rounded-full shrink-0
                    bg-blue-600 dark:bg-blue-500" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeUpVariant} className="card">
            <h3 className="text-sm font-semibold uppercase tracking-wider
              text-gray-600 dark:text-gray-300">
              Quick Facts
            </h3>
            <dl className="mt-4 space-y-4">
              {quickFacts.map((fact) => (
                <div key={fact.label}>
                  <dt className="text-xs uppercase tracking-wider
                    text-gray-400 dark:text-gray-500">
                    {fact.label}
                  </dt>
                  <dd className="mt-1 text-base text-gray-700 dark:text-gray-300">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </ScrollStagger>
      </div>

      {/* ── Skills Section ── */}
      <div className="mt-20 -mx-6 px-6 py-20 section-alt border-t
        border-gray-200 dark:border-white/5">

        <ScrollFadeIn>
          <span className="section-label">Skills</span>
          <h2 className="section-title">
            What I work with
          </h2>
          <p className="section-desc">
            I'm still learning — these reflect where I honestly am right now,
            not where I want to be.
          </p>
        </ScrollFadeIn>

        {/* ── Level legend ── */}
        <ScrollFadeIn delay={0.1}>
          <div className="mt-8 flex flex-wrap gap-3">
            {Object.entries(levelStyles).map(([level, classes]) => (
              <span
                key={level}
                className={`rounded-full border px-3 py-1 text-xs font-medium ${classes}`}
              >
                {level}
              </span>
            ))}
          </div>
        </ScrollFadeIn>

        {/* ── Skill category cards ── */}
        <ScrollStagger stagger={0.1} className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((category) => (
            <motion.div key={category.category} variants={fadeUpVariant} className="card">
              <h3 className="text-sm font-semibold uppercase tracking-wider
                text-gray-600 dark:text-gray-300">
                {category.category}
              </h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <span
                    key={skill.name}
                    className={`rounded-full border px-3 py-1.5 text-sm font-medium ${levelStyles[skill.level]}`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </ScrollStagger>
      </div>
    </section>
  )
}
