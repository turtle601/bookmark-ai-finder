export const isLinkBox = (bookmark: chrome.bookmarks.BookmarkTreeNode) => {
  return !bookmark.children;
};

export const getBookmarksData = (
  title: string,
  bookMarkData: chrome.bookmarks.BookmarkTreeNode[]
) => {
  if (bookMarkData.length === 0) return [];

  let queue = [bookMarkData[0]];
  let result: chrome.bookmarks.BookmarkTreeNode[] = [];

  while (queue.length > 0) {
    const bookmark = queue.shift() as chrome.bookmarks.BookmarkTreeNode;

    if (bookmark.children && bookmark.title === title) {
      result = bookmark.children;
      break;
    }

    if (bookmark.children && bookmark.title !== title) {
      queue = [...queue, ...bookmark.children];
    }
  }

  return result;
};
