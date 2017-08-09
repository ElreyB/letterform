$(document).ready(function() {
  $("#letterForm").submit(function() {
    var userNameInput = $("input#userName").val();

    $(".userName").text(userNameInput);

    $("#letter").show();

    event.preventDefault();
  });
});
