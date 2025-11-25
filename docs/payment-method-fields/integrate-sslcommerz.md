---
title: "Integrate SSLCOMMERZ with Paymattic"
category: "Payment Method Fields"
---

# Integrate SSLCOMMERZ with Paymattic

SSLCOMMERZ is the leading payment gateway and aggregator in Bangladesh, offering a comprehensive suite of payment solutions perfect for any WordPress site targeting the local market. By integrating SSLCOMMERZ with **Paymattic**, you can accept payments through over 30 different options, including:

-   Debit cards
-   Credit cards
-   Prepaid cards
-   Mobile banking (like bKash, Nagad, Rocket)
-   E-Wallets
-   EMI (Equated Monthly Installment) plans

This detailed guide will walk you through the entire process of configuring SSLCOMMERZ on your WordPress site using the **Paymattic** plugin.

::: warning Prerequisites
Before we begin, it's important to note that access to the [SSLCOMMERZ](https://sslcommerz.com/) payment gateway is a premium feature. To follow this guide, you will need an active license for the [Paymattic Pro Plugin](/getting-started-with-paymattic/how-to-install-and-activate-paymattic-in-wordpress).
:::

## Configuring the SSLCOMMERZ Payment Method

Let's begin the one-time setup to connect your SSLCOMMERZ account with **Paymattic**. Once completed, SSLCOMMERZ will be available as a payment option in all your forms.

### Step 1: Navigate to the SSLCOMMERZ Settings

First, you need to find the specific configuration panel within your Paymattic dashboard.

1.  From your WordPress admin dashboard, hover over the **Paymattic** menu and click on **Payment Gateway**.
2.  On the Payment Gateway page, look at the list of gateways on the left and click on the **SSLCOMMERZ** tab.
3.  This will open the **SSLCOMMERZ Settings** page, where all the configuration will take place.

### Step 2: Choose Your Payment Mode

The first setting you need to configure is the payment mode. This determines whether you'll be processing real transactions or just testing your setup.

Select your **Payment Mode**:
-   **Test Mode**: This mode allows you to make test payments to ensure your forms are working correctly without involving real money. You'll need a Sandbox account from SSLCOMMERZ for this.
-   **Live Mode**: Select this when your site is ready to accept actual payments from customers.

For this guide, we will use **Test Mode**.

::: info Note
To proceed, you will need a **Store ID** and **Secret Key** from your **SSLCOMMERZ Account**, which we will cover in the next step.
:::

![SSLCOMMERZ Settings Page](/images/payment-method-fields/integrate-sslcommerz/Payment-Gateway-SSLCOMMERZ-scaled.webp)

### Step 3: Obtain Your Store ID & Secret Key

These credentials are what link your specific SSLCOMMERZ merchant account to Paymattic. The process for obtaining them differs slightly depending on whether you are a new or existing SSLCOMMERZ user.

#### For New Users

If you are new to SSLCOMMERZ, you'll need to create a merchant account first.

1.  Go to the [SSLCOMMERZ sign-up page](https://join.sslcommerz.com/) to open a new merchant account.

    ::: warning Important
    When filling out the sign-up form, it is crucial that you provide your valid:
    -   Email address
    -   Full name
    -   Complete address

    These fields are required by SSLCOMMERZ for proper payment data processing and to verify your identity.
    :::

2.  After successfully creating your account, SSLCOMMERZ will send you a welcome email. This email contains your vital credentials: the **Store ID** and **Secret Key**. Keep this email in a safe place.

![SSLCOMMERZ Welcome Email](/images/payment-method-fields/integrate-sslcommerz/SSLCOMMERZ-account-Detail-Mail.webp)

#### For Existing Users

::: tip
If you already have an active SSLCOMMERZ account but don't have your credentials handy, you can retrieve them easily. Simply contact the SSLCOMMERZ manager through their official support channels and request your:
-   Store ID
-   Store Password/Secret Key
:::

### Step 4: Enter and Save Credentials in Paymattic

With your Store ID and Secret Key in hand, it's time to complete the integration.

1.  Return to your WordPress dashboard and navigate back to the **Paymattic** → **Payment Gateway** → **SSLCOMMERZ** tab.
2.  Carefully paste the credentials you received from SSLCOMMERZ into the appropriate fields:
    -   Paste your **Store ID**.
    -   Paste your **Secret Key** (also known as Store Password).
3.  Double-check the credentials for any errors, and then click the **Save Settings** button. This will finalize the connection.

![Configure SSLCOMMERZ Credentials](/images/payment-method-fields/integrate-sslcommerz/Paste-the-Store-ID-and-Secret-Key-scaled.webp)

## Enabling SSLCOMMERZ in Your Payment Forms

Your global setup is now complete! The final action is to enable SSLCOMMERZ as a payment option within the forms where you want to use it.

-   To add SSLCOMMERZ to an **existing form**, simply edit the form, add the **Payment Method** field, and ensure SSLCOMMERZ is toggled on. For more details, see our guide on [creating a Payment Form](/create-payment-form).
-   If you are building a **new form**, you can either [Create a Form from Scratch](/form-editor/how-to-create-a-form-from-scratch-with-paymattic) or get started quickly when you [Use Form Templates](/form-editor/simple-form-templates).
-   For a detailed look at the payment field itself, refer to our documentation on [adding payment methods](/payment-method-fields/how-to-use-the-payment-method-fields-section).

::: warning Note
Please remember that the SSLCOMMERZ payment option will not be available or functional on your forms unless the global configuration is completed correctly as described in this guide.
:::

::: tip Need Help?
If you run into any trouble or have further questions about the integration, our friendly support team is ready to help. Please feel free to [contact our @support team](https://wpmanageninja.com/support-tickets/). We're here to assist you!
:::