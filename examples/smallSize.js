import 'rc-steps/assets/index.less';
import 'rc-steps/assets/iconfont.less';
import React from 'react';
import ReactDOM from 'react-dom';
import Steps, { Step } from 'rc-steps';

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
    <Step
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
