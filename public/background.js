chrome.runtime.onInstalled.addListener(function (object) {
    chrome.tabs.create({url: "http://mercadolibre.com.mx/"}, function (tab) {
        console.log("New tab launched with http://mercadolibre.com.mx/");
    });
});

chrome.browserAction.setBadgeText({"text": "2"})