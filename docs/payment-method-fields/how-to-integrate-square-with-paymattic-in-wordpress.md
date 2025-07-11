---
title: "How to Integrate Square with Paymattic in WordPress?"
category: "Payment Method Fields"
---
[Square](https://squareup.com/us/en) is a globally recognized payment gateway to integrate with [Paymattic](https://paymattic.com/). This article will guide you through **configuring** **Square** in your **WordPress** **Site** with the **Paymattic** plugin.

## Configuring Square Payment Method

To learn how to configure the Square payment gateway through Paymattic, follow the steps with screenshots below –

First, go to **Payment Gatewa**y from the **Paymattic Navbar**, click the **Square** tab from the left sidebar, and the **Square Settings** page will open.

![](/images/payment-method-fields/how-to-integrate-square-with-paymattic-in-wordpress/Square-Payment-Gateway-Paymattic-scaled.webp)

Select any **Payment Mode** between **Test** (for test payments) and **Live** (for real payments) as both options follow the same configuration process, e.g., I choose the **Test Mode**.

Then, you need to obtain the **Access key** and **Location ID** from your **Square Account**.

![](/images/payment-method-fields/how-to-integrate-square-with-paymattic-in-wordpress/Payment-Mode-Access-key-Location-ID.webp)

### Get the Access Token and Location ID from Square

To learn how to get an **Access Token** and **Location ID** from your [Square](https://squareup.com/us/en), follow the steps with screenshots below –

First, log in to your Square account from [here](https://squareup.com/login?app=developer&return_to=https://developer.squareup.com/). If you do not have an account, sign up from [here](https://app.squareup.com/signup/en-GB?return_to=https%3A%2F%2Fdeveloper.squareup.com%2F&v=developers).

To get the credentials for configuration you need to create an app in your Square account. To learn how to create an Application, follow accordingly.

Once you log in to the **Square Dashboard**, go to the **Account** section from the **Navbar**, and click the **Developer Dashboard** tab.

![](/images/payment-method-fields/how-to-integrate-square-with-paymattic-in-wordpress/Account-Developer-Dashboard-scaled.webp)

Click the **Plus** **Icon** under the **Applications** tab to create a new application.

![](/images/payment-method-fields/how-to-integrate-square-with-paymattic-in-wordpress/Plus-icon-under-Applications-scaled.webp)

Now, give a **Name** to your application and click the **Next** button.

![](/images/payment-method-fields/how-to-integrate-square-with-paymattic-in-wordpress/Name-your-application-scaled.webp)

Check the **Accept Payments** box and click on the **Next** button.

![](/images/payment-method-fields/how-to-integrate-square-with-paymattic-in-wordpress/Accept-Payments-option-scaled.webp)

Select your desired option from the popup with the Find your Audience option, and click the **Complete** button.

![](/images/payment-method-fields/how-to-integrate-square-with-paymattic-in-wordpress/Myself-option-scaled.webp)

After creating the application, you will find the **Access Key** in the **Sandbox Access Token** field under the **Credentials**. Copy it.

![](/images/payment-method-fields/how-to-integrate-square-with-paymattic-in-wordpress/Copy-the-Access-Token--scaled.webp)

Now, go to the **Locations** tab from the left sidebar, and copy the **Location ID.**

![](/images/payment-method-fields/how-to-integrate-square-with-paymattic-in-wordpress/Copy-the-Location-ID-scaled.webp)

Go back to **Payment Gatewa**y from the **Paymattic Navbar**, click the **Square** tab, and paste the copied **Access Token** and **Location ID** into the **Access key** and **Location ID** fields respectively.

Finally, press the **Save Settings** button and your Square account will be integrated with Paymattic for your WordPress Site.

![](/images/payment-method-fields/how-to-integrate-square-with-paymattic-in-wordpress/Paste-the-Access-token-Location-ID-scaled.webp)

### Add Square Webhooks

To learn how to configure the **Square Webhooks** to your WordPress Site, follow the steps with the screenshots below –

To ensure your Square dashboard and Paymattic dashboard are in sync and fully function for all kinds of payment (one-time/recurring), you must configure the Square Webhooks.

First, copy the **Webhook URL** and recommended **Webhook Events** for smooth transactions based on **Square** **Data** related to **One-time/Recurring** payments.

You will need them later to configure **Square** **Webhooks** to your **WordPress** **Site**.

![](/images/payment-method-fields/how-to-integrate-square-with-paymattic-in-wordpress/Webhook-URL-and-Events.webp)

Now, go to the [Square Dashboard](https://squareup.com/login?app=developer&return_to=https://developer.squareup.com/), expand the **Webhook** section from the left sidebar, open the **Subscriptions** tab, and click the **Add Subscription** button.

![](/images/payment-method-fields/how-to-integrate-square-with-paymattic-in-wordpress/Webhooks-Subscriptions-Add-Subscriptions-scaled.webp)

Now, **Name** your webhook, paste the **URL** copied from **Paymattic’s Square Settings** page, and confirm your desired **API version.**

Then, select the **Events** recommended from Paymattic for Square by clicking the checkbox.
- *The Events recommended by Paymattic are briefly explained below:**
- **invoice.created**: This triggers when an invoice is created for a customer, typically after an order is placed or at the start of a subscription billing cycle.
- **invoice.payment\_made**: This triggers when a customer successfully completes a payment for a previously issued invoice, either partially or fully.
- **payment.updated**: This triggers when the status or details of a payment change. It covers updates such as payment completions, declines, or refunds on the Square dashboard.
- **subscription.created**: This triggers when a customer subscribes to a plan.
- **subscription.updated**: This triggers when a subscription's details are changed, such as its status (e.g., paused, resumed, or canceled), or other attributes like billing cycles or pricing.

Once you select all the suggested **Webhook Events**, Click the **Save** button.
And, the Square Webhooks will be configured with your WordPress Site!

![](/images/payment-method-fields/how-to-integrate-square-with-paymattic-in-wordpress/Add-a-webhook-subscription-page.webp)

## Add Square in Forms

Once you finish setting up your **Square** payment gateway, you can easily add this payment method to any of your existing [Payment Form](/how-to-create-your-first-payment-form-in-a-minute-and-accept-payments-with-paymattic).

If you do not have any existing forms, read[ Create a Form from Scratch](/how-to-create-a-form-from-scratch-with-paymattic) or[ Create a Form using Templates](/simple-form-templates) documentation.

To learn the detailed process of adding a payment method to an existing form, read this [Documentation](/how-to-use-the-payment-method-fields-section).

But, remember, the added **Square** payment method in your **Form** will not function unless you complete the configuration process properly.

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.