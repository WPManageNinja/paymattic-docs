---
title: "Integrate Payrexx with Paymattic"
category: "Payment Method Fields"
---
# Integrate Payrexx with Paymattic

[Payrexx](https://www.payrexx.com/) is a globally recognized fast and secure payment gateway that allows you to collect payments worldwide. You can accept payments through:

- Credit/Debit Cards:
  - Visa
  - Mastercard
- Digital Wallets:
  - PayPal
  - Apple Pay
  - Samsung Pay
- Plus 200+ additional payment options

This article will guide you through configuring Payrexx on your WordPress Site with the Paymattic plugin.

::: warning Prerequisites
To get access to the [Payrexx](https://www.payrexx.com/) payment gateway, you need the [Paymattic Pro Plugin](/getting-started-with-paymattic/how-to-install-and-activate-paymattic-in-wordpress).
:::

## Configuring Payrexx Payment Method

Follow these steps to configure the Payrexx payment gateway through Paymattic:

### Step 1: Access Payrexx Settings

1. Go to **Payment Gateway** from the **Paymattic Navbar**
2. Click the **Payrexx** tab from the left sidebar
3. The **Payrexx Settings** page will open

### Step 2: Configure Basic Settings

1. Choose your **Checkout Style Type**:
   - **Modal Checkout Style** - collect payments directly on your site
   - **Hosted Payrexx.com Style** - redirect users to the Payrexx website

2. You'll need to obtain two credentials from your Payrexx Account:
   - Instance Name
   - API Key

![Payrexx Settings Page in Paymattic](/images/payment-method-fields/integrate-payrexx/Payment-gateway-Payrexx-Payrexx-Settings-scaled.webp)

### Step 3: Get Payrexx Credentials

1. Log in to your [Payrexx Account](https://login.payrexx.com/en)
   
   ::: tip
   If you don't have an account, [sign up here](https://signup.payrexx.com/en).
   :::

2. In the **Payrexx Dashboard**:
   - Go to **API & Plugins** in the left sidebar
   - Click the **Add API Key** button

![Payrexx API Settings](/images/payment-method-fields/integrate-payrexx/API-Plugins-Add-API-Payrexx-dashboard-scaled.webp)

3. Create a new API Key:
   - Enter a **Name** in the **Integration Name** field
   - Click **Add**

![Create New API Key](/images/payment-method-fields/integrate-payrexx/Integration-Name-and-Add-button.webp)

4. Copy your new **API Key**

![Copy Payrexx API Key](/images/payment-method-fields/integrate-payrexx/Copy-Integration-API-key.webp)

5. Get your **Instance Name**:
   - Check the welcome email from Payrexx
   - Or use your payment page URL:
   
   ::: info Example
   If your payment page URL is `https://example.payrexx.com`, then `example` is your Instance Name.
   :::

![Instance Name Example](/images/payment-method-fields/integrate-payrexx/Instance-name.webp)

### Step 4: Configure in Paymattic

1. Return to **Payment Gateway** from the **Paymattic Navbar**
2. Click the **Payrexx** tab
3. Enter your credentials:
   - Paste the **Instance Name** into its field
   - Paste the **API Key** into its field
4. Click **Save Settings** to complete the integration

![Configure Payrexx Credentials in Paymattic](/images/payment-method-fields/integrate-payrexx/Paste-the-API-key-scaled.webp)

## Configuring Webhooks (IPN)

::: warning Important
To ensure your Payrexx integration functions properly and receives Instant Payment Notifications (IPN), you must configure the Webhook URL in your Payrexx account.
:::

### Step 1: Get Webhook URL

1. In Paymattic:
   - Go to **Payment Gateway**
   - Click the **Payrexx** tab
   - Copy the **Webhook URL**

![Copy Webhook URL from Paymattic](/images/payment-method-fields/integrate-payrexx/Copy-the-Webhook-URL-scaled.webp)

### Step 2: Configure in Payrexx

1. Go to your [Payrexx Dashboard](https://login.payrexx.com/en)
2. Configure the webhook:
   - Paste the copied URL into the **Webhook URL** field
   - Set **Webhook Type** to **Normal(PHP-Post)**
3. Click **Add** to complete the webhook configuration

![Configure Webhook in Payrexx](/images/payment-method-fields/integrate-payrexx/Paste-the-Webhook-URL-in-Payrexx.webp)

## Using Payrexx in Forms

Once you've completed the setup, you can add Payrexx to your forms:

1. For existing forms: Add it to any [Payment Form](/create-payment-form)

2. For new forms:
   - [Create a Form from Scratch](/form-editor/how-to-create-a-form-from-scratch-with-paymattic)
   - [Use Form Templates](/form-editor/simple-form-templates)

3. Learn more about [adding payment methods](/payment-method-fields/how-to-use-the-payment-method-fields-section)

::: warning Note
The Payrexx payment method will not function unless you complete the configuration process properly.
:::

::: tip Need Help?
If you have any questions, concerns, or suggestions, please contact our [@support team](https://wpmanageninja.com/support-tickets/). We're here to help!
:::