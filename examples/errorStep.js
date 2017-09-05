import 'rc-steps/assets/index.less';
import 'rc-steps/assets/iconfont.less';
import React from 'react';
import ReactDOM from 'react-dom';
import Steps, { Step } from 'rc-steps';

const container = document.getElementById('__react-content');

const description = '这里是多信息的描述啊这里是多信息的描述啊这里是多信息的描述啊这里是多信息的描述啊这里是多信息的描述啊';

ReactDOM.render(
  <Steps current={2} status="error">
    <Step title="已完成" description={description} />
    <Step title="进行中" description={description} />
    <Step title="待运行" description={description} />
    <Step title="待运行" description={description} />
  </Steps>
, container);
