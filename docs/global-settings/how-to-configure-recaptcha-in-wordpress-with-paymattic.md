---
title: "How to Configure reCAPTCHA in WordPress with Paymattic"
category: "Global Settings"
---

[Paymattic](https://paymattic.com/) integrates with [Google reCAPTCHA](https://paymattic.com/configure-google-recaptcha-for-your-website-security/#what-is-google-recaptcha) to protect your WordPress forms from spam and automated submissions. This guide walks you through setting up reCAPTCHA in Paymattic.

## Get reCAPTCHA API Keys

### Generate New Keys

1. Visit the [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin/)
2. Click the **Plus Icon**

![Add new site](/images/global-settings/how-to-configure-recaptcha-in-wordpress-with-paymattic/Plus-Icon-from-Google-reCAPTCHA-Site.png)

3. Configure your site:
   - Enter a **Label** to identify your site
   - Choose reCAPTCHA version (v2 or v3)
   - Add your domain(s)
   - Select or create a Google Cloud project
4. Click **Submit**

![Register site](/images/global-settings/how-to-configure-recaptcha-in-wordpress-with-paymattic/Register-a-new-site-page-for-reCAPTCHA-1-1.webp)

### Get Your Keys

1. Copy your keys:
   - Click **Copy Site Key**
   - Click **Copy Secret Key**
2. Optional: Click **Go To Settings** for additional configuration

![Copy keys](/images/global-settings/how-to-configure-recaptcha-in-wordpress-with-paymattic/Copy-Site-Secret-keys-scaled.webp)

### Additional Settings

In the settings page you can:
- Edit site label
- View reCAPTCHA type and keys
- Manage domains
- Update owner email
- Configure security preferences

![reCAPTCHA settings](/images/global-settings/how-to-configure-recaptcha-in-wordpress-with-paymattic/Google-reCAPTCHA-Settings-1-1.webp)

## Configure in Paymattic

1. Go to **Settings** from the **Paymattic Navbar**
2. Click the **reCAPTCHA** tab

Choose your reCAPTCHA type:
- **Disable reCAPTCHA**: Turn off protection (default)
- **Visible reCAPTCHA (V2)**: Users check "I'm not a robot"
- **Invisible reCAPTCHA (V3)**: Background scoring system

![Paymattic reCAPTCHA settings](/images/global-settings/how-to-configure-recaptcha-in-wordpress-with-paymattic/reCAPTCHA-Settings-page-scaled.webp)

### Add API Keys

1. Select your version (V2 or V3)
2. Paste your Site Key and Secret Key
3. Test with the "I'm not a robot" checkbox
4. Click **Save Settings**

![Configure API keys](/images/global-settings/how-to-configure-recaptcha-in-wordpress-with-paymattic/Paste-the-API-keys-into-V3-site-key-and-secret-key-fields.webp)

## Enable on Forms

Add reCAPTCHA to individual forms:

1. Go to **All Forms**
2. Select your form
3. Click the **Pencil/Editor** icon

:::tip New Forms
Need to create a form? See our guides for [creating from scratch](/how-to-create-a-form-from-scratch-with-paymattic) or [using templates](/simple-form-templates).
:::

![Access form editor](/images/global-settings/how-to-configure-recaptcha-in-wordpress-with-paymattic/Open-desired-form-to-integrate-recptcha-scaled.webp)

### Enable Protection

1. Go to **Settings**
2. Open the **Confirmation** tab
3. Find **reCAPTCHA Settings**
4. Check **Enable reCAPTCHA for this form**
5. Click **Save reCAPTCHA Settings**

![Enable form protection](/images/global-settings/how-to-configure-recaptcha-in-wordpress-with-paymattic/Enable-reCAPTCHA-for-this-form-option-1-scaled.webp)

:::tip Need Help?
If you have any questions, concerns, or suggestions, please [contact our support team](https://wpmanageninja.com/support-tickets/).
:::