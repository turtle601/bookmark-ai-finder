chrome.runtime.onInstalled.addListener(() => {
  console.log('I just installed my chrome extensions');
});

chrome.bookmarks.onCreated.addListener(() => {
  console.log('I just bookmarked this page');
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'getBookmarks') {
    chrome.bookmarks.getTree((tree) => {
      sendResponse(tree);
    });

    return true;
  }
});
