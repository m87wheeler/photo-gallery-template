export const sortEveryNth = (arr, n) => {
  let newArr = []

  let base = 0

  while (base < n - 1) {
    for (let i = base; i < arr.length; i += n) {
      newArr.push(arr[i])
    }
    base += 1
  }
  return newArr
}
