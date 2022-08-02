/**
 * In the below function we have 5 errors and 4 memory leak.
 * Find it, add a comment above the issue you found and a version of code that resolve the issue
 */

import DataBase from '...'

// getRecords should be async function
async function getRecords() {

    // using await without async
    // DataBase isn't imported
    // should use let or const instead of var
    const records = await DataBase.query("SELECT * FROM myTable");

    // wrong syntax here, if we print record we need to get the element
    for (record of records) {
        console.log(record)
    }

    // not awaiting result
    // should use let or const instead of var
    const otherRecords = await DataBase.query("SELECT * FROM myTable2");

    // spread
    let allRecords = [...records, ...otherRecords];

    console.log("Records found: " + allRecords.toString())

}

getRecords();
