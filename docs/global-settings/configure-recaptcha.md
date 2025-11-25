---
title: "Configure reCAPTCHA"
category: "Global Settings"
---

# Configure reCAPTCHA

[Paymattic](https://paymattic.com/) integrates with [Google reCAPTCHA](https://paymattic.com/configure-google-recaptcha-for-your-website-security/#what-is-google-recaptcha) to protect your WordPress forms from spam and automated submissions. This guide walks you through setting up reCAPTCHA in Paymattic.

## Get the reCAPTCHA API Keys

Before configuring reCAPTCHA in Paymattic, you must get your API keys from Google reCAPTCHA.
To learn how to get the reCAPTCHA Site and Secret keys, follow the steps with the screenshots below – 

First, go to the [Google reCaptcha Site](https://www.google.com/recaptcha/admin/create), and click the Plus Icon.

![Add new site](/images/global-settings/configure-recaptcha/Plus-Icon-from-Google-reCAPTCHA-Site.png)

Now, put a **Name** into the **Label** field to identify your website in the future and choose the **reCAPTCHA type** you prefer (v2 or v3) e.g., I choose V3. 

Then, enter your website/s address in the **Domains** field to register your domain for a reCAPTCHA verification. Also, you can choose your project from the **Google Cloud Platform** dropdown.

Once you provide all the necessary information, click the **Submit** button and you will get your desired Site key and Secret key.

![Register site](/images/global-settings/configure-recaptcha/Register-a-new-site-page-for-reCAPTCHA-1-1.webp)

Here, you will get your desired Site key and Secret key. Simply, copy them by clicking the **Copy Site Key** and **Copy Secret Key** buttons.

For additional settings, click the **Go To Settings** button and the Settings page will appear.

![Copy keys](/images/global-settings/configure-recaptcha/Copy-Site-Secret-keys-scaled.webp)

On the settings page, you can edit the name under the Label field, see the reCAPTCHA type and keys, and change or add the Domain. 

Also, you can change the existing owner’s email address or add an admin email to manage reCAPTCHA in the **Owners** field. Plus, you can set the security preference according to your needs.

Finally, click the **Save** button and all your changes will be saved.

![reCAPTCHA settings](/images/global-settings/configure-recaptcha/Google-reCAPTCHA-Settings-1-1.webp)

## Configuring reCAPTCHA


First, go to **Settings** from the **Paymattic Navbar**, click the **reCAPTCHA** tab from the left sidebar, and three options appear. These are: 

* **Disable reCAPTCHA:** You can use this option if you don’t want to enable reCAPTCHA. This option will be selected by default.
* **Visible reCAPTCHA (V2):** This requires users to check a box indicating they are not a robot i.e., it verifies the request with a challenge.
* **Invisible reCAPTCHA (V3):** Operates in the background and scores the user’s interaction to determine if they are a bot i.e., it verifies the request a score.

![Paymattic reCAPTCHA settings](/images/global-settings/configure-recaptcha/reCAPTCHA-Settings-page-scaled.webp)

Now, select a reCAPTCHA type between **V2** or **V3** to configure reCAPTCHA with Paymattic. For example, I choose V2 to show the process. 

Paste the **Site Key** and **Secret Key** into the respective fields you copied from the Google reCAPTCHA Site and click the **I’m not a robot** checkbox.

Finally, press the **Save Settings** button and your reCAPTCHA will be configured. 

![Configure API keys](/images/global-settings/configure-recaptcha/Paste-the-API-keys-into-V3-site-key-and-secret-key-fields.webp)

## Adding reCAPTCHA in Forms 

Once you have successfully configured the reCAPTCHA with Paymattic, it’s time to integrate this with your payment form.


First, go to **All** Forms from the **Paymattic Navba**r, choose the form you wish to work on, and click the **Pencil/Editor** icon, e.g., I choose the Donation form to show the process.

:::tip New Forms
Need to create a form? See our guides for [creating from scratch](/create-form-from-scratch) or [using templates](/simple-form-templates).
:::

![Access form editor](/images/global-settings/configure-recaptcha/Open-desired-form-to-integrate-recptcha-scaled.webp)

Go to **Settings**S, open the **SConfirmation**S tab from the left sidebar, go to **SreCAPTCHA**S Settings, and check the **SEnable reCAPTCHA for this form**S option.

Finally, click the **SSave reCAPTCHA**S Settings button and the reCAPTCHA will be integrated with your Paymattic form. 

![Enable form protection](/images/global-settings/configure-recaptcha/Enable-reCAPTCHA-for-this-form-option-1-scaled.webp)

This way you can easily add reCAPTCHA to your WordPress payment form!

:::tip Need Help?
If you have any questions, concerns, or suggestions, please [contact our support team](https://wpmanageninja.com/support-tickets/).
:::