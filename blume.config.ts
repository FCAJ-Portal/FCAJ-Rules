import { defineConfig } from 'blume'
import { gateway } from 'blume/ai'
import { vercel } from 'blume/analytics'
import { vercel as VercelAdapter } from 'blume/deploy'
import { upstash } from 'blume/ratelimit'

export default defineConfig({
  title: 'FCAJ Rules',
  description: 'FCAJ South Campus Rules',
  logo: {
    image: {
      light: '/logo-light.png',
      dark: '/logo-dark.png',
      alt: 'FCAJ',
    },
    href: '/',
    text: '',
  },

  content: {
    root: 'contents',
  },

  i18n: {
    defaultLocale: 'vi',
    locales: [
      { code: 'vi', label: 'Vietnamese' },
    ],
  },

  navigation: {
    sidebar: {
      display: 'group',
    },
  },

  lastModified: 'git',
  feedback: false,

  theme: {
    fonts: {
      display: { name: 'Be Vietnam Pro', provider: 'bunny', subsets: ['latin', 'vietnamese'] },
      body: { name: 'Be Vietnam Pro', provider: 'bunny', subsets: ['latin', 'vietnamese'] },
      mono: 'geist-mono',
    },
  },

  footer: {
    copyright: `© ${new Date().getFullYear()} FCAJ`,
    socials: {
      facebook: 'https://www.facebook.com/groups/660548818043427',
    },
  },

  seo: {
    robots: true,
    sitemap: true,
    og: {
      enabled: false,
    },
    structuredData: true,
  },

  agents: {
    llmsTxt: true,
    mcp: { enabled: true, clients: false },
    agentReadability: true,
  },

  ai: {
    openInChat: false,
    assistant: {
      enabled: true,
      provider: gateway({ model: 'deepseek/deepseek-v4.1-flash-1017', reasoning: 'medium' }),
    },
  },

  rateLimit: upstash({ urlEnv: 'KV_REST_API_URL', tokenEnv: 'KV_REST_API_TOKEN', requests: 50 }),

  analytics: [vercel()],

  deployment: VercelAdapter(),
})
