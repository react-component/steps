'use strict';

var React = require('react');

var Step = React.createClass({
  render() {
    var props = this.props;
    var prefixCls = props.prefixCls;
    var icon = props.icon ? props.icon
        : (props.status !== 'finish' ? <span className={prefixCls + '-icon'}>{props.stepNumber}</span> : <span className={prefixCls + '-icon ' + ' anticon anticon-check'}></span>);
    return (<div className={prefixCls + '-item ' + prefixCls + '-status-' + props.status + (props.icon ? ' ' + prefixCls + '-custom' : '') }>
      <div className={prefixCls + '-head'}>
        {icon}
      </div>
      <div className={prefixCls + '-main'}>
        <div className={prefixCls + '-title'}>{props.title}</div>
        <div className={prefixCls + '-description'}>
          {props.description}
        </div>
      </div>
      {!props.stepLast ? <div className={prefixCls + '-tail'} style={{width: props.tailWidth}}>
        <i></i>
      </div> : ''}
    </div>);
  }
});

module.exports = Step;
