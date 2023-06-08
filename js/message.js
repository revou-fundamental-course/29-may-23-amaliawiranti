

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