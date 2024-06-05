import { ModalAction, ModalState } from '@/components/@common/Modal/type';

export const modalState: ModalState = {
  script: {
    isOpen: false,
    content: null,
    zIndex: 1000000,
  },
  trigger: {
    isOpen: false,
    content: null,
    zIndex: 1001000,
  },
};

export function reducer(state: ModalState, action: ModalAction): ModalState {
  switch (action.type) {
    case 'OPEN_MODAL':
      return {
        ...state,
        [action.modalType]: {
          ...state[action.modalType],
          isOpen: true,
          content: action.content,
        },
      };
    case 'CLOSE_MODAL':
      return {
        ...state,
        [action.modalType]: {
          ...state[action.modalType],
          isOpen: false,
          content: null,
        },
      };
    default:
      throw new Error('지정된 액션이 없습니다!!');
  }
}
