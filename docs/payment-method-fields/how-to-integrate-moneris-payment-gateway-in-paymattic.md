---
title: "How to integrate Moneris Payment Gateway in Paymattic"
category: "Payment Method Fields"
---
# How to Integrate Moneris Payment Gateway in Paymattic

[Moneris](https://www.moneris.com/) is a leading payment gateway that allows you to process payments securely on your WordPress site. This article will guide you through configuring Moneris with the Paymattic plugin.

::: warning Prerequisites
To get access to the [Moneris](https://www.moneris.com/) payment gateway, you need the [Paymattic Pro Plugin](/getting-started-with-paymattic/how-to-install-and-activate-paymattic-in-wordpress).
:::

## Configuring Moneris Payment Method

Follow these steps to configure the Moneris payment gateway through Paymattic:

### Step 1: Install and Activate Moneris

1. Go to **Payment Gateway** from the **Paymattic Navbar**
2. Click the **Moneris** tab from the left sidebar
3. The **Moneris Settings** page will open
4. Click the **Install and Activate Moneris** button

::: info Note
This add-on only needs to be installed the first time you integrate with Moneris.
:::

![Install and Activate Moneris in Paymattic](/images/payment-method-fields/how-to-integrate-moneris-payment-gateway-in-paymattic/Payment-gateway-Moneris-Install-Activate-Moneris-scaled.webp)

### Step 2: Configure Basic Settings

1. Select your **Payment Mode**:
   - **Test Mode** - for test payments
   - **Live Mode** - for real payments
   
   Both options follow the same configuration process. For this guide, we'll use **Test Mode**.

2. You'll need to obtain three credentials from your Moneris Account:
   - Store ID
   - API Token
   - Checkout ID

![Moneris Settings Page in Paymattic](/images/payment-method-fields/how-to-integrate-moneris-payment-gateway-in-paymattic/Moneris-Settings-page.webp)

### Step 3: Get Moneris Credentials

1. Log in to your [Moneris Account](https://www.moneris.com/en/login-portal-hub)
   
   ::: tip
   If you don't have an account, [sign up here](https://ordernow.moneris.com/landing/).
   :::

2. Access your profile:
   - Go to **Profile Details** in the right sidebar
   - Click **Full Profile** in the Test Credential section

::: warning Important
You must complete your Profile Details to get the credentials.
:::

#### Getting Store ID & API Token

1. In your profile:
   - Fill in all necessary details
   - Click **Request Testing Credentials**

![Moneris Developer Portal](/images/payment-method-fields/how-to-integrate-moneris-payment-gateway-in-paymattic/Home-Moneris-Developers-scaled.webp)

2. Submit your details:

![Request Test Credentials](/images/payment-method-fields/how-to-integrate-moneris-payment-gateway-in-paymattic/Home-Moneris-Developers-Test-Credentials-scaled.webp)

3. Copy your credentials:
   - Store ID
   - API Token

![Moneris Test Credentials](/images/payment-method-fields/how-to-integrate-moneris-payment-gateway-in-paymattic/My-Profile-Moneris-Developers-2-scaled.webp)

#### Getting Checkout ID

1. Return to your Moneris Profile
2. In the Test Credential section:
   - Locate your Store ID and API Access Token
   - Click the **Merchant Resource Center** button below

![Access Merchant Resource Center](/images/payment-method-fields/how-to-integrate-moneris-payment-gateway-in-paymattic/Moneris-Developer-Test-Credentials-4-scaled.webp)

3. Log in to the Resource Center:
   - Enter your Username
   - Enter your Store ID
   - Enter your Password
   - Click Submit

::: tip Live Mode Access
For Live Mode, use [this URL](https://www3.moneris.com/mpg/) to access the Merchant Resource Center. The configuration steps remain the same.
:::

![Merchant Resource Center Login](/images/payment-method-fields/how-to-integrate-moneris-payment-gateway-in-paymattic/Moneris-Gateway-Merchant-Resource-Center-2.webp)

4. Set up security questions:
   - Add your security questions
   - Click **Save Reset Password Data**

![Set Security Questions](/images/payment-method-fields/how-to-integrate-moneris-payment-gateway-in-paymattic/Moneris-Gateway-Merchant-Resource-Center-monca09834.webp)

5. Configure Checkout:
   - Click **Admin** in the navbar
   - Select **Moneris Checkout Config**

![Access Checkout Configuration](/images/payment-method-fields/how-to-integrate-moneris-payment-gateway-in-paymattic/Moneris-Gateway-Merchant-Resource-Center-configure.webp)

6. Create a new profile:
   - Click **Create Profile**

![Create Checkout Profile](/images/payment-method-fields/how-to-integrate-moneris-payment-gateway-in-paymattic/Moneris-Gateway-Merchant-Resource-Center-view-profile.webp)

#### Checkout Page Settings

::: info Important Settings
Configure these key settings for optimal integration:

1. **Checkout Type**: Use Moneris Checkout Forms for Payments
2. **Order Summary**: We recommend disabling Product Images
3. **Customer's Personal Details**: Make Email field mandatory
4. **Payment Security**: If you enable AVS (Address Verification System), the billing address field in Paymattic becomes mandatory
:::

7. Copy your Checkout ID:
   - Find the Checkout ID in your profile
   - Save it for the next step

![Get Checkout ID](/images/payment-method-fields/how-to-integrate-moneris-payment-gateway-in-paymattic/Moneris-Gateway-Merchant-Resource-Center-CheckID-scaled.webp)

### Step 4: Configure in Paymattic

1. Return to **Payment Gateway** from the **Paymattic Navbar**
2. Click the **Moneris** tab
3. Enter your credentials:
   - Paste the Store ID
   - Paste the API Token
   - Paste the Checkout ID
4. Click **Save Settings** to complete the integration

![Configure Moneris Credentials in Paymattic](/images/payment-method-fields/how-to-integrate-moneris-payment-gateway-in-paymattic/Paste-all-the-credentials-scaled.webp)

## Using Moneris in Forms

Once you've completed the setup, you can add Moneris to your forms:

1. For existing forms: Add it to any [Payment Form](/payment-method-fields/how-to-create-your-first-payment-form-in-a-minute-and-accept-payments-with-paymattic)

2. For new forms:
   - [Create a Form from Scratch](/form-editor/how-to-create-a-form-from-scratch-with-paymattic)
   - [Use Form Templates](/form-editor/simple-form-templates)

3. Learn more about [adding payment methods](/payment-method-fields/how-to-use-the-payment-method-fields-section)

::: warning Note
The Moneris payment method will not function unless you complete the configuration process properly.
:::

## Managing Recurring Payments

To manage recurring payments in Moneris:

1. Go to **Recurring** in the navbar
2. Select **Manage Recurring**
3. Access the **Manage Recurring Transaction** page

![Manage Recurring Payments](/images/payment-method-fields/how-to-integrate-moneris-payment-gateway-in-paymattic/Moneris-Gateway-Merchant-Resource-Center-manage-recurring-scaled.webp)

::: tip Need Help?
If you have any questions, concerns, or suggestions, please contact our [@support team](https://wpmanageninja.com/support-tickets/). We're here to help!
:::