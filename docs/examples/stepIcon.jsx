import '../../assets/index.less';
import '../../assets/iconfont.less';
import React from 'react';
import Steps, { Step } from 'rc-steps';

function stepIcon({ status, node }) {
  const isProcessing = status === 'process';
  return isProcessing ? <div style={{ backgroundColor: 'blue' }}>{node}</div> : node;
}

export default () => {
  const [current, setCurrent] = React.useState(0);
  return (
    <>
      <button
        type="button"
        onClick={() => {
          setCurrent((current + 1) % 5);
        }}
      >
        loop
      </button>
      <Steps stepIcon={stepIcon} current={current}>
        <Step title="已完成" />
        <Step title="进行中" />
        <Step title="待运行" />
        <Step title="待运行" />
        <Step title="待运行" />
      </Steps>
    </>
  );
};
