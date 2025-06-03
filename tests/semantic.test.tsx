import React from 'react';
import { render } from '@testing-library/react';
import Steps, { type StepsProps } from '../src';
import type { ItemSemanticName, SemanticName } from '../src/Steps';

describe('Steps.Semantic', () => {
  const renderSteps = (props: Partial<StepsProps>) => (
    <Steps
      items={Array.from({ length: 3 }, (_, index) => ({
        title: `Step ${index + 1}`,
        subTitle: `SubTitle ${index + 1}`,
        content: `Content ${index + 1}`,
      }))}
      {...props}
    />
  );

  it('semantic structure', () => {
    const classNames: Record<SemanticName, string> = {
      root: 'custom-root',
      item: 'custom-item',
      itemWrapper: 'custom-item-wrapper',
      itemIcon: 'custom-item-icon',
      itemSection: 'custom-item-section',
      itemHeader: 'custom-item-header',
      itemTitle: 'custom-item-title',
      itemSubtitle: 'custom-item-subtitle',
      itemContent: 'custom-item-content',
      itemRail: 'custom-item-rail',
    };

    const classNamesTargets: Record<SemanticName, string> = {
      root: 'rc-steps',
      item: 'rc-steps-item',
      itemWrapper: 'rc-steps-item-wrapper',
      itemIcon: 'rc-steps-item-icon',
      itemSection: 'rc-steps-item-section',
      itemHeader: 'rc-steps-item-header',
      itemTitle: 'rc-steps-item-title',
      itemSubtitle: 'rc-steps-item-subtitle',
      itemContent: 'rc-steps-item-content',
      itemRail: 'rc-steps-item-rail',
    };

    const styles: Record<SemanticName, Record<string, any>> = {
      root: { color: 'red' },
      item: { color: 'blue' },
      itemWrapper: { color: 'green' },
      itemIcon: { color: 'yellow' },
      itemSection: { color: 'purple' },
      itemHeader: { color: 'orange' },
      itemTitle: { color: 'pink' },
      itemSubtitle: { color: 'cyan' },
      itemContent: { color: 'magenta' },
      itemRail: { color: 'lime' },
    };

    const { container } = render(
      renderSteps({
        classNames,
        styles,
      }),
    );

    Object.keys(classNames).forEach((key) => {
      const className = classNames[key as SemanticName];
      const oriClassName = classNamesTargets[key as SemanticName];
      const style = styles[key as SemanticName];

      const element = container.querySelector<HTMLElement>(`.${className}`);
      expect(element).toBeTruthy();
      expect(element).toHaveClass(oriClassName);
      expect(element).toHaveStyle(style);
    });
  });

  it('item semantic structure', () => {
    const classNames: Record<ItemSemanticName, string> = {
      root: 'custom-root',
      wrapper: 'custom-wrapper',
      header: 'custom-header',
      title: 'custom-title',
      subtitle: 'custom-subtitle',
      section: 'custom-section',
      content: 'custom-content',
      icon: 'custom-icon',
      rail: 'custom-rail',
    };

    const classNamesTargets: Record<ItemSemanticName, string> = {
      root: 'rc-steps-item',
      wrapper: 'rc-steps-item-wrapper',
      header: 'rc-steps-item-header',
      title: 'rc-steps-item-title',
      subtitle: 'rc-steps-item-subtitle',
      section: 'rc-steps-item-section',
      content: 'rc-steps-item-content',
      icon: 'rc-steps-item-icon',
      rail: 'rc-steps-item-rail',
    };

    const styles: Record<ItemSemanticName, Record<string, any>> = {
      root: { color: 'red' },
      wrapper: { color: 'green' },
      header: { color: 'orange' },
      title: { color: 'pink' },
      subtitle: { color: 'cyan' },
      section: { color: 'purple' },
      content: { color: 'magenta' },
      icon: { color: 'yellow' },
      rail: { color: 'lime' },
    };

    const { container } = render(
      renderSteps({
        items: Array.from({ length: 2 }, (_, index) => ({
          title: `Title ${index + 1}`,
          subTitle: `SubTitle ${index + 1}`,
          content: `Content ${index + 1}`,
          classNames,
          styles,
        })),
      }),
    );

    Object.keys(classNames).forEach((key) => {
      const className = classNames[key as SemanticName];
      const oriClassName = classNamesTargets[key as SemanticName];
      const style = styles[key as SemanticName];

      const element = container.querySelector<HTMLElement>(`.${className}`);
      expect(element).toBeTruthy();
      expect(element).toHaveClass(oriClassName);
      expect(element).toHaveStyle(style);
    });
  });
});
