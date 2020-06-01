import '../assets/index.less';
import '../assets/iconfont.less';
import React from 'react';
import Steps, { Step } from '../src';

// eslint-disable-next-line react/prop-types
const Icon = ({ type }) => <i className={`rcicon rcicon-${type}`} />;

export default () => (
  <Steps current={1}>
    <Step title="步骤1" icon={<Icon type="cloud" />} />
    <Step title="步骤2" icon="apple" />
    <Step title="步骤3" icon="github" />
  </Steps>
);
