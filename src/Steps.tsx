/* eslint react/no-did-mount-set-state: 0, react/prop-types: 0 */
import React, { cloneElement } from 'react';
import toArray from 'rc-util/lib/Children/toArray';
import classNames from 'classnames';
import { Status, Icons } from './interface';
import Step from './Step';

export interface StepsProps {
  prefixCls?: string;
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
  direction?: 'horizontal' | 'vertical';
  type?: 'default' | 'navigation';
  labelPlacement?: 'horizontal' | 'vertical';
  iconPrefix?: string;
  status?: Status;
  size?: 'default' | 'small';
  current?: number;
  progressDot?: boolean;
  initial?: number;
  icons?: Icons;
  onChange?: (current: number) => void;
}

export default class Steps extends React.Component<StepsProps> {
  static Step = Step;

  static defaultProps = {
    type: 'default',
    prefixCls: 'rc-steps',
    iconPrefix: 'rc',
    direction: 'horizontal',
    labelPlacement: 'horizontal',
    initial: 0,
    current: 0,
    status: 'process',
    size: '',
    progressDot: false,
  };

  onStepClick = (next: number) => {
    const { onChange, current } = this.props;
    if (onChange && current !== next) {
      onChange(next);
    }
  };

  render() {
    const {
      prefixCls,
      style = {},
      className,
      children,
      direction,
      type,
      labelPlacement,
      iconPrefix,
      status,
      size,
      current,
      progressDot,
      initial,
      icons,
      onChange,
      ...restProps
    } = this.props;
    const isNav = type === 'navigation';
    const filteredChildren = React.Children.toArray(children).filter(c => !!c);
    const adjustedLabelPlacement = progressDot ? 'vertical' : labelPlacement;
    const classString = classNames(prefixCls, `${prefixCls}-${direction}`, className, {
      [`${prefixCls}-${size}`]: size,
      [`${prefixCls}-label-${adjustedLabelPlacement}`]: direction === 'horizontal',
      [`${prefixCls}-dot`]: !!progressDot,
      [`${prefixCls}-navigation`]: isNav,
    });

    return (
      <div className={classString} style={style} {...restProps}>
        {toArray(filteredChildren).map((child, index) => {
          if (!child) {
            return null;
          }
          const stepNumber = initial + index;
          const childProps = {
            stepNumber: `${stepNumber + 1}`,
            stepIndex: stepNumber,
            prefixCls,
            iconPrefix,
            wrapperStyle: style,
            progressDot,
            icons,
            onStepClick: onChange && this.onStepClick,
            ...child.props,
          };
          // fix tail color
          if (status === 'error' && index === current - 1) {
            childProps.className = `${prefixCls}-next-error`;
          }
          if (!child.props.status) {
            if (stepNumber === current) {
              childProps.status = status;
            } else if (stepNumber < current) {
              childProps.status = 'finish';
            } else {
              childProps.status = 'wait';
            }
          }
          childProps.active = stepNumber === current;
          return cloneElement(child, childProps);
        })}
      </div>
    );
  }
}
