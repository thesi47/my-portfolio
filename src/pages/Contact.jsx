import { useState } from 'react'
import { motion } from 'framer-motion'
import { FadeIn, StaggerChildren, fadeUpVariant } from '../components/Motion'
import data from '../data/portfolioData.json'

const initialForm = { name: '', email: '', message: '' }

export default function Contact() {
  const { personal, social } = data
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  function validate() {
    const newErrors = {}
    if (!form.name.trim()) newErrors.name = 'Name is required.'
    if (!form.email.trim()) {
      newErrors.email = 'Email is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email.'
    }
    if (!form.message.trim()) {
      newErrors.message = 'Message is required.'
    } else if (form.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters.'
    }
    return newErrors
  }

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[name]
        return next
      })
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    setSubmitted(true)
    setForm(initialForm)
    setErrors({})
  }

  function handleReset() {
    setSubmitted(false)
  }

  const inputBase = `mt-2 w-full rounded-lg border px-4 py-3 text-sm outline-none focus:ring-1
    bg-white text-gray-900 placeholder-gray-400 dark:bg-white/5 dark:text-white dark:placeholder-gray-500`

  const inputOk = 'border-gray-300 focus:border-blue-600 focus:ring-blue-600 dark:border-white/10 dark:focus:border-blue-500 dark:focus:ring-blue-500'
  const inputErr = 'border-red-300 focus:border-red-500 focus:ring-red-500 dark:border-red-500/50 dark:focus:border-red-500 dark:focus:ring-red-500'

  return (
    <section className="mx-auto max-w-6xl px-6 py-24">

      {/* ── Header ── */}
      <FadeIn>
        <span className="section-label">Contact</span>
        <h1 className="section-title">Get in touch</h1>
        <p className="section-desc">
          Have a question, a project idea, or just want to say hello?
          Fill out the form and I'll get back to you.
        </p>
      </FadeIn>

      <div className="mt-14 grid gap-16 lg:grid-cols-5">

        {/* ── Form ── */}
        <FadeIn delay={0.15} className="lg:col-span-3">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="card !border-blue-200 !bg-blue-50 dark:!border-blue-500/20 dark:!bg-blue-500/5 p-8 text-center"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full
                bg-blue-100 dark:bg-blue-500/10">
                <svg className="h-7 w-7 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="mt-5 text-xl font-semibold text-gray-900 dark:text-white">
                Message sent!
              </h2>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Thanks for reaching out. I'll get back to you as soon as I can.
              </p>
              <button onClick={handleReset} className="btn-ghost mt-6">
                Send another message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium
                  text-gray-700 dark:text-gray-300">
                  Name
                </label>
                <input
                  id="name" name="name" type="text"
                  value={form.name} onChange={handleChange}
                  placeholder="Your name"
                  className={`${inputBase} ${errors.name ? inputErr : inputOk}`}
                />
                {errors.name && <p className="mt-1.5 text-xs text-red-500 dark:text-red-400">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium
                  text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <input
                  id="email" name="email" type="email"
                  value={form.email} onChange={handleChange}
                  placeholder="you@example.com"
                  className={`${inputBase} ${errors.email ? inputErr : inputOk}`}
                />
                {errors.email && <p className="mt-1.5 text-xs text-red-500 dark:text-red-400">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium
                  text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <textarea
                  id="message" name="message" rows={5}
                  value={form.message} onChange={handleChange}
                  placeholder="Write your message..."
                  className={`${inputBase} resize-none ${errors.message ? inputErr : inputOk}`}
                />
                {errors.message && <p className="mt-1.5 text-xs text-red-500 dark:text-red-400">{errors.message}</p>}
              </div>

              <button type="submit" className="btn-primary">
                Send Message
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
              </button>
            </form>
          )}
        </FadeIn>

        {/* ── Sidebar ── */}
        <StaggerChildren stagger={0.12} delay={0.3} className="space-y-8 lg:col-span-2">
          <motion.div variants={fadeUpVariant} className="card">
            <h3 className="text-sm font-semibold uppercase tracking-wider
              text-gray-600 dark:text-gray-300">
              Email
            </h3>
            <a href={`mailto:${personal.email}`}
              className="mt-3 block text-sm text-blue-600 dark:text-blue-400
                hover:text-blue-700 dark:hover:text-blue-300">
              {personal.email}
            </a>
          </motion.div>

          <motion.div variants={fadeUpVariant} className="card">
            <h3 className="text-sm font-semibold uppercase tracking-wider
              text-gray-600 dark:text-gray-300">
              Location
            </h3>
            <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
              {personal.location}
            </p>
          </motion.div>

          <motion.div variants={fadeUpVariant} className="card">
            <h3 className="text-sm font-semibold uppercase tracking-wider
              text-gray-600 dark:text-gray-300">
              Social
            </h3>
            <div className="mt-3 flex gap-4">
              {social.map(({ label, url }) => (
                <a key={label} href={url} target="_blank" rel="noopener noreferrer"
                  className="text-sm text-gray-500 dark:text-gray-400
                    hover:text-gray-900 dark:hover:text-white">
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
        </StaggerChildren>
      </div>
    </section>
  )
}
