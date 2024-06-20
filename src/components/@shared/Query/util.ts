import {
  Children,
  cloneElement,
  isValidElement,
  ReactElement,
  ReactNode,
} from 'react';

export const givePropsToChildren = <T>(
  data: T,
  children: ReactElement[] | ReactNode,
) => {
  return Children.map(children, (child) => {
    if (isValidElement<{ data: T }>(child)) {
      return cloneElement(child, { data });
    }
    return child;
  });
};

export const giveEventToChildren = (
  action: (parameter?: any) => Promise<void>,
  children: ReactElement[] | ReactNode,
) => {
  return Children.map(children, (child) => {
    if (
      isValidElement<{
        externalAction: (parameter?: any) => Promise<void>;
      }>(child)
    ) {
      return cloneElement(child, { externalAction: action });
    }
  });
};
