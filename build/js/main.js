$(document).ready(function(){

    $("#chat-now").click(function(){
        
        //hide chat link and show form
        $(this).addClass("hide");
        $("#chat-form").removeClass("hide");

        //hide start message and show first message after 1 second
        $(".start").addClass("hide");
        $(".message-list").removeClass("hide");
        $(".chat-message:first-child").delay(1000).fadeIn();

    });

    $("#chat-form .btn").on("click", function(){
    
       //------ show message typed by customer
            $(".customer-msg").removeClass("hide").fadeIn(); 
            var cm = $("#chat-form input").val();
            createChatElement(".message-list","Nicholas", cm, "customer");
            $("#chat-form input").val("");    
       
       createChatElement(".message-list","Mary", "To reset your password just click on the My details menu. Once you have clicked the menu a new page will appear. Select the link Change password. From this link it will take you to a screen where you cna change your password" , "reply")
      
       $(".message-list .customer").removeClass("customer").fadeIn();
       $(".message-list .reply").removeClass("reply").delay(3000).fadeIn();

    })

});

function createChatElement(elem, name, text, type){

    var newElem = $("<div></div>").addClass("chat-message hide "+ type).text(text);
    newElem.prepend($("<span></span>").text(name + ": "));

    $(elem).append(newElem);
    

}