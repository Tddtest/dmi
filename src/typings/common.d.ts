/**
 * @auth: dmx
 * @time: 2023/3/2
 * @func:
 * @params:
 * @return:
 * @updateTime:
 **/
type TStorageType = 'localStorage' | 'sessionStorage';

type TStorageListenersType = 'set' | 'remove' | 'clear';

type Ta<T = any> = Record<string, T>;

type Tn = Record<string, number>;

type Ts = Record<string, string>;

interface Window {
  globalVarName: string;
}

type FC<P = Ta> = React.FunctionComponent<P>;

type TFn<T = any[]> = (...args: T) => any;

/*
 * 以下 是对声明文件的用法举例
 * */

// 声明全局变量 declare var/let/const xxx
declare let num1: number;

// 声明全局类 declare class

// 声明全局方法 declare function

// 声明全局对象(含有子属性的)

// export 导出变量

// export namespace 导出对象(含有子属性的)

// 扩展全局变量 declare global
declare global {
  window.globalVarName = 2;
}

// /// <reference /> 三斜线指令
