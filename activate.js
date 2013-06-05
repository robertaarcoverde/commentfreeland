// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.insertCSS({
   file: "commentfreeland.css"
  });
  chrome.tabs.executeScript({
    code: '$(".glbComentarios").html("Have a nice day")'
  });
});

