---
title: "How to Add Tax Calculated Amount Field in WordPress with Paymattic?"
category: "Donation and Product Fields"
---
# How to Add Tax Calculation to Forms in WordPress with Paymattic

[Paymattic](https://paymattic.com/) provides a powerful **Tax Calculated Amount** field that automatically calculates and applies tax to your form items. This guide will show you how to set up and customize tax calculations in your forms.

::: tip Key Features
1. Automatic tax calculation
2. Product-specific tax rates
3. Real-time updates
4. Multiple tax field support
5. Customizable display options
:::

::: warning Pro Feature
The Tax Calculated Amount field requires the [Paymattic Pro Plugin](/getting-started-with-paymattic/how-to-install-and-activate-paymattic-in-wordpress).
:::

## Video Tutorial

<iframe width="560" height="315" src="https://www.youtube.com/embed/ed0RtdxCdz4?list=PLXpD0vT4thWH80g5e9wYnoBMgEqUXbr53" title="Tax Calculated Amount Field Tutorial" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Adding Tax Calculation

### Step 1: Access Form Editor

1. Go to **All Forms** from the **Paymattic Navbar**
2. Select your target form
3. Click the **Pencil/Edit** icon to open the editor

::: tip Creating a New Form
If you don't have a form yet:
- [Create a Form from Scratch](/form-editor/how-to-create-a-form-from-scratch-with-paymattic)
- [Use Form Templates](/form-editor/simple-form-templates)
:::

![Access Form Editor](/images/donation-and-product-fields/how-to-add-tax-calculated-amount-field-in-wordpress-with-paymattic/1.-Open-desired-form-4-scaled.webp)

### Step 2: Add Required Fields

::: warning Required Fields
Your form must include these fields in order:
1. [Name Field](/general-input-fields/how-to-use-general-form-input-fields-in-wordpress-with-paymattic#name-field)
2. [Email Field](/general-input-fields/how-to-use-general-form-input-fields-in-wordpress-with-paymattic#email-field)
3. [Payment Item Field](/donation-and-product-fields/how-to-add-payment-item-fields-in-wordpress-with-paymattic) (for the item being taxed)
4. Tax Calculated Amount Field (added below)
5. [Payment Method Field](/general-input-fields/how-to-use-the-payment-method-fields-section) (for processing payments)
:::

Add the Tax Calculated Amount field in two ways:
1. Type **"/"** in the editor
2. Click the **Plus Icon** at the bottom

![Add Field Options](/images/donation-and-product-fields/how-to-add-tax-calculated-amount-field-in-wordpress-with-paymattic/2.-Type-or-click-icon-4.webp)

Select "Tax Calculated Amount" under "Donation & Product Fields":

![Select Tax Field](/images/donation-and-product-fields/how-to-add-tax-calculated-amount-field-in-wordpress-with-paymattic/3.-Tax-Calculated-field.webp)

## Configuring Tax Calculation

To customize the field, click the **Settings Icon** in the right corner:

![Access Settings](/images/donation-and-product-fields/how-to-add-tax-calculated-amount-field-in-wordpress-with-paymattic/4.-Settings-Icon-4.webp)

### General Settings

![General Settings](/images/donation-and-product-fields/how-to-add-tax-calculated-amount-field-in-wordpress-with-paymattic/5.-General-Settings-2.webp)

1. **Tax Rate Configuration**:
   - Set tax percentage
   - Applied to selected items
   - Real-time calculation

2. **Product Selection**:
   - Choose target payment items
   - Link tax to specific products

::: warning Important
Use separate Tax Calculated Amount fields for each Payment Item field that needs different tax rates.
:::

### Advanced Settings

![Advanced Settings](/images/donation-and-product-fields/how-to-add-tax-calculated-amount-field-in-wordpress-with-paymattic/6.-Advanced-Field.webp)

1. **Admin Options**:
   - Custom admin label
   - Field ID for tracking
   - Backend organization

2. **Styling Options**:
   - Field wrapper CSS class
   - Input elements CSS class
   - Learn about [Custom CSS/JS](/form-settings/how-to-create-custom-css-js-in-wordpress-with-paymattic)

## Adding the Form to Your Site

1. Save your configuration
2. Copy the provided shortcode
3. Paste into your desired page/post
4. Preview using the Eye icon

![Form Management Options](/images/donation-and-product-fields/how-to-add-tax-calculated-amount-field-in-wordpress-with-paymattic/7.-Save-preview-shortcode-buttons.webp)

## Preview

Here's how your tax calculation will appear to customers:

![Tax Calculation Preview](/images/donation-and-product-fields/how-to-add-tax-calculated-amount-field-in-wordpress-with-paymattic/8.-Preview-of-Tax-Calculated-amount.webp)

## Best Practices

::: tip Tax Configuration Tips
1. **Rate Setting**:
   - Use accurate tax rates
   - Consider regional variations
   - Update rates as needed
   - Document tax policies

2. **Display**:
   - Show tax calculation clearly
   - Include rate information
   - Explain any special rules
   - Use clear labels

3. **Organization**:
   - Group related items
   - Keep tax fields near items
   - Use consistent naming
   - Consider tax categories

4. **Compliance**:
   - Verify tax calculations
   - Keep tax records
   - Follow local regulations
   - Consider tax zones
:::

::: warning Testing
Always test your tax calculations:
1. Verify calculations are correct
2. Test different tax rates
3. Check rounding behavior
4. Test with various amounts
5. Verify tax totals
:::

::: tip Need Help?
Our [support team](https://wpmanageninja.com/support-tickets/) is ready to assist with any questions about tax calculations!
:::