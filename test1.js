/**
 * In the below function we have 5 errors and 4 memory leak.
 * Find it, add a comment above the issue you found and a version of code that resolve the issue
 */

function getRecords() {

    var records = await DataBase.query("SELECT * FROM myTable");

    for(record in records){
        console.log(record)
    }

    var otherRecords = DataBase.query("SELECT * FROM myTable2");

    let allRecords = [...records, otherRecords];

    console.log("Records found: " + allRecords.toString())

}

getRecords();
