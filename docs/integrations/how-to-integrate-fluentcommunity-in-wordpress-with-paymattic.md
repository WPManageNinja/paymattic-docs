---
title: "How to Integrate FluentCommunity in WordPress with Paymattic "
category: "Integrations"
---
[FluentCommunity](https://fluentcommunity.co/) integrates with [Paymattic](https://paymattic.com/), allowing you to **collect payments** and **add members** from the **Paid Course** and **VIP Spaces** of **FluentCommunity** directly through **Paymattic’s** [Payment Forms](/how-to-create-your-first-payment-form-in-a-minute-and-accept-payments-with-paymattic) or [Subscriptions Forms](/#:~:text=WordPress%20with%20Paymattic%3F-,How%20to%20Add%20Subscription%20Payment%20Item%20Fields%20in%20Paymattic%3F,-How%20to%20Add).

This article will guide you through **integrating** **FluentCommunity** **with** **Paymattic** and make the most of your community features.

> **Remember**, before starting the process, make sure you **install** and **activate** the [**FluentCommunity Pro Plugin**](https://fluentcommunity.co/docs/install-fluent-community/# 1-toc-title) on your **WordPress** **Site** to set up this integration.

## Connect FluentCommunity with Paymattic

Before starting the process, you need to connect the FluentCommunity with Paymattic from the FluentCommunity Plugin.
- *To learn how to connect FluentCommunity with Paymattic, follow the steps below –**

First, go to **Settings** of **FluentCommunity** from the below-left corner.

Open the **Features &amp; Addons** tab from the left sidebar and scroll down to the **Recommended Plugins and Addons** section.

Click the **Activate Paymattic** button to automatically set up the **Paymattic (free** **version)** plugin with your **FluentCommunity.**

> **Remember, you need to install and activate the Paymattic Pro Plugin to perform all the tasks (e.g., using conditional logic**, adding the user dashboard, etc.) for **FluentCommunity**.

![](/images/integrations/how-to-integrate-fluentcommunity-in-wordpress-with-paymattic/1.-Activate-Paymattic-plugin-scaled.webp)

Now, click the **View Settings** button and it redirects you to the **Paymattic Dashboard.**

![](/images/integrations/how-to-integrate-fluentcommunity-in-wordpress-with-paymattic/2.-View-Settings-button-scaled.webp)

## Enable FluentCommunity Integrations

By default, the **FluentCommunity** module will be enabled in your **Paymattic**.

If not, go to the **Integrations** from the **Paymattic Navbar**, search for the **FluentCommunity** through the search bar, and manually **Enable** it by turning on the toggle to get access to the **FluentCommunity Integration Feed.**

![](/images/integrations/how-to-integrate-fluentcommunity-in-wordpress-with-paymattic/3.-Enabled-Fluent-Community-scaled.webp)

## Integrate FluentCommunity into Paymattic Forms

To learn how to integrate FluentCommunity into any specific Form in Paymattic, follow the steps with the screenshots below –

First, go to **All Forms** from the **Paymattic Navbar**, **select** the **Desired Form** where you want to integrate **FluentCRM** and click the **Pencil/Editor Icon.**

> If you don't have any existing form, click the **+Add New Form** button to create a new one. To learn the detailed process of creating a new form to collect payments, read this [Payment Form](/how-to-create-your-first-payment-form-in-a-minute-and-accept-payments-with-paymattic) or [Subscriptions Form](/#:~:text=WordPress%20with%20Paymattic%3F-,How%20to%20Add%20Subscription%20Payment%20Item%20Fields%20in%20Paymattic%3F,-How%20to%20Add) documentation. For example, I used an existing payment form to show you the integration process.

![](/images/integrations/how-to-integrate-fluentcommunity-in-wordpress-with-paymattic/4.-open-desired-form-scaled.webp)

Once you are on the **Editor** page of your desired form, go to the **Integrations** tab, open the **Add New Integration** dropdown list, and select the **FluentCommunity Integration** option.

![](/images/integrations/how-to-integrate-fluentcommunity-in-wordpress-with-paymattic/5.-adding-Fluent-Community-Integration-feed-scaled.webp)

Now, a pop-up page will appear with various settings options for configuring FluentCommunity.
- *All the settings options mentioned in the screenshot below are briefly explained:**
- *A. Name**: Here, you can set a name according to your preference for your feed
- *B. Select Spaces or Courses to Enroll**: Here, you can select your desired or all **Space/s** and **Course/s** to set where your users will add as members/students immediately after form submission.
- *C. Email Address**: In this field, you need to select the Email Address.
- *D. Full Name (Only for new users)**: Here, use the {input.customer\_name} shortcode by clicking the ShortCode Icon.
- *E. Password (Only for new users)**: Here, you can set a fixed password for every new user. Or, you can keep it empty to automatically generate a new password for each user.
- *F. Allow the user login automatically after Form submission**: Enable this option and your user will be directly logged into your Paymattic User Dashboard after submitting the form.
- *G. Send default WordPress welcome email to a user after registration**: Enable this option to send a welcome email notification to your users with login details including a password reset option.
- *H. Join/Enroll space/course on payment success only**: Check this option if you want your users to **Join/Enroll** in a **Space/Course** only when the payment is successful. If you keep it unchecked, users can get access to the space/course without payment succeed.
- *I. Remove from space/course if payment refunded**: Checking this option will allow you to remove users automatically from space/course if payment is refunded.
- *J. Remove from space/course if subscription canceled**: Checking this option will allow you to remove users automatically from space/course if they cancel their subscriptions.
- *K. Enable conditional logic**: Enable this toggle if you want to set any conditions on this form submission. To learn the details use of this Conditional Logic, read this [Documentation](/how-to-use-conditional-logic-in-form-fields-with-paymattic). Plus, to get access to this feature, you need the [Paymattic Pro Plugin](/# 1-toc-title).

Once you set up the page, click the **Create FluentCommunity Feed** button and the feed will be integrated into this specific form.

![](/images/integrations/how-to-integrate-fluentcommunity-in-wordpress-with-paymattic/6.-All-options-of-Fluent-Community-Integration-Feed-.webp)

After successful Integration, now you will see that your **FluentCommunity Integration Feed** has been added here.

You can modify your feed anytime by clicking the **Pencil Icon** and delete it by clicking the **Trash Icon**.
Also, you can disable or enable this feed anytime by clicking the **Toggl**e button if needed.

![](/images/integrations/how-to-integrate-fluentcommunity-in-wordpress-with-paymattic/7.-Added-Fluent-Community-integration-feed-scaled.webp)

## Display Form into Front End

To display your **FluentCommunity Form** on the front end of your desired **WordPress Site**, **Copy** the **Shortcode** of your desired Form.

![](/images/integrations/how-to-integrate-fluentcommunity-in-wordpress-with-paymattic/8.-Copy-ShortCode-scaled.webp)

Then, paste the shortcode to the **Page/Post** where you want to display your **FluentCommunity Form.**
For example, I pasted the **ShortCode** to the default **Paymattic Dashboard** **Page**.

![](/images/integrations/how-to-integrate-fluentcommunity-in-wordpress-with-paymattic/9.-Paste-the-ShortCode-in-default-Paymattic-Dashboard-scaled.webp)

Now in your front end, you will see your **FluentCommunity Form** like the screenshot below. Here, your user needs to fill up the form for logging into the FluentCommunity Portal.

Plus, the **Paymattic Form User** will automatically be added to the **Members** list of selected **Spaces** and **Courses** of **FluentCommunity**.

![](/images/integrations/how-to-integrate-fluentcommunity-in-wordpress-with-paymattic/10.-Preview-of-the-Fluent-Community-Form.webp)

## Paymattic User Dashboard

After completing the integration, **Paymattic** users or **FluentCommunity** members who access the **Community** through **Paymattic** will see a dedicated section called "**Spaces &amp; Courses**" in their **User Dashboard**.

This section provides an overview of their community activities, such as the spaces they have joined and the courses they are enrolled in.

Also, they can manage and see the payment history of their subscriptions through this dashboard.

> To learn more details about the **Paymattic User Dashboard**, read this [Documentation](/how-to-add-user-dashboard-module-in-paymattic). Plus, to get access to this feature, you need the [Paymattic Pro Plugin](/# 1-toc-title).

Once your users fill in the form, the user dashboard will look like the screenshot below.

![](/images/integrations/how-to-integrate-fluentcommunity-in-wordpress-with-paymattic/11.-Paymattic-User-Dashboard.webp)

This way you can easily integrate FluentCommunity with Paymattic!
If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.