export function debounce(func, delay=100) {
    // 防抖函数。
    var timer = null;
    
    return (...args) => {
      clearTimeout(timer)
       timer = setTimeout(()=> {
        func.apply(this, args)
        console.log('刷新');
      }, delay)
    }
  }
