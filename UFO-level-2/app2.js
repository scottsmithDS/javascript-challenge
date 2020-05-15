var tableData = Data;

var button = d3.select("#filter-btn2");

// Select the form
var form = d3.select("#form2");

// Create event handlers 
button.on("click", runEnter);


// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElementdate = d3.select("#datetime2");
  var inputElementcity = d3.select("#city");
  var inputElementstate = d3.select("#state");
  var inputElementcountry = d3.select("#country");
  var inputElementshape = d3.select("#shape");

  // Get the value property of the input element
  var inputValuedate = inputElementdate.property("value");
  console.log(inputValuedate)
  var inputValuecity = inputElementcity.property("value");
  console.log(inputValuecity)
  var inputValuestate = inputElementstate.property("value");
  console.log(inputValuestate)
  var inputValuecountry = inputElementcountry.property("value");
  console.log(inputValuecountry)
  var inputValueshape = inputElementshape.property("value");
  console.log(inputValueshape)




  if (inputValuedate !== "") {
    var tableData2 = tableData.filter(datet => datet.datetime === inputValuedate);
  }
  if (inputValuecity !== "") {
    var tableData2 = tableData2.filter(cityt => cityt.city === inputValuecity);
  }
  if (inputValuestate !== "") {
    var tableData2 = tableData2.filter(statet => statet.state === inputValuestate);
  }
  if (inputValuecountry !== "") {
    var tableData2 = tableData2.filter(countryt => countryt.country === inputValuecountry);
  }
  if (inputValueshape !== "") {
    var tableData2 = tableData2.filter(shapet => shapet.shape === inputValueshape);
  }



// Append one cell for the student name
// Use D3 to select the table body
  var tbody = d3.select('#tbody2');
// Use D3 to select the table

  tbody.html("");

  tableData2.forEach((sighting) => {
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
