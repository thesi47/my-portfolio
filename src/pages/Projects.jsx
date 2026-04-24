const projects = [
  {
    title: 'Project One',
    description: 'A brief description of what this project does and the tech used.',
    tags: ['React', 'Tailwind'],
    link: '#',
  },
  {
    title: 'Project Two',
    description: 'A brief description of what this project does and the tech used.',
    tags: ['Node.js', 'Express'],
    link: '#',
  },
  {
    title: 'Project Three',
    description: 'A brief description of what this project does and the tech used.',
    tags: ['JavaScript', 'API'],
    link: '#',
  },
]

export default function Projects() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <h1 className="text-4xl font-bold text-white">Projects</h1>
      <p className="mt-4 max-w-xl text-gray-400">
        A selection of things I've built. Click on a card to learn more.
      </p>

      {/* ── Project Grid ── */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.link}
            className="group rounded-xl border border-white/5 bg-white/[0.02] p-6 transition
              hover:border-indigo-500/30 hover:bg-white/[0.04] hover:shadow-lg hover:shadow-indigo-500/5"
          >
            <h3 className="text-lg font-semibold text-white group-hover:text-indigo-400 transition">
              {project.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-400">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
