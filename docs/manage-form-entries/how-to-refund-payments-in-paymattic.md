---
title: "How to Refund Payments in Paymattic"
category: "Manage Form Entries"
---

# How to Refund Payments in Paymattic

Paymattic offers a simple and integrated way to handle customer refunds directly from your WordPress dashboard. This guide will walk you through the process step-by-step, using screenshots from the plugin interface.

## Refund Methods

Paymattic offers two ways to process refunds:

1. **Change Payment Status (For Full Refunds):** This is the quickest way to process a full refund for a one-time or recurring payment. Also, for changing your payment status.
2. **Process Refund Button (For Partial or Subscription Refunds):** This method provides more flexibility, allowing you to issue partial refunds or handle refunds for subscription-based payments.

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

## Process a Full Refund

Use this method when you need to return the entire amount of a single transaction. For supported gateways, this process will automatically send the full payment back to the customer.

#### Step 1: Go to Form Entries 
First, navigate to the form where the payment was made. From the form editor, click on the Entries tab.

#### Step 2: View the Transaction
On the “Form Entries” page, find the transaction you wish to refund and click on ID to view details.

![Access form entries](/images/manage-form-entries/how-to-refund-payments-in-paymattic/entries-forms-1-scaled.webp)

#### Step 3: Use the “Change Payment Status” Link

In the single entry view, locate the **Change Payment Status** link next to the main payment details and click on it.

In the “Edit payment status” popup, select **Refunded** as the “New Payment Status.” This action instructs Paymattic to process a full refund through the connected payment gateway. You can add an internal note for your records.

Click the **Confirm** button to proceed.

![Process full refund](/images/manage-form-entries/how-to-refund-payments-in-paymattic/Single-payment-refund-option-3-scaled.webp)

After processing, the payment status will automatically update to **refunded**, confirming the full amount has been returned.

![Refund confirmation](/images/manage-form-entries/how-to-refund-payments-in-paymattic/refunded-payment-4.webp)

## Process a Partial or Subscription Refund

Use this method when you need more flexibility, such as refunding only a portion of a payment or managing refunds for recurring subscriptions. This method also only works for the supported gateways listed in the note above.

#### Step 1 & 2: Navigate and View the Transaction
Just like in the first method, navigate to **Entries** and click on ID to view details for the specific transaction.

#### Step 3: Use the “Refund” Button
Scroll down to the **Transaction Details** section. Click on the **Refund** button located at the top right of this section. This will open the advanced refund options.

![Access refund options](/images/manage-form-entries/how-to-refund-payments-in-paymattic/subscription-payment-refund-5.webp)

#### Step 4: Specify the Refund Amount
The **Refund** popup will appear. In the **Refund Amount** field, enter the specific partial amount you wish to return (e.g., $7). You can also process a full refund from here if needed.

You may also select a **Reason of Refund** for your records. Once you have entered the desired amount, click the **Process Refund** button.

![Process partial refund](/images/manage-form-entries/how-to-refund-payments-in-paymattic/payment-refund-6-scaled.webp)

The transaction status will update to **Partially-Refunded** or **Refunded**, depending on the amount you chose to return.