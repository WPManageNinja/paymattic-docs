---
title: "Collect Offline Payment"
category: "Payment Method Fields"
---

# Collect Offline Payments

**Paymattic** provides a flexible **Offline Payment** option, allowing you to accept payments that are not processed in real-time through an online gateway. This method is perfect for businesses and organizations that want to accommodate traditional payment methods or for customers who prefer not to share their card details online.

It's an ideal solution for collecting payments via:
- Direct bank transfers
- Personal or company checks
- In-person cash payments

This guide will show you exactly how to set up and use the offline payment feature on your WordPress site with **Paymattic**.

::: tip Benefits of Offline Payments
1. Flexible payment options for customers
2. No need for online payment processing
3. Support for traditional payment methods
4. Manual payment verification
5. Ideal for bank transfers and checks
:::

## Configuring the Offline Payment Method

Setting up the offline payment gateway in **Paymattic** is incredibly simple. It's essentially a matter of enabling the option so you can add it to your forms. Here's how to do it.

### Step 1: Navigate to the Offline Settings

First, you need to find the Offline gateway configuration panel within your Paymattic dashboard.

1.  From your WordPress admin panel, go to **Paymattic** → **Payment Gateway**.
2.  In the list of available gateways on the left, click on the **Offline** tab.
3.  This will open the main **Offline Settings** page.

### Step 2: Set the Payment Mode and Save

The only setting required for the offline method is to choose your operational mode.

1.  **Select your Payment Mode**:
    -   **Test Mode**: Use this to test your form submissions without cluttering your live transaction records.
    -   **Live Mode**: Use this to accept real payment pledges from your users.
    
    Both modes function identically for this payment method. For this guide, we'll select **Test Mode**.

2.  Click the **Save Settings** button to apply your changes. The Offline gateway is now active!

![Offline Payment Settings in Paymattic](/images/payment-method-fields/collect-offline-payment/Offline-Settings-page-scaled.webp)

## Enabling Offline Payments in Your Forms

With the gateway enabled, the next step is to add it as a payment choice in your forms. This gives your users the option to select it during checkout.

-   For an **existing form**, simply edit the form, add the **Payment Method** field from the input fields panel, and ensure that 'Offline' is enabled as an option. You can learn more in our guide on [creating a Payment Form](/create-payment-form).
-   When building a **new form**, you can either [Create a Form from Scratch](/form-editor/how-to-create-a-form-from-scratch-with-paymattic) or get a head start when you [Use Form Templates](/form-editor/simple-form-templates).
-   For a detailed look at the payment field itself, refer to our documentation on [adding payment methods](/payment-method-fields/how-to-use-the-payment-method-fields-section).

::: warning Note
The offline payment method will not function unless you complete the configuration process properly.
:::

::: info Payment Process
When a customer chooses offline payment:
1. They can submit the form without immediate payment
2. You'll receive a notification of the pending payment
3. You can manually verify the payment when received
4. Mark the payment as complete in your dashboard
:::

::: tip Need Help?
If you have any questions, concerns, or suggestions, please contact our [support team](https://wpmanageninja.com/support-tickets/). We're here to help!
:::