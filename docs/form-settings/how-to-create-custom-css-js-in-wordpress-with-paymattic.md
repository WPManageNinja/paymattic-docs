---
title: "How to Create Custom CSS/JS in WordPress with Paymattic?"
category: "Form Settings"
---

# How to Create Custom CSS/JS in WordPress with Paymattic?

[Paymattic](https://paymattic.com/) offers the **Custom CSS/JS** feature, which enables you to create custom CSS or JS for a specific form in Paymattic. This allows you to add personalized styles or scripts to your form to meet your specific preferences. This article will guide you through Creating Custom CSS or JS with Paymattic.

## Creating Custom CSS/JS in a Form

To learn how to create Custom CSS/JS for a specific form, follow the steps with the screenshots below –

First, go to the **All Forms** section from the **Paymattic Navbar**, choose a **Form**, and click the **Pencil/Edit** icon to open the **Editor** page of that form.

For example, I choose an existing form to show the whole process.

![Opening a form to edit in Paymattic](/images/form-settings/how-to-create-custom-css-js-in-wordpress-with-paymattic/1.-Open-desired-form-5-scaled.webp)

Once you open the **Editor** page, go to the **Settings** tab from the left sidebar, and you will get the **Custom CSS/JS** settings option to create Custom CSS or JS.

After you complete coding for your Custom CSS/JS, click the **Save CSS & JS** button to save all your customization.

![Custom CSS/JS settings in form editor](/images/form-settings/how-to-create-custom-css-js-in-wordpress-with-paymattic/2.-Settings-tab-and-Custom-CSSJS-option-scaled.webp)

**The Custom CSS and JS mentioned above are briefly explained below:**

### Custom CSS

Before you add any CSS code, you must first add the ID of the specific form. It is necessary to target this specific form and apply CSS styling to it.

Plus, you do not need to include the **&lt;style&gt;&lt;/style&gt;** tag in the Custom CSS panel.

### Custom Javascript (JS)

You can write javascript or jQuery in the custom JS panel. Your additional JS code will run after the form is initialized.

You do not need to include the **&lt;script&gt;&lt;/script&gt;** tag in the Custom JS panel.

::: warning
Please write valid **JavaScript** code. Invalid JS code may break the Form. You can use the JavaScript variable **$form** to define the JavaScript DOM object of the form.
:::

This is the simple process of adding Custom CSS/JS to any Paymattic Forms!

::: tip Need Help?
If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [support team](https://wpmanageninja.com/support-tickets/). Thank you.
::: 