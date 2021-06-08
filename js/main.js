var passcode = prompt("password needed");

console.log(passcode);

document.getElementById("username").innerText = passcode;

//tooltip
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })