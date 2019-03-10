// from data.js
var tableData = data;

//add table to website
d3.select("tbody")
  .selectAll("tr")
  .data(data)
  .enter()
  .append("tr")
  .html(function(e) {
    return `<td>${e.datetime}</td><td>${e.city}</td><td>${e.state}</td><td>${e.country}</td><td>${e.shape}</td><td>${e.durationMinutes}</td><td>${e.comments}</td>`;
  });
  
// Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);

  var filteredData = tableData.filter(date => date.datetime === inputValue);

  //temporary remove of non filtered data
  d3.select("tbody")
    .selectAll("*").remove();

  //check filter works
  console.log(filteredData);

  //updates new filter!
  d3.select("tbody")
  .selectAll("tr")
  .data(filteredData)
  .enter()
  .append("tr")
  .html(function(d) {
    return `<td>${d.datetime}</td><td>${d.city}</td><td>${d.state}</td><td>${d.country}</td><td>${d.shape}</td><td>${d.durationMinutes}</td><td>${d.comments}</td>`;
  });
  
});
