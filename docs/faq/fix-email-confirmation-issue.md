---
title: "Fix Not Sending Email Confirmations Issue"
category: "FAQ"
---

# Fix Not Sending Email Confirmations Issue

We often face queries that Paymattic is not sending email confirmations to admin. However, the issue is not related to Paymattic and it’s very simple to fix the WordPress email not sending issue. Several factors can contribute to email deliverability issues. Follow the article carefully to solve email delivery issues with Paymattic notification emails.


This guide covers the most common solutions for email confirmation issues in Paymattic:

1. Verifying Email Notification Settings
2. Checking Submission Activity Logs
3. Testing Server Email Functionality
4. Setting up SMTP for Reliable Delivery

## 1. Verify Email Notification Settings

First, ensure you've properly configured the **Email Notification Feed** in Paymattic:

1. Go to **All Forms** in the Paymattic navigation
2. Click the **Pencil/Edit** icon for your form

![EditPencil icon](/images/faq/fix-email-confirmation-issue/EditPencil-icon-of-a-specific-form-2-scaled.webp)

3. Select the **Email** tab
4. Verify your notification feeds are enabled (green toggle)

![Email notification feed](/images/faq/fix-email-confirmation-issue/enabled-email-notification-feed-scaled.webp)

:::tip
For detailed setup instructions, see our [Email Notifications guide](/setup-email-notifications).
:::

## 2. Check Submission Activity Logs

### Successful Delivery
1. Go to **Entries** of the particular form
2. Select an **entry** to check the submission activity log
3. Look for "**Email Notification broadcasted to**" message
   - This confirms Paymattic successfully triggered the email

![Submission Activity Events](/images/faq/fix-email-confirmation-issue/add1-1.png)

### Failed Delivery
If the email failed to send, you'll see an error message:

![error message](/images/faq/fix-email-confirmation-issue/add2-1.png)

## 3. Test Server Email Functionality

If there is any issue with your server configuration it will show you the message “**unable to send email error in API log**,” and to fix the issue you should test the email sending function on your server. 

1. Install and activate the **Check & Log Email** plugin
2. Go to **Check & Log Email** in WordPress dashboard
3. Enter a test email address
4. Send test email

![Test email](/images/faq/fix-email-confirmation-issue/Test-email-1024x663.png)

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