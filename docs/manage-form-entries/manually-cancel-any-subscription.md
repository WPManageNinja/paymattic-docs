---
title: "Manually Cancel Any Subscription"
category: "Manage Form Entries"
---

# Manually Cancel Any Subscription

[Paymattic](https://paymattic.com/) allows the Admin/User to manually cancel any subscription. This article will guide you through the process of canceling subscriptions from the Admin-end.

> [!NOTE]
> Only active subscriptions can be cancelled.


## Cancellation Methods

Administrators can cancel subscriptions in two ways:

1. Through the Paymattic Dashboard
2. Through the Payment Gateway Dashboard

### Method 1: Cancelling from Paymattic Dashboard

1. Go to **Entries** from the **Paymattic Navbar**
2. Find the subscription entry
3. Click **View Details** button.

![Access subscription entry](/images/manage-form-entries/manually-cancel-any-subscription/Desired-Form-Entry-for-Cancellation-1-2-scaled.webp)

4. Scroll to the **Subscription (Recurring Payments)** section
5. Click the **Three-dot-icon**
6. Select **Cancel Subscription**

And, the subscription will be canceled! 

![Cancel subscription](/images/manage-form-entries/manually-cancel-any-subscription/Cancel-Subscription-1.webp)

### Method 2: Cancelling from Payment Method Dashboard 

1. Go to **Entries** from the **Paymattic Navbar**
2. Find the subscription entry
3. Click **View Details** 

![Access subscription entry](/images/manage-form-entries/manually-cancel-any-subscription/Desired-Form-Entry-for-Cancellation-1-1-scaled.webp)

4. Scroll to the **Subscription (Recurring Payments)** section
5. Click the payment gateway link (e.g., **View on Stripe**)

> [!NOTE]
>Supported Payment Gateways
>Paymattic supports subscriptions through:
>- [Stripe](/how-to-configure-stripe-payment-gateway-in-wordpress-with-paymattic)
>- [PayPal](/how-to-configure-paypal-in-wordpress-with-paymattic)
>- [Square](/how-to-integrate-square-with-paymattic-in-wordpress)
>- [Moneris](/how-to-integrate-moneris-payment-gateway-in-paymattic)

![View in payment gateway](/images/manage-form-entries/manually-cancel-any-subscription/View-on-Stripe.webp)

6. In the payment gateway dashboard, Open the **Actions** dropdown and Click the **Cancel Subscription** options.

![Cancel in payment gateway](/images/manage-form-entries/manually-cancel-any-subscription/Cancel-from-Payment-methods-dashboard-scaled.webp)

## User-Side Cancellation

Paymattic also allows users to cancel their subscriptions from their dashboard.

> [!NOTE]
> Users can cancel their subscriptions from their User Dashboard only if the Admin gives them access to do it.

To give the desired access to your users, go to **Settings** from the **Paymattic Navbar**, open the **User Dashboard** tab from the left sidebar, and check the **Cancel subscription** button under the **Paymattic User** settings.

To learn more details about how to cancel any subscription from the User Dashboard, read this [Documentation](how-to-add-user-dashboard-module-in-paymattic).

![Enable user cancellation](/images/manage-form-entries/manually-cancel-any-subscription/Cancel-Subscription-from-User-End-scaled.webp)

:::tip Need Help?
If you have any questions, concerns, or suggestions, please [contact our support team](https://wpmanageninja.com/support-tickets/).
:::