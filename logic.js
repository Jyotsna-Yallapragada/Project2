const searchURL = "https://api.nps.gov/api/v1/parks?api_key=yAE8OJaWXtM0TLHTKNse98VC8ZT7SRfWKApZfJrr";

//Activate the Form Event Listner
$(document).ready(function SubmitForm() {

  $("#search").submit(e => {
    e.preventDefault();
    let searchState = $("#statename").val();
    getNationalParks(searchState);
  });
});

function getNationalParks(query, limit = 10) {
  const url = searchURL + "?" + query;

  $.ajax({
    url: url,
    dataType: "json",
    success: function (res) {
      const data = res;
      console.log('results', res);
      displayResults(data);
    }
  });
}
// dispalying results to the document
function displayResults(responseJson) {
  console.log("It's working");
  $("#results-list").empty();
  for (let i = 0; i < responseJson.data.length; i++) {
    $("#results-list").append(`<br> <br>
    <div class="panel panel-default">
    <div class="panel-heading">
      <h3 class="title">${responseJson.data[i].fullName}</h3>
    </div>
    <div class="panel-body">
    <div class= "row>
    <div class="col-md-3">
    <h4 class="description">${responseJson.data[i].description}</h4>
    <p> <p>
    </div>
    <div class= "row>
    <div class="col-md-3">
    <a href=" ${responseJson.data[i].url}">Park's Website</a>
    </div>
    </div> 
  </div>`);
  }
  $("#results-list").removeClass("hidden");
}