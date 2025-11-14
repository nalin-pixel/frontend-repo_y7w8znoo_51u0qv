import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Navbar */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop"
              alt="Flare Digital logo"
              className="w-10 h-10 rounded-lg object-cover"
            />
            <span className="text-xl font-semibold tracking-tight">Flare Digital</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <a href="#services" className="hover:text-gray-900">Services</a>
            <a href="#portfolio" className="hover:text-gray-900">Work</a>
            <a href="#process" className="hover:text-gray-900">Process</a>
            <a href="#pricing" className="hover:text-gray-900">Pricing</a>
            <a href="#about" className="hover:text-gray-900">About</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </nav>
          <a href="#contact" className="hidden md:inline-flex bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">Get a Proposal</a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <svg className="absolute -top-24 -right-24 w-[480px] h-[480px] opacity-20" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#c7d2fe" d="M44.5,-71.1C57.6,-63.8,67.3,-51.2,74.9,-37.3C82.6,-23.3,88.2,-8.1,87.9,7.6C87.7,23.2,81.6,39.2,71.5,51.1C61.4,62.9,47.4,70.7,33,74.2C18.6,77.6,3.7,76.7,-9.7,72.5C-23.1,68.2,-35,60.6,-46.6,51.6C-58.2,42.7,-69.5,32.5,-75.4,19.4C-81.3,6.3,-81.7,-9.7,-76.3,-23.1C-70.9,-36.5,-59.6,-47.3,-47.2,-55.4C-34.7,-63.6,-21.1,-69.2,-6.1,-66.6C8.8,-64,17.6,-53.2,44.5,-71.1Z" transform="translate(100 100)" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Freelance Digital Marketing that turns browsers into buyers
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed">
              I help ambitious startups, solo founders, and growing brands attract ready-to-buy customers through strategic SEO, performance ads, and conversion-focused content. No fluff—just measurable growth delivered with the speed and flexibility of a dedicated freelancer.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="inline-flex justify-center items-center bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
                Book a free strategy call
              </a>
              <a href="#portfolio" className="inline-flex justify-center items-center border border-gray-300 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-50 transition">
                See recent wins
              </a>
            </div>
            <div className="mt-10 flex items-center gap-6 text-sm text-gray-600">
              <div className="flex -space-x-2">
                <img className="w-8 h-8 rounded-full object-cover border border-white" src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=120&auto=format&fit=crop" alt="Client avatar 1"/>
                <img className="w-8 h-8 rounded-full object-cover border border-white" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=120&auto=format&fit=crop" alt="Client avatar 2"/>
                <img className="w-8 h-8 rounded-full object-cover border border-white" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=120&auto=format&fit=crop" alt="Client avatar 3"/>
              </div>
              <span>Trusted by 70+ founders and marketing teams</span>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop"
              alt="Modern workspace with analytics on screen"
              className="w-full h-[380px] md:h-[520px] object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-5 w-[280px] border border-gray-100">
              <p className="text-sm font-semibold text-gray-900">Last 90 days</p>
              <div className="mt-3 grid grid-cols-3 gap-3 text-center">
                <div>
                  <p className="text-2xl font-bold">+214%</p>
                  <p className="text-xs text-gray-500">Organic</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">3.7x</p>
                  <p className="text-xs text-gray-500">ROAS</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">+48%</p>
                  <p className="text-xs text-gray-500">Leads</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logos */}
      <section className="py-12 border-t border-b border-gray-100 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs uppercase tracking-wider text-gray-500 mb-6">Seen in and trusted by</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center opacity-70">
            {[
              'https://images.unsplash.com/photo-1611162618071-b39a2ec1a8c1?q=80&w=600&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=600&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?q=80&w=600&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=600&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1524666041070-9d87656c25bb?q=80&w=600&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1516245834210-c4c142787335?q=80&w=600&auto=format&fit=crop',
            ].map((src, i) => (
              <img key={i} src={src} alt={`Partner logo ${i+1}`} className="w-full h-12 object-cover rounded" />
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
              Services designed to compound growth
            </h2>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Effective digital marketing is a system, not a single tactic. I bring together channel strategy, media buying, and conversion copy to build a growth engine that scales with your brand. Each service is modular so you can start where impact is highest and expand as results compound.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition bg-white">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop" alt="SEO strategy board" className="w-full h-40 object-cover rounded-xl"/>
              <h3 className="mt-5 text-xl font-bold">Search Engine Optimization</h3>
              <p className="mt-3 text-gray-600 leading-relaxed">
                From technical fixes to editorial calendars, I help you rank for the terms that matter. Expect a crawlable site, content that earns links, and dashboards that show traffic translating into sales. Deliverables include audits, on-page optimization, content briefs, and link acquisition strategies.
              </p>
              <ul className="mt-4 text-sm text-gray-600 list-disc list-inside space-y-1">
                <li>Technical and on-page SEO</li>
                <li>Content roadmaps and briefs</li>
                <li>Authority building and PR outreach</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition bg-white">
              <img src="https://images.unsplash.com/photo-1722215365223-b912b6628ade?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxQZXJmb3JtYW5jZSUyMGFkdmVydGlzaW5nJTIwZGFzaGJvYXJkfGVufDB8MHx8fDE3NjMxMTk1ODZ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Performance advertising dashboard" className="w-full h-40 object-cover rounded-xl"/>
              <h3 className="mt-5 text-xl font-bold">Performance Advertising</h3>
              <p className="mt-3 text-gray-600 leading-relaxed">
                Profit-focused campaigns across Google, Meta, and LinkedIn. I build full-funnel structures, test creative rapidly, and optimize for the metrics that move your business—qualified leads, booked demos, and revenue. Clear weekly reporting and granular experiment logs keep you in the loop.
              </p>
              <ul className="mt-4 text-sm text-gray-600 list-disc list-inside space-y-1">
                <li>Google Search & Shopping</li>
                <li>Meta & LinkedIn paid social</li>
                <li>Landing page CRO and A/B testing</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition bg-white">
              <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop" alt="Content marketing planning" className="w-full h-40 object-cover rounded-xl"/>
              <h3 className="mt-5 text-xl font-bold">Content & Conversion</h3>
              <p className="mt-3 text-gray-600 leading-relaxed">
                Educational content that attracts while persuasive copy converts. I craft articles, lead magnets, and email sequences that build trust, plus landing pages and nurture flows that remove friction. Every piece is mapped to the customer journey and measured for impact.
              </p>
              <ul className="mt-4 text-sm text-gray-600 list-disc list-inside space-y-1">
                <li>Editorial strategy and production</li>
                <li>Lead magnets and email automation</li>
                <li>UX copy, landing pages, and sales enablement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">Recent work and wins</h2>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              I measure success by outcomes: lower acquisition costs, higher conversion rates, and repeatable systems. Here are a few engagements that showcase what a focused freelance partnership can deliver.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[{
              title: 'B2B SaaS: 3.1x pipeline from organic',
              img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop',
              text: 'Built a content engine around problem-led topics, reworked nav architecture, and shipped schema fixes. Result: 214% organic traffic growth and 3.1x qualified pipeline in 8 months.'
            },{
              title: 'DTC: 2.9x ROAS with creative sprints',
              img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1200&auto=format&fit=crop',
              text: 'Set up a creative testing framework, launched UGC ads, and rebuilt PDPs around objections. Achieved 2.9x blended ROAS at scale with day-to-day optimizations.'
            },{
              title: 'EdTech: 48% more qualified leads',
              img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop',
              text: 'Introduced lead scoring, revamped landing flow, and added nurturing emails. Lead-to-demo rate rose from 11% to 19%, with cost per SQL down 32%.'
            }].map((c, i) => (
              <div key={i} className="rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-sm hover:shadow-md transition">
                <img src={c.img} alt={c.title} className="w-full h-48 object-cover"/>
                <div className="p-6">
                  <h3 className="text-lg font-semibold">{c.title}</h3>
                  <p className="mt-2 text-gray-600 leading-relaxed">{c.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">A simple, transparent process</h2>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Freelance shouldn’t mean guesswork. You’ll know exactly what we’re working on, why it matters, and how we measure success. I operate in focused sprints, communicate asynchronously, and share dashboards so you can track progress at a glance without extra meetings.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-4 gap-6">
            {[{
              step: '01', title: 'Discovery & Goals', text: 'We align on objectives, constraints, and current performance. I audit analytics, channels, and conversion paths to uncover near-term wins and long-term opportunities.'
            },{
              step: '02', title: 'Strategy & Plan', text: 'I build a roadmap with milestones, experiments, and KPIs. You’ll see what we’re testing, when to expect results, and how we’ll attribute impact.'
            },{
              step: '03', title: 'Execution Sprints', text: 'We roll out changes in weekly cycles—content going live, campaigns launching, and pages iterating based on data. You get updates without chasing status.'
            },{
              step: '04', title: 'Measure & Scale', text: 'We double down on winners, retire losers, and keep compounding. The goal: predictable acquisition you can confidently invest in.'
            }].map((p, i) => (
              <div key={i} className="rounded-2xl border border-gray-100 p-6 bg-white">
                <div className="text-sm text-gray-500 font-mono">{p.step}</div>
                <h3 className="mt-2 text-xl font-semibold">{p.title}</h3>
                <p className="mt-3 text-gray-600 leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">Flexible, value-first pricing</h2>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Every engagement is scoped around outcomes and focus. For early-stage teams, we’ll prioritize quick wins and foundations. For growing brands, we’ll scale what’s already working while opening new channels. Below are typical starting points; we’ll tailor a plan to your goals during the discovery call.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[{
              name: 'Starter Sprint', price: '$1,500', features: ['Technical & on-page audit', 'Keyword + content roadmap', 'Ad account + analytics review', 'Quick-win implementation'], cta: 'Start with a sprint'
            },{
              name: 'Growth Retainer', price: '$3,500+', features: ['SEO + content production', 'Paid search/social management', 'Landing page CRO', 'Weekly reporting + roadmap'], cta: 'Apply for retainer'
            },{
              name: 'Scale Partnership', price: 'Custom', features: ['Senior embedded support', 'Cross-channel strategy', 'Creative testing program', 'RevOps + attribution guidance'], cta: 'Discuss your goals'
            }].map((t, i) => (
              <div key={i} className="rounded-2xl border border-gray-100 p-6 bg-white shadow-sm">
                <h3 className="text-xl font-bold">{t.name}</h3>
                <p className="mt-2 text-3xl font-extrabold">{t.price}</p>
                <ul className="mt-4 text-sm text-gray-600 space-y-2">
                  {t.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-gray-900"></span>{f}</li>
                  ))}
                </ul>
                <a href="#contact" className="mt-6 inline-flex bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">{t.cta}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
            alt="Freelancer at work with clients"
            className="w-full h-[420px] object-cover rounded-2xl shadow-lg"
          />
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">Hi, I’m Alex—your fractional growth partner</h2>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Over the past seven years I’ve helped founders and marketing teams generate predictable growth across search, social, and owned channels. I bring a strategist’s perspective and an operator’s bias for action. That means less theory, more experiments, and clear reporting so you can see what’s moving the needle.
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Before freelancing I led acquisition at a venture-backed SaaS company and consulted for agencies serving eCommerce and B2B brands. Today, I work directly with clients in focused sprints. You get senior attention, flexible scope, and the agility to adapt as we learn from the data.
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              When I’m not deep in dashboards, you’ll find me writing playbooks, speaking at meetups, and mentoring early-stage marketers. I care about craftsmanship, clear communication, and building systems that keep compounding long after the engagement ends.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">What clients say</h2>
            <p className="mt-4 text-lg text-gray-600">Real results, real relationships. Here’s feedback from teams I’ve partnered with.</p>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[{
              quote: 'Alex brought clarity to a noisy channel mix. In 90 days our CAC dropped 37% while inbound demos doubled. The weekly updates kept everyone aligned.',
              name: 'Maya Patel', role: 'VP Growth, B2B SaaS'
            },{
              quote: 'Our ads finally make sense. The creative testing process gave us a backlog of winners and our ROAS stabilized even as we scaled budget.',
              name: 'Jordan Lee', role: 'Head of eCommerce'
            },{
              quote: 'Professional, fast, and focused on outcomes. The content program continues to drive compounding organic traffic months after launch.',
              name: 'Sara Gomez', role: 'Director of Marketing, EdTech'
            }].map((t, i) => (
              <div key={i} className="rounded-2xl border border-gray-100 p-6 bg-white">
                <p className="text-gray-700 leading-relaxed">“{t.quote}”</p>
                <div className="mt-4">
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Long-form SEO section (adds word count) */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">A modern approach to freelance digital marketing</h2>
          <div className="mt-6 space-y-5 text-lg text-gray-700 leading-relaxed">
            <p>
              The marketing landscape evolves quickly, but the fundamentals remain the same: understand your customer, craft a compelling offer, and communicate it consistently across the channels where they pay attention. My approach blends timeless strategy with tactical execution. Instead of chasing every new trend, we double down on what reliably creates value—earning attention with useful content, targeting demand with precise ads, and transforming interest into action with clear, persuasive experiences.
            </p>
            <p>
              For organic growth, that means shipping content with intent. We identify the problems your ideal customers search for, then build articles, guides, and resources that solve those problems better than anyone else. Every piece has a purpose: educating, qualifying, and nudging readers toward the next step. We optimize information architecture so search engines can crawl and understand your site, and we structure content to earn links naturally by being genuinely helpful.
            </p>
            <p>
              On the paid side, we run a rigorous testing cadence. Ads are hypotheses—creative that explores angles, objections, and triggers. We benchmark performance, rotate variations, and cut losers quickly. Rather than chasing vanity metrics, we focus on business outcomes: qualified pipeline, revenue, and lifetime value. When a message resonates, we scale budget confidently because the numbers tell the story.
            </p>
            <p>
              Conversion rate optimization ties everything together. Even small improvements to landing pages have compound effects across traffic sources. I obsess over clarity: clear headlines that state value, proof that reduces doubt, and design that guides attention to the action. We remove friction, highlight outcomes, and make it easy for visitors to say yes. Over time, these gains stack—turning more clicks into customers without simply spending more.
            </p>
            <p>
              Transparency is non-negotiable. You get visibility into the roadmap, the experiments in flight, and the data behind decisions. I work asynchronously with crisp documentation so your team stays informed without extra meetings. The result is a partnership that feels embedded: senior strategy, careful execution, and momentum you can feel week over week.
            </p>
            <p>
              Whether you’re validating an MVP, unlocking a growth plateau, or preparing to scale, we’ll build a plan that matches your stage. We prioritize high-leverage work, ship quickly, and measure relentlessly. Growth isn’t magic—it’s the result of consistent, focused effort applied to the right levers. That’s what I bring to the table.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Ready to turn attention into revenue?</h2>
            <p className="mt-4 text-lg text-gray-300">
              Share your goals and I’ll send a tailored plan with timelines, milestones, and expected outcomes. If we’re a fit, we’ll begin with a focused sprint and scale from there.
            </p>
            <ul className="mt-6 space-y-2 text-gray-300 text-sm">
              <li>• Free 30-minute strategy call</li>
              <li>• Clear scope and transparent pricing</li>
              <li>• No long-term contracts</li>
            </ul>
          </div>
          <form className="bg-white rounded-2xl p-6 text-gray-800 shadow-xl">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-600">First name</label>
                <input className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900" placeholder="Jane"/>
              </div>
              <div>
                <label className="text-sm text-gray-600">Last name</label>
                <input className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900" placeholder="Doe"/>
              </div>
              <div className="md:col-span-2">
                <label className="text-sm text-gray-600">Email</label>
                <input type="email" className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900" placeholder="you@company.com"/>
              </div>
              <div className="md:col-span-2">
                <label className="text-sm text-gray-600">What are you trying to achieve?</label>
                <textarea className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 h-28 focus:outline-none focus:ring-2 focus:ring-gray-900" placeholder="Tell me about your goals, timeline, and success metrics."></textarea>
              </div>
            </div>
            <button type="button" className="mt-4 w-full bg-gray-900 text-white px-4 py-3 rounded-lg hover:bg-gray-800 transition">Request proposal</button>
            <p className="mt-3 text-xs text-gray-500">By submitting, you agree to receive a response via email. No spam—ever.</p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop"
              alt="Flare Digital logo"
              className="w-9 h-9 rounded-lg object-cover"
            />
            <p className="text-sm text-gray-500">© {new Date().getFullYear()} Flare Digital. All rights reserved.</p>
          </div>
          <div className="text-sm text-gray-500">
            <a href="#" className="hover:text-gray-800">Privacy</a>
            <span className="mx-3">•</span>
            <a href="#" className="hover:text-gray-800">Terms</a>
            <span className="mx-3">•</span>
            <a href="#contact" className="hover:text-gray-800">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
