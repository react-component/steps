import * as React from 'react';
import type { StepsProps } from './Steps';

export interface StepsContextProps {
  prefixCls: string;
  classNames: NonNullable<StepsProps['classNames']>;
  styles: NonNullable<StepsProps['styles']>;
}

export const StepsContext = React.createContext<StepsContextProps>(null!);
