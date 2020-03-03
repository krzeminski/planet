// $(window).resize(function(){
//
//        if ($('body').width() <= 992 ){
//               // is mobile device
//
//        }
//
// });
//

function myFunction(x) {
  $span=$(".episode_no").clone();
  $(".episode_no").remove();
  // $(".date").insertBefore($span);
}
var x = window.matchMedia("(max-width: 992px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes
