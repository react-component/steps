'use strict';

require('assets/index.css');
require('assets/iconfont.css');
require('./customIcon.css');

var React = require('react');
var Steps = require('rc-steps');


var container = document.getElementById('__react-content');

var imgIcon = <div className='my-step-icon'><img src='https://t.alipayobjects.com/images/rmsweb/T1B9hfXcdvXXXXXXXX.svg'/></div>


React.render(
  <Steps>
    <Steps.Step status='finish' title='步骤1' icon={<div className='my-step-icon'><span className='anticon anticon-cloud'></span></div>}></Steps.Step>
    <Steps.Step status='process' title='步骤2' icon={imgIcon}></Steps.Step>
    <Steps.Step status='wait' title='步骤3' icon={<div className='my-step-icon'><span className='anticon anticon-github'></span></div>}></Steps.Step>
  </Steps>, container);