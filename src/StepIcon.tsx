import * as React from 'react';
import { clsx } from 'clsx';
import { StepsContext } from './Context';
import pickAttrs from '@rc-component/util/lib/pickAttrs';

export interface StepIconSemanticContextProps {
  className?: string;
  style?: React.CSSProperties;
}

export const StepIconSemanticContext = React.createContext<StepIconSemanticContextProps>({});

export type StepIconProps = React.HTMLAttributes<HTMLDivElement>;

const StepIcon = React.forwardRef<HTMLDivElement, StepIconProps>((props, ref) => {
  const { className, style, children, ...restProps } = props;

  const { prefixCls, classNames, styles } = React.useContext(StepsContext);
  const { className: itemClassName, style: itemStyle } = React.useContext(StepIconSemanticContext);

  const itemCls = `${prefixCls}-item`;

  return (
    <div
      {...pickAttrs(restProps, false)}
      ref={ref}
      className={clsx(`${itemCls}-icon`, classNames.itemIcon, itemClassName, className)}
      style={{ ...styles.itemIcon, ...itemStyle, ...style }}
    >
      {children}
    </div>
  );
});

export default StepIcon;
