import '../../assets/index.less';
import '../../assets/iconfont.less';
import React from 'react';
import Steps from 'rc-steps';

// eslint-disable-next-line react/prop-types
const Icon = ({ type }) => <i className={`rcicon rcicon-${type}`} />;

const {Step} = Steps

export default () => (
  <Steps
    current={1}
  >
    <Step title='步骤1' icon={<Icon type="cloud" />} />
    <Step title='步骤2' icon={<Icon type="apple" />} />
    <Step title='步骤1' icon={<Icon type="github" />} />
  </Steps>
);
