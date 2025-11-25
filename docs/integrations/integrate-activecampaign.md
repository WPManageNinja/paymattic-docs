---
title: "Integrate ActiveCampaign with Paymattic"
category: "Integrations"
---

# Integrate ActiveCampaign with Paymattic

[Paymattic](https://paymattic.com/) integrates [ActiveCampaign](https://www.activecampaign.com/) a marketing automation tool that helps you to collect customer information, and automatically adds it to your ActiveCampaign list. This article will guide you through integrating **ActiveCampaign** with **Paymattic** on your WordPress Site.  

:::warning Pro Feature
ActiveCampaign integration is a Premium Feature of the Paymattic Plugin. You need Paymattic Pro to use this integration.
:::

## Enable ActiveCampaign Integration 


First, go to **Integrations** from the **Paymattic Navbar**, search for **ActiveCampaign** through the search bar, and you will get the **ActiveCampaign** integration module.

Here, you will see the ActiveCampaign’s **Settings Icon** on the right side, click on it.

![ActiveCampaign Settings Icon](/images/integrations/integrate-activecampaign/Active-Campaigns-Setting-Icon-scaled.webp)

Click the **Toggle** button to enable the ActiveCampaign. 

Once you enable ActiveCampaign, you will be asked for the **ActiveCampaign API URL** and **ActiveCampaign API Key** of your ActiveCampaign Account.

![Enable ActiveCampaign Integration](/images/integrations/integrate-activecampaign/Enable-Active-Campaign-Integration-scaled.webp)

### Get the ActiveCampaign API URL and API Key


First, log in to your [ActiveCampaign Account](https://www.activecampaign.com/) and go to **Settings** from the left sidebar.

![Settings tab in ActiveCampaign](/images/integrations/integrate-activecampaign/Settings-tab-of-Active-Campaign-scaled.webp)

Now, open the **Developer** tab and you will get your desired **API URL** and **API Key**. Simply, copy them by clicking the **Copy API URL** and **Copy API Key** buttons.

![Copy ActiveCampaign API credentials](/images/integrations/integrate-activecampaign/Copy-Active-Campaign-API-URL-Key-scaled.webp)

Then, return to the **ActiveCampaign API Settings** page under the **Integrations** section from the **Paymattic Navbar**. 

Paste the API URL and API Key you copied from ActiveCampaign into the **ActiveCampaign API URL** and **ActiveCampaign API Key** fields respectively.

Finally, press the **Save Settings** button and your ActiveCampaign Integration module will be enabled.

![Paste API credentials](/images/integrations/integrate-activecampaign/Paste-the-API-URL-Key-scaled.webp)

## Integrate ActiveCampaign into Forms


First, go to **All Forms** from the **Paymattic Navbar**, select the **Desired Form** where you want to integrate your **ActiveCampaign**, and click the **Pencil/Editor** Icon. 

![Open desired form](/images/integrations/integrate-activecampaign/Open-desired-form-8-scaled.webp)

Once the **Editor** page opens, go to the **Integrations** tab, click the **Add New Integration** button & select ActiveCampaign Integration feed from the dropdown list. 

![Add new integration](/images/integrations/integrate-activecampaign/Add-new-integration-dropdown-1-scaled.webp)

Here, you will find a required field to set a name for your integration feed according to your preference.

Also, you must select the **ActiveCampaign List** from the dropdown where you want to send the submitted form data.

![Select ActiveCampaign list](/images/integrations/integrate-activecampaign/Selecting-active-campaign-list-scaled.webp)

Once you select the list, a pop-up page will appear with various settings options for configuring the ActiveCampaign.

**All the settings options mentioned in the screenshot below are briefly explained:**

* **Name:** From here, you can change the name anytime if needed.
* **ActiveCampaign List:** From here, you can change the ActiveCampaign List anytime if needed.
* **Map Fileds:** Use all the fields under this option to properly link your ActiveCampaign Fields with the Form Fields. Also, you can easily select the **Value** for the **Form Fields** according to the **ActiveCampaign Fields** by using the **Shortcode** button. 
* **Tags:** With this option, you can add tags to your ActiveCampaign contacts with a comma-separated list (e.g. new lead, WPPayForm, web source). Commas within a merge tag value will be created as a single tag.
* **Enable Dynamic Tag Input:** This option allows ActiveCampaign to add customized tags for specific contacts based on your submission values according to your set conditions.
* **Note:** You can write a note for the contacts.
* **Enable Instant Responder:** When this option is enabled, ActiveCampaign will send any instant responders set up when the contact is added to the list.
* **Enable send the last broadcast campaign:** When this option is enabled, ActiveCampaign will send the last campaign sent out to the list or the contact being added. 
* **Conditional Logics:** This option allows ActiveCampaign integration to function conditionally based on your submission values according to your set conditional logic/s. Also, here,  you can add as much conditional logic as you need by clicking the **+ Add More** button and delete any logic by clicking the **Trash Icon** if needed. To learn more, read our [conditional logic guide](/use-conditional-logic).
* **Enable This Feed:** Check this option, to ensure this integration feed remains enabled, and all the actions of this feed function properly.

![ActiveCampaign integration settings](/images/integrations/integrate-activecampaign/Add-New-Active-Campaign-Integration-Feed-page.webp)

After successful Integration, now you will see that your **ActiveCampaign Integration Feed** has been added here. 

You can modify your feed anytime by clicking the **Pencil Icon** and delete it by clicking the **Trash Icon**. 
Also, you can disable or enable this feed anytime by clicking the **Toggle** button if needed.

![Added ActiveCampaign Integration Feed](/images/integrations/integrate-activecampaign/Added-Active-Campaign-Intgration-Feed-scaled.webp)

## Preview of Integrated ActiveCampaign

Here, you can see the preview of the added contacts of ActiveCampaign through the Form entries that I set up during the integration.

First, go to the **Contacts** section from the left sidebar, open the **List** tab, and click on the **Desired List** you integrated into **Paymattic**.

![Contacts List in ActiveCampaign](/images/integrations/integrate-activecampaign/Contacts-List-from-Active-campaign-dashboard-scaled.webp)

And, you can see that **Contacts** are added automatically to the chosen **ActiveCampaign Contact List** through the **Paymattic** Form submission. 

![Preview of ActiveCampaign contact list](/images/integrations/integrate-activecampaign/Preview-of-Active-Campaign-contact-List.webp)

That's all you need to integrate ActiveCampaign with Paymattic! If you have any questions, concerns, or suggestions, please contact our [support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/).