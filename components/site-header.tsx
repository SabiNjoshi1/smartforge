'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ChevronDown, Menu, Moon, Sun, X, ArrowUpRight } from 'lucide-react'
import { headerNav, getStarted, SITE_NAME } from '@/lib/site'

export function SiteHeader() {
  const [open, setOpen] = useState<string | null>(null)
  const [mobile, setMobile] = useState(false)
  const [dark, setDark] = useState(true)
  const toggleTheme = () => { document.documentElement.classList.toggle('dark'); setDark(!dark) }
  return <header className="sticky top-0 z-50 border-b border-line bg-bg/90 backdrop-blur-xl">
    <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
      <Link href="/" className="flex items-center gap-3 font-semibold tracking-tight" aria-label={`${SITE_NAME} home`}>
        <span className="grid size-7 grid-cols-2 gap-0.5 rounded-sm bg-accent p-1"><i className="bg-accent-fg"/><i className="bg-accent-fg"/><i className="bg-accent-fg"/><i className="bg-accent-fg"/></span><span>{SITE_NAME}</span>
      </Link>
      <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
        {headerNav.map(item => item.groups ? <div key={item.label} className="relative" onMouseEnter={() => setOpen(item.label)} onMouseLeave={() => setOpen(null)}>
          <button onClick={() => setOpen(open === item.label ? null : item.label)} className="flex items-center gap-1 rounded-md px-3 py-2 text-sm text-fg-muted hover:bg-panel hover:text-fg">{item.label}<ChevronDown className="size-3.5" /></button>
          {open === item.label && <div className="absolute left-0 top-full w-[360px] rounded-lg border border-line bg-bg-elevated p-2 shadow-2xl">
            {item.groups.map(group => <div key={group.heading} className="mb-2 last:mb-0">{group.heading && <p className="px-3 pb-1 pt-2 font-mono text-[10px] uppercase tracking-widest text-fg-subtle">{group.heading}</p>}{group.links.map(link => <Link key={link.href} href={link.href} className="block rounded-md p-3 hover:bg-panel"><span className="text-sm font-medium capitalize">{link.label}</span><span className="mt-0.5 block text-xs text-fg-muted">{link.description}</span></Link>)}</div>)}
          </div>}
        </div> : <Link key={item.label} href={item.href!} className="rounded-md px-3 py-2 text-sm text-fg-muted hover:bg-panel hover:text-fg">{item.label}</Link>)}
      </nav>
      <div className="hidden items-center gap-2 lg:flex"><a href="https://github.com/kiln-dev/kiln" target="_blank" rel="noopener noreferrer" className="rounded-md border border-line px-3 py-2 font-mono text-xs text-fg-muted hover:border-fg-subtle hover:text-fg">GitHub <span className="text-accent">65k</span></a><Link href="/contact-sales" className="px-3 py-2 text-sm text-fg-muted hover:text-fg">Book a demo</Link><Link href="/factories/request-access" className="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-fg hover:brightness-110">Get started</Link><button aria-label="Toggle theme" onClick={toggleTheme} className="rounded-md p-2 text-fg-muted hover:bg-panel hover:text-fg">{dark ? <Sun className="size-4"/> : <Moon className="size-4"/>}</button></div>
      <button className="rounded-md p-2 lg:hidden" aria-label="Open menu" onClick={() => setMobile(true)}><Menu className="size-5"/></button>
    </div>
    {mobile && <div className="fixed inset-0 z-50 bg-bg p-5 lg:hidden"><div className="flex items-center justify-between"><Link href="/" className="font-semibold">{SITE_NAME}</Link><button onClick={() => setMobile(false)} aria-label="Close menu"><X/></button></div><nav className="mt-10 grid gap-2">{headerNav.map(item => <div key={item.label}>{item.href ? <Link onClick={() => setMobile(false)} href={item.href} className="block border-b border-line py-4 text-xl">{item.label}</Link> : <details className="border-b border-line py-4"><summary className="cursor-pointer text-xl">{item.label}</summary><div className="grid gap-2 py-3 pl-3">{item.groups?.flatMap(g => g.links).map(link => <Link onClick={() => setMobile(false)} key={link.href} href={link.href} className="flex items-center justify-between py-2 text-fg-muted">{link.label}<ArrowUpRight className="size-4"/></Link>)}</div></details>}</div>)}</nav></div>}
  </header>
}

export function Footer() { return <footer className="border-t border-line bg-bg-elevated"><div className="mx-auto max-w-7xl px-5 py-16 lg:px-8"><div className="grid gap-10 md:grid-cols-5"><div><Link href="/" className="font-semibold">SmartForge</Link><p className="mt-4 max-w-xs text-sm leading-6 text-fg-muted">The open platform for automating development.</p><a href="mailto:info@smartforge.ltd" className="mt-4 inline-block text-sm text-fg-muted underline decoration-line underline-offset-4 hover:text-accent">info@smartforge.ltd</a><p className="mt-8 font-mono text-xs text-fg-subtle">© 2026 SmartForge Labs</p></div>{[['Product',['/download','/pricing','/enterprise','/docs','/open-source','/status']],['Resources',['/blog','/faq','/community','/support','/do-things','/terminus']],['Company',['/about','/how-we-work','/careers','/press','/contact']],['Legal',['/legal/privacy-policy','/legal/terms-of-service','/legal/security','/legal/cookie-notice']]].map(([title, links]) => <div key={title as string}><h3 className="text-sm font-medium">{title as string}</h3><div className="mt-4 grid gap-3">{(links as string[]).map(href => <Link key={href} href={href} className="text-sm capitalize text-fg-muted hover:text-fg">{href.split('/').pop()?.replaceAll('-', ' ')}</Link>)}</div></div>)}</div></div></footer> }

export function SectionNav() { return <div className="border-b border-line bg-bg/95"><div className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-5 py-2 lg:px-8">{['S SDLC','Q Quality loop','E Enterprise','L Layers','G Governance','W Everywhere','F FAQ'].map(x => <a key={x} href={`#${x.slice(2).toLowerCase().replace(' ','-')}`} className="shrink-0 rounded-md px-3 py-1.5 font-mono text-[11px] text-fg-subtle hover:bg-panel hover:text-accent">[{x.slice(0,1)}] {x.slice(2)}</a>)}</div></div> }
