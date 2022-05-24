function saveData() {
  let Type, Description, Price, Image;
  Type = document.getElementById("Type").value;
  Description = document.getElementById("Description").value;

    Price = document.getElementById("Price").value;
    
    Image = document.getElementById("Image").value;

  let user_records = new Array();
  user_records = JSON.parse(localStorage.getItem("users"))
    ? JSON.parse(localStorage.getItem("users"))
    : [];
  console.log("these are records", user_records);
  if (
    user_records.some((v) => {
      return v.Description == Description;
    })
  ) {
    alert("duplicate data");
  } else {
    user_records.push({
      Type: Type,
      Description: Description,
      Price: Price,
      Image: Image,
    });
    localStorage.setItem("users", JSON.stringify(user_records));
  }
}
