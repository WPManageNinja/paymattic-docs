---
title: "How to Integrate Payrexx in WordPress with Paymattic"
category: "Payment Method Fields"
---
Payrexx is a worldwide recognized fast and secure payment gateway that allows you to collect payments globally. You can accept payments via Visa, Mastercard, Paypal, Apple Pay, Samsung Pay, and a further 200+ available payment options through Payrexx. This article will guide you through configuring Payrexx on your WordPress Site with the Paymattic plugin.

Remember, to get access to the [Payrexx](https://www.payrexx.com/) payment gateway, you need the [Paymattic Pro Plugin](/# 1-toc-title).

## Configuring Payrexx Payment Method

To learn how to configure the Payrexx payment gateway through Paymattic, follow the steps with screenshots below –

First, go to **Payment Gatewa**y from the **Paymattic Navbar**, click the **Payrexx** tab from the left sidebar, and the **Payrexx Settings** page will open.

Select the **Checkout Style Type** as either **Modal checkout style** (allows you to collect Payments on your site) or **Hosted payrexx.com style** (it will redirect users to the Payraxx Website for checkout).

Then, you need to obtain the **Instance Name** and **API Key** from your **Payrexx Account**.

![](/images/payment-method-fields/how-to-integrate-payrexx-in-wordpress-with-paymattic/Payment-gateway-Payrexx-Payrexx-Settings-scaled.webp)

#### Get the API key &amp; Secret key from Payrexx

First, log in to your [Payrexx Account](https://login.payrexx.com/en). If you do not have an account, sign up from [here](https://signup.payrexx.com/en).

Once you log in to the **Payrexx Dashboard**, go to the **API &amp; Plugins** section from the left sidebar, and click the **Add** **API Key** button**.**

![](/images/payment-method-fields/how-to-integrate-payrexx-in-wordpress-with-paymattic/API-Plugins-Add-API-Payrexx-dashboard-scaled.webp)

Now**,** provide a **Name** for your integration into the **Integration Name** field and click the **Add** button.

![](/images/payment-method-fields/how-to-integrate-payrexx-in-wordpress-with-paymattic/Integration-Name-and-Add-button.webp)

Here, you will get your **API Key**, simply copy it.

![](/images/payment-method-fields/how-to-integrate-payrexx-in-wordpress-with-paymattic/Copy-Integration-API-key.webp)

Next, collect the **Instance Name** that Payrexx sent with the welcome email while opening the Payrexx account.

Remember, if your payment page URL is **https://example.payrexx.com** then the **example** is your Instance Name.

![](/images/payment-method-fields/how-to-integrate-payrexx-in-wordpress-with-paymattic/Instance-name.webp)

Go back to **Payment Gatewa**y from the **Paymattic Navbar**, click the **Payrexx** tab, and paste the copied **Instance Name** and **API Key** into the respective fields.

Finally, press the **Save Settings** button and your Payrexx account will be integrated with Paymattic for your WordPress Site.

![](/images/payment-method-fields/how-to-integrate-payrexx-in-wordpress-with-paymattic/Paste-the-API-key-scaled.webp)

### Payrexx IPN Settings

To learn how to configure the **Webhook URL** io your Payrexx follow the steps with the screenshots below –

To ensure your Payrexx function completely to get IPN (instant payment notifications), configure the Webhook URL given by Paymattic in your Payrexx account.

Again, go to **Payment Gatewa**y from the **Paymattic Navbar**, click the **Payrexx** tab, and copy the **Webhook URL.**

![](/images/payment-method-fields/how-to-integrate-payrexx-in-wordpress-with-paymattic/Copy-the-Webhook-URL-scaled.webp)

Now go back to the [Payrexx Dashboard](https://login.payrexx.com/en), paste the URL you copied from the Payrexx Settings page into the **Webhook URL** field, and use the **Webhook Type** as **Normal(PHP-Post)**.

Finally, click the **Add** button, and the webhook will be configured in Payrexx to get the INP notification on your WordPress Site.

![](/images/payment-method-fields/how-to-integrate-payrexx-in-wordpress-with-paymattic/Paste-the-Webhook-URL-in-Payrexx.webp)

## Add Payrexx in Forms

Once you finish setting up your **Payrexx** payment gateway, you can easily add this payment method to any of your existing [Payment Form](/how-to-create-your-first-payment-form-in-a-minute-and-accept-payments-with-paymattic).

If you do not have any existing forms, read[ Create a Form from Scratch](/how-to-create-a-form-from-scratch-with-paymattic) or[ Create a Form using Templates](/simple-form-templates) documentation.

To learn the detailed process of adding a payment method to an existing form, read this [Documentation](/how-to-use-the-payment-method-fields-section).

But, remember, the added **Payrexx** payment method in your **Form** will not function unless you complete the configuration process properly.

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.