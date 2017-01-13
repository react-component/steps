import React, { PropTypes } from 'react';
import classNames from 'classnames';

function isString(str) {
  return typeof str === 'string';
}

export default class Step extends React.Component {
  render() {
    const {
      className, prefixCls, style, tailWidth, itemWidth,
      status = 'wait', iconPrefix, icon, wrapperStyle,
      adjustMarginRight, stepLast, stepNumber,
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
            {progressDot(iconDot, stepNumber - 1)}
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
      [`${prefixCls}-item-last`]: stepLast,
      [`${prefixCls}-status-${status}`]: true,
      [`${prefixCls}-custom`]: icon,
      [className]: !!className,
    });
    return (
      <div {...restProps}
        className={classString}
        style={{ width: itemWidth, marginRight: adjustMarginRight, ...style }}
      >
        {
          stepLast ? ''
          : <div
            ref="tail"
            style={ tailWidth ? { width: tailWidth } : {}}
            className={`${prefixCls}-tail`}
          >
            <i />
          </div>
        }
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
  tailWidth: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
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
  stepLast: PropTypes.bool,
  stepNumber: PropTypes.string,
  description: PropTypes.any,
  title: PropTypes.any,
  progressDot: PropTypes.any,
};

module.exports = Step;
