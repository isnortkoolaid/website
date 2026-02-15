let table = base.getTable("Workshop Prizes Temp");
let toTable = base.getTable("Workshop Prizes");
let orpheusTable = base.getTable("Orpheus Plushie Recipients");

let inputConfig = input.config();
let email = inputConfig.email;

let apiKey = input.secret("haxmasHermesKey");

let fromQueryResult = await table.selectRecordsAsync({
    fields: ["Email", "Address (Line 1)", "Address (Line 2)", "City", "State/Province", "Country", "First Name", "Last Name", "ZIP / Postal Code"]
});

let toQueryResult = await toTable.selectRecordsAsync({
    fields: ["Email", "Days completed"]
});

let fromRecord = fromQueryResult.records.find(record =>
    record.getCellValueAsString("Email") === email
);

let existingRecord = toQueryResult.records.find(record =>
    record.getCellValueAsString("Email") === email
);

if (!fromRecord) {
    console.log(`No record found for email: ${email}`);
} else {

if (existingRecord) {
    await toTable.updateRecordAsync(existingRecord.id, {
        "Address (Line 1)": fromRecord.getCellValueAsString("Address (Line 1)"),
        "Address (Line 2)": fromRecord.getCellValueAsString("Address (Line 2)"),
        "City": fromRecord.getCellValueAsString("City"),
        "State/Province": fromRecord.getCellValueAsString("State/Province"),
        "Country": fromRecord.getCellValueAsString("Country"),
        "ZIP / Postal Code": fromRecord.getCellValueAsString("ZIP / Postal Code"),
        "First Name": fromRecord.getCellValueAsString("First Name"),
        "Last Name": fromRecord.getCellValueAsString("Last Name"),
        "Sent Initial Email": true
    });
}

let toRecordRefresh = await toTable.selectRecordsAsync({
    fields: ["Email", "Days completed"]
});
let toRecord = toRecordRefresh.records.find(record =>
    record.getCellValueAsString("Email") === email
);

let daysCompleted = parseInt(toRecord?.getCellValueAsString("Days completed") ?? "0") || 0;

// Build rubber stamps based on days completed (cumulative, excluding Orpheus)
let stamps = [];
if (daysCompleted >= 3) stamps.push("Haxmas Sticker");
if (daysCompleted >= 6) stamps.push("Haxmas Sticker Sheet");
if (daysCompleted >= 9) stamps.push("Hack Club Socks");

// If they qualify for Orpheus plushie, add to separate table
if (daysCompleted >= 12) {
    await orpheusTable.createRecordAsync({
        "Email": email,
        "First Name": fromRecord.getCellValueAsString("First Name"),
        "Last Name": fromRecord.getCellValueAsString("Last Name"),
        "Address (Line 1)": fromRecord.getCellValueAsString("Address (Line 1)"),
        "Address (Line 2)": fromRecord.getCellValueAsString("Address (Line 2)"),
        "City": fromRecord.getCellValueAsString("City"),
        "State/Province": fromRecord.getCellValueAsString("State/Province"),
        "ZIP / Postal Code": fromRecord.getCellValueAsString("ZIP / Postal Code"),
        "Country": fromRecord.getCellValueAsString("Country")
    });
}

// Only POST if they have prizes to send
if (stamps.length > 0) {
    let response = await fetch("https://fulfillment.hackclub.com/api/v1/letters", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${apiKey}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            first_name: fromRecord.getCellValueAsString("First Name"),
            last_name: fromRecord.getCellValueAsString("Last Name"),
            address_line_1: fromRecord.getCellValueAsString("Address (Line 1)"),
            address_line_2: fromRecord.getCellValueAsString("Address (Line 2)"),
            city: fromRecord.getCellValueAsString("City"),
            state: fromRecord.getCellValueAsString("State/Province"),
            postal_code: fromRecord.getCellValueAsString("ZIP / Postal Code"),
            country: fromRecord.getCellValueAsString("Country"),
            recipient_email: email,
            mail_type: "lettermail",
            rubber_stamps: stamps.join("\n")
        })
    });

    console.log(await response.json());
}
}
