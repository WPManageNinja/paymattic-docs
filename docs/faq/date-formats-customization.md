---
title: "Date Formats Customization"
category: "FAQ"
---
This article will guide you through the process of customizing the date formats for your [Date &amp; Time](/# 14-toc-title) field.

## Date Formatting Tokens[](https://wpmanageninja.com/docs/wppayform/frequently-asked-question-for-wppayform/date-formats-customization/#date-formatting-tokens)

CharacterDescriptionExampledDay of the month, 2 digits with leading zeros01 to 31DA textual representation of a dayMon through Sunl (lowercase ‘L’)A full textual representation of the day of the weekSunday through SaturdayjDay of the month without leading zeros1 to 31JDay of the month without leading zeros and ordinal suffix1st, 2nd, to 31stwNumeric representation of the day of the week0 (for Sunday) through 6 (for Saturday)WNumeric representation of the week0 (first week of the year) through 52 (last week of the year)FA full textual representation of a monthJanuary through DecembermNumeric representation of a month, with leading zero01 through 12nNumeric representation of a month, without leading zeros1 through 12MA short textual representation of a monthJan through DecUThe number of seconds since the Unix Epoch1413704993yA two-digit representation of a year99 or 03YA full numeric representation of a year, 4 digits1999 or 2003ZISO Date format2017-03-04T01:23:43.000Z

## Time Formatting Tokens[](https://wpmanageninja.com/docs/wppayform/frequently-asked-question-for-wppayform/date-formats-customization/#time-formatting-tokens)

CharacterDescriptionExampleHHours (24 hours)00 to 23hHours1 to 12GHours, 2 digits with leading zeros1 to 12iMinutes00 to 59SSeconds, 2 digits00 to 59sSeconds0, 1 to 59KAM/PMAM or PM

## Advanced Configuration

Paymattic Date and Time field use **[flatpickr](https://flatpickr.js.org/)** JS library; for advanced users, you can provide the config object in the field's advanced settings.

![](/images/faq/date-formats-customization/Advance-Date-Configuration.webp)

### Adding the First Day of Week Date[](https://wpmanageninja.com/docs/fluent-form/field-types/time-date/?preview_id=6048&preview_nonce=eefecc25f0&preview=true#adding-the-first-day-of-week-date)

Now, you can add the start of the week date. You can do this with the help of a custom code; use the code given below:

```
{
    "locale": {
        "firstDayOfWeek": 1 <em>// start week on Monday
</em>    }
}
```

### Available Options

[](https://wpmanageninja.com/docs/fluent-form/field-types/time-date/?preview_id=6048&preview_nonce=eefecc25f0&preview=true#available-options)

Config OptionTypeDefaultDescriptionaltFormatString“F j, Y”Exactly the same as date format, but for the altInput fieldaltInputBooleanfalseShow the user a readable date (as per altFormat), but return something totally different to the server.altInputClassString“”This class will be added to the input element created by the altInput option. Note that `altInput` already inherits classes from the original input.allowInputBooleanfalseAllows the user to enter a date directly input the input field. By default, direct entry is disabled.appendToHTMLElementnullInstead of `body`, appends the calendar to the specified node instead\*.ariaDateFormatString“F j, Y”Defines how the date will be formatted in the `aria-label` for calendar days, using the same tokens as `dateFormat`. If you change this, you should choose a value that will make sense if a screen reader reads it out loud.clickOpensBooleantrueWhether clicking on the input should open the picker. You could disable this if you wish to open the calendar manually with`.open()`dateFormatString“Y-m-d”A string of characters which are used to define how the date will be displayed in the input box. The supported characters are defined in [the table below](https://flatpickr.js.org/formatting).**defaultDate**StringnullSets the initial selected date(s).If you’re using `mode: "multiple"` or a range calendar supply an `Array` of `Date` objects or an Array of date strings which follow your `dateFormat`.Otherwise, you can supply a single Date object or a date string.defaultHourNumber12Initial value of the hour element.defaultMinuteNumber0Initial value of the minute element.disableArray\[\]See [Disabling dates](https://flatpickr.js.org/examples/#disabling-specific-dates)disableMobileBooleanfalseSet `disableMobile` to true to always use the non-native picker.
By default, flatpickr utilizes native datetime widgets unless certain options (e.g. disable) are used.enableArray\[\]See [Enabling dates](https://flatpickr.js.org/examples/#disabling-all-dates-except-select-few)enableTimeBooleanfalseEnables time pickerenableSecondsBooleanfalseEnables seconds in the time picker.formatDateFunctionnullAllows using a custom date formatting function instead of the built-in handling for date formats using `dateFormat`, `altFormat`, etc.hourIncrementInteger1Adjusts the step for the hour input (incl. scrolling)inlineBooleanfalseDisplays the calendar inlinemaxDateString/DatenullThe maximum date that a user can pick to (inclusive).minDateString/DatenullThe minimum date that a user can start picking from (inclusive).minuteIncrementInteger5Adjusts the step for the minute input (incl. scrolling)modeString“single”`"single"`, `"multiple"`, or `"range"`nextArrowString`>`HTML for the arrow icon, used to switch months.noCalendarBooleanfalseHides the day selection in calendar.
Use it along with `enableTime` to create a time picker.onChangeFunction, \[functions\]nullFunction(s) to trigger on every date selection. See [Events API](https://flatpickr.js.org/events/#onchange)onCloseFunction, \[functions\]nullFunction(s) to trigger on every time the calendar is closed. See [Events API](https://flatpickr.js.org/events/#onclose)onOpenFunction, \[functions\]nullFunction(s) to trigger on every time the calendar is opened. See [Events API](https://flatpickr.js.org/events/#onopen)onReadyFunction, \[functions\]nullFunction to trigger when the calendar is ready. See [Events API](https://flatpickr.js.org/events/#onready)parseDateFunctionfalseFunction that expects a date string and must return a Date objectpositionString“auto”Where the calendar is rendered relative to the input.

`"auto"`, `"above"` or `"below"`prevArrowString`<`HTML for the left arrow icon.shorthandCurrentMonthBooleanfalseShow the month using the shorthand version (ie, Sep instead of September).showMonthsInteger1The number of months showed.staticBooleanfalsePosition the calendar inside the wrapper and next to the input element\*.time\_24hrbooleanfalseDisplays time picker in 24-hour mode without AM/PM selection when enabled.weekNumbersBooleanfalseEnables display of week numbers in the calendar.wrapBooleanfalse[Custom elements and input groups](https://flatpickr.js.org/examples/#flatpickr-external-elements)Please check **[flatpickr](https://flatpickr.js.org/options/)** documentation for more details.

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.