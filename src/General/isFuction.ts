import getTag from "../Internal/_getTag";

/**
 *
 * @param {any} target
 */

const isFunction = function (target: any): boolean {
  return getTag(target) === "[object Function]";
};

export default isFunction;
