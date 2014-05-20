var when = require('when')
  , slice = Array.prototype.slice
  ;

module.exports = function (asyncFunc, receiver, argLength) {
  return function () {
    var defer = when.defer()
      , args = slice.call(arguments, 0, (argLength || asyncFunc.length) - 1)
      ;

    args.push(function (err) {
      var result = slice.call(arguments, 1)
        ;

      if (err) {
        return defer.reject(err);
      }

      defer.resolve.apply(defer, result);
    });

    asyncFunc.apply(receiver, args);

    return defer.promise;
  };
};
