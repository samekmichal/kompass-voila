function checkForValidUrl(tabId, changeInfo, tab) {
    if (tab.url.indexOf('www.kompass.de/touren-und-regionen/wanderkarte') !== -1) {
        chrome.pageAction.show(tabId);
    }
};

// Listen for any changes to the URL of any tab.
chrome.tabs.onUpdated.addListener(checkForValidUrl);

chrome.pageAction.onClicked.addListener(function(tab) {
    chrome.tabs.sendMessage(tab.id, {
      command: "kompass-voila",
    });
});
