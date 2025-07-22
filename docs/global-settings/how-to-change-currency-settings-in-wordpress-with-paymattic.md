---
title: "How to Change Currency Settings in WordPress with Paymattic"
category: "Global Settings"
---

# How to Change Currency Settings in WordPress with Paymattic

[Paymattic](https://paymattic.com/) allows you to set up the currency for your payment gateways, for local or global use, and change the existing currency settings for an individual Paymattic Form. This article will guide you through setting up the currency settings for all payment gateways or changing the existing currency settings for a specific Paymattic Form. 

## Currency Settings Globally for All Forms


First, go to **Settings** from the **Paymattic Navbar**, click the **General Settings** tab from the left sidebar, and four major settings sections will appear. These are: 

Available sections:
- Currency Settings
- Currency Switcher Settings
- Honeypot Security
- Other Settings

> [!NOTE]Note
> Global settings apply to all forms except Currency Switcher, which is only for [donation forms](/simple-form-templates).

Once you are done with the customization, press the **Save Settings** button and all your changes will be saved.

![Global settings](/images/global-settings/how-to-change-currency-settings-in-wordpress-with-paymattic/General-Settings-under-Global-Settings--scaled.webp)

### Currency Settings

This setting will help you to set up your currency type and how you want to display the currency on your payment collection forms for your payment gateways. 

* **Currency:** Here, you can set the currency type from the dropdown list according to your requirements, e.g., I choose the **United States Dollar**.
* **Currency Sign Position:** Here, you can set the currency sign position according to your requirements by clicking the checkbox, e.g., I choose the **Right(100$)** option.
* **Currency Seperator:** Here, you will get two types of currency separators from the dropdown list. Choose anyone according to your needs.
Hide decimal points for rounded numbers: Check this box if you don’t want decimal points if the currency figure is rounded.

:::warning
Remember, this Currency Settings will function generally for all Paymattic Forms.
:::

![Currency settings](/images/global-settings/how-to-change-currency-settings-in-wordpress-with-paymattic/Currency-Settings.webp)

### Currency Switcher Settings

Paymattic’s Currency Switcher is a **premium** feature that allows donors to choose from over 135 currencies right within the donation form. 

:::warning Note
Remember, this Currency Settings will function only for all Paymattic’s [Donation Forms](https://paymattic.com/docs/simple-form-templates/).
To learn how to add the Currency Switcher feature in WordPress Forms through this Currency Switcher Settings, read this [Documentation](https://paymattic.com/docs/add-currency-switcher-in-wordpress-form/).
:::

![Currency switcher](/images/global-settings/how-to-change-currency-settings-in-wordpress-with-paymattic/Currency-Switcher-Settings.webp)

#### Honeypot Protection

Honeypot is a clever cybersecurity strategy that acts like a digital decoy, designed to lure cybercriminals into a trap and keep them away from legitimate targets. Enable this setting if you want Paymattic to verify honeypot security for all Paymattic Forms.
> [!Note]
> To learn about Honeypot Security in detail, read this [Article](https://paymattic.com/honeypot-in-cyber-security/#what-is-honeypot-security).

### Additional Settings

Here you will find three more settings. These are:

* **Stripe Checkout Locale:** This is used to determine the language displayed on the checkout page for your Stripe Users (i.e., setting the locale to Dutch will show the Stripe Checkout page in Dutch). We recommend selecting the Auto-detect locale to automatically detect the user’s language based on their locality.
* **Submission Abandoned After:** Here, you can set the duration for a form’s submission/entry to include in the abandoned list. For example, if a form entry has a “pending” payment status for 3 hours, it will be added to the abandoned list while still showing as pending. You can view the abandoned entries in the list.
* **Disable IP Address Logging:** If you disable this option, the IP addresses of your users will not be tracked by your site anymore.


![Other settings](/images/global-settings/how-to-change-currency-settings-in-wordpress-with-paymattic/Other-Settings.webp)

## Changing Currency Settings for Specific Forms


First, go to the **All Forms** from the **Paymattic Navbar**, choose the form you wish to work on, and click the **Pencil/Editor** icon.

:::tip New Forms
Need to create a form? See our guides for [creating from scratch](/how-to-create-a-form-from-scratch-with-paymattic) or [using templates](/simple-form-templates).
:::

![Access form editor](/images/global-settings/how-to-change-currency-settings-in-wordpress-with-paymattic/All-Forms-sction--scaled.webp)

Now, go to the **Settings** section, open the **Currency** tab, and you will get the settings options to change the currency settings for this form. These are:

* **Currency & Locale Setting:** Here, you will get two options; **As Per Global Settings** (to keep the general settings same for this form) and **Custom Settings** (to change the currencies). You must click the **Custom Settings** button to change the Currency settings.
* **Currency:** Here, you can set the currency type from the dropdown list according to your need only for this individual form.
* **Stripe Checkout Locale:** Here, you can select the language displayed on the **checkout page** for your **Stripe Users** only for this form.

Once you are done with the customization, press the **Save Currency Settings** button and all your changes will be saved for this form.

![Form currency settings](/images/global-settings/how-to-change-currency-settings-in-wordpress-with-paymattic/Settings-of-a-specific-form-Currency-Custom-Settings--scaled.webp)

::: tip Need Help?
If you have any questions, concerns, or suggestions, please [contact our support team](https://wpmanageninja.com/support-tickets/).
:::