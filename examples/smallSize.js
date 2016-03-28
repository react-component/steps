require('rc-steps/assets/index.less');
require('rc-steps/assets/iconfont.less');

const React = require('react');
const ReactDOM = require('react-dom');
const Steps = require('rc-steps');

const container = document.getElementById('__react-content');

const steps = [{
  status: 'finish',
  title: '已完成',
}, {
  status: 'process',
  title: '进行中',
}, {
  status: 'wait',
  title: '待运行',
}, {
  status: 'wait',
  title: '待运行',
}].map((s, i) => {
  return (
    <Steps.Step
      key={i}
      status={s.status}
      title={s.title}
    />
  );
});

ReactDOM.render(
  <Steps size="small">
    {steps}
  </Steps>
, container);
