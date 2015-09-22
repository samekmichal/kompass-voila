chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
  if (msg.command && (msg.command === "kompass-voila")) {
    $("nav.navbar").fadeOut(300);
    $("div.contentWrapper, footer").fadeOut(300,function(){
        $(this).hide();
    });
    $(".banner").hide();
    $("html").css("overflow","hidden");
    $("div.map-container-wrapper").css({
        "position": "fixed",
        "top": "0",
        "left": "0",
        "width": "100%",
        "height": "100%"
    });
  }
});
