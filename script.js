

/*  ---using jquery
$(document).ready(function () {

    $("#form").submit(function (e) {

        e.preventDefault(); // avoid to execute the actual submit of the form.

        var form = $(this).serializeArray();
        console.log(form)

        var $inputs = $('#form :input');

        var values = {};
        $inputs.each(function () {
            values[this.name] = $(this).val();
        });
        console.log(values)
    });


})

*/



/* ------using button outside form

$("#submit2").click( function() {
    $('#form').submit();

    getData($('#form').submit());
   
});
*/



/*  --------using javascript

function getData(form) {
    var formData = new FormData(form);
  
    for (var pair of formData.entries()) {
      console.log(pair[0] + ": " + pair[1]);
    }
  
    console.log(Object.fromEntries(formData));
  }
  
  document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();
    getData(e.target);
  });

  */








function getData(form) {
    var formData = new FormData(form);
  
    for (var pair of formData.entries()) {
      console.log(pair[0] + ": " + pair[1]);
    }
  
    console.log(Object.fromEntries(formData));
  }
  
  document.getElementById("submit2").click(function(){
    var val =document.getElementById("form");
    getData(val.submit())
  })






