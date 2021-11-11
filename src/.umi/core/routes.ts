// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/Users/jilin/projects/antd/rc-steps/node_modules/_@umijs_runtime@3.5.20@@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
    {
      path: '/~demos/:uuid',
      layout: false,
      wrappers: [
        require('/Users/jilin/projects/antd/rc-steps/node_modules/_@umijs_preset-dumi@1.1.31@@umijs/preset-dumi/lib/theme/layout')
          .default,
      ],
      component: (props) => {
        const {
          default: getDemoRenderArgs,
        } = require('/Users/jilin/projects/antd/rc-steps/node_modules/_@umijs_preset-dumi@1.1.31@@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs');
        const { default: Previewer } = require('dumi-theme-default/es/builtins/Previewer.js');
        const { default: demos } = require('@@/dumi/demos');
        const { usePrefersColor } = require('dumi/theme');

        const renderArgs = getDemoRenderArgs(props, demos);

        // for listen prefers-color-schema media change in demo single route
        usePrefersColor();

        switch (renderArgs.length) {
          case 1:
            // render demo directly
            return renderArgs[0];

          case 2:
            // render demo with previewer
            return React.createElement(Previewer, renderArgs[0], renderArgs[1]);

          default:
            return `Demo ${props.match.params.uuid} not found :(`;
        }
      },
    },
    {
      path: '/_demos/:uuid',
      redirect: '/~demos/:uuid',
    },
    {
      __dumiRoot: true,
      layout: false,
      path: '/',
      wrappers: [
        require('/Users/jilin/projects/antd/rc-steps/node_modules/_@umijs_preset-dumi@1.1.31@@umijs/preset-dumi/lib/theme/layout')
          .default,
        require('/Users/jilin/projects/antd/rc-steps/node_modules/_@umijs_preset-dumi@1.1.31@@umijs/preset-dumi/node_modules/dumi-theme-default/es/layout.js')
          .default,
      ],
      routes: [
        {
          path: '/',
          component: require('/Users/jilin/projects/antd/rc-steps/README.md').default,
          exact: true,
          meta: {
            locale: 'en-US',
            order: null,
            filePath: 'README.md',
            updatedTime: 1591338836000,
            slugs: [
              {
                depth: 1,
                value: 'rc-steps',
                heading: 'rc-steps',
              },
              {
                depth: 2,
                value: 'Usage',
                heading: 'usage',
              },
              {
                depth: 2,
                value: 'Example',
                heading: 'example',
              },
              {
                depth: 2,
                value: 'API',
                heading: 'api',
              },
              {
                depth: 3,
                value: 'Steps.Step',
                heading: 'stepsstep',
              },
              {
                depth: 2,
                value: 'Development',
                heading: 'development',
              },
              {
                depth: 2,
                value: 'License',
                heading: 'license',
              },
            ],
            title: 'rc-steps',
          },
          title: 'rc-steps',
        },
        {
          path: '/demo/alternative-label',
          component: require('/Users/jilin/projects/antd/rc-steps/docs/demo/alternativeLabel.md')
            .default,
          exact: true,
          meta: {
            filePath: 'docs/demo/alternativeLabel.md',
            updatedTime: 1636622059787,
            slugs: [
              {
                depth: 2,
                value: 'alternativeLabel',
                heading: 'alternativelabel',
              },
            ],
            title: 'alternativeLabel',
            group: {
              path: '/demo',
              title: 'Demo',
            },
          },
          title: 'alternativeLabel - rc-steps',
        },
        {
          path: '/demo/composable',
          component: require('/Users/jilin/projects/antd/rc-steps/docs/demo/composable.md').default,
          exact: true,
          meta: {
            filePath: 'docs/demo/composable.md',
            updatedTime: 1636622059787,
            slugs: [
              {
                depth: 2,
                value: 'composable',
                heading: 'composable',
              },
            ],
            title: 'composable',
            group: {
              path: '/demo',
              title: 'Demo',
            },
          },
          title: 'composable - rc-steps',
        },
        {
          path: '/demo/custom-svg-icon',
          component: require('/Users/jilin/projects/antd/rc-steps/docs/demo/custom-svg-icon.md')
            .default,
          exact: true,
          meta: {
            filePath: 'docs/demo/custom-svg-icon.md',
            updatedTime: 1636622059788,
            slugs: [
              {
                depth: 2,
                value: 'custom-svg-icon',
                heading: 'custom-svg-icon',
              },
            ],
            title: 'custom-svg-icon',
            group: {
              path: '/demo',
              title: 'Demo',
            },
          },
          title: 'custom-svg-icon - rc-steps',
        },
        {
          path: '/demo/custom-icon',
          component: require('/Users/jilin/projects/antd/rc-steps/docs/demo/customIcon.md').default,
          exact: true,
          meta: {
            filePath: 'docs/demo/customIcon.md',
            updatedTime: 1636622059788,
            slugs: [
              {
                depth: 2,
                value: 'customIcon',
                heading: 'customicon',
              },
            ],
            title: 'customIcon',
            group: {
              path: '/demo',
              title: 'Demo',
            },
          },
          title: 'customIcon - rc-steps',
        },
        {
          path: '/demo/dynamic',
          component: require('/Users/jilin/projects/antd/rc-steps/docs/demo/dynamic.md').default,
          exact: true,
          meta: {
            filePath: 'docs/demo/dynamic.md',
            updatedTime: 1636622059787,
            slugs: [
              {
                depth: 2,
                value: 'dynamic',
                heading: 'dynamic',
              },
            ],
            title: 'dynamic',
            group: {
              path: '/demo',
              title: 'Demo',
            },
          },
          title: 'dynamic - rc-steps',
        },
        {
          path: '/demo/error-step',
          component: require('/Users/jilin/projects/antd/rc-steps/docs/demo/errorStep.md').default,
          exact: true,
          meta: {
            filePath: 'docs/demo/errorStep.md',
            updatedTime: 1636622059787,
            slugs: [
              {
                depth: 2,
                value: 'errorStep',
                heading: 'errorstep',
              },
            ],
            title: 'errorStep',
            group: {
              path: '/demo',
              title: 'Demo',
            },
          },
          title: 'errorStep - rc-steps',
        },
        {
          path: '/demo/nav-base',
          component: require('/Users/jilin/projects/antd/rc-steps/docs/demo/nav-base.md').default,
          exact: true,
          meta: {
            filePath: 'docs/demo/nav-base.md',
            updatedTime: 1636622059787,
            slugs: [
              {
                depth: 2,
                value: 'nav-base',
                heading: 'nav-base',
              },
            ],
            title: 'nav-base',
            group: {
              path: '/demo',
              title: 'Demo',
            },
          },
          title: 'nav-base - rc-steps',
        },
        {
          path: '/demo/next-step',
          component: require('/Users/jilin/projects/antd/rc-steps/docs/demo/nextStep.md').default,
          exact: true,
          meta: {
            filePath: 'docs/demo/nextStep.md',
            updatedTime: 1636622059787,
            slugs: [
              {
                depth: 2,
                value: 'nextStep',
                heading: 'nextstep',
              },
            ],
            title: 'nextStep',
            group: {
              path: '/demo',
              title: 'Demo',
            },
          },
          title: 'nextStep - rc-steps',
        },
        {
          path: '/demo/progress-dot',
          component: require('/Users/jilin/projects/antd/rc-steps/docs/demo/progressDot.md')
            .default,
          exact: true,
          meta: {
            filePath: 'docs/demo/progressDot.md',
            updatedTime: 1636622059787,
            slugs: [
              {
                depth: 2,
                value: 'progressDot',
                heading: 'progressdot',
              },
            ],
            title: 'progressDot',
            group: {
              path: '/demo',
              title: 'Demo',
            },
          },
          title: 'progressDot - rc-steps',
        },
        {
          path: '/demo/simple',
          component: require('/Users/jilin/projects/antd/rc-steps/docs/demo/simple.md').default,
          exact: true,
          meta: {
            filePath: 'docs/demo/simple.md',
            updatedTime: 1636622059787,
            slugs: [
              {
                depth: 2,
                value: 'simple',
                heading: 'simple',
              },
            ],
            title: 'simple',
            group: {
              path: '/demo',
              title: 'Demo',
            },
          },
          title: 'simple - rc-steps',
        },
        {
          path: '/demo/small-size',
          component: require('/Users/jilin/projects/antd/rc-steps/docs/demo/smallSize.md').default,
          exact: true,
          meta: {
            filePath: 'docs/demo/smallSize.md',
            updatedTime: 1636622059787,
            slugs: [
              {
                depth: 2,
                value: 'smallSize',
                heading: 'smallsize',
              },
            ],
            title: 'smallSize',
            group: {
              path: '/demo',
              title: 'Demo',
            },
          },
          title: 'smallSize - rc-steps',
        },
        {
          path: '/demo/step-icon',
          component: require('/Users/jilin/projects/antd/rc-steps/docs/demo/stepIcon.md').default,
          exact: true,
          meta: {
            filePath: 'docs/demo/stepIcon.md',
            updatedTime: 1636622059787,
            slugs: [
              {
                depth: 2,
                value: 'stepIcon',
                heading: 'stepicon',
              },
            ],
            title: 'stepIcon',
            group: {
              path: '/demo',
              title: 'Demo',
            },
          },
          title: 'stepIcon - rc-steps',
        },
        {
          path: '/demo/vertical',
          component: require('/Users/jilin/projects/antd/rc-steps/docs/demo/vertical.md').default,
          exact: true,
          meta: {
            filePath: 'docs/demo/vertical.md',
            updatedTime: 1636622059787,
            slugs: [
              {
                depth: 2,
                value: 'vertical',
                heading: 'vertical',
              },
            ],
            title: 'vertical',
            group: {
              path: '/demo',
              title: 'Demo',
            },
          },
          title: 'vertical - rc-steps',
        },
        {
          path: '/demo/vertical-small',
          component: require('/Users/jilin/projects/antd/rc-steps/docs/demo/verticalSmall.md')
            .default,
          exact: true,
          meta: {
            filePath: 'docs/demo/verticalSmall.md',
            updatedTime: 1636622059787,
            slugs: [
              {
                depth: 2,
                value: 'verticalSmall',
                heading: 'verticalsmall',
              },
            ],
            title: 'verticalSmall',
            group: {
              path: '/demo',
              title: 'Demo',
            },
          },
          title: 'verticalSmall - rc-steps',
        },
        {
          path: '/demo',
          meta: {},
          exact: true,
          redirect: '/demo/alternative-label',
        },
      ],
      title: 'rc-steps',
      component: (props) => props.children,
    },
  ];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
