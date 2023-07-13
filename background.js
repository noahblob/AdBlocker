chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return { cancel: true }},
    { urls: defaultFilters},
    ["blocking"]
)

defaultFilters = [
    "*://*.doubleclick.net/*",
    "*://partner.googleadservices.com/*",
    "*://*.googlesyndication.com/*",
    "*://*.google-analytics.com/*",
    "*://creative.ak.fbcdn.net/*",
    "*://*.adbrite.com/*",
    "*://*.exponential.com/*",
    "*://*.quantserve.com/*",
    "*://*.scorecardresearch.com/*",
    "*://*.zedo.com/*",
    "*://*.doubleclick.com/*",
    "*://*.omniture.com/*",
    "*://*.atdmt.com/*",
    "*://*.revsci.net/*",
    "*://*.mediaplex.com/*",
    "*://*.sitescout.com/*",
    "*://*.sitescoutadserver.com/*",
    "*://*.openx.net/*",
    "*://*.openx.com/*",
    "*://*.advertising.com/*",
    "*://*.yieldmanager.com/*",
    "*://*.yieldmanager.net/*",
    "*://*.smartadserver.com/*",
    "*://*.advertising.com/*",
]