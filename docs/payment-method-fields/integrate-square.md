---
title: "Integrate Square with Paymattic"
category: "Payment Method Fields"
---
# Integrate Square with Paymattic

[Square](https://squareup.com/us/en) is a globally recognized payment gateway that you can integrate with [Paymattic](https://paymattic.com/). This article will guide you through configuring Square in your WordPress Site with the Paymattic plugin.

::: warning Prerequisites
To get access to the Square payment gateway, you need the [Paymattic Pro Plugin](https://paymattic.com/pricing/).
:::

## Configuring Square Payment Method

Follow these steps to configure the Square payment gateway through Paymattic:

### Step 1: Access Square Settings

1. Go to **Payment Gateway** from the **Paymattic Navbar**
2. Click the **Square** tab from the left sidebar
3. The **Square Settings** page will open, showing the **Payment Mode**, **Test/Live Access Key**, **Test/Live Location Id**, and **Test/Live Webhook Signature Key** fields, along with the **Webhook URL** and the recommended **Webhook Events** you will subscribe to in Square later on.

![Square Settings Page](/images/payment-method-fields/integrate-square/Square-Payment-Gateway-Paymattic-scaled.webp)

### Step 2: Choose Payment Mode

1.  **Select Payment Mode:** Choose between **Test** (for test payments) and **Live** (for real payments). Both options follow the same configuration process. For this example, we will use **Test Mode**.

2.  Next, you need to obtain the **Access Key**, **Location ID**, and **Webhook Signature Key** from your **Square Account** for the selected mode.

![Payment Mode Selection](/images/payment-method-fields/integrate-square/Payment-Mode-Access-key-Location-ID.webp)

### Step 3: Get Square Credentials

To learn how to get an **Access Token** and **Location ID** from your **Square** account, follow the steps below.

> [!Note]
> To get the credentials for configuration, you need to create an app in your Square account. The following steps will guide you on how to do this.

1.  First, log in to your **[Square Developer Dashboard](https://squareup.com/login?app=developer&return_to=https://developer.squareup.com/)**, go to the **Account** section from the navigation bar.

2.  Click the **Developer Dashboard** tab.

![Square Developer Dashboard](/images/payment-method-fields/integrate-square/Account-Developer-Dashboard-scaled.webp)

3. Under the **Applications** tab click on the **Plus Icon** to create a new application

![Create New Application](/images/payment-method-fields/integrate-square/Plus-icon-under-Applications-scaled.webp)

4. Configure your application:
   - Enter a **Name** for your application
   - Click **Next**

![Name Your Application](/images/payment-method-fields/integrate-square/Name-your-application-scaled.webp)

7. Set application permissions:
   - Check the **Accept Payments** box
   - Click **Next**

![Accept Payments Option](/images/payment-method-fields/integrate-square/Accept-Payments-option-scaled.webp)

8. Complete setup:
   - Select your desired audience option
   - Click **Complete**

![Select Audience](/images/payment-method-fields/integrate-square/Myself-option-scaled.webp)

#### Get Access Token and Location ID

1. Get Access Token:
   - Find the **Sandbox Access Token** under **Credentials**
   - Copy the token

![Copy Access Token](/images/payment-method-fields/integrate-square/Copy-the-Access-Token--scaled.webp)

2. Get Location ID:
   - Go to the **Locations** tab in the left sidebar
   - Copy your **Location ID**

![Copy Location ID](/images/payment-method-fields/integrate-square/Copy-the-Location-ID-scaled.webp)

## Configuring Webhooks in Square

::: warning Important
To ensure your Square dashboard and Paymattic dashboard stay synchronized and fully functional for all payment types (recurring), you must configure Square Webhooks.
:::

### Step 1: Add the Webhook Subscription in Square

1.  Click on the **Webhooks** section from the left sidebar, then open the **Subscriptions** tab.

2.  Click the **Add Subscription** button.

![Square Webhook Settings](/images/payment-method-fields/integrate-square/Webhooks-Subscriptions-Add-Subscriptions-scaled.webp)

3. Configure the webhook:
   - Give it a **Name**
   - Paste the **Webhook URL** you copied from the **Square Settings** page in Paymattic (Step 1 above)
   - Confirm your **API version**
   - Select the recommended events

::: info Webhook Events
The recommended events and their purposes:

1. **invoice.created**
   - Triggers when an invoice is created
   - Occurs after order placement or subscription billing cycle start

2. **invoice.payment_made**
   - Triggers on successful payment completion
   - Covers both partial and full payments

3. **payment.updated**
   - Triggers when payment status changes
   - Includes completions, declines, and refunds

4. **subscription.created**
   - Triggers when a customer subscribes to a plan

5. **subscription.updated**
   - Triggers when subscription details change
   - Covers status changes (paused/resumed/canceled)
   - Includes billing cycle or pricing updates
:::

4. Click **Save** to complete the webhook configuration

![Configure Webhook Subscription](/images/payment-method-fields/integrate-square/Add-a-webhook-subscription-page.webp)

### Step 2: Copy the Webhook Signature Key

After saving, Square generates a **Signature Key** for that subscription. Paymattic uses this key to verify that incoming webhook requests genuinely come from Square, so it must be configured for webhooks to work.

1. From the **Webhook subscriptions** list, click on the subscription you just created to open its details.
2. Copy the **Signature Key**.

![Signature Key](/images/payment-method-fields/integrate-square/signature-key.webp)

### Step 3: Configure in Paymattic

1.  Go back to your WordPress dashboard and navigate to **Paymattic** → **Payment Gateway**, then click the **Square** tab.

2.  **Paste** the copied **Access Token** into the **Access Key** field.

3.  Paste the copied **Location ID** into the **Location ID** field.

4.  Paste the copied **Signature Key** into the **Webhook Signature Key** field.

5.  Finally, press the **Save Settings** button.

Your **Square** account will now be integrated with **Paymattic** for your WordPress Site.

![Configure Square Credentials](/images/payment-method-fields/integrate-square/paste-signature-key.webp)

::: warning Per-Mode Signature Keys
Square generates a separate **Signature Key** for each webhook subscription. If you configure webhooks for both **Test** and **Live** mode, make sure you copy each mode's Signature Key into the Signature Key field under its matching mode in Paymattic. Mixing up the keys will cause webhook signature verification to fail, and your payment/subscription statuses will stop syncing.
:::

## Using Square in Forms

Once you've completed the setup, you can add Square to your forms:

1. For existing forms: Add it to any [Payment Form](/create-payment-form)

2. For new forms:
   - [Create a Form from Scratch](/form-editor/how-to-create-a-form-from-scratch-with-paymattic)
   - [Use Form Templates](/form-editor/simple-form-templates)

3. Learn more about [adding payment methods](/payment-method-fields/how-to-use-the-payment-method-fields-section)

::: warning Note
The Square payment method will not function unless you complete the configuration process properly.
:::


