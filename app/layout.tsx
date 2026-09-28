import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Bricolage_Grotesque, Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const sans = Geist({ subsets: ['latin'], variable: '--font-sans', display: 'swap' })
const display = Bricolage_Grotesque({ subsets: ['latin'], variable: '--font-display', display: 'swap' })
const mono = Geist_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' })
export const metadata: Metadata = { title: { default: 'SmartForge — The open platform for automating development', template: '%s — SmartForge' }, description: 'SmartForge gives your team the systems to plan, build, verify, and improve software with coding agents.', generator: 'SmartForge' }
export const viewport: Viewport = { colorScheme: 'dark', themeColor: '#20231f' }
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" className={`${sans.variable} ${mono.variable} ${display.variable} dark`}><body className="antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html> }
