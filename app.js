$(function() {
  // YOUR CODE HERE
  //EXERCISE ONE 
  $("#toggleButton").on("click", () => {
    $("#myParagraph").toggle()
  })

  //EXERCISE TWO
  $("#colorButton").on("click", () => {
    $("#colorDiv").css("background-color", "yellow")
  })

  //EXERCISE THREE
  $("#addClassButton").on("click", () => {
    $("#classDiv").addClass("newClass")
  })  //its not going light blue 

  $("#removeClassButton").on("click", () => {
    $("#classDiv").removeClass("newClass")
  })

  //EXERCISE FOUR 
  $("#fadeInButton").on("click", () => {
    $("#fadeDiv").fadeIn()
  })

  $("#fadeOutButton").on("click", () => {
    $(("#fadeDiv")).fadeOut()
  })

  //EXERCISE FIVE 
  $("#slideUpButton").on("click", () => {
    $("#slideDiv").slideUp()
  })
  $("#slideDownButton").on("click", () => {
    $("#slideDiv").slideDown()
  })

})