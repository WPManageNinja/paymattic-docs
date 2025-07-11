---
title: "How to Integrate Razorpay with Paymattic in WordPress"
category: "Payment Method Fields"
---
RazorPay allows you to smoothly handle online payments in India, supporting various payment methods including credit cards, debit cards, net banking, UPI, and popular wallets like JioMoney, Mobikwik, Airtel Money, FreeCharge, Ola Money, and PayZapp. This article will guide you through configuring RazorPay on your WordPress Site with the Paymattic plugin.

Remember, to get access to the [RazorPay](https://razorpay.com/) payment gateway, you need the [Paymattic Pro Plugin](/# 1-toc-title).

## Configuring RazorPay Payment Method

To learn how to configure the Razorpay payment gateway through Paymattic, follow the steps with screenshots below –

First, go to **Payment Gatewa**y from the **Paymattic Navbar**, click the **Razorpay** tab from the left sidebar, and the **Razorpay Settings** page will open.

![](/images/payment-method-fields/how-to-integrate-razorpay-with-paymattic-in-wordpress/Payment-gateway-Razorpay-Razorpay-Settings-scaled.webp)

Select any **Payment Mode** between **Test** (for test payments) and **Live** (for real payments) as both options follow the same configuration process, e.g., I choose **Test Mode**.

Also, choose the **Checkout Style** as either **Modal Checkout** (allows you to collect Payments on your site) or **Hosted** **Checkout** (it will redirect users to the RazorPay Website for checkout).

Then, you need to obtain the **Public key** and **Secret key** from your **RazorPay account**.

![](/images/payment-method-fields/how-to-integrate-razorpay-with-paymattic-in-wordpress/Payment-Mode-Checkout-Style-Public-key-Secret-key.webp)

### Get the Key ID and Key Secret from RazorPay

First, log in to your [RazorPay Account](http://dashboard.razorpay.com/signin). If you do not have an account, sign up from [here](https://easy.razorpay.com/onboarding/l1/signup?field=MobileNumber&cta_btn=Navbar_Header).

Once you log in to the **RazorPay Dashboard**, go to the **Accounts &amp; Settings** section from the **Left sidebar**, and click the **API keys** tab.

![](/images/payment-method-fields/how-to-integrate-razorpay-with-paymattic-in-wordpress/RazorPay-dashboard-Account-Settings-API-keys-scaled.webp)

To get the Key ID and Key Secret, you need to generate new key.

Click the **Regenerate Test Key** button and new keys will be generated for the configuration.

![](/images/payment-method-fields/how-to-integrate-razorpay-with-paymattic-in-wordpress/Regenarate-Test-Key.webp)

Here, you will get your desired **Key ID** and **Key Secret**, copy them.

![](/images/payment-method-fields/how-to-integrate-razorpay-with-paymattic-in-wordpress/Copy-the-public-key-secret-key.webp)

Go back to **Payment Gatewa**y from the **Paymattic Navbar**, click the **Razorpay** tab, and paste the copied **Key Id** and into the **Key Secret** and **Secret key** fields respectively.

Finally, press the **Save Settings** button and your RazorPay account will be integrated with Paymattic for your WordPress Site.

![](/images/payment-method-fields/how-to-integrate-razorpay-with-paymattic-in-wordpress/Paste-the-Public-key-Secret-key-scaled.webp)

### RazorPay Notifications

With this setting option, you can configure the SMS and Email notifications from your RazorPay to your WordPress Site to ensure you stay updated.

You can select both **SMS** and **Email** or any one of them by simply checking the boxes to receive notifications.
- *Remember**, always press the **Save Settings** button to save the changes you made on your Razorpay Settings page.

![](/images/payment-method-fields/how-to-integrate-razorpay-with-paymattic-in-wordpress/Razorpay-notifications.webp)

## Add RazorPay in Forms

Once you finish setting up your **RazorPay** payment gateway, you can easily add this payment method to any of your existing [Payment Form](/how-to-create-your-first-payment-form-in-a-minute-and-accept-payments-with-paymattic).

If you do not have any existing forms, read[ Create a Form from Scratch](/how-to-create-a-form-from-scratch-with-paymattic) or[ Create a Form using Templates](/simple-form-templates) documentation.

To learn the detailed process of adding a payment method to an existing form, read this [Documentation](/how-to-use-the-payment-method-fields-section).

But, remember, the added **RazorPay** payment method in your **Form** will not function unless you complete the configuration process properly.

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.