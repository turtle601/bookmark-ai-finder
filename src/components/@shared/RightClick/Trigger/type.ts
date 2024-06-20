import Menu from '@/components/@shared/RightClick/Menu';
import {
  ReactNode,
  ComponentPropsWithoutRef,
  ReactElement,
  ForwardRefExoticComponent,
  RefAttributes,
} from 'react';

export interface ITriggerProps extends ComponentPropsWithoutRef<'button'> {
  showMenu: ReactElement<typeof Menu>;
  children: ReactElement[] | ReactNode;
}

export type ITrigger = ForwardRefExoticComponent<
  ITriggerProps & RefAttributes<HTMLButtonElement>
>;
