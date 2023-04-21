/**
 * @auth: dmx
 * @time: 2023/4/21
 * @func:
 * @params:
 * @return:
 * @updateTime:
 **/
import { whenProd, getPlugin, pluginByName } from '@craco/craco';
import type { CracoConfig } from '@craco/types';

const path = require('path');
const CraLessPlugin = require('craco-less');
const CraModulesPlugin = require('craco-css-modules');
const WebpackBar = require('webpackbar');
const { name } = require('./package.json');

const pathResolve = (pathUrl: string) => path.resolve(__dirname, pathUrl);

const appConfig: CracoConfig = {
  reactScriptsVersion: 'react-scripts' /* (default value) */,
  webpack: {
    alias: {
      '@': pathResolve('src'),
      assets: pathResolve('src/assets'),
      components: pathResolve('src/components'),
      constants: pathResolve('src/constants'),
      hooks: pathResolve('src/hooks'),
      mocks: pathResolve('src/mocks'),
      routes: pathResolve('src/routes'),
      pages: pathResolve('src/pages'),
      layout: pathResolve('src/layout'),
      utils: pathResolve('src/utils'),
      api: pathResolve('src/api'),
    },
    configure(webpackConfig) {
      const config = { ...webpackConfig };
      let cdn: Record<string, any> = { js: [], css: [] };

      // 配置扩展扩展名
      if (config.resolve && Array.isArray(config.resolve.extensions)) {
        config.resolve.extensions = [...config.resolve.extensions, ...['.scss', '.css']];
      }
      // 接入微前端框架 qiankun 的配置,不接入微前端可以不需要
      if (config.output) {
        config.output.library = `${name}-[name]`;
        config.output.libraryTarget = 'umd';
        config.output.globalObject = 'window';
      }

      // 生产环境下
      whenProd(() => {
        // 不生成map文件
        config.devtool = false;
        // 只会在生产环境执行 配置cdn外部资源不打包
        config.externals = {
          react: 'React',
          'react-dom': 'ReactDOM',
        };

        //分割第三方库打包，自定义webpack 配置
        config.optimization = {
          ...config.optimization,
          splitChunks: {
            chunks: 'all', // string = 'async' function (chunk) 当提供一个字符串，有效值为 all，async 和 initial。
            minSize: 20000, // 生成 chunk 的最小体积（以 bytes 为单位）。
            maxAsyncRequests: 30, // 最大异步请求数
            maxInitialRequests: 30, // 页面初始化最大异步请求数
            automaticNameDelimiter: '~', // 解决命名冲突
            // name: true值将会自动根据切割之前的代码块和缓存组键值(key)自动分配命名,否则就需要传入一个String或者function.
            name: name,
            cacheGroups: {
              [`${name}.common`]: {
                name: `${name}.common`,
                chunks: 'all',
                test: /[\\/]node_modules[\\/](react|react-dom|react-router|redux-saga|dva|react-router-dom|draft-js\/lib|core-js|@antv\/data-set\/build|)[\\/]/,
                priority: -10,
              },
              [`${name}.ant`]: {
                name: `${name}.ant`,
                chunks: 'all',
                test: /[\\/]node_modules[\\/](@ant-design|antd|moment|immutable\/dist|rc-calendar\/es|braft-finder\/dist|lodash|rc-tree\/es)[\\/]/,
                priority: -11,
              },
              [`${name}.echarts`]: {
                name: `${name}.echarts`,
                chunks: 'all',
                test: /[\\/]node_modules[\\/](echarts)[\\/]/,
                priority: 10,
              },
            },
          },
        };

        cdn = {
          js: [
            'https://cdn.bootcdn.net/ajax/libs/react/18.2.0/umd/react.production.min.js',
            'https://cdn.bootcdn.net/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js',
          ],
        };

        const { isFound, match } = getPlugin(webpackConfig, pluginByName('HtmlWebpackPlugin'));
        if (isFound && match) {
          // 找到了html的插件
          (match as any).userOptions.cdn = cdn;
          // match.options.cdn = cdn
        }
      });

      return config;
    },
    plugins: {
      add: [
        // 打包依赖插件分析webpack-bundle-analyzer
        // 构建进度
        new WebpackBar({
          name: `${name} is building - `,
          color: 'red',
          profile: true,
        }),
      ],
    },
  },
  devServer: {
    // 本地服务的端口号
    // port: 3001,
    // 本地服务的响应头设置
    headers: {
      // 允许跨域
      'Access-Control-Allow-Origin': '*',
    },
  },
  plugins: [
    {
      plugin: CraLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            globalVars: {
              // 自动引入变量
              hack: [
                `
                  true;
                  @import '~assets/style/var.less';
                `,
              ],
            },
          },
        },
      },
    },
    { plugin: CraModulesPlugin },
  ],
};

export default appConfig;
