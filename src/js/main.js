$(document).ready(function(){

    //------ Event On Clicking Send Button
    $("#chat-now").click(function(){
        
        //hide chat link and show form
        $(this).addClass("hide");
        $("#chat-form").removeClass("hide");

        //hide start message and show first message after 1 second
        $(".start").addClass("hide");
        $(".message-list").removeClass("hide");
        $(".chat-message:first-child").delay(1000).fadeIn();

    });


    //------ Even on Click
    $("#chat-form .btn").on("click", function(){
    
        //------ show message typed by customer
        $(".customer-msg").removeClass("hide").fadeIn(); 
        var cm = $("#chat-form input").val();
        createChatElement(".message-list","Nicholas", cm, "customer");
        $("#chat-form input").val("");    
        $(".message-list .customer").removeClass("customer").fadeIn();
       
        ///------ show default static reply after 3 seconds
        var default_reply = "To reset your password just click on the My details menu. Once you have clicked the menu a new page will appear. Select the link Change password. From this link it will take you to a screen where you cna change your password";
        createChatElement(".message-list","Mary", default_reply , "reply")
        $(".message-list .reply").removeClass("reply").delay(3000).fadeIn();

    })

});

/*
    Function to create chat message element
*/
function createChatElement(elem, name, text, type){
    var newElem = $("<div></div>").addClass("chat-message hide "+ type).text(text);
    newElem.prepend($("<span></span>").text(name + ": "));
    $(elem).append(newElem);
}