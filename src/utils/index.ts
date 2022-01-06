// eslint-disable-next-line import/prefer-default-export
export const getMenuList = (delay: any) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const time = Date.now()
      if (time % 2 === 0) {
        resolve({
          code: 0,
          time,
        })
        // return
      } else {
        // eslint-disable-next-line prefer-promise-reject-errors
        reject({
          code: 500,
          time,
        })
      }
    }, delay)
  })
