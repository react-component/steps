<div align="center">
  <h1>@rc-component/steps</h1>
  <p><sub>Ant Design 生态的一部分。</sub></p>
  <p>👣 React 步骤条组件，支持状态、图标、进度和多种布局。</p>

  <p>
    <a href="https://www.npmjs.com/package/@rc-component/steps"><img src="https://img.shields.io/npm/v/@rc-component/steps.svg?style=flat-square" alt="npm version" /></a>
    <a href="https://www.npmjs.com/package/@rc-component/steps"><img src="https://img.shields.io/npm/dm/@rc-component/steps.svg?style=flat-square" alt="npm downloads" /></a>
    <a href="https://github.com/react-component/steps/actions"><img src="https://github.com/react-component/steps/actions/workflows/react-component-ci.yml/badge.svg" alt="CI" /></a>
    <a href="https://codecov.io/gh/react-component/steps"><img src="https://img.shields.io/codecov/c/github/react-component/steps/master.svg?style=flat-square" alt="Codecov" /></a>
    <a href="https://bundlephobia.com/package/@rc-component/steps"><img src="https://badgen.net/bundlephobia/minzip/@rc-component/steps" alt="bundle size" /></a>
    <a href="https://github.com/umijs/dumi"><img src="https://img.shields.io/badge/docs%20by-dumi-blue?style=flat-square" alt="dumi" /></a>
  </p>
</div>

<p align="center"><a href="./README.md">English</a> | 简体中文</p>


## 特性

- Renders progress and navigation steps from a simple `items` array.
- 支持 horizontal and vertical layouts, inline mode, custom icons, and status control.
- 提供 semantic `classNames` and `styles` slots for stable theming.
- 保留 keyboard-accessible step changes when `onChange` is provided.

## 安装

```bash
npm install @rc-component/steps
```

## 使用

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

## API

### Steps

| 名称 | 类型 | 默认值 | 说明 |
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

| 名称 | 类型 | 默认值 | 说明 |
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

## 本地开发

```bash
npm install
npm start
npm test
npm run tsc
npm run compile
npm run build
```

## 发布

```bash
npm run prepublishOnly
```

The release flow is handled by `@rc-component/np` through the `rc-np` command after the package build.

## 许可证

@rc-component/steps is released under the [MIT](./LICENSE.md) license.
