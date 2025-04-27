/* eslint react/prop-types: 0 */
import * as React from 'react';
import cls from 'classnames';
import KeyCode from '@rc-component/util/lib/KeyCode';
import type { Status, Icons } from './interface';
import type { ProgressDotRender, StepItem, StepsProps } from './Steps';

function isString(str: any): str is string {
  return typeof str === 'string';
}

export interface StepProps {
  // style
  prefixCls?: string;
  classNames: StepsProps['classNames'];
  styles: StepsProps['styles'];

  // data
  data: StepItem;
  prevStatus?: Status;

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
  progressDot?: ProgressDotRender | boolean;
  itemRender?: (stepItem: React.ReactElement) => React.ReactNode;

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
    prevStatus,

    active,
    index,

    // render
    progressDot,
    itemRender,
    iconRender,

    // events
    onClick,
  } = props;

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
    `${prefixCls}-item`,
    `${prefixCls}-item-${mergedStatus}`,
    {
      [`${prefixCls}-item-custom`]: icon,
      [`${prefixCls}-item-active`]: active,
      [`${prefixCls}-item-disabled`]: disabled === true,
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
      <div {...accessibilityProps} className={`${prefixCls}-item-container`}>
        <div className={`${prefixCls}-item-tail`} />
        <div className={`${prefixCls}-item-icon`}>
          {iconRender(data, {
            index,
            active,
          })}
        </div>
        <div className={`${prefixCls}-item-content`}>
          <div className={`${prefixCls}-item-title`}>
            {title}
            {subTitle && (
              <div
                title={typeof subTitle === 'string' ? subTitle : undefined}
                className={`${prefixCls}-item-subtitle`}
              >
                {subTitle}
              </div>
            )}
          </div>
          {description && <div className={`${prefixCls}-item-description`}>{description}</div>}
        </div>
      </div>
    </div>
  );

  if (itemRender) {
    stepNode = (itemRender(stepNode) || null) as React.ReactElement;
  }

  return stepNode;
}
