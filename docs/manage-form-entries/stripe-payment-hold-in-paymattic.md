---
title: "How to Enable Stripe Payment Hold in Paymattic"
category: "Manage Form Entries"
---

[Paymattic](https://paymattic.com/) supports [Stripe](http://stripe.com)'s payment hold feature, which allows you to temporarily reserve funds from a customer's payment method without immediately capturing them. This is useful when you need to verify order details or ensure product availability before finalizing a transaction.

## Enable Payment Hold

### Prerequisites
- A form with Stripe payment method configured
- If you need to create a payment form, see our guide on [creating your first payment form](/how-to-create-your-first-payment-form-in-a-minute-and-accept-payments-with-paymattic)

### Steps

1. Go to **All Forms** from the **Paymattic Navbar**
2. Open your payment form with the **Pencil Icon**

![Access payment form](/images/manage-form-entries/stripe-payment-hold-in-paymattic/1.-Open-desired-form-scaled.webp)

3. Click the **Settings Icon** on your [Stripe payment method](/how-to-configure-stripe-payment-gateway-in-wordpress-with-paymattic) field

![Stripe settings](/images/manage-form-entries/stripe-payment-hold-in-paymattic/2.-Settings-Icon-of-Stripe-payment-method.webp)

4. Enable **Place a hold on a payment**
5. Click **Confirm** in the popup
6. Click **Update** to save changes

![Enable payment hold](/images/manage-form-entries/stripe-payment-hold-in-paymattic/3.-Enable-Place-a-Hold-on-a-Payment-toggle.webp)

![Confirm payment hold](/images/manage-form-entries/stripe-payment-hold-in-paymattic/4.-Confirm-button.webp)

## Managing Held Payments

When payment hold is enabled, new submissions will show an **Authorized** payment status. You can then capture these payments when ready.

### Capture a Held Payment

1. Go to **Entries** from the **Paymattic Navbar**
2. Find an entry with **Authorized** status
3. Click **View Details**

![View authorized payment](/images/manage-form-entries/stripe-payment-hold-in-paymattic/5.-Open-desired-entry-scaled.webp)

4. Choose how to capture the payment:
   - Click **Capture** to process through Paymattic
   - Click **View on Stripe** to process through Stripe dashboard

:::warning Stripe Dashboard Capture
To capture payments from the Stripe dashboard, you must add the 'charge.capture' webhook. See our [webhook configuration guide](/# 3-toc-title) for details.
:::

![Capture options](/images/manage-form-entries/stripe-payment-hold-in-paymattic/6.-Capture-button-scaled.webp)

5. In the **Capture Payment** popup:
   - Enter the amount to capture
   - Click **Capture**

Example: Capturing $5 from a $10 held payment:

![Capture amount](/images/manage-form-entries/stripe-payment-hold-in-paymattic/7.-Capture-amount-field.webp)

### Update Payment Status

After a partial capture, the status changes to **Partially Refunded**. You can update this:

1. Click **Change Payment Status**

![Change status](/images/manage-form-entries/stripe-payment-hold-in-paymattic/8.-Change-Payment-Status-scaled.webp)

2. Select the new status
3. Add an optional note
4. Click **Confirm**

![Edit payment status](/images/manage-form-entries/stripe-payment-hold-in-paymattic/9.-Edit-Payment-Status.webp)

## View Payment History

Find all payment activities, including refunds and captures, in the **Submission Activity Events** section of the entry details:

![Payment activity](/images/manage-form-entries/stripe-payment-hold-in-paymattic/10.-Refunds-Activity.webp)

:::tip Need Help?
If you have any questions, concerns, or suggestions, please [contact our support team](https://wpmanageninja.com/support-tickets/).
:::