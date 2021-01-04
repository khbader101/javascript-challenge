// from data.js
var tableData = data;

// YOUR CODE HERE!

var tbody = d3.select("tbody");

// UFO Sighting values for each column
tableData.forEach(sighting => {
  console.log(sighting);
  
  var row = tbody.append("tr");
  // add objects
  Object.entries(sighting).forEach(([key, value]) => {
    console.log(key, value);
    // append cell to the row
    var cell = row.append("td");
    cell.text(value);
  });
});
// Create a filter for new data
var filter = d3.select("#filter-btn");
filter.on("click", function() {

  tbody.html("");


  var inputElement = d3.select("#datetime");
  var inputValue = inputElement.property("value");
  console.log(inputValue);
  // filter Data with what is input
  var filterData = tableData.filter(occurance => occurance.datetime === inputValue);
  console.log(filterData);

  filterData.forEach(occurance => {
    console.log(occurance);
    var row2 = tbody.append("tr");
    // adding UFO objects
    Object.entries(occurance).forEach(([key, value]) => {
      console.log(key, value);
      var cell2 = row2.append("td");
      cell2.text(value);
    });
  });
});