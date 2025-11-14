import React, { useEffect, useMemo, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Calendar,
  CheckCircle2,
  ChevronRight,
  ExternalLink,
  Menu,
  Phone,
  Play,
  Star,
  Users,
  GraduationCap,
  BadgeCheck,
  MapPin,
  Sparkles,
} from 'lucide-react'
import Spline from '@splinetool/react-spline'

const Container = ({ children }) => (
  <div className="mx-auto w-full max-w-7xl px-6 md:px-8">{children}</div>
)

function useScrollY() {
  const [y, setY] = useState(0)
  useEffect(() => {
    const onScroll = () => setY(window.scrollY)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return y
}

function Navbar() {
  const [open, setOpen] = useState(false)
  const y = useScrollY()
  const solid = y > 40
  const navItems = [
    { label: 'Offerings', href: '#offerings' },
    { label: 'Live Session', href: '#agenda' },
    { label: 'Mentors', href: '#mentors' },
  ]
  const airtableUrl = 'https://airtable.com/appGPgtEBYio3Pufz/pagm1OHsUAJTxJJni/form?prefill_Source=website&hide_Source=true'
  return (
    <div
      className={`sticky top-0 z-40 transition-all ${
        solid ? 'bg-black/70 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between py-4">
          <a
            href="https://www.algouniversity.com/"
            className="inline-flex items-center"
            aria-label="AlgoUniversity Home"
          >
            <img
              src="https://i.ibb.co/BKtw3VfF/AlgoU-2.png"
              alt="AlgoUniversity"
              className="block h-12 lg:h-14 w-auto m-0 p-0 object-contain drop-shadow-[0_0_12px_rgba(255,255,255,0.15)]"
            />
          </a>
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} className="text-zinc-300 hover:text-white transition-colors text-sm">
                {n.label}
              </a>
            ))}
            <a href={airtableUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white text-black px-4 py-2 text-sm font-medium hover:bg-zinc-100 transition-colors">
              Register Now <ChevronRight className="h-4 w-4" />
            </a>
          </div>
          <button className="md:hidden p-2 rounded-md hover:bg-white/5" onClick={() => setOpen(!open)}>
            <Menu className="h-5 w-5 text-white" />
          </button>
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden grid gap-2 pb-4"
            >
              {navItems.map((n) => (
                <a key={n.href} href={n.href} className="text-zinc-300 hover:text-white transition-colors text-sm py-2 border-t border-white/10">
                  {n.label}
                </a>
              ))}
              <a href={airtableUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-black px-4 py-2 text-sm font-medium hover:bg-zinc-100 transition-colors">
                Register Now <ChevronRight className="h-4 w-4" />
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </div>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-black">
      {/* Background moved to the right so the yellow door is visible while text stays left */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="h-full w-full transform translate-x-[10%] md:translate-x-[14%] lg:translate-x-[18%]">
          <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
      {/* Keep subtle glow near the left to support the headline */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_600px_at_12%_40%,rgba(255,255,255,0.08),transparent_60%)]" />
      <Container>
        <div className="relative grid grid-cols-1 gap-16 py-24 md:py-28 lg:py-32">
          <div className="flex flex-col justify-center max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-4xl md:text-6xl font-semibold tracking-tight text-white"
            >
              Guidance for 11th–12th and JEE Aspirants
            </motion.h1>
            <p className="mt-6 text-zinc-300 text-lg md:text-xl max-w-xl">
              Veteran mentors from IIIT Hyderabad, Apple, Google, Microsoft and more. Make confident career choices with premium, no-noise advice.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="https://airtable.com/appGPgtEBYio3Pufz/pagk4Ph6TuKeTXPho/form?prefill_Source=website&hide_Source=true" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:bg-zinc-100 transition-colors">
                Book 1:1 Session
              </a>
              {/* Yellow gradient crisp border button */}
              <span className="inline-flex rounded-full p-[1.5px] bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-400">
                <a href="#agenda" className="inline-flex items-center justify-center rounded-full bg-black/55 text-white px-6 py-3 text-sm font-medium hover:bg-black/60 transition-colors">
                  Explore Live Master Sessions
                </a>
              </span>
            </div>
            {/* Removed the small feature line under buttons per request */}
          </div>
        </div>
      </Container>
    </section>
  )
}

const SectionHeader = ({ eyebrow, title, subtitle }) => (
  <div>
    {eyebrow && (
      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-widest text-zinc-300">
        <Sparkles className="h-3.5 w-3.5" /> {eyebrow}
      </div>
    )}
    <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-white">{title}</h2>
    {subtitle && <p className="mt-3 text-zinc-400 max-w-2xl">{subtitle}</p>}
  </div>
)

const GlassCard = ({ children, className = '' }) => (
  <div className={`rounded-2xl bg-white/[0.06] ring-1 ring-white/10 ${className}`}>
    {children}
  </div>
)

function Stats() {
  const stats = [
    { value: '50k+', label: 'Learners Guided Online', subtitle: 'Across PAN India', icon: Users, hue: 'from-emerald-400/20 to-emerald-300/0', ring: 'ring-emerald-400/40', glow: 'shadow-[0_0_36px_rgba(16,185,129,0.25)]' },
    { value: '210+', label: 'Training Workshop', subtitle: 'Campus + Online', icon: GraduationCap, hue: 'from-sky-400/20 to-sky-300/0', ring: 'ring-sky-400/40', glow: 'shadow-[0_0_36px_rgba(56,189,248,0.22)]' },
    { value: '4.87/5', label: 'Avg. session rating', icon: Star, hue: 'from-amber-400/20 to-amber-300/0', ring: 'ring-amber-400/40', glow: 'shadow-[0_0_36px_rgba(251,191,36,0.25)]' },
    { value: '2500+', label: '1:1 Telephonic Sessions', icon: Phone, hue: 'from-fuchsia-400/20 to-fuchsia-300/0', ring: 'ring-fuchsia-400/40', glow: 'shadow-[0_0_36px_rgba(232,121,249,0.25)]' },
  ]
  return (
    <section className="relative border-t border-white/10 bg-[radial-gradient(1100px_520px_at_15%_-10%,rgba(255,213,0,0.12),transparent),radial-gradient(900px_480px_at_90%_0%,rgba(255,115,0,0.10),transparent),linear-gradient(to_bottom,#060606,#0b0b0b)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,180,0,0.10),transparent_60%)]" />
      <Container>
        <div className="py-18 md:py-20">
          <SectionHeader
            eyebrow="Snapshot"
            title={"Impact over last 5years."}
            subtitle={"Focused guidance with real reach and consistently high feedback."}
          />
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <motion.div
                key={s.label}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                className="relative h-full"
              >
                <div className={`rounded-2xl p-[1.5px] bg-gradient-to-br ${s.hue} h-full`}>
                  <div className={`relative rounded-2xl h-full w-full overflow-hidden ring-2 ${s.ring} ${s.glow} transition-shadow`}>
                    <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.12),transparent_40%)] opacity-60" />
                    <GlassCard className="relative p-6 text-center bg-[rgba(12,12,12,0.55)] h-full flex flex-col items-center justify-center">
                      <div className="mx-auto mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/10">
                        {React.createElement(s.icon, { className: 'h-4.5 w-4.5 text-white/80' })}
                      </div>
                      <p className="text-2xl md:text-3xl font-semibold text-white tracking-tight">{s.value}</p>
                      <p className="mt-1 text-sm text-zinc-400">{s.label}</p>
                      {s.subtitle && <p className="text-xs text-zinc-500 mt-0.5">{s.subtitle}</p>}
                    </GlassCard>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

function Agenda() {
  const session = {
    topic: 'Beyond the Rank: Strategy Roadmap to Your High-Value Engineering Future',
    live: true,
    datetime: 'Thurs, 20 Nov · 8:00–9:30 PM IST',
    bullets: [
      'Unconventional route for IIIT Hyderabad Admissions - CLD/CHD Exam',
      'Selecting branch: Is CS & AI right for you?',
      'Other premium colleges & ASCA scholarship eligibility.',
      'Life at Google London & Apple at a age of 19',
    ],
    mentor: {
      name: 'Swapnil Daga',
      title:
        'Guided over 50,000+ learners in their career so far. Right after college, Swapnil has cracked Google London & then moved on to Apple India. Currently leads teaching infra at AlgoUniversity.',
      avatar:
        'https://i.ibb.co/CsTh9Pm0/Copy-of-ASCSAI-Deck-1.png',
      tags: ['IIIT-Hyd Alumni', 'ECE'],
      logos: [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png',
        'https://www.shutterstock.com/image-vector/galati-romania-april-29-2023-600nw-2295394661.jpg',
      ],
      linkedin: 'https://www.linkedin.com/in/swapnil-daga1/'
    },
  }

  return (
    <section
      id="agenda"
      className="relative border-t border-zinc-200 bg-white text-black"
    >
      <Container>
        <div className="py-20">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-3 py-1 text-[11px] uppercase tracking-widest text-red-700">
              <Sparkles className="h-3.5 w-3.5 text-red-600" /> LIVE
            </div>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-black">Upcoming Master Sessions</h2>
            <p className="mt-3 text-zinc-600 max-w-2xl">
              LIVE deep-dive happening soon. Clear outcomes, zero fluff.
            </p>
          </div>

          {/* Unified single dark glass card with GREY glow and deeper dark tone */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            className="mt-10 relative"
          >
            <div className="relative overflow-hidden rounded-2xl bg-[rgba(6,6,6,0.88)] backdrop-blur-xl ring-2 ring-zinc-300/30 shadow-[0_0_0_1px_rgba(212,212,216,0.18),0_0_40px_rgba(148,163,184,0.25)]">
              {/* subtle neutral radial glows */}
              <div className="pointer-events-none absolute -left-24 top-0 h-full w-56 bg-[radial-gradient(500px_200px_at_40%_10%,rgba(148,163,184,0.18),transparent)]" />
              <div className="pointer-events-none absolute -right-24 bottom-0 h-48 w-80 bg-[radial-gradient(600px_240px_at_70%_90%,rgba(113,113,122,0.18),transparent)]" />

              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Left column: agenda details */}
                <div className="p-6 md:p-8">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-xl md:text-2xl font-semibold leading-snug text-white max-w-[80%]">
                      {session.topic}
                    </h3>
                    {session.live ? (
                      <span className="inline-flex items-center gap-2 rounded-full bg-red-500/15 text-red-300 px-3 py-1 text-xs font-semibold ring-1 ring-red-500/30">
                        <span className="relative flex h-2.5 w-2.5">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500/80 opacity-75"></span>
                          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500"></span>
                        </span>
                        LIVE
                      </span>
                    ) : null}
                  </div>

                  {/* Highlighted date & time */}
                  <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-amber-400/10 text-amber-200 px-3 py-1.5 text-sm ring-1 ring-amber-300/30 shadow-[0_0_24px_rgba(251,191,36,0.15)]">
                    <Calendar className="h-4 w-4 text-amber-300" />
                    <span className="font-medium tracking-wide">{session.datetime}</span>
                  </div>

                  <div className="mt-6 grid gap-3">
                    {session.bullets.map((b, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="mt-0.5">
                          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-400/20 text-amber-100 ring-1 ring-amber-300/30">
                            {i + 1}
                          </div>
                        </div>
                        <p className="text-zinc-300">{b}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-wrap items-center gap-3">
                    <a
                      href="https://airtable.com/appGPgtEBYio3Pufz/pagm1OHsUAJTxJJni/form?prefill_Source=website&hide_Source=true"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-white text-black px-4 py-2 text-sm font-medium hover:bg-zinc-100 transition-colors"
                    >
                      Register Now <ChevronRight className="h-4 w-4" />
                    </a>
                  </div>

                  {/* Note: removed left-side tag chips per request */}
                </div>

                {/* Right column: mentor highlight (top image, bottom content) */}
                <div className="border-t lg:border-t-0 lg:border-l border-white/10 bg-white/5 backdrop-blur-sm">
                  <div className="flex flex-col">
                    {/* Top: image */}
                    <div className="relative h-56 sm:h-64 md:h-72 lg:h-64">
                      <img
                        src={session.mentor.avatar}
                        alt={session.mentor.name}
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
                    </div>
                    {/* Bottom: text, tags, logos */}
                    <div className="p-6 md:p-8">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-base font-semibold text-white">{session.mentor.name}</p>
                          <p className="mt-1 text-sm text-zinc-300 leading-relaxed">{session.mentor.title}</p>
                        </div>
                        <BadgeCheck className="h-5 w-5 text-white/70" />
                      </div>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {session.mentor.tags.map((t) => (
                          <span key={t} className="rounded-full border border-amber-400/40 bg-amber-400/10 px-2.5 py-1 text-[11px] text-amber-100">
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* LinkedIn button moved below description & tags */}
                      <div className="mt-5">
                        <a
                          href={session.mentor.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white bg-[#0A66C2] hover:bg-[#095aab] transition-colors"
                        >
                          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-white"><path d="M20.447 20.452H17.21v-5.569c0-1.328-.026-3.037-1.852-3.037-1.853 0-2.136 1.447-2.136 2.944v5.662H9.086V9h3.104v1.561h.045c.433-.82 1.492-1.686 3.069-1.686 3.285 0 3.89 2.163 3.89 4.977v6.6zM5.337 7.433a1.804 1.804 0 1 1 0-3.609 1.804 1.804 0 0 1 0 3.609zM6.875 20.452H3.8V9h3.075v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                          Connect on LinkedIn
                        </a>
                      </div>
                    </div>

                    {/* White logo strip for better visibility */}
                    <div className="bg-white h-14 px-6 flex items-center gap-6">
                      {session.mentor.logos.map((logo, idx) => (
                        <img key={idx} src={logo} alt="logo" className="h-6 w-auto object-contain" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
      {/* Smooth transition back to dark theme */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-black/30 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black/40 to-transparent" />
    </section>
  )
}

function Mentors() {
  const mentors = [
    {
      name: 'Apaar Agrawal',
      title: 'IIIT-Hyderabad • International Paper',
      avatar: 'https://i.ibb.co/Q3CxgF0X/Apaar-ASCSAI-Deck.png',
      badges: ['IIIT-Hyderabad', 'International Paper'],
      description:
        'Previously at Slice as Data Engineer and is a graduate from IIIT-H. He leads the Admissions and Student Success operations, ensuring a smooth and transparent process for every learner.',
      logos: [
        'https://www.insightpartners.com/wp-content/uploads/2023/01/slice-logo-KO.png',
        'https://www.iiit.ac.in/wp-content/uploads/2022/06/IIIT_Hyderabad_Logo-e1655116937986.jpg',
      ],
    },
    {
      name: 'Swapnil Daga',
      title: 'IIIT-Hyderabad • ECE Background',
      avatar: 'https://i.ibb.co/CsTh9Pm0/Copy-of-ASCSAI-Deck-1.png',
      badges: ['IIIT-Hyderabad', 'ECE'],
      description:
        'Guided over 50,000+ learners in their career so far. Right after college, Swapnil has cracked Google London & then moved on to Apple India. Currently leads teaching infra at AlgoUniversity.',
      logos: [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png',
        'https://www.shutterstock.com/image-vector/galati-romania-april-29-2023-600nw-2295394661.jpg',
      ],
    },
    {
      name: 'Nikita Agarwal',
      title: 'IIIT-Hyderabad • Data Scientist',
      avatar: 'https://i.ibb.co/S7yK2pM9/Copy-of-ASCSAI-Deck-2.png',
      badges: ['IIIT-Hyderabad', 'Data Scientist'],
      description:
        'Previously at Microsoft as Data Scientist and Indeed as a senior software engineer. Nikita has logged almost 1000+ interviews for both students incoming to companies and companies’ roles.',
      logos: [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/2560px-Microsoft_logo_%282012%29.svg.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Indeed_logo.svg/2560px-Indeed_logo.svg.png',
      ],
    },
  ]
  return (
    <section id="mentors" className="relative bg-black border-t border-white/10">
      <Container>
        <div className="py-20">
          <SectionHeader
            eyebrow="Team"
            title="Meet the Mentors"
            subtitle="Handpicked guides with proven records in tech and education."
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {mentors.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="group relative overflow-hidden rounded-2xl h-full"
              >
                <div className="absolute inset-0 bg-[radial-gradient(600px_240px_at_80%_-20%,rgba(251,146,60,0.14),transparent),radial-gradient(500px_200px_at_10%_120%,rgba(253,224,71,0.12),transparent)] opacity-70 pointer-events-none" />
                <div className="rounded-2xl p-[1.5px] bg-gradient-to-br from-amber-400/30 via-orange-500/20 to-transparent h-full">
                  <div className="rounded-2xl overflow-hidden ring-2 ring-white/70 group-hover:ring-white transition h-full flex flex-col">
                    <div className="h-56 w-full overflow-hidden bg-[rgba(10,10,10,0.6)]">
                      <img src={m.avatar} alt={m.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    <div className="p-6 bg-white/[0.06] flex-1 flex flex-col">
                      <div className="flex items-center justify-between">
                        <p className="text-white text-lg font-medium">{m.name}</p>
                        <BadgeCheck className="h-5 w-5 text-white/70" />
                      </div>
                      <p className="mt-1 text-sm text-zinc-400">{m.title}</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {m.badges.map((b) => (
                          <span key={b} className="rounded-full border border-amber-400/40 bg-amber-400/10 px-2 py-0.5 text-[11px] text-amber-100">{b}</span>
                        ))}
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-zinc-300">{m.description}</p>
                    </div>
                    {/* White logo strip for consistency */}
                    <div className="bg-white h-14 px-6 flex items-center gap-6 overflow-x-auto">
                      {m.logos.map((logo, idx) => (
                        <img key={idx} src={logo} alt="logo" className="h-6 w-auto object-contain" />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

function ProudToBe() {
  const items = [
    { src: 'https://i.ibb.co/ymFHPmFM/Apaar-ASCSAI-Deck.jpg', alt: 'Gallery 1', className: 'col-span-2 row-span-2' },
    { src: 'https://i.ibb.co/FTmk0gV/1000115233.jpg', alt: 'Gallery 2', className: '' },
    { src: 'https://i.ibb.co/N26gR2fF/Apaar-ASCSAI-Deck-1.jpg', alt: 'Gallery 3', className: 'row-span-2' },
    { src: 'https://i.ibb.co/gFB6hLqM/1000115232.jpg', alt: 'Gallery 4', className: '' },
    { src: 'https://i.ibb.co/wNZ8ch8p/Apaar-ASCSAI-Deck-2.jpg', alt: 'Gallery 5', className: 'col-span-2' },
    { src: 'https://i.ibb.co/vvgcXyKg/1000115231.jpg', alt: 'Gallery 6', className: '' },
  ]

  return (
    <section className="relative bg-black border-t border-white/10">
      <Container>
        <div className="py-20">
          <SectionHeader
            eyebrow="Proud to be"
            title="Proud to be"
            subtitle="Snapshots from our journey, community and sessions."
          />

          <div className="mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[120px] md:auto-rows-[140px] gap-4">
              {items.map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                  className={`relative group ${item.className}`}
                >
                  <div className="h-full w-full overflow-hidden ring-2 ring-white/70 group-hover:ring-white transition rounded-xl bg-white/5">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

function Offerings() {
  return (
    <section id="offerings" className="relative bg-black border-t border-white/10">
      <Container>
        <div className="py-20">
          <SectionHeader
            eyebrow="What we offer"
            title="Flexible sessions for every need."
            subtitle="Choose a free group masterclass for selected institutions or a focused 1:1 session."
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div whileHover={{ y: -4 }} className="relative">
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-white/30 to-transparent opacity-40 pointer-events-none" />
              <GlassCard className="relative p-8 flex flex-col justify-between h-full ring-2 ring-white/70 hover:ring-white transition">
                <div>
                  <p className="text-white text-xl font-medium">Group Sessions</p>
                  <p className="mt-2 text-zinc-400">
                    Free for handpicked elite coachings and schools. Invite us for an on-campus masterclass.
                  </p>
                </div>
                <a href="tel:+917032058474" className="mt-6 inline-flex items-center gap-2 w-max rounded-full bg-white text-black px-5 py-2.5 text-sm font-medium hover:bg-zinc-100 transition-colors">
                  <Phone className="h-4 w-4" /> +91-7032058474
                </a>
              </GlassCard>
            </motion.div>

            <motion.div whileHover={{ y: -4 }} id="book" className="relative">
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-white/30 to-transparent opacity-40 pointer-events-none" />
              <GlassCard className="relative p-8 ring-2 ring-white/70 hover:ring-white transition h-full">
                <p className="text-white text-xl font-medium">1:1 Parent–Student Career Counseling</p>
                <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-400" /> 45 minutes deep-dive tailored to your context</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-400" /> Actionable plan: exams, branches, colleges, timelines</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-400" /> Includes Q&A for parents and student</li>
                </ul>
                <div className="mt-6 flex items-center justify-between">
                  <div className="text-zinc-300">
                    <p className="text-sm">Single session</p>
                    <div className="mt-1 flex items-baseline gap-2">
                      <span className="text-xl text-zinc-400 line-through">₹1200</span>
                      <span className="text-2xl text-emerald-400 font-semibold">Free</span>
                      <span className="text-xs text-zinc-400">(till 30th Nov)</span>
                    </div>
                  </div>
                  <a
                    href="https://airtable.com/appGPgtEBYio3Pufz/pagk4Ph6TuKeTXPho/form?prefill_Source=website&hide_Source=true"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-2.5 text-sm font-medium hover:bg-zinc-100 transition-colors"
                  >
                    <Calendar className="h-4 w-4" /> Book Now
                  </a>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  )
}

function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/10">
      <Container>
        <div className="py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-xs text-zinc-500">© 2025 AlgoUniversity. All rights reserved.</div>
            <div className="text-sm text-zinc-300 md:text-right">
              To know more contact — <a href="tel:+917032058474" className="inline-flex items-center gap-2 text-white hover:opacity-80"><Phone className="h-4 w-4" aria-hidden="true" /> +91-7032058474</a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      {/* Order per request: 1) Hero 2) Stats 3) Offering Session 4) Master Session 5) Meet the mentor 6) Proud to be 7) Footer */}
      <Hero />
      <Stats />
      <Offerings />
      <Agenda />
      <Mentors />
      <ProudToBe />
      <Footer />
    </div>
  )
}
