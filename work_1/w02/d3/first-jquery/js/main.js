$(document).ready(function() {
  var newHomes = [
    {
      address: "27569 Cedarwood Drive",
      sf: "2,535",
      bedrooms: 3,
      baths: 2.5,
      price: "$496,500"
    },
    {
      address: "316 Annandale Drive",
      sf: "1,326",
      bedrooms: 4,
      baths: 2,
      price: "$275,000"
    },
    {
      address: "251 Grandview Road",
      sf: "3,800",
      bedrooms: 3,
      baths: 2,
      price: "$699,900"
    },
    {
      address: "28571 Manitoba",
      sf: "2,960",
      bedrooms: 4,
      baths: 3.5,
      price: "$775,000"
    }
  ];

  var removedHomes = [];
  $("#restore").attr("disabled", true);
  $("#addHome")
    .removeClass("btn-danger")
    .addClass("btn-success");
  $("h1").addClass("text-center");

  var newLink = $(
    '<br><br><a id="zillowLink" href="http://www.zillow.com">Visit Zillow.com<a>'
  );
  $("body").append(newLink);

  // when remove home is clicked add home list to removed homes
  $("#homes tbody").on("click", "button", function() {
    var row = $(this).closest("tr");
    removedHomes.push(row[0].outerHTML);
    row.fadeOut(750, function() {
      row.remove();
      console.log(removedHomes);
    });
    $("#restore").removeAttr("disabled");
  });

  // when add home is clicked add a new home to the list
  $("#addHome")
    .unbind("click")
    .on("click", function(evt) {
      if (!newHomes.length) return;
      var home = newHomes.pop();
      var newRow = `<tr>
        <td>${home.address}</td>
        <td>${home.sf}</td>
        <td>${home.bedrooms}</td>
        <td>${home.baths}</td>
        <td>${home.price}</td>
        <td><button class="btn btn-xs btn-danger">Remove</button></td>
        </tr>`;
      $("#homes tbody").append(newRow);
      if (!newHomes.length) {
        $("#addHome").attr("disabled", true);
      }
    });

  // Throw removed items back into table
  $("#restore")
    .unbind("click")
    .on("click", function() {
      removedHomes.forEach(function(home) {
        $("#homes tbody").append(home);
      });
      removedHomes = [];
      $("#restore").attr("disabled", true);
    });
});
