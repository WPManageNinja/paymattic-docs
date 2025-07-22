---
title: "How to Integrate Slack in WordPress with Paymattic?"
category: "Integrations"
---

# How to Integrate Slack in WordPress with Paymattic?

[Paymattic](https://paymattic.com/) lets you connect with [Slack](https://www.slack.com/) to send SMS notifications automatically when a form is submitted. This article will guide you through integrating Slack with Paymattic on your WordPress Site.

## Enable Slack Integration 


First, go to **Integrations** from the **Paymattic Navbar**, search for **Slack** through the search bar, and you will get the **Slack** integration module.

Here, you will see Slack’s **Settings Icon** on the right side, click on it.

![](/images/integrations/how-to-integrate-slack-in-wordpress-with-paymattic/Slacks-Settings-Icon-scaled.webp)

Click the **Toggle** button and your **Slack** integration module will be enabled.

![](/images/integrations/how-to-integrate-slack-in-wordpress-with-paymattic/Enabled-Slack-Integration-module-scaled.webp)

## Integrate Slack into Forms


First, go to **All Forms** from the **Paymattic Navbar**, **select** the **Desired Form** where you want to integrate your Slack and click the **Pencil/Editor Icon.**

![](/images/integrations/how-to-integrate-slack-in-wordpress-with-paymattic/Open-desired-form-4-scaled.webp)

Once the **Editor** page opens, go to the **Integrations** tab, click the **Add New Integration** button &amp; select **Slack Integration Feed** feed from the dropdown list.

![](/images/integrations/how-to-integrate-slack-in-wordpress-with-paymattic/Add-new-integration-dropdown-slack-scaled.webp)

Now, a pop-up page will appear with various settings options for configuring Slack.

**All the settings options mentioned in the screenshot below are briefly explained:**

- **Feed** **Name**: Here, you can set a name for your feed according to your preference. This field is required to be filled in.
- **Slack Webhook**: This is also a required field. Here, provide the URL of your **Slack** **Channel** where you want to send the Paymattic’s form submission data. [Click here](https://paymattic.com/docs/how-to-integrate-slack-in-wordpress-with-paymattic/#2-toc-title) to learn how to get the Webhook URL from Slack.
- **Trigger notification on payment success only**: If you enable this option, the notification will be sent to your chosen Slack Channel only after successful payment.
- **Conditional Logics**: This option allows Slack integration to function conditionally based on your submission values according to your set conditional logic/s. Also, here, you can add as much conditional logic as you need by clicking the **+ Add More** button and delete any logic by clicking the **Trash Icon** if needed. To learn more, read this [Documentation](/how-to-use-conditional-logic-in-form-fields-with-paymattic).
- **Enable This Feed**: Check this option to ensure this integration feed remains enabled and all its actions function properly.

Once the setup is done, finally, click the **Create Slack Feed** button. And, your Slack will be integrated into this specific form!

![](/images/integrations/how-to-integrate-slack-in-wordpress-with-paymattic/Add-New-Slack-Integration-Feed-page.webp)

### Get the Webhook URL from Slack


First, you need to create an App on your Slack to get the Webhook URL.

To create an app, go to the [Slack API page](https://api.slack.com/apps?new_app=1) and click on the **Create an App** button.

![](/images/integrations/how-to-integrate-slack-in-wordpress-with-paymattic/Create-an-App-scaled.webp)

Select the **From Scratch** option.

![](/images/integrations/how-to-integrate-slack-in-wordpress-with-paymattic/From-scratch.webp)

Give your **app a Name** to easily find it later, **choose your Workspace** from the dropdown list, and click the **Create App** button.

![](/images/integrations/how-to-integrate-slack-in-wordpress-with-paymattic/App-name-workspace-Create-app.webp)

Once you create the app, open the **Incoming Webhooks** page and enable the **Toggle** button to activate it.

Now, scroll down to **Webhook URLs for Your Workspac**e section and click the **Add New Webhook to Workspace** button.

![](/images/integrations/how-to-integrate-slack-in-wordpress-with-paymattic/Add-ew-webhook-to-your-workspace-scaled.webp)

Now, select your desired Slack **Channel** from the dropdown list where you want to send the notifications and click the **Allow** button.

![](/images/integrations/how-to-integrate-slack-in-wordpress-with-paymattic/Select-for-a-channel.webp)

Once you hit the Allow button, you will be redirected to the **Incoming Webhooks** page.
Where you will get your desired Webhook URL, copy it by clicking the **Copy** button.

![](/images/integrations/how-to-integrate-slack-in-wordpress-with-paymattic/Copy-Webhook-URL-2.webp)

Now, return to the **Add New Slack Integration Feed** page from the Form’s **Integration** tab.
And, paste the URL you copied from the newly created Slack App into the **Slack** **Webhook** field.

:::warning Remember
Don’t forget to click the **Create Slack Feed** button, otherwise your integration will not be saved and function properly.
:::

![](/images/integrations/how-to-integrate-slack-in-wordpress-with-paymattic/Paste-the-Slack-Webhook-URL.webp)

After successful Integration, now you will see that your **Slack Integration Feed** has been added here.

You can modify your feed anytime by clicking the **Pencil Icon** and delete it by clicking the **Trash Icon**.
Also, you can disable or enable this feed anytime by clicking the **Toggl**e button if needed.

![](/images/integrations/how-to-integrate-slack-in-wordpress-with-paymattic/Added-slack-integration-feed-scaled.webp)

## Preview of Integrated Slack

Here, you can see the preview of the notification messages of Slack through the Form entries that I set up during the integration.

![](/images/integrations/how-to-integrate-slack-in-wordpress-with-paymattic/Preview-of-Slack.webp)

This way you can easily integrate Slack with Paymattic!
If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [support team](https://wpmanageninja.com/support-tickets/). Thank you.