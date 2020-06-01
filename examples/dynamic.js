import '../assets/index.less';
import '../assets/iconfont.less';
import React from 'react';
import Steps, { Step } from '../src';

class App extends React.Component {
  state = {
    steps: [
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
    ],
  };

  addStep = () => {
    const { steps } = this.state;
    const newSteps = [...steps];
    newSteps.push({
      title: '待运行',
      description: '新的节点',
    });
    this.setState({ steps: newSteps });
  };

  render() {
    const { steps } = this.state;

    return (
      <div>
        <button type="button" onClick={this.addStep}>
          Add new step
        </button>
        <Steps>
          {steps.map((step, i) => (
            <Step key={i} {...step} />
          ))}
        </Steps>
      </div>
    );
  }
}

export default App;
