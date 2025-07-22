---
title: "How to Use Conditional Logic in Form Fields with Paymattic?"
category: "Form Editor"
---

# How to Use Conditional Logic in Form Fields with Paymattic?

[Paymattic](https://paymattic.com/) offers the Conditional Logic feature inside fields to display them based on specific action/s you set for your forms. This article will guide you through Using Conditional Logic in Form Fields with Paymattic.

## Conditional Logic In A Form

First, go to the **All Forms** section from the **Pymattic Navbar**, choose a **Form**, and click the **Pencil/Edit** icon to open the **Editor** page of that form.

::: tip
If you do not have any existing forms, read the [Create a Form from Scratch](../form-editor/how-to-create-a-form-from-scratch-with-paymattic) or [Create a Form using Templates](../form-editor/simple-form-templates.md) documentation.
:::

For example, I choose an existing form to show the whole process.

![Opening a form in Paymattic editor](/images/form-editor/how-to-use-conditional-logic-in-form-fields-with-paymattic/Open-desired-form-scaled.webp)

Once you open the **Editor** page, [Add the Desired Fields](../form-editor/how-to-create-a-form-from-scratch-with-paymattic#adding-desired-field-s) by typing the **" / "** or clicking the **Plus Icon** placed at the bottom.
Or, use any existing field to set the conditional logic. For example, I will add the **[Name](../general-input-fields/how-to-use-general-form-input-fields-in-wordpress-with-paymattic#_1-name-field)** and **[Email](../general-input-fields/how-to-use-general-form-input-fields-in-wordpress-with-paymattic#_2-email-field)** field to show you the process.

First, click the **Settings Icon** in the right corner of your field where you wish to use conditional logic.

![Field settings icon location](/images/form-editor/how-to-use-conditional-logic-in-form-fields-with-paymattic/Settings-Icon-of-desired-field.webp)

## Enabling the Conditional Render 

Now, go to the **Advanced** tab, find the **Conditional Render** setting option, and click the **Yes** radio button to enable the option for **setting the Conditional Logic**.

![Enabling conditional render option](/images/form-editor/how-to-use-conditional-logic-in-form-fields-with-paymattic/click-Yes-to-enable-Conditional-Render.webp)

## Setting Conditional Logic

Once you enable the option, you can specify the **Parameter**, its **Conditions**, and the corresponding **Value**.

In the **"Parameter" field** (first field), select an **input field** that needs to be **matched with a value** provided in the **"Value" field** (last field) and **set a condition** in the **"Condition" field** (middle field). The parameter will trigger the action if the condition is met.

Plus, with the **Conditional Match** option, you can choose whether **All** or **Any** one of your conditional logic should match to trigger the actions.

::: tip Example
I chose "**Name**" as a parameter, the "**Starts With**" and "**Not Contains**" as conditions, and entered "**Z**" and "**S**" as the respective values. And, selected **All** for option conditional match. As a result, only users who meet both conditions of starting name with Z and do not contain the letter S can see the **Email Address** field.
:::

![Setting up conditional logic rules](/images/form-editor/how-to-use-conditional-logic-in-form-fields-with-paymattic/Set-desired-conditional-logics-.webp)

You can add as many conditional logics as you need by clicking the **+ Add More** button in the left corner below.
Plus, you can delete any conditions by clicking the **Trash Icon** anytime if needed.

Once you finish, click the **Update** button to save all your configuration.

![Update button to save changes](/images/form-editor/how-to-use-conditional-logic-in-form-fields-with-paymattic/Update-button.webp)

## Preview of Set Conditional Logics

Here is a **preview** of a form where the user has not met the set conditions. As a result, the Email Address is not visible here.

![Preview when conditions are not met](/images/form-editor/how-to-use-conditional-logic-in-form-fields-with-paymattic/Preview-of-conditional-logic-doesnt-match.webp)

Here is a **preview** of a form where the user met all the set conditions. As a result, the Email Address is visible here.

![Preview when conditions are met](/images/form-editor/how-to-use-conditional-logic-in-form-fields-with-paymattic/Preview-of-Conditions-matched.webp)

This way you can easily create and use Conditional Logic in any field of Paymattic Forms!

::: tip Need Help?
If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/). Thank you.
:::