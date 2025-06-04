import * as React from 'react';
import type { ComponentType, StepsProps } from './Steps';

export interface StepsContextProps {
  prefixCls: string;
  classNames: NonNullable<StepsProps['classNames']>;
  styles: NonNullable<StepsProps['styles']>;
  ItemComponent: ComponentType;
}

export const StepsContext = React.createContext<StepsContextProps>(null!);
