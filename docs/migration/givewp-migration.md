---
title: "How to Migrate GiveWP into Paymattic"
category: "Migration"
---

# How to Migrate GiveWP into Paymattic

[Paymattic](https://paymattic.com/) offers a dedicated migration tool that allows you to move your entire donation ecosystem, including forms, donors, historical donations, recurring subscriptions, custom fields, and notification settings in a structured and reversible workflow.

This guide provides a detailed walkthrough of the migration interface and covers essential post-migration adjustments to prevent data discrepancy or broken payment loops.


First, go to **Settings** from the **Paymattic** sidebar menu. Click the **Migrator** tab from the left sidebar to open the migration interface.

## Before You Start: Requirements & Safety

The migrator writes data directly into your database. To prevent incomplete migrations or data corruption, make sure your site meets the following requirements before executing the tool:

 * **GiveWP (Free or Pro):** Must be installed and actively running on your site. Do not deactivate GiveWP until the validation report confirms a successful transfer.
 * **Paymattic Pro:** The migration module detects and converts advanced structures (such as recurring rules, custom metadata, and currency switchers) which require an active premium license.
 * **Database Backup:** Always run a full site/database backup or execute the initial migration on a staging copy of your website first.

## Understanding Data Migration Scope

To eliminate confusion regarding exactly what maps over and what does not, review the functional breakdown below:

### What Will Be Migrated Automatically

 * **Donation Forms:** Core titles, descriptions, goals, display statuses, and custom target caps.
 * **Donors & Role Mapping:** Donor profiles are preserved. Users assigned the `give_donor` role are safely assigned permissions to seamlessly log into the front-end Paymattic User Dashboard post-migration.
 * **Donations & Payment Status:** Individual transaction histories are converted accurately (e.g., GiveWP's `complete` maps directly to Paymattic's paid, along with `pending` and `refunded` states).
 * **Multi-level Donation Amounts:** Set amount points, custom input configurations (minimum/maximum caps), and layouts map to matching Paymattic fields.
 * **Supported GiveWP Add-ons:** Built-in extraction for **Recurring Donations** (daily, weekly, monthly, yearly, quarterly, fortnightly, half-yearly frequencies), **Gift Aid**, **Form Field Manager (FFM)**, and **Currency Switcher**.

### What Will NOT Be Migrated (Out of Scope)

 - Peer-to-Peer (P2P) campaigns & Tributes / Memorial data (No direct Paymattic structural equivalent).
 - Annual Receipts & Sequential Donation IDs.
 - Payment Gateway API Credentials (Gateway credentials are not exportable between different plugin architectures; these must be configured globally in Paymattic settings).

## Step 1: Pre-flight Check

- Navigate to **Paymattic Pro → Settings → Migrator**.
- Click the orange **Run A Pre-flight Check** button.

The environment scanner will map active dependencies, calculate overall totals, and trigger system warning flags if Paymattic Pro features are needed to handle active tracking components.

 - **Add-on Compatibility:** The migrator will automatically detect GiveWP add-ons such as Recurring Donations, Gift Aid, Form Field Manager (FFM), and Currency Switcher.
 - If you are migrating Currency Switcher data or complex payment gateways, ensure Paymattic Pro is active; otherwise, these specific elements will not migrate.

> [!IMPORTANT]
> If Paymattic Pro is not active, you will see a warning message. Donations from PayPal, Razorpay, Mollie, Paystack, and Square will still be migrated with the correct gateway name. However, some Pro-only features such as gateway dashboard links and advanced reports will not be available until you activate Paymattic Pro.

![Pre-flight Check](/images/migration/givewp-migration/pre-flight-check-1.webp)

## Step 2: Review Pre-flight Results & Options

Once the check is complete, you will see a summary of your system status and a preview of the data available for migration.

1. **System Status & Environment:** Confirms platform detection statuses and records local server specifications (PHP version and memory thresholds).
2. **Migration Preview:** Displays the exact volume numbers of found records categorized into **Donations**, **Forms**, and detected add-on modules.
3. **Migration Options:** If you want sandbox or staging transactions moved along with your operational database records, check the box for **Include test-mode donations**.
4. Click the orange **Start Migration** button to activate the processing wizard. You can also click Back to abandon the cycle safely.


![Review Pre-flight Results](/images/migration/givewp-migration/start-migration-2.webp)


## Step 3: Validation Report

After the migration finishes, you will be presented with a **Validation Report** to confirm that the data was transferred successfully.

**Migration Success Banner:** A green confirmation banner will appear at the top stating: "Migration complete. All your GiveWP data has been moved to Paymattic. Review the summary below."

**View All Forms:** A dedicated orange View **All Forms** button is available inside the success banner to quickly let you view your newly created forms.

**Migration Summary:** Shows the exact status of your migrated items (e.g., 1 / 1 Forms and 5 / 7 Donations successfully moved) along with any logged Errors.

**Available Actions:**
  * **Download JSON:** Click this button at the right side of the Migration Summary bar to export the full migration report as a JSON file for your records.
  * **Reset migration:** Click this expandable section at the bottom to access system recovery tools if needed.

![Validation Report](/images/migration/givewp-migration/migration-summary-3.webp)

#### Crucial Post-Migration Checklist

To avoid processing drops, lost renewals, or operational downtime, perform these critical steps immediately after migration:

 * **Update Payment Gateway Webhooks: > CRITICAL WARNING:** Your payment processors (Stripe, PayPal, etc.) are still sending events to your old GiveWP endpoint. You must log into your gateway dashboards and update the webhook URL to point to Paymattic so ongoing subscription renewals continue syncing.
 * **Verify Migrated Entries:** Go to **Entries** from the top navbar or admin sidebar. Cross-reference your transaction IDs, donor records, and payment statuses against your legacy records to ensure accuracy.
 * **Test a Live Transaction:** Run a small live donation to confirm that payment processing, email notifications, and donor dashboard access are working perfectly under the new system.

This way, you can easily migrate your entire donation ecosystem from GiveWP to Paymattic!


![Verify Migrated Entries](/images/migration/givewp-migration/entries-4.webp)




