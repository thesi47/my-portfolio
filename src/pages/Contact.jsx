export default function Contact() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <h1 className="text-4xl font-bold text-white">Contact</h1>
      <p className="mt-4 max-w-xl text-gray-400">
        Have a question or want to work together? Send me a message.
      </p>

      {/* ── Contact Form ── */}
      <form
        className="mt-12 max-w-lg space-y-6"
        onSubmit={(e) => e.preventDefault()}
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Your name"
            className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white
              placeholder-gray-500 outline-none transition focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white
              placeholder-gray-500 outline-none transition focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            placeholder="Write your message..."
            className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white
              placeholder-gray-500 outline-none transition focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 resize-none"
          />
        </div>

        <button
          type="submit"
          className="rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition
            hover:bg-indigo-500 hover:shadow-lg hover:shadow-indigo-500/25"
        >
          Send Message
        </button>
      </form>
    </section>
  )
}
