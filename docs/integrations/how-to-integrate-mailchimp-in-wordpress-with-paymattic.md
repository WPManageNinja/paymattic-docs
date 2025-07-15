---
title: "How to Integrate Mailchimp in WordPress with Paymattic?"
category: "Integrations"
---

# How to Integrate Mailchimp in WordPress with Paymattic?

[Paymattic](https://paymattic.com/) integrates with [Mailchimp](https://mailchimp.com/) to automatically send contact information from your WordPress website to your Mailchimp account when a form is submitted. This article will guide you through integrating Mailchimp with Paymattic on your WordPress site.

## Enable Mailchimp Integration 

To enable the integration:

1. Go to **Integrations** from the **Paymattic Navbar**
2. Search for **Mailchimp** in the search bar
3. Click the **Settings Icon** on the right side of the Mailchimp module
4. Click the **Toggle** button to enable Mailchimp

![Mailchimp Settings Icon](/images/integrations/how-to-integrate-mailchimp-in-wordpress-with-paymattic/Mailchimps-Settings-Icon-scaled.webp)

Once enabled, you'll need to provide your **Mailchimp API Key**.

![Enable Mailchimp integration](/images/integrations/how-to-integrate-mailchimp-in-wordpress-with-paymattic/Enable-Mailchimp-integration-scaled.webp)

### Get the API Key from Mailchimp

To get your API key:

1. Log in to your [Mailchimp Account](https://mailchimp.com/)
2. Click your profile icon in the top right corner
3. Select **Profile**

![Profile icon in Mailchimp](/images/integrations/how-to-integrate-mailchimp-in-wordpress-with-paymattic/Profile-icon-scaled.webp)

4. Open the **Extras** dropdown
5. Select **API keys**

![Extras API keys menu](/images/integrations/how-to-integrate-mailchimp-in-wordpress-with-paymattic/Extras-API-kyes-scaled.webp)

6. Click **Create A Key**

![Create API Key button](/images/integrations/how-to-integrate-mailchimp-in-wordpress-with-paymattic/Create-a-Key-button.webp)

7. Enter a name for your API key
8. Click **Generate Key**

![Generate Key button](/images/integrations/how-to-integrate-mailchimp-in-wordpress-with-paymattic/Generate-Key-button.webp)

9. Copy your new API key using the **Copy to Clipboard** button

![Copy API Key](/images/integrations/how-to-integrate-mailchimp-in-wordpress-with-paymattic/Copy-API-Key.webp)

Then:

1. Return to the **Mailchimp Settings** page in Paymattic
2. Paste your API key into the **Mailchimp API Key** field
3. Click **Save Settings** to enable the integration

![Paste Mailchimp API key](/images/integrations/how-to-integrate-mailchimp-in-wordpress-with-paymattic/Paste-Mailchimp-API-key-scaled.webp)

## Integrate Mailchimp into Forms

To add Mailchimp to a specific form:

1. Go to **All Forms** from the **Paymattic Navbar**
2. Select the form where you want to add Mailchimp
3. Click the **Pencil/Editor Icon**

![Open desired form](/images/integrations/how-to-integrate-mailchimp-in-wordpress-with-paymattic/Open-desired-form-9-scaled.webp)

4. Go to the **Integrations** tab
5. Click **Add New Integration**
6. Select **Mailchimp Integration** from the dropdown

![Add new integration](/images/integrations/how-to-integrate-mailchimp-in-wordpress-with-paymattic/Add-new-integration-dropdown-Mailchimp-scaled.webp)

7. Set a name for your integration feed
8. Select the **Mailchimp List** where you want to send form data

![Name and List selection](/images/integrations/how-to-integrate-mailchimp-in-wordpress-with-paymattic/Name-List-of-Add-new-mailchimp-feed-page.webp)

### Configuration Options

The integration settings include:

- **Name**: Your integration feed name
- **List**: Target Mailchimp list for form submissions
- **Map Fields**: Link form fields to Mailchimp fields using the **Shortcode** button
- **Interest Group**: Map to Mailchimp interest groups
- **Tags**: Add comma-separated tags (e.g., "new lead, Paymattic, web source")
- **Dynamic Tags**: Enable custom tags based on submission values
- **Notes**: Add notes for contacts
- **Double Opt-in**: Enable email validation for new contacts
- **ReSubscription**: Re-add inactive or unsubscribed contacts to the active list
- **VIP Contact**: Mark contacts as VIP
- **Conditional Logic**: Set conditions for adding contacts. See our [conditional logic guide](/how-to-use-conditional-logic-in-form-fields-with-paymattic)
- **Enable Feed**: Activate/deactivate the integration

Click **Create Mailchimp Feed** to complete the setup.

![Mailchimp integration settings](/images/integrations/how-to-integrate-mailchimp-in-wordpress-with-paymattic/Add-New-Mailchimp-Integration-Feed-page.webp)

After successful integration, you can:
- Modify the feed using the **Pencil Icon**
- Delete it using the **Trash Icon**
- Enable/disable using the **Toggle** button

![Added Mailchimp Integration Feed](/images/integrations/how-to-integrate-mailchimp-in-wordpress-with-paymattic/Added-Mailchimp-Integration-Feed-scaled.webp)

## Preview of Integrated Mailchimp

To view your integrated contacts:

1. Open the **Audience** dropdown in Mailchimp
2. Click the **Contacts** tab

You'll see contacts automatically added from your Paymattic form submissions:

![Preview of Mailchimp contacts](/images/integrations/how-to-integrate-mailchimp-in-wordpress-with-paymattic/Preview-of-Mailchimp-scaled.webp)

That's all you need to integrate Mailchimp with Paymattic! If you have any questions, concerns, or suggestions, please contact our [support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/).