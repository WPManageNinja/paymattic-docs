---
title: "Change Log"
category: "Change Log"
---

# Change Log

## Version 4.6.16 (November 18, 2025)
- Adds **Conditional logic** for Donation item in email.
- Adds **Selection limit** for checkbox field in advanced settings.
- Fixes shortcode handling for address and payment fields.
- Fixes condition rendering for radio field.
- Fixes currency switcher field issue in container.
- Fixes payment total mismatch for the subscription payment.
- Fixes backend validation issue for dynamic payment fields.
- Fixes Webhook not triggering from pending to failed payment status.
- Fixes recurring payments not showing in FCRM “Purchase History”.
- Fixes custom amount issue in recurring payments for payment summary and total.
- Fixes custom metadata issue in Stripe embedded payments.
- Improves Address field customization.
- Improves Country field behavior in address fields.

## Version 4.6.15 (September 25, 2025)
- Adds **Auto failed payment status** by time interval.
- Adds **Conditional logic** in FluentCRM integration for payment fields.
- Adds Paymattic Dashboard access for **multiple roles**.
- Adds **Remove FluentCRM contact** after refund.
- Adds **First/Last name mapping** in FluentCRM feed
- Fixes forced media compression in HTML Markup field.
- Fixes missing custom metadata in Stripe payments.
- Fixes conditional logic with Address Country field.
- Fixes payment summary translation on frontend.
- Improves entries queries for **performance**.
- Improves role updates in User Register integration.

## Version 4.6.14 (August 15, 2025)
- Fixes PHP version conflict with 7.4

## Version 4.6.13 (August 14, 2025)
- Adds **Full Name Component**
- Adds **E-Check** support for Authorize.Net Payment
- Adds **Duplicate Integration feed**
- Adds **Duplicate Notification feed**
- Fixes condition issue for radio, checkbox and select input field
- Fixes failed hook trigger for payment field
- Fixes payment method field operation with “0” payment amount.
- Fixes Stripe subscription cancellations and permission grants for trialing users
- Fixes CSS issues in Tabular Product layout
- Fixes sorting functionality for table elements
- Fixes removal of special characters from confirmation redirect URL
- Fixes hide offline payment option after applying coupon
- Fixes conditionally render subscription

## Version 4.6.12 (July 03, 2025)
- Adds refund support for Stripe, Razorpay, Paystack, and Square.
- Adds recently applied coupon list to reports.
- Adds “On Payment Success” option in integrations.
- Adds PayPal subscription cancellation from the user dashboard.
- Fixes Payment summary render correctly when multiple forms are on the same page.
- Fixes Zaiper integration issue.
- Fixes notification issue on payment success.
- Fixes offline payment handling.

## Version 4.6.11 (June 16, 2025)
- Adds tax support for subscription signup fee
- Adds filter to customize paymentItem title length
- Fixes IPN issue with payments
- Fixes tax calculation for subscription plans
- Fixes file upload validation issue
- Fixes CSS override conflict
- Fixes issue with subscription billing interval

## Version 4.6.10 (May 21, 2025)
- Adds automated email notifications for upcoming subscription renewals
- Adds support for multiple subscriptions in Stripe payments
- Adds translation support and missing translatable strings
- Fixes custom currency switcher value issues
- Fixes default image loading with base URL fallback
- Fixes image slide issue in tabular product items
- Fixes Google sheet access key verification issue

## Version 4.6.9 (April 18, 2025)
- Fixes Load text domain incorrectly
- Fixes Authorize.Net live payment issue
- More Bug fixes and improvements

## Version 4.6.8 (April 07, 2025)
- Fixes notice issue

## Version 4.6.7 (March 24, 2025)
- Adds Dynamic payment field with numerical expression
- Adds Authorize.net payment gateway
- Adds condition rendering for tax field
- Bug fixes and improvements

## Version 4.6.6 (March 14, 2025)
- Fixes Twenty Twenty-Five theme compatibility issue
- Fixe Email template shortcode rendering issue
- Fixes Unable to enroll in multiple LearnDash courses
- Fixes Broken donation input style in Safari
- Fixes Subscription amount total with tax
- Fixes User registration and activity creation on 100% discount
- Removes Displaying secret courses of (Fluent Community) in Paymattic dashboard
- Improve choose payment method component
- Improve Offline-payment method description field

## Version 4.6.5 (February 7, 2025)
- Fixes Container form field was not found in the integration feed issue
- Fixes CSS conflict affecting radio and checkbox inputs
- Fixes Password truncation issue
- Improve Donation progress stats bar is now enabled by default

## Version 4.6.4 (January 27, 2025)
- Adds A placeholder option in the Name field for improved user experience
- Fixes An issue with container field entries during export
- Fixes A responsive issue with the Payment Receipt layout
- Resolved A conflict with the MasterStudy Plugin
- Fixed A conflict with the Complianz plugin
- Improved UI for Moneris checkout pages

## Version 4.6.3 (December 06, 2024)
- Made subscription field available in Tax field
- Made Step form buttons editable
- Fixes issue on user registration with password field
- Fixes Ui issues
- Improves Donation component's UI/UX

## Version 4.6.2 (November 06, 2024)
- Made recurring donation label editable
- Fixes user login redirect issue

## Version 4.6.1 (October 29, 2024)
- Adds Custom billing interval feature with interval count on subscription field
- Adds (Fortnightly, Quarterly and Half Yearly) Options for recurring payment on both subscription and donation item field
- Adds donation progress bar on form specific donor leaderboard
- Adds ShortCode rendering on Dropdown field
- Resolves Conditional logic on column container fields
- Improves product selection on tabular products fields
- Fixes Escaping/Sanitization issue
- Fixes Login Redirect issue
- Fixes issue on User dashboard
- Fixes css conflict on Date field
- Fixes Radio component (value missing) on bulk edit editor
- Fixes target item missing for container fields
- Fixes Square redirection issue
- Fixes rendering payment item's name on payment summary

## Version 4.6.0 (October 3, 2024)
- Updates UI/UX for all modules
- Adds Resizable column containers
- Adds Offline payment support for free users
- Adds Report page for free users
- Adds Form-specific leader-board
- Adds Option to set an initial raised amount for leaderboards
- Adds horizontal payment items option
- Updates Donation recurring interval button for improved usability
- Improves Webhook integration
- Improves Phone field validation and formatting
- Fixes Google Sheets integration issue
- Fixes Alignment issue in custom HTML component
- Fixes Issue allowing "+" sign in the email field

## Version 4.5.8 (September 5, 2024)
- Adds Support for subscriptions with 100% discount coupons
- Fixes an issue where email notifications were not being sent on successful payments with the Stripe Embedded payment method
- Fixes the bug related to calling the undefined php_uname function
- Fixes Step form component rendering issues in the editor
- Fixes the issue with the payment item shortcode

## Version 4.5.7 (June 12, 2024)
- Fixes Stripe related issues
- Improvement Stripe error handling

## Version 4.5.6 (May 31, 2024)
- Fixes Stripe Embedded Checkout issue

## Version 4.5.5 (May 29, 2024)
- Adds Unique Email validation
- Fixes Conditional logic issue

## Version 4.5.4 (May 23, 2024)
::: info Pro Features
- Adds VivaWallet payment gateway (addon)
:::
- Adds Donation Progress Item on the free version
- Adds Form active/inactive option
- Adds Conditional logic for coupon code
- Adds New Free Donation and Payment templates
- Adds Necessary improvements to the User Dashboard
- Adds Necessary improvements to various modules
- Fixes minor issues

## Version 4.5.2 (April 24, 2024)
::: info Pro Features
- Adds Moneris payment Gateway
:::
- Adds Place a hold on a payment method (Stripe)
- Adds email notification on subscription cancel from user dashboard
- Adds Tax field on payment receipt in the payment summary section
- Fixes Paypal IPN issue
- Fixes Billplz validation issues
- Fixes Tax item calculation issue
- Fixes Payment summary related issue
- Fixes PDF related issue
- Fixes issue with conditional logic
- Fixes TutorLMS integration issue for paid courses

## Version 4.5.0 (February 19, 2024)
- Adds Customer Dashboard
- Adds PDF/Invoice
- Adds Donor Leaderboard
- Add Filter In Single Form Entry Export
- Add Maximum value option in number field
- Makes donation goal required to show statistic and progress bar
- Fixes Undo/Redo Issue on form editor
- Fixes Step form toggle issue
- Fixes String Translatable issue
- Fixes Razorpay payment checkout issue with tabular product
- Fixes Donation form custom amount issue
- Fixes Dropdown field Placeholder and Default Value issue
- Fixes Tabular product image upload issue
- Fixes Tabular product template choose issue
- Fixes Entry exporting issue
- FIxes Payment summary issue for subscription items

## Version 4.4.4 (October 16, 2023)
- Fixes Email notification translation string issue
- Fixes Large screen responsive issue

## Version 4.4.3 (October 05, 2023)
::: info Pro Features
- Adds Flutterwave payment gateway addon
:::
- Adds Currency Switcher
- Adds applied coupons column on exported entries
- Adds currency sign on payment summary
- Makes Address field a free feature
- Fixes email validation issue for certain domains
- Fixes fractional mismatch issue on Tax percentage
- Fixes payment display mismatch upon fixed discount applied
- Fixes custom payment credentials settings issue
- Fixes Square Item name

## Version 4.4.2 (July 10, 2023)
::: info Pro Features
- Adds Square subscription payment
- Adds Xendit payment gateway addon
:::
- Adds Autologin on LMS integration
- Fixes entry rendering issue
- Fixes Coupon or discount-related issues
- Fixes Payments information issues on Entry module
- Fixes 100% coupon issue
- Fixes custom URL issue on payment success
- Fixes Autologin issue on User Registration

## Version 4.3.5 (May 12, 2023)
- Fixes entry exporting issue
- Fixes quantity field of Tabular Product Item issue
- Fixes Tabular Product Item field's product name issue
- Fixes Dropdown field's placeholder and default value issue
- Fixes form entry rendering issue
- Fixes payment methods and logo rendering issues
- Fixes currency sign issue
- Fixes string translation issue

## Version 4.3.4 (March 13, 2023)
- Fixes TutorLMS integration offline payment issue
- Fixes Billplz donation templates issue
- Fixes coupon amount issue
- Fixes single form entry rendering issue
- Fixes translation issue
- Fixes add more fields button issue
- Fixes Step forms issue with Elementor/WPBakery
- Fixes entry export issue for checkbox
- Fixes Asynchronous issues on integration module
- Adds hidden input support on conditional logic
- Adds advanced date configuration
- Adds Simple form templates label editable
- Adds product variation price
- Adds LMS integration module updates

## Version 4.3.3 (January 18, 2023)
- Adds shopping cart templates
- Adds offline subscription management
- Adds new demo form for product cart template
- Fixes Stripe Webhook issue
- Fixes shortcode bug for integration
- Fixes Step-form backward validation issue

## Version 4.3.2 (December 08, 2022)
- Adds Step form
- Adds Turnstile (Cloudflare) security
- Adds Subscription management from the dashboard
- Adds Support for PHP 8.1
- Adds AliPay, Sepa Debit, and ACH debit for Stripe
- Fixes Elementor popup issue
- Fixes Form payment settings issue
- Fixes Consent field conditional logic
- Fixes Export issue
- Fixes Payments receipt breaking issue
- Fixes 3D secure payment issue
- Fixes Other minor issues

## Version 4.3.1 (November 10, 2022)
::: info Pro Features
- Adds Billplz gateway (Malaysian gateway)
:::
- Adds Google Sheet integration
- Adds Developer API for Payment modules
- Fixes Receipt issue
- Fixes Confirmation URL issue
- Fixes Tax with donation component
- Fixes UI and full-screen app issues
- Fixes Donation template default image issue

## Version 4.3.0 (October 20, 2022)
- Adds New Advanced Form Editor
- Adds Donation template customizer
- Adds New UI refactors
- Adds Conditional email notification
- Adds Coupon Limit by user
- Fluent Support Integration
- Fixes Coupon issue
- Fixes other Multiple issues

## Version 4.2.2 (August 16, 2022)
- Fixes Payment total with tax and coupon issue
- Fixes Select field issue with required checked

## Version 4.2.1 (August 06, 2022)
- Data sanitization and esc_* improvements

## Version 4.2.0 (August 05, 2022)
::: info Pro Features
- Added Customer Profile
:::
- Added Condition with dynamic payment items
- Added 100% discount with coupon payment
- Fixed Multi-site activation issue
- Fixed File upload/export issue
- Fixed API security updates
- Fixed Other minor issues

## Version 4.1.0 (July 07, 2022)
- Added Conditional logic on input fields
- Added LifterLMS course Integration
- Added LearnDash course Integration
- Added TutorLMS course Integration
- Fixed Shortcode bug
- Fixed Stripe custom credentials bug
- Fixed Offline payment with subscription issue

## Version 4.0.1 (June 16, 2022)
- Fixed reports no data validation
- Fixed Menu spell issue

## Version 4.0.0 (June 15, 2022)
::: info Pro Features
- Added Square payment gateway
- Added Payrexx payment gateway
- Added SSLCOMMERZ Payment Gateway
- Added Webhook
- Added Telegram
- Added Twillo (SMS)
:::
- Added New UI with more light-free and pro plugin
- Added Global Reports modules for payments
- Added subscription sync option
- Added Donation field
- Added Phone field
- Added Payment Summary
- Added Form Individual stripe settings
- Added Custom PayPal settings for individual form
- Added Stripe donation
- Added Card supports for stripe settings (Ideal, FPX, BACS direct debit(UK), Bancontact, Giropay, Przelewy24 (P24), EPS)
- Added Zapier
- Added more prebuild demo forms
- Added real-time searchable forms
- Added export form searchable
- Added Payment method with image format