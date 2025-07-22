---
title: "How to Configure Cloudflare Turnstile Security with Paymattic?"
category: "Global Settings"
---

# How to Configure Cloudflare Turnstile Security with Paymattic?

Integrating [Cloudflare Turnstile](https://paymattic.com/cloudflare-turnstile-security-in-wordpress/#what-is-cloudflare-turnstile-security) with [Paymattic](https://paymattic.com/) helps protect your WordPress forms from spam and automated abuse and provides a frustration-free, CAPTCHA-free browsing experience. 

This article will guide you through the configuration of Cloudflare Turnstile in your WordPress Site through Paymattic. 

## Get the Turnstile Site & Secret Key

Before configuring Cloudflare Trunstile in Paymattic, you must get the Site and Secret keys from the Cloudflare Turnstile websites.
 

First, go to [Cloudflare Turnstile](https://www.cloudflare.com/en-gb/application-services/products/turnstile/), and log in to your account.

If you don’t have a Cloudflare Turnstile account, you can [sign up here](https://www.cloudflare.com/en-gb/products/turnstile/).

Now, open the **Turnstile** tab from the left sidebar and click the **Add widget** button.

![Add Turnstile widget](/images/global-settings/how-to-configure-cloudflare-turnstile-with-paymattic/Add-widget-button-1-1-scaled.webp)

Now, put a **Name** into the **Widget name** field to identify your website in the future and enter your website/s address in the **Domain** field.

Also, you can choose your **Widget Mode** and **Pre-clearance** according to your preference.
Once you are done, click the **Create button**, and the Site and Secret keys will be shown.

![Widget configuration](/images/global-settings/how-to-configure-cloudflare-turnstile-with-paymattic/Add-widget-page.webp)

Here, you will get your desired **Site key** and **Secret key**. Simply, copy them by clicking the **Copy Site Key** and **Copy Secret Key** buttons.

![Copy Turnstile keys](/images/global-settings/how-to-configure-cloudflare-turnstile-with-paymattic/Copy-site-and-secret-key.webp)

## Configuring Cloudflare Turnstile


First, go to **Settings** from the Paymattic Navbar and click the **Turnstile** (beta) tab from the left sidebar. 

Now, paste the Site Key and Secret Key into the respective fields you copied from the **Cloudflare Turnstile Site**. 

Finally, press the **Save Settings** button and your Cloudflare Turnstile will be configured.

If you want to clear the settings, simply click the **Clear Settings** button. 

:::tip
Use the **Clear Settings** button to remove configuration if needed.
:::

![Configure Turnstile](/images/global-settings/how-to-configure-cloudflare-turnstile-with-paymattic/Paste-the-site-and-secret-key-in-turnstile-from-paymattic-scaled.webp)

## Adding Cloudflare Turnstile in Forms

Once you have successfully configured the Cloudflare Turnstile with Paymattic, it’s time to integrate this with your payment form.

First, go to **All Forms** from the Paymattic Navbar, choose the form you wish to work on, and click the **Pencil/Editor** icon, e.g., I choose the Donation form to show the process.

:::tip New Forms
Need to create a form? See our guides for [creating from scratch](/how-to-create-a-form-from-scratch-with-paymattic) or [using templates](/simple-form-templates).
:::

![Access form editor](/images/global-settings/how-to-configure-cloudflare-turnstile-with-paymattic/Open-desired-form-scaled.webp)

Go to Settings, open the **Confirmation tab** from the left sidebar, go to **Turnstile Settings**, and check the **Enable turnstile for this form** option.

Finally, click the **Save Turnstile Settings** button to integrate the Turnstile with your Paymattic form. 

![Enable Turnstile protection](/images/global-settings/how-to-configure-cloudflare-turnstile-with-paymattic/Enable-turnstile-for-this-form-option-scaled.webp)

:::tip Need Help?
If you have any questions, concerns, or suggestions, please [contact our support team](https://wpmanageninja.com/support-tickets/).
:::