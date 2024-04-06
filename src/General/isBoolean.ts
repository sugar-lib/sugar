import getTag from "../Internal/_getTag";

/**
 *  @param {any} target
 */
const isBoolean = function (target: any): boolean {
  return getTag(target) === "[object Boolean]";
};

export default isBoolean;
