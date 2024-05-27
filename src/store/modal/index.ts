import { create } from 'zustand';

import type { ModalState } from '@/store/modal/type';

export const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  content: '',
  openModal: (content) =>
    set(() => {
      return { isOpen: true, content };
    }),
  closeModal: () =>
    set((state) => {
      return { ...state, isOpen: false };
    }),
}));
