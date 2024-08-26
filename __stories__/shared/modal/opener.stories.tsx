import Button from '@/shared/ui/button';
import ModalLayer from '@/shared/ui/modalLayer';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ModalLayer.Opener> = {
  title: 'shared/ModalLayer/Opener',
  component: ModalLayer.Opener,
  tags: ['autodocs'],
  decorators: [
    // eslint-disable-next-line @typescript-eslint/naming-convention
    (Story) => (
      <ModalLayer.Provider>
        <Story />
      </ModalLayer.Provider>
    ),
  ],
  argTypes: {
    modalType: {
      control: 'text',
      description: 'modal의 종류를 선언 (ex. modal, sidebar, sidebar-panel)',
    },
    modalContent: {
      description: '새로 띄울 modal 컴포넌트 선언',
    },
    children: {
      description: 'ModalLayer.Opener 안의 내용',
    },
    etcStyles: {
      description: '그 외 커스텀 스타일',
    },
    externalAction: {
      description: 'modal를 여는 행위 외의 다른 추가 액션 실행',
    },
  },
};

export default meta;

type Story = StoryObj<typeof ModalLayer.Opener>;

export const Story: Story = {
  render: () => {
    return (
      <ModalLayer.Opener modalType="modal" modalContent={<div></div>}>
        <Button
          kind="default"
          etcStyles={{
            width: '100px',
            height: '50px',
          }}
        >
          모달 열기 버튼
        </Button>
      </ModalLayer.Opener>
    );
  },
};