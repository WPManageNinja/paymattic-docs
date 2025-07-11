---
title: "How to Fix Not Sending Email Confirmations Issue in WordPress?"
category: "FAQ"
---

:::warning Common Issue
Email delivery issues are often not related to Paymattic itself but rather to WordPress or server configuration. This guide will help you identify and fix the root cause.
:::

This guide covers the most common solutions for email confirmation issues in Paymattic:

1. Verifying Email Notification Settings
2. Checking Submission Activity Logs
3. Testing Server Email Functionality
4. Setting up SMTP for Reliable Delivery

## 1. Verify Email Notification Settings

First, ensure you've properly configured the **Email Notification Feed** in Paymattic:

1. Go to **All Forms** in the Paymattic navigation
2. Click the **Pencil/Edit** icon for your form
3. Select the **Email** tab
4. Verify your notification feeds are enabled (green toggle)

![EditPencil icon](/images/faq/how-to-fix-not-sending-email-confirmations-issue-in-wordpress-with-paymattic/EditPencil-icon-of-a-specific-form-2-scaled.webp)

![Email notification feed](/images/faq/how-to-fix-not-sending-email-confirmations-issue-in-wordpress-with-paymattic/enabled-email-notification-feed-scaled.webp)

:::tip
For detailed setup instructions, see our [Email Notifications guide](../email-notification-settings/how-to-setup-email-notifications-in-paymattic-wordpress-plugin.md).
:::

## 2. Check Submission Activity Logs

### Successful Delivery
1. Go to form **Entries**
2. Select an entry
3. Look for "**Email Notification broadcasted to**" message
   - This confirms Paymattic successfully triggered the email

![Submission Activity Events](/images/faq/how-to-fix-not-sending-email-confirmations-issue-in-wordpress-with-paymattic/add1-1.png)

### Failed Delivery
If the email failed to send, you'll see an error message:

![error message](/images/faq/how-to-fix-not-sending-email-confirmations-issue-in-wordpress-with-paymattic/add2-1.png)

## 3. Test Server Email Functionality

If you see "**unable to send email error in API log**", test your server's email capability:

1. Install and activate the **Check & Log Email** plugin
2. Go to **Check & Log Email** in WordPress dashboard
3. Enter a test email address
4. Send test email

![Test email](/images/faq/how-to-fix-not-sending-email-confirmations-issue-in-wordpress-with-paymattic/Test-email-1024x663.png)

:::warning Important
- Check spam/junk folders for test emails
- If test fails, contact your hosting provider
- Success means WordPress can send emails from your server
:::

## 4. Set Up SMTP for Reliable Delivery

:::tip Recommended Solution
We strongly recommend using SMTP for improved email deliverability. This ensures emails reach recipients' inboxes reliably.
:::

### SMTP Options
- Amazon SES
- MailGun
- SendGrid
- Hosting provider's SMTP

### Recommended SMTP Plugin
We recommend [Fluent SMTP](https://wordpress.org/plugins/fluent-smtp/) because it:
- Is completely free
- Handles real-time delivery
- Includes automatic retry for blocked emails
- Supports multiple SMTP providers
- Maintains optimal performance

Watch our setup guide:
https://youtu.be/Je0OPk1NnjI 

:::tip Need Help?
If you have any questions or need assistance, please [contact our support team](https://wpmanageninja.com/support-tickets/).
:::