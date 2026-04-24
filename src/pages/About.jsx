export default function About() {
  const learning = [
    'React',
    'JavaScript (ES6+)',
    'Tailwind CSS',
    'Node.js',
    'Git & GitHub',
    'Responsive Design',
  ]

  return (
    <section className="mx-auto max-w-6xl px-6 py-24">

      {/* ── Header ── */}
      <span className="text-sm font-semibold uppercase tracking-widest text-indigo-400">
        About Me
      </span>
      <h1 className="mt-3 text-4xl font-bold leading-tight text-white sm:text-5xl">
        A little bit about who I am
      </h1>

      {/* ── Two-column layout on desktop ── */}
      <div className="mt-14 grid gap-16 lg:grid-cols-5">

        {/* ── Story — takes 3 columns ── */}
        <div className="space-y-6 lg:col-span-3">

          {/* My Story */}
          <div>
            <h2 className="text-lg font-semibold text-white">My Story</h2>
            <p className="mt-3 leading-relaxed text-gray-400">
              I'm a Computer Science & Engineering student who got curious about
              how websites work — and that curiosity quickly turned into a
              passion. What started with writing simple HTML pages has evolved
              into building full interactive interfaces with React and Tailwind.
            </p>
          </div>

          {/* What I'm Learning */}
          <div>
            <h2 className="text-lg font-semibold text-white">What I'm Learning</h2>
            <p className="mt-3 leading-relaxed text-gray-400">
              Right now I'm focused on front-end development — understanding how
              to structure components, manage state, and create designs that feel
              clean and intuitive. I'm also picking up the basics of back-end
              development so I can eventually build full-stack applications.
            </p>
          </div>

          {/* My Goal */}
          <div>
            <h2 className="text-lg font-semibold text-white">My Goal</h2>
            <p className="mt-3 leading-relaxed text-gray-400">
              I want to become a developer who writes thoughtful, well-crafted
              code — someone who doesn't just make things work, but makes them
              work well. I'm not in a rush. I'd rather learn things properly and
              build a strong foundation that lasts.
            </p>
          </div>
        </div>

        {/* ── Sidebar — takes 2 columns ── */}
        <div className="space-y-10 lg:col-span-2">

          {/* Currently Learning */}
          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
              Currently Learning
            </h3>
            <ul className="mt-4 space-y-3">
              {learning.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-gray-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Quick facts */}
          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
              Quick Facts
            </h3>
            <dl className="mt-4 space-y-4">
              <div>
                <dt className="text-xs uppercase tracking-wider text-gray-500">Education</dt>
                <dd className="mt-1 text-sm text-gray-300">B.Sc. in CSE (ongoing)</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-gray-500">Focus</dt>
                <dd className="mt-1 text-sm text-gray-300">Front-End Development</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-gray-500">Interests</dt>
                <dd className="mt-1 text-sm text-gray-300">UI Design, Open Source, Problem Solving</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
