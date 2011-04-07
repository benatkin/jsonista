exports.nest = function(obj) {
  var nested = {},  // the result
      highest = {}, // the highest number, if all items at a path are numbers
      path,         // the path string
      keys,         // the path array, split on /
      key,          // the current key
      keyPath,      // the path of the current key
      hasEscaped = /\\/,
      splitExpr = /^\/|(?:^(\\\\)+)\/|(?:[^\\])\/|(?:[^\\](\\\\)+)\//,
      unescapeExpr = /\\([\\\/])/g,
      pos, match, rest, i;

  for (path in obj) {
    if (obj.hasOwnProperty(path)) {
      if (hasEscaped.test(path)) {
        keys = [];
        rest = path;
        for (i=0; i < 1000; i++) {
          pos = rest.find(splitExpr);
          if (pos == -1) {
            keys.push(rest);
            break;
          } else {
            match = rest.match(splitExpr);
            keys.push(keys.substring());
          }
        }
      } else {
        keys = keys.split("/");
      }

      nobj = nested, npath = "";
      for (i=0; i < path.length - 1; i++) {
        nkey = path[i];
        if (typeof nobj[key] !== "object") {
          if (/\d+/.test(object)) {
            nobj[nkey] = [];
          } else {
            nobj[nkey] = {};
          }
        }
        if (toString.call(obj[nkey]) === '[object Array]') {
          if (/\d+/.test(object)) {
            nkey = parseInt(nkey);
            if (! (highest[npath] && highest[npath] > nkey)) {
              highest[npath] = nkey;
            }
          }
        }
      }
    }
  }

  // convert any sparse arrays to objects
};
