function fetchData() {
  $.ajax({
    url: "/catalog/getCatalog",
    type: "GET",
    success: function (data) {
      console.log("Server responded with", data);

      // data = data.sort((a,b) => a - b);

      for (let i = 0; i < data.length; i++) {
        var property = data[i];

        var syntax = `<div class="item">
        <h3>${property.name}</h3>
        
        <img style="" src="${property.imageUrl}">
            <div class="details info">
             <p style="Text-align: left; font-size: 20px" >Details: </p>
              <h4 > ${property.rooms}+ Rooms </h4>
              <h6 > ${property.bathRooms}+ Bathrooms </h6>
              <h6 >$ ${property.price}.00 </h6>
           <br>
           <p style="Text-align: left; font-size: 20px" >Description: </p>
          <p style="font-family: Dancing Script; cursive; font-size: 20px;">  ${property.description} </p>
           </div>
        </div>`;
        $("#catalogContainer").append(syntax);
      }
    },
    error: function (details) {
      console.log("Error", details);
    },
  });
}

function init() {
  console.log("Catalog page");

  fetchData();
}

window.onload = init;

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
