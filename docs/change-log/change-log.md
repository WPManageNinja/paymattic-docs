---
title: "Change Log"
category: "Change Log"
---

# Change Log

Stay updated with the latest improvements, new features, bug fixes, and performance enhancements in Paymattic.

## Version 4.6.21

_Released on May 07, 2026_

### ✨ New Features
- Adds Conditional option to choose payment method in email notifications

### 🚀 Improvements
- Improves compatibility with the Fluentforms-pdf
- Improves Customizable labels for recurring donation billing intervals
- Improves Translatable billing interval strings

### 🐞 Bug Fixes
- Fixes Namespace error in email notifications
- Fixes Stripe "No such customer" error from stale cached customers
- Fixes Payment Summary shortcode not rendering

---

## Version 4.6.20

_Released on April 16, 2026_

### ✨ New Features
- Adds Support for First Name and Last Name fields in LearnDash integration

### 🚀 Improvements
- Improves Full name handling for Billplz payments

### 🐞 Bug Fixes
- Fixes CSRF vulnerability in form submission, Stripe, Paystack, and Razorpay payment confirmation handlers
- Fixes Mailchimp configuration issue
- Fixes Fixed-amount coupon issue
- Fixes Billplz payment status issue on custom redirect

---

## Version 4.6.19

_Released on March 11, 2026_

### ✨ New Features
- Adds Payment status filter to user dashboard

### 🚀 Improvements
- Improves Currency symbol in report stats

### 🐞 Bug Fixes
- Fixes Address field conditional logic with custom fields
- Fixes Default currency detection in Reports
- Fixes Donation Advanced form duplication
- Fixes Google Sheets integration for guest users

---

## Version 4.6.18

_Released on February 27, 2026_

### ✨ New Features
- Adds Xendit Subscription support
- Adds Download invoice option in User Dashboard
- Adds Subscription cancellation for Authorize.net and Xendit in User Dashboard
- Adds Conditional render for Donation Component

### 🚀 Improvements
- Improves Currency sign position dynamic in leaderboard
- Improves WordPress media in PDF
- Improves UI for Field disabled
- Improves Stripe Direct bank transfer in the hosted checkout

### 🐞 Bug Fixes
- Fixes Refund issue for users with Paymattic Admin permission
- Fixes FluentCRM conditional list issue with multiple checkboxes
- Fixes Google Sheets sync issue with second address field
- Fixes Schedule security audit

---

## Version 4.6.17

_Released on December 04, 2025_

### ✨ New Features
- Adds IPN data in form data raw for Stripe payments

### 🐞 Bug Fixes
- Fixes security issues like sanitization and escaping

---

## Version 4.6.16

_Released on November 18, 2025_

### ✨ New Features
- Adds **Conditional logic** for Donation item in email
- Adds **Selection limit** for checkbox field in advanced settings

### 🚀 Improvements
- Improves Address field customization
- Improves Country field behavior in address fields

### 🐞 Bug Fixes
- Fixes shortcode handling for address and payment fields
- Fixes condition rendering for radio field
- Fixes currency switcher field issue in container
- Fixes payment total mismatch for the subscription payment
- Fixes backend validation issue for dynamic payment fields
- Fixes Webhook not triggering from pending to failed payment status
- Fixes recurring payments not showing in FCRM "Purchase History"
- Fixes custom amount issue in recurring payments for payment summary and total
- Fixes custom metadata issue in Stripe embedded payments

---

## Version 4.6.15

_Released on September 25, 2025_

### ✨ New Features
- Adds **Auto failed payment status** by time interval
- Adds **Conditional logic** in FluentCRM integration for payment fields
- Adds Paymattic Dashboard access for **multiple roles**
- Adds **Remove FluentCRM contact** after refund
- Adds **First/Last name mapping** in FluentCRM feed

### 🚀 Improvements
- Improves entries queries for **performance**
- Improves role updates in User Register integration

### 🐞 Bug Fixes
- Fixes forced media compression in HTML Markup field
- Fixes missing custom metadata in Stripe payments
- Fixes conditional logic with Address Country field
- Fixes payment summary translation on frontend

---

## Version 4.6.14

_Released on August 15, 2025_

### 🐞 Bug Fixes
- Fixes PHP version conflict with 7.4

---

## Version 4.6.13

_Released on August 14, 2025_

### ✨ New Features
- Adds **Full Name Component**
- Adds **E-Check** support for Authorize.Net Payment
- Adds **Duplicate Integration feed**
- Adds **Duplicate Notification feed**

### 🐞 Bug Fixes
- Fixes condition issue for radio, checkbox and select input field
- Fixes failed hook trigger for payment field
- Fixes payment method field operation with "0" payment amount
- Fixes Stripe subscription cancellations and permission grants for trialing users
- Fixes CSS issues in Tabular Product layout
- Fixes sorting functionality for table elements
- Fixes removal of special characters from confirmation redirect URL
- Fixes hide offline payment option after applying coupon
- Fixes conditionally render subscription

---

## Version 4.6.12

_Released on July 03, 2025_

### ✨ New Features
- Adds refund support for Stripe, Razorpay, Paystack, and Square
- Adds recently applied coupon list to reports
- Adds "On Payment Success" option in integrations
- Adds PayPal subscription cancellation from the user dashboard

### 🐞 Bug Fixes
- Fixes Payment summary render correctly when multiple forms are on the same page
- Fixes Zapier integration issue
- Fixes notification issue on payment success
- Fixes offline payment handling

---

## Version 4.6.11

_Released on June 16, 2025_

### ✨ New Features
- Adds tax support for subscription signup fee
- Adds filter to customize paymentItem title length

### 🐞 Bug Fixes
- Fixes IPN issue with payments
- Fixes tax calculation for subscription plans
- Fixes file upload validation issue
- Fixes CSS override conflict
- Fixes issue with subscription billing interval

---

## Version 4.6.10

_Released on May 21, 2025_

### ✨ New Features
- Adds automated email notifications for upcoming subscription renewals
- Adds support for multiple subscriptions in Stripe payments
- Adds translation support and missing translatable strings

### 🐞 Bug Fixes
- Fixes custom currency switcher value issues
- Fixes default image loading with base URL fallback
- Fixes image slide issue in tabular product items
- Fixes Google sheet access key verification issue

---

## Version 4.6.9

_Released on April 18, 2025_

### 🐞 Bug Fixes
- Fixes Load text domain incorrectly
- Fixes Authorize.Net live payment issue
- More bug fixes and improvements

---

## Version 4.6.8

_Released on April 07, 2025_

### 🐞 Bug Fixes
- Fixes notice issue

---

## Version 4.6.7

_Released on March 24, 2025_

### ✨ New Features
- Adds Dynamic payment field with numerical expression
- Adds Authorize.net payment gateway
- Adds condition rendering for tax field

### 🚀 Improvements
- Bug fixes and improvements

---

## Version 4.6.6

_Released on March 14, 2025_

### 🚀 Improvements
- Improves choose payment method component
- Improves Offline-payment method description field
- Removes displaying secret courses of Fluent Community in Paymattic dashboard

### 🐞 Bug Fixes
- Fixes Twenty Twenty-Five theme compatibility issue
- Fixes Email template shortcode rendering issue
- Fixes Unable to enroll in multiple LearnDash courses
- Fixes Broken donation input style in Safari
- Fixes Subscription amount total with tax
- Fixes User registration and activity creation on 100% discount

---

## Version 4.6.5

_Released on February 07, 2025_

### 🚀 Improvements
- Improves Donation progress stats bar is now enabled by default

### 🐞 Bug Fixes
- Fixes Container form field was not found in the integration feed issue
- Fixes CSS conflict affecting radio and checkbox inputs
- Fixes Password truncation issue

---

## Version 4.6.4

_Released on January 27, 2025_

### ✨ New Features
- Adds a placeholder option in the Name field for improved user experience

### 🚀 Improvements
- Resolves a conflict with the MasterStudy Plugin
- Resolves a conflict with the Complianz plugin
- Improves UI for Moneris checkout pages

### 🐞 Bug Fixes
- Fixes an issue with container field entries during export
- Fixes a responsive issue with the Payment Receipt layout

---

## Version 4.6.3

_Released on December 06, 2024_

### ✨ New Features
- Makes subscription field available in Tax field
- Makes Step form buttons editable

### 🚀 Improvements
- Improves Donation component's UI/UX

### 🐞 Bug Fixes
- Fixes issue on user registration with password field
- Fixes UI issues

---

## Version 4.6.2

_Released on November 06, 2024_

### 🚀 Improvements
- Makes recurring donation label editable

### 🐞 Bug Fixes
- Fixes user login redirect issue

---

## Version 4.6.1

_Released on October 29, 2024_

### ✨ New Features
- Adds Custom billing interval feature with interval count on subscription field
- Adds Fortnightly, Quarterly and Half Yearly options for recurring payment on both subscription and donation item field
- Adds donation progress bar on form specific donor leaderboard
- Adds ShortCode rendering on Dropdown field

### 🚀 Improvements
- Resolves Conditional logic on column container fields
- Improves product selection on tabular products fields

### 🐞 Bug Fixes
- Fixes Escaping/Sanitization issue
- Fixes Login Redirect issue
- Fixes issue on User dashboard
- Fixes CSS conflict on Date field
- Fixes Radio component (value missing) on bulk edit editor
- Fixes target item missing for container fields
- Fixes Square redirection issue
- Fixes rendering payment item's name on payment summary

---

## Version 4.6.0

_Released on October 03, 2024_

### ✨ New Features
- Adds Resizable column containers
- Adds Offline payment support for free users
- Adds Report page for free users
- Adds Form-specific leader-board
- Adds Option to set an initial raised amount for leaderboards
- Adds horizontal payment items option

### 🚀 Improvements
- Updates UI/UX for all modules
- Updates Donation recurring interval button for improved usability
- Improves Webhook integration
- Improves Phone field validation and formatting

### 🐞 Bug Fixes
- Fixes Google Sheets integration issue
- Fixes Alignment issue in custom HTML component
- Fixes Issue allowing "+" sign in the email field

---

## Version 4.5.8

_Released on September 05, 2024_

### ✨ New Features
- Adds Support for subscriptions with 100% discount coupons

### 🐞 Bug Fixes
- Fixes an issue where email notifications were not being sent on successful payments with the Stripe Embedded payment method
- Fixes the bug related to calling the undefined php_uname function
- Fixes Step form component rendering issues in the editor
- Fixes the issue with the payment item shortcode

---

## Version 4.5.7

_Released on June 12, 2024_

### 🚀 Improvements
- Improves Stripe error handling

### 🐞 Bug Fixes
- Fixes Stripe related issues

---

## Version 4.5.6

_Released on May 31, 2024_

### 🐞 Bug Fixes
- Fixes Stripe Embedded Checkout issue

---

## Version 4.5.5

_Released on May 29, 2024_

### ✨ New Features
- Adds Unique Email validation

### 🐞 Bug Fixes
- Fixes Conditional logic issue

---

## Version 4.5.4

_Released on May 23, 2024_

::: info Pro Features
- Adds VivaWallet payment gateway (addon)
:::

### ✨ New Features
- Adds Donation Progress Item on the free version
- Adds Form active/inactive option
- Adds Conditional logic for coupon code
- Adds New Free Donation and Payment templates
- Adds Necessary improvements to the User Dashboard
- Adds Necessary improvements to various modules

### 🐞 Bug Fixes
- Fixes minor issues

---

## Version 4.5.2

_Released on April 24, 2024_

::: info Pro Features
- Adds Moneris payment Gateway
:::

### ✨ New Features
- Adds Place a hold on a payment method (Stripe)
- Adds email notification on subscription cancel from user dashboard
- Adds Tax field on payment receipt in the payment summary section

### 🐞 Bug Fixes
- Fixes Paypal IPN issue
- Fixes Billplz validation issues
- Fixes Tax item calculation issue
- Fixes Payment summary related issue
- Fixes PDF related issue
- Fixes issue with conditional logic
- Fixes TutorLMS integration issue for paid courses

---

## Version 4.5.0

_Released on February 19, 2024_

### ✨ New Features
- Adds Customer Dashboard
- Adds PDF/Invoice
- Adds Donor Leaderboard
- Adds Filter in Single Form Entry Export
- Adds Maximum value option in number field
- Makes donation goal required to show statistic and progress bar

### 🐞 Bug Fixes
- Fixes Undo/Redo Issue on form editor
- Fixes Step form toggle issue
- Fixes String Translatable issue
- Fixes Razorpay payment checkout issue with tabular product
- Fixes Donation form custom amount issue
- Fixes Dropdown field Placeholder and Default Value issue
- Fixes Tabular product image upload issue
- Fixes Tabular product template choose issue
- Fixes Entry exporting issue
- Fixes Payment summary issue for subscription items

---

## Version 4.4.4

_Released on October 16, 2023_

### 🐞 Bug Fixes
- Fixes Email notification translation string issue
- Fixes Large screen responsive issue

---

## Version 4.4.3

_Released on October 05, 2023_

::: info Pro Features
- Adds Flutterwave payment gateway addon
:::

### ✨ New Features
- Adds Currency Switcher
- Adds applied coupons column on exported entries
- Adds currency sign on payment summary
- Makes Address field a free feature

### 🐞 Bug Fixes
- Fixes email validation issue for certain domains
- Fixes fractional mismatch issue on Tax percentage
- Fixes payment display mismatch upon fixed discount applied
- Fixes custom payment credentials settings issue
- Fixes Square Item name

---

## Version 4.4.2

_Released on July 10, 2023_

::: info Pro Features
- Adds Square subscription payment
- Adds Xendit payment gateway addon
:::

### ✨ New Features
- Adds Autologin on LMS integration

### 🐞 Bug Fixes
- Fixes entry rendering issue
- Fixes Coupon or discount-related issues
- Fixes Payments information issues on Entry module
- Fixes 100% coupon issue
- Fixes custom URL issue on payment success
- Fixes Autologin issue on User Registration

---

## Version 4.3.5

_Released on May 12, 2023_

### 🐞 Bug Fixes
- Fixes entry exporting issue
- Fixes quantity field of Tabular Product Item issue
- Fixes Tabular Product Item field's product name issue
- Fixes Dropdown field's placeholder and default value issue
- Fixes form entry rendering issue
- Fixes payment methods and logo rendering issues
- Fixes currency sign issue
- Fixes string translation issue

---

## Version 4.3.4

_Released on March 13, 2023_

### ✨ New Features
- Adds hidden input support on conditional logic
- Adds advanced date configuration
- Adds Simple form templates label editable
- Adds product variation price
- Adds LMS integration module updates

### 🐞 Bug Fixes
- Fixes TutorLMS integration offline payment issue
- Fixes Billplz donation templates issue
- Fixes coupon amount issue
- Fixes single form entry rendering issue
- Fixes translation issue
- Fixes add more fields button issue
- Fixes Step forms issue with Elementor/WPBakery
- Fixes entry export issue for checkbox
- Fixes Asynchronous issues on integration module

---

## Version 4.3.3

_Released on January 18, 2023_

### ✨ New Features
- Adds shopping cart templates
- Adds offline subscription management
- Adds new demo form for product cart template

### 🐞 Bug Fixes
- Fixes Stripe Webhook issue
- Fixes shortcode bug for integration
- Fixes Step-form backward validation issue

---

## Version 4.3.2

_Released on December 08, 2022_

### ✨ New Features
- Adds Step form
- Adds Turnstile (Cloudflare) security
- Adds Subscription management from the dashboard
- Adds Support for PHP 8.1
- Adds AliPay, Sepa Debit, and ACH debit for Stripe

### 🐞 Bug Fixes
- Fixes Elementor popup issue
- Fixes Form payment settings issue
- Fixes Consent field conditional logic
- Fixes Export issue
- Fixes Payments receipt breaking issue
- Fixes 3D secure payment issue
- Fixes Other minor issues

---

## Version 4.3.1

_Released on November 10, 2022_

::: info Pro Features
- Adds Billplz gateway (Malaysian gateway)
:::

### ✨ New Features
- Adds Google Sheet integration
- Adds Developer API for Payment modules

### 🐞 Bug Fixes
- Fixes Receipt issue
- Fixes Confirmation URL issue
- Fixes Tax with donation component
- Fixes UI and full-screen app issues
- Fixes Donation template default image issue

---

## Version 4.3.0

_Released on October 20, 2022_

### ✨ New Features
- Adds New Advanced Form Editor
- Adds Donation template customizer
- Adds New UI refactors
- Adds Conditional email notification
- Adds Coupon Limit by user
- Adds Fluent Support Integration

### 🐞 Bug Fixes
- Fixes Coupon issue
- Fixes other multiple issues

---

## Version 4.2.2

_Released on August 16, 2022_

### 🐞 Bug Fixes
- Fixes Payment total with tax and coupon issue
- Fixes Select field issue with required checked

---

## Version 4.2.1

_Released on August 06, 2022_

### 🚀 Improvements
- Data sanitization and esc_* improvements

---

## Version 4.2.0

_Released on August 05, 2022_

::: info Pro Features
- Adds Customer Profile
:::

### ✨ New Features
- Adds Condition with dynamic payment items
- Adds 100% discount with coupon payment

### 🚀 Improvements
- Improves API security
- Fixes other minor issues

### 🐞 Bug Fixes
- Fixes Multi-site activation issue
- Fixes File upload/export issue

---

## Version 4.1.0

_Released on July 07, 2022_

### ✨ New Features
- Adds Conditional logic on input fields
- Adds LifterLMS course Integration
- Adds LearnDash course Integration
- Adds TutorLMS course Integration

### 🐞 Bug Fixes
- Fixes Shortcode bug
- Fixes Stripe custom credentials bug
- Fixes Offline payment with subscription issue

---

## Version 4.0.1

_Released on June 16, 2022_

### 🐞 Bug Fixes
- Fixes reports no data validation
- Fixes Menu spell issue

---

## Version 4.0.0

_Released on June 15, 2022_

::: info Pro Features
- Adds Square payment gateway
- Adds Payrexx payment gateway
- Adds SSLCOMMERZ Payment Gateway
- Adds Webhook
- Adds Telegram
- Adds Twilio (SMS)
:::

### ✨ New Features
- Adds New UI with more light — free and pro plugin
- Adds Global Reports modules for payments
- Adds subscription sync option
- Adds Donation field
- Adds Phone field
- Adds Payment Summary
- Adds Form Individual stripe settings
- Adds Custom PayPal settings for individual form
- Adds Stripe donation
- Adds Card supports for Stripe settings (Ideal, FPX, BACS direct debit (UK), Bancontact, Giropay, Przelewy24 (P24), EPS)
- Adds Zapier
- Adds more prebuilt demo forms
- Adds real-time searchable forms
- Adds export form searchable
- Adds Payment method with image format
