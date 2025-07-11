---
title: "How to Create a User Registration Form with Paymattic in WordPress?"
category: "Integrations"
---

[Paymattic](https://paymattic.com/) introduces another impressive module to make the user registration process fast and simple. You can make forms that create user accounts in WordPress with the WP User Registration module. This article will guide you through integrating **WP User Registration** with **Paymattic** on your **WordPress** site.

:::warning
WP User Registration is a Premium Feature of the Paymattic Plugin. You need Paymattic Pro to use this integration.
:::

## Enable WP User Registration Integration 

To enable WP User Registration integration, follow these steps:

1. Go to **Integrations** from the **Paymattic Navbar** to find the **WP User Registration** integration module
2. Click the **Settings Icon** on the right side of the WP User Registration module
3. Click the **Toggle** button to enable WP User Registration

![Enable WP User Registration module](/images/integrations/how-to-create-a-user-registration-form-with-paymattic-in-wordpress/Wp-User-Registration-module-2-scaled.webp)

![Enable the integration](/images/integrations/how-to-create-a-user-registration-form-with-paymattic-in-wordpress/Enable-User-registration-module-1-scaled.webp)

## Integrate WP User Registration into Paymattic Forms

To integrate WP User Registration into a specific form, follow these steps:

1. Go to **All Forms** from the **Paymattic Navbar**
2. Select the form where you want to integrate WP User Registration
3. Click the **Pencil/Editor Icon**

![Open desired form](/images/integrations/how-to-create-a-user-registration-form-with-paymattic-in-wordpress/Open-desired-forms-scaled.webp)

4. Once the **Editor** page opens, go to the **Integrations** tab

![Integration tab](/images/integrations/how-to-create-a-user-registration-form-with-paymattic-in-wordpress/Integration-tab.webp)

5. Click the **Add New Integration** button and select **User Registration Integration** feed from the dropdown list

![Add new integration](/images/integrations/how-to-create-a-user-registration-form-with-paymattic-in-wordpress/Add-new-integration-drop-down-scaled.webp)

### Configuration Options

A pop-up page will appear with various settings options for configuring User Registration:

- **Name**: Set a name for your integration feed
- **Email Address**: Select the form field for the user's email address
- **User Name**: Set using the `{input.customer_email}` shortcode (customer email will be the username)
- **Full Name**: Use the `{input.customer_name}` shortcode
- **Password**: Use the `{input.password}` shortcode
- **Default User Role**: Select a default WordPress user role
- **User Meta**: Add custom User Meta Key and Meta Value pairs if needed
- **Auto Login**: Enable to automatically log in users after registration
- **Welcome Email**: Option to send the default WordPress welcome email
- **Duplicate Prevention**: Prevent form submission for existing email addresses
- **Conditional Logic**: Set conditions for registration. See our [conditional logic guide](/how-to-use-conditional-logic-in-form-fields-with-paymattic)
- **Logged Out Only**: Enable to run this feed only for logged-out visitors with unregistered emails

Once configured, click the **Create User Registration Feed** button to complete the integration.

![User registration configuration](/images/integrations/how-to-create-a-user-registration-form-with-paymattic-in-wordpress/Add-new-user-registration-integration-feed-Popup-page.webp)

After successful integration, you'll see your User Registration Integration Feed in the list. You can:
- Modify the feed using the **Pencil Icon**
- Delete it using the **Trash Icon**
- Enable/disable the feed using the **Toggle** button

![WP user registration feed integrated](/images/integrations/how-to-create-a-user-registration-form-with-paymattic-in-wordpress/Wp-user-registration-feed-integrated-scaled.webp)

## Preview of Integrated WP User Registration

Below is an example of automatically added users in WordPress through form entries created during integration:

![Preview of User Registration](/images/integrations/how-to-create-a-user-registration-form-with-paymattic-in-wordpress/Preview-of-User-Registration-scaled.webp)

That's all you need to integrate WP User Registration with Paymattic! If you have any questions, concerns, or suggestions, please contact our [support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/).