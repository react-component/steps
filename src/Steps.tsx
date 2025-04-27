/* eslint react/no-did-mount-set-state: 0, react/prop-types: 0 */
import cls from 'classnames';
import React from 'react';
import type { Icons, Status } from './interface';
import type { StepProps } from './Step';
import Step from './Step';

export type SemanticName = 'root';

export type StepItem = {
  /** @deprecated Please use `content` instead. */
  description?: React.ReactNode;
  content?: React.ReactNode;
  disabled?: boolean;
  icon?: React.ReactNode;
  status?: Status;
  subTitle?: React.ReactNode;
  title?: React.ReactNode;
};

export type StepIconRender = (info: {
  index: number;
  status: Status;
  title: React.ReactNode;
  // @deprecated Please use `content` instead.
  description: React.ReactNode;
  content: React.ReactNode;
  node: React.ReactNode;
}) => React.ReactNode;

export type ProgressDotRender = (
  iconDot: React.ReactNode,
  info: {
    index: number;
    status: Status;
    title: React.ReactNode;
    // @deprecated Please use `content` instead.
    description: React.ReactNode;
    content: React.ReactNode;
  },
) => React.ReactNode;

export interface StepsProps {
  // style
  prefixCls?: string;
  style?: React.CSSProperties;
  className?: string;
  classNames?: Partial<Record<SemanticName, string>>;
  styles?: Partial<Record<SemanticName, React.CSSProperties>>;

  // layout
  orientation?: 'horizontal' | 'vertical';
  labelPlacement?: 'horizontal' | 'vertical';
  progressDot?: ProgressDotRender | boolean;

  // data
  status?: Status;
  current?: number;
  initial?: number;
  items?: StepItem[];
  onChange?: (current: number) => void;

  // render
  iconRender?: (
    item: StepItem,
    info: {
      status: Status;
    },
  ) => React.ReactNode;
  itemRender?: (item: StepItem, stepItem: React.ReactElement) => React.ReactNode;
}

export default function Steps(props: StepsProps) {
  const {
    // style
    prefixCls = 'rc-steps',
    style,
    className,
    classNames,
    styles,

    // layout
    orientation = 'horizontal',
    labelPlacement = 'horizontal',
    progressDot,

    // data
    status = 'process',
    current = 0,
    initial = 0,
    onChange,
    items,

    // render
    iconRender,
    itemRender,

    ...restProps
  } = props;

  // ============================= layout =============================
  const [mergedOrientation, mergeLabelPlacement] = React.useMemo(() => {
    const nextOrientation = orientation === 'vertical' ? 'vertical' : 'horizontal';
    const nextLabelPlacement = progressDot ? 'vertical' : labelPlacement;

    return [nextOrientation, nextLabelPlacement] as const;
  }, [orientation, progressDot, labelPlacement]);

  // ============================= styles =============================
  const classString = cls(prefixCls, `${prefixCls}-${mergedOrientation}`, className, {
    [`${prefixCls}-label-${mergeLabelPlacement}`]: mergedOrientation === 'horizontal',
    [`${prefixCls}-dot`]: !!progressDot,
  });

  // ============================== Data ==============================
  const mergedItems = React.useMemo(() => (items || []).filter(Boolean), [items]);

  // ============================= events =============================
  const onStepClick = (next: number) => {
    if (onChange && current !== next) {
      onChange(next);
    }
  };

  // ============================= render =============================
  const renderStep = (item: StepProps, index: number) => {
    const prevItem = mergedItems[index - 1];

    const data: StepProps = { ...item };
    const stepNumber = initial + index;
    // fix tail color
    if (status === 'error' && index === current - 1) {
      data.className = `${prefixCls}-next-error`;
    }

    if (!data.status) {
      if (stepNumber === current) {
        data.status = status;
      } else if (stepNumber < current) {
        data.status = 'finish';
      } else {
        data.status = 'wait';
      }
    }

    if (!data.render && itemRender) {
      data.render = (stepItem) => itemRender(data, stepItem);
    }

    return (
      <Step
        data={data}
        active={stepNumber === current}
        stepNumber={stepNumber + 1}
        stepIndex={stepNumber}
        key={stepNumber}
        prefixCls={prefixCls}
        progressDot={progressDot}
        iconRender={iconRender}
        onStepClick={onChange && onStepClick}
      />
    );
  };

  return (
    <div className={classString} style={style} {...restProps}>
      {mergedItems.map<React.ReactNode>(renderStep)}
    </div>
  );
}
