---
title: "How to Configure Cloudflare Turnstile Security with Paymattic?"
category: "Global Settings"
---
Integrating [Cloudflare Turnstile](https://paymattic.com/cloudflare-turnstile-security-in-wordpress/#what-is-cloudflare-turnstile-security) with [Paymattic](https://paymattic.com/) helps protect your WordPress forms from spam and automated abuse and provides a frustration-free, CAPTCHA-free browsing experience. This article will guide you through the configuration of Cloudflare Turnstile in your WordPress Site through Paymattic.

## Get the Turnstile Site &amp; Secret Key

Before configuring Cloudflare Trunstile in Paymattic, you must get the Site and Secret keys from the Cloudflare Turnstile websites.

To learn how to get the Cloudflare Turnstile Site and Secret keys, follow the steps with the screenshots below –

First, go to [Cloudflare Turnstile](https://www.cloudflare.com/en-gb/products/turnstile/), and log in to your account.

If you don’t have a Cloudflare Turnstile account, you can sign up [here](https://www.cloudflare.com/en-gb/products/turnstile/).

Now, open the **Turnstile** tab from the left sidebar and click the **Add widget** button.

![](/images/global-settings/how-to-configure-cloudflare-turnstile-with-paymattic/Add-widget-button-1-1-scaled.webp)

Now, put a **Name** into the **Widget name** field to identify your website in the future and enter your website/s address in the **Domain** field.

Also, you can choose your **Widget Mode** and **Pre-clearance** according to your preference.
Once you are done, click the **Create** button, and the Site and Secret keys will be shown.

![](/images/global-settings/how-to-configure-cloudflare-turnstile-with-paymattic/Add-widget-page.webp)

Here, you will get your desired Site key and Secret key. Simply, copy them by clicking the **Copy Site Key** and **Copy Secret Key** buttons.

![](/images/global-settings/how-to-configure-cloudflare-turnstile-with-paymattic/Copy-site-and-secret-key.webp)

## Configuring Cloudflare Turnstile 

To learn how to configure Cloudflare Turnstile with Paymattic, follow the steps with the screenshots below –

First, go to **Settings** from the **Paymattic Navbar** and click the **Turnstile (beta)** tab from the left sidebar.

Now, paste the **Site Key** and **Secret Key** into the respective fields you copied from the Cloudflare Turnstile Site.

Finally, press the **Save Settings** button and your Cloudflare Turnstile will be configured.
If you want to clear the settings, simply click the **Clear Settings** button.

![](/images/global-settings/how-to-configure-cloudflare-turnstile-with-paymattic/Paste-the-site-and-secret-key-in-turnstile-from-paymattic-scaled.webp)

## Adding Cloudflare Turnstile in Forms

Once you have successfully configured the Cloudflare Turnstile with Paymattic, it’s time to integrate this with your payment form.

First, go to **All Forms** from the **Paymattic Navbar,** choose the form you wish to work on, and click the **Pencil/Editor** icon, e.g., I choose the Donation form to show the process.

If you do not have any existing forms, read the [Create a Form from Scratch](/how-to-create-a-form-from-scratch-with-paymattic) or [Create a Form using Templates](/simple-form-templates) documentation.

![](/images/global-settings/how-to-configure-cloudflare-turnstile-with-paymattic/Open-desired-form-scaled.webp)

Go to **Settings**, open the **Confirmation** tab from the left sidebar, go to **Turnstile** **Settings**, and check the **Enable turnstile for this form** option.

Finally, click the **Save Turnstile Settings** button to integrate the Turnstile with your Paymattic form.

![](/images/global-settings/how-to-configure-cloudflare-turnstile-with-paymattic/Enable-turnstile-for-this-form-option-scaled.webp)

This way you can easily configure Turnstile to your WordPress payment form!
If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.