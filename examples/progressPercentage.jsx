import '../assets/index.less';
import '../assets/iconfont.less';
import React from 'react';
import Steps, { Step } from '../src';

export default () => (
  <Steps progressPercentage={() => <span>a</span>} current={1}>
    <Step title="已完成" />
    <Step title="进行中" />
    <Step title="待运行" />
    <Step title="待运行" />
    <Step title="待运行" />
  </Steps>
);
