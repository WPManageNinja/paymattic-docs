#!/usr/bin/env python3
"""
Script to rename documentation files, update H1 headings, and update links
"""
import os
import re
from pathlib import Path
from typing import Dict, Tuple

# Mapping of old URLs to new URLs
URL_MAPPINGS = {
    # Getting Started
    'how-to-install-and-activate-paymattic-in-wordpress': 'install-paymattic',
    'paymattic-introduction': 'paymattic-introduction',
    
    # Form Editor
    'how-to-create-your-first-payment-form-in-a-minute-and-accept-payments-with-paymattic': 'create-payment-form',
    'how-to-create-a-form-from-scratch-with-paymattic': 'create-form-from-scratch',
    'how-to-edit-forms-in-wordpress-with-paymattic': 'edit-forms',
    'simple-form-templates': 'simple-form-templates',
    'creating-a-step-form-with-paymattic': 'create-step-form',
    'add-multiple-column-containers-in-forms': 'add-multiple-columns',
    'how-to-use-conditional-logic-in-form-fields-with-paymattic': 'use-conditional-logic',
    'how-to-create-pdf-feed-for-form-submissions': 'create-pdf-feed',
    
    # General Input Fields
    'how-to-use-general-form-input-fields-in-wordpress-with-paymattic': 'use-general-input-fields',
    'how-to-use-the-payment-method-fields-section': 'use-payment-method-fields',
    'how-to-use-the-product-fields': 'use-product-fields',
    
    # Donation and Product Fields
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
    'how-to-add-donation-leaderboard-in-wordpress-with-paymattic': 'add-donation-leaderboard',
    'how-to-add-coupon-field-in-wordpress-with-paymattic': 'add-coupon-field',
    
    # Payment Methods
    'all-payment-method': 'all-payment-method',
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
    'add-flutterwave-payment-gateway-in-paymattic': 'add-flutterwave',
    'how-to-configure-billplz-in-wordpress-with-paymattic': 'configure-billplz',
    'how-to-set-paypal-ipn-in-wordpress-with-paymattic': 'set-paypal-ipn',
    
    # Global Settings
    'how-to-change-currency-settings-in-wordpress-with-paymattic': 'change-currency-settings',
    'how-to-manage-user-roles-in-wordpress-with-paymattic': 'manage-user-roles',
    'how-to-configure-recaptcha-in-wordpress-with-paymattic': 'configure-recaptcha',
    'how-to-configure-cloudflare-turnstile-with-paymattic': 'configure-cloudflare-turnstile',
    'how-to-add-user-dashboard-module-in-paymattic': 'add-user-dashboard',
    
    # Integrations
    'how-to-integrate-fluentcrm-in-wordpress-with-paymattic': 'integrate-fluentcrm',
    'how-to-integrate-fluent-support-with-paymattic-in-wordpress': 'integrate-fluent-support',
    'how-to-integrate-fluentcommunity-in-wordpress-with-paymattic': 'integrate-fluentcommunity',
    'how-to-integrate-mailchimp-in-wordpress-with-paymattic': 'integrate-mailchimp',
    'how-to-integrate-activecampaign-in-wordpress-with-paymattic': 'integrate-activecampaign',
    'integrate-google-sheets-in-wordpress-with-paymattic': 'integrate-google-sheets',
    'how-to-integrate-zapier-with-paymattic-in-wordpress': 'integrate-zapier',
    'how-to-integrate-webhook-in-wordpress-with-paymattic': 'integrate-webhook',
    'how-to-integrate-slack-in-wordpress-with-paymattic': 'integrate-slack',
    'how-to-integrate-telegram-with-paymattic-in-wordpress': 'integrate-telegram',
    'how-to-integrate-twilio-with-paymattic-in-wordpress': 'integrate-twilio',
    'how-to-create-a-user-registration-form-with-paymattic-in-wordpress': 'create-user-registration-form',
    
    # LMS Integrations
    'how-to-integrate-tutor-lms-in-wordpress-with-paymattic': 'integrate-tutor-lms',
    'how-to-integrate-learndash-in-wordpress-with-paymattic': 'integrate-learndash',
    'how-to-integrate-lifterlms-in-wordpress-with-paymattic': 'integrate-lifterlms',
    
    # Form Settings
    'customize-form-specific-payment-settings': 'customize-payment-settings',
    'how-to-customize-form-design-settings-in-wordpress-with-paymattic': 'customize-form-design',
    'how-to-configure-confirmation-settings-in-wordpress-with-paymattic': 'configure-confirmation',
    'how-to-set-form-scheduling-and-restriction-settings-in-wordpress-with-paymattic': 'set-form-restrictions',
    'how-to-create-custom-css-js-in-wordpress-with-paymattic': 'create-custom-css-js',
    
    # Email Notifications
    'how-to-setup-email-notifications-in-paymattic-wordpress-plugin': 'setup-email-notifications',
    'how-to-enable-email-notification-for-subscription-cancel': 'enable-subscription-cancel-email',
    'email-notification-for-donation': 'email-notification-for-donation',
    
    # Manage Form Entries
    'how-to-view-and-manage-all-form-entries-in-wordpress-with-paymattic': 'view-form-entries',
    'how-to-view-single-submission-data-and-manage-payments-in-paymattic': 'view-single-entry',
    'how-to-manage-subscriptions-in-wordpress-with-paymattic': 'manage-subscriptions',
    'manually-cancel-any-subscription': 'cancel-subscription',
    'how-to-refund-payments-in-paymattic': 'refund-payments',
    'stripe-payment-hold-in-paymattic': 'stripe-payment-hold',
    'how-to-disable-ip-address-logging-in-wordpress-with-paymattic': 'disable-ip-logging',
    
    # Customer Profile
    'how-to-view-customer-profile-in-wordpress': 'view-customer-profile',
    
    # Reports & Analytics
    'how-to-view-the-reports-and-payment-analytics-in-wordpress-with-paymattic': 'view-reports-analytics',
    
    # Import Export
    'how-to-import-export-forms-in-wordpress-with-paymattic': 'import-export-forms',
    'how-to-export-form-entries-in-csv-excel-ods-and-json': 'export-form-entries',
    
    # FAQ
    'add-first-last-name-fields-in-a-form': 'add-first-last-name-fields',
    'date-formats-customization': 'date-formats-customization',
    'how-to-fix-not-sending-email-confirmations-issue-in-wordpress-with-paymattic': 'fix-email-confirmation-issue',
    
    # Change Log
    'change-log': 'change-log',
}

# H1 title mappings (old -> new)
H1_MAPPINGS = {
    'How to Integrate ActiveCampaign in WordPress with Paymattic?': 'Integrate ActiveCampaign with Paymattic',
    'How to Add User Dashboard Module in Paymattic?': 'Add User Dashboard Module',
    'How to Create Your First Payment Form in a Minute and Accept Payments with Paymattic?': 'Create Your First Payment Form',
    'How to Configure Stripe Payment Gateway in WordPress with Paymattic?': 'Configure Stripe Payment Gateway',
    'How to Integrate FluentCRM in WordPress with Paymattic': 'Integrate FluentCRM with Paymattic',
    # Add more as we process files
}

def get_url_mapping(old_url: str) -> str:
    """Get new URL from old URL"""
    return URL_MAPPINGS.get(old_url, old_url)

def get_h1_mapping(old_h1: str) -> str:
    """Get new H1 from old H1"""
    # Try exact match first
    if old_h1 in H1_MAPPINGS:
        return H1_MAPPINGS[old_h1]
    
    # Pattern-based replacements
    h1 = old_h1
    h1 = re.sub(r'^How to ', '', h1)
    h1 = re.sub(r' in WordPress with Paymattic\?*$', '', h1)
    h1 = re.sub(r' with Paymattic\?*$', '', h1)
    h1 = re.sub(r' in WordPress\?*$', '', h1)
    h1 = re.sub(r' in Paymattic\?*$', '', h1)
    h1 = re.sub(r'\?+$', '', h1)
    
    return h1

if __name__ == '__main__':
    print("URL and H1 mappings defined")
    print(f"Total URL mappings: {len(URL_MAPPINGS)}")

