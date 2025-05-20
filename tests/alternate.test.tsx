import React from 'react';
import { render } from '@testing-library/react';
import Steps from '../src';

describe('Steps.alternate', () => {
  it('should have empty className', () => {
    const { container } = render(<Steps items={[{}]} />);

    expect(container.querySelector('.rc-steps-item')).toHaveClass('rc-steps-item-empty-header');
  });

  it('', () => {
    const { container } = render(
      <Steps orientation="vertical" titlePlacement="horizontal-alternate" />,
    );
    expect(container.querySelector('.rc-steps')).toHaveClass('rc-steps-title-horizontal-alternate');
  });
});
