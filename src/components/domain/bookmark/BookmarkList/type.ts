export interface BookmarkListProps {
  folder: string;
  data?: chrome.bookmarks.BookmarkTreeNode[];
}

export type MutationReturnType = () => Promise<{
  success: boolean;
  error?: string;
}>;
