const jsonp = ({
  url = '',
  params = {},
  timeout = 6000,
  callback = 'jsonpCallback'
}) => {
  //拼接url
  if (url.indexOf('?') !== -1) {
    url = url + '&';
  } else {
    url = url + '?';
  }
  let paramsToString = '';
  for (let key in params) {
    paramsToString += `&${key}=${encodeURIComponent(params[key])}`;
  }
  paramsToString = paramsToString.slice(1);
  url += paramsToString;
  callback = callback + String(new Date().getTime());
  url += `&callback=${callback}`;
  //url处理结束
  let timer; //timeout处理
  const script = document.createElement('script');
  script.src = url;

  function cleanup() {
    timer && clearTimeout(timer);
    document.head.removeChild(script);
    window[callback] = undefined;
  }
  return new Promise((resolve, reject) => {
    //timeout处理
    if (timeout) {
      timer = setTimeout(() => {
        reject({
          message: '请求超时',
          type: 'error'
        });
        cleanup();
      }, timeout);
    }
    //error处理
    script.onerror = (e) => {
      reject({
        message: '请检查url是否拼写正确或后端有无配置jsonp响应',
        type: 'error'
      });
      cleanup();
    }
    //正常处理
    window[callback] = (data) => {
      resolve(data);
      cleanup();
    };
    // 发起请求
    document.head.appendChild(script);
    //发起请求结束
  });
};

export default jsonp;