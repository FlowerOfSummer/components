import { message } from 'ant-design-vue'
export const errorHandling = async (fn: any, args: any, finallyCallback?: (res: any) => any,
  errorCallBack?: (res?: any) => void) => {
  try {
    const res = await fn(args)
    if (res.code === 0) {
      finallyCallback && finallyCallback(res)
      return res
    } else {
      // code错误时的回调
      if (errorCallBack) {
        errorCallBack(res)
      } else {
        message.error(res.msg || '报错了')
      }
    }
  } catch (err: any) {
    // request加了重复请求拦截，这里可能会有请求cancel的报错
    console.error('errorHandling:', err)
    if (err.code !== 'ERR_CANCELED') {
      errorCallBack && errorCallBack(err)
    }
  }
}
