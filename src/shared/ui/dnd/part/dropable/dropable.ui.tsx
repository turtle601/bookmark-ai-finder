import { css } from '@emotion/react';
import React, { forwardRef, ReactNode, Ref } from 'react';

import { useDropable } from '@/shared/ui/dnd/hooks';

import type { CSSObject } from '@emotion/react';

interface IDropableProps {
  children: (props: { isDragEnter: boolean }) => ReactNode;
  dropAction: React.DragEventHandler;
  etcStyles?: CSSObject;
}

const DropableComponent = (
  { dropAction, children, etcStyles = {}, ...attribute }: IDropableProps,
  ref: Ref<HTMLDivElement>,
) => {
  const { isDragEnter, handleDragEnter, handleDragLeave, handleDrop } =
    useDropable({ action: dropAction });

  const handleDragOver: React.DragEventHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div
      ref={ref}
      onDragEnter={handleDragEnter}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      css={css({
        ...etcStyles,
      })}
      {...attribute}
    >
      {children({ isDragEnter })}
    </div>
  );
};

export type DropableFC = React.MemoExoticComponent<
  React.ForwardRefExoticComponent<
    IDropableProps & React.RefAttributes<HTMLDivElement>
  >
>;

const Dropable: DropableFC = React.memo(forwardRef(DropableComponent));

export default Dropable;
