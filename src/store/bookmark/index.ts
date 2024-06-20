import { StoreApi, UseBoundStore, create } from 'zustand';

import type { IBookmarkState } from '@/store/bookmark/type';

export const useBookmarkStore: UseBoundStore<StoreApi<IBookmarkState>> =
  create<IBookmarkState>((set) => ({
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
