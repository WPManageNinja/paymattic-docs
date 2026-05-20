---
title: "How to Migrate GiveWP into Paymattic"
category: "Migration"
---

# How to Migrate GiveWP into Paymattic

[Paymattic](https://paymattic.com/) offers a dedicated migration tool that allows you to move your donation forms, donors, and payment history from GiveWP in a few guided steps. This tool ensures that your fundraising efforts continue seamlessly by preserving donor data, custom fields, and recurring subscription statuses.

## Prerequisites & Required Add-ons

Before starting the migration, ensure your WordPress environment meets the following requirements:

- **GiveWP (Free/Pro):** Must be installed and active on your site.
- **Paymattic Pro:** The migration tool is a premium feature available in the Pro version.
- **Database Backup:** Always perform a full site backup before running any migration tool that writes to your database.

## Step 1: Pre-flight Check

First, go to **Settings** from the **Paymattic Pro** sidebar menu. Click the **GiveWP Migrator** tab from the left sidebar to open the migration interface.

Before moving any data, the migrator scans to ensure your environment is ready. This step flags any compatibility notes before a single row is written to your database.

- Click the orange **Run A Pre-flight Check** button.
- **Add-on Compatibility:** The migrator will automatically detect GiveWP add-ons such as **Recurring Donations**, **Gift Aid**, **Form Field Manager (FFM)**, and **Currency Switcher**.


>If you are migrating Currency Switcher data or complex payment gateways, ensure Paymattic Pro is active; otherwise, these specific elements will not migrate.


>[!Note]
> It is highly recommended to back up your database before proceeding, as this tool writes directly to your DB.

![Pre-flight Check](/images/migration/givewp-migration/pre-flight-check-1.webp)

## Step 2: Review Pre-flight Results

Once the check is complete, you will see a summary of your system status and a preview of the data available for migration.

* **Data Counts:** You will see total counts for **Forms**, **Donations**, and **Subscriptions**.
* **Form Structure:** Paymattic will automatically migrate form titles, goal amounts, and multi-level pricing. It will also auto-inject required **Name** and **Email** fields into the new Paymattic forms.
* **Migration Options:** Check the **Include test-mode donations** box if you wish to migrate sandbox data.

Click the **Start Migration** button to begin the process.

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

## Step 4: Verify Migrated Entries

You can verify that your data has been moved correctly by navigating to **Paymattic Pro > Entries**. Here, you will see your migrated donations listed with their respective IDs, Donor names, Emails, and Payment Status (e.g., Paid or Pending).

![Verify Migrated Entries](/images/migration/givewp-migration/entries-4.webp)

#### Important: Out of Scope Items

Some GiveWP-specific features do not have a direct equivalent in Paymattic and will not be migrated:

- Peer-to-Peer (P2P) campaigns
- Tributes/Memorial data
- Annual Receipts or Sequential IDs

This way, you can easily migrate your entire donation ecosystem from GiveWP to Paymattic!


