import 'rc-steps/assets/index.less';
import 'rc-steps/assets/iconfont.less';
import React from 'react';
import ReactDOM from 'react-dom';
import Steps, { Step } from 'rc-steps';

const container = document.getElementById('__react-content');

const steps = [{
  status: 'finish',
  title: '已完成',
  description: '这里是多信息的描述啊这里是多信息的描述啊这里是多信息的描述啊这里是多信息的描述啊这里是多信息的描述啊',
}, {
  status: 'process',
  title: '进行中',
  description: '这里是多信息的描述啊这里是多信息的描述啊这里是多信息的描述啊这里是多信息的描述啊这里是多信息的描述啊',
}, {
  status: 'wait',
  title: '待运行',
  description: '这里是多信息的描述啊这里是多信息的描述啊这里是多信息的描述啊这里是多信息的描述啊这里是多信息的描述啊',
}].map((s, i) => {
  return (
    <Step
      key={i}
      status={s.status}
      title={s.title}
      description={s.description}
    />
  );
});

ReactDOM.render(
  <Steps labelPlacement="vertical">
    {steps}
  </Steps>
, container);
