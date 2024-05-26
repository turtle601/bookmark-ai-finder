chrome.runtime.onInstalled.addListener(() => {
  console.log('I just installed my chrome extensions');
});

chrome.bookmarks.onCreated.addListener(() => {
  console.log('I just bookmarked this page');
});
