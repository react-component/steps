import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Steps from '../src';

describe('Steps', () => {
  describe('render', () => {
    const description = 'xx';

    const setSteps = (props) => (
      <Steps
        items={[
          {
            title: '已完成',
          },
          {
            title: '进行中',
          },
          {
            title: '待运行',
          },
          {
            title: '待运行',
          },
        ]}
        {...props}
      />
    );

    it('renders correctly', () => {
      const { container } = render(setSteps({}));
      expect(container.firstChild).toMatchSnapshot();
    });

    it('renders without items', () => {
      expect(() => {
        render(setSteps({ items: undefined }));
      }).not.toThrow();
    });

    it('renders current correctly', () => {
      const { container } = render(setSteps({ current: 2 }));
      expect(container.firstChild).toMatchSnapshot();
    });

    it('renders status correctly', () => {
      const { container } = render(setSteps({ current: 2, status: 'error' }));
      expect(container.firstChild).toMatchSnapshot();
    });

    it('renders vertical correctly', () => {
      const { container } = render(setSteps({ direction: 'vertical' }));
      expect(container.firstChild).toMatchSnapshot();
    });

    it('renders labelPlacement correctly', () => {
      const { container } = render(setSteps({ labelPlacement: 'vertical' }));
      expect(container.firstChild).toMatchSnapshot();
    });

    it('renders progressDot correctly', () => {
      const { container } = render(setSteps({ progressDot: true }));
      expect(container.firstChild).toMatchSnapshot();
    });

    it('renders progressDot function correctly', () => {
      const { container } = render(setSteps({ progressDot: () => <span>a</span> }));
      expect(container.firstChild).toMatchSnapshot();
    });

    it('renders stepIcon function correctly', () => {
      const { container } = render(setSteps({ stepIcon: () => <span>a</span> }));
      expect(container.firstChild).toMatchSnapshot();
    });

    it('renders step with description', () => {
      const { container } = render(
        <Steps
          items={[
            {
              title: '已完成',
              description,
            },
            {
              title: '进行中',
              description,
            },
            {
              title: '待运行',
              description,
            },
            {
              title: '待运行',
              description,
            },
          ]}
        />,
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    it('renders step with description and status', () => {
      const { container } = render(
        <Steps
          items={[
            {
              title: '已完成',
              description,
              status: 'wait',
            },
            {
              title: '进行中',
              description,
              status: 'wait',
            },
            {
              title: '待运行',
              description,
              status: 'process',
            },
            {
              title: '待运行',
              description,
              status: 'finish',
            },
          ]}
        />,
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    it('renders with falsy children', () => {
      const { container } = render(
        <Steps
          items={[
            {
              title: '已完成',
              description: 'xx',
              status: 'wait',
            },
            {
              title: '进行中',
              description: 'xx',
              status: 'wait',
              subTitle: '剩余 00:00:07',
            },
            undefined,
            {
              title: '待运行',
              description: 'xx',
              status: 'process',
            },
            // @ts-ignore
            false,
            {
              title: '待运行',
              description: 'xx',
              status: 'finish',
              disabled: true,
            },
            null,
          ]}
        />,
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  it('should render customIcon correctly', () => {
    const Icon = ({ type }) => <i className={`rcicon rcicon-${type}`} />;
    const { container } = render(
      <Steps
        current={1}
        items={[
          {
            title: '步骤1',
            icon: <Icon type="cloud" />,
          },
          {
            title: '步骤2',
            icon: 'apple',
          },
          {
            title: '步骤3',
            icon: 'github',
          },
        ]}
      />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('onChange', () => {
    const onChange = jest.fn();
    const { container } = render(
      <Steps
        onChange={onChange}
        items={[
          {
            title: '已完成',
          },
          {
            title: '进行中',
          },
          {
            title: '待运行',
          },
          {
            title: '待运行',
          },
        ]}
      />,
    );
    const items = container.querySelectorAll('.rc-steps-item');
    fireEvent.click(items[1]);
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('items out of render function', () => {
    const items = [
      {
        title: '已完成',
      },
      {
        title: '进行中',
      },
    ];

    let current = 0;
    const onChange = (val) => {
      current = val;
    };
    const { container, rerender } = render(
      <Steps current={current} onChange={onChange} items={items} key={current} />,
    );

    const step = container.querySelectorAll('.rc-steps-item')[1];
    fireEvent.click(step);
    rerender(<Steps current={current} onChange={onChange} items={items} key={current} />);
    expect(container.querySelectorAll('.rc-steps-item')[1].classList).toContain(
      'rc-steps-item-process',
    );
  });

  it('onClick', () => {
    const onClick = jest.fn();
    const onChange = jest.fn();
    const { container } = render(
      <Steps
        onChange={onChange}
        items={[
          {
            title: '已完成',
            onClick,
          },
          {
            title: '进行中',
          },
          {
            title: '待运行',
          },
          {
            title: '待运行',
          },
        ]}
      />,
    );

    const btn = container.querySelectorAll('.rc-steps-item')[0];
    fireEvent.click(btn);
    expect(onClick).toHaveBeenCalled();
  });

  it('disabled', () => {
    const onChange = jest.fn();
    const { container } = render(
      <Steps onChange={onChange} items={[{}, {}, { disabled: true }]} />,
    );

    const items = container.querySelectorAll('.rc-steps-item');
    fireEvent.click(items[2]);
    expect(onChange).not.toBeCalled();
  });

  it('key board support', () => {
    const onChange = jest.fn();
    const { container } = render(
      <Steps
        current={0}
        onChange={onChange}
        items={[
          {
            title: 'Finished',
            description: 'This is a description',
          },
          {
            title: 'Waiting',
            description: 'This is a description',
          },
        ]}
      />,
    );

    const button = container.querySelectorAll('[role="button"]')[1];
    fireEvent.keyDown(button, { key: 'Enter', keyCode: 13, which: 13 });

    expect(onChange).toHaveBeenCalledWith(1);
  });

  it('itemRender', () => {
    const { container } = render(
      <Steps
        items={[
          {
            title: 'test',
          },
        ]}
        itemRender={(oriNode) => {
          return <div className="bamboo">{oriNode}</div>;
        }}
      />,
    );

    expect(container.querySelector('.bamboo')).toBeTruthy();
    expect(container.querySelectorAll('.bamboo')).toHaveLength(1);
    expect(container.querySelector('.rc-steps-item')).toBeTruthy();
  });

  it('itemWrapperRender', () => {
    const { container } = render(
      <Steps
        items={[
          {
            title: 'test',
          },
        ]}
        itemWrapperRender={(oriNode) => {
          return <div className="bamboo">{oriNode}</div>;
        }}
      />,
    );

    expect(container.querySelector('.bamboo')).toBeTruthy();
    expect(container.querySelectorAll('.bamboo')).toHaveLength(1);
    expect(container.querySelector('.rc-steps-item')).toBeTruthy();
    expect(container.querySelector('.rc-steps-item > .bamboo')).toBeTruthy();
  });
});
