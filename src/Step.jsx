import React, { PropTypes } from 'react';
import classNames from 'classnames';

function Step(props) {
  const {
    className, prefixCls, style, tailWidth,
    status = 'wait', iconPrefix, icon,
    maxDescriptionWidth, stepLast, stepNumber,
    description, title, ...restProps } = props;
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
}

Step.propTypes = {
  className: PropTypes.string,
  prefixCls: PropTypes.string,
  style: PropTypes.object,
  tailWidth: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  status: PropTypes.string,
  iconPrefix: PropTypes.string,
  icon: PropTypes.string,
  maxDescriptionWidth: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  stepLast: PropTypes.bool,
  stepNumber: PropTypes.string,
  description: PropTypes.any,
  title: PropTypes.any,
};

module.exports = Step;
