---
title: "How to Integrate Mollie in WordPress with Paymattic?"
category: "Payment Method Fields"
---
# How to Integrate Mollie in WordPress with Paymattic

[Mollie](https://mollie.com/) is a powerful payment gateway that simplifies online payments for your webshop. This article will guide you through configuring Mollie on your WordPress Site with the Paymattic plugin.

::: warning Prerequisites
To get access to the [Mollie](https://mollie.com/) payment gateway, you need the [Paymattic Pro Plugin](/getting-started-with-paymattic/how-to-install-and-activate-paymattic-in-wordpress).
:::

## Configuring Mollie Payment Method

Follow these steps to configure the Mollie payment gateway through Paymattic:

### Step 1: Access Mollie Settings

1. Go to **Payment Gateway** from the **Paymattic Navbar**
2. Click the **Mollie** tab from the left sidebar
3. The **Mollie Settings** page will open

### Step 2: Configure Basic Settings

1. Select your **Payment Mode**:
   - **Test Mode** - for test payments
   - **Live Mode** - for real payments
   
   Both options follow the same configuration process. For this guide, we'll use **Test Mode**.

2. You'll need to obtain the **Publishable Key** from your Mollie Account

![Mollie Settings Page in Paymattic](/images/payment-method-fields/how-to-integrate-mollie-in-wordpress-with-paymattic/Payment-gateways-Mollie-Mollie-Settings-page-scaled.webp)

### Step 3: Get Mollie API Key

1. Log in to your [Mollie Account](https://my.mollie.com/dashboard/login)
   
   ::: tip
   If you don't have an account, [sign up here](https://my.mollie.com/dashboard/signup).
   :::

2. In the **Mollie Dashboard**:
   - Go to **Developers** in the navbar
   - The **API Keys** tab will appear

![Mollie Developer Dashboard](/images/payment-method-fields/how-to-integrate-mollie-in-wordpress-with-paymattic/Developers-tab-from-Mollie-Dashboard-scaled.webp)

3. Get your API Key:
   - For Test Mode: Copy the **Test API Key**
   - For Live Mode: Copy the **Live API Key**

::: info Note
Make sure to use the correct API key that matches your selected Payment Mode:
- Test Mode → Test API Key
- Live Mode → Live API Key
:::

![Copy Mollie API Key](/images/payment-method-fields/how-to-integrate-mollie-in-wordpress-with-paymattic/Copy-Test-API-Key.webp)

### Step 4: Configure in Paymattic

1. Return to **Payment Gateway** from the **Paymattic Navbar**
2. Click the **Mollie** tab
3. Enter your credentials:
   - Paste the API Key into the **Publishable Key** field
4. Click **Save Settings** to complete the integration

![Configure Mollie Credentials in Paymattic](/images/payment-method-fields/how-to-integrate-mollie-in-wordpress-with-paymattic/Paste-API-Key-scaled.webp)

## Using Mollie in Forms

Once you've completed the setup, you can add Mollie to your forms:

1. For existing forms: Add it to any [Payment Form](/payment-method-fields/how-to-create-your-first-payment-form-in-a-minute-and-accept-payments-with-paymattic)

2. For new forms:
   - [Create a Form from Scratch](/form-editor/how-to-create-a-form-from-scratch-with-paymattic)
   - [Use Form Templates](/form-editor/simple-form-templates)

3. Learn more about [adding payment methods](/payment-method-fields/how-to-use-the-payment-method-fields-section)

::: warning Note
The Mollie payment method will not function unless you complete the configuration process properly.
:::

::: tip Need Help?
If you have any questions, concerns, or suggestions, please contact our [@support team](https://wpmanageninja.com/support-tickets/). We're here to help!
:::