import * as React from 'react';
import { clsx } from 'clsx';
import type { Status } from './Steps';

export interface RailProps {
  prefixCls: string;
  className: string;
  style: React.CSSProperties;
  status: Status;
}

export default function Rail(props: RailProps) {
  const { prefixCls, className, style, status } = props;
  const railCls = `${prefixCls}-rail`;

  // ============================= render =============================
  return <div className={clsx(railCls, `${railCls}-${status}`, className)} style={style} />;
}
