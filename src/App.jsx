import React, { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, CheckCircle2, ChevronDown, ChevronRight, ExternalLink, Menu, Phone, Play, Star, Users } from 'lucide-react'
import Spline from '@splinetool/react-spline'

const Container = ({ children }) => (
  <div className="mx-auto w-full max-w-7xl px-6 md:px-8">{children}</div>
)

function Navbar() {
  const [open, setOpen] = useState(false)
  const navItems = [
    { label: 'Agenda', href: '#agenda' },
    { label: 'Mentors', href: '#mentors' },
    { label: 'Offerings', href: '#offerings' },
    { label: 'Testimonials', href: '#testimonials' },
  ]
  return (
    <div className="sticky top-0 z-40 backdrop-blur-md bg-black/40 border-b border-white/10">
      <Container>
        <div className="flex items-center justify-between py-4">
          <a href="#" className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-gradient-to-tr from-zinc-200 via-white to-zinc-300" />
            <span className="text-sm tracking-widest text-zinc-200">VETERAN MENTORS</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} className="text-zinc-300 hover:text-white transition-colors text-sm">
                {n.label}
              </a>
            ))}
            <a href="#book" className="inline-flex items-center gap-2 rounded-full bg-white text-black px-4 py-2 text-sm font-medium hover:bg-zinc-100 transition-colors">
              Book 1:1 <ChevronRight className="h-4 w-4" />
            </a>
          </div>
          <button className="md:hidden p-2 rounded-md hover:bg-white/5" onClick={() => setOpen(!open)}>
            <Menu className="h-5 w-5 text-white" />
          </button>
        </div>
        {open && (
          <div className="md:hidden grid gap-2 pb-4">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} className="text-zinc-300 hover:text-white transition-colors text-sm py-2 border-t border-white/10">
                {n.label}
              </a>
            ))}
            <a href="#book" className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-black px-4 py-2 text-sm font-medium hover:bg-zinc-100 transition-colors">
              Book 1:1 <ChevronRight className="h-4 w-4" />
            </a>
          </div>
        )}
      </Container>
    </div>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_60%)]" />
      <Container>
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-16 py-24 md:py-28 lg:py-32">
          <div className="flex flex-col justify-center">
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
              <a href="#book" className="inline-flex items-center justify-center rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:bg-zinc-100 transition-colors">
                Book 1:1 Counseling
              </a>
              <a href="#agenda" className="inline-flex items-center justify-center rounded-full bg-white/10 text-white px-6 py-3 text-sm font-medium hover:bg-white/20 transition-colors">
                Explore Master Sessions
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-zinc-400">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>3 mentors • ex BigTech</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4" />
                <span>Apple-level polish</span>
              </div>
            </div>
          </div>

          <div className="relative w-full h-[280px] sm:h-[360px] md:h-[420px] lg:h-[520px] rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
            <video
              className="absolute inset-0 h-full w-full object-cover"
              src="https://cdn.coverr.co/videos/coverr-students-studying-together-1396/1080p.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <div className="text-white">
                <p className="text-sm uppercase tracking-widest text-white/70">On the right</p>
                <p className="text-base font-medium">A quick intro from mentors</p>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Play className="h-5 w-5" />
                <span className="text-sm">Autoplay • Muted</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

function Stats() {
  const stats = [
    { label: 'Students Guided', value: '2,300+' },
    { label: 'Schools & Coachings', value: '40+' },
    { label: 'Avg. Session Rating', value: '4.9/5' },
    { label: 'Cities Reached', value: '18' },
  ]
  return (
    <section className="bg-black border-t border-white/10">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-14">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 text-center">
              <p className="text-2xl md:text-3xl font-semibold text-white">{s.value}</p>
              <p className="mt-2 text-sm text-zinc-400">{s.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

function Agenda() {
  const topics = [
    {
      title: "Less-known routes: IIIT Hyderabad's CLD / CHD exam",
      desc: 'Understand patterns, prep strategies, and how they differ from JEE mains/adv.',
    },
    {
      title: 'DASA quota rules & ASCA scholarships',
      desc: 'For NRI/PIO—clarity on eligibility, timelines, and realistic options.',
    },
    {
      title: 'Selecting branch: Is CS & AI right for you?',
      desc: 'Frameworks to decide between CS, AI/ML, ECE, and interdisciplinary choices.',
    },
    {
      title: 'Life at Google London & Apple at 19',
      desc: 'Candid stories: work culture, impact, compensation, and expectations.',
    },
  ]
  return (
    <section id="agenda" className="bg-black">
      <Container>
        <div className="py-20">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Agenda • Master Sessions</h2>
          <p className="mt-3 text-zinc-400 max-w-2xl">
            Deep-dives designed for ambitious students and parents. Minimal fluff, maximum clarity.
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {topics.map((t) => (
              <div key={t.title} className="group rounded-2xl bg-gradient-to-b from-white/10 to-white/5 p-[1px]">
                <div className="h-full rounded-2xl bg-black p-6 ring-1 ring-white/10">
                  <div className="flex items-start justify-between gap-6">
                    <h3 className="text-white text-lg font-medium leading-snug max-w-[80%]">{t.title}</h3>
                    <ChevronRight className="h-5 w-5 text-white/50 group-hover:text-white transition-colors" />
                  </div>
                  <p className="mt-3 text-sm text-zinc-400">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

function Mentors() {
  const mentors = [
    {
      name: 'Swapnil',
      title: 'IIIT Hyderabad (B.Tech) • Ex Apple • Ex Google London',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop',
    },
    {
      name: 'Manas',
      title: 'Veteran Mentor • Tech + Product',
      avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=300&auto=format&fit=crop',
    },
    {
      name: 'Nikita',
      title: 'IIIT Hyderabad CS • Ex Microsoft • Ex Indeed',
      avatar: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=300&auto=format&fit=crop',
    },
  ]
  return (
    <section id="mentors" className="bg-black border-t border-white/10">
      <Container>
        <div className="py-20">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Meet the Mentors</h2>
          <p className="mt-3 text-zinc-400 max-w-2xl">Handpicked guides with proven records in tech and education.</p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {mentors.map((m) => (
              <div key={m.name} className="rounded-2xl overflow-hidden bg-white/5 ring-1 ring-white/10">
                <div className="h-56 w-full overflow-hidden">
                  <img src={m.avatar} alt={m.name} className="h-full w-full object-cover" />
                </div>
                <div className="p-6">
                  <p className="text-white text-lg font-medium">{m.name}</p>
                  <p className="mt-1 text-sm text-zinc-400">{m.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

function Offerings() {
  return (
    <section id="offerings" className="bg-black border-t border-white/10">
      <Container>
        <div className="py-20">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Offerings</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-8 flex flex-col justify-between">
              <div>
                <p className="text-white text-xl font-medium">Group Sessions</p>
                <p className="mt-2 text-zinc-400">
                  Free for handpicked elite coachings and schools. Invite us for an on-campus masterclass.
                </p>
              </div>
              <a href="tel:+919999999999" className="mt-6 inline-flex items-center gap-2 w-max rounded-full bg-white text-black px-5 py-2.5 text-sm font-medium hover:bg-zinc-100 transition-colors">
                <Phone className="h-4 w-4" /> +91 99999 99999
              </a>
            </div>

            <div id="book" className="rounded-2xl bg-gradient-to-br from-white/10 to-white/[0.06] ring-1 ring-white/10 p-8">
              <p className="text-white text-xl font-medium">1:1 Parent–Student Career Counseling</p>
              <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-400" /> 45 minutes deep-dive tailored to your context</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-400" /> Actionable plan: exams, branches, colleges, timelines</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-400" /> Includes Q&A for parents and student</li>
              </ul>
              <div className="mt-6 flex items-center justify-between">
                <div className="text-zinc-300">
                  <p className="text-sm">Single session</p>
                  <p className="text-2xl text-white font-semibold">₹1200</p>
                </div>
                <a
                  href="https://calendly.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-2.5 text-sm font-medium hover:bg-zinc-100 transition-colors"
                >
                  <Calendar className="h-4 w-4" /> Book via Calendly <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

function Testimonials() {
  const all = useMemo(
    () => [
      { name: 'Aarav, JEE 2024', text: 'Crystal-clear on CLD/CHD and alternate routes. Saved months of confusion.' },
      { name: 'Parent, Hyderabad', text: 'Balanced, realistic advice. No hype—just experience.' },
      { name: 'Khushi, XI', text: 'The branch selection framework was gold. Now I know CS vs ECE for me.' },
      { name: 'Rahul, NRI', text: 'DASA and ASCA explained like a friend. We finally know the roadmap.' },
      { name: 'Meera, XII', text: 'Hearing about life at Google London was so motivating.' },
      { name: 'Aniket, Pune', text: 'Loved the Q&A—practical tips I can apply this week.' },
      { name: 'Priya, Parent', text: '45 minutes packed with specifics. Worth every rupee.' },
      { name: 'Sahil, Kota', text: 'Group session at our coaching was eye-opening and fun.' },
    ],
    []
  )
  const [expanded, setExpanded] = useState(false)
  const visible = expanded ? all : all.slice(0, 4)
  return (
    <section id="testimonials" className="bg-black border-t border-white/10">
      <Container>
        <div className="py-20">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Testimonials</h2>
          <p className="mt-3 text-zinc-400 max-w-2xl">Real notes from students and parents. Minimal, bento-style grid.</p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visible.map((t, i) => (
              <div key={i} className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 flex flex-col justify-between">
                <p className="text-zinc-300">“{t.text}”</p>
                <div className="mt-4 text-sm text-zinc-400">— {t.name}</div>
              </div>
            ))}
            <div className="rounded-2xl bg-gradient-to-br from-white/10 to-white/[0.06] ring-1 ring-white/10 p-6 flex items-center justify-center">
              <button onClick={() => setExpanded(!expanded)} className="inline-flex items-center gap-2 text-white/90 hover:text-white">
                {expanded ? 'Show less' : 'Show more'} <ChevronDown className={`h-4 w-4 transition-transform ${expanded ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <Container>
        <div className="py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-zinc-500 text-sm">
          <p>© {new Date().getFullYear()} Veteran Mentors. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#agenda" className="hover:text-zinc-300">Agenda</a>
            <a href="#offerings" className="hover:text-zinc-300">Offerings</a>
            <a href="#testimonials" className="hover:text-zinc-300">Testimonials</a>
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
      <Hero />
      <Stats />
      <Agenda />
      <Mentors />
      <Offerings />
      <Testimonials />
      <Footer />
    </div>
  )
}
