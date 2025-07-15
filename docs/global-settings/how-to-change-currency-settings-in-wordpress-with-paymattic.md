---
title: "How to Change Currency Settings in WordPress with Paymattic"
category: "Global Settings"
---

# How to Change Currency Settings in WordPress with Paymattic

[Paymattic](https://paymattic.com/) allows you to configure currency settings both globally and per form. This guide covers setting up currencies for payment gateways and customizing currency settings for individual forms.

## Global Currency Settings

Access global settings:

1. Go to **Settings** from the **Paymattic Navbar**
2. Click the **General Settings** tab

Available sections:
- Currency Settings
- Currency Switcher Settings
- Honeypot Security
- Other Settings

:::note
Global settings apply to all forms except Currency Switcher, which is only for [donation forms](/simple-form-templates).
:::

![Global settings](/images/global-settings/how-to-change-currency-settings-in-wordpress-with-paymattic/General-Settings-under-Global-Settings--scaled.webp)

### Currency Configuration

Configure how currency appears across all payment forms:

- **Currency**: Select your currency (e.g., United States Dollar)
- **Currency Sign Position**: Choose symbol placement
  - Left ($100)
  - Right (100$)
- **Currency Separator**: Choose decimal/thousands separator style
- **Decimal Points**: Option to hide decimals for whole numbers

![Currency settings](/images/global-settings/how-to-change-currency-settings-in-wordpress-with-paymattic/Currency-Settings.webp)

### Currency Switcher

:::warning Premium Feature
The Currency Switcher is a premium feature that enables donors to choose from 135+ currencies within donation forms.
:::

See our [currency switcher guide](/add-currency-switcher-in-wordpress-form) for setup instructions.

![Currency switcher](/images/global-settings/how-to-change-currency-settings-in-wordpress-with-paymattic/Currency-Switcher-Settings.webp)

### Security Settings

#### Honeypot Protection

Enable Honeypot security to protect forms from spam and automated submissions. Learn more in our [Honeypot security article](https://paymattic.com/honeypot-in-cyber-security/#what-is-honeypot-security).

![Honeypot settings](/images/global-settings/how-to-change-currency-settings-in-wordpress-with-paymattic/Honeypot-Security.webp)

### Additional Settings

Configure system-wide behaviors:

- **Stripe Checkout Language**:
  - Set checkout page language
  - Auto-detect recommended for automatic localization
- **Abandoned Submissions**:
  - Set timeout for marking submissions as abandoned
  - Example: Entry with "pending" status for 3+ hours
- **IP Address Logging**:
  - Toggle user IP address tracking

![Other settings](/images/global-settings/how-to-change-currency-settings-in-wordpress-with-paymattic/Other-Settings.webp)

## Form-Specific Currency Settings

Override global settings for individual forms:

1. Go to **All Forms**
2. Select your target form
3. Click the **Pencil/Editor** icon

:::tip New Forms
Need to create a form? See our guides for [creating from scratch](/how-to-create-a-form-from-scratch-with-paymattic) or [using templates](/simple-form-templates).
:::

![Access form editor](/images/global-settings/how-to-change-currency-settings-in-wordpress-with-paymattic/All-Forms-sction--scaled.webp)

### Configure Form Currency

1. Go to **Settings**
2. Open the **Currency** tab
3. Choose:
   - **As Per Global Settings**: Use system defaults
   - **Custom Settings**: Override for this form

Custom options:
- **Currency**: Select form-specific currency
- **Stripe Checkout Locale**: Set form-specific checkout language

Click **Save Currency Settings** to apply changes.

![Form currency settings](/images/global-settings/how-to-change-currency-settings-in-wordpress-with-paymattic/Settings-of-a-specific-form-Currency-Custom-Settings--scaled.webp)

::: tip Need Help?
If you have any questions, concerns, or suggestions, please [contact our support team](https://wpmanageninja.com/support-tickets/).
:::