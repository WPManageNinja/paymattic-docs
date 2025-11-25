---
title: "Integrate Razorpay with Paymattic"
category: "Payment Method Fields"
---
# Integrate Razorpay with Paymattic

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

![Razorpay Settings Page in Paymattic](/images/payment-method-fields/integrate-razorpay/Payment-gateway-Razorpay-Razorpay-Settings-scaled.webp)

### Step 2: Configure Basic Settings

1.  **Select Payment Mode:** Choose between **Test** (for test payments) and **Live** (for real payments). Both options follow the same configuration process. For this example, we'll use **Test Mode**.

2.  **Choose Checkout Style:** Select your preferred checkout experience.
    * **Modal Checkout:** This allows users to complete payments in a pop-up directly on your site.
    * **Hosted Checkout:** This will redirect users to the **Razorpay** website to complete the transaction.

3.  Next, you need to obtain the **Key ID** (public key) and **Key Secret** (secret key) from your [**Razorpay**](https://dashboard.razorpay.com/signin) account.

![Payment Mode and Checkout Style Settings](/images/payment-method-fields/integrate-razorpay/Payment-Mode-Checkout-Style-Public-key-Secret-key.webp)

### Step 3: Get Razorpay Credentials

1.  First, log in to your [**Razorpay Account**](https://dashboard.razorpay.com/signin).
    * If you do not have an account, you will need to sign up first.

2.  Once you log in to the **Razorpay Dashboard**, go to the **Accounts & Settings** section from the left sidebar.

3.  Click the **API keys** tab to find your credentials.

![Razorpay Dashboard API Keys Section](/images/payment-method-fields/integrate-razorpay/RazorPay-dashboard-Account-Settings-API-keys-scaled.webp)

::: info
To get the Key ID and Key Secret, you need to generate new keys.
:::

4. Click the **Regenerate Test Key** button to generate new keys

![Regenerate Test Keys in Razorpay](/images/payment-method-fields/integrate-razorpay/Regenarate-Test-Key.webp)

5. Copy your credentials:
   - **Key ID**
   - **Key Secret**

![Copy Razorpay API Keys](/images/payment-method-fields/integrate-razorpay/Copy-the-public-key-secret-key.webp)

### Step 4: Configure in Paymattic

1.  Go back to your WordPress dashboard and navigate to **Paymattic** → **Payment Gateway**, then click the **Razorpay** tab.

2.  Paste the **Key ID** you copied from your Razorpay dashboard into the **Key ID** field.

3.  Next, paste the **Key Secret** into the **Key Secret** field.

4.  Finally, press the **Save Settings** button.

Your **Razorpay** account will now be integrated with **Paymattic** for your WordPress Site.

![Configure Razorpay Credentials in Paymattic](/images/payment-method-fields/integrate-razorpay/Paste-the-Public-key-Secret-key-scaled.webp)

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

![Razorpay Notification Settings](/images/payment-method-fields/integrate-razorpay/Razorpay-notifications.webp)

## Using Razorpay in Forms

Once you've completed the setup, you can add Razorpay to your forms:

1. For existing forms: Add it to any [Payment Form](/create-payment-form)

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