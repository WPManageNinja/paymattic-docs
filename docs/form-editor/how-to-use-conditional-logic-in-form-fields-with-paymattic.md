---
title: "How to Use Conditional Logic in Form Fields with Paymattic?"
category: "Form Editor"
---
[Paymattic](https://paymattic.com/) offers the Conditional Logic feature inside fields to display them based on specific action/s you set for your forms. This article will guide you through Using Conditional Logic in Form Fields with Paymattic.

## Conditional Logic In A Form

To learn how to use conditional logic in a specific form, follow the steps with the screenshots below –

First, go to the **All Forms** section from the **Pymattic Navbar,** choose a **Form,** and click the **Pencil/Edit** icon to open the **Editor** page of that form.

If you do not have any existing forms, read the [Create a Form from Scratch](/how-to-create-a-form-from-scratch-with-paymattic) or [Create a Form using Templates](/simple-form-templates) documentation.

For example, I choose an existing form to show the whole process.

![](/images/form-editor/how-to-use-conditional-logic-in-form-fields-with-paymattic/Open-desired-form-scaled.webp)

Once you open the **Editor** page, [Add the Desired Fields](/# 1-toc-title) by typing the **“ / ”** or clicking the **Plus Icon** placed at the bottom.
Or, use any existing field to set the conditional logic. For example, I used the **[Email](/# 6-toc-title)** field to show you the process.

First, click the **Settings** **Icon** in the right corner of your field where you wish to use conditional logic.

![](/images/form-editor/how-to-use-conditional-logic-in-form-fields-with-paymattic/Settings-Icon-of-desired-field.webp)

## Enabling the Conditional Render 

Now, go to the **Advanced** tab, find the **Conditional Render** setting option, and click the **Yes** radio button to enable the option for **setting the Conditional Logic**.

![](/images/form-editor/how-to-use-conditional-logic-in-form-fields-with-paymattic/click-Yes-to-enable-Conditional-Render.webp)

## Setting Conditional Logis

Once you enable the option, you can specify the **Parameter**, its **Conditions**, and the corresponding **Value**.

In the **"Parameter" field** (first field), select an **input field** that needs to be **matched with a** **value** provided in the **"Value" field** (last field) and **set a condition** in the **"Condition" field** (middle field). The parameter will trigger the action if the condition is met.

Plus, with the **Conditional Match** option, you can choose whether **All** or **Any** one of your conditional logic should match to trigger the actions.

For example, I chose "**Name**" as a parameter, the "**Starts With**" and “**Not Contains**” as conditions, and entered "**Z**" and "**S**" as the respective values. And, selected **All** for option conditional match. As a result, only users who meet both conditions of starting name with Z and do not contain the letter S can see the **Email Address** field.

![](/images/form-editor/how-to-use-conditional-logic-in-form-fields-with-paymattic/Set-desired-conditional-logics-.webp)

You can add as many conditional logics as you need by clicking the **+ Add More** button in the left corner below.
Plus, you can delete any conditions by clicking the **Trash Icon** anytime if needed.

Once you finish, click the **Update** button to save all your configuration.

![](/images/form-editor/how-to-use-conditional-logic-in-form-fields-with-paymattic/Update-button.webp)

## Preview of Set Conditional Logics

Here is a **preview** of a form where the user has not met the set conditions. As a result, the Email Address is not visible here.

![](/images/form-editor/how-to-use-conditional-logic-in-form-fields-with-paymattic/Preview-of-conditional-logic-doesnt-match.webp)

Here is a **preview** of a form where the user met all the set conditions. As a result, the Email Address is visible here.

![](/images/form-editor/how-to-use-conditional-logic-in-form-fields-with-paymattic/Preview-of-Conditions-matched.webp)

This way you can easily create and use Conditional Logic in any field of Paymattic Forms!
If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.