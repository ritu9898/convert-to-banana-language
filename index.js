$(document).on('click', '.btn', function(){
  let input = $("#inputData").val();

  if($(this)[0].id == "clear")
  {
    $("#inputData")[0].value = "";
    $("#convertedText").html("");
  }
  else
  {
    if(input == "")
    {
      alert('Input is empty!');
      return false;
    }

    $.ajax({
      url: 'https://api.funtranslations.com/translate/minion.json',
      method: 'GET',
      data: {"text": input},
      success: function(response) {
        console.log(response);
        $("#convertedText").html(response.contents.translated);
      },
      error: function(response){
        console.log(response);
        $("#convertedText").html("Error!");
      }
    });
  }
});