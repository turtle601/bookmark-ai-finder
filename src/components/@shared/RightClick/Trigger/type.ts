import Menu from '@/components/@shared/RightClick/Menu';
import { ReactNode, ComponentPropsWithoutRef, ReactElement } from 'react';

export interface TriggerProps extends ComponentPropsWithoutRef<'button'> {
  showMenu: ReactElement<typeof Menu>;
  children: ReactElement[] | ReactNode;
}
