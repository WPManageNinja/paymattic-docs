---
title: "Create A Custom Payment Gateway For Paymattic"
description: ""
---

# Create A Custom Payment Gateway For Paymattic

Paymattic allows you to extend its functionality by creating a custom payment gateway add-on for regional or specific business needs. If you are a developer or have a team with coding experience, you can create your own custom payment gateway for Paymattic.

This article will guide you through building a complete payment gateway add-on that handles payments, manages subscriptions, and processes refunds.

## Prerequisites

To build and integrate a custom payment gateway, you will need:

- The **Paymattic Pro Plugin** is installed on your WordPress site.
- Developer skills or a development team to create the custom code.

## Steps to Build Your Payment Gateway

Your custom payment gateway add-on can be created in only six steps, making it ready to process real transactions.

### Step 1: Set up your plugin structure

Before diving into the code, set up a clean and organized folder layout for your plugin. Here is the recommended folder structure:

```
your-gateway-for-paymattic/ (main plugin folder)
├── your-gateway-for-paymattic.php (main plugin file)
├── API/
│   ├── YourGatewayProcessor.php (payment logic)
│   └── API.php (gateway API calls)
└── Settings/
    ├── YourGatewayElement.php (form element)
    └── YourGatewaySettings.php (admin settings)
```

### Step 2: Register your payment gateway

Open your main plugin file and add the required header to register your plugin with WordPress.

```php

Plugin Name: YourGateway For Paymattic
Description: Custom payment gateway for Paymattic

```

This tells WordPress what your plugin is and helps Paymattic recognize it as a compatible payment gateway.

### Step 3: Set up the processor init() method

The heart of your integration is the `init()` method within your processor file, where you connect your custom gateway to Paymattic's payment engine.

You must initialize your components and hook into Paymattic's payment system:

```php
public function init() {
    // Initialize your components
    new YourGatewayElement();
    (new YourGatewaySettings())->init();
    (new YourGatewayAPI());
    
    // Hook into Paymattic's payment system
    add_filter('wppayform/choose_payment_method_for_submission', array($this, 'choosePaymentMethod'), 10, 4);
    add_action('wppayform/form_submission_make_payment_yourgateway', array($this, 'makeFormPayment'), 10, 7);
    add_action('wppayform_load_checkout_js_yourgateway', array($this, 'addCheckoutJs'), 10, 3);
}
```

### Step 4: Create the payment element

Now you must make your gateway visible to users in the Paymattic form builder. To do this, extend Paymattic's `BaseComponent` and define your gateway details:

- Set your gateway name so Paymattic can identify it.
- Add your logo or brand icon to display in the payment options.
- Define the label for the payment method that users will see on the form.
- Push it to the list of available payment methods.

### Step 5: Build your API and Settings classes

You will build two key classes that ensure your gateway is secure and configurable:

- **Settings Class**: This class manages everything related to admin configuration, including API credentials and live/test mode toggles.
- **API Class**: This class handles the actual communication with your payment provider, sending requests and receiving transaction responses securely.

### Step 6: Configure your gateway fields

Your final task is to define the fields your gateway requires in the admin panel by using the `globalFields()` method inside your settings class.

Paymattic supports several field types, including:

- `payment_mode` – Switch between Test and Live environments.
- `test_pub_key` & `live_pub_key` – Public API keys.
- `test_secret_key` & `live_secret_key` – Secret API keys.
- `text` – For custom labels or button text.
- `checkbox` – To enable or disable specific features.
- `html_attr` – For documentation links or webhook URLs.

An example field setup looks like this:

```php
public function globalFields() {
    return array(
        'payment_mode' => array(
            'type' => 'payment_mode',
            'options' => array('test' => 'Test', 'live' => 'Live')
        ),
        'live_api_key' => array(
            'type' => 'live_pub_key',
            'required' => true,
            'label' => 'Live API Key'
        ),
        'button_text' => array(
            'type' => 'text', 
            'value' => 'Pay with YourGateway'
        )
    );
}
```

Paymattic automatically generates a clean admin interface based on your field definitions.

## Test and Deploy

You do not have to start from scratch. To save time, you can grab Paymattic's live Mollie add-on as your base structure and build from there.

Here is your quick launch checklist:

1. Download the [Mollie add-on](https://github.com/WPManageNinja/mollie-for-paymattic) from Paymattic's GitHub repository.
2. Replace every instance of "mollie" with your gateway's name.
3. Update the API calls to connect your chosen payment provider.
4. Run a quick test and then deploy.


## Reference Example Gateways

To help accelerate your development process, you can reference the full, working code of Paymattic's official payment gateway add-ons. These repositories serve as excellent starting templates for building your custom gateway:

 * **Mollie:** https://github.com/WPManageNinja/mollie-for-paymattic
 * **VivaWallet:** https://github.com/WPManageNinja/vivawallet-payment-for-paymattic
 * **Moneris:** https://github.com/WPManageNinja/moneris-payment-for-paymattic
 * **Flutterwave:** https://github.com/WPManageNinja/flutterwave-payment-for-paymattic
 * **Authorize.net:** https://github.com/WPManageNinja/authorizedotnet-for-paymattic
 * **Xendit:** https://github.com/WPManageNinja/xendit-payment-for-paymattic

This way, integrating a payment gateway takes under an hour, rather than weeks of complex documentation and debugging.

::: tip Need Help?
If you have any questions, concerns, or suggestions, please [contact our support team](https://wpmanageninja.com/support-tickets/). We're here to help!
:::

