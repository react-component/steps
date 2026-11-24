import React from 'react';
import { render } from '@testing-library/react';
import Steps from '../src';

it('preserves a zero itemRender result', () => {
  const { container } = render(<Steps items={[{ title: 'A' }]} itemRender={() => 0} />);
  expect(container.textContent).toBe('0');
});

it('marks a zero icon as custom', () => {
  const { container } = render(<Steps items={[{ title: 'A', icon: 0 }]} />);
  expect(container.querySelector('.rc-steps-item')).toHaveClass('rc-steps-item-custom');
});

it.each([false, null, undefined, ''])('keeps an empty itemRender result hidden: %s', (value) => {
  const { container } = render(<Steps items={[{ title: 'A' }]} itemRender={() => value} />);
  expect(container.querySelector('.rc-steps').textContent).toBe('');
});
