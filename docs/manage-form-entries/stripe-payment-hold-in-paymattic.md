---
title: "How to Enable Stripe Payment Hold in Paymattic "
category: "Manage Form Entries"
---
With [Paymattic](https://paymattic.com/) you can use the **Place a Hold on a Payment** option of [Stripe](http://stripe.com). Place a Hold Payment system of Stripe is, when you make a payment, you can temporarily set aside money from a valid payment method. This holds the funds until you’re ready to complete the transaction.

## Enable Place a Hold on a Payment 

To learn how to enable Place a Hold on a Payment, follow the steps with the screenshots below –

First, go to the **All Forms** section from the **Pymattic Navbar, and** open a **Payment Form** by clicking the **Pencil icon** with the **Stripe** payment method added.

If you do not have any existing **Payment form**, read this [Documentation](/how-to-create-your-first-payment-form-in-a-minute-and-accept-payments-with-paymattic) to learn how to Create a Payment Form.

For example, I choose an existing **Payment Form** to show the whole process.

![](/images/manage-form-entries/stripe-payment-hold-in-paymattic/1.-Open-desired-form-scaled.webp)

Once you open the **Editor** page, click on the **Settings** icon of the added [**Stripe** **Payment** **Method**](/how-to-configure-stripe-payment-gateway-in-wordpress-with-paymattic) field.

![](/images/manage-form-entries/stripe-payment-hold-in-paymattic/2.-Settings-Icon-of-Stripe-payment-method.webp)

Now, click the **Toggle** button to enable the **Place a hold on a payment** option for Stripe.

![](/images/manage-form-entries/stripe-payment-hold-in-paymattic/3.-Enable-Place-a-Hold-on-a-Payment-toggle.webp)

Then, a confirmation message will appear, click on the **Confirm** button, and then the **Update** button.
And, your **Place a Hold on a Payment** option will be enabled!

![](/images/manage-form-entries/stripe-payment-hold-in-paymattic/4.-Confirm-button.webp)

## Capture the Hold Payment

Once the Hold Payment option for Stripe is enabled in a specific Payment Form, **Authorized** payment status will appear in the form entries after each form submission.
- *To learn how to capture the hold payments through Stripe in a Payment form, follow the steps with the screenshots below –**

First, go to **Paymattic Dashboard** from the **WordPress Left Sidebar,** click the **Entries** section, and click the **View Details** button of the desired **authorized** form entry.

![](/images/manage-form-entries/stripe-payment-hold-in-paymattic/5.-Open-desired-entry-scaled.webp)

Now, you can capture the payment by clicking the **Capture** button. Also, if you want to capture the payment amount from the Stripe dashboard, click the **View on Stripe** button.

Remember, to capture the payment from **Stripe Dashboard** you have to add the ‘**charge.capture**‘ webhook. To know how to add this webhook you can follow this [Documentation](/# 3-toc-title).

![](/images/manage-form-entries/stripe-payment-hold-in-paymattic/6.-Capture-button-scaled.webp)

After clicking on the **Capture** button a **Capture Payment** popup will come.
Now input the amount you want to capture and click the **Capture** button.

For example, here I captured 5 dollars out of 10 dollars.

![](/images/manage-form-entries/stripe-payment-hold-in-paymattic/7.-Capture-amount-field.webp)

In your Payment Form Entries, now you will see that Uncaptured Paymnet has been Partially Refunded.
You can also change the **Partially Refunded** payment status by clicking the **Change Payment Status** button.

![](/images/manage-form-entries/stripe-payment-hold-in-paymattic/8.-Change-Payment-Status-scaled.webp)

Now, select a **new payment status** that fits your needs and click the **Confirm** button.
Also, if you want, you can add a **Note** for this entry during the status change.

![](/images/manage-form-entries/stripe-payment-hold-in-paymattic/9.-Edit-Payment-Status.webp)

## Payment Refund Activity Details

You will find all payment activity details, including **refunded payments,** in the **Submission Activity Events** section of the single entry page.

![](/images/manage-form-entries/stripe-payment-hold-in-paymattic/10.-Refunds-Activity.webp)

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.