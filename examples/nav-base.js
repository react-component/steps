import 'rc-steps/assets/index.less';
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
    const containerStyle = {
      border: '1px solid rgb(235, 237, 240)',
    };

    return (
      <Steps style={containerStyle} type="navigation" current={current} onChange={this.onChange}>
        <Step title="Step 1" subTitle="剩余 00:00:05 超长隐藏" description="This is a description." />
        <Step title="Step 2" description="This is a description." />
        <Step title="Step 3" disabled description="This is a description." />
      </Steps>
    );
  }
}

ReactDOM.render(
  <Demo />,
  container,
);
