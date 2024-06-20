import { ReactElement, ReactNode } from 'react';

export type ModalContent = string | ReactNode | ReactElement[] | null;

export type ModalType = 'script' | 'trigger';

export interface IModalProps {
  name: ModalType;
}

export interface IModalState {
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

export interface IModalProviderProps {
  modalState: IModalState;
  children: ReactNode;
}

export type ModalAction =
  | { type: 'OPEN_MODAL'; modalType: ModalType; content: ModalContent }
  | { type: 'CLOSE_MODAL'; modalType: ModalType };
