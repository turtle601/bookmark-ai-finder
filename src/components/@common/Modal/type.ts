import { ReactElement, ReactNode } from 'react';

export type ModalContent = string | ReactNode | ReactElement[] | null;

export type ModalType = 'script' | 'trigger';

export interface ModalProps {
  name: ModalType;
}

export interface ModalState {
  script: {
    isOpen: boolean;
    content: ModalContent;
    zIndex: number;
  };
  trigger: {
    isOpen: boolean;
    content: ModalContent;
    zIndex: number;
  };
}

export interface ModalProviderProps {
  modalState: ModalState;
  children: ReactNode;
}

export type ModalAction =
  | { type: 'OPEN_MODAL'; modalType: ModalType; content: ModalContent }
  | { type: 'CLOSE_MODAL'; modalType: ModalType };
