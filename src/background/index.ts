chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'getBookmarks') {
    chrome.bookmarks.getTree((tree) => {
      sendResponse(tree);
    });

    return true;
  }
});
