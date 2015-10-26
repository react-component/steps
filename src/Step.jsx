import React from 'react';

const Step = React.createClass({
  render() {
    const props = this.props;
    const status = props.status || 'wait';
    const prefixCls = props.prefixCls;
    const iconPrefix = props.iconPrefix;
    const maxWidth = props.maxDescriptionWidth;
    const iconName = props.icon ? props.icon : 'check';
    const icon = !props.icon && status !== 'finish' ? <span className={prefixCls + '-icon'}>{props.stepNumber}</span> : <span className={prefixCls + '-icon ' + iconPrefix + 'icon ' + iconPrefix + 'icon-' + iconName}></span>;
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
  },
});

module.exports = Step;
