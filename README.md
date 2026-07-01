<div align="center">
  <h1>@rc-component/steps</h1>
  <p><sub><a href="https://ant.design"><img alt="Ant Design" height="14" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" style="vertical-align: -0.125em;" /></a> Part of the Ant Design ecosystem.</sub></p>
  <p>🚶 Structured React steps for progress, navigation, and multi-step workflows.</p>

  <p>
    <a href="https://npmjs.org/package/@rc-component/steps"><img alt="NPM version" src="https://img.shields.io/npm/v/@rc-component/steps.svg?style=flat-square"></a>
    <a href="https://npmjs.org/package/@rc-component/steps"><img alt="npm downloads" src="https://img.shields.io/npm/dm/@rc-component/steps.svg?style=flat-square"></a>
    <a href="https://github.com/react-component/steps/actions/workflows/react-component-ci.yml"><img alt="build status" src="https://github.com/react-component/steps/actions/workflows/react-component-ci.yml/badge.svg"></a>
    <a href="https://app.codecov.io/gh/react-component/steps"><img alt="Codecov" src="https://img.shields.io/codecov/c/github/react-component/steps/master.svg?style=flat-square"></a>
    <a href="https://bundlephobia.com/package/@rc-component/steps"><img alt="bundle size" src="https://img.shields.io/bundlephobia/minzip/@rc-component/steps?style=flat-square"></a>
    <a href="https://github.com/umijs/dumi"><img alt="dumi" src="https://img.shields.io/badge/docs%20by-dumi-blue?style=flat-square"></a>
  </p>
</div>

<p align="center">English | <a href="./README.zh-CN.md">简体中文</a></p>


## Highlights

- Renders progress and navigation steps from a simple `items` array.
- Supports horizontal and vertical layouts, inline mode, custom icons, and status control.
- Provides semantic `classNames` and `styles` slots for stable theming.
- Keeps keyboard-accessible step changes when `onChange` is provided.

## Install

```bash
npm install @rc-component/steps
```

## Usage

```tsx pure
import Steps from '@rc-component/steps';
import '@rc-component/steps/assets/index.css';

export default () => (
  <Steps
    current={1}
    items={[
      { title: 'Create', content: 'Create an account' },
      { title: 'Verify', content: 'Verify email' },
      { title: 'Done', content: 'Start using the app' },
    ]}
  />
);
```

Online preview: https://steps.react-component.vercel.app/

## Examples

Run the local dumi site:

```bash
ut install
npm start
```

Then open `http://localhost:8000`.

## API

### Steps

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | string | - | Additional class name. |
| `classNames` | `Partial<Record<SemanticName, string>>` | - | Semantic class names for internal slots. |
| `components` | `{ root?: ComponentType; item?: ComponentType }` | - | Override root and item elements. |
| `current` | number | 0 | Current step index. |
| `iconRender` | `(originNode, info) => ReactNode` | - | Custom step icon renderer. |
| `initial` | number | 0 | Initial step index offset. |
| `itemRender` | `(originNode, info) => ReactNode` | - | Custom step item renderer. |
| `itemWrapperRender` | `(originNode) => ReactNode` | - | Custom step item wrapper renderer. |
| `items` | StepItem[] | [] | Step data. |
| `onChange` | `(current: number) => void` | - | Triggered when a clickable step changes. |
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Layout orientation. |
| `prefixCls` | string | `'rc-steps'` | Prefix class name. |
| `rootClassName` | string | - | Root class name. |
| `status` | `'error' \| 'process' \| 'finish' \| 'wait'` | `'process'` | Current step status. |
| `style` | React.CSSProperties | - | Root style. |
| `styles` | `Partial<Record<SemanticName, React.CSSProperties>>` | - | Semantic styles for internal slots. |
| `titlePlacement` | `'horizontal' \| 'vertical'` | `'horizontal'` | Title placement for horizontal steps. |

### StepItem

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | string | - | Item class name. |
| `classNames` | `Partial<Record<ItemSemanticName, string>>` | - | Semantic class names for this item. |
| `content` | React.ReactNode | - | Step content. |
| `description` | React.ReactNode | - | Deprecated. Use `content` instead. |
| `disabled` | boolean | false | Disable step click behavior. |
| `icon` | React.ReactNode | - | Custom step icon. |
| `onClick` | React.MouseEventHandler | - | Item click handler. |
| `status` | Status | - | Item status. |
| `style` | React.CSSProperties | - | Item style. |
| `styles` | `Partial<Record<ItemSemanticName, React.CSSProperties>>` | - | Semantic styles for this item. |
| `subTitle` | React.ReactNode | - | Subtitle. |
| `title` | React.ReactNode | - | Title. |

## Development

```bash
ut install
npm start
npm test
npm run tsc
npm run compile
npm run build
```

The dumi site runs at `http://localhost:8000` by default.

## Release

```bash
npm run prepublishOnly
```

The release flow is handled by `@rc-component/np` through the `rc-np` command after the package build.

## License

@rc-component/steps is released under the [MIT](./LICENSE) license.
