---
title: "Integrate FluentCRM"
category: "Integrations"
---

# Integrate FluentCRM

[Paymattic](https://paymattic.com/) integrates with [FluentCRM](http://www.fluentcrm.com/), a WordPress-based self-hosted email marketing automation plugin that helps you add new prospects to your FluentCRM contact list when a form is submitted. This article will guide you through integrating **FluentCRM** with **Paymattic** on your WordPress site.

## Enable FluentCRM Integration


First, go to **Integrations** from the **Paymattic Navbar**, search for FluentCRM through the search bar, and you will get the **FluentCRM** integration module.

Before starting the process, ensure you **Installed** and **Activated** the FluentCRM Plugin in your WordPress Site. 

>[!Note]
>To learn how to install & activate FluentCRM Free/PRO Version read this [Documentation](https://fluentcrm.com/docs/how-to-install-upgrade-and-activate-license/).

![Install and activate FluentCRM](/images/integrations/integrate-fluentcrm/Install-activate-FluentCRM-scaled.webp)

Once you successfully install & activate the FluentCRM plugin in your WordPress Site, you will get the FluentCRMt’s Settings Icon on the right side, click on it.

![FluentCRM Settings Icon](/images/integrations/integrate-fluentcrm/Fluent-CRMs-Settings-Icon-1-scaled.webp)

Click the **Toggle** button and your FluentCRM integration module will be enabled.

![Enable FluentCRM integration](/images/integrations/integrate-fluentcrm/Enabled-Fluent-CRM-integration-scaled.webp)

## Integrate FluentCRM into Forms


First, go to **All Forms** from the **Paymattic Navbar**, select the **Desired Form** where you want to integrate FluentCRM and click the **Pencil/Editor** Icon.

![Open desired form](/images/integrations/integrate-fluentcrm/Open-desired-form-2-scaled.webp)

Once the **Editor** page opens, go to the **Integrations** tab, click the **Add New Integration** button & select **FluentCRM Integration** feed from the dropdown list. 

![Add new integration](/images/integrations/integrate-fluentcrm/Add-new-integration-dropdown-fluent-crm-scaled.webp)

Now, a pop-up page will appear with various settings options for configuring FluentCRM. 

**All the settings options mentioned in the screenshot below are briefly explained:**

* **Feed Name:** Here, you can set a name according to your preference for your feed. This field is required to be filled in.
* **FluentCRM List:** This is a required field where you select the FluentCRM list to add new contacts to. By default, you can select a single list from the dropdown menu. All users who submit the form will be added to this list. Alternatively, you can enable the **Conditional List Selection** toggle to add contacts to different lists based on their specific form inputs.
    * To configure the conditions: Click the **Add More** button to create a new rule.
    * Set the conditions for the rule based on the following:
        * **FIELD:** In this dropdown, select the form field that the condition will be based on.
        * **OPERATOR:** Choose a comparison operator (e.g., `equal`, `not_equal`, `greater_than`).
        * **VALUE:** Enter the value to check against the user’s input.
        * **FLUENTCRM LIST:** Select the list to which the contact will be added if the condition is met.
    * You can also check the **Enable Default List (when no conditions match)** box to select a fallback list for contacts who do not meet any of your defined conditions.
* **Primary Fields:** Use all the fields under this option to properly link your FluentCRM Fields with the Form Fields. Also, you can easily select the **Value** for the **Form Fields** according to the **FluentCRM Fields** by using the **Shortcode** button.
* **Other Fields:** Use this option if you need to add your FluentCRM fields beside the primary fields. Here also, you can select the **Value** according to the **FluentCRM Fields** by using the **Shortcode** button.
    * Add as many **Other Fields** as you need by clicking the **+Add More** button.
    * Also, **Delete** any Field by clicking the **Trash Icon** if needed.
* **Contact Tags:** With this option, you can add tags to your FluentCRM contacts.
    * **Enable Dynamic Tag Selection:** Check this box to dynamically assign FluentCRM tags based on the user’s choices in the form.
* **Skip if contact already exist in FluentCRM:** If enabled, the integration will not process a new entry if the submitted email address is already in your FluentCRM database.
* **Enable Double Opt-In for new contacts:** When checked, new subscribers will be sent a confirmation email that they must click to be officially added to your list.
* **Add contact on Payment success only:** This ensures that the contact is only added to FluentCRM after their payment has been successfully completed, not just on form submission.
* **Remove contact on Payment Refund:** If you enable this, the contact will be automatically removed from FluentCRM if their corresponding payment is refunded.
* **Remove contact on Subscription canceled:** When enabled, the contact will be automatically removed from FluentCRM if their subscription, initiated through this form, is canceled.
* **Conditional Logics:** This option allows FluentCRM integration to function conditionally based on your submission values according to your set conditional logic/s. Also, here, you can add as much conditional logic as you need by clicking the **+ Add More** button and delete any logic by clicking the **Trash Icon** if needed. To learn more, read this [Documentation](/use-conditional-logic).

* **Enable This Feed:** Check this option, to ensure this integration feed remains enabled, and all the actions of this feed function properly.

Once the setup is done, finally, click the **Create FluentCRM Feed** button.
And, your FluentCRM will be integrated into this specific form.

![FluentCRM integration settings](/images/integrations/integrate-fluentcrm/Add-New-FluentCRM-Integration-Feed-page.webp)

After successful Integration, now you will see that your **FluentCRM Integration Feed** has been added here.

You can modify your feed anytime by clicking the **Pencil Icon** and delete it by clicking the **Trash** Icon.
Also, you can disable or enable this feed anytime by clicking the **Toggle** button if needed.

![Added FluentCRM Integration Feed](/images/integrations/integrate-fluentcrm/Added-Fluent-CRM-Integration-Feed-scaled.webp)

## Preview of Integrated FluentCRM

Here, you can see the preview of the added contacts of FluentCRM through the Form entries that I set up during the integration.

First, go to the **Contacts** section from the left sidebar, open the List tab, and click on the **Desired List** you integrated into **Paymattic**.

![Pro user list in FluentCRM](/images/integrations/integrate-fluentcrm/Pro-uder-list-from-FluentCRM-scaled.webp)

And, you can see that **Contacts** are added automatically to the chosen **FluentCRM Contact** List through the Paymattic Form submission. 

![Preview of integrated FluentCRM](/images/integrations/integrate-fluentcrm/Preview-of-integrated-FluentCRM-scaled.webp)

That's all you need to integrate FluentCRM with Paymattic! If you have any questions, concerns, or suggestions, please contact our [support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/).