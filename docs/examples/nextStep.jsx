import '../../assets/index.less';
import '../../assets/iconfont.less';
import './nextStep.css';
import React from 'react';
import Steps from '@rc-component/steps';

function generateRandomSteps() {
  const n = Math.floor(Math.random() * 3) + 3;
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push({
      title: `步骤${i + 1}`,
    });
  }
  return arr;
}
const steps = generateRandomSteps();

class MyForm extends React.Component {
  state = {
    currentStep: Math.floor(Math.random() * steps.length),
  };

  nextStep = () => {
    const { currentStep } = this.state;
    let s = currentStep + 1;
    if (s === steps.length) {
      s = 0;
    }
    this.setState({
      currentStep: s,
    });
  };

  render() {
    const { currentStep: cs } = this.state;
    this.stepsRefs = [];
    return (
      <form className="my-step-form">
        <div>这个demo随机生成3~6个步骤，初始随机进行到其中一个步骤</div>
        <div>当前正在执行第{cs + 1}步</div>
        <div className="my-step-container">
          <Steps
            current={cs}
            items={steps.map((s, i) => ({
              ref: (c) => {
                this.stepsRefs[i] = c;
              },
              key: i,
              title: s.title,
            }))}
          />
        </div>

        <div>
          <button type="button" onClick={this.nextStep}>
            下一步
          </button>
        </div>
      </form>
    );
  }
}

export default MyForm;
