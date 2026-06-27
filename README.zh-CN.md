<div align="center">
  <h1>@rc-component/steps</h1>
  <p><sub><img alt="Ant Design" height="14" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" style="vertical-align: -0.125em;" /> Ant Design 生态的一部分。</sub></p>
  <p>🚶 React 步骤条组件，支持状态、图标、进度和多种布局。</p>

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

- 从简单的 `items` 数组渲染进度和导航步骤。
- 支持水平和垂直布局、内联模式、自定义图标和状态控制。
- 提供语义 `classNames` 和 `styles` 插槽以实现稳定的主题。
- 当提供 `onChange` 时，保留键盘可访问的步骤更改。

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

在线预览：https://steps.react-component.vercel.app/

## API

### Steps

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `className` | string | - | 附加className。 |
| `classNames` | `Partial<Record<SemanticName, string>>` | - | 内部插槽的语义化 className。 |
| `components` | `{ root?: ComponentType; item?: ComponentType }` | - | 覆盖根元素和项目元素。 |
| `current` | number | 0 | 当前步骤索引。 |
| `iconRender` | `(originNode, info) => ReactNode` | - | 自定义步骤图标渲染器。 |
| `initial` | number | 0 | 初始步索引偏移。 |
| `itemRender` | `(originNode, info) => ReactNode` | - | 自定义步骤项渲染器。 |
| `itemWrapperRender` | `(originNode) => ReactNode` | - | 自定义步骤项包装渲染器。 |
| `items` | StepItem[] | [] | 步骤数据。 |
| `onChange` | `(current: number) => void` | - | 当可单击步骤发生更改时触发。 |
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Layout orientation. |
| `prefixCls` | string | `'rc-steps'` | 前缀className。 |
| `rootClassName` | string | - | 根className。 |
| `status` | `'error' \| 'process' \| 'finish' \| 'wait'` | `'process'` | 当前步骤状态。 |
| `style` | React.CSSProperties | - | 根样式。 |
| `styles` | `Partial<Record<SemanticName, React.CSSProperties>>` | - | 内部插槽的语义化样式。 |
| `titlePlacement` | `'horizontal' \| 'vertical'` | `'horizontal'` | 水平步骤的标题位置。 |

### StepItem

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `className` | string | - | 项目类别名称。 |
| `classNames` | `Partial<Record<ItemSemanticName, string>>` | - | 该项目的语义className称。 |
| `content` | React.ReactNode | - | 步骤内容。 |
| `description` | React.ReactNode | - | 已弃用。请改用 `content`。 |
| `disabled` | boolean | false | 禁用步骤单击行为。 |
| `icon` | React.ReactNode | - | 自定义步骤图标。 |
| `onClick` | React.MouseEventHandler | - | 项目单击处理程序。 |
| `status` | Status | - | 条目状态。 |
| `style` | React.CSSProperties | - | 项目样式。 |
| `styles` | `Partial<Record<ItemSemanticName, React.CSSProperties>>` | - | 该项目的语义样式。 |
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

包构建完成后，发布流程由 `@rc-component/np` 通过 `rc-np` 命令处理。

## 许可证

@rc-component/steps 基于 [MIT](./LICENSE.md) 许可证发布。
