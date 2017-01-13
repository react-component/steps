import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

export default class Steps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lastStepOffsetWidth: 0,
      firstStepOffsetWidth: 0,
    };
  }
  componentDidMount() {
    this.calcStepOffsetWidth();
  }
  componentDidUpdate() {
    this.calcStepOffsetWidth();
  }
  componentWillUnmount() {
    if (this.calcTimeout) {
      clearTimeout(this.calcTimeout);
    }
  }
  calcStepOffsetWidth = () => {
    const domNode = ReactDOM.findDOMNode(this);
    if (domNode.children.length > 0) {
      if (this.calcTimeout) {
        clearTimeout(this.calcTimeout);
      }
      this.calcTimeout = setTimeout(() => {
        // +1 for fit edge bug of digit width, like 35.4px
        const lastStepOffsetWidth = (domNode.lastChild.offsetWidth || 0) + 1;
        const firstStepOffsetWidth = (domNode.firstChild.offsetWidth || 0) + 1;
        if (this.state.lastStepOffsetWidth === lastStepOffsetWidth &&
          this.state.firstStepOffsetWidth === firstStepOffsetWidth) {
          return;
        }
        this.setState({ lastStepOffsetWidth, firstStepOffsetWidth });
      });
    }
  }
  render() {
    const props = this.props;
    const { prefixCls, style = {}, className, children, direction,
            labelPlacement, iconPrefix, status, size, current, progressDot, ...restProps } = props;
    const lastIndex = children.length - 1;
    const reLayouted = this.state.lastStepOffsetWidth > 0;
    const adjustedlabelPlacement = !!progressDot ? 'vertical' : labelPlacement;
    const classString = classNames({
      [prefixCls]: true,
      [`${prefixCls}-${size}`]: size,
      [`${prefixCls}-${direction}`]: true,
      [`${prefixCls}-label-${adjustedlabelPlacement}`]: direction === 'horizontal',
      [`${prefixCls}-hidden`]: !reLayouted,
      [`${prefixCls}-dot`]: !!progressDot,
      [className]: className,
    });

    return (
      <div className={classString} style={style} {...restProps}>
        {
          React.Children.map(children, (ele, idx) => {
            const itemWidth = (direction === 'vertical' || idx === lastIndex || !reLayouted)
              ? null : `${100 / lastIndex}%`;
            const adjustMarginRight = (direction === 'vertical' || idx === lastIndex)
              ? null : -Math.round(this.state.lastStepOffsetWidth / lastIndex + 1);
            const tailWidth = direction === 'vertical' ? ''
              : (this.state.firstStepOffsetWidth +
                Math.round(this.state.lastStepOffsetWidth / 2 + 1) -
                Math.round(this.state.lastStepOffsetWidth / lastIndex + 1));
            const np = {
              stepNumber: (idx + 1).toString(),
              stepLast: idx === lastIndex,
              itemWidth,
              tailWidth,
              adjustMarginRight,
              prefixCls,
              iconPrefix,
              wrapperStyle: style,
              progressDot,
            };

            // fix tail color
            if (status === 'error' && idx === current - 1) {
              np.className = `${props.prefixCls}-next-error`;
            }

            if (!ele.props.status) {
              if (idx === current) {
                np.status = status;
              } else if (idx < current) {
                np.status = 'finish';
              } else {
                np.status = 'wait';
              }
            }
            return React.cloneElement(ele, np);
          }, this)
        }
      </div>
    );
  }
}

Steps.propTypes = {
  prefixCls: PropTypes.string,
  iconPrefix: PropTypes.string,
  direction: PropTypes.string,
  labelPlacement: PropTypes.string,
  children: PropTypes.any,
  status: PropTypes.string,
  size: PropTypes.string,
  progressDot: PropTypes.any,
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
