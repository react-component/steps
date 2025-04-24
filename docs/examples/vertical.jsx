import '../../assets/index.less';
import '../../assets/iconfont.less';
import React from 'react';
import Steps from '@rc-component/steps';

const description =
  '这里是多信息的描述啊这里是多信息的描述啊这里是多信息的描述啊这里是多信息的描述啊这里是多信息的描述啊';

export default () => (
  <Steps
    direction="vertical"
    items={[
      {
        title: '已完成',
        description,
      },
      {
        title: '进行中',
        description,
      },
      {
        title: '待运行',
        description,
      },
      {
        title: '待运行',
        description,
      },
    ]}
  />
);
