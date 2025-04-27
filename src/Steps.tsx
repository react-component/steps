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

  onClick?: React.MouseEventHandler<HTMLDivElement>;
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
  rootClassName?: string;

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
    rootClassName,

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
  const classString = cls(
    prefixCls,
    `${prefixCls}-${mergedOrientation}`,
    {
      [`${prefixCls}-label-${mergeLabelPlacement}`]: mergedOrientation === 'horizontal',
      [`${prefixCls}-dot`]: !!progressDot,
    },
    rootClassName,
    className,
    classNames.root,
  );

  // ============================== Data ==============================
  const mergedItems = React.useMemo(() => (items || []).filter(Boolean), [items]);
  const statuses = React.useMemo(
    () =>
      mergedItems.map(({ status: itemStatus }, index) => {
        const stepNumber = initial + index;

        if (!itemStatus) {
          if (stepNumber === current) {
            return status;
          } else if (stepNumber < current) {
            return 'finish';
          }
          return 'wait';
        }

        return itemStatus;
      }),
    [mergedItems, status, current, initial],
  );

  // ============================= events =============================
  const onStepClick = (next: number) => {
    if (onChange && current !== next) {
      onChange(next);
    }
  };

  // ============================= render =============================
  const renderStep = (item: StepItem, index: number) => {
    const stepIndex = initial + index;

    // fix tail color
    // if (status === 'error' && index === current - 1) {
    //   data.className = `${prefixCls}-next-error`;
    // }

    // const { status: currentStatus = status } = item;
    // const { status: prevStatus = currentStatus } = prevItem || {};

    // if (!data.status) {
    //   if (stepNumber === current) {
    //     data.status = status;
    //   } else if (stepNumber < current) {
    //     data.status = 'finish';
    //   } else {
    //     data.status = 'wait';
    //   }
    // }

    const prevStatus = statuses[index - 1];
    const itemStatus = statuses[index];

    // if (!data.render && itemRender) {
    //   data.render = (stepItem) => itemRender(data, stepItem);
    // }

    return (
      <Step
        // Style
        prefixCls={prefixCls}
        classNames={classNames}
        styles={styles}
        // Data
        data={item}
        status={itemStatus}
        prevStatus={prevStatus}
        active={stepIndex === current}
        index={stepIndex}
        // stepNumber={stepNumber + 1}
        // stepIndex={stepNumber}
        // Render
        key={stepIndex}
        progressDot={progressDot}
        iconRender={iconRender}
        onClick={onChange && onStepClick}
      />
    );
  };

  return (
    <div
      className={classString}
      style={{
        ...style,
        ...styles?.root,
      }}
      {...restProps}
    >
      {mergedItems.map<React.ReactNode>(renderStep)}
    </div>
  );
}
