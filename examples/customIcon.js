'use strict';

require('assets/index.css');
require('assets/iconfont.css');

var React = require('react');
var Steps = require('rc-steps');


var container = document.getElementById('__react-content');


React.render(
  <Steps>
    <Steps.Step status='finish' title='步骤1' icon='cloud'></Steps.Step>
    <Steps.Step status='process' title='步骤2' icon='apple'></Steps.Step>
    <Steps.Step status='wait' title='步骤3' icon='github'></Steps.Step>
  </Steps>, container);