---
title: "How to Integrate LifterLMS in WordPress with Paymattic?"
category: "Learning Management System (LMS) Integrations"
---

[Paymattic](https://paymattic.com/) integrates with [LifterLMS](http://www.lifterlms.com/), a WordPress learning management plugin, to automate course enrollment, user registration, and welcome email notifications. This article will guide you through integrating LifterLMS with Paymattic on your WordPress site.

:::warning
LifterLMS integration is a Premium Feature of the Paymattic Plugin. You need Paymattic Pro to use this integration.
:::

## Prerequisites

Before starting the integration, ensure you have:
- Installed and activated the LifterLMS plugin on your WordPress site
- Set up at least one course in LifterLMS

## Enable LifterLMS Integration

To enable the integration:

1. Go to **Integrations** from the **Paymattic Navbar**
2. Search for **LifterLMS** in the search bar
3. Click the **Settings Icon** on the right side of the LifterLMS module
4. Click the **Toggle** button to enable the integration

![LifterLMS Settings Icon](/images/lms-integrations/how-to-integrate-lifterlms-in-wordpress-with-paymattic/LifterLMS-Settings-Icon-scaled.webp)

![Enable LifterLMS integration](/images/lms-integrations/how-to-integrate-lifterlms-in-wordpress-with-paymattic/Enabled-LifterLMS-integration-scaled.webp)

## Integrate LifterLMS into Forms

To add LifterLMS to a specific form:

1. Go to **All Forms** from the **Paymattic Navbar**
2. Select the form where you want to add LifterLMS
3. Click the **Pencil/Editor Icon**

![Open desired form](/images/lms-integrations/how-to-integrate-lifterlms-in-wordpress-with-paymattic/Open-desired-form-2-scaled.webp)

4. Go to the **Integrations** tab
5. Click **Add New Integration**
6. Select **LifterLMS Integration** from the dropdown

![Add new integration](/images/lms-integrations/how-to-integrate-lifterlms-in-wordpress-with-paymattic/Add-new-integration-dropdown-scaled.webp)

### Configuration Options

The integration settings include:

- **Feed Name**: Required name for your integration feed
- **LifterLMS Course**: Select the course for form submissions
- **Map Fields**: Link form fields to LifterLMS user registration fields using the **Shortcode** button
- **Auto Login**: Enable to automatically log in users after registration/purchase
- **Welcome Email**: Send the default WordPress welcome email to new users
- **Refund Handling**: Remove users from courses if they refund or cancel subscriptions
- **Payment Success**: Only enroll users after successful payment
- **Conditional Logic**: Set conditions for enrollment. See our [conditional logic guide](/how-to-use-conditional-logic-in-form-fields-with-paymattic)
- **Enable Feed**: Activate/deactivate the integration

Click **Create LifterLMS Feed** to complete the setup.

![LifterLMS integration settings](/images/lms-integrations/how-to-integrate-lifterlms-in-wordpress-with-paymattic/Add-New-LifterLMS-Integration-Feed-page.webp)

After successful integration, you can:
- Modify the feed using the **Pencil Icon**
- Delete it using the **Trash Icon**
- Enable/disable using the **Toggle** button

![Added LifterLMS Integration Feed](/images/lms-integrations/how-to-integrate-lifterlms-in-wordpress-with-paymattic/Added-LifterLMS-Integration-Feed-scaled.webp)

## Preview of Integrated LifterLMS

Here's an example of students automatically enrolled through Paymattic form submissions:

![Preview of LifterLMS enrollments](/images/lms-integrations/how-to-integrate-lifterlms-in-wordpress-with-paymattic/Preview-of-LifterLMS-scaled.webp)

That's all you need to integrate LifterLMS with Paymattic! If you have any questions, concerns, or suggestions, please contact our [support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/).