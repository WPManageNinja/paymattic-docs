import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Paymattic Documentation',
  description: 'Documentation for Paymattic WordPress Plugin',
  base: '/',
  cleanUrls: true,
  srcDir: './docs',
  ignoreDeadLinks: true,

  head: [
    ['link', { rel: 'icon', href: '/images/brand/paymattic_primary_icon.png' }]
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
    'change-log/:page': ':page'
  },

  vite: {
    build: {
      chunkSizeWarningLimit: 1000
    }
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
          { text: 'Install Paymattic', link: '/install-paymattic' }
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
          { text: 'Donation Progress', link: '/add-donation-progress' }
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
      copyright: 'Copyright © 2025 WPManageNinja'
    }
  }
}) 