---
title: "Configure Billplz"
category: "Payment Method Fields"
---
# Configure Billplz

[Billplz](https://www.billplz.com/) is a powerful payment gateway platform that helps organizations process payments quickly and cost-effectively. This article will guide you through configuring Billplz on your WordPress Site with the Paymattic plugin.

::: warning Prerequisites
To get access to the [Billplz](https://www.billplz.com/) payment gateway, you need the [Paymattic Pro Plugin](/getting-started-with-paymattic/how-to-install-and-activate-paymattic-in-wordpress).
:::

## Configuring Billplz Payment Method

Follow these steps to configure the Billplz payment gateway through Paymattic:

### Step 1: Access Billplz Settings

1. Go to **Payment Gateway** from the **Paymattic Navbar**
2. Click the **Billplz** tab from the left sidebar
3. The **Billplz Settings** page will open

### Step 2: Configure Basic Settings

1. Select your **Payment Mode**:
   - **Test Mode** - for test payments
   - **Live Mode** - for real payments
   
   Both options follow the same configuration process. For this guide, we'll use **Test Mode**.

2. You'll need to obtain two credentials from your Billplz Account:
   - Collection ID
   - Secret Key

![Billplz Settings Page in Paymattic](/images/payment-method-fields/configure-billplz/Payment-Gateway-Billplz-Billplz-Settings-scaled.webp)

### Step 3: Get Billplz Credentials

1. Log in to your [Billplz Account](https://www.billplz.com/#)
   
   ::: tip
   If you don't have an account, [sign up here](https://dashboard.billplz.com/enterprise/signup).
   :::

#### Getting Secret Key

1. In the Billplz Dashboard:
   - Click the **Dropdown Arrow**
   - Open **Settings** from the left sidebar

![Access Billplz Settings](/images/payment-method-fields/configure-billplz/Settings-option-of-Billplz-scaled.webp)

2. Get your Secret Key:
   - Scroll to **Keys & Integration**
   - Expand **BILLPLZ SECRET KEY**
   - Copy your Secret Key

![Copy Billplz Secret Key](/images/payment-method-fields/configure-billplz/Copy-Billing-Secret-Key-.webp)

#### Getting Collection ID

You can either create a new Collection ID or use an existing one:

##### Option A: Create New Collection ID

1. Go to **Billing** in the left sidebar
   
   ::: info Note
   You can also use **Payment Form** or **Payment Order New** options
   :::

![Collection ID Options](/images/payment-method-fields/configure-billplz/Three-options-for-getting-Collection-ID-scaled.webp)

2. Click **Create Collection**

![Create Collection Button](/images/payment-method-fields/configure-billplz/Create-Collection-button-scaled.webp)

3. Set up your collection:
   - Enter a **Name** for the collection
   - Click **Submit**

![Create Collection Form](/images/payment-method-fields/configure-billplz/Create-Collection-Popup-Page.webp)

##### Option B: Use Existing Collection ID

1. Go to the **Active** option
2. Find your Collection ID
3. Click the **Copy** button

![Copy Existing Collection ID](/images/payment-method-fields/configure-billplz/Copy-the-Collection-ID.webp)

### Step 4: Configure in Paymattic

1. Return to **Payment Gateway** from the **Paymattic Navbar**
2. Click the **Billplz** tab
3. Enter your credentials:
   - Paste the Collection ID
   - Paste the Secret Key

::: tip Verify Your Credentials
You can verify your Collection ID and Secret Key by clicking the **Verify and Save Settings** button before saving.
:::

4. Click **Save Settings** to complete the integration

![Configure Billplz Credentials in Paymattic](/images/payment-method-fields/configure-billplz/Paste-Collection-ID-Secret-Key--scaled.webp)

## Using Billplz in Forms

Once you've completed the setup, you can add Billplz to your forms:

1. For existing forms: Add it to any [Payment Form](/create-payment-form)

2. For new forms:
   - [Create a Form from Scratch](/form-editor/how-to-create-a-form-from-scratch-with-paymattic)
   - [Use Form Templates](/form-editor/simple-form-templates)

3. Learn more about [adding payment methods](/payment-method-fields/how-to-use-the-payment-method-fields-section)

::: warning Note
The Billplz payment method will not function unless you complete the configuration process properly.
:::

::: tip Need Help?
If you have any questions, concerns, or suggestions, please contact our [@support team](https://wpmanageninja.com/support-tickets/). We're here to help!
:::