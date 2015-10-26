'use strict';

require('rc-steps/assets/index.css');
require('rc-steps/assets/iconfont.css');
require('./nextStep.css');

var React = require('react');
var ReactDOM = require('react-dom');
var Steps = require('rc-steps');


var container = document.getElementById('__react-content');
var steps = (function generateRandomSteps() {
  var n = Math.floor(Math.random() * 3) + 3;
  var arr = [];
  for (var i = 0; i < n; i++ ) {
    arr.push({
      title: '步骤' + (i+1)
    });
  }
  return arr;
})();

var MyForm = React.createClass({
  getInitialState() {
    return {
      currentStep: Math.floor(Math.random() * steps.length)
    }
  },
  nextStep() {
    var s = this.state.currentStep + 1;
    if (s === steps.length) {
      s = 0;
    }
    this.setState({
      currentStep: s
    });
  },
  render() {
    var cs = this.state.currentStep;
    return (<form className='my-step-form'>
      <div>这个demo随机生成3~6个步骤，初始随机进行到其中一个步骤</div>
      <div>当前正在执行第{cs + 1}步</div>
      <div className='my-step-container'><Steps current={cs}>
        {steps.map(function(s, i) {
          return <Steps.Step
            key={i}
            title={s.title}
            ></Steps.Step>
        })}
      </Steps></div>

      <div><button type="button" onClick={this.nextStep}>下一步</button></div>
    </form>)
  }
});

ReactDOM.render(<MyForm></MyForm>, container);
