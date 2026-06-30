---
title: "Add Fee Recovery Field"
category: "Donation and Product Fields"
---
# Add Fee Recovery Field

[Paymattic](https://paymattic.com/) provides a **Fee Recovery** field that lets you pass payment gateway transaction fees back to the payer. Instead of absorbing processing costs yourself, you can give donors or customers the option to cover the fee keeping 100% of the intended amount.

::: warning Pro Feature
The Fee Recovery field requires the [Paymattic Pro Plugin](/getting-started-with-paymattic/how-to-install-and-activate-paymattic-in-wordpress).
:::

## Adding the Fee Recovery Field

### Step 1: Open the Form Editor

1. Go to **All Forms** from the **Paymattic Navbar**
2. Click **+ Add New Form** to create a new form, or click the **Pencil/Edit** icon on an existing form

![All Forms page in Paymattic](/images/donation-and-product-fields/add-fee-recovery-field/add-new-form.webp)

### Step 2: Insert the Field

In the form editor, add the Fee Recovery field in one of two ways:

- Type **"/"** in the editor and search for **Fee Recovery**
- Click the **Plus Icon** at the bottom of the editor

Then select **Fee Recovery** under the **Donation & Product Fields** section.

![Select Fee Recovery from Donation & Product Fields](/images/donation-and-product-fields/add-fee-recovery-field/fee-recovery-field-2.webp)

The field is added to your form with the default label: *"I'd like to cover the {fee_amount} transaction fee."*

To open the field settings, click the **Settings (gear) icon** on the right side of the field.

![Fee Recovery field in editor with settings icon](/images/donation-and-product-fields/add-fee-recovery-field/access-the-field-settings-3.webp)

## Configuring the Fee Recovery Field

The field settings panel has two tabs: **General** and **Advanced**.

### General Settings

#### Rate Mode

Choose how the transaction fee rate is applied:

- **Global Rate** — a single fee rate applies regardless of which gateway the payer selects
- **Per Gateway** — define separate rates for each payment gateway

##### Global Rate

When **Global Rate** is selected, configure:

- **Fee Percentage (%)** — the percentage portion of the gateway fee (e.g., `2.9` for 2.9%)
- **Additional Fee Amount** — a fixed flat fee in cents (e.g., `30` = $0.30)

![Global Rate settings for Fee Recovery field](/images/donation-and-product-fields/add-fee-recovery-field/global-rate-4.webp)

##### Per Gateway

When **Per Gateway** is selected, a **Gateway Rates** table appears. For each gateway, set:

- **Gateway** — select the payment gateway from the dropdown (e.g., Stripe)
- **Fee Percentage (%)** — percentage fee for that gateway
- **Additional Fee (cents)** — flat fee in cents for that gateway

Click **+ Add More** to add rates for additional gateways. Click the trash icon to remove a row.

![Per Gateway settings for Fee Recovery field](/images/donation-and-product-fields/add-fee-recovery-field/per-gateway-5.webp)

#### Fee Mode

- **Allow Donor Opt-in**: When checked, a checkbox is shown to the payer so they can choose whether to cover the fee. When unchecked, the fee is added automatically without a choice.

#### Opt-in Label

Customize the text displayed next to the opt-in checkbox. Use `{fee_amount}` as a placeholder, it is replaced with the calculated fee amount at runtime.

Default: `I'd like to cover the {fee_amount} transaction fee.`

Click **Update** to save your settings.

### Advanced Settings

The **Advanced** tab provides additional configuration options:

- **Admin Label** — an internal label visible only in the admin backend (e.g., on the Entries page). Not shown to payers.
- **Field Wrapper CSS Class** — adds a custom CSS class to the field container for custom styling.
- **Input Elements CSS Class** — adds a custom CSS class to the checkbox input element.
- **Field ID** — the unique ID assigned to this field, useful for custom JavaScript or integrations.

::: tip
To learn more about custom styling, see our guide on [Custom CSS](/form-settings/how-to-create-custom-css-js-in-wordpress-with-paymattic).
:::

Once done, click **Update** to save all configurations.

## Preview

On the frontend, the Fee Recovery field displays as a checkbox with the calculated fee amount shown in place of `{fee_amount}`. Payers can choose to cover the fee before submitting.

![Frontend preview of Fee Recovery field](/images/donation-and-product-fields/add-fee-recovery-field/preview-6.webp)

In the example above, on a $10 payment with a 2.9% + $0.30 rate, the displayed fee is **$0.61**.

::: tip Need Help?
Our [support team](https://wpmanageninja.com/support-tickets/) is ready to assist with any questions about the Fee Recovery field!
:::
