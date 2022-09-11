import '../../assets/index.less';
import '../../assets/iconfont.less';
import React from 'react';
import Steps from 'rc-steps';

const description =
  '这里是多信息的描述啊描述啊描述啊描述啊哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶';

const ControlSteps = () => {
  const [current, setCurrent] = React.useState(0);
  return (
    <Steps
      current={current}
      onChange={(val) => {
        // eslint-disable-next-line no-console
        console.log('Change:', val);
        setCurrent(val);
      }}
      items={[
        {
          title: '已完成',
        },
        {
          title: '进行中',
        },
        {
          title: '待运行',
          description: 'Hello World!',
        },
        {
          title: '待运行',
        },
      ]}
    />
  );
};

export default () => (
  <div>
    <Steps
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
      current={1}
      style={{ marginTop: 40 }}
      items={[
        {
          title: '已完成',
          description,
        },
        {
          title: '进行中',
          subTitle: '剩余 00:00:07',
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
    <Steps
      current={1}
      style={{ marginTop: 40 }}
      status="error"
      items={[
        {
          title: '已完成',
          description,
        },
        {
          title: '进行中',
          subTitle: '剩余 00:00:07',
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
    <ControlSteps />
  </div>
);
