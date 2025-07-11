---
title: "How to Integrate Xendit Payment Gateway in WordPress with Paymattic?"
category: "Payment Method Fields"
---
Xendit is a popular payment gateway based in Indonesia, Philippines, and South East Asia region. It supports various local and international payment methods such as VISA, Mastercard, American Express, JCB, local bank transfer, e-wallets, and many more. This article will guide you through configuring Xendit on your WordPress Site with the Paymattic plugin.

Remember, to get access to the [Xendit](https://www.xendit.co/en/) payment gateway, you need the [Paymattic Pro Plugin](/# 1-toc-title).

## Configuring the Xendit Payment Method

To learn how to configure the Xendit payment gateway through Paymattic, follow the steps with screenshots below –

First, go to **Payment Gatewa**y from the **Paymattic Navbar**, click the **Xendit** tab from the left sidebar, and the **Xendit Settings** page will open.

Click the **Install and Activate** **Xendit** button to connect Xendit with Paymattic Pro.

This add-on needs to be installed the first time you integrate with Xendit.

![](/images/payment-method-fields/how-to-integrate-xendit-in-wordpress/Payment-gateway-Xendit-tab-scaled.webp)

Select any **Payment Mode** between **Test** (for test payments) and **Live** ( for real payments) as both options follow the same configuration process, e.g., I choose the **Test Mode**.

Then, you need to obtain the **Test Secret** **Key** from your **Xendit Account**.

![](/images/payment-method-fields/how-to-integrate-xendit-in-wordpress/Payment-Mode-and-Secret-Key.webp)

#### Get the Secret Key from Xendit

First, log in to your [Xendit Account](https://dashboard.xendit.co/settings/developers#callbacks). If you do not have an account, sign up from [here](https://dashboard.xendit.co/register).

Once you log in to the **Xendit Dashboard**, go to the **Settings** section from the left sidebar, and click the **API Keys** under the **Developers** tab.

![](/images/payment-method-fields/how-to-integrate-xendit-in-wordpress/Xendits-Settings-section-API-key-under-Developer-tab-scaled.webp)

Click the **+ Generate secret key** button and a pop-up page will appear.

![](/images/payment-method-fields/how-to-integrate-xendit-in-wordpress/Generate-Secret-Key.webp)

Here, give a **Name** for your API key and set some **Permissions** for your API. Set the permissions like below:
- Money-in Products – Write
- Money-out Products – Write
- Balance – Read
- Report – Write
- Transaction – Read
- xenPlatform (Account) – Write
- xenPlatform (Account Holder) – Write
- xenPlatform (Split Payments) – Write
- xenShield (Transaction Assessments) – Write

After setting all permissions, click the **Generate Key** button.

![](/images/payment-method-fields/how-to-integrate-xendit-in-wordpress/Generate-API-Key-popup-page.webp)

Now another popup will appear confirming the successful generation of your API key.
Click on the **Copy** button to copy your **Secret API Key** and save it for future use.

![](/images/payment-method-fields/how-to-integrate-xendit-in-wordpress/Copy-secret-key.webp)

Return to **Payment Gatewa**y from the **Paymattic Navbar**, click the **Xendit** tab, and paste the copied **Secret key** into the respective field.

Finally, press the **Save Settings** button and your Xendit account will be integrated with Paymattic for your WordPress Site.

![](/images/payment-method-fields/how-to-integrate-xendit-in-wordpress/Paste-Secret-Key-.webp)

### Invoice Duration &amp; Customer Notification Preference

Once you configure Xendit, you can set up the **Invoice Duration in** and **Customer Notification Preference** if needed.
- **Invoice Duration:** Select the duration from the dropdown list according to your requirements or select **None** if you want to keep the configuration in the Xendit dashboard for invoice duration. By the way, this setting is optional.
- **Customer Notification Preference**: Select the notification preference of your choice for the customer.
- *Remember**, always press the **Save Settings** button to save the changes you made on your Xendit Settings page.

![](/images/payment-method-fields/how-to-integrate-xendit-in-wordpress/Invoice-duration-in-Customer-notification-preference.webp)

### Add Xendit Webhooks

To learn how to configure the **Xendit Webhooks** to your WordPress Site, follow the steps with the screenshots below –

To ensure your Xendit dashboard and Paymattic dashboard are in sync, you must configure the Xendit Webhooks.

First, copy the **Webhook URL** and paste it to the suggested **Webhook Event** of **Xendit** for smooth transactions based on **Xendit Data.**

![](/images/payment-method-fields/how-to-integrate-xendit-in-wordpress/Webhook-URL-Events.webp)

Now, visit your [Xendit Dashboard](https://dashboard.xendit.co/settings/developers#callbacks), go to the **Settings** section from the left sidebar, and click the **Webhooks** under the **Developers** tab.

![](/images/payment-method-fields/how-to-integrate-xendit-in-wordpress/Webhooks-under-Developers-tab-of-Xendit-Setting-scaled.webp)

Now, scroll down to **Invoices** section and paste the **Webhook URL** you have copied from the **Xendit Settings** in **Paymattic**.

Finally, check heck the **Notification Boxes** and click the **Test and Save button**. And, the Xendit Webhooks will be configured with your WordPress Site!

![](/images/payment-method-fields/how-to-integrate-xendit-in-wordpress/Paste-the-webhook-URL-in-Xendit.webp)

## Add Xendit in Forms

Once you finish setting up your **Xendit** payment gateway, you can easily add this payment method to any of your existing [Payment Form](/how-to-create-your-first-payment-form-in-a-minute-and-accept-payments-with-paymattic).

If you do not have any existing forms, read[ Create a Form from Scratch](/how-to-create-a-form-from-scratch-with-paymattic) or[ Create a Form using Templates](/simple-form-templates) documentation.

To learn the detailed process of adding a payment method to an existing form, read this [Documentation](/how-to-use-the-payment-method-fields-section).

But, remember, the added **Xendit** payment method in your **Form** will not function unless you complete the configuration process properly.

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.