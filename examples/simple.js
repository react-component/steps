require('rc-steps/assets/index.less');
require('rc-steps/assets/iconfont.less');

const React = require('react');
const ReactDOM = require('react-dom');
const Steps = require('rc-steps');

const container = document.getElementById('__react-content');

const steps = [{
  title: '已完成',
  description: '这里是多信息的描述啊描述啊描述啊描述啊哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶',
}, {
  title: '进行中',
  description: '这里是多信息的描述啊描述啊描述啊描述啊哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶',
}, {
  title: '待运行',
  description: '这里是多信息的描述啊描述啊描述啊描述啊哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶',
}, {
  title: '待运行',
  description: '这里是多信息的描述啊描述啊描述啊描述啊哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶',
}].map((s, i) => {
  return (
    <Steps.Step
      key={i}
      status={s.status}
      title={s.title}
      description={s.description}
    />
  );
});

ReactDOM.render(
  <Steps current={1}>
    {steps}
  </Steps>
, container);
