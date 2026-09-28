export const SITE_NAME = 'SmartForge'
export const TAGLINE = 'The open platform for automating development'

export type NavLink = { label: string; description?: string; href: string; icon?: string }
export type NavGroup = { heading?: string; links: NavLink[] }
export type NavItem = { label: string; href?: string; groups?: NavGroup[] }

export const headerNav: NavItem[] = [
  { label: 'Products', groups: [{ links: [
    { label: 'SmartForge Factories', description: 'Run fleets of coding agents across your SDLC', href: '/factories', icon: 'Factory' },
    { label: 'SmartForge Terminal', description: 'A modern terminal for agentic coding', href: '/terminal', icon: 'Terminal' },
    { label: 'SmartForge Agent CLI', description: 'A coding agent that works in any terminal', href: '/agent-cli', icon: 'Bot' },
  ]}]},
  { label: 'Solutions', groups: [{ heading: 'Use cases', links: [
    { label: 'Code review', description: 'First-pass review on every PR', href: '/use-cases/code-review', icon: 'GitPullRequest' },
    { label: 'Bug investigation', description: 'Reproduce bugs and route fixes', href: '/use-cases/bug-investigation', icon: 'Bug' },
    { label: 'Refactors & migration', description: 'Scope, migrate, and validate changes', href: '/use-cases/refactors', icon: 'Shuffle' },
    { label: 'Incident response', description: 'Investigate alerts and summarize next steps', href: '/use-cases/incident-response', icon: 'Siren' },
  ]}]},
  { label: 'Resources', groups: [{ heading: 'Explore', links: [
    { label: 'Docs', description: 'API docs and guides', href: '/docs', icon: 'BookOpen' },
    { label: 'Blog', description: 'News and product updates', href: '/blog', icon: 'Newspaper' },
    { label: 'Community', description: 'Get help and connect', href: '/community', icon: 'Users' },
    { label: 'Roadmap', description: "What we're building next", href: '/roadmap', icon: 'Map' },
    { label: 'Support', description: 'Help and issue tracking', href: '/support', icon: 'LifeBuoy' },
  ]}]},
  { label: 'Enterprise', href: '/enterprise' },
  { label: 'Pricing', href: '/pricing' },
]

export const getStarted: NavLink[] = [
  { label: 'Build your software factory', description: 'Sign up for early access', href: '/factories/request-access', icon: 'Factory' },
  { label: 'Download SmartForge Terminal', description: 'A modern terminal designed for working with agents', href: '/download', icon: 'Download' },
]

export const homeSections = [
  { key: 'S', label: 'SDLC', id: 'sdlc', href: '/factories' },
  { key: 'Q', label: 'Quality loop', id: 'quality', href: '/factories/benchmarks' },
  { key: 'E', label: 'Enterprise', id: 'enterprise-ready', href: '/enterprise' },
  { key: 'L', label: 'Layers', id: 'layers', href: '/open-source' },
  { key: 'G', label: 'Governance', id: 'governance', href: '/enterprise' },
  { key: 'W', label: 'Everywhere', id: 'everywhere', href: '/download' },
  { key: 'F', label: 'FAQ', id: 'faq', href: '/faq' },
] as const

export const footerColumns = [
  { title: 'Product', links: ['/download', '/pricing', '/enterprise', '/changelog', '/docs', '/open-source', '/status'] },
  { title: 'Resources', links: ['/blog', '/faq', '/community', '/support', '/do-things', '/terminus'] },
  { title: 'Company', links: ['/about', '/how-we-work', '/careers', '/press', '/contact'] },
  { title: 'Legal', links: ['/legal/privacy-policy', '/legal/terms-of-service', '/legal/security', '/legal/cookie-notice'] },
]

export const routeTitles: Record<string, string> = {
  '/factories': 'SmartForge Factories', '/terminal': 'SmartForge Terminal', '/agent-cli': 'SmartForge Agent CLI', '/download': 'Download SmartForge',
  '/enterprise': 'Enterprise development, without the bottleneck', '/pricing': 'Simple pricing for serious teams', '/docs': 'Documentation for the open platform',
  '/blog': 'Notes from the forge', '/community': 'Build with the SmartForge community', '/roadmap': 'The SmartForge roadmap', '/support': 'How can we help?',
  '/about': 'We are building the open platform for development', '/careers': 'Make the future of development', '/contact-sales': 'Build your software factory',
  '/faq': 'Frequently asked questions', '/open-source': 'Open layers, shared progress', '/status': 'SmartForge system status', '/contact': 'Talk to the SmartForge team',
}

export const allRoutes = [ '/', ...Object.keys(routeTitles), '/factories/request-access', '/factories/benchmarks', '/use-cases', '/customers', '/agent-kits', '/events', '/changelog', '/how-we-work', '/press', '/research', '/newsroom', '/do-things', '/terminus', '/legal/privacy-policy', '/legal/terms-of-service', '/legal/security', '/legal/cookie-notice', '/legal/data-processing-addendum', '/legal/enterprise-license' ]

export function labelForPath(path: string) {
  return routeTitles[path] ?? path.split('/').filter(Boolean).pop()?.replaceAll('-', ' ') ?? 'SmartForge'
}

export function hrefLabel(href: string) {
  return href.split('/').filter(Boolean).pop()?.replaceAll('-', ' ') ?? 'Home'
}
