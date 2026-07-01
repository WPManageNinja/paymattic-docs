---
title: "Add Gift Aid to Donation Forms"
category: "Donation and Product Fields"
---
# Add Gift Aid to Donation Forms

[Paymattic](https://paymattic.com/) supports **Gift Aid**, a UK government scheme that allows registered charities to reclaim 25p of tax on every £1 donated by a UK taxpayer at no extra cost to the donor. This guide explains how to enable and configure Gift Aid within the **Donation Progress Item** field.

#### Prerequisites

- [Paymattic Pro Plugin](/getting-started-with-paymattic/how-to-install-and-activate-paymattic-in-wordpress) is installed and activated on your WordPress site.
- Your form already includes a **Donation Progress Item** field.
- Your organization is a registered UK charity eligible to claim Gift Aid.

## Enabling Gift Aid

### Step 1: Open the Donation Progress Item Settings

1. Go to **All Forms** from the **Paymattic Navbar**
2. Click the **Pencil/Edit** icon on your donation form
3. Click the **Settings (gear) icon** on the **Donation Progress Item** field

### Step 2: Enable Gift Aid

Scroll down to the bottom of the **General** tab in the field settings panel.

Toggle **Enable Gift Aid** to turn it on.

Two new fields will appear:

- **Gift Aid Title**: The heading shown to donors above the declaration checkbox (e.g., *Boost your donation with Gift Aid*)
- **Gift Aid Declaration Text**: The full declaration statement the donor agrees to when they check the box

The default declaration text reads:

> *I am a UK taxpayer and want this donation to qualify for Gift Aid. I understand that the charity will reclaim 25p for every £1 I donate and that I must have paid at least that amount in UK Income Tax and/or Capital Gains Tax during the tax year.*

You can customize both the title and declaration text to match your charity's requirements.

Click **Update** to save your settings.

![Enable Gift Aid in Donation Progress Item settings](/images/donation-and-product-fields/add-gift-aid/enable-gift-aid-1.webp)

## Frontend Preview

Once Gift Aid is enabled, the donation form displays a Gift Aid section below the donation amount. It includes:

- A checkbox with the **Gift Aid Title** as its label
- The full **Gift Aid Declaration Text** beneath the checkbox
- A **Your address for Gift Aid** section with fields for:
  - House name or number
  - Address line 2 (optional)
  - Town or city
  - Postcode

Donors check the box to confirm they are UK taxpayers and agree to the declaration, then provide their address so the charity can process the Gift Aid claim.

![Donation form with Gift Aid section on the frontend](/images/donation-and-product-fields/add-gift-aid/donation-with-gift-aid-2.webp)

## Adding the Gift Aid Declaration Link to Email Notifications

When a donor submits the form with Gift Aid enabled, Paymattic generates a downloadable Gift Aid declaration document. You can include a link to this document in your admin email notification using a shortcode.

### Step 1: Open the Email Notification Editor

1. Go to your form and click the **Email** tab at the top
2. Open **Admin Email Notification** (or any notification you want to edit)

### Step 2: Insert the Gift Aid Shortcode

In the **Email Body**, click **Add Shortcodes** and select the **Gift Aid** category. You will see:

- **Gift Aid Declaration link** — shortcode: `{gift_aid.declaration_link}`

Click it to insert the shortcode into the email body, or type it manually:

```
{gift_aid.declaration_link}
```

Click **Save** to apply the changes.

![Adding the Gift Aid Declaration link shortcode in the email editor](/images/donation-and-product-fields/add-gift-aid/gift-aid-declaration-link-3.webp)

## Received Email

After a donor submits the form with Gift Aid opted in, the admin notification email will contain a **Download Gift Aid Declaration** link. Clicking this link downloads a PDF of the donor's signed Gift Aid declaration, which you can use for your Gift Aid claim records.

![Admin email with Download Gift Aid Declaration link](/images/donation-and-product-fields/add-gift-aid/email-receive-4.webp)

::: tip Need Help?
Our [support team](https://wpmanageninja.com/support-tickets/) is ready to assist with any questions about Gift Aid setup!
:::
