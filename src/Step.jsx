'use strict';

var React = require('react');

var Step = React.createClass({
  render() {
    var props = this.props;
    var status = props.status || 'wait';
    var prefixCls = props.prefixCls;
    var iconPrefix = props.iconPrefix;
    var maxWidth = props.maxDescriptionWidth;
    var iconName = props.icon ? props.icon : 'check';
    var icon = !props.icon && status !== 'finish' ? <span className={prefixCls + '-icon'}>{props.stepNumber}</span> : <span className={prefixCls + '-icon ' + iconPrefix + 'icon ' + iconPrefix + 'icon-' + iconName}></span>;
    return (<div className={prefixCls + '-item ' + (props.stepLast ? prefixCls + '-item-last ' : '') + prefixCls + '-status-' + status + (props.icon ? ' ' + prefixCls + '-custom' : '')} style={{width: props.tailWidth}}>

      {!props.stepLast ? <div className={prefixCls + '-tail'}>
        <i></i>
      </div> : ''}

      <div className={prefixCls + '-head'}>
        <div className={prefixCls + '-head-inner'}>{icon}</div>
      </div>
      <div className={prefixCls + '-main'} style={{maxWidth: maxWidth}}>
        <div className={prefixCls + '-title'}>{props.title}</div>
        {props.description ? <div className={prefixCls + '-description'}>
          {props.description}
        </div> : ''}
      </div>

    </div>);
  }
});

module.exports = Step;
