import '../../assets/index.less';
import '../../assets/iconfont.less';
import React from 'react';
import Steps, { Step } from 'rc-steps';

const description =
  '这里是多信息的描述啊描述啊描述啊描述啊哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶';

const CustomStep = props => <Step style={{ fontWeight: 'bold', fontStyle: 'italic' }} {...props} />;

export default () => (
  <Steps current={1}>
    <Step title="已完成" description={description} />
    <Step title="进行中" description={description} />
    <CustomStep title="进行中" description={description} />
    <Step title="待运行" description={description} />
  </Steps>
);
