---
title: "How to Integrate Square with Paymattic in WordPress?"
category: "Payment Method Fields"
---
# How to Integrate Square with Paymattic in WordPress

[Square](https://squareup.com/us/en) is a globally recognized payment gateway that you can integrate with [Paymattic](https://paymattic.com/). This article will guide you through configuring Square in your WordPress Site with the Paymattic plugin.

::: warning Prerequisites
To get access to the Square payment gateway, you need the [Paymattic Pro Plugin](/getting-started-with-paymattic/how-to-install-and-activate-paymattic-in-wordpress).
:::

## Configuring Square Payment Method

Follow these steps to configure the Square payment gateway through Paymattic:

### Step 1: Access Square Settings

1. Go to **Payment Gateway** from the **Paymattic Navbar**
2. Click the **Square** tab from the left sidebar
3. The **Square Settings** page will open

![Square Settings Page](/images/payment-method-fields/how-to-integrate-square-with-paymattic-in-wordpress/Square-Payment-Gateway-Paymattic-scaled.webp)

### Step 2: Choose Payment Mode

1. Select your **Payment Mode**:
   - **Test Mode** - for test payments
   - **Live Mode** - for real payments
   
   Both options follow the same configuration process. For this guide, we'll use **Test Mode**.

2. You'll need to obtain two credentials from your Square Account:
   - Access Key
   - Location ID

![Payment Mode Selection](/images/payment-method-fields/how-to-integrate-square-with-paymattic-in-wordpress/Payment-Mode-Access-key-Location-ID.webp)

### Step 3: Get Square Credentials

Follow these steps to get your Access Token and Location ID:

1. Log in to your [Square Developer Account](https://squareup.com/login?app=developer&return_to=https://developer.squareup.com/)
   
   ::: tip
   If you don't have an account, [sign up here](https://app.squareup.com/signup/en-GB?return_to=https%3A%2F%2Fdeveloper.squareup.com%2F&v=developers).
   :::

#### Create a Square Application

1. In the **Square Dashboard**:
   - Go to **Account** in the navbar
   - Click **Developer Dashboard**

![Square Developer Dashboard](/images/payment-method-fields/how-to-integrate-square-with-paymattic-in-wordpress/Account-Developer-Dashboard-scaled.webp)

2. Under the **Applications** tab:
   - Click the **Plus Icon** to create a new application

![Create New Application](/images/payment-method-fields/how-to-integrate-square-with-paymattic-in-wordpress/Plus-icon-under-Applications-scaled.webp)

3. Configure your application:
   - Enter a **Name** for your application
   - Click **Next**

![Name Your Application](/images/payment-method-fields/how-to-integrate-square-with-paymattic-in-wordpress/Name-your-application-scaled.webp)

4. Set application permissions:
   - Check the **Accept Payments** box
   - Click **Next**

![Accept Payments Option](/images/payment-method-fields/how-to-integrate-square-with-paymattic-in-wordpress/Accept-Payments-option-scaled.webp)

5. Complete setup:
   - Select your desired audience option
   - Click **Complete**

![Select Audience](/images/payment-method-fields/how-to-integrate-square-with-paymattic-in-wordpress/Myself-option-scaled.webp)

#### Get Access Token and Location ID

1. Get Access Token:
   - Find the **Sandbox Access Token** under **Credentials**
   - Copy the token

![Copy Access Token](/images/payment-method-fields/how-to-integrate-square-with-paymattic-in-wordpress/Copy-the-Access-Token--scaled.webp)

2. Get Location ID:
   - Go to the **Locations** tab in the left sidebar
   - Copy your **Location ID**

![Copy Location ID](/images/payment-method-fields/how-to-integrate-square-with-paymattic-in-wordpress/Copy-the-Location-ID-scaled.webp)

### Step 4: Configure in Paymattic

1. Return to **Payment Gateway** from the **Paymattic Navbar**
2. Click the **Square** tab
3. Enter your credentials:
   - Paste the **Access Token** into the **Access Key** field
   - Paste the **Location ID** into its field
4. Click **Save Settings** to complete the integration

![Configure Square Credentials](/images/payment-method-fields/how-to-integrate-square-with-paymattic-in-wordpress/Paste-the-Access-token-Location-ID-scaled.webp)

## Configuring Webhooks

::: warning Important
To ensure your Square dashboard and Paymattic dashboard stay synchronized and fully functional for all payment types (one-time/recurring), you must configure Square Webhooks.
:::

### Step 1: Get Webhook Details

1. Copy the **Webhook URL** from Paymattic
2. Note the recommended **Webhook Events** for:
   - One-time payments
   - Recurring payments

![Webhook Configuration Details](/images/payment-method-fields/how-to-integrate-square-with-paymattic-in-wordpress/Webhook-URL-and-Events.webp)

### Step 2: Configure in Square

1. Go to your [Square Developer Dashboard](https://squareup.com/login?app=developer&return_to=https://developer.squareup.com/)
2. In the left sidebar:
   - Expand the **Webhook** section
   - Open the **Subscriptions** tab
   - Click **Add Subscription**

![Square Webhook Settings](/images/payment-method-fields/how-to-integrate-square-with-paymattic-in-wordpress/Webhooks-Subscriptions-Add-Subscriptions-scaled.webp)

3. Configure the webhook:
   - Give it a **Name**
   - Paste the **Webhook URL** from Paymattic
   - Confirm your API version
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

![Configure Webhook Subscription](/images/payment-method-fields/how-to-integrate-square-with-paymattic-in-wordpress/Add-a-webhook-subscription-page.webp)

## Using Square in Forms

Once you've completed the setup, you can add Square to your forms:

1. For existing forms: Add it to any [Payment Form](/payment-method-fields/how-to-create-your-first-payment-form-in-a-minute-and-accept-payments-with-paymattic)

2. For new forms:
   - [Create a Form from Scratch](/form-editor/how-to-create-a-form-from-scratch-with-paymattic)
   - [Use Form Templates](/form-editor/simple-form-templates)

3. Learn more about [adding payment methods](/payment-method-fields/how-to-use-the-payment-method-fields-section)

::: warning Note
The Square payment method will not function unless you complete the configuration process properly.
:::

::: tip Need Help?
If you have any questions, concerns, or suggestions, please contact our [@support team](https://wpmanageninja.com/support-tickets/). We're here to help!
:::