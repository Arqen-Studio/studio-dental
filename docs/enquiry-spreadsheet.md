# Recording website enquiries in a spreadsheet

Every enquiry is emailed to the clinic. That is the channel people act on, but
an email can be deleted or lost, and there is then no record that the enquiry
ever happened. This adds a spreadsheet alongside it.

It is optional. If `ENQUIRY_SHEET_URL` is not set, the website behaves exactly
as before and email is the only record.

Nothing here puts a new password or key in the code. The website only ever
holds a URL, and the spreadsheet stays in the clinic's own Google account.

## Setting it up

**1. Make the spreadsheet.**

Create a new Google Sheet. Name the first tab `Enquiries`. Put these headings
in row 1, one per column:

    Received    Name    Phone    Email    Clinic    Treatment    Preferred date    Message

**2. Add the script.**

In the sheet, go to **Extensions**, then **Apps Script**. Delete whatever is in
the editor and paste this:

```javascript
function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Enquiries');
    var d = JSON.parse(e.postData.contents);
    sheet.appendRow([
      d.receivedAt ? new Date(d.receivedAt) : new Date(),
      d.name || '',
      d.phone || '',
      d.email || '',
      d.clinic || '',
      d.service || '',
      d.date || '',
      d.message || ''
    ]);
    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
```

The lock matters: two people submitting at the same moment would otherwise be
able to write to the same row.

**3. Publish it.**

Press **Deploy**, then **New deployment**. Choose type **Web app**. Set
"Execute as" to **Me**, and "Who has access" to **Anyone**. Deploy, approve the
permission prompt, and copy the web app URL. It looks like:

    https://script.google.com/macros/s/AKfycb.../exec

"Anyone" sounds alarming but only means the URL can be posted to without a
Google login, which is what the website needs. The URL is long and random, so
treat it like a password: anyone who has it can add rows. It cannot be used to
read the sheet or to reach anything else in the account.

**4. Tell the website about it.**

In Vercel, under the project's **Settings**, then **Environment Variables**,
add `ENQUIRY_SHEET_URL` with that URL. Tick all three environments. Redeploy.

**5. Check it.**

Submit an enquiry on the site. A row should appear within a second or two, and
the email should arrive as usual.

## How it behaves

The spreadsheet is written first, then the email is sent. That order is
deliberate: if the mail provider is down, the enquiry is still recorded.

If the spreadsheet is unreachable, the failure is swallowed and the email is
sent anyway. A broken spreadsheet must never stop a patient reaching the
clinic. The consequence is that a spreadsheet that quietly stops working will
not announce itself, so it is worth glancing at the sheet now and then to check
rows are still arriving.

## If you would rather not use Google

The website posts a small JSON object to whatever URL you give it:

```json
{
  "receivedAt": "2026-09-26T12:40:00.000Z",
  "name": "...",
  "phone": "...",
  "email": "...",
  "clinic": "...",
  "service": "...",
  "date": "...",
  "message": "..."
}
```

Anything that accepts a POST will do: Airtable, a Zapier or Make webhook, a
Notion database, or a spreadsheet hosted elsewhere. Only the URL changes.
