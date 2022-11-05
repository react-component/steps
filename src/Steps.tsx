/* eslint react/no-did-mount-set-state: 0, react/prop-types: 0 */
import classNames from 'classnames';
import React from 'react';
import type { Icons, Status } from './interface';
import type { StepProps } from './Step';
import Step from './Step';

export type StepIconRender = (info: {
  index: number;
  status: Status;
  title: React.ReactNode;
  description: React.ReactNode;
  node: React.ReactNode;
}) => React.ReactNode;

export type ProgressDotRender = (
  iconDot,
  info: {
    index: number;
    status: Status;
    title: React.ReactNode;
    description: React.ReactNode;
  },
) => React.ReactNode;

export interface StepsProps {
  prefixCls?: string;
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
  direction?: 'horizontal' | 'vertical';
  type?: 'default' | 'navigation' | 'inline';
  labelPlacement?: 'horizontal' | 'vertical';
  iconPrefix?: string;
  status?: Status;
  size?: 'default' | 'small';
  current?: number;
  progressDot?: ProgressDotRender | boolean;
  stepIcon?: StepIconRender;
  initial?: number;
  icons?: Icons;
  items?: StepProps[];
  itemRender?: (item: StepProps, stepItem: React.ReactNode) => React.ReactNode;
  onChange?: (current: number) => void;
}

function Steps(props: StepsProps) {
  const {
    prefixCls = 'rc-steps',
    style = {},
    className,
    children,
    direction = 'horizontal',
    type = 'default',
    labelPlacement = 'horizontal',
    iconPrefix = 'rc',
    status = 'process',
    size,
    current = 0,
    progressDot = false,
    stepIcon,
    initial = 0,
    icons,
    onChange,
    itemRender,
    items = [],
    ...restProps
  } = props;

  const isNav = type === 'navigation';
  const isInline = type === 'inline';

  // inline type requires fixed progressDot direction size.
  const mergedProgressDot = isInline || progressDot;
  const mergedDirection = isInline ? 'horizontal' : direction;
  const mergedSize = isInline ? undefined : size;

  const adjustedLabelPlacement = mergedProgressDot ? 'vertical' : labelPlacement;
  const classString = classNames(prefixCls, `${prefixCls}-${mergedDirection}`, className, {
    [`${prefixCls}-${mergedSize}`]: mergedSize,
    [`${prefixCls}-label-${adjustedLabelPlacement}`]: mergedDirection === 'horizontal',
    [`${prefixCls}-dot`]: !!mergedProgressDot,
    [`${prefixCls}-navigation`]: isNav,
    [`${prefixCls}-inline`]: isInline,
  });

  const onStepClick = (next: number) => {
    if (onChange && current !== next) {
      onChange(next);
    }
  };

  const renderStep = (item: StepProps, index: number) => {
    const mergedItem = { ...item };
    const stepNumber = initial + index;
    // fix tail color
    if (status === 'error' && index === current - 1) {
      mergedItem.className = `${prefixCls}-next-error`;
    }

    if (!mergedItem.status) {
      if (stepNumber === current) {
        mergedItem.status = status;
      } else if (stepNumber < current) {
        mergedItem.status = 'finish';
      } else {
        mergedItem.status = 'wait';
      }
    }

    if (isInline) {
      mergedItem.icon = undefined;
      mergedItem.subTitle = undefined;
    }

    if (!mergedItem.render && itemRender) {
      mergedItem.render = (stepItem) => itemRender(mergedItem, stepItem);
    }

    return (
      <Step
        {...mergedItem}
        active={stepNumber === current}
        stepNumber={stepNumber + 1}
        stepIndex={stepNumber}
        key={stepNumber}
        prefixCls={prefixCls}
        iconPrefix={iconPrefix}
        wrapperStyle={style}
        progressDot={mergedProgressDot}
        stepIcon={stepIcon}
        icons={icons}
        onStepClick={onChange && onStepClick}
      />
    );
  };

  return (
    <div className={classString} style={style} {...restProps}>
      {items.filter((item) => item).map(renderStep)}
    </div>
  );
}

Steps.Step = Step;

export default Steps;
