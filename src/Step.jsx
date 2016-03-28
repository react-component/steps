import React from 'react';
import classNames from 'classnames';

const Step = React.createClass({
  propTypes: {
    className: React.PropTypes.string,
    prefixCls: React.PropTypes.string,
    style: React.PropTypes.object,
    tailWidth: React.PropTypes.oneOfType([
      React.PropTypes.number,
      React.PropTypes.string,
    ]),
    status: React.PropTypes.string,
    iconPrefix: React.PropTypes.string,
    icon: React.PropTypes.string,
    maxDescriptionWidth: React.PropTypes.oneOfType([
      React.PropTypes.number,
      React.PropTypes.string,
    ]),
    stepLast: React.PropTypes.bool,
    stepNumber: React.PropTypes.string,
    description: React.PropTypes.any,
    title: React.PropTypes.any,
  },
  render() {
    const {
      className, prefixCls, style, tailWidth,
      status = 'wait', iconPrefix, icon,
      maxDescriptionWidth, stepLast, stepNumber,
      description, title, ...restProps } = this.props;
    const iconClassName = classNames({
      [`${prefixCls}-icon`]: true,
      [`${iconPrefix}icon`]: true,
      [`${iconPrefix}icon-${icon || 'check'}`]: true,
    });
    const iconNode = (icon || status === 'finish')
      ? <span className={iconClassName} />
      : <span className={`${prefixCls}-icon`}>{stepNumber}</span>;
    const classString = classNames({
      [className]: !!className,
      [`${prefixCls}-item`]: true,
      [`${prefixCls}-item-last`]: stepLast,
      [`${prefixCls}-status-${status}`]: true,
      [`${prefixCls}-custom`]: icon,
    });
    return (
      <div {...restProps} className={classString} style={{ width: tailWidth }}>
        {stepLast ? '' : <div className={`${prefixCls}-tail`}><i /></div>}
        <div className={`${prefixCls}-head`}>
          <div className={`${prefixCls}-head-inner`}>{iconNode}</div>
        </div>
        <div className={`${prefixCls}-main`} style={{ maxWidth: maxDescriptionWidth }}>
          <div className={`${prefixCls}-title`}>{title}</div>
          {description ? <div className={`${prefixCls}-description`}>{description}</div> : ''}
        </div>
      </div>
    );
  },
});

module.exports = Step;
