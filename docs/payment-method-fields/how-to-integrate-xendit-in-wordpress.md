---
title: "How to Integrate Xendit Payment Gateway in WordPress with Paymattic?"
category: "Payment Method Fields"
---
# How to Integrate Xendit Payment Gateway in WordPress with Paymattic

Xendit is a popular payment gateway based in Indonesia, Philippines, and South East Asia region. It supports various local and international payment methods such as:
- VISA
- Mastercard
- American Express
- JCB
- Local bank transfer
- E-wallets
- And many more

This article will guide you through configuring Xendit on your WordPress Site with the Paymattic plugin.

::: warning Prerequisites
To get access to the [Xendit](https://www.xendit.co/en/) payment gateway, you need the [Paymattic Pro Plugin](/getting-started-with-paymattic/how-to-install-and-activate-paymattic-in-wordpress).
:::

## Configuring the Xendit Payment Method

Follow these steps to configure the Xendit payment gateway through Paymattic:

### Step 1: Install and Activate

1. Go to **Payment Gateway** from the **Paymattic Navbar**
2. Click the **Xendit** tab from the left sidebar to open the **Xendit Settings** page
3. Click the **Install and Activate Xendit** button to connect Xendit with Paymattic Pro

::: info Note
This add-on needs to be installed the first time you integrate with Xendit.
:::

![Install and Activate Xendit](/images/payment-method-fields/how-to-integrate-xendit-in-wordpress/Payment-gateway-Xendit-tab-scaled.webp)

### Step 2: Choose Payment Mode

1. Select your **Payment Mode**:
   - **Test Mode** - for test payments
   - **Live Mode** - for real payments
   
   Both options follow the same configuration process. For this guide, we'll use **Test Mode**.

2. You'll need to obtain the **Test Secret Key** from your **Xendit Account** (we'll cover this in the next section).

![Payment Mode Selection](/images/payment-method-fields/how-to-integrate-xendit-in-wordpress/Payment-Mode-and-Secret-Key.webp)

### Step 3: Get the Secret Key from Xendit

1. Log in to your [Xendit Account](https://dashboard.xendit.co/settings/developers#callbacks)
   
   ::: tip
   If you don't have an account, [sign up here](https://dashboard.xendit.co/register).
   :::

2. In the **Xendit Dashboard**:
   - Go to **Settings** in the left sidebar
   - Click **API Keys** under the **Developers** tab

![Xendit Settings - API Keys](/images/payment-method-fields/how-to-integrate-xendit-in-wordpress/Xendits-Settings-section-API-key-under-Developer-tab-scaled.webp)

3. Click the **+ Generate secret key** button

![Generate Secret Key](/images/payment-method-fields/how-to-integrate-xendit-in-wordpress/Generate-Secret-Key.webp)

4. Configure your API key:
   - Give it a **Name**
   - Set the following **Permissions**:
     - Money-in Products – Write
     - Money-out Products – Write
     - Balance – Read
     - Report – Write
     - Transaction – Read
     - xenPlatform (Account) – Write
     - xenPlatform (Account Holder) – Write
     - xenPlatform (Split Payments) – Write
     - xenShield (Transaction Assessments) – Write
   - Click the **Generate Key** button

![API Key Configuration](/images/payment-method-fields/how-to-integrate-xendit-in-wordpress/Generate-API-Key-popup-page.webp)

5. When the success popup appears:
   - Click the **Copy** button to copy your **Secret API Key**
   - Save it for future use

![Copy Secret Key](/images/payment-method-fields/how-to-integrate-xendit-in-wordpress/Copy-secret-key.webp)

### Step 4: Configure Xendit in Paymattic

1. Return to **Payment Gateway** from the **Paymattic Navbar**
2. Click the **Xendit** tab
3. Paste the copied **Secret Key** into the respective field
4. Click **Save Settings** to complete the integration

![Configure Xendit Settings](/images/payment-method-fields/how-to-integrate-xendit-in-wordpress/Paste-Secret-Key-.webp)

## Additional Configuration

### Invoice Duration & Customer Notification

After configuring Xendit, you can customize these optional settings:

1. **Invoice Duration**:
   - Select a duration from the dropdown list
   - Choose **None** to use Xendit dashboard settings
   
2. **Customer Notification Preference**:
   - Select your preferred notification settings for customers

::: warning Important
Always click **Save Settings** after making any changes to your Xendit Settings.
:::

![Invoice and Notification Settings](/images/payment-method-fields/how-to-integrate-xendit-in-wordpress/Invoice-duration-in-Customer-notification-preference.webp)

### Configure Webhooks

::: warning Important
To ensure your Xendit dashboard and Paymattic dashboard stay synchronized, you must configure Xendit Webhooks.
:::

#### Step 1: Get Webhook URL

1. Copy the **Webhook URL** from Paymattic's Xendit Settings
2. This URL will be used for the **Webhook Event** in Xendit for transaction synchronization

![Webhook URL in Paymattic](/images/payment-method-fields/how-to-integrate-xendit-in-wordpress/Webhook-URL-Events.webp)

#### Step 2: Configure in Xendit

1. Visit your [Xendit Dashboard](https://dashboard.xendit.co/settings/developers#callbacks)
2. Go to **Settings** > **Developers** > **Webhooks**

![Xendit Webhook Settings](/images/payment-method-fields/how-to-integrate-xendit-in-wordpress/Webhooks-under-Developers-tab-of-Xendit-Setting-scaled.webp)

3. In the **Invoices** section:
   - Paste the **Webhook URL** from Paymattic
   - Check the **Notification Boxes**
   - Click **Test and Save**

![Configure Webhook URL](/images/payment-method-fields/how-to-integrate-xendit-in-wordpress/Paste-the-webhook-URL-in-Xendit.webp)

## Using Xendit in Forms

Once you've completed the setup, you can add Xendit to your forms:

1. For existing forms: Add it to any [Payment Form](/payment-method-fields/how-to-create-your-first-payment-form-in-a-minute-and-accept-payments-with-paymattic)

2. For new forms:
   - [Create a Form from Scratch](/form-editor/how-to-create-a-form-from-scratch-with-paymattic)
   - [Use Form Templates](/form-editor/simple-form-templates)

3. Learn more about [adding payment methods](/payment-method-fields/how-to-use-the-payment-method-fields-section)

::: warning Note
The Xendit payment method will not function unless you complete the configuration process properly.
:::

::: tip Need Help?
If you have any questions, concerns, or suggestions, please contact our [@support team](https://wpmanageninja.com/support-tickets/). We're here to help!
:::