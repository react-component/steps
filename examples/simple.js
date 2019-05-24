import 'rc-steps/assets/index.less';
import 'rc-steps/assets/iconfont.less';
import React from 'react';
import ReactDOM from 'react-dom';
import Steps, { Step } from 'rc-steps';

const container = document.getElementById('__react-content');
const description = '这里是多信息的描述啊描述啊描述啊描述啊哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶';

const ControlSteps = () => {
  const [current, setCurrent] = React.useState(0);
  return (
    <Steps
      current={current}
      onChange={(val) => {
        setCurrent(val);
      }}
    >
      <Step title="已完成" />
      <Step title="进行中" />
      <Step title="待运行" description="Hello World!" />
      <Step title="待运行" />
    </Steps>
  );
};

ReactDOM.render(
  <div>
    <Steps current={1}>
      <Step title="已完成" />
      <Step title="进行中" />
      <Step title="待运行" />
      <Step title="待运行" />
    </Steps>
    <Steps current={1} style={{ marginTop: 40 }}>
      <Step title="已完成" description={description} />
      <Step title="进行中" description={description} />
      <Step title="待运行" description={description} />
      <Step title="待运行" description={description} />
    </Steps>
    <Steps current={1} style={{ marginTop: 40 }} status="error">
      <Step title="已完成" description={description} />
      <Step title="进行中" description={description} />
      <Step title="待运行" description={description} />
      <Step title="待运行" description={description} />
    </Steps>
    <ControlSteps />
  </div>,
  container,
);
