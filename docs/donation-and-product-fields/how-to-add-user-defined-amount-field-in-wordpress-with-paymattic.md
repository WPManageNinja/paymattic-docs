---
title: "How to Add Custom Payment Amount Field in WordPress with Paymattic?"
category: "Donation and Product Fields"
---

# How to Add Custom Payment Amount Field in WordPress with Paymattic

[Paymattic](https://paymattic.com/) provides a **Custom Payment Amount** field that allows users to enter their own payment amount. This feature is perfect for donations, flexible pricing, or any scenario where users need to specify their own payment value.

::: tip Key Benefits
- Allow users to enter custom payment amounts
- Set minimum payment thresholds
- Add default suggested amounts
- Enable real-time calculations
- Perfect for donations and flexible pricing
:::

## Adding Custom Payment Amount Field

To add the Custom Payment Amount field to your Paymattic Form, follow these steps:

First, go to the **All Forms** section from the **Paymattic Navbar**, choose a **Form**, and click the **Pencil/Edit** icon to open the **Editor** page of that form.

::: tip
If you do not have any existing form, you can:
- [Create a Form from Scratch](/form-editor/how-to-create-a-form-from-scratch-with-paymattic)
- [Create a Form using Templates](/form-editor/simple-form-templates)
:::

![Open Form Editor](/images/donation-and-product-fields/how-to-add-user-defined-amount-field-in-wordpress-with-paymattic/1.-Open-desired-form-3-scaled.webp)

Once you open the **Editor** page, add the **Custom Payment Amount** field by either:
- Typing **"/"** in the editor
- Clicking the **Plus Icon** at the bottom

::: warning Required Fields
Always include these fields at the start of your form:
1. [Name Field](/general-input-fields/how-to-use-general-form-input-fields-in-wordpress-with-paymattic#_1-name-field)
2. [Email Field](/general-input-fields/how-to-use-general-form-input-fields-in-wordpress-with-paymattic#_2-email-field)
3. [Payment Method Field](/general-input-fields/how-to-use-the-payment-method-fields-section) (for processing payments)
:::

![Add Field Options](/images/donation-and-product-fields/how-to-add-user-defined-amount-field-in-wordpress-with-paymattic/2.-Type-or-click-icon-3.webp)

Select the **Custom Payment Amount** field under the **Donation & Product Fields** section:

![Custom Amount Field Selection](/images/donation-and-product-fields/how-to-add-user-defined-amount-field-in-wordpress-with-paymattic/3.-Custom-Amount-field.webp)

## Customizing the Field

To customize the Custom Payment Amount field, click the **Settings Icon** in the right corner:

![Access Settings](/images/donation-and-product-fields/how-to-add-user-defined-amount-field-in-wordpress-with-paymattic/4.-Settings-Icon-3.webp)

### General Settings

![General Settings](/images/donation-and-product-fields/how-to-add-user-defined-amount-field-in-wordpress-with-paymattic/5.-General-Settings-1.webp)

Configure these basic options:

1. **Required Field**:
   - Make the amount entry mandatory
   - Ensures payment information is provided

2. **Default Value**:
   - Set a suggested amount
   - Use Smartcodes like {querystring:YOUR_KEY}
   - Click the Shortcode Icon for options

3. **Minimum Value**:
   - Set the minimum acceptable amount
   - Prevent amounts below threshold

### Advanced Settings

![Advanced Settings](/images/donation-and-product-fields/how-to-add-user-defined-amount-field-in-wordpress-with-paymattic/6.-Advanced-Settings-2.webp)

The Advanced tab offers these powerful features:

1. **Admin Options**:
   - **Admin Label**: Custom backend label
   - **Field ID**: For tracking and custom styling

2. **Styling**:
   - **Field Wrapper CSS**: Style the entire field
   - **Input Elements CSS**: Style specific inputs
   - Learn about [Custom CSS/JS](/form-settings/how-to-create-custom-css-js-in-wordpress-with-paymattic)

3. **Logic & Calculations**:
   - **Conditional Render**: Show/hide based on conditions
   - Learn about [Conditional Logic](/form-editor/how-to-use-conditional-logic-in-form-fields-with-paymattic)
   - **Enable Calculation**: For real-time math operations
   - **Calculation Expression**: Define math formulas
   - More about [Dynamic Calculations](/donation-and-product-fields/dynamic-payment-item-field#calculations)

4. **Data Integrity**:
   - **Additional Checks**: Extra validation layer
   - Ensures data accuracy

## Adding to Your Site

1. Configure all settings
2. Copy the provided shortcode
3. Paste into your desired page/post
4. Preview using the Eye icon

![Form Management Options](/images/donation-and-product-fields/how-to-add-user-defined-amount-field-in-wordpress-with-paymattic/7.-save.-preview-and-shortcode-buttons.webp)

## Preview

Here's how the Custom Payment Amount field appears to users:

![Custom Amount Field Preview](/images/donation-and-product-fields/how-to-add-user-defined-amount-field-in-wordpress-with-paymattic/8.-Preview-of-Custom-amount-field.webp)

::: tip Best Practices
1. **Amount Suggestions**:
   - Set reasonable default values
   - Use clear minimum amounts
   - Consider your target audience

2. **Validation**:
   - Enable required field for important forms
   - Set appropriate minimum values
   - Use additional checks for sensitive forms

3. **User Experience**:
   - Add clear field labels
   - Include currency symbols
   - Provide amount guidelines
:::

::: warning Testing
Always test your payment form:
1. Try different amount entries
2. Verify minimum amount enforcement
3. Check calculation accuracy
4. Test on mobile devices
:::

Need help? Contact our [support team](https://wpmanageninja.com/support-tickets/) for assistance!