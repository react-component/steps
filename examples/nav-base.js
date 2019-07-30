import 'rc-steps/assets/index.less';
import 'rc-steps/assets/nav.less';
import 'rc-steps/assets/iconfont.less';
import React from 'react';
import ReactDOM from 'react-dom';
import Steps from 'rc-steps';

const container = document.getElementById('__react-content');

const { Step } = Steps;

class Demo extends React.Component {
  state = {
    current: 0,
  };

  onChange = current => {
    console.log('onChange:', current);
    this.setState({ current });
  };

  render() {
    const { current } = this.state;

    return (
      <Steps className="rc-steps-nav" current={current} onChange={this.onChange}>
        <Step title="Step 1" description="This is a description." />
        <Step title="Step 2" description="This is a description." />
        <Step title="Step 3" description="This is a description." />
      </Steps>
    );
  }
}


ReactDOM.render(
  <Demo />,
  container,
);
