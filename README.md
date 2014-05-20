#when-node-promisify

transform when#promise from node style function.

[when](https://www.npmjs.org/package/when)

```javascript

  var promisify = require('when-node-promisify')
    , somePromiseFunc = promisify(someAsyncFunc)
    ;

  function someAsyncFunc(data, next) {
    // ...
    next(null, data);
  }

  somePromiseFunc(1).then(function (data) {
     // success
  }, function (err) {
     // err
  });
```
