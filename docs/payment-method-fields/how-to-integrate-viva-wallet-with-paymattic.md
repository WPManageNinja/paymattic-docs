---
title: "How to Integrate Viva Wallet With Paymattic?"
category: "Payment Method Fields"
---
# How to Integrate Viva Wallet With Paymattic

With Paymattic, you can easily integrate the Viva Wallet payment method to accept payments. This article will guide you through configuring Viva Wallet on your WordPress Site with the Paymattic plugin.

::: warning Prerequisites
To get access to the [Viva Wallet](https://www.viva.com/en-gb) payment gateway, you need the [Paymattic Pro Plugin](/getting-started-with-paymattic/how-to-install-and-activate-paymattic-in-wordpress).
:::

## Enabling Viva Wallet Payment Method

To learn how to enable the Viva Wallet payment gateway through Paymattic, follow the steps with screenshots below:

1. First, go to **Payment Gateway** from the **Paymattic Navbar**, click the **Viva Wallet** tab from the left sidebar, and the **Viva Wallet Settings** page will open.

2. Click the **Install and Activate Viva Wallet** button to connect Viva Wallet with Paymattic Pro.

::: info Note
This add-on needs to be installed the first time you integrate with Viva Wallet.
:::

![Install and Activate Viva Wallet](/images/payment-method-fields/how-to-integrate-viva-wallet-with-paymattic/Payment-Gateway-Viva-Wallet-Install-Activate-Vi-a-wallet-button-scaled.webp)

3. Select any **Payment Mode** between:
   - **Test** (for test payments)
   - **Live** (for real payments)
   
   Both options follow the same configuration process. For this guide, we'll use **Test Mode**.

4. You need to obtain all the necessary credentials from your **Viva Wallet Account**:
   - Source Code
   - Merchant ID
   - API Key
   - Client ID
   - Client Secret

![Viva Wallet Credentials Fields](/images/payment-method-fields/how-to-integrate-viva-wallet-with-paymattic/Payent-mode-Source-code-Merchant-ID-API-Key-Client-ID-Client-Secret.webp)

### Get All the Credentials from Viva Wallet 

Follow these steps to get all the required credentials from your [Viva Wallet](https://www.viva.com/en-gb) account:

1. Log in to your **Viva Wallet Account**:
   - For [Test Mode](https://demo.vivapayments.com/)
   - For [Live Mode](https://www.vivapayments.com/)
   
   ::: tip
   If you don't have an account, [sign up here](https://www.viva.com/en-gb/get-started).
   :::

2. Click the **Select** button on your **Viva Account Profile**.

![Viva Wallet Dashboard](/images/payment-method-fields/how-to-integrate-viva-wallet-with-paymattic/Viava-Wallet-Dashboard-2-scaled.webp)

3. In your Viva Wallet profile settings, create a Web App:
   - Select **Sales > Online Payment > Website/Apps**

![Viva Wallet Web Apps](/images/payment-method-fields/how-to-integrate-viva-wallet-with-paymattic/Viva-Web-Apps-3-scaled.webp)

4. Click the **Add Website/App** button.

![Add Website/App in Viva Wallet](/images/payment-method-fields/how-to-integrate-viva-wallet-with-paymattic/Viva-Wallet-Add-Webhook-4-scaled.webp)

#### Getting Source Code

1. Copy the **Code** provided - this is your **Source Code** for Paymattic.

2. Configure the following:
   - Domain name
   - Success URL
   - Failure URL
   
3. Check all the **Checkboxes** and click the **Create** button.

![Configure Web App Settings](/images/payment-method-fields/how-to-integrate-viva-wallet-with-paymattic/Viva-Wallet-web-app-5-scaled.webp)

::: tip
You can find your Domain Name, Success URL, and Failure URL in the Viva Wallet Settings section of Paymattic.
:::

![Copy Webhook URLs](/images/payment-method-fields/how-to-integrate-viva-wallet-with-paymattic/Copy-the-webhook-URLs-1.webp)

#### Getting API Access Credentials

1. Go to **Settings** in your Viva Wallet profile
2. Click on **API Access**

![API Access Settings](/images/payment-method-fields/how-to-integrate-viva-wallet-with-paymattic/Viva-wallet-API-7-scaled.webp)

#### Getting Merchant ID, API Key, and Client ID

In your Viva Wallet account:

1. Find the **Access Credentials** section for:
   - **Merchant ID**
   - **API Key**

2. Check the **Smart Checkout Credentials** section for:
   - **Client ID**
   - Generate a new secret code using the **Forgot your Secret** button if needed

3. Copy all these credentials to your clipboard.

![Access Credentials](/images/payment-method-fields/how-to-integrate-viva-wallet-with-paymattic/Viva-wallet-Access-key-8-scaled.webp)

## Configuring Viva Wallet Settings 

1. Return to **Payment Gateway** from the **Paymattic Navbar**
2. Click the **Viva Wallet** tab
3. Paste all the **Credentials** you copied from Viva Wallet into their respective fields
4. Click the **Save Settings** button to complete the integration

![Configure Viva Wallet Settings](/images/payment-method-fields/how-to-integrate-viva-wallet-with-paymattic/Paste-all-the-credential-scaled.webp)

## Add Viva Wallet Webhooks

::: warning Important
To ensure your Viva Wallet dashboard and Paymattic dashboard are in sync, you must configure the Viva Wallet Webhooks.
:::

### Step 1: Copy Webhook URLs

1. Copy the **Webhook URL** from Paymattic
2. Copy the **Success** and **Failure** URLs
   
These URLs will be used to configure Viva Wallet Webhooks for your WordPress site.

![Copy Webhook URLs](/images/payment-method-fields/how-to-integrate-viva-wallet-with-paymattic/Copy-the-webhook-URLs.webp)

### Step 2: Configure Webhooks

1. Visit your [Viva Wallet Dashboard](https://www.vivapayments.com/)
2. Go to **Settings** > **Webhooks**

![Viva Wallet Webhook Settings](/images/payment-method-fields/how-to-integrate-viva-wallet-with-paymattic/Viva-wallet-Webhook-9-1-scaled.webp)

3. Configure the webhook:
   - Paste the **Webhook URL**
   - Check the **Active** box
   - Select **Transaction Payment Created** from the dropdown
   - Click **Save**

![Configure Webhook](/images/payment-method-fields/how-to-integrate-viva-wallet-with-paymattic/Viva-wallet-webhook-verify-11-scaled.webp)

## Add Viva Wallet to Forms

Once you've completed the setup, you can add Viva Wallet to your forms:

1. For existing forms: Add it to any [Payment Form](/payment-method-fields/how-to-create-your-first-payment-form-in-a-minute-and-accept-payments-with-paymattic)

2. For new forms:
   - [Create a Form from Scratch](/form-editor/how-to-create-a-form-from-scratch-with-paymattic)
   - [Use Form Templates](/form-editor/simple-form-templates)

3. Learn more about [adding payment methods](/payment-method-fields/how-to-use-the-payment-method-fields-section)

::: warning Note
The Viva Wallet payment method will not function unless you complete the configuration process properly.
:::

## Currency Selection in Payment Form 

::: tip Important
Select the **Payment Currency** according to your Viva Wallet account to ensure functional and smooth transactions.
:::

To learn how to change currency settings for a specific form, read our [Currency Settings Documentation](/form-settings/how-to-change-currency-settings-in-wordpress-with-paymattic).

::: tip Need Help?
If you have any questions, concerns, or suggestions, please contact our [@support team](https://wpmanageninja.com/support-tickets/). We're here to help!
:::