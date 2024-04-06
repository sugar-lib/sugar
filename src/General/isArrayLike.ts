import { MAX_ARRAY_INDEX } from '../constants'
import { getLength } from '../util'

/**
 * 判断是否是 ArrayLike Object
 * 类数组，即拥有 length 属性并且 length 属性值为 Number 类型的元素
 * 包括数组、arguments、HTML Collection 以及 NodeList 等等
 * @param {collection}
 */
const isArrayLike = (collection: { [k: string]: any }) => {
  let length = getLength(collection)
  return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX
}

export default isArrayLike