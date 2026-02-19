let table = document.getElementById("sampleTable");
let rowNumber = 3;  // start from 3

function insert_Row() {
    //Write your code here
	let row = document.createElement("tr");

    let cell1 = document.createElement("td");
    cell1.textContent = `Row ${rowNumber} Cell 1`;

    let cell2 = document.createElement("td");
    cell2.textContent = `Row ${rowNumber} Cell 2`;

    row.appendChild(cell1);
    row.appendChild(cell2);

    table.appendChild(row);

    rowNumber++;  // increase for next click
  
  
}
