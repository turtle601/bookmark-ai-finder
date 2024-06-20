import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import Item from '@/components/@shared/RightClick/Item';
import Menu from '@/components/@shared/RightClick/Menu';
import Root from '@/components/@shared/RightClick/Root';
import Trigger from '@/components/@shared/RightClick/Trigger';
import { ITrigger } from '@/components/@shared/RightClick/Trigger/type';
import { IItemProps } from '@/components/@shared/RightClick/Item/type';
import { IMenuProps } from '@/components/@shared/RightClick/Menu/type';

const RightClick: (({
  children,
}: {
  children?: React.ReactNode;
}) => EmotionJSX.Element) & {
  Trigger: ITrigger;
  Item: ({
    children,
    externalAction,
    etcStyles,
    ...attribute
  }: IItemProps) => EmotionJSX.Element;
  Menu: ({
    id,
    children,
    gap,
    etcStyles,
    ...attribute
  }: IMenuProps) => EmotionJSX.Element | null;
} = Object.assign(Root, {
  Trigger,
  Item,
  Menu,
});

export default RightClick;
