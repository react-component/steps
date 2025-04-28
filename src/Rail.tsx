import * as React from 'react';
import cls from 'classnames';
import type { Status, StepsProps } from './Steps';

export interface RailProps {
  prefixCls: string;
  classNames: StepsProps['classNames'];
  styles: StepsProps['styles'];
  status: Status;
}

export default function Rail(props: RailProps) {
  const { prefixCls, classNames, styles, status } = props;
  const railCls = `${prefixCls}-rail`;

  // ============================= render =============================
  return (
    <div
      className={cls(railCls, `${railCls}-${status}`, classNames.itemRail)}
      style={styles.itemRail}
    />
  );
}
