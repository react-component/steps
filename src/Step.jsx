'use strict';

var React = require('react');

var Step = React.createClass({
  render() {
    var props = this.props;
    var icon = props.icon ? props.icon
        : (props.status !== 'finish' ? <span className='rc-steps-icon'>{props.stepNumber}</span> : <span className='rc-steps-icon anticon anticon-check'></span>);
    return (<div className={'rc-steps-item rc-steps-status-' + props.status }>
      <div className={'rc-steps-head' + (props.icon ? ' rc-steps-custom' : '')}>
        {icon}
      </div>
      <div className='rc-steps-main'>
        <div className='rc-steps-title'>{props.title}</div>
        <div className='rc-steps-description'>
          {props.description}
        </div>
      </div>
      {!props.stepLast ? <div className='rc-steps-tail' style={{width: props.tailWidth}}>
        <i></i>
      </div> : ''}
    </div>);
  }
});

module.exports = Step;
