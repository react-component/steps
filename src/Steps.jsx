/* eslint react/no-did-mount-set-state: 0 */
import React, { cloneElement, Children } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import debounce from 'lodash.debounce';
import { isFlexSupported } from './utils';

export default class Steps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlexSupported: true,
      lastStepOffsetWidth: 0,
    };
    this.calcStepOffsetWidth = debounce(this.calcStepOffsetWidth, 150);
  }
  componentDidMount() {
    this.calcStepOffsetWidth();
    if (!isFlexSupported()) {
      this.setState({
        isFlexSupported: false,
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
  calcStepOffsetWidth = () => {
    if (isFlexSupported()) {
      return;
    }
    const domNode = ReactDOM.findDOMNode(this);
    if (domNode.children.length > 0) {
      if (this.calcTimeout) {
        clearTimeout(this.calcTimeout);
      }
      this.calcTimeout = setTimeout(() => {
        // +1 for fit edge bug of digit width, like 35.4px
        const lastStepOffsetWidth = (domNode.lastChild.offsetWidth || 0) + 1;
        // Reduce shake bug
        if (this.state.lastStepOffsetWidth === lastStepOffsetWidth ||
            Math.abs(this.state.lastStepOffsetWidth - lastStepOffsetWidth) <= 3) {
          return;
        }
        this.setState({ lastStepOffsetWidth });
      });
    }
  }
  render() {
    const {
      prefixCls, style = {}, className, children, direction,
      labelPlacement, iconPrefix, status, size, current, progressDot,
      ...restProps,
    } = this.props;
    const lastIndex = children.length - 1;
    const adjustedlabelPlacement = !!progressDot ? 'vertical' : labelPlacement;
    const classString = classNames(prefixCls, `${prefixCls}-${direction}`, className, {
      [`${prefixCls}-${size}`]: size,
      [`${prefixCls}-label-${adjustedlabelPlacement}`]: direction === 'horizontal',
      [`${prefixCls}-dot`]: !!progressDot,
    });

    return (
      <div className={classString} style={style} {...restProps}>
        {
          Children.map(children, (child, index) => {
            const childProps = {
              stepNumber: `${index + 1}`,
              prefixCls,
              iconPrefix,
              wrapperStyle: style,
              progressDot,
            };
            if (!this.state.isFlexSupported) {
              childProps.itemWidth = (direction === 'vertical' || index === lastIndex)
                ? null : `${100 / lastIndex}%`;
              childProps.adjustMarginRight = (direction === 'vertical' || index === lastIndex)
                ? null : -Math.round(this.state.lastStepOffsetWidth / lastIndex + 1);
            }
            // fix tail color
            if (status === 'error' && index === current - 1) {
              childProps.className = `${prefixCls}-next-error`;
            }
            if (!child.props.status) {
              if (index === current) {
                childProps.status = status;
              } else if (index < current) {
                childProps.status = 'finish';
              } else {
                childProps.status = 'wait';
              }
            }
            return cloneElement(child, childProps);
          })
        }
      </div>
    );
  }
}

Steps.propTypes = {
  prefixCls: PropTypes.string,
  className: PropTypes.string,
  iconPrefix: PropTypes.string,
  direction: PropTypes.string,
  labelPlacement: PropTypes.string,
  children: PropTypes.any,
  status: PropTypes.string,
  size: PropTypes.string,
  progressDot: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.func,
  ]),
  style: PropTypes.object,
  current: PropTypes.number,
};

Steps.defaultProps = {
  prefixCls: 'rc-steps',
  iconPrefix: 'rc',
  direction: 'horizontal',
  labelPlacement: 'horizontal',
  current: 0,
  status: 'process',
  size: '',
  progressDot: false,
};
