import * as React from 'react';
import cls from 'classnames';
import { StepsContext } from './Context';
import pickAttrs from '@rc-component/util/lib/pickAttrs';

export type StepIconProps = React.HTMLAttributes<HTMLDivElement>;

const StepIcon = React.forwardRef<HTMLDivElement, StepIconProps>((props, ref) => {
  const { className, style, ...restProps } = props;
  const { prefixCls, classNames, styles } = React.useContext(StepsContext);

  const itemCls = `${prefixCls}-item`;

  return (
    <div
      {...pickAttrs(restProps, false)}
      ref={ref}
      className={cls(`${itemCls}-icon`, classNames.itemIcon, className)}
      style={{
        ...styles.itemIcon,
        ...style,
      }}
    />
  );
});

export default StepIcon;
