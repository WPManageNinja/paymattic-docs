---
title: "How to Integrate ActiveCampaign in WordPress with Paymattic?"
category: "Integrations"
---

# How to Integrate ActiveCampaign in WordPress with Paymattic?

[Paymattic](https://paymattic.com/) integrates with [ActiveCampaign](https://www.activecampaign.com/), a marketing automation tool that helps you collect customer information and automatically add it to your ActiveCampaign list. This article will guide you through integrating **ActiveCampaign** with **Paymattic** on your **WordPress** site.

:::warning
ActiveCampaign integration is a Premium Feature of the Paymattic Plugin. You need Paymattic Pro to use this integration.
:::

## Enable ActiveCampaign Integration 

To enable ActiveCampaign integration, follow these steps:

1. Go to **Integrations** from the **Paymattic Navbar**
2. Search for **ActiveCampaign** in the search bar
3. Click the **Settings Icon** on the right side of the ActiveCampaign module
4. Click the **Toggle** button to enable ActiveCampaign

![ActiveCampaign Settings Icon](/images/integrations/how-to-integrate-activecampaign-in-wordpress-with-paymattic/Active-Campaigns-Setting-Icon-scaled.webp)

Once enabled, you'll need to provide your **ActiveCampaign API URL** and **API Key**.

![Enable ActiveCampaign Integration](/images/integrations/how-to-integrate-activecampaign-in-wordpress-with-paymattic/Enable-Active-Campaign-Integration-scaled.webp)

### Get the ActiveCampaign API URL and API Key

To get your API credentials:

1. Log in to your [ActiveCampaign Account](https://www.activecampaign.com/)
2. Go to **Settings** from the left sidebar
3. Open the **Developer** tab
4. Copy your API URL and API Key using the provided copy buttons

![Settings tab in ActiveCampaign](/images/integrations/how-to-integrate-activecampaign-in-wordpress-with-paymattic/Settings-tab-of-Active-Campaign-scaled.webp)

![Copy ActiveCampaign API credentials](/images/integrations/how-to-integrate-activecampaign-in-wordpress-with-paymattic/Copy-Active-Campaign-API-URL-Key-scaled.webp)

Then:

1. Return to the **ActiveCampaign API Settings** page in Paymattic
2. Paste your API URL and API Key into the respective fields
3. Click **Save Settings** to enable the integration

![Paste API credentials](/images/integrations/how-to-integrate-activecampaign-in-wordpress-with-paymattic/Paste-the-API-URL-Key-scaled.webp)

## Integrate ActiveCampaign into Forms

To add ActiveCampaign integration to a specific form:

1. Go to **All Forms** from the **Paymattic Navbar**
2. Select the form where you want to add ActiveCampaign
3. Click the **Pencil/Editor Icon**

![Open desired form](/images/integrations/how-to-integrate-activecampaign-in-wordpress-with-paymattic/Open-desired-form-8-scaled.webp)

4. Go to the **Integrations** tab
5. Click **Add New Integration**
6. Select **ActiveCampaign Integration** from the dropdown

![Add new integration](/images/integrations/how-to-integrate-activecampaign-in-wordpress-with-paymattic/Add-new-integration-dropdown-1-scaled.webp)

7. Set a name for your integration feed
8. Select the **ActiveCampaign List** where you want to send form data

![Select ActiveCampaign list](/images/integrations/how-to-integrate-activecampaign-in-wordpress-with-paymattic/Selecting-active-campaign-list-scaled.webp)

### Configuration Options

The integration settings include:

- **Name**: Your integration feed name
- **ActiveCampaign List**: Target list for form submissions
- **Map Fields**: Link form fields to ActiveCampaign fields using the **Shortcode** button
- **Tags**: Add comma-separated tags (e.g., "new lead, WPPayForm, web source")
- **Dynamic Tags**: Enable custom tags based on submission values
- **Note**: Add a note for the contacts
- **Instant Responder**: Enable automated responses for new contacts
- **Last Broadcast**: Send the last campaign to new contacts
- **Conditional Logic**: Set conditions for the integration. See our [conditional logic guide](/how-to-use-conditional-logic-in-form-fields-with-paymattic)
- **Enable Feed**: Activate/deactivate the integration

Click **Create ActiveCampaign Feed** to complete the setup.

![ActiveCampaign integration settings](/images/integrations/how-to-integrate-activecampaign-in-wordpress-with-paymattic/Add-New-Active-Campaign-Integration-Feed-page.webp)

After successful integration, you can:
- Modify the feed using the **Pencil Icon**
- Delete it using the **Trash Icon**
- Enable/disable using the **Toggle** button

![Added ActiveCampaign Integration Feed](/images/integrations/how-to-integrate-activecampaign-in-wordpress-with-paymattic/Added-Active-Campaign-Intgration-Feed-scaled.webp)

## Preview of Integrated ActiveCampaign

To view your integrated contacts:

1. Go to **Contacts** in ActiveCampaign
2. Open the **List** tab
3. Click on your integrated list

![Contacts List in ActiveCampaign](/images/integrations/how-to-integrate-activecampaign-in-wordpress-with-paymattic/Contacts-List-from-Active-campaign-dashboard-scaled.webp)

You'll see contacts automatically added from your Paymattic form submissions:

![Preview of ActiveCampaign contact list](/images/integrations/how-to-integrate-activecampaign-in-wordpress-with-paymattic/Preview-of-Active-Campaign-contact-List.webp)

That's all you need to integrate ActiveCampaign with Paymattic! If you have any questions, concerns, or suggestions, please contact our [support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/).