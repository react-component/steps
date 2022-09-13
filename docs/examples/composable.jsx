import '../../assets/index.less';
import '../../assets/iconfont.less';
import React from 'react';
import Steps from 'rc-steps';

const description =
  '这里是多信息的描述啊描述啊描述啊描述啊哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶';

export default () => (
  <Steps
    current={1}
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
        title: '进行中',
        description,
        style: { fontWeight: 'bold', fontStyle: 'italic' },
      },
      {
        title: '待运行',
        description,
      },
    ]}
  />
);
