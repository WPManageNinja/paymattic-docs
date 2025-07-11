---
title: "How to Add Flutterwave Payment Gateway in Paymattic?"
category: "Payment Method Fields"
---
# How to Add Flutterwave Payment Gateway in Paymattic

[Flutterwave](https://flutterwave.com/us/) is a powerful payment gateway that unlocks boundless payment opportunities for enterprises, individuals, small businesses, emerging markets, and startups alike. This article will guide you through configuring Flutterwave on your WordPress Site with the Paymattic plugin.

::: warning Prerequisites
To get access to the [Flutterwave](https://flutterwave.com/us/) payment gateway, you need the [Paymattic Pro Plugin](/getting-started-with-paymattic/how-to-install-and-activate-paymattic-in-wordpress).
:::

## Configuring Flutterwave Payment Method

Follow these steps to configure the Flutterwave payment gateway through Paymattic:

### Step 1: Install and Activate Flutterwave

1. Go to **Payment Gateway** from the **Paymattic Navbar**
2. Click the **Flutterwave** tab from the left sidebar
3. The **Flutterwave Settings** page will open
4. Click the **Install and Activate Flutterwave** button

::: info Note
This add-on only needs to be installed the first time you integrate with Flutterwave.
:::

![Install and Activate Flutterwave in Paymattic](/images/payment-method-fields/add-flutterwave-payment-gateway-in-paymattic/Payment-gateway-Flutterwave-Install-activate-flutterwave-button--scaled.webp)

### Step 2: Configure Basic Settings

1. Select your **Payment Mode**:
   - **Test Mode** - for test payments
   - **Live Mode** - for real payments
   
   Both options follow the same configuration process. For this guide, we'll use **Test Mode**.

2. You'll need to obtain two credentials from your Flutterwave Account:
   - Public Key
   - Secret Key

![Flutterwave Settings Page in Paymattic](/images/payment-method-fields/add-flutterwave-payment-gateway-in-paymattic/Payment-mode-Public-Secret-key.webp)

### Step 3: Get Flutterwave Credentials

1. Log in to your [Flutterwave Account](https://app.flutterwave.com/login)
   
   ::: tip
   If you don't have an account, [sign up here](https://app.flutterwave.com/register).
   :::

2. Access API Keys:
   - Go to **Settings** in the left sidebar
   - Click **API keys** under the **Developers** tab
   - Copy both the **Public Key** and **Secret Key**

![Flutterwave Settings Section](/images/payment-method-fields/add-flutterwave-payment-gateway-in-paymattic/Settings-section-of-Flutterwave-scaled.webp)

![Copy Flutterwave API Keys](/images/payment-method-fields/add-flutterwave-payment-gateway-in-paymattic/Copy-Public-key-Secret-key-.webp)

### Step 4: Configure in Paymattic

1. Return to **Payment Gateway** from the **Paymattic Navbar**
2. Click the **Flutterwave** tab
3. Enter your credentials:
   - Paste the Public Key
   - Paste the Secret Key
4. Click **Save Settings** to complete the integration

![Configure Flutterwave Credentials in Paymattic](/images/payment-method-fields/add-flutterwave-payment-gateway-in-paymattic/Paste-public-key-and-secret-key--scaled.webp)

### Step 5: Configure Webhooks

::: warning Important
To ensure your Flutterwave dashboard and Paymattic dashboard stay in sync, you must configure webhooks.
:::

1. Copy the Webhook URL from Paymattic:
   - This URL is needed for configuring webhooks in Flutterwave

![Copy Webhook URL from Paymattic](/images/payment-method-fields/add-flutterwave-payment-gateway-in-paymattic/Copy-the-webhook-url.webp)

2. Configure in Flutterwave Dashboard:
   - Go to **Settings** in the left sidebar
   - Click **Webhooks** under the **Developers** tab
   - Enter the following:
     - **URL**: Paste your copied Webhook URL
     - **Secret hash**: Enter `wpf_flutterwave_listener`
   - Select your preferred **Webhook Preferences**
   - Click **Save**

![Configure Webhooks in Flutterwave](/images/payment-method-fields/add-flutterwave-payment-gateway-in-paymattic/Paste-Wehook-URL.webp)

## Using Flutterwave in Forms

Once you've completed the setup, you can add Flutterwave to your forms:

1. For existing forms: Add it to any [Payment Form](/payment-method-fields/how-to-create-your-first-payment-form-in-a-minute-and-accept-payments-with-paymattic)

2. For new forms:
   - [Create a Form from Scratch](/form-editor/how-to-create-a-form-from-scratch-with-paymattic)
   - [Use Form Templates](/form-editor/simple-form-templates)

3. Learn more about [adding payment methods](/payment-method-fields/how-to-use-the-payment-method-fields-section)

::: warning Note
The Flutterwave payment method will not function unless you complete the configuration process properly.
:::

::: tip Need Help?
If you have any questions, concerns, or suggestions, please contact our [support team](https://wpmanageninja.com/support-tickets/). We're here to help!
:::