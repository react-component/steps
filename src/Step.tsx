/* eslint react/prop-types: 0 */
import * as React from 'react';
import classNames from 'classnames';
import KeyCode from '@rc-component/util/lib/KeyCode';
import type { Status, Icons } from './interface';
import type { ProgressDotRender, StepItem, StepsProps } from './Steps';

function isString(str: any): str is string {
  return typeof str === 'string';
}

export interface StepProps {
  // style
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  classNames: StepsProps['classNames'];
  styles: StepsProps['styles'];

  // data
  data: StepItem;
  active?: boolean;
  disabled?: boolean;
  stepIndex?: number;
  stepNumber?: number;
  status?: Status;
  title?: React.ReactNode;
  subTitle?: React.ReactNode;
  description?: React.ReactNode;

  // render
  iconRender?: StepsProps['iconRender'];

  icon?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  onStepClick?: (index: number) => void;
  progressDot?: ProgressDotRender | boolean;
  render?: (stepItem: React.ReactElement) => React.ReactNode;
}

export default function Step(props: StepProps) {
  const {
    className,
    prefixCls,
    style,
    active,
    status,
    icon,
    stepNumber,
    disabled,
    description,
    title,
    subTitle,
    progressDot,
    stepIndex,
    onStepClick,
    onClick,
    render,
    data,
    ...restProps
  } = props;

  // ========================= Click ==========================
  const clickable = !!onStepClick && !disabled;

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
      onClick?.(e);
      onStepClick(stepIndex);
    };
    accessibilityProps.onKeyDown = (e) => {
      const { which } = e;
      if (which === KeyCode.ENTER || which === KeyCode.SPACE) {
        onStepClick(stepIndex);
      }
    };
  }

  // ========================= Render =========================
  const renderIconNode = () => {
    let iconNode: React.ReactNode;
    const iconClassName = classNames(`${prefixCls}-icon`, `${iconPrefix}icon`, {
      [`${iconPrefix}icon-${icon}`]: icon && isString(icon),
      [`${iconPrefix}icon-check`]:
        !icon && status === 'finish' && ((icons && !icons.finish) || !icons),
      [`${iconPrefix}icon-cross`]:
        !icon && status === 'error' && ((icons && !icons.error) || !icons),
    });
    const iconDot = <span className={`${prefixCls}-icon-dot`} />;
    // `progressDot` enjoy the highest priority
    if (progressDot) {
      if (typeof progressDot === 'function') {
        iconNode = (
          <span className={`${prefixCls}-icon`}>
            {progressDot(iconDot, {
              index: stepNumber - 1,
              status,
              title,
              description,
            })}
          </span>
        );
      } else {
        iconNode = <span className={`${prefixCls}-icon`}>{iconDot}</span>;
      }
    } else if (icon && !isString(icon)) {
      iconNode = <span className={`${prefixCls}-icon`}>{icon}</span>;
    } else if (icons && icons.finish && status === 'finish') {
      iconNode = <span className={`${prefixCls}-icon`}>{icons.finish}</span>;
    } else if (icons && icons.error && status === 'error') {
      iconNode = <span className={`${prefixCls}-icon`}>{icons.error}</span>;
    } else if (icon || status === 'finish' || status === 'error') {
      iconNode = <span className={iconClassName} />;
    } else {
      iconNode = <span className={`${prefixCls}-icon`}>{stepNumber}</span>;
    }

    if (stepIcon) {
      iconNode = stepIcon({
        index: stepNumber - 1,
        status,
        title,
        description,
        node: iconNode,
      });
    }

    return iconNode;
  };

  const mergedStatus = status || 'wait';

  const classString = classNames(
    `${prefixCls}-item`,
    `${prefixCls}-item-${mergedStatus}`,
    className,
    {
      [`${prefixCls}-item-custom`]: icon,
      [`${prefixCls}-item-active`]: active,
      [`${prefixCls}-item-disabled`]: disabled === true,
    },
  );

  const stepItemStyle: React.CSSProperties = { ...style };

  let stepNode: React.ReactNode = (
    <div {...restProps} className={classString} style={stepItemStyle}>
      <div onClick={onClick} {...accessibilityProps} className={`${prefixCls}-item-container`}>
        <div className={`${prefixCls}-item-tail`} />
        <div className={`${prefixCls}-item-icon`}>{renderIconNode()}</div>
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

  if (render) {
    stepNode = (render(stepNode) || null) as React.ReactElement;
  }

  return stepNode;
}
