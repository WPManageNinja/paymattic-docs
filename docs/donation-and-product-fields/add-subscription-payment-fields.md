---
title: "Add Subscription Payment Item Fields"
category: "Donation and Product Fields"
---

# Add Subscription Payment Item Fields

In [Paymattic](https://paymattic.com/), the **Subscription Payment** field allows you to create forms with **Subscription Items** for collecting **Recurring Payments.** This article will guide you on how to embed the Subscription Payment field to the WordPress Site through Paymattic.

::: warning
**Subscription Payment** is a premium feature and you need [**Paymattic Pro Plugin**](/install-paymattic#installing-and-activating-paymattic-pro) **to use this field.**
:::

## Adding Subscription Payment Field


First, go to the **All Forms** section from the **Paymattic Navbar,** choose a **Form,** and click the **Pencil/Edit** icon to open the **Editor** page of that form.

For example, I choose an existing form to show the whole process.

![Open desired form](/images/donation-and-product-fields/add-subscription-payment-fields/1.-Open-desired-form-1-scaled.webp)

Once you open the **Editor** page, add the Payment Item fields by typing the **"/"** or clicking the **Plus Icon** placed at the bottom.

::: tip Best Practice
We always suggest you keep the [**Name**](/general-input-fields/how-to-use-general-form-input-fields-in-wordpress-with-paymattic#_1-name-field) and [**Email**](/general-input-fields/how-to-use-general-form-input-fields-in-wordpress-with-paymattic#_2-email-field) field at the beginning of any Form.
:::

![Type / or click + icon](/images/donation-and-product-fields/add-subscription-payment-fields/2.-Type-or-click-icon-1.webp)

For example, I choose the **Plus Icon** option to select the **Subscription Payment** field under the **Donation & Product Fields** section from the **Choose Form Field** page.

::: tip
Also, do not forget to add a [**Payment Method Field**](/general-input-fields/how-to-use-the-payment-method-fields-section) for collecting payments.
:::

![subscription payment item field](/images/donation-and-product-fields/add-subscription-payment-fields/3.-subscription-payment-item-field.webp)

## Editing/Customizing the Field

You can see the **Subscription Payment** and other **necessary fields** are added to the form.

::: tip
You can edit their field name and settings. To learn more about form editing, read this [Documentation](/form-editor/how-to-edit-forms-in-wordpress-with-paymattic).
:::

Specifically, to edit the **Subscription Payment** field according to your needs, click the **Settings Icon** from the right-side corner. 

![Settings Icon](/images/donation-and-product-fields/add-subscription-payment-fields/4.-Settings-Icon-1.webp)

Now, a pop-up page will appear with various settings options for customizing the field.

### General Settings 

Under this tab, you will find all the General settings for customizing the field according to your needs.

![General Settings](/images/donation-and-product-fields/add-subscription-payment-fields/5.-General-Settings-1-1.webp)

**All the Settings under the General tab mentioned above are briefly explained below –**

#### A. Required

Enable this option to make this field mandatory for users to fill in for a successful submission.

#### B. Show Pricing Level 

Enabling this option will show the pricing label in the form.

#### C. Payment Summary 

This option will display the pricing plan's summary of Subscription Items in the form.

#### D. Choose Your Pricing Plan

Here, you will get **two different options** to set your pricing plan for the subscription payment. These are:

1. Simple Subscription Plan (Single)
2. Choose one from Multiple Pricing Plans

##### 1. Simple Subscription Plan (Single)

Select this plan if you want to offer one pricing plan to your user for collecting payments.

- **Plan Name**: Give the name of your plan in this field.

- **Price Billing/Interval**: Here, set the price for your subscription.

- **Enable User Input Amount**: Enable this feature to customize the pricing plan by setting a fixed **Minimum** and **Default** amount, along with a **Label** for this amount.

- **Billing Interval**: Here, set the billing interval as **Daily**, **Weekly**, **Fortnightly**, **Monthly**, **Quarterly**, **Half-Yearly**, or **Yearly**) for the subscription.

- **Interval Count**: This feature enables you **to specify** the **number of intervals between** **subscription billings** allowing you **to customize your Billing Interval** that suits your needs.
    
    For example, by choosing a **Monthly** **Billing** **Interval** and setting the **Interval Count** to **2**, subscription bills will occur **every 2 months**.

::: warning
**Remember**, this **Interval Count** works only for **Stripe** and **PayPal** payment methods. **For Stripe**, a **maximum** of **3 Years** / **156 Weeks** / **36 Months** interval is allowed. And, **for PayPal,** a **maximum** of **1 Year** / **52 Weeks** / **12 Months** interval is allowed."
:::

- **Has Signup Fee?**: Enable this option if you want to set a custom amount as a Signup Fee. This amount will be deducted from customers' accounts once they sign up on your website.

- **Has Trial Days?**: Enable this option to offer users a trial period without a subscription fee.

- **Total Billing Times**: Here, you can set how many times your website will pull funds from customers' accounts. Keep the field blank or put 0 (Zero) for billing for an unlimited time.

Once you complete the setup, click the **Update** button to save all your settings and changes.

![Single Pricing Plan](/images/donation-and-product-fields/add-subscription-payment-fields/6.-Single-Pricing-Plan-1.webp)

##### 2. Choose One from Multiple Pricing Plans

Select this option if you want to offer multiple pricing plans to your users for choosing one plan when making a subscription.

- **Plan Selection Type**: With this option, you can set whether you want to set the item selection type as a **Radio** button or Select (dropdown list).

- **Pricing Plan**: The pricing plan of this option exactly works similarly to the pricing plan of Simple Subscription Plan (Single). To learn all the settings of the Pricing Plan, [**click here**](#simple-subscription-plan-single).

::: warning
To add multiple pricing plans, click the **Add New Plan** button and to delete any item, click the **Trash** icon in the right corner of the section.

Also, If you want a pricing plan to be selected by default from all your pricing plans, enable the **Default Toggle** for that plan.
:::

Once you are done, click the **Update** button to save all your settings and changes.

![choose one from multiple pricing plans](/images/donation-and-product-fields/add-subscription-payment-fields/7.-choose-one-from-multiple-pricing-plans-1.webp)

### Advanced Settings 

Once you complete the General settings, go to the **Advanced** tab, and you will find some advanced settings for your Payment Item field. These are:

- **Admin Label**: This label is used for the admin wants to see the field's label from the back end.

- **Field Wrapper CSS Class**: This is used for adding a Custom CSS/JS for an entire field of a specific form using the Field Wrapper CSS Class element. To learn more, click [here](/form-settings/how-to-create-custom-css-js-in-wordpress-with-paymattic).

- **Input Elements CSS Class**: This is used for adding a Custom CSS/JS for a specific input field of a form using the Input Elements CSS Class element. To learn more, click [here](/form-settings/how-to-create-custom-css-js-in-wordpress-with-paymattic).

- **Conditional Render**: You can set conditional logic to display the field in the form that will be triggered by specific actions taken on a previous input field. To learn more about conditional renderings, click [here](/form-editor/how-to-use-conditional-logic-in-form-fields-with-paymattic).

- **Field ID**: This option is used for adding or tracking form fields. Plus, creating the custom CSS/JS for a specific form field.

Once you finish, click the **Update** button to save all your configuration.

![Advanced Settings](/images/donation-and-product-fields/add-subscription-payment-fields/8.-Advanced-Settings.webp)

## Embedding Form into Frontend

Here, you can see the **Subscription Payment** field and other necessary fields are added to the form.

Now, to embed and display the form on a specific Page/Post, **copy** this **Shortcode** and paste it into your desired Page/Post.

Once you complete the edit, press the **Save** button to save all the changes you made.
And, to see the **Preview** of the form, click the **Eye** icon.

![Save, preview and shortcode buttons](/images/donation-and-product-fields/add-subscription-payment-fields/9.-Save-preview-and-shortcode-buttons.webp)

## Preview of Subscription Payment field

Here is the preview of the **Subscription Payment** field in a Form.

![Preview of Subscription Payment](/images/donation-and-product-fields/add-subscription-payment-fields/10.-Preview-of-Subscription-Payment.webp)

This way you can easily add the **Subscription Payment** field in Paymattic Forms!
If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/). Thank you.