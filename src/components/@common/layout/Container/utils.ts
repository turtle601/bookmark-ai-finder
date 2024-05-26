import { css, jsx, SerializedStyles } from '@emotion/react';
import {
  Children,
  CSSProperties,
  isValidElement,
  ReactElement,
  ReactNode,
} from 'react';

export const getChildrenForContainerStyle = (
  children: ReactElement[] | ReactNode,
  minWidth?: CSSProperties['minWidth'],
  maxWidth?: CSSProperties['maxWidth']
) => {
  const styledChildren = Children.map(children, (child) => {
    if (!isValidElement<Record<'css', SerializedStyles>>(child)) {
      throw new Error('자식 요소가 React.child가 아닙니다!!');
    }

    return jsx('div', {
      css: [
        css({
          width: '100%',
          minWidth,
          maxWidth,
        }),
        child.props.css,
      ],
      children: child,
    });
  });

  return styledChildren;
};
