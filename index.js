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
  // 发起请求
  const script = document.createElement('script');
  script.src = url;
  document.head.appendChild(script);
  //发起请求结束

  function cleanup() {
    timer && clearTimeout(timer);
    window[callback] = undefined;
    document.head.removeChild(script);
  }

  return new Promise((resolve, reject) => {
    //timeout处理
    if (timeout) {
      timer = setTimeout(() => {
        reject(new Error('Timeout'));
        cleanup();
      }, timeout);
      return;
    }
    //正常处理
    window[callback] = (data) => {
      resolve(data);
      cleanup();
    };
  });
};

export default jsonp;