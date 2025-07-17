---
title: "How to Integrate Razorpay with Paymattic in WordPress"
category: "Payment Method Fields"
---
# How to Integrate Razorpay with Paymattic in WordPress

**Razorpay** allows you to smoothly handle online payments in India, supporting various payment methods including credit cards, debit cards, net banking, UPI, and popular wallets like JioMoney, Mobikwik, Airtel Money, FreeCharge, Ola Money, and PayZapp. 

This article will guide you through configuring **Razorpay** on your WordPress Site with the **Paymattic** plugin.

::: warning Prerequisites
To get access to the [Razorpay](https://razorpay.com/) payment gateway, you need the [Paymattic Pro Plugin](https://paymattic.com/pricing/).
:::

## Configuring Razorpay Payment Method

Follow these steps to configure the Razorpay payment gateway through Paymattic:

### Step 1: Access Razorpay Settings

1. Go to **Payment Gateway** from the **Paymattic Navbar**
2. Click the **Razorpay** tab from the left sidebar
3. The **Razorpay Settings** page will open

![Razorpay Settings Page in Paymattic](/images/payment-method-fields/how-to-integrate-razorpay-with-paymattic-in-wordpress/Payment-gateway-Razorpay-Razorpay-Settings-scaled.webp)

### Step 2: Configure Basic Settings

1. Select your **Payment Mode**:
   - **Test Mode** - for test payments
   - **Live Mode** - for real payments
   
   Both options follow the same configuration process. For this guide, we'll use **Test Mode**.

2. Choose your **Checkout Style**:
   - **Modal Checkout** - collect payments directly on your site
   - **Hosted Checkout** - redirect users to the Razorpay website

3. You'll need to obtain two credentials from your Razorpay Account:
   - Public Key
   - Secret Key

![Payment Mode and Checkout Style Settings](/images/payment-method-fields/how-to-integrate-razorpay-with-paymattic-in-wordpress/Payment-Mode-Checkout-Style-Public-key-Secret-key.webp)

### Step 3: Get Razorpay Credentials

1. Log in to your [Razorpay Account](https://dashboard.razorpay.com/signin)
   
   ::: tip
   If you don't have an account, [sign up here](https://easy.razorpay.com/onboarding/l1/signup).
   :::

2. In the **Razorpay Dashboard**:
   - Go to **Accounts & Settings** in the left sidebar
   - Click the **API keys** tab

![Razorpay Dashboard API Keys Section](/images/payment-method-fields/how-to-integrate-razorpay-with-paymattic-in-wordpress/RazorPay-dashboard-Account-Settings-API-keys-scaled.webp)

::: info
To get the Key ID and Key Secret, you need to generate new keys.
:::

3. Click the **Regenerate Test Key** button to generate new keys

![Regenerate Test Keys in Razorpay](/images/payment-method-fields/how-to-integrate-razorpay-with-paymattic-in-wordpress/Regenarate-Test-Key.webp)

4. Copy your credentials:
   - **Key ID**
   - **Key Secret**

![Copy Razorpay API Keys](/images/payment-method-fields/how-to-integrate-razorpay-with-paymattic-in-wordpress/Copy-the-public-key-secret-key.webp)

### Step 4: Configure in Paymattic

1. Return to **Payment Gateway** from the **Paymattic Navbar**
2. Click the **Razorpay** tab
3. Enter your credentials:
   - Paste the **Key ID** into the **Public Key** field
   - Paste the **Key Secret** into the **Secret Key** field
4. Click **Save Settings** to complete the integration

![Configure Razorpay Credentials in Paymattic](/images/payment-method-fields/how-to-integrate-razorpay-with-paymattic-in-wordpress/Paste-the-Public-key-Secret-key-scaled.webp)

## Configuring Notifications

You can configure SMS and Email notifications from Razorpay to your WordPress site to stay updated on transactions.

### Notification Options

1. Choose your notification methods:
   - **SMS** - receive SMS notifications
   - **Email** - receive email notifications
   - You can select either or both options

::: warning Important
Always click **Save Settings** after making changes to your Razorpay settings.
:::

![Razorpay Notification Settings](/images/payment-method-fields/how-to-integrate-razorpay-with-paymattic-in-wordpress/Razorpay-notifications.webp)

## Using Razorpay in Forms

Once you've completed the setup, you can add Razorpay to your forms:

1. For existing forms: Add it to any [Payment Form](/payment-method-fields/how-to-create-your-first-payment-form-in-a-minute-and-accept-payments-with-paymattic)

2. For new forms:
   - [Create a Form from Scratch](/form-editor/how-to-create-a-form-from-scratch-with-paymattic)
   - [Use Form Templates](/form-editor/simple-form-templates)

3. Learn more about [adding payment methods](/payment-method-fields/how-to-use-the-payment-method-fields-section)

::: warning Note
The Razorpay payment method will not function unless you complete the configuration process properly.
:::

::: tip Need Help?
If you have any questions, concerns, or suggestions, please contact our [support team](https://wpmanageninja.com/support-tickets/). We're here to help!
:::