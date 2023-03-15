

function updateDate() {
  var today = dayjs();
  $('#currentDay').text(today.format('dddd - MMMM D, YYYY h:mm'));
}
setInterval(() => {
  updateDate()
}, 1000);
var currentTime = dayjs().hour();  
//
$(".description").each(function(){
  let textAreaTime = $(this).parent().attr("id").split("-")[1];
  console.log(textAreaTime)
  if (currentTime == textAreaTime){
    $(this).addClass("present")  
  }
  else if (currentTime < textAreaTime){
    $(this).addClass("future")
  }
  else {
    $(this).addClass("past")
  }
})

$(".saveBtn").on("click",function() {
    var text = $(this).siblings("textarea").val()
    var time = $(this).parent().attr("id").split("-")[1];
    localStorage.setItem(time,text)
})   

$(".SaveBtn").on("click",function() {
  var time = $(this).parent().attr("id").split("-")[1]
  var text = $(this).siblings("textarea").val()
  localStorage.getItem(time)
  localStorage.getItem(text)
})



//local storage get item, store in text area, start with parent which has the ID
//grab #hour, children (textarea) .val set value to whatever is in local storage



  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. 
  //   .ON
  //HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //ADD TO LOCAL STORAGE


  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //CHECK TIME ON CALENDER TO TIME FOR LOCAL USER (IF, IF, ELSE AND APPLY CLASSES)
  
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //RETRIEVE LOCAL STORAGE
  //
  // TODO: Add code to display the current date in the header of the page.
//});



