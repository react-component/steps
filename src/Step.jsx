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
    itemWidth: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
    status: PropTypes.string,
    iconPrefix: PropTypes.string,
    icon: PropTypes.node,
    adjustMarginRight: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
    stepNumber: PropTypes.string,
    description: PropTypes.any,
    title: PropTypes.any,
    progressDot: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.func,
    ]),
    tailContent: PropTypes.any,
    finishIcon: PropTypes.node,
    errorIcon: PropTypes.node,
  };
  renderIconNode() {
    const {
      prefixCls, progressDot, stepNumber, status, title, description, icon,
      iconPrefix, finishIcon, errorIcon,
    } = this.props;
    let iconNode;
    const iconClassName = classNames(`${prefixCls}-icon`, `${iconPrefix}icon`, {
      [`${iconPrefix}icon-${icon}`]: icon && isString(icon),
      [`${iconPrefix}icon-check`]: !icon && status === 'finish' && !finishIcon,
      [`${iconPrefix}icon-close`]: !icon && status === 'error' && !errorIcon,
    });
    const iconDot = <span className={`${prefixCls}-icon-dot`}></span>;
    // `progressDot` enjoy the highest priority
    if (progressDot) {
      if (typeof progressDot === 'function') {
        iconNode = (
          <span className={`${prefixCls}-icon`}>
            {progressDot(iconDot, { index: stepNumber - 1, status, title, description })}
          </span>
        );
      } else {
        iconNode = <span className={`${prefixCls}-icon`}>{iconDot}</span>;
      }
    } else if (icon && !isString(icon)) {
      iconNode = <span className={`${prefixCls}-icon`}>{icon}</span>;
    } else if (finishIcon && status === 'finish') {
      iconNode = <span className={`${prefixCls}-icon`}>{finishIcon}</span>;
    } else if (errorIcon && status === 'error') {
      iconNode = <span className={`${prefixCls}-icon`}>{errorIcon}</span>;
    } else if (icon || status === 'finish' || status === 'error') {
      iconNode = <span className={iconClassName} />;
    } else {
      iconNode = <span className={`${prefixCls}-icon`}>{stepNumber}</span>;
    }

    return iconNode;
  }
  render() {
    const {
      className, prefixCls, style, itemWidth,
      status = 'wait', iconPrefix, icon, wrapperStyle,
      adjustMarginRight, stepNumber,
      description, title, progressDot, tailContent,
      finishIcon, errorIcon,
      ...restProps,
    } = this.props;

    const classString = classNames(
      `${prefixCls}-item`,
      `${prefixCls}-item-${status}`,
      className,
      { [`${prefixCls}-item-custom`]: icon },
    );
    const stepItemStyle = { ...style };
    if (itemWidth) {
      stepItemStyle.width = itemWidth;
    }
    if (adjustMarginRight) {
      stepItemStyle.marginRight = adjustMarginRight;
    }
    return (
      <div
        {...restProps}
        className={classString}
        style={stepItemStyle}
      >
        <div className={`${prefixCls}-item-tail`}>
          {tailContent}
        </div>
        <div className={`${prefixCls}-item-icon`}>
          {this.renderIconNode()}
        </div>
        <div className={`${prefixCls}-item-content`}>
          <div className={`${prefixCls}-item-title`}>
            {title}
          </div>
          {description && <div className={`${prefixCls}-item-description`}>{description}</div>}
        </div>
      </div>
    );
  }
}
