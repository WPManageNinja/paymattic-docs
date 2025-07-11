---
title: "How to Integrate FluentCRM in WordPress with Paymattic"
category: "Integrations"
---

[Paymattic](https://paymattic.com/) integrates with [FluentCRM](http://www.fluentcrm.com/), a WordPress-based self-hosted email marketing automation plugin that helps you add new prospects to your FluentCRM contact list when a form is submitted. This article will guide you through integrating **FluentCRM** with **Paymattic** on your WordPress site.

## Prerequisites

Before starting the integration, ensure you have:
- Installed and activated the FluentCRM plugin
- Either the Free or PRO version (see the [installation guide](https://fluentcrm.com/docs/how-to-install-upgrade-and-activate-license/))

![Install and activate FluentCRM](/images/integrations/how-to-integrate-fluentcrm-in-wordpress-with-paymattic/Install-activate-FluentCRM-scaled.webp)

## Enable FluentCRM Integration

To enable the integration:

1. Go to **Integrations** from the **Paymattic Navbar**
2. Search for **FluentCRM** in the search bar
3. Click the **Settings Icon** on the right side of the FluentCRM module
4. Click the **Toggle** button to enable the integration

![FluentCRM Settings Icon](/images/integrations/how-to-integrate-fluentcrm-in-wordpress-with-paymattic/Fluent-CRMs-Settings-Icon-1-scaled.webp)

![Enable FluentCRM integration](/images/integrations/how-to-integrate-fluentcrm-in-wordpress-with-paymattic/Enabled-Fluent-CRM-integration-scaled.webp)

## Integrate FluentCRM into Forms

To add FluentCRM to a specific form:

1. Go to **All Forms** from the **Paymattic Navbar**
2. Select the form where you want to add FluentCRM
3. Click the **Pencil/Editor Icon**

![Open desired form](/images/integrations/how-to-integrate-fluentcrm-in-wordpress-with-paymattic/Open-desired-form-2-scaled.webp)

4. Go to the **Integrations** tab
5. Click **Add New Integration**
6. Select **FluentCRM Integration** from the dropdown

![Add new integration](/images/integrations/how-to-integrate-fluentcrm-in-wordpress-with-paymattic/Add-new-integration-dropdown-fluent-crm-scaled.webp)

### Configuration Options

The integration settings include:

- **Feed Name**: Required name for your integration feed
- **Primary Fields**: Map form fields to FluentCRM fields using the **Shortcode** button
- **Other Fields**: Add additional FluentCRM fields
  - Click **+Add More** to add fields
  - Click the **Trash Icon** to remove fields
- **Contact Tags**: Add tags to your FluentCRM contacts
- **Dynamic Tags**: Enable custom tags based on submission values
- **Skip Duplicates**: Prevent adding contacts that already exist
- **Double Opt-In**: Enable email validation for new contacts
- **Conditional Logic**: Set conditions for adding contacts. See our [conditional logic guide](/how-to-use-conditional-logic-in-form-fields-with-paymattic)
- **Enable Feed**: Activate/deactivate the integration

Click **Create FluentCRM Feed** to complete the setup.

![FluentCRM integration settings](/images/integrations/how-to-integrate-fluentcrm-in-wordpress-with-paymattic/Add-New-FluentCRM-Integration-Feed-page.webp)

After successful integration, you can:
- Modify the feed using the **Pencil Icon**
- Delete it using the **Trash Icon**
- Enable/disable using the **Toggle** button

![Added FluentCRM Integration Feed](/images/integrations/how-to-integrate-fluentcrm-in-wordpress-with-paymattic/Added-Fluent-CRM-Integration-Feed-scaled.webp)

## Preview of Integrated FluentCRM

To view your integrated contacts:

1. Go to **Contacts** in FluentCRM
2. Open the **List** tab
3. Click on your integrated list

![Pro user list in FluentCRM](/images/integrations/how-to-integrate-fluentcrm-in-wordpress-with-paymattic/Pro-uder-list-from-FluentCRM-scaled.webp)

You'll see contacts automatically added from your Paymattic form submissions:

![Preview of integrated FluentCRM](/images/integrations/how-to-integrate-fluentcrm-in-wordpress-with-paymattic/Preview-of-integrated-FluentCRM-scaled.webp)

That's all you need to integrate FluentCRM with Paymattic! If you have any questions, concerns, or suggestions, please contact our [support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/).