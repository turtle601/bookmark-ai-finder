export interface ModalState {
  isOpen: boolean;
  content: JSX.Element | string;
  openModal: (content: JSX.Element | string) => void;
  closeModal: () => void;
}
