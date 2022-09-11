import '../../assets/index.less';
import '../../assets/iconfont.less';
import React from 'react';
import Steps from 'rc-steps';

// eslint-disable-next-line react/prop-types
const Icon = ({ type }) => <i className={`rcicon rcicon-${type}`} />;

export default () => (
  <div>
    <Steps
      size="small"
      current={1}
      items={[
        {
          title: '已完成',
        },
        {
          title: '进行中',
        },
        {
          title: '待运行',
        },
        {
          title: '待运行',
        },
      ]}
    />
    <Steps
      size="small"
      current={1}
      style={{ marginTop: 40 }}
      items={[
        {
          title: '步骤1',
        },
        {
          title: '步骤2',
          icon: <Icon type="cloud" />,
        },
        {
          title: '步骤3',
          icon: 'apple',
        },
        {
          title: '待运行',
          icon: 'github',
        },
      ]}
    />
  </div>
);
