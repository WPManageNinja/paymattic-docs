---
title: "How to Integrate Mailchimp in WordPress with Paymattic?"
category: "Integrations"
---

# How to Integrate Mailchimp in WordPress with Paymattic?

[Paymattic](https://paymattic.com/) integrates with [Mailchimp](https://mailchimp.com/) to automatically send contact information from your WordPress website to your Mailchimp account when a form is submitted. This article will guide you through integrating Mailchimp with Paymattic on your WordPress site.

## Enable Mailchimp Integration 


First, go to **Integrations** from the **Paymattic Navbar**, search for Mailchimp through the search bar, and you will get the **Mailchimp integration** module.

Here, you will see Mailchimp’s **Settings Icon** on the right side, click on it.

![Mailchimp Settings Icon](/images/integrations/how-to-integrate-mailchimp-in-wordpress-with-paymattic/Mailchimps-Settings-Icon-scaled.webp)

Click the **Toggle** button to enable the Mailchimp.
Once you enable ActiveCampaign, you will be asked for the **Mailchimp API Key** of your Mailchimp Account.

![Enable Mailchimp integration](/images/integrations/how-to-integrate-mailchimp-in-wordpress-with-paymattic/Enable-Mailchimp-integration-scaled.webp)

## Get the API Key from Mailchimp

To learn how to get the Mailchimp API Key from ActiveCampaign, follow the step by step process –

First, log in to your [Mailchimp Account](https://mailchimp.com/), go to **Profile** from the top right corner, and click the **Profile** button

![Profile icon in Mailchimp](/images/integrations/how-to-integrate-mailchimp-in-wordpress-with-paymattic/Profile-icon-scaled.webp)

Now, open the **Extras** tab and select the **API keys** from the dropdown list.

![Extras API keys menu](/images/integrations/how-to-integrate-mailchimp-in-wordpress-with-paymattic/Extras-API-kyes-scaled.webp)

Then, press the **Create A Key** button.

![Create API Key button](/images/integrations/how-to-integrate-mailchimp-in-wordpress-with-paymattic/Create-a-Key-button.webp)

Provide a **Name** for your API key and click the **Generate Key** button.

![Generate Key button](/images/integrations/how-to-integrate-mailchimp-in-wordpress-with-paymattic/Generate-Key-button.webp)

Finally, your Mailchimp API key is generated, copy it by clicking the **Copy to Clipboard** button.

![Copy API Key](/images/integrations/how-to-integrate-mailchimp-in-wordpress-with-paymattic/Copy-API-Key.webp)

Now, return to the **Mailchimp Settings** page under the **Integrations** section from the **Paymattic Navbar** and paste the copied **API Key** into the Mailchimp API Key fields.

Finally, press the **Save Settings** button and your Mailchimp Integration module will be enabled.

![Paste Mailchimp API key](/images/integrations/how-to-integrate-mailchimp-in-wordpress-with-paymattic/Paste-Mailchimp-API-key-scaled.webp)

## Integrate Mailchimp into Forms


First, go to **All Forms** from the **Paymattic Navbar**, select the **Desired Form** where you want to integrate your Mailchimp and click the **Pencil/Editor** Icon. 

![Open desired form](/images/integrations/how-to-integrate-mailchimp-in-wordpress-with-paymattic/Open-desired-form-9-scaled.webp)

Once the **Editor** page opens, go to the **Integrations** tab, click the **Add New Integration** button & select **Mailchimp Integration feed** from the dropdown list.

![Add new integration](/images/integrations/how-to-integrate-mailchimp-in-wordpress-with-paymattic/Add-new-integration-dropdown-Mailchimp-scaled.webp)

Here, you will find a required field to set a name for your integration feed according to your preference.
Also, you must select **Mailchimp’s List** from the dropdown where you want to send the submitted form data. 

![Name and List selection](/images/integrations/how-to-integrate-mailchimp-in-wordpress-with-paymattic/Name-List-of-Add-new-mailchimp-feed-page.webp)

Once you select the list, a pop-up page will appear with various settings options for configuring the ActiveCampaign.

**All the settings options mentioned in the screenshot below are briefly explained:**

* **Name:** From here, you can change the name anytime if needed.
* **List:** From here, you can change the Mailchimp List anytime if needed.
* **Map Fileds:** Use all the fields under this option to properly link your Mailchimp Fields with the Form Fields. Also, you can easily select the Value for the Form Fields according to the Mailchimp Fields by using the **Shortcode** button.
* **Interest Group:** With this option, you can map your MailChimp’s Interest group here. 
* **Tags:** With this option, you can add tags to your ActiveCampaign contacts with a comma-separated list  (e.g. new lead, Paymattic, web source). Commas within a merge tag value will be created as a single tag.
* **Enable Dynamic Tag Input:** This option allows ActiveCampaign to add customized tags for specific contacts based on your submission values according to your set conditions.
* **Notes:** You can write a note for the contacts. 
* **Enable Double Opt-in:** Enable this option if you want to check the validation of the user information (specifically user email).
* **Enable ReSubscription:** When this option is enabled, if the subscriber is in an inactive state or has previously been unsubscribed, they will be re-added to the active list. 
* **Mark as VIP Contact:** When you enable this option, contacts will be marked as VIP.
* **Conditional Logics:** This option allows Mailchimp integration to function conditionally based on your submission values according to your set conditional logic/s. Also, here,  you can add as much conditional logic as you need by clicking the **+ Add More** button and delete any logic by clicking the **Trash Icon** if needed. To learn more, read this [Documentation](/how-to-use-conditional-logic-in-form-fields-with-paymattic). 
* **Enable This Feed:** Check this option, to ensure this integration feed remains enabled, and all the actions of this feed function properly.

Once the setup is done, finally, click the **Create Mailchimp Feed** button. And, your Mailchimp will be integrated into this specific form!

![Mailchimp integration settings](/images/integrations/how-to-integrate-mailchimp-in-wordpress-with-paymattic/Add-New-Mailchimp-Integration-Feed-page.webp)

After successful Integration, now you will see that your **Mailchimp Integration Feed** has been added here.

You can modify your feed anytime by clicking the **Pencil Icon** and delete it by clicking the **Trash Icon**.
Also, you can disable or enable this feed anytime by clicking the **Toggle** button if needed.

![Added Mailchimp Integration Feed](/images/integrations/how-to-integrate-mailchimp-in-wordpress-with-paymattic/Added-Mailchimp-Integration-Feed-scaled.webp)

## Preview of Integrated Mailchimp

Here, you can see the preview of the added contacts of Mailchimp through the Form entries that I set up during the integration.

First, open the **Audience** dropdown and click the **Contacts** tab from the left sidebar.

And, you can see that **Contacts** are added automatically to the chosen **Mailchimp Contact** List through the Paymattic Form submission. 

![Preview of Mailchimp contacts](/images/integrations/how-to-integrate-mailchimp-in-wordpress-with-paymattic/Preview-of-Mailchimp-scaled.webp)

That's all you need to integrate Mailchimp with Paymattic! If you have any questions, concerns, or suggestions, please contact our [support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/).