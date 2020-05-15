// Use D3 to select the table body

var tableData = Data;

var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  var filteredData = tableData.filter(datet => datet.datetime === inputValue);


// Append one cell for the student name
// Use D3 to select the table body
  var tbody = d3.select('tbody');
// Use D3 to select the table
  tbody.html("");

  filteredData.forEach((sighting) => {
    // Append one table row per student/grade
    var row = tbody.append('tr');
    // append one cell for the student and one cell for the grade
    row.append('td').text(sighting.datetime);
    row.append('td').text(sighting.city);
    row.append('td').text(sighting.state);
    row.append('td').text(sighting.country);
    row.append('td').text(sighting.shape);
    row.append('td').text(sighting.durationMinutes);
    row.append('td').text(sighting.comments);
  })}
