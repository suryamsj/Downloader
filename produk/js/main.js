
$(document).ready(function() {
  
    $(".btn").click(function() {
  
      $.ajax({
         url:"https://cors-anywhere.herokuapp.com/" + $("input").val(),
         type:'GET',
         datatype: "jsonp",
         crossDomain: true,
         success: function(data){
           if ($(data).filter('meta[property="og:video"]').attr("content") ) {
             var downloadlink = $(data).filter('meta[property="og:video"]').attr("content");
             var a = $("<a>")
              .attr("href", downloadlink)
              .attr("download", "video.mp4")
              .appendTo("body");
              a[0].click();
              a.remove();
           } else {
             var downloadlink = $(data).filter('meta[property="og:image"]').attr("content");
             var a = $("<a>")
              .attr("href", downloadlink)
              .attr("download", "img.png")
              .appendTo("body");
              a[0].click();
              a.remove();
           }
             
         }
      });
      
    });
    });
  
