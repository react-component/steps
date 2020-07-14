import '../assets/index.less';
import '../assets/iconfont.less';
import React from 'react';
import Steps, { Step } from '../src';

// 当用户需要展示进度的时候,在stepRender内部进行是否增加进度条判断
function stepRender(dom, status) {
  if (status === 'process') {
    // 在这里增加进度条内容
    return <div>展示进度内容</div>;
  }
  return dom;
}

export default () => (
  <Steps current={1} status="process" stepRender={stepRender}>
    <Step title="Finished" description="This is a description" />
    <Step title="In Process" description="This is a description" />
    <Step title="Waiting" description="This is a description" />
  </Steps>
);
