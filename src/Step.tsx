/* eslint react/prop-types: 0 */
import * as React from 'react';
import cls from 'classnames';
import KeyCode from '@rc-component/util/lib/KeyCode';
import type { StepItem, StepsProps } from './Steps';

export interface StepProps {
  // style
  prefixCls?: string;
  classNames: StepsProps['classNames'];
  styles: StepsProps['styles'];

  // data
  data: StepItem;

  active?: boolean;
  index: number;

  // stepIndex?: number;
  // stepNumber?: number;
  // title?: React.ReactNode;
  // subTitle?: React.ReactNode;
  // description?: React.ReactNode;

  // render
  iconRender?: StepsProps['iconRender'];
  icon?: React.ReactNode;
  itemRender?: StepsProps['itemRender'];

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

    active,
    index,

    // render
    itemRender,
    iconRender,

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
    item: data,
    index,
    active,
  };

  // ========================= Click ==========================
  const clickable = !!(onItemClick || onItemClick) && !disabled;

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

  let stepNode: React.ReactNode = (
    <div
      {...restItemProps}
      className={classString}
      style={{
        ...styles.item,
        ...style,
      }}
    >
      <div {...accessibilityProps} className={`${itemCls}-container`}>
        <div className={`${itemCls}-tail`} />
        <div className={`${itemCls}-icon`}>{iconRender?.(renderInfo)}</div>
        <div className={`${itemCls}-content`}>
          <div className={`${itemCls}-title`}>
            {title}
            {subTitle && (
              <div
                title={typeof subTitle === 'string' ? subTitle : undefined}
                className={`${itemCls}-subtitle`}
              >
                {subTitle}
              </div>
            )}
          </div>
          {mergedContent && <div className={`${itemCls}-description`}>{mergedContent}</div>}
        </div>
      </div>
    </div>
  );

  if (itemRender) {
    stepNode = (itemRender(stepNode, renderInfo) || null) as React.ReactElement;
  }

  return stepNode;
}
