import { create } from 'zustand';

import type { BookmarkState } from '@/store/bookmark/type';

export const useBookmarkStore = create<BookmarkState>((set) => ({
  path: [''],

  openFolder: (path) =>
    set((state) => {
      return {
        path: [...state.path, path],
      };
    }),

  pickFolder: (path) =>
    set((state) => {
      const targetIdx = state.path.indexOf(path);

      return {
        path: state.path.slice(0, targetIdx + 1),
      };
    }),
}));
