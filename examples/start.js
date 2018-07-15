import 'rc-steps/assets/index.less';
import 'rc-steps/assets/iconfont.less';
import React from 'react';
import ReactDOM from 'react-dom';
import Steps, { Step } from 'rc-steps';

const container = document.getElementById('__react-content');

ReactDOM.render(
  <div>
    <Steps current={4}>
      <Step title="已完成" />
      <Step title="已完成" />
      <Step title="已完成" />
      <Step title="已完成" />
    </Steps>
    <Steps current={1} start={5} style={{ marginTop: 40 }}>
      <Step title="已完成" />
      <Step title="进行中" />
      <Step title="待运行" />
      <Step title="待运行" />
    </Steps>
  </div>
, container);
