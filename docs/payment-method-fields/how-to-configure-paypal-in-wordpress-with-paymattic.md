---
title: "How to Configure PayPal in WordPress with Paymattic?"
category: "Payment Method Fields"
---
# How to Configure PayPal in WordPress with Paymattic

[PayPal](https://paypal.com/) is a trusted global payment gateway that allows you to securely receive payments from your users. This article will guide you through configuring PayPal on your WordPress Site with the [Paymattic](https://paymattic.com/) plugin.

::: warning Prerequisites
To get access to the [PayPal](https://paypal.com/) payment gateway, you need the [Paymattic Pro Plugin](../getting-started-with-paymattic/how-to-install-and-activate-paymattic-in-wordpress).
:::

## Configuring PayPal Payment Method

Follow these steps to configure the PayPal payment gateway through Paymattic:

### Step 1: Access PayPal Settings

1. Go to **Payment Gateway** from the **Paymattic Navbar**
2. Click the **PayPal** tab from the left sidebar
3. The **PayPal Settings** page will open

![PayPal Settings Tab in Paymattic](/images/payment-method-fields/how-to-configure-paypal-in-wordpress-with-paymattic/Paypal-tab-under-Payment-Gateway-scaled.webp)

### Step 2: Basic Configuration

1. Select your **Payment Mode**:
   - **Sandbox Mode** - for test payments
   - **Live Mode** - for real payments
   
   Both options follow the same configuration process. For this guide, we'll use **Sandbox Mode**.

2. Enter your PayPal Email:
   - Use the email you signed up with on your [PayPal Account](https://www.paypal.com/signin)

3. Click **Save Settings** to complete the basic integration

![PayPal Basic Settings](/images/payment-method-fields/how-to-configure-paypal-in-wordpress-with-paymattic/Payment-Mode-Paypal-Email.webp)

### Step 3: Advanced Settings

#### IPN Verification & Checkout Logo

::: info IPN and Logo Settings
1. **Disable IPN Verification**:
   - Check this box if **Payment Data Transfer** is not accessible
   - Useful when payments aren't being marked as complete
   - Uses a slightly less secure verification method
   
2. **Checkout Logo**:
   - Upload a custom logo for the checkout page
   - Remove logo using the **Cross Icon**
:::

::: tip Remember
Always click **Save Settings** after making changes to your PayPal configuration.
:::

![PayPal Advanced Settings](/images/payment-method-fields/how-to-configure-paypal-in-wordpress-with-paymattic/Disable-IPN-Verification-Checkout-Logo.webp)

#### Confirmation Page Settings

Configure where users will be redirected after payment:
- **Payment Confirmation** - for successful payments
- **Payment Failed** - for failed payments

![PayPal Confirmation Settings](/images/payment-method-fields/how-to-configure-paypal-in-wordpress-with-paymattic/Confirmation-Page-Settings.webp)

#### Recurring Payments Configuration

::: warning Important
For recurring payments to work properly:

1. Enable notifications for recurring PayPal payments
2. Copy the provided **IPN URL**
3. Configure the URL in PayPal - [Learn how to set up PayPal IPN](../payment-method-fields/how-to-set-paypal-ipn-in-wordpress-with-paymattic)

Without IPN setup:
- Single payments will work normally
- Recurring payments won't be marked as paid
:::

Click **Save Settings** to apply all changes.

![PayPal Recurring Payments Settings](/images/payment-method-fields/how-to-configure-paypal-in-wordpress-with-paymattic/PayPal-for-Recurring-Payments.webp)

## Using PayPal in Forms

Once you've completed the setup, you can add PayPal to your forms:

1. For existing forms: Add it to any [Payment Form](../form-editor/how-to-create-your-first-payment-form-in-a-minute-and-accept-payments-with-paymattic)

2. For new forms:
   - [Create a Form from Scratch](../form-editor/how-to-create-a-form-from-scratch-with-paymattic)
   - [Use Form Templates](../form-editor/simple-form-templates)

3. Learn more about [adding payment methods](../general-input-fields/how-to-use-the-payment-method-fields-section)

::: warning Note
The PayPal payment method will not function unless you complete the configuration process properly.
:::

## Form-Specific PayPal Settings

Need to customize PayPal settings for a specific form? Check out our guide on [Form-Specific Payment Settings](../form-settings/customize-form-specific-payment-settings).

::: tip Need Help?
If you have any questions, concerns, or suggestions, please contact our [support team](https://wpmanageninja.com/support-tickets/). We're here to help!
:::