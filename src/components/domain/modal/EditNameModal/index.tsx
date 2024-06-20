import { spacer } from '@/styles/theme';

import Form from '@/components/@common/Form';

import Spacer from '@/components/@common/layout/Spacer';

import {
  getEditNameModalWrapper,
  getInputErrorMessageStyle,
  getInputFieldStyle,
  getInputLabelStyle,
} from '@/components/domain/modal/EditNameModal/style';

import Mutation from '@/components/@shared/Query/Mutation';
import Input from '@/components/@common/Input';

import { sendMessageForChrome } from '@/utils/chrome';
import { validateLinkName } from '@/components/domain/modal/EditNameModal/util';

import type { IEditNameModel } from '@/components/domain/modal/EditNameModal/type';
import type { IFieldAttribute } from '@/components/@common/Input/Field/type';

function EditNameModal({ id, title }: IEditNameModel) {
  const updateBookmarkTitle =
    (bookmarkId: string) => async (parameter: unknown) => {
      if (
        !parameter ||
        !Array.isArray(parameter) ||
        !parameter.every((el) => el.value !== undefined)
      ) {
        throw new Error('elements 요소들은 반드시 value요소가 있어야한다.');
      }

      const fieldElements = parameter as IFieldAttribute[];

      return await sendMessageForChrome({
        action: 'updateBookmark',
        options: {
          id: bookmarkId,
          title: fieldElements[0].value,
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
