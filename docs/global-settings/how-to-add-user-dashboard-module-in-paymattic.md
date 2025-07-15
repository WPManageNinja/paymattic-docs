---
title: "How to Add User Dashboard Module in Paymattic?"
category: "Global Settings"
---

# How to Add User Dashboard Module in Paymattic?

[Paymattic](https://paymattic.com/)'s User Dashboard allows customers to manage their payments and view submission history directly from WordPress. This guide explains how to set up and configure the User Dashboard.

:::warning
The User Dashboard is a premium feature available only in [Paymattic Pro](/# 1-toc-title).
:::

## Enable User Dashboard

1. Go to **Settings** from the **Paymattic Navbar**
2. Open the **User Dashboard** tab
3. Click **Enable User Dashboard Module**

![Enable dashboard module](/images/global-settings/how-to-add-user-dashboard-module-in-paymattic/Enable-User-Dashbaord-Module-button.png)

After enabling, configure the dashboard settings and click **Save Settings**.

![Dashboard settings](/images/global-settings/how-to-add-user-dashboard-module-in-paymattic/User-dashboard-settings-page-scaled.webp)

## Configuration Options

### User Permissions

Control what users can do in their dashboard:

1. Select user roles by checking appropriate boxes
2. Use **Check All** to enable all permissions
3. Enable **Cancel Subscription** if users should manage their own subscriptions

![User permissions](/images/global-settings/how-to-add-user-dashboard-module-in-paymattic/Paymattic-user.webp)

### Dashboard Page

Choose where to display the dashboard:

- Use the auto-created **Paymattic Dashboard** page (recommended)
- Or select a custom page from the dropdown

![Dashboard page selection](/images/global-settings/how-to-add-user-dashboard-module-in-paymattic/User-Dashboard-Page-1.webp)

### Email Notifications

Configure notification settings:

1. Enable notifications for customers and/or admin
2. Click the **Settings** icon to customize templates
3. See our [subscription cancellation notification guide](/how-to-enable-email-notification-for-subscription-cancel) for details

![Email settings](/images/global-settings/how-to-add-user-dashboard-module-in-paymattic/Email-Notification-Settings.webp)

## User Registration Setup

### Create Registration Form

1. Go to **All Forms**
2. Create a new form or edit an existing one
   - See guides for [creating from scratch](/how-to-create-a-form-from-scratch-with-paymattic) or [using templates](/simple-form-templates)

![Access form editor](/images/global-settings/how-to-add-user-dashboard-module-in-paymattic/Open-desired-forms-scaled.webp)

### Enable User Registration

1. Go to the **Integrations** tab

![Integrations tab](/images/global-settings/how-to-add-user-dashboard-module-in-paymattic/Integration-tab.webp)

2. Click **Configure Modules**

![Configure modules](/images/global-settings/how-to-add-user-dashboard-module-in-paymattic/Configure-Modules-button-scaled.webp)

3. Find **User Registration** module
4. Click its **Settings Icon**

![User registration module](/images/global-settings/how-to-add-user-dashboard-module-in-paymattic/Wp-User-Registration-module-1-scaled.webp)

5. Enable the module

![Enable registration](/images/global-settings/how-to-add-user-dashboard-module-in-paymattic/Enable-User-registration-module-scaled.webp)

### Add Registration to Form

1. Return to form editor
2. Go to **Integrations**
3. Click **Add New Integration**
4. Select **User Registration**

![Add registration integration](/images/global-settings/how-to-add-user-dashboard-module-in-paymattic/Add-new-integration-drop-down-scaled.webp)

Configure the integration:

- **Name**: Feed name for reference
- **Email Address**: Select email field
- **Username**: Use `{input.customer_email}` shortcode
- **Full Name**: Use `{input.customer_name}` shortcode
- **Password**: Use `{input.password}` shortcode
- **User Role**: Set default role
- **User Meta**: Add custom user data
- **Auto Login**: Enable for immediate access
- **Welcome Email**: Enable WordPress welcome email
- **Duplicate Prevention**: Prevent duplicate registrations
- **Conditional Logic**: Add submission conditions
- **Enable**: Control feed activation

![Registration settings](/images/global-settings/how-to-add-user-dashboard-module-in-paymattic/Add-new-user-registration-integration-feed-Popup-page.webp)

After setup, you can:
- Edit using the **Pencil Icon**
- Delete using the **Trash Icon**
- Toggle activation status

![Manage registration feed](/images/global-settings/how-to-add-user-dashboard-module-in-paymattic/Wp-user-registration-feed-integrated-scaled.webp)

### Configure Form Submission

1. Go to form **Settings**
2. Open **Confirmation** tab
3. Set **Confirmation Type** to "To a Page"
4. Select **Paymattic Dashboard** as redirect

:::tip Display Payment Receipt
Add `[wppayform_receipt]` shortcode to your dashboard page to show payment receipts.
:::

![Confirmation settings](/images/global-settings/how-to-add-user-dashboard-module-in-paymattic/Confirmation-Settings-scaled.webp)

## Display the Dashboard

1. Copy your registration form shortcode

![Copy shortcode](/images/global-settings/how-to-add-user-dashboard-module-in-paymattic/Copy-the-chortcode-of-the-desired-form-scaled.webp)

2. Paste it on your dashboard page

![Add to page](/images/global-settings/how-to-add-user-dashboard-module-in-paymattic/Paste-the-shortcode-on-Paymattic-Dashboard-Page-scaled.webp)

### Final Result

Registration form:

![Registration form](/images/global-settings/how-to-add-user-dashboard-module-in-paymattic/Preview-of-User-Registration-Form.webp)

User dashboard:

![User dashboard](/images/global-settings/how-to-add-user-dashboard-module-in-paymattic/Preview-of-User-Dashboard.webp)

:::tip Need Help?
If you have any questions, concerns, or suggestions, please [contact our support team](https://wpmanageninja.com/support-tickets/).
:::