/* eslint react/prop-types: 0 */
import * as React from 'react';
import { clsx } from 'clsx';
import KeyCode from '@rc-component/util/lib/KeyCode';
import type { Status, StepItem, StepsProps } from './Steps';
import Rail from './Rail';
import { UnstableContext } from './UnstableContext';
import StepIcon, { StepIconSemanticContext } from './StepIcon';
import { StepsContext } from './Context';

function hasContent<T>(value: T) {
  return value !== undefined && value !== null;
}

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

  // render
  iconRender?: StepsProps['iconRender'];
  icon?: React.ReactNode;
  itemRender?: StepsProps['itemRender'];
  itemWrapperRender?: StepsProps['itemWrapperRender'];

  // Event
  onClick: (index: number) => void;
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

  // ======================== Contexts ========================
  const { railFollowPrevStatus } = React.useContext(UnstableContext);
  const { ItemComponent } = React.useContext(StepsContext);

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
    classNames: itemClassNames = {},
    styles: itemStyles = {},

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
    onClick?: React.MouseEventHandler<HTMLLIElement>;
    onKeyDown?: React.KeyboardEventHandler<HTMLLIElement>;
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

  const hasTitle = hasContent(title);
  const hasSubTitle = hasContent(subTitle);

  const classString = clsx(
    itemCls,
    `${itemCls}-${mergedStatus}`,
    {
      [`${itemCls}-custom`]: icon,
      [`${itemCls}-active`]: active,
      [`${itemCls}-disabled`]: disabled === true,
      [`${itemCls}-empty-header`]: !hasTitle && !hasSubTitle,
    },
    className,
    classNames.item,
    itemClassNames.root,
  );

  let iconNode = <StepIcon />;
  if (iconRender) {
    iconNode = iconRender(iconNode, {
      ...renderInfo,
      components: {
        Icon: StepIcon,
      },
    }) as React.ReactElement;
  }

  const wrapperNode = (
    <div
      className={clsx(`${itemCls}-wrapper`, classNames.itemWrapper, itemClassNames.wrapper)}
      style={{ ...styles.itemWrapper, ...itemStyles.wrapper }}
    >
      {/* Icon */}
      <StepIconSemanticContext.Provider
        value={{
          className: itemClassNames.icon,
          style: itemStyles.icon,
        }}
      >
        {iconNode}
      </StepIconSemanticContext.Provider>

      <div
        className={clsx(`${itemCls}-section`, classNames.itemSection, itemClassNames.section)}
        style={{ ...styles.itemSection, ...itemStyles.section }}
      >
        <div
          className={clsx(`${itemCls}-header`, classNames.itemHeader, itemClassNames.header)}
          style={{ ...styles.itemHeader, ...itemStyles.header }}
        >
          {hasTitle && (
            <div
              className={clsx(`${itemCls}-title`, classNames.itemTitle, itemClassNames.title)}
              style={{ ...styles.itemTitle, ...itemStyles.title }}
            >
              {title}
            </div>
          )}
          {hasSubTitle && (
            <div
              title={typeof subTitle === 'string' ? subTitle : undefined}
              className={clsx(
                `${itemCls}-subtitle`,
                classNames.itemSubtitle,
                itemClassNames.subtitle,
              )}
              style={{ ...styles.itemSubtitle, ...itemStyles.subtitle }}
            >
              {subTitle}
            </div>
          )}

          {!last && (
            <Rail
              prefixCls={itemCls}
              className={clsx(classNames.itemRail, itemClassNames.rail)}
              style={{ ...styles.itemRail, ...itemStyles.rail }}
              status={railFollowPrevStatus ? status : nextStatus}
            />
          )}
        </div>
        {hasContent(mergedContent) && (
          <div
            className={clsx(`${itemCls}-content`, classNames.itemContent, itemClassNames.content)}
            style={{ ...styles.itemContent, ...itemStyles.content }}
          >
            {mergedContent}
          </div>
        )}
      </div>
    </div>
  );

  let stepNode: React.ReactNode = (
    <ItemComponent
      {...restItemProps}
      {...accessibilityProps}
      className={classString}
      style={{
        ...styles.item,
        ...itemStyles.root,
        ...style,
      }}
    >
      {itemWrapperRender ? itemWrapperRender(wrapperNode) : wrapperNode}
    </ItemComponent>
  );

  if (itemRender) {
    stepNode = (itemRender(stepNode, renderInfo) || null) as React.ReactElement;
  }

  return stepNode;
}
