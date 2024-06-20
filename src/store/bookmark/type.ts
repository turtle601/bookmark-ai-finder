export interface IBookmarkState {
  path: string[];
  openFolder: (path: string) => void;
  pickFolder: (path: string) => void;
}
