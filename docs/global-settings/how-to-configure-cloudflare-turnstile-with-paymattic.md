---
title: "How to Configure Cloudflare Turnstile Security with Paymattic?"
category: "Global Settings"
---

# How to Configure Cloudflare Turnstile Security with Paymattic?

[Paymattic](https://paymattic.com/) integrates with [Cloudflare Turnstile](https://paymattic.com/cloudflare-turnstile-security-in-wordpress/#what-is-cloudflare-turnstile-security) to protect your forms from spam while providing a CAPTCHA-free experience. This guide explains how to set up Turnstile protection.

## Get Turnstile Keys

### Prerequisites
- A Cloudflare account
- If you don't have one, [sign up here](https://www.cloudflare.com/en-gb/products/turnstile/)

### Create a Widget

1. Go to [Cloudflare Turnstile](https://www.cloudflare.com/en-gb/products/turnstile/)
2. Log in to your account
3. Open the **Turnstile** tab
4. Click **Add widget**

![Add Turnstile widget](/images/global-settings/how-to-configure-cloudflare-turnstile-with-paymattic/Add-widget-button-1-1-scaled.webp)

Configure your widget:
- Enter a **Widget name** for identification
- Add your domain(s)
- Choose **Widget Mode**
- Set **Pre-clearance** options
- Click **Create**

![Widget configuration](/images/global-settings/how-to-configure-cloudflare-turnstile-with-paymattic/Add-widget-page.webp)

### Get Your Keys

Copy your generated keys:
- Click **Copy Site Key**
- Click **Copy Secret Key**

![Copy Turnstile keys](/images/global-settings/how-to-configure-cloudflare-turnstile-with-paymattic/Copy-site-and-secret-key.webp)

## Configure in Paymattic

1. Go to **Settings** from the **Paymattic Navbar**
2. Click the **Turnstile (beta)** tab
3. Enter your keys:
   - Paste your **Site Key**
   - Paste your **Secret Key**
4. Click **Save Settings**

:::tip
Use the **Clear Settings** button to remove configuration if needed.
:::

![Configure Turnstile](/images/global-settings/how-to-configure-cloudflare-turnstile-with-paymattic/Paste-the-site-and-secret-key-in-turnstile-from-paymattic-scaled.webp)

## Enable on Forms

Add Turnstile protection to individual forms:

1. Go to **All Forms**
2. Select your form
3. Click the **Pencil/Editor** icon

:::tip New Forms
Need to create a form? See our guides for [creating from scratch](/how-to-create-a-form-from-scratch-with-paymattic) or [using templates](/simple-form-templates).
:::

![Access form editor](/images/global-settings/how-to-configure-cloudflare-turnstile-with-paymattic/Open-desired-form-scaled.webp)

### Enable Protection

1. Go to **Settings**
2. Open the **Confirmation** tab
3. Find **Turnstile Settings**
4. Check **Enable turnstile for this form**
5. Click **Save Turnstile Settings**

![Enable Turnstile protection](/images/global-settings/how-to-configure-cloudflare-turnstile-with-paymattic/Enable-turnstile-for-this-form-option-scaled.webp)

:::tip Need Help?
If you have any questions, concerns, or suggestions, please [contact our support team](https://wpmanageninja.com/support-tickets/).
:::