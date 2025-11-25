---
title: "Set PayPal IPN"
category: "Payment Method Fields"
---
# Set PayPal IPN

IPN (Instant Payment Notification) is a post-message notification sent by PayPal after a successful transaction for standard merchant accounts, containing all the payment transaction details. Setting up PayPal IPN with Paymattic allows you to receive Instant Payment Notifications from PayPal. This article will guide you through the process of setting up [PayPal](https://www.paypal.com/) IPN in your WordPress Site with [Paymattic](https://paymattic.com/).

::: warning Note
To get access to the [PayPal](https://paypal.com/) payment gateway, you need the [Paymattic Pro Plugin](/getting-started-with-paymattic/how-to-install-and-activate-paymattic-in-wordpress).
:::

## Setting Up PayPal IPN

To learn how to set up IPN with Paymattic, follow the steps with the screenshots below:

### Get the URL from the PayPal Settings

First, go to **Payment Gateway** from the **Paymattic Navbar**, click the **PayPal** tab from the left sidebar, and the **PayPal Settings** page will open.

Now, scroll down to **PayPal for Recurring Payments** option and copy the URL by clicking the **Copy** button.

::: tip
To learn more about the PayPal Configuration Process, read this [Documentation](/payment-method-fields/how-to-configure-paypal-in-wordpress-with-paymattic).
:::

![Copy PayPal IPN URL](/images/payment-method-fields/set-paypal-ipn/Copy-URL-from-PayPal-Settings-page-scaled.webp)

### Set up PayPal IPN Using Copied URL

Now, login to your [PayPal Business Account](https://www.sandbox.paypal.com/mep/dashboard), hover over the **Profile Icon** and click the **Account Settings** option.

![PayPal Account Settings](/images/payment-method-fields/set-paypal-ipn/Account-Settings-page-scaled.webp)

Then, scroll down and open the **Website Payments** tab. Go to **Instant Payment Notifications** and click the **Update** link.

![PayPal IPN Settings](/images/payment-method-fields/set-paypal-ipn/Website-Payments-IPN-Update.webp)

Click the **Edit Settings** button to set up your IPN notification.

![Edit IPN Settings](/images/payment-method-fields/set-paypal-ipn/Edit-Settings.webp)

Finally, **paste the URL** into the **Notification URL** field that you copied from the **PayPal Settings** page under the **Payment Gateway** section.

After entering your **Notification URL**, select **Receive IPN messages (Enabled)** to activate the IPN messages for users.

Once you are done, click the **Save** button to confirm the setup.

![Configure IPN URL](/images/payment-method-fields/set-paypal-ipn/Paste-Notification-URL.webp)

::: info Success
Here, you can see the notification URL is updated and the IPN is enabled for your site.

You can:
- Modify your notification URL anytime by clicking the **Edit Settings** button
- Disable the PayPal IPN by clicking the **Turn Off IPN** button
:::

![IPN Settings Complete](/images/payment-method-fields/set-paypal-ipn/Turn-Off-IPN.webp)

This is how you can set PayPal IPN with Paymattic by following a few steps!

::: tip Need Help?
If you have any questions, concerns, or suggestions, please contact our [@support team](https://wpmanageninja.com/support-tickets/). Thank you.
:::