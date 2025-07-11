---
title: "How to Integrate SSLCOMMERZ with Paymattic in WordPress?"
category: "Payment Method Fields"
---
# How to Integrate SSLCOMMERZ with Paymattic in WordPress

SSLCOMMERZ is the largest Bangladesh-based payment gateway and aggregator that offers 30+ payment options including:
- Debit cards
- Credit cards
- Prepaid cards
- Mobile banking
- E-Wallets
- EMI

This article will guide you through configuring SSLCOMMERZ on your WordPress Site with the Paymattic plugin.

::: warning Prerequisites
To get access to the [SSLCOMMERZ](https://sslcommerz.com/) payment gateway, you need the [Paymattic Pro Plugin](/getting-started-with-paymattic/how-to-install-and-activate-paymattic-in-wordpress).
:::

## Configuring SSLCOMMERZ Payment Method 

Follow these steps to configure the SSLCOMMERZ payment gateway through Paymattic:

### Step 1: Access SSLCOMMERZ Settings

1. Go to **Payment Gateway** from the **Paymattic Navbar**
2. Click the **SSLCOMMERZ** tab from the left sidebar
3. The **SSLCOMMERZ Settings** page will open

### Step 2: Choose Payment Mode

Select your **Payment Mode**:
- **Test Mode** - for test payments
- **Live Mode** - for real payments

Both options follow the same configuration process. For this guide, we'll use **Test Mode**.

::: info Note
You'll need to obtain the **Store ID** and **Secret Key** from your **SSLCOMMERZ Account** (covered in the next section).
:::

![SSLCOMMERZ Settings Page](/images/payment-method-fields/how-to-integrate-sslcommerz-with-paymattic-in-wordpress/Payment-Gateway-SSLCOMMERZ-scaled.webp)

### Step 3: Get Store ID & Secret Key

To get your SSLCOMMERZ credentials, follow these steps:

#### For New Users

1. Open a merchant account with [SSLCOMMERZ](https://join.sslcommerz.com/)

::: warning Important
When signing up, you MUST provide:
- Email address
- Full name
- Complete address

These fields are required for proper payment data processing.
:::

2. After account creation, you'll receive a welcome email containing:
   - Store ID
   - Secret Key

![SSLCOMMERZ Welcome Email](/images/payment-method-fields/how-to-integrate-sslcommerz-with-paymattic-in-wordpress/SSLCOMMERZ-account-Detail-Mail.webp)

#### For Existing Users

::: tip
If you already have an SSLCOMMERZ account, contact the SSLCOMMERZ manager through official channels to obtain your:
- Store ID
- Store Password/Secret Key
:::

### Step 4: Configure in Paymattic

1. Return to **Payment Gateway** from the **Paymattic Navbar**
2. Click the **SSLCOMMERZ** tab
3. Enter your credentials:
   - Paste the **Store ID**
   - Paste the **Secret Key**
4. Click **Save Settings** to complete the integration

![Configure SSLCOMMERZ Credentials](/images/payment-method-fields/how-to-integrate-sslcommerz-with-paymattic-in-wordpress/Paste-the-Store-ID-and-Secret-Key-scaled.webp)

## Using SSLCOMMERZ in Forms

Once you've completed the setup, you can add SSLCOMMERZ to your forms:

1. For existing forms: Add it to any [Payment Form](/payment-method-fields/how-to-create-your-first-payment-form-in-a-minute-and-accept-payments-with-paymattic)

2. For new forms:
   - [Create a Form from Scratch](/form-editor/how-to-create-a-form-from-scratch-with-paymattic)
   - [Use Form Templates](/form-editor/simple-form-templates)

3. Learn more about [adding payment methods](/payment-method-fields/how-to-use-the-payment-method-fields-section)

::: warning Note
The SSLCOMMERZ payment method will not function unless you complete the configuration process properly.
:::

::: tip Need Help?
If you have any questions, concerns, or suggestions, please contact our [@support team](https://wpmanageninja.com/support-tickets/). We're here to help!
:::