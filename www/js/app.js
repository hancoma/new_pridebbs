function left_menu() {
 
     $( document ).ready(function() {
                    $.post("http://m.pridebbs.com/left_menu.php",
               {
                   
                 
               },
               function(data){
                var data=data;
                 if (data) {
                        $("#menu").html(data);
                    }

                    
                      
                    
                });
     });
}

function goHref(url) {
  var url=url;
  url="http://m.pridebbs.com"+url;
  var ref = window.open(url, '_blank', 'location=no');
}
function getpage(uuid,page) {
    // 외부 페이지 가져 오기 
        // uuid는 기기 번호 
    var uuid=uuid;
    var page=page;
    var url="http://m.pridebbs.com/"+page+".php";
 $.post(url,
   {
       
            uuid:uuid
   },
   function(data){
    var data=data;
     if (data) {
            $("#content").html(data);
        }

        
          
        
    });

}
function gopage (page) {
    var page=page;
    location.href=page;
}