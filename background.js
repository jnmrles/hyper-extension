// // let store;

// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//   switch (request.command) {
//     case 'start':
//       console.log('in start');
//       chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
//         chrome.tabs.sendMessage(tabs[0].id, { action: 'open_dialog_box' });
//       });
//       break;
//     default:
//       console.log('in');

//       chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
//         chrome.tabs.sendMessage(tabs[0].id, { action: 'open_dialog_box' });
//       });
//   }

//   return true;
// });
