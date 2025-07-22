---
title: "How to Integrate Zapier with Paymattic in WordPress?"
category: "Integrations"
---

# How to Integrate Zapier with Paymattic in WordPress?

[Paymattic](https://paymattic.com/) integrates [Zapier](https://zapier.com/) a cool automation tool that helps you push submitted data automatically to multiple apps. This article will guide you through integrating **Zapier** into your **WordPress** **Site** with **Paymattic**.

## Enable Zapier Integration 


First, go to **Integrations** from the **Paymattic Navbar**, search for **Zapier** through the search bar, and you will get the **Zapier** integration module.

Here, you will see the Zapier’s **Settings Icon** on the right side, click on it.

![](/images/integrations/how-to-integrate-zapier-with-paymattic-in-wordpress/Zapiers-Settings-Icon-scaled.webp)

Click the **Toggle** button and your **Zapier** integration module will be enabled.

![](/images/integrations/how-to-integrate-zapier-with-paymattic-in-wordpress/Enabled-Zapier-integration--scaled.webp)

## Integrate Zapier into Forms


First, go to **All Forms** from the **Paymattic Navbar**, **select** the **Desired Form** where you want to integrate **Zapier,** and click the **Pencil/Editor Icon.**

![](/images/integrations/how-to-integrate-zapier-with-paymattic-in-wordpress/Open-desired-form-3-scaled.webp)

Once the **Editor** page opens, go to the **Integrations** tab, click the **Add New Integration** button &amp; select **Zapier Integration** feed from the dropdown list.

![](/images/integrations/how-to-integrate-zapier-with-paymattic-in-wordpress/Add-new-integration-dropdown-scaled.webp)

Now, a pop-up page will appear with various settings options for configuring the Zapier.

Once the setup is done, finally, click the **Create Zapier Feed** button.

And, your Zapier will be integrated into this specific form!

![](/images/integrations/how-to-integrate-zapier-with-paymattic-in-wordpress/Add-New-Zapier-Integration-Feed-page-scaled.webp)


**All the settings options mentioned above are briefly explained below:**

### Feed Name

Here, you can set a name according to your preference for your feed. This field is required to be filled in.

![](/images/integrations/how-to-integrate-zapier-with-paymattic-in-wordpress/Feed-name.webp)

### Webhook URL

This is also a required field. Here, provide the **Webhook URL of Zapier** where you want to send the Paymattic submission data. To learn how to get the Webhook URL from Zapier, follow the steps below –

#### Get the Webhook URL from Zapier

First. go to your [Zapier account](https://zapier.com/app/dashboard) and log in to the dashboard.
Now, click the **+ Create** button and then click the **Zaps** button to create a new Zap.

![](/images/integrations/how-to-integrate-zapier-with-paymattic-in-wordpress/Zaps-button-under-create-option-scaled.webp)

Click the Trigger button to set the trigger

![](/images/integrations/how-to-integrate-zapier-with-paymattic-in-wordpress/Trigger-button.webp)

Select **Webhook by Zapier** trigger.

![](/images/integrations/how-to-integrate-zapier-with-paymattic-in-wordpress/Webhook-by-Zapier-trigger.webp)

Click the **Choose an event** field and a pop-up will appear to select your **Trigger event**. Select **Catch Hook** as a trigger event.

![](/images/integrations/how-to-integrate-zapier-with-paymattic-in-wordpress/Catch-hook-trigger-event.webp)

Once you are done with the configuration click either the **Continue** or **Test** button.

![](/images/integrations/how-to-integrate-zapier-with-paymattic-in-wordpress/Test-or-Continue-button.webp)

And you will **get your Webhook URL**. Now, simply copy it by clicking the **Copy** button.

![](/images/integrations/how-to-integrate-zapier-with-paymattic-in-wordpress/Copy-webhook-URL-1.webp)

Now return to the **Add New Zapier Integration Feed** page from the Form’s **Integration** tab.
And, paste the **URL** you copied from Zapier into the **Webhook URL** field.

![](/images/integrations/how-to-integrate-zapier-with-paymattic-in-wordpress/Paste-webhook-url.webp)

### Conditional Logics and Enable This Feed
- **Conditional Logics**: 
    Enabling this option by clicking the **Toggle** button allows Zapier integration to function conditionally based on your submission values according to your set conditional logic/s. Also, here, you can add as much conditional logic as you need by clicking the **+ Add More** button and delete any logic by clicking the **Trash Icon** if needed.
- **Enable This Feed**: Check this option, to ensure this integration feed remains enabled, and all the actions of this feed function properly.

Once the setup is done, finally, click the **Update Zapier Feed** button.
And, your Zapier will be integrated into this specific Paymattic form!

![](/images/integrations/how-to-integrate-zapier-with-paymattic-in-wordpress/Conditional-logic-Enable-this-feed-checkboxes.webp)

After successful Integration, now you will see that your **Zapier Integration Feed** has been added here.

You can modify your feed anytime by clicking the **Pencil Icon** and delete it by clicking the **Trash Icon**. 
Also, you can disable or enable this feed anytime by clicking the **Toggl**e button if needed.

![](/images/integrations/how-to-integrate-zapier-with-paymattic-in-wordpress/Added-Zapier-integration-scaled.webp)

## Test Zapier Integration

Once you successfully integrated Zapier with Paymattic. It’s better to test the integration by submitting a demo form. To test the Zapier Integration, follow the steps with the screenshots below –

First, log in to your [Zapier Dashboard](https://zapier.com/app/dashboard) and click on the Zap that you have created.

![](/images/integrations/how-to-integrate-zapier-with-paymattic-in-wordpress/Paymattic-Zap-scaled.webp)

Click the Action button to set the action for testing the integration.

![](/images/integrations/how-to-integrate-zapier-with-paymattic-in-wordpress/Action-button-scaled.webp)

Select an **App** through which you want to run the action. For example, I am selecting **Gmail** for demonstration purposes.

![](/images/integrations/how-to-integrate-zapier-with-paymattic-in-wordpress/Gmail-action.webp)

Now, click the **Choose an event** field and a pop-up will appear to select your **Action event** that will be performed when the Zap runs.

For example, I am selecting the **Send Email** option as an action event. 
Then, click the **Sign in** button to connect to your **Gmail** **Account**.

![](/images/integrations/how-to-integrate-zapier-with-paymattic-in-wordpress/Send-email-event.webp)

Choose the **Account** you want to connect here.

![](/images/integrations/how-to-integrate-zapier-with-paymattic-in-wordpress/Choose-gmail-account.webp)

Once you connect the Gmail account from which the email will be sent, click the **Continue** button for next steps.

![](/images/integrations/how-to-integrate-zapier-with-paymattic-in-wordpress/Continue-button-for-configuration.webp)

Fill up all required information in the **Configure** module and click the **Continue** button.

![](/images/integrations/how-to-integrate-zapier-with-paymattic-in-wordpress/Fill-in-all-information-under-Configure-tab.webp)

Once you initially set up and test the action, finally, click on the **Publish** button.

![](/images/integrations/how-to-integrate-zapier-with-paymattic-in-wordpress/Publish-button.webp)

After the Zap will turned on and it will automatically send an email notification once a new form is submitted.

You can **turn it on/off** anytime by clicking the **Toggle** button.
Also, you can edit the Zap anytime by clicking the **Edit Zap** button.

![](/images/integrations/how-to-integrate-zapier-with-paymattic-in-wordpress/Published-Zap-scaled.webp)

## Preview of Integrated Zapier

Here, you can see the preview of the emails sent through the Form entries that I set up during the integration.

![](/images/integrations/how-to-integrate-zapier-with-paymattic-in-wordpress/Preview-of-Zapier-integration-scaled.webp)

This way you can easily integrate Zapier with Paymattic! If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.