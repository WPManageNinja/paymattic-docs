import { defineConfig } from 'vitepress'
import { existsSync, readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'
import { zoomablePlugin } from './theme/markdown-plugin-zoomable'

// Canonical origin for this site — reused by the canonical links and the absolute
// og:/twitter: URLs below. Changing the host should only ever mean editing this line.
const SITE_URL = 'https://docs.paymattic.com'

/**
 * Per-page link-preview cards.
 *
 * `scripts/generate-featured-images.mjs` renders a branded 1200x630 PNG carrying each
 * page's own title into `docs/public/images/featured/`, served at `/images/featured/`.
 *
 * NAMING RULE — kept in sync with that script's cardNameFor(): the card is the page's
 * served path (i.e. `pageData.relativePath`, which VitePress has already passed through
 * any `rewrites`) minus `.md`, with every `/` replaced by `--`, plus `.png`. The home
 * page's `index.md` uses `index.png`.
 *
 * Anything without a generated card falls back to `default.png`, which the generator
 * also emits — so a shared link is never left with no preview at all. The URL must be
 * absolute: relative paths are ignored by Slack/X/LinkedIn/Facebook scrapers.
 */
const FEATURED_DIR = join(dirname(fileURLToPath(import.meta.url)), '..', 'docs', 'public', 'images', 'featured')

function featuredImageFor(relativePath: string): string {
  const name = `${relativePath.replace(/\.md$/, '').replace(/\//g, '--')}.png`
  const file = existsSync(join(FEATURED_DIR, name)) ? name : 'default.png'
  return `${SITE_URL}/images/featured/${encodeURIComponent(file)}`
}

export default defineConfig({
  title: 'Paymattic Documentation',
  description: 'Documentation for Paymattic WordPress Plugin',
  base: '/',
  cleanUrls: true,
  srcDir: './docs',
  ignoreDeadLinks: true,

  // Generates /sitemap.xml at build time from every built page (honours cleanUrls and
  // rewrites), so it never needs manual upkeep. robots.txt points crawlers at it.
  sitemap: {
    hostname: SITE_URL
  },

  head: [
    ['link', { rel: 'icon', href: '/images/brand/paymattic_primary_icon.png' }],

    // Open Graph / Twitter values that never vary per page. Every generated card is
    // 1200x630, so the dimensions live here; the image URL itself is per page and
    // is set in transformPageData() below.
    ['meta', { property: 'og:site_name', content: 'Paymattic Documentation' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'en_US' }],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height', content: '630' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
  ],

  rewrites: {
    'getting-started-with-paymattic/:page': ':page',
    'form-editor/:page': ':page',
    'general-input-fields/:page': ':page',
    'donation-and-product-fields/:page': ':page',
    'payment-method-fields/:page': ':page',
    'global-settings/:page': ':page',
    'integrations/:page': ':page',
    'lms-integrations/:page': ':page',
    'form-settings/:page': ':page',
    'email-notification-settings/:page': ':page',
    'manage-form-entries/:page': ':page',
    'customer-profile/:page': ':page',
    'reports-and-analyticsi/:page': ':page',
    'import-export/:page': ':page',
    'faq/:page': ':page',
    'change-log/:page': ':page',
    'migration/:page': ':page'
  },

  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin)
      md.use(zoomablePlugin)
    }
  },

  vite: {
    build: {
      chunkSizeWarningLimit: 1000
    }
  },

  // Agent-friendly output, regenerated on every build so it never goes stale:
  //  - /llms.txt       index of every page (title + description) grouped by category
  //  - /llms-full.txt  the full text of every page in one file
  //  - /<page>.md      clean markdown twin of each page (frontmatter stripped)
  async buildEnd(siteConfig) {
    const rewrites = siteConfig.rewrites.map as Record<string, string>
    const groups = new Map<string, string[]>()
    const full: string[] = []

    for (const src of [...siteConfig.pages].sort()) {
      const dest = rewrites[src] ?? src
      if (dest === 'index.md') continue
      const raw = readFileSync(join(siteConfig.srcDir, src), 'utf-8')
      const fm = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/)
      const body = fm ? raw.slice(fm[0].length) : raw
      const field = (k: string) =>
        fm?.[1].match(new RegExp(`^${k}:\\s*["']?(.*?)["']?\\s*$`, 'm'))?.[1] ?? ''
      const title = field('title') || dest.replace(/\.md$/, '')
      const category = field('category') || 'Other'
      const desc = field('description')
      const url = `${SITE_URL}/${dest.replace(/\.md$/, '')}`

      const twin = join(siteConfig.outDir, dest)
      mkdirSync(dirname(twin), { recursive: true })
      writeFileSync(twin, body)

      if (!groups.has(category)) groups.set(category, [])
      groups.get(category)!.push(`- [${title}](${url}.md)${desc ? `: ${desc}` : ''}`)
      full.push(`# ${title}\n\nSource: ${url}\n\n${body.trim()}\n`)
    }

    const index = [
      '# Paymattic Documentation',
      '',
      '> Documentation for Paymattic, a WordPress payment form and donation plugin. Each link below is a plain-markdown version of the page.',
      ''
    ]
    for (const [cat, links] of groups) index.push(`## ${cat}`, '', ...links, '')
    index.push(`Full content in a single file: ${SITE_URL}/llms-full.txt`, '')

    writeFileSync(join(siteConfig.outDir, 'llms.txt'), index.join('\n'))
    writeFileSync(join(siteConfig.outDir, 'llms-full.txt'), full.join('\n---\n\n'))
  },

  // Per-page SEO tags: canonical URL plus the Open Graph / Twitter values that differ
  // per page, including the page's own featured image (see featuredImageFor above).
  transformPageData(pageData, { siteConfig }) {
    // `relativePath` is the path AFTER `rewrites`, so it matches the public URL.
    const path = pageData.relativePath.replace(/(^|\/)index\.md$/, '$1').replace(/\.md$/, '')
    const url = path ? `${SITE_URL}/${path}` : `${SITE_URL}/`
    const title = pageData.frontmatter.title || pageData.title || siteConfig.site.title
    const description =
      pageData.frontmatter.description || pageData.description || siteConfig.site.description
    const image = featuredImageFor(pageData.relativePath)

    pageData.frontmatter.head ??= []
    pageData.frontmatter.head.push(
      ['link', { rel: 'canonical', href: url }],
      ['meta', { property: 'og:title', content: title }],
      ['meta', { property: 'og:description', content: description }],
      ['meta', { property: 'og:url', content: url }],
      ['meta', { property: 'og:image', content: image }],
      ['meta', { property: 'og:image:alt', content: title }],
      ['meta', { name: 'twitter:title', content: title }],
      ['meta', { name: 'twitter:description', content: description }],
      ['meta', { name: 'twitter:image', content: image }]
    )
  },
  themeConfig: {
    siteTitle: false,
    logo: {
      light: '/images/brand/paymattic_primary_logo.png',
      dark: '/images/brand/paymattic_secondary_logo.png'
    },
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Website', link: 'https://paymattic.com' },
      { text: 'User Docs', link: '/paymattic-introduction' },
      { text: 'Changelog', link: '/change-log' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Paymattic Introduction', link: '/paymattic-introduction' },
          { text: 'Install Paymattic', link: '/install-paymattic' },
          { text: 'Glossary', link: '/glossary' }
        ]
      },
      {
        text: 'Form Editor',
        items: [
          { text: 'Create Payment Form', link: '/create-payment-form' },
          { text: 'Create Form from Scratch', link: '/create-form-from-scratch' },
          { text: 'Edit Forms', link: '/edit-forms' },
          { text: 'Form Templates', link: '/simple-form-templates' },
          { text: 'Step Forms', link: '/create-step-form' },
          { text: 'Multiple Column Layout', link: '/add-multiple-columns' },
          { text: 'Conditional Logic', link: '/use-conditional-logic' },
          { text: 'PDF Feed', link: '/create-pdf-feed' }
        ]
      },
      {
        text: 'General Input Fields',
        items: [
          { text: 'General Input Fields', link: '/use-general-input-fields' },
          { text: 'Payment Method Fields', link: '/use-payment-method-fields' },
          { text: 'Product Fields', link: '/use-product-fields' }
        ]
      },
      {
        text: 'Donation and Product Fields',
        items: [
          { text: 'Payment Item Fields', link: '/add-payment-item-fields' },
          { text: 'Subscription Payment', link: '/add-subscription-payment-fields' },
          { text: 'Dynamic Payment Item', link: '/dynamic-payment-item' },
          { text: 'Tabular Product Item', link: '/add-tabular-product-fields' },
          { text: 'User Defined Amount', link: '/add-user-defined-amount' },
          { text: 'Item Quantity', link: '/add-item-quantity' },
          { text: 'Currency Switcher', link: '/add-currency-switcher' },
          { text: 'Payment Summary', link: '/add-payment-summary' },
          { text: 'Tax Calculator', link: '/add-tax-calculator' },
          { text: 'Donation Progress', link: '/add-donation-progress' },
          { text: 'Fee Recovery', link: '/add-fee-recovery-field' },
          { text: 'Gift Aid', link: '/add-gift-aid' }
        ]
      },
      {
        text: 'Payment Methods',
        items: [
          { text: 'All Payment Methods', link: '/all-payment-method' },
          { text: 'Stripe', link: '/configure-stripe' },
          { text: 'PayPal', link: '/configure-paypal' },
          { text: 'Authorize.net', link: '/configure-authorize-net' },
          { text: 'Mollie', link: '/integrate-mollie' },
          { text: 'Razorpay', link: '/integrate-razorpay' },
          { text: 'Square', link: '/integrate-square' },
          { text: 'PayStack', link: '/integrate-paystack' },
          { text: 'SSLCommerz', link: '/integrate-sslcommerz' },
          { text: 'Xendit', link: '/integrate-xendit' },
          { text: 'Viva Wallet', link: '/integrate-viva-wallet' },
          { text: 'Moneris', link: '/integrate-moneris' },
          { text: 'Offline Payment', link: '/collect-offline-payment' },
          { text: 'Create Custom Payment Gateway', link: '/create-a-custom-payment-gateway' }
        ]
      },
      {
        text: 'Global Settings',
        items: [
          { text: 'Currency Settings', link: '/change-currency-settings' },
          { text: 'User Roles', link: '/manage-user-roles' },
          { text: 'reCAPTCHA', link: '/configure-recaptcha' },
          { text: 'Cloudflare Turnstile', link: '/configure-cloudflare-turnstile' },
          { text: 'User Dashboard', link: '/add-user-dashboard-module' }
        ]
      },
      {
        text: 'Integrations',
        items: [
          { text: 'FluentCRM', link: '/integrate-fluentcrm' },
          { text: 'FluentSupport', link: '/integrate-fluent-support' },
          { text: 'FluentCommunity', link: '/integrate-fluentcommunity' },
          { text: 'Mailchimp', link: '/integrate-mailchimp' },
          { text: 'ActiveCampaign', link: '/integrate-activecampaign' },
          { text: 'Google Sheets', link: '/integrate-google-sheets' },
          { text: 'Zapier', link: '/integrate-zapier' },
          { text: 'Webhook', link: '/integrate-webhook' },
          { text: 'Slack', link: '/integrate-slack' },
          { text: 'Telegram', link: '/integrate-telegram' },
          { text: 'Twilio', link: '/integrate-twilio' },
          { text: 'User Registration', link: '/create-user-registration-form' }

        ]
      },
      {
        text: 'Learning Management System (LMS) Integrations',
        items: [
          { text: 'TutorLMS', link: '/integrate-tutor-lms' },
          { text: 'LearnDash', link: '/integrate-learndash' },
          { text: 'LifterLMS', link: '/integrate-lifterlms' }
        ]
      },
      {
        text: 'Form Settings',
        items: [
          { text: 'Payment Settings', link: '/customize-payment-settings' },
          { text: 'Design Settings', link: '/customize-form-design' },
          { text: 'Confirmation Settings', link: '/configure-confirmation' },
          { text: 'Form Restrictions', link: '/set-form-restrictions' },
          { text: 'Custom CSS/JS', link: '/create-custom-css-js' }
        ]
      },
      {
        text: 'Email Notification Settings',
        items: [
          { text: 'Email Notifications', link: '/setup-email-notifications' },
          { text: 'Email Notifications for Subscription Cancel', link: '/enable-subscription-cancel-email' },
          { text: 'Email Notifications for Donation', link: '/email-notification-for-donation' }
        ]
      },
      {
        text: 'Manage Form Entries',
        items: [
          { text: 'View Entries', link: '/view-form-entries' },
          { text: 'Single Entry', link: '/view-single-entry' },
          { text: 'Manage Subscriptions', link: '/manage-subscriptions' },
          { text: 'Cancel Subscription', link: '/cancel-subscription' },
          { text: 'Refund Payments', link: '/refund-payments' },
          { text: 'Payment Hold', link: '/stripe-payment-hold' },
          { text: 'Disable IP Address', link: '/disable-ip-logging' }
        ]
      },
      {
        text: 'Customer Profile',
        items: [
          { text: 'Customer Profile', link: '/view-customer-profile' }
        ]
      },
      {
        text: 'Reports & Analytics',
        items: [
          { text: 'Reports & Analytics', link: '/view-reports-analytics' }
        ]
      },
      {
        text: 'Import - Export',
        items: [
          { text: 'Import/Export Forms', link: '/import-export-forms' },
          { text: 'Export Entries', link: '/export-form-entries' }
        ]
      },
      {
        text: 'Migration',
        items: [
          { text: 'Migrate from GiveWP', link: '/givewp-migration' }
        ]
      },
      {
        text: 'FAQ',
        items: [
          { text: 'First & Last Name Fields', link: '/add-first-last-name-fields' },
          { text: 'Date Formats', link: '/date-formats-customization' },
          { text: 'Email Issues', link: '/fix-email-confirmation-issue' }
        ]
      },
      {
        text: 'Change Log',
        items: [
          { text: 'Change Log', link: '/change-log' }
        ]
      }
    ],
    
    footer: {
      copyright: 'Copyright © 2026 WPManageNinja'
    }
  }
}) 