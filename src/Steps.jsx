/* eslint react/no-did-mount-set-state: 0 */
import React, { cloneElement, Children, Component } from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
import classNames from 'classnames';
import debounce from 'lodash/debounce';
import { isFlexSupported } from './utils';

export default class Steps extends Component {
  static propTypes = {
    type: PropTypes.string,
    prefixCls: PropTypes.string,
    className: PropTypes.string,
    iconPrefix: PropTypes.string,
    direction: PropTypes.string,
    labelPlacement: PropTypes.string,
    children: PropTypes.any,
    status: PropTypes.string,
    size: PropTypes.string,
    progressDot: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
    style: PropTypes.object,
    initial: PropTypes.number,
    current: PropTypes.number,
    icons: PropTypes.shape({
      finish: PropTypes.node,
      error: PropTypes.node,
    }),
    onChange: PropTypes.func,
  };

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

  constructor(props) {
    super(props);
    this.state = {
      flexSupported: true,
      lastStepOffsetWidth: 0,
    };
    this.calcStepOffsetWidth = debounce(this.calcStepOffsetWidth, 150);
  }

  componentDidMount() {
    this.calcStepOffsetWidth();
    if (!isFlexSupported()) {
      this.setState({
        flexSupported: false,
      });
    }
  }

  componentDidUpdate() {
    this.calcStepOffsetWidth();
  }

  componentWillUnmount() {
    if (this.calcTimeout) {
      clearTimeout(this.calcTimeout);
    }
    if (this.calcStepOffsetWidth && this.calcStepOffsetWidth.cancel) {
      this.calcStepOffsetWidth.cancel();
    }
  }

  onStepClick = next => {
    const { onChange, current } = this.props;
    if (onChange && current !== next) {
      onChange(next);
    }
  };

  calcStepOffsetWidth = () => {
    if (isFlexSupported()) {
      return;
    }
    const { lastStepOffsetWidth } = this.state;
    // Just for IE9
    const domNode = findDOMNode(this);
    if (domNode.children.length > 0) {
      if (this.calcTimeout) {
        clearTimeout(this.calcTimeout);
      }
      this.calcTimeout = setTimeout(() => {
        // +1 for fit edge bug of digit width, like 35.4px
        const offsetWidth = (domNode.lastChild.offsetWidth || 0) + 1;
        // Reduce shake bug
        if (
          lastStepOffsetWidth === offsetWidth ||
          Math.abs(lastStepOffsetWidth - offsetWidth) <= 3
        ) {
          return;
        }
        this.setState({ lastStepOffsetWidth: offsetWidth });
      });
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
    const { lastStepOffsetWidth, flexSupported } = this.state;
    const filteredChildren = React.Children.toArray(children).filter(c => !!c);
    const lastIndex = filteredChildren.length - 1;
    const adjustedlabelPlacement = progressDot ? 'vertical' : labelPlacement;
    const classString = classNames(prefixCls, `${prefixCls}-${direction}`, className, {
      [`${prefixCls}-${size}`]: size,
      [`${prefixCls}-label-${adjustedlabelPlacement}`]: direction === 'horizontal',
      [`${prefixCls}-dot`]: !!progressDot,
      [`${prefixCls}-navigation`]: isNav,
      [`${prefixCls}-flex-not-supported`]: !flexSupported,
    });

    return (
      <div className={classString} style={style} {...restProps}>
        {Children.map(filteredChildren, (child, index) => {
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
          if (!flexSupported && direction !== 'vertical') {
            if (isNav) {
              childProps.itemWidth = `${100 / (lastIndex + 1)}%`;
              childProps.adjustMarginRight = 0;
            } else if (index !== lastIndex) {
              childProps.itemWidth = `${100 / lastIndex}%`;
              childProps.adjustMarginRight = -Math.round(lastStepOffsetWidth / lastIndex + 1);
            }
          }
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
