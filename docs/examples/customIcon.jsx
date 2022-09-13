import '../../assets/index.less';
import '../../assets/iconfont.less';
import React from 'react';
import Steps from 'rc-steps';

// eslint-disable-next-line react/prop-types
const Icon = ({ type }) => <i className={`rcicon rcicon-${type}`} />;

export default () => (
  <Steps
    current={1}
    items={[
      { title: '步骤1', icon: <Icon type="cloud" /> },
      { title: '步骤2', icon: 'apple' },
      { title: '步骤1', icon: 'github' },
    ]}
  />
);
