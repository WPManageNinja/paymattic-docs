---
title: "How to Integrate Twilio with Paymattic in WordPress?"
category: "Integrations"
---

# How to Integrate Twilio with Paymattic in WordPress?

[Paymattic](https://paymattic.com/) lets you connect with [Twilio](http://www.twilio.com/) to send SMS notifications automatically when a form is submitted. This article will guide you through integrating Twilio with Paymattic on your WordPress Site.
:::warning Pro Feature
Twilio is the Premium Feature of the Paymattic Plugin. So, you need Paymattic Pro to integrate this.
:::

## Enable Twilio Integration 

To learn how to enable **Twilio** integration, follow the steps with the screenshots below –

First, go to **Integrations** from the **Paymattic Navbar**, search for **Twilio** through the search bar, and you will get the **Twilio** integration module.

Here, you will see Twilio’s **Settings Icon** on the right side, click on it.

![](/images/integrations/how-to-integrate-twilio-with-paymattic-in-wordpress/Twilios-Settings-Icon-scaled.webp)

Click the **Toggle** button to enable the Twilio.

Once you enable Twilio, you will be asked for the **Number Form** ( i.e., here provide the Twilio Account’s phone number from where the SMS notifications will be sent), **Account SID,** and **Auth Token** of your Twilio Account.

![](/images/integrations/how-to-integrate-twilio-with-paymattic-in-wordpress/Enable-Twilio--scaled.webp)

### Get the Phone Number, Account SID, and Auth Token from Twilio

Simply, **log into your Twilio Accoun**t and you will **get all the credentials** on the **Dashboard** page. Now copy them by clicking the **Copy** icon.

![](/images/integrations/how-to-integrate-twilio-with-paymattic-in-wordpress/Copy-Account-SID-Auth-Token-and-Twilio-phone-number.webp)

Now, return to the **Twilio** **SMS Provider Settings** page under the **Integrations** section from the **Paymattic** **Navbar**.

Paste the **Phone number, SID,** and **Token** you copied from **Twilio** into the **Number from**, **Account SID**, and **Auth Token** fields respectively.

Finally, press the **Save Setting**s button and your Telegram Integration module will be enabled.

![](/images/integrations/how-to-integrate-twilio-with-paymattic-in-wordpress/Paste-the-Twilio-Credentials-scaled.webp)

## Integrate Twilio into Paymattic Forms

To learn how to integrate Twilio into any specific Form in Paymattic, follow the steps with the screenshots below –

First, go to **All Forms** from the **Paymattic Navbar**, **select** the **Desired Form** where you want to integrate your Twilio and click the **Pencil/Editor Icon.**

![](/images/integrations/how-to-integrate-twilio-with-paymattic-in-wordpress/Open-desired-form-6-scaled.webp)

Once the **Editor** page opens, go to the **Integrations** tab, click the **Add New Integration** button &amp; select **SMS Notification by Twilio** feed from the dropdown list.

![](/images/integrations/how-to-integrate-twilio-with-paymattic-in-wordpress/Add-new-integration-dropdown-Twilio-scaled.webp)

Now, a pop-up page will appear with various settings options for configuring Twilio.

All the settings options mentioned in the screenshot below are briefly explained:

- **Name**: Here, you can set a name according to your preference for your feed. This field is required to be filled in.
- **To:** Here, provide the number where you want to send the SMS notification. You can also **ShortCode** button to input the phone number.
- **SMS text**: Here you can set the texts and information you want to send to the number as a notification. Also, you can use the Shortcode button to set the user data from form entries that you want to send to your Telegram Group/Channel.
- **Conditional Logics**: This option allows Twilio integration to function conditionally based on your submission values according to your set conditional logic/s. Also, here, you can add as much conditional logic as you need by clicking the **+ Add More** button and delete any logic by clicking the **Trash Icon** if needed. To learn more, read this [Documentation](/how-to-use-conditional-logic-in-form-fields-with-paymattic).
- **Enable This Feed**: Check this option, to ensure this integration feed remains enabled, and all the actions of this feed function properly.

Once the setup is done, finally, click the **Create Twilio Feed** button.
And, your Twilio will be integrated into this specific form!

![](/images/integrations/how-to-integrate-twilio-with-paymattic-in-wordpress/Add-new-twilio-integration-feed-page.webp)

After successful Integration, now you will see that your **Twilio Integration Feed** has been added here.

You can modify your feed anytime by clicking the **Pencil Icon** and delete it by clicking the **Trash Icon**.
Also, you can disable or enable this feed anytime by clicking the **Toggl**e button if needed.

![](/images/integrations/how-to-integrate-twilio-with-paymattic-in-wordpress/Added-twilio-integration-feed-scaled.webp)

This way you can easily integrate Twilio with Paymattic and send SMS Notifications!
If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.