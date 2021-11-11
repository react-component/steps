import '../../assets/index.less';
import '../../assets/iconfont.less';
import React from 'react';
import Steps, { Step } from 'rc-steps';

const description =
  '这里是多信息的描述啊描述啊描述啊描述啊哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶';

const ControlSteps = () => {
  const [current, setCurrent] = React.useState(0);
  return (
    <Steps
      current={current}
      onChange={val => {
        // eslint-disable-next-line no-console
        console.log('Change:', val);
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

export default () => (
  <div>
    <Steps current={1}>
      <Step title="已完成" />
      <Step title="进行中" />
      <Step title="待运行" />
      <Step title="待运行" />
    </Steps>
    <Steps current={1} style={{ marginTop: 40 }}>
      <Step title="已完成" description={description} />
      <Step title="进行中" subTitle="剩余 00:00:07" description={description} />
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
  </div>
);
