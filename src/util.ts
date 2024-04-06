//  内部方法
/**  数据类型检查
 * @param {any} target
 */
export const checkType = (target: any) => {
  return Object.prototype.toString.call(target).slice(8, -1);
};

/** 查找对象的属性
 * @param {string} key
 */
export const shallowProperty = function (key: string) {
  return function (obj: { [k: string]: any }) {
    return obj == null ? void 0 : obj[key];
  };
};

/**  获取对象的 length 属性
 * @param {object}
 */
export const getLength = shallowProperty("length");

// 判断是否返回opp
export const result = function (instance: any, obj: any, host: any) {
  return instance._chain ? host(obj).chain() : obj;
};

// 根据 this 指向（context 参数）
// 以及 argCount 参数
// 二次操作返回一些回调、迭代方法

/**
 * @param {Function} func
 * @param {Any} context
 * @param {null | number} argCount
 *
 *
 */
export const optimizeCb = function (func: any, context: any, argCount?: any) {
  // 如果没有指定 this 指向，则返回原函数
  if (context === void 0) return func;

  switch (argCount == null ? 3 : argCount) {
    case 1:
      return function (value: any) {
        return func.call(context, value);
      };
    case 2:
      return function (value: any, other: any) {
        return func.call(context, value, other);
      };

    // 如果有指定 this，但没有传入 argCount 参数
    // 则执行以下 case
    // _.each、_.map
    case 3:
      return function (value: any, index: any, collection: any) {
        return func.call(context, value, index, collection);
      };

    // _.reduce、_.reduceRight
    case 4:
      return function (
        accumulator: any,
        value: any,
        index: any,
        collection: any
      ) {
        return func.call(context, accumulator, value, index, collection);
      };
  }

  return function () {
    return func.apply(context, arguments);
  };
};
