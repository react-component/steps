/* eslint react/prop-types: 0 */
import * as React from 'react';
import cls from 'classnames';
import KeyCode from '@rc-component/util/lib/KeyCode';
import type { Status, StepItem, StepsProps } from './Steps';
import Rail from './Rail';

export interface StepProps {
  // style
  prefixCls?: string;
  classNames: StepsProps['classNames'];
  styles: StepsProps['styles'];

  // data
  data: StepItem;
  nextStatus?: Status;
  active?: boolean;
  index: number;
  last: boolean;

  // stepIndex?: number;
  // stepNumber?: number;
  // title?: React.ReactNode;
  // subTitle?: React.ReactNode;
  // description?: React.ReactNode;

  // render
  iconRender?: StepsProps['iconRender'];
  icon?: React.ReactNode;
  itemRender?: StepsProps['itemRender'];
  itemWrapperRender?: StepsProps['itemWrapperRender'];

  // Event
  onClick?: (index: number) => void;
}

export default function Step(props: StepProps) {
  const {
    // style
    prefixCls,
    classNames,
    styles,

    // data
    data,
    last,
    nextStatus,
    active,
    index,

    // render
    itemRender,
    iconRender,
    itemWrapperRender,

    // events
    onClick,
  } = props;

  const itemCls = `${prefixCls}-item`;

  // ========================== Data ==========================
  const {
    onClick: onItemClick,
    title,
    subTitle,
    content,
    description,
    disabled,
    icon,
    status,

    className,
    style,
    ...restItemProps
  } = data;

  const mergedContent = content ?? description;

  const renderInfo = {
    item: {
      ...data,
      content: mergedContent,
    },
    index,
    active,
  };

  // ========================= Click ==========================
  const clickable = !!(onClick || onItemClick) && !disabled;

  const accessibilityProps: {
    role?: string;
    tabIndex?: number;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    onKeyDown?: React.KeyboardEventHandler<HTMLDivElement>;
  } = {};

  if (clickable) {
    accessibilityProps.role = 'button';
    accessibilityProps.tabIndex = 0;
    accessibilityProps.onClick = (e) => {
      onItemClick?.(e);
      onClick(index);
    };

    accessibilityProps.onKeyDown = (e) => {
      const { which } = e;
      if (which === KeyCode.ENTER || which === KeyCode.SPACE) {
        onClick(index);
      }
    };
  }

  // ========================= Render =========================
  const mergedStatus = status || 'wait';

  const classString = cls(
    itemCls,
    `${itemCls}-${mergedStatus}`,
    {
      [`${itemCls}-custom`]: icon,
      [`${itemCls}-active`]: active,
      [`${itemCls}-disabled`]: disabled === true,
    },
    className,
    classNames.item,
  );

  const wrapperNode = (
    <div
      className={cls(`${itemCls}-wrapper`, classNames.itemWrapper)}
      style={styles.itemWrapper}
      {...accessibilityProps}
    >
      <div className={cls(`${itemCls}-icon`, classNames.itemIcon)} style={styles.itemIcon}>
        {iconRender?.(renderInfo)}
      </div>
      <div className={cls(`${itemCls}-section`, classNames.itemSection)} style={styles.itemSection}>
        <div className={cls(`${itemCls}-header`, classNames.itemHeader)} style={styles.itemHeader}>
          <div className={cls(`${itemCls}-title`, classNames.itemTitle)} style={styles.itemTitle}>
            {title}
          </div>
          {subTitle && (
            <div
              title={typeof subTitle === 'string' ? subTitle : undefined}
              className={cls(`${itemCls}-subtitle`, classNames.itemSubtitle)}
              style={styles.itemSubtitle}
            >
              {subTitle}
            </div>
          )}

          {!last && (
            <Rail prefixCls={itemCls} classNames={classNames} styles={styles} status={nextStatus} />
          )}
        </div>
        {mergedContent && (
          <div
            className={cls(`${itemCls}-description`, classNames.itemContent)}
            style={styles.itemContent}
          >
            {mergedContent}
          </div>
        )}
      </div>
    </div>
  );

  let stepNode: React.ReactNode = (
    <div
      {...restItemProps}
      className={classString}
      style={{
        ...styles.item,
        ...style,
      }}
    >
      {itemWrapperRender ? itemWrapperRender(wrapperNode) : wrapperNode}
    </div>
  );

  if (itemRender) {
    stepNode = (itemRender(stepNode, renderInfo) || null) as React.ReactElement;
  }

  return stepNode;
}
