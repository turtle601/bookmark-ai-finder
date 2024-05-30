import {
  Children,
  cloneElement,
  isValidElement,
  ReactElement,
  ReactNode,
} from 'react';

export const givePropsToChildren = <T>(
  data: T,
  children: ReactElement[] | ReactNode
) => {
  return Children.map(children, (child) => {
    if (isValidElement<{ data: T }>(child)) {
      return cloneElement(child, { data });
    }
    return child;
  });
};
