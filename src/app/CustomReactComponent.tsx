import * as React from 'react';
import { FunctionComponent, useEffect, useRef, useState } from 'react';

export interface IMyComponentProps {
  onClick?: () => void;
}

export const CustomReactComponent: FunctionComponent<IMyComponentProps> = (props: IMyComponentProps) => {

  const {onClick} = props;
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div>
        <button type="button" onClick={handleClick}>click</button>
    </div>
  );
};
