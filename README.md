# Easy JSONP 

A minimal and lightweight JSONP implementation which is used to be a kind of cross domain solutions.

## Features

- Implement JSONP request from the browser

- Combine URL query parameters by default behavior

- Support the [Promise] API

- Limit JSONP request period

- Handle network error response

## Install

```bash
# using npm
npm i easy-jsonp
```

```bash
# using yarn
yarn add easy-jsonp
```

```html
# using script target
<script src="jsonp.js"></script>
```

## Usage

JSONP ***only*** support GET methods, same as `easy-JSONP`.

- The code below show you how to use package as a dependency

```js
// as a request dependency named jsonp
import jsonp from 'easy-jsonp'
const jsonp = require('easy-jsonp').default
```

```js
jsonp({
  url: 'http://localhost',
  // global function named `callback` will be invoked when JSONP response
  callback: 'callback', // any different name from request module
  timeout: 3000,
  params: {
    // eg. ?key0=0&key1=1...
    key0: 0,
    key1: 1
  }
})
  .then(res => console.log(res))
  .catch(err => console.error(err))
```

⚠️ ***Notice***: Parameter `callback` value ***MUST NOT*** be same as request module name (eg. dependency named `jsonp` above code), otherwise request module only works once and function named value of parameter `callback` will be reset to `null` (internal implementation) which means the same name request module will be also reset unexpectedly.

> For more customization capability, This package wouldn't convert `callback` to a new name to prevent unexpected reset.

```js
jsonp({
  // custom configuration
})
```

⚠️ ***Notice***: For same reason, parameter `callback` value ***MUST NOT*** be `jsonp`.


## Parameters

| options parameter | type | required | description |
| ----------------- | ---- | -------- | ----------- |
|   `url`  | `String` |           true           | JSONP request address |
| `timeout` | `Number` | false, default : `6000` milliseconds | how long after timeout error is emitted. `0` to disable |
| `callback`  | `String` | false, default : `'jsonpCallback'+Date.now()` | global callback function name which is used to handle JSONP response. |
| `params` |  `Object`  | false, default: `{}` | other parameters in query string parameters |

## Notice

- `Uncaught SyntaxError: Unexpected token :`error

It mostly doesn't support JSONP request when you are calling a JSON api. The difference between JSON api and JSONP is that  JSON api response with an object like `{ num: 1 }` (It will throw a error when client executed this response as a function. ). On the other hand, JSONP will respond with a function wrapped object like `callback({ num: 1 })` and we will get what we need when client executed this response as a function.

## Donate

If you like this plugin, scan the qrcodes below and send me some tips, thank you!

<table>
  <tr>
    <td><<img src="https://leeseean.github.io/my-original-songs/alipay.jpg" width="300px" /></td>
    <td><img src="https://leeseean.github.io/my-original-songs/wechat.jpg" width="300px" /></td>
  </tr>
</table>
