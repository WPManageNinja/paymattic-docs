---
title: "How to Add Tax Calculated Amount Field in WordPress with Paymattic?"
category: "Donation and Product Fields"
---
# How to Add Tax Calculation to Forms in WordPress with Paymattic

[Paymattic](https://paymattic.com/) provides a powerful **Tax Calculated Amount** field that automatically calculates and applies tax to your form items. This guide will show you how to set up and customize tax calculations in your forms.


::: warning Pro Feature
The Tax Calculated Amount field requires the [Paymattic Pro Plugin](/getting-started-with-paymattic/how-to-install-and-activate-paymattic-in-wordpress).
:::

<iframe width="700" height="400" src="https://www.youtube.com/embed/ed0RtdxCdz4?list=PLXpD0vT4thWH80g5e9wYnoBMgEqUXbr53" title="Tax Calculated Amount Field Tutorial" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Adding Tax Calculation

### Step 1: Access Form Editor

1. Go to **All Forms** from the **Paymattic Navbar**
2. Select your target form
3. Click the **Pencil/Edit** icon to open the editor

![Access Form Editor](/images/donation-and-product-fields/how-to-add-tax-calculated-amount-field-in-wordpress-with-paymattic/1.-Open-desired-form-4-scaled.webp)

### Step 2: Add Required Fields

::: warning Required Fields
Your form must include these fields in order:
1. [Name Field](/general-input-fields/how-to-use-general-form-input-fields-in-wordpress-with-paymattic#_1-name-field)
2. [Email Field](/general-input-fields/how-to-use-general-form-input-fields-in-wordpress-with-paymattic#_2-email-field)
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


This guide explains the settings found under the **General** Tab for the **Tax Calculated Amount** field. This field is used to apply a percentage-based tax to a specific payment item in your form.

[Screenshot of the General Tab settings for the Tax Calculated Amount field.]

#### Tax Percentage
Here, you can set the tax rate that will be applied. Enter the percentage as a number without the percent sign (for example, enter `8` for an 8% tax).

#### Target Product Item
From this dropdown menu, you must select the **Payment Item** field to which this tax will apply. The calculation will be based on the amount of the selected product.


* **Important Note:** Remember to use a separate **Tax Calculated Amount** field for each **Payment Item** field that requires tax. One tax field can only target one payment item.

Once you finish, click the **Update** button at the top of the form editor to save all your configurations.

![General Settings](/images/donation-and-product-fields/how-to-add-tax-calculated-amount-field-in-wordpress-with-paymattic/5.-General-Settings-2.webp)


::: warning Important
Use separate Tax Calculated Amount fields for each Payment Item field that needs different tax rates.
:::

### Advanced Settings

![Advanced Settings](/images/donation-and-product-fields/how-to-add-tax-calculated-amount-field-in-wordpress-with-paymattic/6.-Advanced-Field.webp)

Once you complete the **General** settings for your field, you can go to the **Advanced** tab to find more technical options.

#### Admin Label
This label is for internal use only. The text you enter here will be used as the field’s label in the admin backend (for example, on the **Entries** page). It will not be visible to the public, making it useful for adding notes or clarifying a field's purpose for your team.

#### Field Wrapper CSS Class
This is used for adding a custom CSS class to the entire field container (the wrapper). This allows you to apply unique styling like borders, margins, or background colors to the whole field element.

* **Note:** To learn more, see our guide on applying [**Custom CSS**](/form-settings/how-to-create-custom-css-js-in-wordpress-with-paymattic) to forms.

#### Input Elements CSS Class
This is used for adding a custom CSS class specifically to the `<input>` element itself. Use this to control the font, color, or other styles of the input box where data is entered or displayed.


#### Field ID
This option displays the unique ID assigned to the form field. It is primarily used for custom development, such as targeting the field with custom JavaScript or for integration purposes.

---

Once you finish, click the **Update** button to save all your configurations.


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