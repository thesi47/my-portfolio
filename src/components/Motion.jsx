import { motion } from 'framer-motion'

/*
 * FadeIn — a reusable wrapper that fades + slides content up on mount.
 *
 * Props:
 *   delay    – seconds before animation starts (default: 0)
 *   duration – animation duration in seconds (default: 0.5)
 *   y        – slide distance in px (default: 20)
 *   className – optional extra classes
 *   children  – content to animate
 */
export function FadeIn({
  children,
  delay = 0,
  duration = 0.5,
  y = 20,
  className = '',
  ...props
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

/*
 * StaggerChildren — wraps children and staggers their entrance.
 *
 * Usage:
 *   <StaggerChildren>
 *     <FadeIn>Card 1</FadeIn>
 *     <FadeIn>Card 2</FadeIn>
 *   </StaggerChildren>
 */
export function StaggerChildren({
  children,
  stagger = 0.1,
  delay = 0,
  className = '',
  ...props
}) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger,
            delayChildren: delay,
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

/* Variant for children inside StaggerChildren */
export const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
}

/*
 * ScrollFadeIn — like FadeIn, but triggers when the element
 * scrolls into the viewport instead of on mount.
 *
 * Props: same as FadeIn
 */
export function ScrollFadeIn({
  children,
  delay = 0,
  duration = 0.5,
  y = 24,
  className = '',
  ...props
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

/*
 * ScrollStagger — like StaggerChildren, but triggers on scroll.
 */
export function ScrollStagger({
  children,
  stagger = 0.1,
  delay = 0,
  className = '',
  ...props
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger,
            delayChildren: delay,
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}
