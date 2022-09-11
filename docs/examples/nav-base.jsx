import '../../assets/index.less';
import '../../assets/iconfont.less';
import React, { useState } from 'react';
import Steps from 'rc-steps';

export default () => {
  const [current, setCurrent] = useState(0);

  const onChange = (current) => {
    // eslint-disable-next-line no-console
    console.log('onChange:', current);
    setCurrent(current);
  };

  const containerStyle = {
    border: '1px solid rgb(235, 237, 240)',
    marginBottom: 24,
  };

  const description = 'This is a description.';

  return (
    <div>
      <Steps
        style={containerStyle}
        type="navigation"
        current={current}
        onChange={onChange}
        items={[
          {
            title: 'Step 1',
            status: 'finish',
            subTitle: '剩余 00:00:05 超长隐藏',
            description,
          },
          {
            title: 'Step 2',
            status: 'process',
            description,
          },
          {
            title: 'Step 3',
            status: 'wait',
            description,
            disabled: true,
          },
        ]}
      />
      <Steps
        style={containerStyle}
        type="navigation"
        current={current}
        onChange={onChange}
        items={[
          {
            title: 'Step 1',
            status: 'finish',
            subTitle: '剩余 00:00:05 超长隐藏',
          },
          {
            title: 'Step 2',
            status: 'process',
          },
          {
            title: 'Step 3',
            status: 'wait',
          },
          {
            title: 'Step 3',
            status: 'wait',
          },
        ]}
      />
    </div>
  );
};
