/* eslint react/no-did-mount-set-state: 0, react/prop-types: 0 */
import { clsx } from 'clsx';
import React from 'react';
import Step from './Step';
import { StepsContext, type StepsContextProps } from './Context';
import type StepIcon from './StepIcon';

export type Status = 'error' | 'process' | 'finish' | 'wait';

const EmptyObject = {};

export type SemanticName =
  | 'root'
  | 'item'
  | 'itemWrapper'
  | 'itemHeader'
  | 'itemTitle'
  | 'itemSubtitle'
  | 'itemSection'
  | 'itemContent'
  | 'itemIcon'
  | 'itemRail';

export type ItemSemanticName =
  | 'root'
  | 'wrapper'
  | 'header'
  | 'title'
  | 'subtitle'
  | 'section'
  | 'content'
  | 'icon'
  | 'rail';

export type ComponentType = React.ComponentType<any> | string;

export type StepItem = {
  /** @deprecated Please use `content` instead. */
  description?: React.ReactNode;
  content?: React.ReactNode;
  disabled?: boolean;
  icon?: React.ReactNode;
  status?: Status;
  subTitle?: React.ReactNode;
  title?: React.ReactNode;
  classNames?: Partial<Record<ItemSemanticName, string>>;
  styles?: Partial<Record<ItemSemanticName, React.CSSProperties>>;
} & Pick<React.HtmlHTMLAttributes<HTMLLIElement>, 'onClick' | 'className' | 'style'>;

export type StepIconRender = (info: {
  index: number;
  status: Status;
  title: React.ReactNode;
  // @deprecated Please use `content` instead.
  description: React.ReactNode;
  content: React.ReactNode;
  node: React.ReactNode;
}) => React.ReactNode;

export type RenderInfo = {
  index: number;
  active: boolean;
  item: StepItem;
};

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
  titlePlacement?: 'horizontal' | 'vertical';

  // a11y
  /** Internal usage of antd. Do not deps on this. */
  components?: {
    root?: ComponentType;
    item?: ComponentType;
  };

  // data
  status?: Status;
  current?: number;
  initial?: number;
  items?: StepItem[];
  onChange?: (current: number) => void;

  // render
  iconRender?: (
    originNode: React.ReactElement,
    info: RenderInfo & {
      components: {
        Icon: typeof StepIcon;
      };
    },
  ) => React.ReactNode;
  itemRender?: (originNode: React.ReactElement, info: RenderInfo) => React.ReactNode;
  itemWrapperRender?: (originNode: React.ReactElement) => React.ReactNode;
}

export default function Steps(props: StepsProps) {
  const {
    // style
    prefixCls = 'rc-steps',
    style,
    className,
    classNames = EmptyObject as NonNullable<StepsProps['classNames']>,
    styles = EmptyObject as NonNullable<StepsProps['styles']>,
    rootClassName,

    // layout
    orientation,
    titlePlacement,
    components,

    // data
    status = 'process',
    current = 0,
    initial = 0,
    onChange,
    items,

    // render
    iconRender,
    itemRender,
    itemWrapperRender,

    ...restProps
  } = props;

  // ============================= layout =============================
  const isVertical = orientation === 'vertical';
  const mergedOrientation = isVertical ? 'vertical' : 'horizontal';
  const mergeTitlePlacement =
    !isVertical && titlePlacement === 'vertical' ? 'vertical' : 'horizontal';

  // ============================= styles =============================
  const classString = clsx(
    prefixCls,
    `${prefixCls}-${mergedOrientation}`,
    `${prefixCls}-title-${mergeTitlePlacement}`,
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

  // =========================== components ===========================
  const { root: RootComponent = 'div', item: ItemComponent = 'div' } = components || {};

  // ============================ contexts ============================
  const stepIconContext = React.useMemo<StepsContextProps>(
    () => ({
      prefixCls,
      classNames,
      styles,
      ItemComponent,
    }),
    [prefixCls, classNames, styles, ItemComponent],
  );

  // ============================= render =============================
  const renderStep = (item: StepItem, index: number) => {
    const stepIndex = initial + index;

    const itemStatus = statuses[index];
    const nextStatus = statuses[index + 1];

    const data = {
      ...item,
      status: itemStatus,
    };

    return (
      <Step
        key={stepIndex}
        // Style
        prefixCls={prefixCls}
        classNames={classNames}
        styles={styles}
        // Data
        data={data}
        nextStatus={nextStatus}
        active={stepIndex === current}
        index={stepIndex}
        last={mergedItems.length - 1 === index}
        // Render
        iconRender={iconRender}
        itemRender={itemRender}
        itemWrapperRender={itemWrapperRender}
        onClick={onChange && onStepClick}
      />
    );
  };

  return (
    <RootComponent
      className={classString}
      style={{
        ...style,
        ...styles?.root,
      }}
      {...restProps}
    >
      <StepsContext.Provider value={stepIconContext}>
        {mergedItems.map<React.ReactNode>(renderStep)}
      </StepsContext.Provider>
    </RootComponent>
  );
}
