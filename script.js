var counter = 0;

   $("button").click(function() {counter = counter + 1;
   $(".quiz").text("Button clicked " + counter + " times");
         
    var hair = $(".hair").val();
    var num = $(".num").val();
    
   if (parseInt(num) === 1 && hair === "Blonde"){
   $(".message").text("Serena van der Woodsen").append("<img src='https://i.pinimg.com/originals/fd/89/c0/fd89c0205a1f14871369acc4c5b70ac8.jpg'>"); 
    
   }else if (num === "1" && hair === "Brunette"){
   $(".message").text("Blair Waldorf").append("<img src='https://imgix.bustle.com/uploads/getty/2020/3/16/5a2c0377-54cc-4a6c-af63-8a415e298c67-getty-78102220.jpg'>");     
    
   }else if (num === "2" && hair === "Blonde"){
   $(".message").text("Nate Archibald").append("<img src='https://i.pinimg.com/originals/89/69/77/896977e832bd81e69680be1adc12d2ba.jpg'>");      
    
    
   }else if (num === "2" && hair === "Brunette"){
  $(".message").text("Dan Humphrey ").append("<img src='https://static.wikia.nocookie.net/gossipgirl/images/e/e7/DanInfobox.jpg/revision/latest?cb=20200318020644'>"); 
   }
    
});