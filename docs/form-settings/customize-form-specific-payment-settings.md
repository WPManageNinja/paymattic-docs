---
title: "Customize Form-Specific Payment Settings"
category: "Form Settings"
---
[Paymattic](https://paymattic.com/) allows you to customize the **settings** of your [Stripe](http://stripe.com) and [PayPal](http://paypal.com) payment methods for each form individually. For instance, if you have already set up the **Stripe/PayPal** payment method for transactions, you can use **Payment** settings to customize the settings or add different **Stripe**/**PayPal** accounts to specific forms.

This article will guide you through the process of using the **Payment** (Stripe and PayPal) settings for particular forms.
- *Remember**, this **Payment** settings in a form is a **Pro Feature** and you need [Paymattic **Pro** **Plugin**](/# 3-toc-title) to use this feature.

## Payment Settings in a Specific Form

First, go to the **All Forms** section from the **Pymattic Navbar, and** open a **Payment Form** by clicking the **Pencil icon** that has **Stripe** and **PayPal** payment methods added.

If you do not have any existing Payment form, read this [Documentation](/how-to-create-your-first-payment-form-in-a-minute-and-accept-payments-with-paymattic) to learn how to Create a Payment Form. 

Additionally, read this [Documentation](/how-to-use-the-payment-method-fields-section) to learn how you can add your desired Payment method/s to your form.

For example, I choose an existing payment form where **Stripe** and **PayPal** both are added as payment methods to show the whole process.

![](/images/form-settings/customize-form-specific-payment-settings/1.-Open-desired-form-1-scaled.webp)

Or, you can directly open the desired form's **Settings** tab by clicking the **Three-Dot Icon** and then pressing the **Settings** option from the dropdown list.

![](/images/form-settings/customize-form-specific-payment-settings/2.-Settings-option-under-Three-dot-icon--scaled.webp)

Once you open the **Editor** page, go to the **Settings** tab, click the **Payment** option**,** and you will get the following **Payment Settings** options.

1. Stripe Settings
2. PayPal Settings
3. Transaction Type

After completing the setup, must click the **Save Settings** button to save your changes.

![](/images/form-settings/customize-form-specific-payment-settings/3.-Payment-under-Form-Settings-scaled.webp)
- *The two Payment Settings mentioned above are explained below –**

### A. Form Specific Stripe Settings 

To change your Stripe Payment Settings for a specific form, follow the steps with the screenshots below –

![](/images/form-settings/customize-form-specific-payment-settings/4.-Stripe-Settings.webp)

The three settings options mentioned above are briefly explained below:

#### 1. Stripe Meta Data

Enable this option by clicking the **Toggle** button if you want to send the collected submission data to your Stripe Dashboard through the Paymattic Form.

You can use the **Shortcode** button to set the value for sending necessary submission data automatically. To send more data click the **+Add More** button and delete any of the fields click the **Trash** icon.

For example, here, I chose to send the **Form Submission ID** from **Paymattic** to **Stripe Dashboard**.

![](/images/form-settings/customize-form-specific-payment-settings/5.-Stripe-Meta-Data.webp)

#### 2. Limit accepted methods

Here, you can choose the accepted payment methods for Stripe transactions to display on your checkout page by **checking the boxes individually**.

Or, you can select all at once by clicking the **Check all** checkbox.

![](/images/form-settings/customize-form-specific-payment-settings/6.-Limit-accepted-methods.webp)

#### 3. Stripe Account

This will give you two options to set up your Stripe configuration for successful payment transactions. These are:
- *As per global settings**: If you select this option, the configuration of Stripe that you have set up globally for all forms will also apply to this form. To learn the process of Stripe Configuration from Global Settings, read this [Documentation](/how-to-configure-stripe-payment-gateway-in-wordpress-with-paymattic).
- *Custom Stripe Credentials**: Select this option if you want to set up a different Stripe Account only for this form. To add the stripe account, first, choose a **Payment Mode** between **Live** (for real payments) and **Test** (for test payments) modes as needed. Then, provide the **Publishable** **key** and **Secret key** from your **Stripe Account**.

To learn how to get the **Publishable** **key** and **Secret key** from your **Stripe Account**, [click here](/# 1-toc-title).

![](/images/form-settings/customize-form-specific-payment-settings/7.-Stripe-Account.webp)

### B. Form Specific PayPal Settings

This will give you two options to set up your **PayPal** configuration for successful payment transactions. These are:
- *As per global settings**: If you select this option, the configuration of PayPal that you have set up globally for all forms will also apply to this form. To learn the process of PayPal Configuration from Global Settings, read this [Documentation](/how-to-configure-paypal-in-wordpress-with-paymattic).
- *Custom PayPal ID**: Select this option if you want to set up a different PayPal Account only for this form. To add the account, first, choose a **Payment Mode** between **Live** (for real payments) and **Test** (for test payments) modes as needed. Then, enter the email you signed up with on the [PayPal Account](https://www.paypal.com/signin) into the **PayPal Email** field.

![](/images/form-settings/customize-form-specific-payment-settings/8.-PayPal-Settings.webp)

### C. Transaction Type

This settings option allows you to define the transaction type (**Donations** or **Products**/**Services**) to the payment method, ensuring a smooth payment process based on the purpose of collecting payments.

![](/images/form-settings/customize-form-specific-payment-settings/9.-Transaction-Type.webp)

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.