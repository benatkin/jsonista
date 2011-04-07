exports.flatten = function(obj) {
  var flattened = {},
      escapeExpr = /([\\\/])/g;

  var join = function(path, key) {
    if (escapeExpr.test(key)) {
      key = key.replace(escapeExpr, "\\$1");
    }
    return ((path === "") ? "" : path + "/") + key;
  };

  var flattenArray = function(arr, path) {
    for (var i=0; i < arr.length; i++) {
      flattenElement(arr, path, i);
    }
  };

  var flattenObject = function(obj, path) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        flattenElement(obj, path, key);
      }
    }
  };

  var flattenElement = function(obj, path, key) {
    if (toString.call(obj[key]) === '[object Array]') {
      flattenArray(obj[key], join(path, key));
    } else if (typeof obj[key] == "object") {
      flattenObject(obj[key], join(path, key));
    } else {
      flattened[join(path, key)] = obj[key];
    }
  };

  flattenObject(obj, "");
  return flattened;
};
