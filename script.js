function insert_Row() {

    let table = document.getElementById("sampleTable");

    // Insert row at index 0 (TOP)
    let newRow = table.insertRow(0);

    // Insert two cells
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);

    // Add exact required text
    cell1.textContent = "New Cell1";
    cell2.textContent = "New Cell2";
}
