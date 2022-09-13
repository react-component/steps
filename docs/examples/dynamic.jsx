import '../../assets/index.less';
import '../../assets/iconfont.less';
import React, { useState } from 'react';
import Steps from 'rc-steps';

export default () => {
  const [items, setItems] = useState([
    {
      title: '已完成',
      description:
        '这里是多信息的描述啊描述啊描述啊描述啊哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶',
    },
    {
      title: '进行中',
      description:
        '这里是多信息的描述啊描述啊描述啊描述啊哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶',
    },
    {
      title: '待运行',
      description:
        '这里是多信息的描述啊描述啊描述啊描述啊哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶',
    },
    {
      title: '待运行',
      description:
        '这里是多信息的描述啊描述啊描述啊描述啊哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶',
    },
  ]);

  const addStep = () => {
    const newSteps = [...items];
    newSteps.push({
      title: '待运行',
      description: '新的节点',
    });
    setItems(newSteps);
  };
  return (
    <div>
      <button type="button" onClick={addStep}>
        Add new step
      </button>
      <Steps items={items} />
    </div>
  );
};
