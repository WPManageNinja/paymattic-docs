---
title: "How to Refund Payments in Paymattic"
category: "Manage Form Entries"
---

# How to Refund Payments in Paymattic

Paymattic provides integrated refund management directly from your WordPress dashboard. This guide explains the available refund methods and how to use them.

## Refund Methods

Paymattic offers two ways to process refunds:

1. **Change Payment Status**: Quick method for full refunds
2. **Process Refund Button**: Advanced method for partial or subscription refunds

![Refund options](/images/manage-form-entries/how-to-refund-payments-in-paymattic/Two-refund-options-in-payment-2-scaled.webp)

:::warning Supported Payment Gateways
Automatic refund processing is only available for:
- [Stripe](/how-to-configure-stripe-payment-gateway-in-wordpress-with-paymattic)
- [Razorpay](/how-to-integrate-razorpay-with-paymattic-in-wordpress)
- [Paystack](/how-to-integrate-paystack-in-wordpress-with-paymattic)
- [Square](/how-to-integrate-square-with-paymattic-in-wordpress)

For other payment gateways:
1. Process the refund through your payment gateway account
2. Use the "Change Payment Status" method to update Paymattic records
:::

## Full Refunds

Use this method to refund an entire transaction. For supported gateways, this automatically returns the full payment to the customer.

### Steps

1. **Access Form Entries**
   - Go to your form
   - Click the **Entries** tab

2. **Find Transaction**
   - Locate the payment to refund
   - Click its **ID** to view details

![Access form entries](/images/manage-form-entries/how-to-refund-payments-in-paymattic/entries-forms-1-scaled.webp)

3. **Process Refund**
   - Click **Change Payment Status**
   - Select **Refunded** as the new status
   - Add an optional note
   - Click **Confirm**

![Process full refund](/images/manage-form-entries/how-to-refund-payments-in-paymattic/Single-payment-refund-option-3-scaled.webp)

The status will update to confirm the refund:

![Refund confirmation](/images/manage-form-entries/how-to-refund-payments-in-paymattic/refunded-payment-4.webp)

## Partial or Subscription Refunds

Use this method for:
- Refunding a portion of a payment
- Managing subscription refunds
- More detailed refund options

### Steps

1. **Access Transaction**
   - Go to **Entries**
   - Click the transaction **ID**

2. **Open Refund Options**
   - Scroll to **Transaction Details**
   - Click the **Refund** button

![Access refund options](/images/manage-form-entries/how-to-refund-payments-in-paymattic/subscription-payment-refund-5.webp)

3. **Process Refund**
   - Enter the refund amount
   - Select a refund reason (optional)
   - Click **Process Refund**

![Process partial refund](/images/manage-form-entries/how-to-refund-payments-in-paymattic/payment-refund-6-scaled.webp)

The status will update to:
- **Partially-Refunded**: For partial refunds
- **Refunded**: For full refunds