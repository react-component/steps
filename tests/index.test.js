import React from 'react';
import { render } from 'enzyme';
import Steps, { Step } from '../src';

describe('Steps', () => {
  describe('render', () => {
    const steps = (
      <Steps>
        <Step title="已完成" />
        <Step title="进行中" />
        <Step title="待运行" />
        <Step title="待运行" />
      </Steps>
    );

    it('renders correctly', () => {
      const wrapper = render(steps);
      expect(wrapper).toMatchSnapshot();
    });

    it('renders current correctly', () => {
      const wrapper = render(React.cloneElement(steps, { current: 2 }));
      expect(wrapper).toMatchSnapshot();
    });

    it('renders status correctly', () => {
      const wrapper = render(React.cloneElement(steps, { current: 2, status: 'error' }));
      expect(wrapper).toMatchSnapshot();
    });

    it('renders vertical correctly', () => {
      const wrapper = render(React.cloneElement(steps, { direction: 'vertical' }));
      expect(wrapper).toMatchSnapshot();
    });

    it('renders labelPlacement correctly', () => {
      const wrapper = render(React.cloneElement(steps, { labelPlacement: 'vertical' }));
      expect(wrapper).toMatchSnapshot();
    });

    it('renders progressDot correctly', () => {
      const wrapper = render(React.cloneElement(steps, { progressDot: true }));
      expect(wrapper).toMatchSnapshot();
    });

    it('renders progressDot function correctly', () => {
      const wrapper = render(React.cloneElement(steps, { progressDot: () => <span>a</span> }));
      expect(wrapper).toMatchSnapshot();
    });

    it('renders step with description', () => {
      const wrapper = render(
        <Steps>
          <Step title="已完成" description="xx" />
          <Step title="进行中" description="xx" />
          <Step title="待运行" description="xx" />
          <Step title="待运行" description="xx" />
        </Steps>
      );
      expect(wrapper).toMatchSnapshot();
    });

    it('renders step with description and status', () => {
      const wrapper = render(
        <Steps>
          <Step title="已完成" description="xx" status="wait" />
          <Step title="进行中" description="xx" status="wait" />
          <Step title="待运行" description="xx" status="process" />
          <Step title="待运行" description="xx" status="finish" />
        </Steps>
      );
      expect(wrapper).toMatchSnapshot();
    });

    it('renders with fasly children', () => {
      const wrapper = render(
        <Steps>
          <Step title="已完成" description="xx" status="wait" />
          <Step title="进行中" description="xx" status="wait" />
          {undefined}
          <Step title="待运行" description="xx" status="process" />
          {false}
          <Step title="待运行" description="xx" status="finish" />
          {null}
        </Steps>
      );
      expect(wrapper).toMatchSnapshot();
    });

    it('renders step with tailContent', () => {
      const wrapper = render(
        <Steps>
          <Step title="已完成" description="xx" tailContent="text" />
          <Step title="进行中" description="xx" tailContent={<div>content</div>} />
          <Step title="待运行" description="xx" tailContent={3} />
          <Step title="待运行" description="xx" tailContent="text" />
        </Steps>
      );
      expect(wrapper).toMatchSnapshot();
    });
  });
});
