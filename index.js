var __defProp = Object.defineProperty
var __defNormalProp = (obj, key, value) =>
  key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : (obj[key] = value)
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== 'symbol' ? key + '' : key, value)
  return value
}
import numerify from 'numerify'
export { default as numerify } from 'numerify'
import numerifyBytes from 'numerify/lib/plugins/bytes.es.js'
import numerifyBps from 'numerify/lib/plugins/bps.es.js'
import moment from 'moment'
const isEmpty = (value) => {
  if (value === null) return true
  if (value === void 0) return true
  if (value === '') return true
  if (value === false) return true
  if (typeof value === 'number' && Number.isNaN(value)) return true
  if (Array.isArray(value) && !value.length) return true
  if (Object.prototype.toString.call(value) === '[object Object]' && !Object.keys(value).length) return true
  return false
}
function insert(string, subString, start) {
  return string.slice(0, start) + subString + string.slice(start)
}
var currency = {
  regexp: /\$/,
  format: function format(value, formatType, roundingFunction, numerify2) {
    var symbols = {
      before: formatType.match(/^([+|\-|(|\s|$]*)/)[0],
      after: formatType.match(/([+|\-|)|\s|$]*)$/)[0]
    }
    var symbol = void 0
    formatType = formatType.replace(/\s?\$\s?/, '')
    var output = numerify2._numberToFormat(value, formatType, roundingFunction)
    if (value >= 0) {
      symbols.before = symbols.before.replace(/[-(]/, '')
      symbols.after = symbols.after.replace(/[-)]/, '')
    } else if (value < 0 && !~symbols.before.indexOf('-') && !~symbols.before.indexOf('(')) {
      symbols.before = '-' + symbols.before
    }
    for (var i = 0; i < symbols.before.length; i++) {
      symbol = symbols.before[i]
      switch (symbol) {
        case '$':
          output = insert(output, '$', i)
          break
        case ' ':
          output = insert(output, ' ', i)
          break
      }
    }
    for (var _i = symbols.after.length - 1; _i >= 0; _i--) {
      symbol = symbols.after[_i]
      switch (symbol) {
        case '$':
          output =
            _i === symbols.after.length - 1 ? output + '$' : insert(output, '$', -(symbols.after.length - (1 + _i)))
          break
        case ' ':
          output =
            _i === symbols.after.length - 1 ? output + ' ' : insert(output, ' ', -(symbols.after.length - (1 + _i)))
          break
      }
    }
    return output
  }
}
numerify.register('bytes', numerifyBytes)
numerify.register('bps', numerifyBps)
numerify.register('currency', currency)
const formatCurrencyByThousand = (value) => numerify(value, '$0,0.00')
const formatNumberByThousand = (value) => numerify(value, '0,0.00')
const prefixDollar = (value) => `$${value}`
const preciseToZeroDecimalsGB = (value) => {
  if (value === 0) return '0GB'
  return `${numerify(value, '0b')}`
}
const preciseToTwoDecimalsGB = (value) => {
  if (value === 0) return '0.00GB'
  return `${numerify(value, '0.00b')}`
}
const preciseToZeroDecimalsGiB = (value) => {
  if (value === 0) return '0B'
  return `${numerify(value, '0ib')}`
}
const preciseToTwoDecimalsGiB = (value) => {
  if (value === 0) return '0.00B'
  return `${numerify(value, '0.00ib')}`
}
const preciseToZeroDecimalsBPS = (value) => {
  if (value === 0) return '0bps'
  return `${numerify(value, '0b')}ps`.replace('B', 'b')
}
const preciseToTwoDecimalsBPS = (value) => {
  if (value === 0) return '0.00bps'
  return `${numerify(value, '0.00b')}ps`.replace('B', 'b')
}
const preciseToTwoDecimalsGBPS = (value) => {
  if (value === 0) return '0.00Gbps'
  return `${numerify(value, '0.00b')}ps`.replace('B', 'b')
}
const preciseToZeroDecimalsIBPS = (value) => {
  if (value === 0) return '0bps'
  return `${numerify(value, '0ib')}ps`.replace('B', 'b')
}
const preciseToTwoDecimalsIBPS = (value) => {
  if (value === 0) return '0.00bps'
  return `${numerify(value, '0.00ib')}ps`.replace('B', 'b')
}
const preciseToTwoDecimalsGiBPS = (value) => {
  if (value === 0) return '0.00Gbps'
  return `${numerify(value, '0.00ib')}ps`.replace('B', 'b')
}
function download(data, filename = 'download', mime = 'application/octet-stream', bom) {
  const blobData = typeof bom !== 'undefined' ? [bom, data] : [data]
  const blob = new Blob(blobData, { type: mime })
  if (typeof window.navigator.msSaveBlob !== 'undefined') {
    window.navigator.msSaveBlob(blob, filename)
  } else {
    const blobURL = window.URL.createObjectURL(blob)
    const tempLink = document.createElement('a')
    tempLink.style.display = 'none'
    tempLink.href = blobURL
    tempLink.setAttribute('download', filename)
    if (typeof tempLink.download === 'undefined') {
      tempLink.setAttribute('target', '_blank')
    }
    document.body.appendChild(tempLink)
    tempLink.click()
    document.body.removeChild(tempLink)
    window.URL.revokeObjectURL(blobURL)
  }
}
const downloadUrl = (url, fileName) => {
  let link = document.createElement('a')
  link.style.display = 'none'
  link.target = '_blank'
  link.href = url
  link.setAttribute('download', fileName)
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
function makeMap(str) {
  var map = Object.create(null)
  var list = str.split(',')
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true
  }
  return function (val) {
    return map[val]
  }
}
function arrayValueToJoinedString(array) {
  return array.map((item) => item.value).join(',')
}
function arrayValueToArrayString(array) {
  return array.map((item) => item.value)
}
function arrayValueToMap(array) {
  return array.reduce((acc, item) => {
    acc.set(item.value, item.text)
    return acc
  }, new Map())
}
function arrayValueToObject(array) {
  return array.reduce((acc, item) => {
    acc[item.value] = item.text
    return acc
  }, Object.create(null))
}
function dictCodeToAntdOptions(array) {
  return array.map((item) => {
    item.value = item.code
    item.label = item.text
    delete item.code
    delete item.text
    return item
  })
}
function idArrayToAntdOptions(array) {
  return array.map((item) => {
    item.label = item.value
    item.value = item.id
    delete item.id
    return item
  })
}
const textArrayToAntdTreeNode = (options) => {
  return options.map((option) => ({ key: option.value, value: option.value, title: option.text }))
}
const textArrayToAntdOptions = (options) => {
  return options.map((option) => ({ label: option.text, value: option.value }))
}
const $ = function (query) {
  return document.querySelector(query)
}
const $$ = function (query) {
  return document.querySelectorAll(query)
}
const setTimeoutHelpers = (time, flag = true, resolveResult, rejectResult) => {
  return new Promise((resolve, reject) => {
    window.setTimeout(() => {
      flag ? resolve(resolveResult) : reject(rejectResult)
    }, time)
  })
}
const noop = () => { }
const equal = (a) => a
const stringify$1 = (value) => JSON.stringify(value, null, 2)
const cloneJSON = (json) => JSON.parse(JSON.stringify(json))
const traverseTree = (tree, fn) => {
  return tree.map((node) => {
    const end = fn(node, tree)
    // if (!end) node.children ? traverseTree(node.children, fn) : null
    if (!end && node.children) traverseTree(node.children, fn)
  })
}
const traverse = (node, fn) => {
  const end = fn(node)
  // if (!end) node.children ? node.children.map((child) => traverse(child, fn)) : null
  if (!end && node.children) node.children.forEach((child) => traverse(child, fn))
}
const snake2camel = (data) => {
  if (typeof data != 'object' || !data) return data
  if (Array.isArray(data)) {
    return data.map((item) => snake2camel(item))
  }
  const newData = {}
  for (let key in data) {
    let newKey = key.replace(/_([a-z])/g, (p, m) => m.toUpperCase())
    newData[newKey] = snake2camel(data[key])
  }
  return newData
}
const camel2snake = (data) => {
  if (typeof data != 'object' || !data) return data
  if (Array.isArray(data)) {
    return data.map((item) => camel2snake(item))
  }
  const newData = {}
  for (let key in data) {
    let newKey = key.replace(/([A-Z])/g, (p, m) => `_${m.toLowerCase()}`)
    newData[newKey] = camel2snake(data[key])
  }
  return newData
}
const setTimeout = (time, flag = true, resolveResult, rejectResult) => {
  return new Promise((resolve, reject) => {
    window.setTimeout(() => {
      flag ? resolve(resolveResult) : reject(rejectResult)
    }, time)
  })
}
class QueueNode {
  constructor(value) {
    this.value = value
    this.next = null
  }
}
class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }
  enqueue(value) {
    const newNode = new QueueNode(value)
    if (this.size === 0) {
      this.first = newNode
      this.last = newNode
    } else {
      this.last.next = newNode
      this.last = newNode
    }
    this.size++
    return this.value
  }
  dequeue() {
    if (this.size === 0) return false
    const dequeuedNode = this.first
    const newFirst = this.first.next
    if (!newFirst) {
      this.last = newFirst
    }
    this.first = newFirst
    dequeuedNode.next = null
    this.size--
    return dequeuedNode.value
  }
}
class Subject {
  constructor() {
    __publicField(this, 'observers', new Set())
  }
  subscribe(observer) {
    this.observers.add(observer)
  }
  unsubscribe(observer) {
    this.observers.delete(observer)
  }
  notify(message, ...args) {
    this.observers.forEach((observer) => {
      observer.update(message, ...args)
    })
  }
}
class Observer {
  constructor(name) {
    this.name = name
  }
  update(message) {
    console.log(message + ' ' + this.name)
  }
}
const fiveMinutes = Object.freeze({ label: '5\u5206\u949F', value: '5m' })
const sixHours = Object.freeze({ label: '6\u5C0F\u65F6', value: '6h' })
const twelveHours = Object.freeze({ label: '12\u5C0F\u65F6', value: '12h' })
const oneDay = Object.freeze({ label: '1\u5929', value: '1d' })
const getGranularityOptions = function (startTime, endTime) {
  startTime = moment(startTime)
  endTime = moment(endTime)
  const diff = endTime.diff(startTime)
  if (diff <= 864e5) {
    return [fiveMinutes]
  }
  if (diff > 864e5 && diff <= 7 * 864e5) {
    return [sixHours, twelveHours]
  }
  if (diff > 7 * 864e5 && diff <= 15 * 864e5) {
    return [sixHours, twelveHours, oneDay]
  }
  if (diff > 15 * 864e5 && diff <= 30 * 864e5) {
    return [twelveHours, oneDay]
  }
  if (diff > 30 * 864e5 && diff <= 90 * 864e5) {
    return [oneDay]
  }
  if (diff > 90 * 864e5) {
    throw new Error('\u4E0D\u652F\u6301\u8D85\u8FC7 90 \u5929')
  }
}
var getRandomValues
var rnds8 = new Uint8Array(16)
function rng() {
  if (!getRandomValues) {
    getRandomValues =
      (typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
      (typeof msCrypto !== 'undefined' &&
        typeof msCrypto.getRandomValues === 'function' &&
        msCrypto.getRandomValues.bind(msCrypto))
    if (!getRandomValues) {
      throw new Error(
        'crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported'
      )
    }
  }
  return getRandomValues(rnds8)
}
var REGEX =
  /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i
function validate(uuid) {
  return typeof uuid === 'string' && REGEX.test(uuid)
}
var byteToHex = []
for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 256).toString(16).substr(1))
}
function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0
  var uuid = (
    byteToHex[arr[offset + 0]] +
    byteToHex[arr[offset + 1]] +
    byteToHex[arr[offset + 2]] +
    byteToHex[arr[offset + 3]] +
    '-' +
    byteToHex[arr[offset + 4]] +
    byteToHex[arr[offset + 5]] +
    '-' +
    byteToHex[arr[offset + 6]] +
    byteToHex[arr[offset + 7]] +
    '-' +
    byteToHex[arr[offset + 8]] +
    byteToHex[arr[offset + 9]] +
    '-' +
    byteToHex[arr[offset + 10]] +
    byteToHex[arr[offset + 11]] +
    byteToHex[arr[offset + 12]] +
    byteToHex[arr[offset + 13]] +
    byteToHex[arr[offset + 14]] +
    byteToHex[arr[offset + 15]]
  ).toLowerCase()
  if (!validate(uuid)) {
    throw TypeError('Stringified UUID is invalid')
  }
  return uuid
}
function v4(options, buf, offset) {
  options = options || {}
  var rnds = options.random || (options.rng || rng)()
  rnds[6] = (rnds[6] & 15) | 64
  rnds[8] = (rnds[8] & 63) | 128
  if (buf) {
    offset = offset || 0
    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i]
    }
    return buf
  }
  return stringify(rnds)
}
export {
  $,
  $$,
  Observer,
  Queue,
  Subject,
  arrayValueToArrayString,
  arrayValueToJoinedString,
  arrayValueToMap,
  arrayValueToObject,
  camel2snake,
  cloneJSON,
  dictCodeToAntdOptions,
  download,
  downloadUrl,
  equal,
  formatCurrencyByThousand,
  formatNumberByThousand,
  getGranularityOptions,
  idArrayToAntdOptions,
  isEmpty,
  makeMap,
  noop,
  preciseToTwoDecimalsBPS,
  preciseToTwoDecimalsGB,
  preciseToTwoDecimalsGBPS,
  preciseToTwoDecimalsGiB,
  preciseToTwoDecimalsGiBPS,
  preciseToTwoDecimalsIBPS,
  preciseToZeroDecimalsBPS,
  preciseToZeroDecimalsGB,
  preciseToZeroDecimalsGiB,
  preciseToZeroDecimalsIBPS,
  prefixDollar,
  setTimeout,
  setTimeoutHelpers,
  snake2camel,
  stringify$1 as stringify,
  textArrayToAntdOptions,
  textArrayToAntdTreeNode,
  traverse,
  traverseTree,
  v4 as uuid
}
