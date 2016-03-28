require('rc-steps/assets/index.less');
require('rc-steps/assets/iconfont.less');

const React = require('react');
const ReactDOM = require('react-dom');
const Steps = require('rc-steps');

const container = document.getElementById('__react-content');

ReactDOM.render(
  <Steps>
    <Steps.Step status="finish" title="步骤1" icon="cloud" />
    <Steps.Step status="process" title="步骤2" icon="apple" />
    <Steps.Step status="wait" title="步骤3" icon="github" />
  </Steps>
, container);
