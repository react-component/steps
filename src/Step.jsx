'use strict';

var React = require('react');

var Step = React.createClass({
  render() {
    var props = this.props;
    var prefixCls = props.prefixCls;
    var icon = props.icon ? props.icon
        : (props.status !== 'finish' ? <span className={prefixCls + '-steps-icon'}>{props.stepNumber}</span> : <span className={prefixCls + '-steps-icon ' + prefixCls + 'icon ' + prefixCls + 'icon-check'}></span>);
    return (<div className={prefixCls + '-steps-item ' + prefixCls + '-steps-status-' + props.status + (props.icon ? ' ' + prefixCls + '-steps-custom' : '') }>
      <div className={prefixCls + '-steps-head'}>
        {icon}
      </div>
      <div className={prefixCls + '-steps-main'}>
        <div className={prefixCls + '-steps-title'}>{props.title}</div>
        <div className={prefixCls + '-steps-description'}>
          {props.description}
        </div>
      </div>
      {!props.stepLast ? <div className={prefixCls + '-steps-tail'} style={{width: props.tailWidth}}>
        <i></i>
      </div> : ''}
    </div>);
  }
});

module.exports = Step;
