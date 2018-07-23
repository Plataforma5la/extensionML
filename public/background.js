chrome.runtime.onInstalled.addListener(function (object) {
    chrome.tabs.create({url: "http://mercadolibre.com.ar/"}, function (tab) {
        console.log("New tab launched with http://mercadolibre.com.ar/");
    });
});

chrome.browserAction.setBadgeText({"text": "2"})