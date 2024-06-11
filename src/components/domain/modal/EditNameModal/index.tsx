import { spacer } from '@/styles/theme';

import Input from '@/components/@common/Input';
import Flex from '@/components/@common/layout/Flex';
import Spacer from '@/components/@common/layout/Spacer';

import {
  getEditNameModalWrapper,
  getInputErrorMessageStyle,
  getInputFieldStyle,
  getInputLabelStyle,
} from '@/components/domain/modal/EditNameModal/style';
import { validateLinkName } from '@/components/domain/modal/EditNameModal/util';

import type { EditNameModel } from '@/components/domain/modal/EditNameModal/type';

function EditNameModal({ prevTitle }: EditNameModel) {
  return (
    <div css={getEditNameModalWrapper()}>
      <Input
        inputName="안녕"
        inputValue={prevTitle}
        validate={validateLinkName}
      >
        <Flex direction="column" justify="space-between">
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
        </Flex>
      </Input>
    </div>
  );
}

export default EditNameModal;
