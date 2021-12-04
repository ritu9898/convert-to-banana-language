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

    let url = 'https://api.funtranslations.com/translate/minion.json?text='+input;

    fetch(url)
    .then(response => 
      // console.log(response);
      response.json())
    .then(function(data){
      $("#convertedText").html(data.contents.translated);
      })
    .catch(function(error){ 
      console.error();
      $("#convertedText").html('Error');
    });
  }

});
