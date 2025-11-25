#!/usr/bin/env python3
"""Update config.ts with new URLs"""
import re

URL_MAPPINGS = {
    'how-to-install-and-activate-paymattic-in-wordpress': 'install-paymattic',
    'how-to-create-your-first-payment-form-in-a-minute-and-accept-payments-with-paymattic': 'create-payment-form',
    'how-to-create-a-form-from-scratch-with-paymattic': 'create-form-from-scratch',
    'how-to-edit-forms-in-wordpress-with-paymattic': 'edit-forms',
    'creating-a-step-form-with-paymattic': 'create-step-form',
    'add-multiple-column-containers-in-forms': 'add-multiple-columns',
    'how-to-use-conditional-logic-in-form-fields-with-paymattic': 'use-conditional-logic',
    'how-to-create-pdf-feed-for-form-submissions': 'create-pdf-feed',
    'how-to-use-general-form-input-fields-in-wordpress-with-paymattic': 'use-general-input-fields',
    'how-to-use-the-payment-method-fields-section': 'use-payment-method-fields',
    'how-to-add-payment-item-fields-in-wordpress-with-paymattic': 'add-payment-item-fields',
    'how-to-add-susbcription-payment-item-fields-in-paymattic': 'add-subscription-payment-fields',
    'dynamic-payment-item-field': 'dynamic-payment-item',
    'how-to-add-tabular-product-item-fields-in-wordpress-with-paymattic': 'add-tabular-product-fields',
    'how-to-add-user-defined-amount-field-in-wordpress-with-paymattic': 'add-user-defined-amount',
    'how-to-add-item-quantity-field-in-wordpress-with-paymattic': 'add-item-quantity',
    'add-currency-switcher-in-wordpress-form': 'add-currency-switcher',
    'add-payment-summary-field-in-forms': 'add-payment-summary',
    'how-to-add-tax-calculated-amount-field-in-wordpress-with-paymattic': 'add-tax-calculator',
    'how-to-add-donation-progress-item-in-wordpress-with-paymattic': 'add-donation-progress',
    'how-to-configure-stripe-payment-gateway-in-wordpress-with-paymattic': 'configure-stripe',
    'how-to-configure-paypal-in-wordpress-with-paymattic': 'configure-paypal',
    'configure-authorize-net-in-wordpress-through-paymattic': 'configure-authorize-net',
    'how-to-integrate-mollie-in-wordpress-with-paymattic': 'integrate-mollie',
    'how-to-integrate-razorpay-with-paymattic-in-wordpress': 'integrate-razorpay',
    'how-to-integrate-square-with-paymattic-in-wordpress': 'integrate-square',
    'how-to-integrate-paystack-in-wordpress-with-paymattic': 'integrate-paystack',
    'how-to-integrate-sslcommerz-with-paymattic-in-wordpress': 'integrate-sslcommerz',
    'how-to-integrate-xendit-in-wordpress': 'integrate-xendit',
    'how-to-integrate-viva-wallet-with-paymattic': 'integrate-viva-wallet',
    'how-to-integrate-moneris-payment-gateway-in-paymattic': 'integrate-moneris',
    'how-to-collect-offline-payment-in-wordpress-with-paymattic': 'collect-offline-payment',
    'how-to-change-currency-settings-in-wordpress-with-paymattic': 'change-currency-settings',
    'how-to-manage-user-roles-in-wordpress-with-paymattic': 'manage-user-roles',
    'how-to-configure-recaptcha-in-wordpress-with-paymattic': 'configure-recaptcha',
    'how-to-configure-cloudflare-turnstile-with-paymattic': 'configure-cloudflare-turnstile',
    'how-to-integrate-fluentcrm-in-wordpress-with-paymattic': 'integrate-fluentcrm',
    'how-to-integrate-fluent-support-with-paymattic-in-wordpress': 'integrate-fluent-support',
    'how-to-integrate-fluentcommunity-in-wordpress-with-paymattic': 'integrate-fluentcommunity',
    'how-to-integrate-mailchimp-in-wordpress-with-paymattic': 'integrate-mailchimp',
    'integrate-google-sheets-in-wordpress-with-paymattic': 'integrate-google-sheets',
    'how-to-integrate-zapier-with-paymattic-in-wordpress': 'integrate-zapier',
    'how-to-integrate-webhook-in-wordpress-with-paymattic': 'integrate-webhook',
    'how-to-integrate-slack-in-wordpress-with-paymattic': 'integrate-slack',
    'how-to-integrate-telegram-with-paymattic-in-wordpress': 'integrate-telegram',
    'how-to-integrate-twilio-with-paymattic-in-wordpress': 'integrate-twilio',
    'how-to-create-a-user-registration-form-with-paymattic-in-wordpress': 'create-user-registration-form',
    'how-to-integrate-tutor-lms-in-wordpress-with-paymattic': 'integrate-tutor-lms',
    'how-to-integrate-learndash-in-wordpress-with-paymattic': 'integrate-learndash',
    'how-to-integrate-lifterlms-in-wordpress-with-paymattic': 'integrate-lifterlms',
    'how-to-customize-form-design-settings-in-wordpress-with-paymattic': 'customize-form-design',
    'how-to-configure-confirmation-settings-in-wordpress-with-paymattic': 'configure-confirmation',
    'how-to-set-form-scheduling-and-restriction-settings-in-wordpress-with-paymattic': 'set-form-restrictions',
    'how-to-create-custom-css-js-in-wordpress-with-paymattic': 'create-custom-css-js',
    'how-to-setup-email-notifications-in-paymattic-wordpress-plugin': 'setup-email-notifications',
    'how-to-enable-email-notification-for-subscription-cancel': 'enable-subscription-cancel-email',
    'how-to-view-and-manage-all-form-entries-in-wordpress-with-paymattic': 'view-form-entries',
    'how-to-view-single-submission-data-and-manage-payments-in-paymattic': 'view-single-entry',
    'how-to-manage-subscriptions-in-wordpress-with-paymattic': 'manage-subscriptions',
    'how-to-refund-payments-in-paymattic': 'refund-payments',
    'stripe-payment-hold-in-paymattic': 'stripe-payment-hold',
    'how-to-disable-ip-address-logging-in-wordpress-with-paymattic': 'disable-ip-logging',
    'how-to-view-customer-profile-in-wordpress': 'view-customer-profile',
    'how-to-view-the-reports-and-payment-analytics-in-wordpress-with-paymattic': 'view-reports-analytics',
    'how-to-import-export-forms-in-wordpress-with-paymattic': 'import-export-forms',
    'how-to-export-form-entries-in-csv-excel-ods-and-json': 'export-form-entries',
    'add-first-last-name-fields-in-a-form': 'add-first-last-name-fields',
    'how-to-fix-not-sending-email-confirmations-issue-in-wordpress-with-paymattic': 'fix-email-confirmation-issue',
}

config_path = '.vitepress/config.ts'
with open(config_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Update all links in config
for old_url, new_url in URL_MAPPINGS.items():
    # Replace link: '/old-url' with link: '/new-url'
    pattern = rf"link:\s*'/{re.escape(old_url)}'"
    replacement = f"link: '/{new_url}'"
    content = re.sub(pattern, replacement, content)

with open(config_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated config.ts with new URLs")

