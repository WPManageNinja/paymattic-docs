#!/usr/bin/env python3
"""
Process all remaining documentation files: rename, update H1s, links, and image paths
"""
import re
from pathlib import Path

# URL mappings (reverse for lookup)
URL_MAPPINGS = {
    'how-to-install-and-activate-paymattic-in-wordpress': 'install-paymattic',
    'paymattic-introduction': 'paymattic-introduction',
    'how-to-create-your-first-payment-form-in-a-minute-and-accept-payments-with-paymattic': 'create-payment-form',
    'how-to-create-a-form-from-scratch-with-paymattic': 'create-form-from-scratch',
    'how-to-edit-forms-in-wordpress-with-paymattic': 'edit-forms',
    'simple-form-templates': 'simple-form-templates',
    'creating-a-step-form-with-paymattic': 'create-step-form',
    'add-multiple-column-containers-in-forms': 'add-multiple-columns',
    'how-to-use-conditional-logic-in-form-fields-with-paymattic': 'use-conditional-logic',
    'how-to-create-pdf-feed-for-form-submissions': 'create-pdf-feed',
    'how-to-use-general-form-input-fields-in-wordpress-with-paymattic': 'use-general-input-fields',
    'how-to-use-the-payment-method-fields-section': 'use-payment-method-fields',
    'how-to-use-the-product-fields': 'use-product-fields',
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
    'how-to-change-currency-settings-in-wordpress-with-paymattic': 'change-currency-settings',
    'how-to-manage-user-roles-in-wordpress-with-paymattic': 'manage-user-roles',
    'how-to-configure-recaptcha-in-wordpress-with-paymattic': 'configure-recaptcha',
    'how-to-configure-cloudflare-turnstile-with-paymattic': 'configure-cloudflare-turnstile',
    'how-to-add-user-dashboard-module-in-paymattic': 'add-user-dashboard-module',
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
    'how-to-integrate-tutor-lms-in-wordpress-with-paymattic': 'integrate-tutor-lms',
    'how-to-integrate-learndash-in-wordpress-with-paymattic': 'integrate-learndash',
    'how-to-integrate-lifterlms-in-wordpress-with-paymattic': 'integrate-lifterlms',
    'customize-form-specific-payment-settings': 'customize-payment-settings',
    'how-to-customize-form-design-settings-in-wordpress-with-paymattic': 'customize-form-design',
    'how-to-configure-confirmation-settings-in-wordpress-with-paymattic': 'configure-confirmation',
    'how-to-set-form-scheduling-and-restriction-settings-in-wordpress-with-paymattic': 'set-form-restrictions',
    'how-to-create-custom-css-js-in-wordpress-with-paymattic': 'create-custom-css-js',
    'how-to-setup-email-notifications-in-paymattic-wordpress-plugin': 'setup-email-notifications',
    'how-to-enable-email-notification-for-subscription-cancel': 'enable-subscription-cancel-email',
    'email-notification-for-donation': 'email-notification-for-donation',
    'how-to-view-and-manage-all-form-entries-in-wordpress-with-paymattic': 'view-form-entries',
    'how-to-view-single-submission-data-and-manage-payments-in-paymattic': 'view-single-entry',
    'how-to-manage-subscriptions-in-wordpress-with-paymattic': 'manage-subscriptions',
    'manually-cancel-any-subscription': 'cancel-subscription',
    'how-to-refund-payments-in-paymattic': 'refund-payments',
    'stripe-payment-hold-in-paymattic': 'stripe-payment-hold',
    'how-to-disable-ip-address-logging-in-wordpress-with-paymattic': 'disable-ip-logging',
    'how-to-view-customer-profile-in-wordpress': 'view-customer-profile',
    'how-to-view-the-reports-and-payment-analytics-in-wordpress-with-paymattic': 'view-reports-analytics',
    'how-to-import-export-forms-in-wordpress-with-paymattic': 'import-export-forms',
    'how-to-export-form-entries-in-csv-excel-ods-and-json': 'export-form-entries',
    'add-first-last-name-fields-in-a-form': 'add-first-last-name-fields',
    'date-formats-customization': 'date-formats-customization',
    'how-to-fix-not-sending-email-confirmations-issue-in-wordpress-with-paymattic': 'fix-email-confirmation-issue',
    'change-log': 'change-log',
}

def shorten_h1(h1):
    """Shorten H1 heading"""
    h1 = h1.strip()
    h1 = re.sub(r'^How to ', '', h1)
    h1 = re.sub(r' in WordPress with Paymattic\?*$', '', h1)
    h1 = re.sub(r' with Paymattic\?*$', '', h1)
    h1 = re.sub(r' in WordPress\?*$', '', h1)
    h1 = re.sub(r' in Paymattic\?*$', '', h1)
    h1 = re.sub(r'\?+$', '', h1)
    return h1.strip()

def update_content(file_path, old_url, new_url):
    """Update file content with new URLs and H1"""
    content = file_path.read_text(encoding='utf-8')
    original = content
    
    # Update frontmatter title
    content = re.sub(
        r'title:\s*"([^"]+)"',
        lambda m: f'title: "{shorten_h1(m.group(1))}"',
        content
    )
    
    # Update H1
    lines = content.split('\n')
    for i, line in enumerate(lines):
        if line.startswith('# ') and not line.startswith('##'):
            old_h1 = line[2:].strip()
            new_h1 = shorten_h1(old_h1)
            lines[i] = f'# {new_h1}'
    content = '\n'.join(lines)
    
    # Update all links - absolute links like /old-url
    for old, new in URL_MAPPINGS.items():
        # Absolute links
        content = re.sub(
            rf'(\[([^\]]+)\]\(/{re.escape(old)}(\.md)?(#[^\)]+)?\))',
            lambda m: f'[{m.group(2)}](/{URL_MAPPINGS.get(old, old)}{m.group(4) or ""})',
            content
        )
        # Relative links
        content = re.sub(
            rf'(\[([^\]]+)\]\(\.\./[^/]+/{re.escape(old)}(\.md)?(#[^\)]+)?\))',
            lambda m: f'[{m.group(2)}](/{URL_MAPPINGS.get(old, old)}{m.group(4) or ""})',
            content
        )
        # Links in frontmatter
        content = re.sub(
            rf'(link:\s*)/{re.escape(old)}',
            lambda m: f'{m.group(1)}/{URL_MAPPINGS.get(old, old)}',
            content
        )
    
    # Update image paths
    content = re.sub(
        rf'/images/[^/]+/{re.escape(old_url)}/',
        f'/images/{file_path.parent.name}/{new_url}/',
        content
    )
    
    if content != original:
        file_path.write_text(content, encoding='utf-8')
        return True
    return False

def main():
    docs_dir = Path('docs')
    processed = []
    
    for file_path in sorted(docs_dir.rglob('*.md')):
        if file_path.name == 'index.md':
            continue
        
        old_name = file_path.stem
        if old_name not in URL_MAPPINGS:
            continue
        
        new_url = URL_MAPPINGS[old_name]
        
        # Update content
        update_content(file_path, old_name, new_url)
        
        # Rename file
        new_path = file_path.parent / f"{new_url}.md"
        if file_path != new_path:
            file_path.rename(new_path)
            processed.append((old_name, new_url, file_path.parent.name))
            print(f"✓ {old_name} -> {new_url}")
    
    # Move image folders
    images_dir = Path('docs/public/images')
    if images_dir.exists():
        for old_name, new_name, category in processed:
            old_img = images_dir / category / old_name
            new_img = images_dir / category / new_name
            if old_img.exists() and old_img.is_dir():
                if not new_img.exists():
                    old_img.rename(new_img)
                    print(f"✓ Moved images: {old_name} -> {new_name}")
    
    print(f"\nProcessed {len(processed)} files")

if __name__ == '__main__':
    main()

