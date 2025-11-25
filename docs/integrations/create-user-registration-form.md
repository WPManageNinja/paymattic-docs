---
title: "Create a User Registration Form with Paymattic"
category: "Integrations"
---

# Create a User Registration Form with Paymattic

[Paymattic](https://paymattic.com/) introduces another impressive module to make the user registration process fast and simple. You can make forms that create user accounts in WordPress with the WP User Registration module. This article will guide you through integrating **WP User Registration** with **Paymattic** on your **WordPress** site.

:::warning Pro Feature
WP User Registration is a Premium Feature of the Paymattic Plugin. You need Paymattic Pro to use this integration.
:::

## Enable WP User Registration Integration 


First, go to **Integrations** from the **Paymattic Navbar** and you will get the **WP User Registration** integration module.

Here, you will see the WP User Registration’s **Settings Icon** on the right side, click on it.

![Enable WP User Registration module](/images/integrations/create-user-registration-form/Wp-User-Registration-module-2-scaled.webp)

Click the **Toggle** button to enable the WP User Registration. 

![Enable the integration](/images/integrations/create-user-registration-form/Enable-User-registration-module-1-scaled.webp)

## Integrate WP User Registration into Paymattic Forms


First, go to **All Forms** from the **Paymattic Navbar**, select the Desired Form where you want to integrate your **WP User Registration** and click the **Pencil/Editor** Icon. 

![Open desired form](/images/integrations/create-user-registration-form/Open-desired-forms-scaled.webp)

Once the **Editor** page opens, go to the **Integrations** tab.

![Integration tab](/images/integrations/create-user-registration-form/Integration-tab.webp)

Click the **Add New Integration** button & select **User Registration Integration** feed from the dropdown list. 

![Add new integration](/images/integrations/create-user-registration-form/Add-new-integration-drop-down-scaled.webp)

Now, a pop-up page will appear with various settings options for configuring User Registration. 


* **Name:** Here, you can set a name according to your preference for your feed.
* **Email Address:** In this field, you have to select the **Email Address**.
* **User Name:** Here, you can set the `{input.customer_email}` shortcode by clicking the Shortcode Icon because your customer email will be the user name to log in to your Paymattic user dashboard field.
* **Full Name:** Here, you can use the `{input.customer_name}` shortcode by clicking the Shortcode Icon.
* **Password:** Here, use the `{input.password}` shortcode to address your password by clicking the Shortcode Icon.
* **Default User Role:** You can select a default user role for your Paymattic user.
* **User Meta:** Here, you can add some User Meta Key and Meta Value if needed.
* **Allow the user login automatically after registration:** Enable this option and your user will be directly logged into your Paymattic User Dashboard after registration.
* **Send default WordPress welcome email to user after registration:** Here you will also get the checkbox option to give a Welcome Email Notification to your user.
* **Don’t create a user if one already exists in the database with the same email address:** If you want to disable the form submission of already existing users then just simply check this box.
* **Conditional logics:** If you have any conditions about this submission just set the conditions from the Conditional Logic option. To learn more, read our [conditional logic guide](/use-conditional-logic).
* **Enable this field:** If you check this option, all the actions of this feed will only run for the visitors who are in a logged-out state and the email that is not registered yet.

Once the setup is done, finally, click the **Create User Registration Feed** button. And, your WP User Registration will be integrated into this specific form!

![User registration configuration](/images/integrations/create-user-registration-form/Add-new-user-registration-integration-feed-Popup-page.webp)

After successful Integration, now you will see that your **User Registration Integration Feed** has been added here. 

You can modify your feed anytime by clicking the **Pencil Icon** and delete it by clicking the **Trash Icon**. 
Also, you can disable or enable this feed anytime by clicking the **Toggle** button if needed.

![WP user registration feed integrated](/images/integrations/create-user-registration-form/Wp-user-registration-feed-integrated-scaled.webp)

## Preview of Integrated WP User Registration

Here, you can see the preview of the automatically added users in WordPress through the Form entries that I set up during the integration.

![Preview of User Registration](/images/integrations/create-user-registration-form/Preview-of-User-Registration-scaled.webp)

That's all you need to integrate WP User Registration with Paymattic! If you have any questions, concerns, or suggestions, please contact our [support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/).