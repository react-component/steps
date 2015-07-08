'use strict';

var React = require('react');


var Steps = React.createClass({
  _previousStepsWidth: 0,
  _itemsWidth: [],
  getInitialState() {
    return {
      init: false,
      tailWidth: 0
    };
  },
  getDefaultProps() {
    return {
      prefixCls: 'rc-steps',
      iconPrefix: 'rc',
      maxDescriptionWidth: 120
    };
  },
  componentDidMount() {
    var $dom = React.findDOMNode(this);
    var len = $dom.children.length - 1;
    var i;
    this._itemsWidth = new Array(len + 1);

    for (i = 0; i <= len - 1; i++) {
      var $item = $dom.children[i].children;
      this._itemsWidth[i] = $item[0].offsetWidth + $item[1].children[0].offsetWidth;
    }
    this._itemsWidth[i] = $dom.children[len].offsetWidth;
    this._previousStepsWidth = React.findDOMNode(this).offsetWidth;
    this._update();

    /*
     * 下面的代码是为了兼容window系统下滚动条出现后会占用宽度的问题。
     * componentDidMount时滚动条还不一定出现了，这时候获取的宽度可能不是最终宽度。
     * 对于滚动条不占用宽度的浏览器，下面的代码也不二次render，_resize里面会判断要不要更新。
     */
    var me = this;
    setTimeout(function() {
      me._resize();
    });

    if (window.attachEvent) {
      window.attachEvent('onresize', this._resize);
    } else {
      window.addEventListener('resize', this._resize);
    }
  },
  componentWillUnmount() {
    if (window.attachEvent) {
      window.detachEvent('onresize', this._resize);
    } else {
      window.removeEventListener('resize', this._resize);
    }
  },
  _resize() {
    var w = React.findDOMNode(this).offsetWidth;
    if (this._previousStepsWidth === w) {
      return;
    }
    this._previousStepsWidth = w;
    this._update();
  },
  _update() {
    var len = this.props.children.length - 1;
    var tw = 0;
    this._itemsWidth.forEach(function(w) {
      tw += w;
    });
    var dw = Math.round((this._previousStepsWidth - tw) / len) - 1;
    if (dw <= 0) {
      return;
    }
    this.setState({
      init: true,
      tailWidth: dw
    });
  },
  render() {
    var props = this.props;
    var prefixCls = props.prefixCls;
    var children = props.children;
    var maxDescriptionWidth = props.maxDescriptionWidth;
    var iconPrefix = props.iconPrefix;
    var len = children.length - 1;
    var iws = this._itemsWidth;
    return (
      <div className={prefixCls + (props.size === 'small' ? ' ' + prefixCls + '-small' : '')}>
        {React.Children.map(children, function(ele, idx) {
          var np = {
            stepNumber: (idx + 1).toString(),
            stepLast: idx === len,
            tailWidth: iws.length === 0 || idx === len ? 'auto' : iws[idx] + this.state.tailWidth,
            prefixCls: prefixCls,
            iconPrefix: iconPrefix,
            maxDescriptionWidth: maxDescriptionWidth
          };
          return React.cloneElement(ele, np);
        }, this)}
      </div>
    );
  }
});

module.exports = Steps;
