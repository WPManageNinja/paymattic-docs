---
title: "How to Migrate GiveWP into Paymattic"
category: "Migration"
---

# How to Migrate GiveWP into Paymattic

[Paymattic](https://paymattic.com/) offers a dedicated migration tool that allows you to migrate your donation forms, donors, and payment history from GiveWP in a few guided steps. This guide will walk you through the process of migrating your data efficiently while ensuring environmental compatibility.

## Prerequisites & Required Add-ons

Before starting the migration, ensure your WordPress environment meets the following requirements:

- **GiveWP (Free/Pro):** Must be installed and active on your site.
- **Paymattic Pro:** The migration tool is a premium feature available in the Pro version.
- **Database Backup:** Always perform a full site backup before running any migration tool that writes to your database.

## Step 1: Pre-flight Check

First, go to **Settings** from the **Paymattic Pro** sidebar menu. Click the **GiveWP Migrator** tab from the left sidebar to open the migration interface.

Before moving any data, the migrator scans to ensure your environment is ready. This step flags any compatibility notes before a single row is written to your database.

Click the orange **Run Pre-flight Check** button.

:::warning Database Backup
It is highly recommended to back up your database before proceeding, as this tool writes directly to your DB.
:::

![Pre-flight Check](/images/migration/givewp-migration/pre-flight-check-1.webp)

## Step 2: Review Pre-flight Results

Once the check is complete, you will see a summary of your system status and a preview of the data available for migration.

- **System Status:** Ensures GiveWP is detected and Paymattic Pro is active.
- **Migration Preview:** Displays the total count of Donations, Forms, and compatible add-ons (such as Recurring, Stripe, Currency Switcher, or Form Field Manager) that will be migrated.
- **Migration Options:** If you wish to include test data, check the box for **Include test-mode donations**.

Click the **Start Migration** button to begin the process.

![Review Pre-flight Results](/images/migration/givewp-migration/start-migration-2.webp)


## Step 3: Validation Report

After the migration finishes, you will be presented with a **Validation Report** to confirm that the data was transferred successfully.

- **Migration Summary:** Shows the status of your Forms and Donations (e.g., 6 / 6 successful) and any errors encountered.
- **Actions:**
  - **Rollback Migration:** Deletes all Paymattic data created during this session and resets the state.
  - **Start Over:** Resets the migration checkpoint without deleting existing data.
  - **Download Report (JSON):** Allows you to export the full migration report for your records.

![Validation Report](/images/migration/givewp-migration/migration-summary-3.webp)

## Step 4: Verify Migrated Entries

You can verify that your data has been moved correctly by navigating to **Paymattic Pro > Entries**. Here, you will see your migrated donations listed with their respective IDs, Donor names, Emails, and Payment Status (e.g., Paid or Pending).

![Verify Migrated Entries](/images/migration/givewp-migration/entries-4.webp)

This way, you can easily migrate your entire donation ecosystem from GiveWP to Paymattic!


