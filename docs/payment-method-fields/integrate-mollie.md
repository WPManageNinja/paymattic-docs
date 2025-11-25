---
title: "Integrate Mollie"
category: "Payment Method Fields"
---
# Integrate Mollie

[Mollie](https://mollie.com/) is a powerful payment gateway that simplifies online payments for your webshop. This article will guide you through configuring Mollie on your WordPress Site with the Paymattic plugin.

::: warning Prerequisites
To get access to the [Mollie](https://mollie.com/) payment gateway, you need the [Paymattic Pro Plugin](/getting-started-with-paymattic/how-to-install-and-activate-paymattic-in-wordpress).
:::

## Configuring Mollie Payment Method

To configure the Mollie payment gateway through **Paymattic**, follow the steps with screenshots below.

1.  First, go to **Paymattic** → **Payment Gateway** from your WordPress dashboard.
2.  Click the **Mollie** tab from the left sidebar, and the **Mollie Settings** page will open.

3.  Select a **Payment Mode** between **Test** (for test payments) and **Live** (for real payments). Both options follow the same configuration process. For this example, we will choose the **Test Mode**.
4.  Then, you need to obtain the **Publishable key** from your [**Mollie Account**](https://my.mollie.com/dashboard/login).

![Mollie Settings Page in Paymattic](/images/payment-method-fields/integrate-mollie/Payment-gateways-Mollie-Mollie-Settings-page-scaled.webp)

### Step 3: Get Mollie API Key

1.  First, log in to your [**Mollie Account**](https://my.mollie.com/dashboard/login). 
    * If you do not have an account, you will need to sign up first.

2.  Once you log in to the **Mollie Dashboard**, navigate to the **Developers** section from the sidebar menu.

3.  Click on the **API keys** tab to view your keys.
      - The **API Keys** tab will appear

![Mollie Developer Dashboard](/images/payment-method-fields/integrate-mollie/Developers-tab-from-Mollie-Dashboard-scaled.webp)

4. Get your API Key:
   - For Test Mode: Copy the **Test API Key**
   - For Live Mode: Copy the **Live API Key**

::: info Note
Make sure to use the correct API key that matches your selected Payment Mode:
- Test Mode → Test API Key
- Live Mode → Live API Key
:::

![Copy Mollie API Key](/images/payment-method-fields/integrate-mollie/Copy-Test-API-Key.webp)

### Step 4: Configure in Paymattic

1.  Go back to your WordPress admin dashboard and navigate to **Paymattic** → **Payment Gateway** and click the **Mollie** tab.

2.  Paste the copied **API key** into the **Publishable key** field.

3.  Finally, press the **Save Settings** button. 

Your Mollie account will now be integrated with **Paymattic** for your WordPress Site.

![Configure Mollie Credentials in Paymattic](/images/payment-method-fields/integrate-mollie/Paste-API-Key-scaled.webp)

## Using Mollie in Forms

Once you've completed the setup, you can add Mollie to your forms:

1. For existing forms: Add it to any [Payment Form](/create-payment-form)

2. For new forms:
   - [Create a Form from Scratch](/form-editor/how-to-create-a-form-from-scratch-with-paymattic)
   - [Use Form Templates](/form-editor/simple-form-templates)

3. Learn more about [adding payment methods](/payment-method-fields/how-to-use-the-payment-method-fields-section)

::: warning Note
The Mollie payment method will not function unless you complete the configuration process properly.
:::

::: tip Need Help?
If you have any questions, concerns, or suggestions, please contact our [@support team](https://wpmanageninja.com/support-tickets/). We're here to help!
:::