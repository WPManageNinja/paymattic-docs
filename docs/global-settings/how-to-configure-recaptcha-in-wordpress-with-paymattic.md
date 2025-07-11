---
title: "How to Configure reCAPTCHA in WordPress with Paymattic"
category: "Global Settings"
---
Integrating [reCAPTCHA](https://paymattic.com/configure-google-recaptcha-for-your-website-security/#what-is-google-recaptcha) with [Paymattic](https://paymattic.com/) helps protect your WordPress forms from spam and automated abuse. This article will guide you through the configuration of reCAPTCHA in your WordPress Site through Paymattic.

## Get the reCAPTCHA API Keys

Before configuring reCAPTCHA in Paymattic, you must get your API keys from Google reCAPTCHA. 
To learn how to get the reCAPTCHA Site and Secret keys, follow the steps with the screenshots below –

First, go to the [Google reCaptcha Site](https://www.google.com/recaptcha/admin/), and click the Plus Icon.

![](/images/global-settings/how-to-configure-recaptcha-in-wordpress-with-paymattic/Plus-Icon-from-Google-reCAPTCHA-Site.png)

Now, put a **Name** into the **Label** field to identify your website in the future and choose the **reCAPTCHA type** you prefer (v2 or v3) e.g., I choose V3.

Then, enter your website/s address in the **Domains** field to register your domain for a reCAPTCHA verification. Also, you can choose your project from the **Google Cloud Platform** dropdown.

Once you provide all the necessary information, click the **Submit** button and you will get your desired Site key and Secret key.

![](/images/global-settings/how-to-configure-recaptcha-in-wordpress-with-paymattic/Register-a-new-site-page-for-reCAPTCHA-1-1.webp)

Here, you will get your desired Site key and Secret key. Simply, copy them by clicking the **Copy Site Key** and **Copy Secret Key** buttons.

For additional settings, click the **Go To Settings** button and the Settings page will appear.

![](/images/global-settings/how-to-configure-recaptcha-in-wordpress-with-paymattic/Copy-Site-Secret-keys-scaled.webp)

On the settings page, you can edit the name under the Label field, see the reCAPTCHA type and keys, and change or add the Domain.

Also, you can change the existing owner’s email address or add an admin email to manage reCAPTCHA in the **Owners** field. Plus, you can set the security preference according to your needs.

Finally, click the **Save** button and all your changes will be saved.

![](/images/global-settings/how-to-configure-recaptcha-in-wordpress-with-paymattic/Google-reCAPTCHA-Settings-1-1.webp)

## Configuring reCAPTCHA 

To learn how to configure reCAPTCHA with Paymattic, follow the steps with the screenshots below –

First, go to **Settings** from the **Paymattic Navbar**, click the **reCAPTCHA** tab from the left sidebar, and three options appear. These are:
- **Disable reCAPTCHA**: You can use this option if you don’t want to enable reCAPTCHA. This option will be selected by default.
- **Visible reCAPTCHA (V2):** This requires users to check a box indicating they are not a robot i.e., it verifies the request with a challenge.
- **Invisible reCAPTCHA (V3)**: Operates in the background and scores the user’s interaction to determine if they are a bot i.e., it verifies the request a score.

![](/images/global-settings/how-to-configure-recaptcha-in-wordpress-with-paymattic/reCAPTCHA-Settings-page-scaled.webp)

Now, select a reCAPTCHA type between **V2** or **V3** to configure reCAPTCHA with Paymattic. For example, I choose V2 to show the process.

Paste the **Site Key** and **Secret Key** into the respective fields you copied from the Google reCAPTCHA Site and click the **I’m not a robot** checkbox.

Finally, press the **Save Settings** button and your reCAPTCHA will be configured.

![](/images/global-settings/how-to-configure-recaptcha-in-wordpress-with-paymattic/Paste-the-API-keys-into-V3-site-key-and-secret-key-fields.webp)

## Adding reCAPTCHA in Forms

Once you have successfully configured the reCAPTCHA with Paymattic, it’s time to integrate this with your payment form.

To learn the process of integrating the reCAPTCHA in a specific form, follow the steps with screenshots below –

First, go to **All Forms** from the **Paymattic Navbar,** choose the form you wish to work on, and click the **Pencil/Editor** icon, e.g., I choose the Donation form to show the process.

If you do not have any existing forms, read the [Create a Form from Scratch](/how-to-create-a-form-from-scratch-with-paymattic) or [Create a Form using Templates](/simple-form-templates) documentation.

![](/images/global-settings/how-to-configure-recaptcha-in-wordpress-with-paymattic/Open-desired-form-to-integrate-recptcha-scaled.webp)

Go to **Settings**, open the **Confirmation** tab from the left sidebar, go to **reCAPTCHA** **Settings**, and check the **Enable reCAPTCHA for this form** option.

Finally, click the **Save reCAPTCHA Settings** button and the reCAPTCHA will be integrated with your Paymattic form.

![](/images/global-settings/how-to-configure-recaptcha-in-wordpress-with-paymattic/Enable-reCAPTCHA-for-this-form-option-1-scaled.webp)

This way you can easily add reCAPTCHA to your WordPress payment form!
If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.