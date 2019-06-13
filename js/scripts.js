// user interface logic
$(document).ready(function() {
  $("form#roman_num").submit(function(event) {
    event.preventDefault();

    function integer_to_roman(number) {
    if (typeof num !== 'number')
    return false;

    var digits = String(+num).split(""),
    key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
    "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
    "","I","II","III","IV","V","VI","VII","VIII","IX"],
    roman_num = "",
    i = 3;
    while (i--)
    roman_num = (key[+digits.pop() + (i * 10)] || "") + roman_num;
    return Array(+digits.join("") + 1).join("M") + roman_num;

    var num = parseInt($("input#number").val());
    var result = roman_num(number);

    $(".number").text(number);

    if (!result) {                 // same as writing if (result === false)
      $(".not").text("not");
    } else {
      $(".not").text("");
    }

    $("#result").show();
  });


// business logic


});
