---
title: "How to Integrate Paystack in WordPress with Paymattic?"
category: "Payment Method Fields"
---
# How to Integrate Paystack in WordPress with Paymattic

[Paystack](https://paystack.com/) enhances the payment process of your WordPress website by providing a secure and reliable payment gateway. This article will guide you through configuring Paystack on your WordPress Site with the Paymattic plugin.

::: warning Prerequisites
To get access to the [Paystack](https://paystack.com/) payment gateway, you need the [Paymattic Pro Plugin](/getting-started-with-paymattic/how-to-install-and-activate-paymattic-in-wordpress).
:::

## Configuring Paystack Payment Method

Follow these steps to configure the Paystack payment gateway through Paymattic:

### Step 1: Access Paystack Settings

1. Go to **Payment Gateway** from the **Paymattic Navbar**
2. Click the **Paystack** tab from the left sidebar
3. The **Paystack Settings** page will open

### Step 2: Configure Basic Settings

1. Select your **Payment Mode**:
   - **Test Mode** - for test payments
   - **Live Mode** - for real payments
   
   Both options follow the same configuration process. For this guide, we'll use **Test Mode**.

2. You'll need to obtain two credentials from your Paystack Account:
   - API Key (Public Key)
   - Secret Key

![Paystack Settings Page in Paymattic](/images/payment-method-fields/how-to-integrate-paystack-in-wordpress-with-paymattic/Payment-gateway-Paystack-Paystack-settings-scaled.webp)

### Step 3: Get Paystack Credentials

1. Log in to your [Paystack Account](https://dashboard.paystack.com/#/login)
   
   ::: tip
   If you don't have an account, [sign up here](https://dashboard.paystack.com/#/signup).
   :::

2. In the **Paystack Dashboard**:
   - Go to **Settings** in the left sidebar
   - Click the **API Keys & Webhooks** tab

3. Copy your credentials:
   - **Secret Key**
   - **Public Key**

![Copy Paystack API Keys](/images/payment-method-fields/how-to-integrate-paystack-in-wordpress-with-paymattic/Copy-the-public-key-secret-key-from-paystack-scaled.webp)

### Step 4: Configure in Paymattic

1. Return to **Payment Gateway** from the **Paymattic Navbar**
2. Click the **Paystack** tab
3. Enter your credentials:
   - Paste the **Public Key** into the **API Key** field
   - Paste the **Secret Key** into its field
4. Click **Save Settings** to complete the integration

![Configure Paystack Credentials in Paymattic](/images/payment-method-fields/how-to-integrate-paystack-in-wordpress-with-paymattic/Paste-the-API-Secret-key-scaled.webp)

## Using Paystack in Forms

Once you've completed the setup, you can add Paystack to your forms:

1. For existing forms: Add it to any [Payment Form](/payment-method-fields/how-to-create-your-first-payment-form-in-a-minute-and-accept-payments-with-paymattic)

2. For new forms:
   - [Create a Form from Scratch](/form-editor/how-to-create-a-form-from-scratch-with-paymattic)
   - [Use Form Templates](/form-editor/simple-form-templates)

3. Learn more about [adding payment methods](/payment-method-fields/how-to-use-the-payment-method-fields-section)

::: warning Note
The Paystack payment method will not function unless you complete the configuration process properly.
:::

::: tip Need Help?
If you have any questions, concerns, or suggestions, please contact our [@support team](https://wpmanageninja.com/support-tickets/). We're here to help!
:::