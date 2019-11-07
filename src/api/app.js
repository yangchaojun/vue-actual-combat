export const getAppName = () => {
  return new Promise((resolve, reject) => {
    const err = null;
    if (!err) {
      setTimeout(() => {
        resolve({
          code: 200,
          info: {
            appName: 'vue-course'
          }
        })
      }, 3000)
    } else {
      reject('错误信息')
    }
  })
}
