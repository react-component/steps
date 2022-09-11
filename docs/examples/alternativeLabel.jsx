import '../../assets/index.less';
import '../../assets/iconfont.less';
import React from 'react';
import Steps from 'rc-steps';

const description =
  '这里是多信息的描述啊这里是多信息的描述啊这里是多信息的描述啊这里是多信息的描述啊这里是多信息的描述啊';

export default () => (
  <Steps
    labelPlacement="vertical"
    current={1}
    items={[
      {
        title: '已完成',
        description,
        status: 'wait',
      },
      {
        title: '进行中',
        description,
        status: 'wait',
        subTitle: '剩余 00:00:07',
      },
      undefined,
      {
        title: '待运行',
        description,
        status: 'process',
      },
      false,
      {
        title: '待运行',
        description,
        status: 'finish',
        disabled: true,
      },
      null,
    ]}
  />
);
