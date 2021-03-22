chrome.webNavigation.onHistoryStateUpdated.addListener(function (details) {
  console.log("hello from background");
  chrome.tabs.executeScript(null, { file: "./site/caliroots.js" });
});
