---
title: "How to Setup Email Notifications in Paymattic WordPress Plugin?"
category: "Email Notification Settings"
---

# How to Setup Email Notifications in Paymattic WordPress Plugin?

[Paymattic](https://paymattic.com/) allows you to configure email notifications for both users and administrators. Users can receive copies of their form submissions, while administrators can set up custom automated notifications.

:::warning Remember
You should configure any SMTP Plugin in your WordPress Site to ensure reliable email delivery without hassle.

We recommend using the [FluentSMTP](https://fluentsmtp.com/) plugin for smart, secure, fast, and free email delivery on WordPress sites. Refer to this [Documentation](https://fluentsmtp.com/docs/installing-fluent-smtp/) to learn how to install and activate FluentSMTP in WordPress.
:::

## Setting Up Email Notifications

To learn how you can set the email notifications, follow the steps with screenshots below – 

First, go to **All Forms** from the **Paymattic Navbar** and click the **Pencil/Editor** Icon of your **Desired Form** where you want to set up the email notifications.

![Access form editor](/images/email-notification-settings/how-to-setup-email-notifications-in-paymattic-wordpress-plugin/EditPencil-icon-of-a-specific-form-scaled.webp)

Once the **Editor** page opens, go to the Email tab and click the **+ Add New Notification** button.

![Add new email notification](/images/email-notification-settings/how-to-setup-email-notifications-in-paymattic-wordpress-plugin/Add-New-Notification-button-scaled.webp)

Now, the **Email Notification** page will appear with all necessary settings options for adding the email notification.

Once the setup is done, finally, click the **Update** button. And, your **Email Notification** will be enabled for this specific form!

![Email notification settings](/images/email-notification-settings/how-to-setup-email-notifications-in-paymattic-wordpress-plugin/Full-Settings-page-of-Email-Notification-.webp)

**All the settings options mentioned above are briefly explained below:**

**A. Notification Title**: Add a name for this Email Notification so that you can find it later easily. For example, I am naming it  **Customer Email Notification**.
**B. Reply To**: In this field, specify the email address where you want to send your email notifications. 

For example, if you want to send notifications to your manager, simply type the email address of your manager in this field and your manager will receive an email notification after each form submission.

Also, you can use the Shortcode options to collect dynamic information by clicking the **Shortcode** Icon.

**C. Email Subject**: Here, you can specify an email address for users to reply to the notification, ensuring you receive their responses. If you leave this field blank, the user reply will be sent to the Default Email you set for your site. 

**D. Email Body**: Now, write the body text of your email notification as per your needs in this field. You can also, write the message in **custom HTML** in the **Text** tab. Plus, you can add different dynamic data in the email body by clicking the **Shortcode Icon**.

**E. Conditional Logic:** If you want to apply any conditional logic to determine when your email notifications will be sent to the users, you can **enable the Conditional logic** option by clicking the **Toggle** button. 


**How to Use Conditional Logic**

In the **“Parameter”** field (first field), select an **input field** that needs to be **matched with a value** provided in the **“Value” field** (last field) and **set a condition** in the **“Condition” field** (middle field). The parameter will trigger the action if the condition is met.

Plus, you can choose whether **All** or **Any** one of your conditional logic should match to trigger the actions.

>[!Note]
>For example, I chose **“Customer Email”** as a parameter, **“Contains”** as conditions, and entered **“@gmail.com”** and **“@yahoo.com”** as the respective values. And, select the **“Any”** option for the conditional match. As a result, only users who meet the conditions of having @gmail.com or @yahoo.com in their submission email address will get the email notification.

Additionally, you can add as many conditions as you want by clicking the + Add More button.
Also, you can delete any conditions by clicking the **Trash** Icon anytime if needed.

![Conditional logic settings](/images/email-notification-settings/how-to-setup-email-notifications-in-paymattic-wordpress-plugin/Conditional-Logics.webp)

**G. When to Say**

Here you will get some pre-built conditions to send the email according to your wish. There are three available options:

**After Form Submission:**
When this option is selected, the email will be sent immediately after the form has been submitted.

**On Payment Success:**
If you want to send an email after the payment has been successfully submitted, then you can enable this option.

**On Payment Failed:**
If you want to send an email after the payment process fails, then you can enable this option.

**Manual Notification:**
You can also send email notifications manually for a specific form’s entries according to your needs. Let’s have a look at how this works –

First, go to the **All Forms** from the **Paymattic Navbar** and click the **Pencil/Edit** icon of your desired form where you already add the Email Notification.

![Access form editor](/images/email-notification-settings/how-to-setup-email-notifications-in-paymattic-wordpress-plugin/EditPencil-icon-of-a-specific-form-scaled.webp)

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