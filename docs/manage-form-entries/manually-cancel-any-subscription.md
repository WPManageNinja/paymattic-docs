---
title: "Manually Cancel Any Subscription"
category: "Manage Form Entries"
---

[Paymattic](https://paymattic.com/) allows both administrators and users to cancel active subscriptions. This guide explains how to cancel subscriptions from the admin perspective.

:::warning
Only active subscriptions can be cancelled.
:::

## Cancellation Methods

Administrators can cancel subscriptions in two ways:
1. Through the Paymattic Dashboard
2. Through the Payment Gateway Dashboard

### Method 1: Paymattic Dashboard

1. Go to **Entries** from the **Paymattic Navbar**
2. Find the subscription entry
3. Click **View Details**

![Access subscription entry](/images/manage-form-entries/manually-cancel-any-subscription/Desired-Form-Entry-for-Cancellation-1-2-scaled.webp)

4. Scroll to the **Subscription (Recurring Payments)** section
5. Click the **Three-dot-icon**
6. Select **Cancel Subscription**

![Cancel subscription](/images/manage-form-entries/manually-cancel-any-subscription/Cancel-Subscription-1.webp)

### Method 2: Payment Gateway Dashboard

1. Go to **Entries** from the **Paymattic Navbar**
2. Find the subscription entry
3. Click **View Details**

![Access subscription entry](/images/manage-form-entries/manually-cancel-any-subscription/Desired-Form-Entry-for-Cancellation-1-1-scaled.webp)

4. Scroll to the **Subscription (Recurring Payments)** section
5. Click the payment gateway link (e.g., **View on Stripe**)

:::note Supported Payment Gateways
Paymattic supports subscriptions through:
- [Stripe](/how-to-configure-stripe-payment-gateway-in-wordpress-with-paymattic)
- [PayPal](/how-to-configure-paypal-in-wordpress-with-paymattic)
- [Square](/how-to-integrate-square-with-paymattic-in-wordpress)
- [Moneris](/how-to-integrate-moneris-payment-gateway-in-paymattic)
:::

![View in payment gateway](/images/manage-form-entries/manually-cancel-any-subscription/View-on-Stripe.webp)

6. In the payment gateway dashboard:
   - Open the **Actions** dropdown
   - Click **Cancel Subscription**

![Cancel in payment gateway](/images/manage-form-entries/manually-cancel-any-subscription/Cancel-from-Payment-methods-dashboard-scaled.webp)

## User-Side Cancellation

Users can cancel their own subscriptions if given permission by the administrator.

### Enable User Cancellation

1. Go to **Settings** from the **Paymattic Navbar**
2. Open the **User Dashboard** tab
3. Under **Paymattic User** settings, enable **Cancel subscription**

For detailed instructions on user-side cancellation, see our [user dashboard guide](/# 1-toc-title).

![Enable user cancellation](/images/manage-form-entries/manually-cancel-any-subscription/Cancel-Subscription-from-User-End-scaled.webp)

:::tip Need Help?
If you have any questions, concerns, or suggestions, please [contact our support team](https://wpmanageninja.com/support-tickets/).
:::