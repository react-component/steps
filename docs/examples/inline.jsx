import '../../assets/index.less';
import React, { useState } from 'react';
import Steps from 'rc-steps';

export default () => {
  const [current, setCurrent] = useState(0);

  return (
    <>
      <button
        onClick={() => {
          setCurrent(0);
        }}
      >
        Current: {current}
      </button>

      <br />

      <Steps
        type="inline"
        current={current}
        onChange={setCurrent}
        items={[
          {
            title: '开发',
            description: '开发阶段：开发中',
          },
          {
            title: '测试',
            description: '测试阶段：测试中',
          },
          {
            title: '预发',
            description: '预发阶段：预发中',
          },
          {
            title: '发布',
            description: '发布阶段：发布中',
          },
        ]}
        itemRender={(item, stepItem) => React.cloneElement(stepItem, { title: item.description })}
      />
    </>
  );
};
