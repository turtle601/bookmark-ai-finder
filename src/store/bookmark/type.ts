export interface BookmarkState {
  path: string[];
  openFolder: (path: string) => void;
  pickFolder: (path: string) => void;
}
