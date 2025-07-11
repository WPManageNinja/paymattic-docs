---
title: "Date Formats Customization"
category: "FAQ"
---

This guide explains how to customize date and time formats in [Paymattic's Date & Time fields](../general-input-fields/how-to-use-general-form-input-fields-in-wordpress-with-paymattic.md#_10-date-amp-).

## Date Format Characters

| Character | Description | Example |
|-----------|-------------|---------|
| d | Day with leading zeros | 01 to 31 |
| D | Short day name | Mon through Sun |
| l | Full day name | Sunday through Saturday |
| j | Day without zeros | 1 to 31 |
| J | Day with ordinal | 1st, 2nd, to 31st |
| w | Day of week (number) | 0 (Sun) to 6 (Sat) |
| W | Week of year | 0 to 52 |
| F | Full month name | January through December |
| m | Month with zeros | 01 through 12 |
| n | Month without zeros | 1 through 12 |
| M | Short month name | Jan through Dec |
| U | Unix timestamp | 1413704993 |
| y | 2-digit year | 99 or 03 |
| Y | 4-digit year | 1999 or 2003 |
| Z | ISO date format | 2017-03-04T01:23:43.000Z |

## Time Format Characters

| Character | Description | Example |
|-----------|-------------|---------|
| H | 24-hour format | 00 to 23 |
| h | 12-hour format | 1 to 12 |
| G | Hours with zeros | 01 to 12 |
| i | Minutes | 00 to 59 |
| S | Seconds with zeros | 00 to 59 |
| s | Seconds without zeros | 0 to 59 |
| K | AM/PM indicator | AM or PM |

## Advanced Configuration

Paymattic uses [flatpickr](https://flatpickr.js.org/) for date/time handling. Advanced users can customize behavior through the field's advanced settings:

![Advanced settings](/images/faq/date-formats-customization/Advance-Date-Configuration.webp)

### Custom Week Start

Set the first day of the week using:

```json
{
    "locale": {
        "firstDayOfWeek": 1  // 0 = Sunday, 1 = Monday
    }
}
```

### Configuration Options

#### Basic Settings

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| dateFormat | String | "Y-m-d" | Date display format |
| enableTime | Boolean | false | Show time picker |
| mode | String | "single" | "single", "multiple", or "range" |
| defaultDate | String/Array | null | Initial selected date(s) |
| minDate | String/Date | null | Earliest selectable date |
| maxDate | String/Date | null | Latest selectable date |

#### Time Settings

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| enableSeconds | Boolean | false | Show seconds input |
| time_24hr | Boolean | false | Use 24-hour format |
| defaultHour | Number | 12 | Initial hour value |
| defaultMinute | Number | 0 | Initial minute value |
| hourIncrement | Integer | 1 | Hour selection step |
| minuteIncrement | Integer | 5 | Minute selection step |

#### Display Settings

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| inline | Boolean | false | Show calendar permanently |
| static | Boolean | false | Fix calendar position |
| position | String | "auto" | Calendar placement ("auto", "above", "below") |
| showMonths | Integer | 1 | Number of months displayed |
| weekNumbers | Boolean | false | Show week numbers |
| shorthandCurrentMonth | Boolean | false | Use short month names |

#### Input Settings

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| allowInput | Boolean | false | Allow manual date entry |
| clickOpens | Boolean | true | Open on input click |
| wrap | Boolean | false | Support custom elements |
| altInput | Boolean | false | Show formatted date |
| altFormat | String | "F j, Y" | Display format when altInput is true |
| disableMobile | Boolean | false | Force desktop picker on mobile |

#### Advanced Features

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| disable | Array | [] | Disable specific dates |
| enable | Array | [] | Enable only specific dates |
| formatDate | Function | null | Custom date formatter |
| parseDate | Function | false | Custom date parser |
| onChange | Function | null | Date selection handler |
| onOpen | Function | null | Calendar open handler |
| onClose | Function | null | Calendar close handler |
| onReady | Function | null | Initialization handler |

:::tip Documentation
See [flatpickr's documentation](https://flatpickr.js.org/options/) for complete details.
:::

:::tip Need Help?
If you have any questions, concerns, or suggestions, please [contact our support team](https://wpmanageninja.com/support-tickets/).
:::