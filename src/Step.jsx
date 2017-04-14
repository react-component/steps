import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function isString(str) {
  return typeof str === 'string';
}

export default class Step extends React.Component {
  render() {
    const {
      className, prefixCls, style, itemWidth,
      status = 'wait', iconPrefix, icon, wrapperStyle,
      adjustMarginRight, stepNumber,
      description, title, progressDot, ...restProps } = this.props;
    const iconClassName = classNames({
      [`${prefixCls}-icon`]: true,
      [`${iconPrefix}icon`]: true,
      [`${iconPrefix}icon-${icon}`]: icon && isString(icon),
      [`${iconPrefix}icon-check`]: !icon && status === 'finish',
      [`${iconPrefix}icon-cross`]: !icon && status === 'error',
    });

    let iconNode;
    const iconDot = <span className={`${prefixCls}-icon-dot`}></span>;
    // `progressDot` enjoy the highest priority
    if (!!progressDot) {
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
    } else if (icon || status === 'finish' || status === 'error') {
      iconNode = <span className={iconClassName} />;
    } else {
      iconNode = <span className={`${prefixCls}-icon`}>{stepNumber}</span>;
    }
    const classString = classNames({
      [`${prefixCls}-item`]: true,
      [`${prefixCls}-status-${status}`]: true,
      [`${prefixCls}-custom`]: icon,
      [className]: !!className,
    });
    return (
      <div {...restProps}
        className={classString}
        style={{ width: itemWidth, marginRight: adjustMarginRight, ...style }}
      >
        <div
          ref="tail"
          className={`${prefixCls}-tail`}
          style={{ paddingRight: -adjustMarginRight }}
        >
          <i />
        </div>
        <div className={`${prefixCls}-step`}>
          <div
            className={`${prefixCls}-head`}
            style={{ background: wrapperStyle.background || wrapperStyle.backgroundColor }}
          >
            <div className={`${prefixCls}-head-inner`}>{iconNode}</div>
          </div>
          <div ref="main" className={`${prefixCls}-main`}>
            <div
              className={`${prefixCls}-title`}
              style={{ background: wrapperStyle.background || wrapperStyle.backgroundColor }}
            >{title}</div>
            {description ? <div className={`${prefixCls}-description`}>{description}</div> : ''}
          </div>
        </div>
      </div>
    );
  }
}

Step.propTypes = {
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
};
