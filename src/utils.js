export default {
  /**
   * @description: 函数防抖
   * @param {Function, Number}
   * @return: void
   */
  debounceTimeout: null,
  debounce(fn, wait= 500) {
    if (this.debounceTimeout !== null) clearTimeout(this.debounceTimeout)
    this.debounceTimeout = setTimeout(fn, wait)
  },
}