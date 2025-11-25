---
title: "integrate Moneris Payment Gateway"
category: "Payment Method Fields"
---

# Integrate Moneris Payment Gateway

[Moneris](https://www.moneris.com/) is one of Canada's leading payment processors, offering secure and reliable services to help you accept payments on your WordPress site. Integrating Moneris with **Paymattic** allows you to leverage their trusted network directly from your payment forms.

This detailed article will guide you through the entire process of configuring the Moneris payment gateway with your **Paymattic** plugin.

::: warning Prerequisites
To get access to the [Moneris](https://www.moneris.com/) payment gateway, you need the [Paymattic Pro Plugin](/getting-started-with-paymattic/how-to-install-and-activate-paymattic-in-wordpress).
:::

## Configuring the Moneris Payment Method

The Moneris integration is a multi-step process that involves activating the add-on in Paymattic, getting three separate credentials from your Moneris account, and then entering them back into Paymattic. Follow these steps carefully to ensure a successful setup.

### Step 1: Install and Activate the Moneris Add-on

The Moneris gateway connects to **Paymattic** via a dedicated add-on. Your first step is to activate it.

1.  From your WordPress dashboard, navigate to **Paymattic** → **Payment Gateway**.
2.  Select the **Moneris** tab from the left sidebar to open the **Moneris Settings** page.
3.  Click the **Install and Activate Moneris** button to enable the module.

::: info Note
This add-on only needs to be installed the first time you integrate with Moneris.
:::

![Install and Activate Moneris in Paymattic](/images/payment-method-fields/integrate-moneris/Payment-gateway-Moneris-Install-Activate-Moneris-scaled.webp)

### Step 2: Set the Payment Mode

After activation, you can begin the basic configuration.

1.  **Select your Payment Mode**:
    -   **Test Mode**: This lets you test your forms using Moneris's sandbox environment without processing real money.
    -   **Live Mode**: Select this when you are ready to accept real payments.
    
    Both modes follow the same configuration steps. For this guide, we'll use **Test Mode**.

2.  **Identify Required Credentials**: To complete the integration, you will need to retrieve three pieces of information from your Moneris account: a **Store ID**, an **API Token**, and a **Checkout ID**. The next steps will show you how to find them.

![Moneris Settings Page in Paymattic](/images/payment-method-fields/integrate-moneris/Moneris-Settings-page.webp)

### Step 3: Retrieve Your Credentials from Moneris

This is the most detailed part of the process. We will walk through how to log in to your Moneris account and find all three required keys.

1.  Open a new browser tab and log in to your [Moneris Account](https://www.moneris.com/en/login-portal-hub).
    
    ::: tip
    If you don't have an account, [sign up here](https://ordernow.moneris.com/landing/).
    :::

2.  To get your test credentials, you first need to complete your profile. From the Moneris dashboard, go to **Profile Details** in the right sidebar and click **Full Profile** in the Test Credential section.

::: warning Important
You must complete your Profile Details to get the credentials.
:::

#### Getting Your Store ID & API Token

Let's start by getting the first two credentials.

1.  In your profile, fill in all the necessary details and click the **Request Testing Credentials** button.

![Moneris Developer Portal](/images/payment-method-fields/integrate-moneris/Home-Moneris-Developers-scaled.webp)

2.  After submitting your details, Moneris will display your test credentials.

![Request Test Credentials](/images/payment-method-fields/integrate-moneris/Home-Moneris-Developers-Test-Credentials-scaled.webp)

3.  Carefully copy your **Store ID** and **API Token**.

![Moneris Test Credentials](/images/payment-method-fields/integrate-moneris/My-Profile-Moneris-Developers-2-scaled.webp)

#### Getting Your Checkout ID

The Checkout ID is found in a different area called the Merchant Resource Center.

1.  Return to your Moneris Profile page. In the Test Credential section, click the **Merchant Resource Center** button located below your credentials.

![Access Merchant Resource Center](/images/payment-method-fields/integrate-moneris/Moneris-Developer-Test-Credentials-4-scaled.webp)

2.  You will be taken to a new login screen. Log in to the Resource Center using your **Username**, **Store ID**, and **Password**, then click **Submit**.

::: tip Live Mode Access
For Live Mode, use [this URL](https://www3.moneris.com/mpg/) to access the Merchant Resource Center. The configuration steps remain the same.
:::

![Merchant Resource Center Login](/images/payment-method-fields/integrate-moneris/Moneris-Gateway-Merchant-Resource-Center-2.webp)

3.  For security, you will be prompted to set up security questions. Add your questions and answers, then click **Save Reset Password Data**.

![Set Security Questions](/images/payment-method-fields/integrate-moneris/Moneris-Gateway-Merchant-Resource-Center-monca09834.webp)

4.  Once inside the Merchant Resource Center, click on **Admin** in the main navigation bar and select **Moneris Checkout Config** from the menu.

![Access Checkout Configuration](/images/payment-method-fields/integrate-moneris/Moneris-Gateway-Merchant-Resource-Center-configure.webp)

5.  On the Checkout Configuration page, click the **Create Profile** button to set up a new checkout profile.

![Create Checkout Profile](/images/payment-method-fields/integrate-moneris/Moneris-Gateway-Merchant-Resource-Center-view-profile.webp)

#### Checkout Page Settings

::: info Important Settings
Configure these key settings for optimal integration:

1. **Checkout Type**: Use Moneris Checkout Forms for Payments
2. **Order Summary**: We recommend disabling Product Images
3. **Customer's Personal Details**: Make Email field mandatory
4. **Payment Security**: If you enable AVS (Address Verification System), the billing address field in Paymattic becomes mandatory
:::

6.  After configuring and saving your checkout profile, the system will generate your **Checkout ID**. Find the Checkout ID in your profile list, copy it, and save it for the final step.

![Get Checkout ID](/images/payment-method-fields/integrate-moneris/Moneris-Gateway-Merchant-Resource-Center-CheckID-scaled.webp)

### Step 4: Finalize the Configuration in Paymattic

With all three credentials—Store ID, API Token, and Checkout ID—copied, you can now complete the setup in your WordPress dashboard.

1.  Return to the **Paymattic** → **Payment Gateway** → **Moneris** tab.
2.  Carefully paste the three credentials into their respective fields.
3.  Double-check that all information is correct, then click the **Save Settings** button to complete the integration.

![Configure Moneris Credentials in Paymattic](/images/payment-method-fields/integrate-moneris/Paste-all-the-credentials-scaled.webp)

## Enabling Moneris in Your Payment Forms

Now that the global integration is active, you can enable Moneris as a payment option in your individual forms.

-   For existing forms: Add it to any [Payment Form](/create-payment-form).
-   For new forms:
    -   [Create a Form from Scratch](/form-editor/how-to-create-a-form-from-scratch-with-paymattic)
    -   [Use Form Templates](/form-editor/simple-form-templates)
-   Learn more about [adding payment methods](/payment-method-fields/how-to-use-the-payment-method-fields-section).

::: warning Note
The Moneris payment method will not function unless you complete the configuration process properly.
:::

## Managing Recurring Payments with Moneris

If you use Moneris for subscription payments, you can manage these transactions directly from the Merchant Resource Center.

1.  Go to **Recurring** in the main navigation bar.
2.  Select **Manage Recurring** to view and manage your active subscriptions on the **Manage Recurring Transaction** page.

![Manage Recurring Payments](/images/payment-method-fields/integrate-moneris/Moneris-Gateway-Merchant-Resource-Center-manage-recurring-scaled.webp)

::: tip Need Help?
If you have any questions, concerns, or suggestions, please contact our [@support team](https://wpmanageninja.com/support-tickets/). We're here to help!
:::