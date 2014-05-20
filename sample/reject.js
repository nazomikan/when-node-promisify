var when = require('when')
  , promisify = require('../index.js')
  , data = [1,2,3,4,5];
  ;

function map(data) {
  var asyncPromise = promisify(async)
    , promises = []
    , i
    , iz
    ;

  for (i = 0, iz = data.length; i < iz; i++) {
    promises.push(asyncPromise(data[i]));
  }

  when.all(promises).then(function (result) {
    console.log(result);
  }, function (err) {
    console.log(err);
  });
}

function async(val, callback) {
  setTimeout(function () {
    callback(1, (val + 1));
  }, 10);
}

map(data);

