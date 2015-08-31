'use strict';

require('rc-steps/assets/index.css');
require('rc-steps/assets/iconfont.css');

var React = require('react');
var Steps = require('rc-steps');


var container = document.getElementById('__react-content');


var steps = [{
  status: 'finish',
  title: '已完成'
}, {
  status: 'process',
  title: '进行中'
}, {
  status: 'wait',
  title: '待运行'
}, {
  status: 'wait',
  title: '待运行'
}].map(function(s, i) {
    return (<Steps.Step
        key={i}
        status={s.status}
        title={s.title}
        ></Steps.Step>
    );
  });

React.render(
  <Steps size="small">
    {steps}
  </Steps>, container);