import '../assets/index.less';
import '../assets/iconfont.less';
import React from 'react';
import { Progress, Popover } from 'antd';
import Steps, { Step } from '../src';
import 'antd/dist/antd.css';

const size = 'default';

const content = <div>进度：80%</div>;

// 通过用户是否传入percentage的属性来判断，是否展示进度
const percentage = 80;

// 当用户需要展示进度的时候,在showPercentage内部进行是否增加进度条判断
function showPercentage(dom, status) {
  if (percentage) {
    if (status === 'process') {
      return (
        <Popover content={content} placement="topLeft">
          <Progress
            type="circle"
            percent={percentage}
            width={size === 'default' ? 32 : 26}
            strokeWidth={4}
            style={{ marginRight: '8px' }}
            strokeColor={status === 'process' ? '#108ee9' : 'transparent'}
            format={() => dom}
          />
        </Popover>
      );
    }
    return (
      <Progress
        type="circle"
        percent={percentage}
        width={size === 'default' ? 32 : 26}
        strokeWidth={4}
        style={{ marginRight: '8px' }}
        strokeColor={status === 'process' ? '#108ee9' : 'transparent'}
        format={() => dom}
      />
    );
  }
  return dom;
}

export default () => {
  return (
    <Steps current={1} status="process" showPercentage={showPercentage} percentage={percentage}>
      <Step title="Finished" description="This is a description" />
      <Step title="In Process" description="This is a description" />
      <Step title="Waiting" description="This is a description" />
    </Steps>
  );
};
