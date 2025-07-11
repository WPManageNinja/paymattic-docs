---
title: "How to Set PayPal IPN in WordPress with Paymattic?"
category: "Payment Method Fields"
---
IPN (Instant Payment Notification) is a post-message notification sent by PayPal after a successful transaction for standard merchant accounts, containing all the payment transaction details. Setting up PayPal IPN with Paymattic allows you to receive Instant Payment Notifications from PayPal. This article will through the process of setting up the [PayPal](https://www.paypal.com/) IPN in your WordPress Site [Paymattic](https://paymattic.com/).

Remember, to get access to the [PayPal](https://paypal.com/) payment gateway, you need the [Paymattic Pro Plugin](/# 1-toc-title).

## Setting Up PayPal IPN

To learn how to set up IPN with Paymattic, follow the steps with the screenshots below –

### Get the URL from the PayPal Settings

First, go to **Payment Gatewa**y from the **Paymattic Navbar**, click the **PayPal** tab from the left sidebar, and the **PayPal Settings** page will open.

Now, scroll down to **PayPal for Recurring Payments** option and copy the URL by clicking the **Copy** button.

To learn more about the PayPal Configuration Process, read this [Documentation](/how-to-configure-paypal-in-wordpress-with-paymattic).

![](/images/payment-method-fields/how-to-set-paypal-ipn-in-wordpress-with-paymattic/Copy-URL-from-PayPal-Settings-page-scaled.webp)

### Set up PayPal IPN Using Copied URL

Now, login to your [PayPal Business Account](https://www.sandbox.paypal.com/mep/dashboard), hover over the **Profile** **Icon** and click the **Account Settings** option.

![](/images/payment-method-fields/how-to-set-paypal-ipn-in-wordpress-with-paymattic/Account-Settings-page-scaled.webp)

Then, scroll down and open the **Website Payments** tab. Go to **Instant Payment Notifications** and click the **Update** link.

![](/images/payment-method-fields/how-to-set-paypal-ipn-in-wordpress-with-paymattic/Website-Payments-IPN-Update.webp)

Click the **Edit Settings** button to set up your IPN notification.

![](/images/payment-method-fields/how-to-set-paypal-ipn-in-wordpress-with-paymattic/Edit-Settings.webp)

Finally, **paste the URL** into the **Notification URL** field that you copied from the **Paypal Settings** page under the **Payment Gateway** section.

After entering your **Notification URL,** select **Receive IPN messages (Enabled)** to activate the IPN messages for users.

Once you are done, click the **Save** button to confirm the setup.

![](/images/payment-method-fields/how-to-set-paypal-ipn-in-wordpress-with-paymattic/Paste-Notification-URL.webp)

Here, you can see the notification URL is updated and the IPN is enabled for your site.
Also, you can modify your notification URL anytime by clicking the **Edit Settings** button. 
Plus, if you want to disable the PayPal IPN, simply click the **Turn Off IPN** button.

![](/images/payment-method-fields/how-to-set-paypal-ipn-in-wordpress-with-paymattic/Turn-Off-IPN.webp)

This is how you can set PayPal IPN with Paymattic by following a few steps!
If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.