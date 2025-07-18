import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Paymattic Documentation',
  description: 'Documentation for Paymattic WordPress Plugin',
  base: '/',
  cleanUrls: true,
  srcDir: './docs',

  rewrites: {
    ':category/:page': ':page'
  },

  themeConfig: {
    logo: '/images/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/paymattic-introduction' },
      { text: 'Changelog', link: '/change-log' }
    ],

    sidebar: [
      {
        text: 'Getting Started with Paymattic',
        items: [
          { text: 'Paymattic Introduction', link: '/paymattic-introduction' },
          { text: 'How to Install and Activate Paymattic in WordPress', link: '/how-to-install-and-activate-paymattic-in-wordpress' }
        ]
      },
      {
        text: 'Form Editor',
        items: [
          { text: 'Create Your First Form', link: '/how-to-create-your-first-payment-form-in-a-minute-and-accept-payments-with-paymattic' },
          { text: 'Create Form from Scratch', link: '/how-to-create-a-form-from-scratch-with-paymattic' },
          { text: 'Edit Forms', link: '/how-to-edit-forms-in-wordpress-with-paymattic' },
          { text: 'Form Templates', link: '/simple-form-templates' },
          { text: 'Step Forms', link: '/creating-a-step-form-with-paymattic' },
          { text: 'Multiple Column Layout', link: '/add-multiple-column-containers-in-forms' },
          { text: 'Conditional Logic', link: '/how-to-use-conditional-logic-in-form-fields-with-paymattic' },
          { text: 'PDF Feed', link: '/how-to-create-pdf-feed-for-form-submissions' }
        ]
      },
      {
        text: 'General Input Fields',
        items: [
          { text: 'General Input Fields', link: '/how-to-use-general-form-input-fields-in-wordpress-with-paymattic' },
          { text: 'Payment Method Fields', link: '/how-to-use-the-payment-method-fields-section' },
          { text: 'Product Fields', link: '/how-to-use-the-product-fields' }
        ]
      },
      {
        text: 'Donation and Product Fields',
        items: [
          { text: 'Payment Item Fields', link: '/how-to-add-payment-item-fields-in-wordpress-with-paymattic' },
          { text: 'Subscription Payment', link: '/how-to-add-susbcription-payment-item-fields-in-paymattic' },
          { text: 'Dynamic Payment Item', link: '/dynamic-payment-item-field' },
          { text: 'Tabular Product Item', link: '/how-to-add-tabular-product-item-fields-in-wordpress-with-paymattic' },
          { text: 'User Defined Amount', link: '/how-to-add-user-defined-amount-field-in-wordpress-with-paymattic' },
          { text: 'Item Quantity', link: '/how-to-add-item-quantity-field-in-wordpress-with-paymattic' },
          { text: 'Currency Switcher', link: '/add-currency-switcher-in-wordpress-form' },
          { text: 'Payment Summary', link: '/add-payment-summary-field-in-forms' },
          { text: 'Tax Calculator', link: '/how-to-add-tax-calculated-amount-field-in-wordpress-with-paymattic' },
          { text: 'Donation Progress', link: '/how-to-add-donation-progress-item-in-wordpress-with-paymattic' }
        ]
      },
      {
        text: 'Payment Methods',
        items: [
          { text: 'All Payment Methods', link: '/all-payment-method' },
          { text: 'Stripe', link: '/how-to-configure-stripe-payment-gateway-in-wordpress-with-paymattic' },
          { text: 'PayPal', link: '/how-to-configure-paypal-in-wordpress-with-paymattic' },
          { text: 'Authorize.net', link: '/configure-authorize-net-in-wordpress-through-paymattic' },
          { text: 'Mollie', link: '/how-to-integrate-mollie-in-wordpress-with-paymattic' },
          { text: 'Razorpay', link: '/how-to-integrate-razorpay-with-paymattic-in-wordpress' },
          { text: 'Square', link: '/how-to-integrate-square-with-paymattic-in-wordpress' },
          { text: 'PayStack', link: '/how-to-integrate-paystack-in-wordpress-with-paymattic' },
          { text: 'SSLCommerz', link: '/how-to-integrate-sslcommerz-with-paymattic-in-wordpress' },
          { text: 'Xendit', link: '/how-to-integrate-xendit-in-wordpress' },
          { text: 'Viva Wallet', link: '/how-to-integrate-viva-wallet-with-paymattic' },
          { text: 'Moneris', link: '/how-to-integrate-moneris-payment-gateway-in-paymattic' },
          { text: 'Offline Payment', link: '/how-to-collect-offline-payment-in-wordpress-with-paymattic' }
        ]
      },
      {
        text: 'Global Settings',
        items: [
          { text: 'Currency Settings', link: '/how-to-change-currency-settings-in-wordpress-with-paymattic' },
          { text: 'User Roles', link: '/how-to-manage-user-roles-in-wordpress-with-paymattic' },
          { text: 'reCAPTCHA', link: '/how-to-configure-recaptcha-in-wordpress-with-paymattic' },
          { text: 'Cloudflare Turnstile', link: '/how-to-configure-cloudflare-turnstile-with-paymattic' },
          { text: 'User Dashboard', link: '/how-to-add-user-dashboard-module-in-paymattic' }
        ]
      },
      {
        text: 'Integrations',
        items: [
          { text: 'FluentCRM', link: '/how-to-integrate-fluentcrm-in-wordpress-with-paymattic' },
          { text: 'FluentSupport', link: '/how-to-integrate-fluent-support-with-paymattic-in-wordpress' },
          { text: 'FluentCommunity', link: '/how-to-integrate-fluentcommunity-in-wordpress-with-paymattic' },
          { text: 'Mailchimp', link: '/how-to-integrate-mailchimp-in-wordpress-with-paymattic' },
          { text: 'ActiveCampaign', link: '/how-to-integrate-activecampaign-in-wordpress-with-paymattic' },
          { text: 'Google Sheets', link: '/integrate-google-sheets-in-wordpress-with-paymattic' },
          { text: 'Zapier', link: '/how-to-integrate-zapier-with-paymattic-in-wordpress' },
          { text: 'Webhook', link: '/how-to-integrate-webhook-in-wordpress-with-paymattic' },
          { text: 'Slack', link: '/how-to-integrate-slack-in-wordpress-with-paymattic' },
          { text: 'Telegram', link: '/how-to-integrate-telegram-with-paymattic-in-wordpress' },
          { text: 'Twilio', link: '/how-to-integrate-twilio-with-paymattic-in-wordpress' },
          { text: 'User Registration', link: '/how-to-create-a-user-registration-form-with-paymattic-in-wordpress' }

        ]
      },
      {
        text: 'Learning Management System (LMS) Integrations',
        items: [
          { text: 'TutorLMS', link: '/how-to-integrate-tutor-lms-in-wordpress-with-paymattic' },
          { text: 'LearnDash', link: '/how-to-integrate-learndash-in-wordpress-with-paymattic' },
          { text: 'LifterLMS', link: '/how-to-integrate-lifterlms-in-wordpress-with-paymattic' }
        ]
      },
      {
        text: 'Form Settings',
        items: [
          { text: 'Payment Settings', link: '/customize-form-specific-payment-settings' },
          { text: 'Design Settings', link: '/how-to-customize-form-design-settings-in-wordpress-with-paymattic' },
          { text: 'Confirmation Settings', link: '/how-to-configure-confirmation-settings-in-wordpress-with-paymattic' },
          { text: 'Form Restrictions', link: '/how-to-set-form-scheduling-and-restriction-settings-in-wordpress-with-paymattic' },
          { text: 'Custom CSS/JS', link: '/how-to-create-custom-css-js-in-wordpress-with-paymattic' }
        ]
      },
      {
        text: 'Email Notification Settings',
        items: [
          { text: 'Email Notifications', link: '/how-to-setup-email-notifications-in-paymattic-wordpress-plugin' }
        ]
      },
      {
        text: 'Manage Form Entries',
        items: [
          { text: 'View Entries', link: '/how-to-view-and-manage-all-form-entries-in-wordpress-with-paymattic' },
          { text: 'Single Entry', link: '/how-to-view-single-submission-data-and-manage-payments-in-paymattic' },
          { text: 'Manage Subscriptions', link: '/how-to-manage-subscriptions-in-wordpress-with-paymattic' },
          { text: 'Cancel Subscription', link: '/manually-cancel-any-subscription' },
          { text: 'Refund Payments', link: '/how-to-refund-payments-in-paymattic' },
          { text: 'Payment Hold', link: '/stripe-payment-hold-in-paymattic' }
        ]
      },
      {
        text: 'Customer Profile',
        items: [
          { text: 'Customer Profile', link: '/how-to-view-customer-profile-in-wordpress' }
        ]
      },
      {
        text: 'Reports & Analytics',
        items: [
          { text: 'Reports & Analytics', link: '/how-to-view-the-reports-and-payment-analytics-in-wordpress-with-paymattic' }
        ]
      },
      {
        text: 'Import - Export',
        items: [
          { text: 'Import/Export Forms', link: '/how-to-import-export-forms-in-wordpress-with-paymattic' },
          { text: 'Export Entries', link: '/how-to-export-form-entries-in-csv-excel-ods-and-json' }
        ]
      },
      {
        text: 'FAQ',
        items: [
          { text: 'First & Last Name Fields', link: '/add-first-last-name-fields-in-a-form' },
          { text: 'Date Formats', link: '/date-formats-customization' },
          { text: 'Email Issues', link: '/how-to-fix-not-sending-email-confirmations-issue-in-wordpress-with-paymattic' }
        ]
      },
      {
        text: 'Change Log',
        items: [
          { text: 'Change Log', link: '/change-log' }
        ]
      }
    ],
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/WPManageNinja/paymattic' }
    ],
    
    footer: {
      message: 'Released under the GPL License.',
      copyright: 'Copyright © 2024 WPManageNinja'
    }
  }
}) 