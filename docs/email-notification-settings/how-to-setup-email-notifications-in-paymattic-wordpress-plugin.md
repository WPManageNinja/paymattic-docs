---
title: "How to Setup Email Notifications in Paymattic WordPress Plugin?"
category: "Email Notification Settings"
---

# How to Setup Email Notifications in Paymattic WordPress Plugin?

[Paymattic](https://paymattic.com/) allows you to configure email notifications for both users and administrators. Users can receive copies of their form submissions, while administrators can set up custom automated notifications.

:::warning
To ensure reliable email delivery, you should configure an SMTP plugin on your WordPress site. We recommend using [FluentSMTP](https://fluentsmtp.com/) - a smart, secure, and free email delivery solution. See the [FluentSMTP installation guide](https://fluentsmtp.com/docs/installing-fluent-smtp/) for setup instructions.
:::

## Setting Up Email Notifications

To configure email notifications:

1. Go to **All Forms** from the **Paymattic Navbar**
2. Click the **Pencil/Editor Icon** for your target form

![Access form editor](/images/email-notification-settings/how-to-setup-email-notifications-in-paymattic-wordpress-plugin/EditPencil-icon-of-a-specific-form-scaled.webp)

3. Go to the **Email** tab
4. Click **Add New Notification**

![Add new email notification](/images/email-notification-settings/how-to-setup-email-notifications-in-paymattic-wordpress-plugin/Add-New-Notification-button-scaled.webp)

Configure the notification settings and click **Update** to save your changes.

![Email notification settings](/images/email-notification-settings/how-to-setup-email-notifications-in-paymattic-wordpress-plugin/Full-Settings-page-of-Email-Notification-.webp)

### Configuration Options

#### Basic Settings

- **Notification Title**: Name your notification for easy reference (e.g., "Customer Email Notification")
- **Email To**: Recipient email address(es)
  - Use direct email addresses for specific recipients
  - Use shortcodes for dynamic recipients (click the Shortcode Icon)
- **Reply To**: Optional email address for user responses
  - If empty, replies go to your site's default email
- **Email Subject**: Subject line for the notification
- **Email Body**: 
  - Write your message in visual or HTML mode
  - Add dynamic data using the Shortcode Icon
  - Supports custom HTML in the Text tab

#### Conditional Logic

Enable conditional sending based on form field values:

1. Click the **Toggle** button to enable
2. Configure your conditions:
   - **Parameter**: Select the form field to check
   - **Condition**: Choose the comparison type
   - **Value**: Set the target value
3. Choose **All** or **Any** for multiple conditions
4. Add more conditions with the **+ Add More** button

Example: Send only to Gmail or Yahoo users:
- Parameter: "Customer Email"
- Condition: "Contains"
- Values: "@gmail.com" or "@yahoo.com"
- Match: "Any"

![Conditional logic settings](/images/email-notification-settings/how-to-setup-email-notifications-in-paymattic-wordpress-plugin/Conditional-Logics.webp)

#### Trigger Options

Choose when to send the notification:

- **After Form Submission**: Send immediately after submission
- **On Payment Success**: Send after successful payment
- **On Payment Failed**: Send when payment fails
- **After Subscription Cancel**: Send when subscription is canceled
- **Manual**: Send notifications manually for specific entries

##### Manual Notification Process

1. Go to **All Forms** and open your form
2. Click the **Entries** tab
3. Click **View Details** for the target entry
4. Click **Send Email Notification Manually**
5. Select:
   - Which notification to send
   - Default or custom recipient
6. Click **Send this notification**

![Manual notification process](/images/email-notification-settings/how-to-setup-email-notifications-in-paymattic-wordpress-plugin/Send-notification-pop-up-page.webp)

#### Advanced Settings

Configure sender details and additional recipients:

- **From Name**: Sender's display name
- **From Email**: Sender's email address (supports shortcodes)
- **CC/BCC**: Additional recipients (comma-separated)

![Advanced email settings](/images/email-notification-settings/how-to-setup-email-notifications-in-paymattic-wordpress-plugin/Advanced-Settings.webp)

After setup, you can:
- Enable/disable using the **Toggle** button
- Edit using the **Pencil Icon**
- Delete using the **Trash Icon**

![Customer notification preview](/images/email-notification-settings/how-to-setup-email-notifications-in-paymattic-wordpress-plugin/Preview-of-added-customer-email-notification-scaled.webp)

## Admin Notifications

Each form includes a pre-configured admin notification. To use it:

1. Go to the **Email** tab
2. Enable the admin notification using the **Toggle** button
3. Click the **Edit/Pencil Icon** to customize settings

:::warning
Always use the `{wp:admin_email}` shortcode in the **Email To** field for admin notifications.
:::

![Admin notification settings](/images/email-notification-settings/how-to-setup-email-notifications-in-paymattic-wordpress-plugin/Pre-built-Admin-Email-Notification-scaled.webp)

:::tip Need Help?
If you have any questions, concerns, or suggestions, please [contact our support team](https://wpmanageninja.com/support-tickets/).
:::