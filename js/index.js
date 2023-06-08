var slideIndex = 1;
setInterval(function() {
  plusDivs(1);
}, 1000)

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  const imgList = document.getElementsByClassName("img-slideshow");
  if (n > imgList.length) { slideIndex = 1 };
  if (n < 1) { slideIndex = imgList.length };
  for (i = 0; i < imgList.length; i++) {
    imgList[i].style.display = "none";
  }
  imgList[slideIndex - 1].style.display = "block";
}

function validateForm() {
  var name = document.forms["message-form"]["full-name"].value;
  var birthDate = document.forms["message-form"]["birth-date"].value;
  var gender = document.forms["message-form"]["gender"].value;
  var messages = document.forms["message-form"]["messages"].value;

  if (name == "" || birthDate == "" || gender == "" || messages == "") {
    alert("Tidak boleh ada yang kosong!");
    return false
  }
  var dt = new Date();
  document.getElementById("tanggalwaktu").innerHTML = dt.toLocaleString();
  document.getElementById("sender-full-name").innerHTML = name;
  document.getElementById("sender-birth-date").innerHTML = birthDate;
  document.getElementById("sender-gender").innerHTML = gender;
  document.getElementById("sender-messages").innerHTML = messages;
  return false;
}