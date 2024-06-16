import { spacer } from '@/styles/theme';

import Form from '@/components/@common/Form';
import Input from '@/components/@common/Input';
import Spacer from '@/components/@common/layout/Spacer';

import {
  getEditNameModalWrapper,
  getInputErrorMessageStyle,
  getInputFieldStyle,
  getInputLabelStyle,
} from '@/components/domain/modal/EditNameModal/style';

import Mutation from '@/components/@shared/Query/Mutation';

import { sendMessageForChrome } from '@/utils/chrome';
import { validateLinkName } from '@/components/domain/modal/EditNameModal/util';

import type { MutationReturnType } from '@/components/domain/bookmark/BookmarkList/type';
import type { EditNameModel } from '@/components/domain/modal/EditNameModal/type';

function EditNameModal({ id, title }: EditNameModel) {
  const updateBookmarkTitle =
    (bookmarkId: string) =>
    async (elements: HTMLInputElement[]): Promise<MutationReturnType> => {
      return await sendMessageForChrome({
        action: 'updateBookmark',
        options: {
          id: bookmarkId,
          title: elements[0].value,
        },
      });
    };

  return (
    <div css={getEditNameModalWrapper()}>
      <Mutation
        queryKeys={['bookmarks']}
        mutationFn={updateBookmarkTitle(id)}
        suspense={'로딩 중'}
        errorBoundary={'에러 발생'}
      >
        <Form>
          <Input
            inputName="북마크 이름 수정"
            inputValue={title}
            validate={validateLinkName}
          >
            <Input.Label
              etcStyles={getInputLabelStyle()}
              text="변경할 이름을 작성해주세요."
            />
            <Spacer direction="vertical" space={spacer['spacing2.5']} />
            <Input.Field placeholder="이름" etcStyles={getInputFieldStyle()} />
            <Spacer direction="vertical" space={spacer.spacing2} />
            <Input.ErrorMessage
              etcStyles={getInputErrorMessageStyle()}
              message="최대 한 자 이상의 글자를 입력해주세요."
            />
          </Input>
        </Form>
      </Mutation>
    </div>
  );
}

export default EditNameModal;
