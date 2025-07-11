---
title: "How to Integrate Telegram with Paymattic in WordPress?"
category: "Integrations"
---
[Paymattic](https://paymattic.com/) allows you to connect with [Telegram](https://telegram.org/) to send instant notifications to your Telegram channel or group when a form is submitted. This article will guide you through integrating **Telegram** with **Paymattic** on your **WordPress Site**.
- *Telegram** is the Premium Feature of the Paymattic Plugin. So, you need Paymattic Pro to integrate this.

## Enable Telegram Integration 

To learn how to enable **Telegram** integration, follow the steps with the screenshots below –

First, go to **Integrations** from the **Paymattic Navbar**, search for **Telegram** through the search bar, and you will get the **Telegram** integration module.

Here, you will see Telegram’s **Settings Icon** on the right side, click on it.

![](/images/integrations/how-to-integrate-telegram-with-paymattic-in-wordpress/Telegrams-Settings-Icon-scaled.webp)

Click the **Toggle** button to enable the Telegram.

Once you enable Telegram, you will be asked for the **Bot Token** and **Default Channel/Group Chat ID** of your Telegram Account.

Also, you can enter any **Text** in the **Test Message** field to test whether the enabled integration is working.

![](/images/integrations/how-to-integrate-telegram-with-paymattic-in-wordpress/Enable-Telegram-Integration-scaled.webp)

### Get the Bot Token and Chat ID from Telegram

To learn how to get the **Bot Token** and **Chat ID** of the Channel/Group from Telegram**,** follow the steps with screenshots below –

#### Getting Bot Token

First, log in to your Telegram Account and send a text to [@BotFather](https://t.me/BotFather) or click the **Start** button to start the bot in your Telegram application.

![](/images/integrations/how-to-integrate-telegram-with-paymattic-in-wordpress/Start-chatting-with-@BotFaher-scaled.webp)

Then **create a new bot** by sending the **‘/newbot’** command using the help message.

![](/images/integrations/how-to-integrate-telegram-with-paymattic-in-wordpress/newbot-link.webp)

Provide a relevant **Name** for your bot. Next, choose a **Username** for your bot that must end with the text **‘Bot’** or **‘bot’**.

After finishing these steps, **@BotFather** will provide the **Bot Token**. Simply, copy it.

![](/images/integrations/how-to-integrate-telegram-with-paymattic-in-wordpress/Copy-the-Bot-Token.webp)

#### Getting Channel/Group Chat ID

Here, you will need a Channel/Group Chat ID to send your notification. For example, here, I will collect the Chat ID from an existing Telegram Group to show the further process.

To do this, first, go to any **existing Telegram Group** or **Create a Group** in **Telegram** if you don’t have any.

Now, **add** the **Bot** that you created through the **@BotFather** in the previous step **as a member of the group** and then give your bot **Admin Access** i.e., simply make the bot admin of your group chat.

Once you make your Bot Admin, you can see the preview from **View group info** by clicking the **Three-dots icon** from the right-side corner of the **Group page**.

![](/images/integrations/how-to-integrate-telegram-with-paymattic-in-wordpress/Added-Bot-as-Admin.webp)

Finally, to get the **Chat ID** of your group, add [@GetIdsBot](https://t.me/getidsbot) as a member of this same group.

After **adding the GetIDs Bot as a member**, it will send a message to the group with the Group **Chat ID**. Simply, copy it.

Remember, the Chat ID starts with a minus sign (-), and you would have to copy the code exactly provided by the GetIDs bot.

![](/images/integrations/how-to-integrate-telegram-with-paymattic-in-wordpress/Copy-the-Chat-ID.webp)

Now, return to the **Telegram Messenger Settings** page under the **Integrations** section from the **Paymattic** **Navbar**.

Paste the **Bot Token** and **Chat ID** you copied from **Telegram** into the **Bot Token** and **Default Channel/Group Chat ID** fields respectively.

Finally, press the **Save Setting**s button and your Telegram Integration module will be enabled.

![](/images/integrations/how-to-integrate-telegram-with-paymattic-in-wordpress/Paste-the-Bot-token-Chat-ID-of-Gorup-scaled.webp)

## Integrate Telegram into Forms

To learn how to integrate Telegram into any specific Form in Paymattic, follow the steps with the screenshots below –

First, go to **All Forms** from the **Paymattic Navbar**, **select** the **Desired Form** where you want to integrate your Telegram, and click the **Pencil/Editor Icon.**

![](/images/integrations/how-to-integrate-telegram-with-paymattic-in-wordpress/Open-desired-form-5-scaled.webp)

Once the **Editor** page opens, go to the **Integrations** tab, click the **Add New Integration** button &amp; select **ActiveCampaign Integration** feed from the dropdown list.

![](/images/integrations/how-to-integrate-telegram-with-paymattic-in-wordpress/Add-new-integration-dropdown-telegram-scaled.webp)

Now, a pop-up page will appear with various settings options for configuring Telegram.
- *All the settings options mentioned in the screenshot below are briefly explained:**
- **Name**: Here, you can set a name according to your preference for your feed. This field is required to be filled in.
- **Message to Send**: Here you can set the texts and information you want to send to the Telegram channel/group as notification. Also, you can use the Shortcode button to set the user data from form entries that you want to send to your Telegram Group/Channel.
- **Custom Chat/Channel ID**: Use this field if you want to integrate form-specific telegram group/channel, otherwise keep it empty.
- **Conditional Logics**: This option allows Telegram integration to function conditionally based on your submission values according to your set conditional logic/s. Also, here, you can add as much conditional logic as you need by clicking the **+ Add More** button and delete any logic by clicking the **Trash Icon** if needed. To learn more, read this [Documentation](/how-to-use-conditional-logic-in-form-fields-with-paymattic).
- **Enable This Feed**: Check this option, to ensure this integration feed remains enabled, and all the actions of this feed function properly.

Once the setup is done, finally, click the **Create Telegram Feed** button.
And, your Telegram will be integrated into this specific form!

![](/images/integrations/how-to-integrate-telegram-with-paymattic-in-wordpress/Add-New-Telegram-Integration-Feed-page.webp)

After successful Integration, now you will see that your **Telegram Integration Feed** has been added here.

You can modify your feed anytime by clicking the **Pencil Icon** and delete it by clicking the **Trash Icon**.
Also, you can disable or enable this feed anytime by clicking the **Toggl**e button if needed.

![](/images/integrations/how-to-integrate-telegram-with-paymattic-in-wordpress/Added-Telegram-Integration-Feed-scaled.webp)

## Preview of Integrated Telegram

Here, you can see the preview of the notification messages of Telegram through the Form entries that I set up during the integration.

![](/images/integrations/how-to-integrate-telegram-with-paymattic-in-wordpress/Preview-of-integrated-Telegram.webp)

This way you can easily integrate Telegram with Paymattic!
If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.