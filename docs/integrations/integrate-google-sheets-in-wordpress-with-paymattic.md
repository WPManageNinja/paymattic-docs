---
title: "How to Integrate Google Sheets in WordPress with Paymattic?"
category: "Integrations"
---

# How to Integrate Google Sheets in WordPress with Paymattic?

Google Sheets integrates with [Paymattic](https://paymattic.com/) on your WordPress website to manage and organize form responses efficiently. This article will guide you through integrating **Google Sheets** in your **WordPress** **Site** with **Paymattic**.

Google Sheets is the Premium Feature of the Paymattic Plugin. So, you need Paymattic Pro to integrate this.

## Enable Google Sheets Integration

To learn how to enable Google Sheets integration, follow the steps with screenshots below –

First, go to **Integrations** from the **Paymattic Navbar**, search for the **Google Sheet** through the search bar, and you will get the **Google Sheets** integration module.

Here, you will see the Google Sheets’ **Settings Icon** on the right side, click on it.

![](/images/integrations/integrate-google-sheets-in-wordpress-with-paymattic/Google-sheet-under-Integration-section-scaled.webp)

Click the **Toggle** button to enable the Google Sheets.

Once you enable Google Sheets, you will be asked for the **Access Code** from your Google account to verify the code.

To get the Access code click the [Get Google Sheet Access Code](https://accounts.google.com/o/oauth2/auth?access_type=offline&approval_prompt=force&client_id=157785030834-7bkpc1olhgp9kd683c78dclei5elhoku.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Ffluentforms.com%2Fgapi%2F&response_type=code&scope=https%3A%2F%2Fspreadsheets.google.com%2Ffeeds%2F) link. To learn the detailed process, keep reading.

![](/images/integrations/integrate-google-sheets-in-wordpress-with-paymattic/Enable-google-sheet-Access-Code-scaled.webp)

### Get the Access Code from Google

To learn how to get the Access Code from Google, follow the steps with screenshots below –

To get the Access Code from Google, [click here](https://accounts.google.com/o/oauth2/auth?access_type=offline&approval_prompt=force&client_id=157785030834-7bkpc1olhgp9kd683c78dclei5elhoku.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Ffluentforms.com%2Fgapi%2F&response_type=code&scope=https%3A%2F%2Fspreadsheets.google.com%2Ffeeds%2F), and select the Google Account under which your desired **Google Sheet** exists.

Don’t worry if you see the FluentForms logo on this page. We are temporarily collaborating with the Fluent Forms app to verify your Google Account. Rest, we ensure that your integration functions will not be affected by this.

![](/images/integrations/integrate-google-sheets-in-wordpress-with-paymattic/Choosing-google-account.webp)

Once you choose the desired Google Account, it will take you to the **Paymattic Server** and generate an **Access Code**. Copy the access code by clicking on the **Copy** button.

Ignore the Instruction screenshot attached to this page, and follow the below steps to know where to paste the copied access code.

![](/images/integrations/integrate-google-sheets-in-wordpress-with-paymattic/Copy-Access-Code.webp)

Now, return to the **Google Sheets** page under the **Integrations** section from the **Paymattic** **Navbar**.

Paste the **access code** you copied from Google into the **Access Code** field and click the **Verify Code** button and your Google Sheets Integration module will be enabled.

![](/images/integrations/integrate-google-sheets-in-wordpress-with-paymattic/Paste-the-Access-Code-scaled.webp)

## Integrate Google Sheets into Form

To learn how to integrate Google Sheets into any specific Form in Paymattic, follow the steps with the screenshots below –

First, go to **All Forms** from the **Paymattic Navbar**, **select** the **Desired Form** where you want to integrate the Google Sheets, and click the **Pencil/Editor Icon.**

![](/images/integrations/integrate-google-sheets-in-wordpress-with-paymattic/Open-desired-Form-scaled.webp)

Once the **Editor** page opens, go to the **Integrations** tab, click the **Add New Integration** button &amp; select **Google Sheet** feed from the dropdown list.

![](/images/integrations/integrate-google-sheets-in-wordpress-with-paymattic/Add-new-integration-dropdown-scaled.webp)

Now, a pop-up page will appear with various settings options for configuring the Google Sheet.

Once you set up the page, click the **Create Google Sheets Feed** button and the feed will be integrated into your form.

Remember, to function Google Sheets integration with Form properly, you **must provide** the **Spreadsheet ID** and **Worksheet Name** of your **Google Sheets Account** and set up the **Spreadsheet Fields.**

![](/images/integrations/integrate-google-sheets-in-wordpress-with-paymattic/Add-new-google-sheet-integratio-feed-page.webp)
- *All the settings options mentioned above are briefly explained below:**

### Name

Here, you can set a name according to your preference for your integration feed. This field is required to be filled in.

![](/images/integrations/integrate-google-sheets-in-wordpress-with-paymattic/Name-filed.webp)

### Spreadsheet ID and Worksheet Name

Here, you need to provide the Spreadsheet ID and Worksheet Name of your Google Sheets Account that you want to integrate with the form as it's required to be filled in.

![](/images/integrations/integrate-google-sheets-in-wordpress-with-paymattic/Spreadsheet-ID-Worksheet-Name.webp)

#### Get the Spreadsheet ID and Worksheet Name from Google

To learn how to get the **Spreadsheet ID** and **Worksheet Name** from Google, follow the steps with screenshots below –

First, open your Google Sheet where you want to receive the entries of your form.

Now you will get the **Spreadsheet ID** inside the Spreadsheet URL. Now copy the marked portion as it is the **ID** of this particular **Spreadsheet**.

For example, if the spreadsheet URL is: https://docs.google.com/spreadsheets/d/**19BXmmGQUB8v\_jBNJZydbos-sFIzysSFTgeKmDsh-XLc**/edit?gid=0#gid=0. Then the ID of this spreadsheet will be 19BXmmGQUB8v\_jBNJZydbos-sFIzysSFTgeKmDsh-XLc/edit.

Then, copy the specific **Worksheet Name** where you want to receive the entries of your form.

Feel free to name your **Worksheet** as you like. A single spreadsheet can contain multiple Worksheets, but you should select a specific one and copy only that worksheet’s name to receive the form entries.

![](/images/integrations/integrate-google-sheets-in-wordpress-with-paymattic/Copy-Spreadsheet-ID-WorkSheet-Name.webp)

Once you copy the Spreadsheet ID and Worksheet Name, return to the Add New Google Sheets Integration Feed page from the Form’s Integration tab.

Finally, paste the **Spreadsheet ID** and **Worksheet Name** you copied before.

![](/images/integrations/integrate-google-sheets-in-wordpress-with-paymattic/Paste-the-spread-sheet-id-worksheet-name-scaled.webp)

### Spreadsheet Fields

This field is also required to be filled in to send the form entries to your selected worksheet under the chosen Google spreadsheet.

You can name the field label as you want and map the value according to the field label by using the **Shortcode** button.

For example, I just wanted to send the Name, Email, and Total Payment inputs from the form to the sheets. So, I added these fields and values according to the field label.

You can add as many fields as you need by clicking the **+ Add More** button. Also, can delete any field by clicking the **Trash Icon** if needed.

![](/images/integrations/integrate-google-sheets-in-wordpress-with-paymattic/Spreadsheet-Fields.webp)

### Conditional Logic

To send notifications by name or customer email, enable **Conditional logic** by clicking the **Toggle** button and add the **Value** according to your needs (i.e., this will send data to Google sheet conditionally based on your submission values).

Here, also you can add as much conditional logic as you need by clicking the **+ Add More** button and delete any logic by clicking the **Trash Icon** if needed.

![](/images/integrations/integrate-google-sheets-in-wordpress-with-paymattic/Conditional-Logic.webp)

### Payment Success and Enable This Feed
- **Payment Success**: Enable this option by clicking the **Toggle** button if you want to push data to Google Sheets when payment is successful. It will especially help to track payment data.
- **Enable This Feed**: Check this option, to ensure this integration feed remains enabled, and all the actions of this feed function properly.

Once the configuration is done, finally, click the **Update Google Sheet Feed** button to save all your changes.

![](/images/integrations/integrate-google-sheets-in-wordpress-with-paymattic/Payment-Success-Enable-This-field.webp)

After successful Integration, now you will see that your **Google Sheets Integration Feed** has been added here.

You can modify your feed anytime by clicking the **Pencil Icon** and delete it by clicking the **Trash Icon**.
Also, you can disable or enable this feed anytime by clicking the **Toggl**e button if needed.

![](/images/integrations/integrate-google-sheets-in-wordpress-with-paymattic/Added-Google-Integration-Feed-scaled.webp)

## Preview of Integrated Google Sheet 

Here, you can see the preview of the selected Google Sheet including the Form entries that I set up during the integration.

![](/images/integrations/integrate-google-sheets-in-wordpress-with-paymattic/Preview-of-Google-Sheets-scaled.webp)

This way you can easily integrate Google Sheets with Paymattic!
::: tip Need Help?
If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.
:::