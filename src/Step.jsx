import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function isString(str) {
  return typeof str === 'string';
}

export default class Step extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    prefixCls: PropTypes.string,
    style: PropTypes.object,
    wrapperStyle: PropTypes.object,
    itemWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    active: PropTypes.bool,
    disabled: PropTypes.bool,
    status: PropTypes.string,
    iconPrefix: PropTypes.string,
    icon: PropTypes.node,
    adjustMarginRight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    stepNumber: PropTypes.string,
    stepIndex: PropTypes.number,
    description: PropTypes.any,
    title: PropTypes.any,
    subTitle: PropTypes.any,
    progressDot: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
    tailContent: PropTypes.any,
    icons: PropTypes.shape({
      finish: PropTypes.node,
      error: PropTypes.node,
    }),
    onClick: PropTypes.func,
    onStepClick: PropTypes.func,
  };

  onClick = (...args) => {
    const { onClick, onStepClick, stepIndex } = this.props;

    if (onClick) {
      onClick(...args);
    }

    onStepClick(stepIndex);
  };

  renderIconNode() {
    const {
      prefixCls,
      progressDot,
      stepNumber,
      status,
      title,
      description,
      icon,
      iconPrefix,
      icons,
    } = this.props;
    let iconNode;
    const iconClassName = classNames(`${prefixCls}-icon`, `${iconPrefix}icon`, {
      [`${iconPrefix}icon-${icon}`]: icon && isString(icon),
      [`${iconPrefix}icon-check`]: !icon && status === 'finish' && (icons && !icons.finish),
      [`${iconPrefix}icon-close`]: !icon && status === 'error' && (icons && !icons.error),
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

    return iconNode;
  }

  render() {
    const {
      className,
      prefixCls,
      style,
      itemWidth,
      active,
      status = 'wait',
      iconPrefix,
      icon,
      wrapperStyle,
      adjustMarginRight,
      stepNumber,
      disabled,
      description,
      title,
      subTitle,
      progressDot,
      tailContent,
      icons,
      stepIndex,
      onStepClick,
      onClick,
      ...restProps
    } = this.props;

    const classString = classNames(`${prefixCls}-item`, `${prefixCls}-item-${status}`, className, {
      [`${prefixCls}-item-custom`]: icon,
      [`${prefixCls}-item-active`]: active,
      [`${prefixCls}-item-disabled`]: disabled === true,
    });
    const stepItemStyle = { ...style };
    if (itemWidth) {
      stepItemStyle.width = itemWidth;
    }
    if (adjustMarginRight) {
      stepItemStyle.marginRight = adjustMarginRight;
    }

    const accessibilityProps = {};
    if (onStepClick && !disabled) {
      accessibilityProps.role = 'button';
      accessibilityProps.tabIndex = 0;
      accessibilityProps.onClick = this.onClick;
    }

    return (
      <div {...restProps} className={classString} style={stepItemStyle}>
        <div onClick={onClick} {...accessibilityProps} className={`${prefixCls}-item-container`}>
          <div className={`${prefixCls}-item-tail`}>{tailContent}</div>
          <div className={`${prefixCls}-item-icon`}>{this.renderIconNode()}</div>
          <div className={`${prefixCls}-item-content`}>
            <div className={`${prefixCls}-item-title`}>
              {title}
              {subTitle && (
                <div title={subTitle} className={`${prefixCls}-item-subtitle`}>
                  {subTitle}
                </div>
              )}
            </div>
            {description && <div className={`${prefixCls}-item-description`}>{description}</div>}
          </div>
        </div>
      </div>
    );
  }
}
