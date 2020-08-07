function Property(name, room, baths, price, sqrFeet, image, desc, email) {
  this.Name = name;
  this.Rooms = parseInt(room);
  this.bathRooms = parseInt(baths);
  this.Price = parseFloat(price);
  this.SqrFeet = parseFloat(sqrFeet);
  this.ImageUrl = image;
  this.Description = desc;
  this.Email = email;
}

function register() {
  var name = $("#txtName").val();
  var room = $("#txtRooms").val();
  var bathRooms = $("#txtBathrooms").val();
  var price = $("#txtPrice").val();
  var sqrFeet = $("#txtSqrFeet").val();
  var image = $("#txtImage").val();
  var desc = $("#txtDescription").val();
  var email = $("#txtEmail").val();
  

  var property = new Property(
    name,
    room,
    bathRooms,
    price,
    sqrFeet,
    image,
    desc,
    email
  );
  $.ajax({
    url: "/catalog/registerProperty",
    type: "POST",
    data: JSON.stringify(property),
    contentType: "application/json",
    success: function (res) {
      console.log("Server responded", res);
    },
    error: function (details) {
      console.log("Error", details);
    },
  });

  console.log(property);
}

function init() {
  console.log("Register Page");

  $("#btnSave").click(register);
}

window.onload = init;
9;
