import { ReactNode, ReactElement } from 'react';

type CmdKeyType = 'cmd' | 'ctrl' | 'alt' | 'shift' | 'esc';
type AlphabetKeyType =
  | 'a'
  | 'b'
  | 'c'
  | 'd'
  | 'e'
  | 'f'
  | 'g'
  | 'h'
  | 'i'
  | 'j'
  | 'k'
  | 'l'
  | 'm'
  | 'n'
  | 'o'
  | 'p'
  | 'q'
  | 'r'
  | 's'
  | 't'
  | 'u'
  | 'v'
  | 'w'
  | 'x'
  | 'y'
  | 'z';

export interface ICommandProps {
  cmdKeys: (CmdKeyType | AlphabetKeyType)[];
  action: VoidFunction;
  children: ReactNode | ReactElement[];
}
