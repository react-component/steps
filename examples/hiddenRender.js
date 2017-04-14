import 'rc-steps/assets/index.less';
import 'rc-steps/assets/iconfont.less';
import React from 'react';
import ReactDOM from 'react-dom';
import Steps, { Step } from 'rc-steps';

const container = document.getElementById('__react-content');

const data = [{
  title: '已完成',
  description: '这里是多信息的描述啊描述啊描述啊描述啊哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶',
}, {
  title: '进行中',
  description: '这里是多信息的描述啊描述啊描述啊描述啊哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶',
}, {
  title: '待运行',
  description: '这里是多信息的描述啊描述啊描述啊描述啊哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶',
}, {
  title: '待运行',
  description: '这里是多信息的描述啊描述啊描述啊描述啊哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶',
}];

class App extends React.Component {
  state = {
    hidden: true,
  };
  toggle = (e) => {
    this.setState({
      hidden: !e.target.checked,
    });
  }
  render() {
    return (
      <div>
        <label><input type="checkbox" onChange={this.toggle} /> 显示步骤条</label>
        <br />
        <div className={this.state.hidden ? 'hidden' : ''}>
          <StepDemo />
        </div>
      </div>
    );
  }
}

const StepDemo = () => {
  const steps = data.map((s, i) => (
    <Step
      key={i}
      status={s.status}
      title={s.title}
      description={s.description}
    />
  ));
  return <Steps>{steps}</Steps>;
};

ReactDOM.render(<App />, container);
