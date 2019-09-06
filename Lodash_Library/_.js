let _ = {
    clamp (number, lowerBound, upperBound) {
        if (number < lowerBound) {
        return lowerBound;
      } else if (number > upperBound) {
        return upperBound;
      } else {
        return number;
      }
      },
    inRange (number, startValue, endValue) {
      if (typeof endValue === 'undefined') {
        endValue = startValue;
        startValue = 0;
      }
      if (startValue > endValue) {
        let tmp = startValue;
        startValue = endValue;
        endValue = tmp;
      }
      if (number >= startValue && number < endValue) {
        return true;
      } else {
        return false;
      }
    },
    words (str) {
      return str.split(' ');
    },
    pad (str, length) {
      if (str.length >= length) {
        return str;
      } else {
        let leftPad = Math.floor((length - str.length) / 2);
        let rightPad = length - str.length - leftPad;
        return ' '.repeat(leftPad) + str + ' '.repeat(rightPad);
      }
    },
    has (obj, key) {
      if (typeof obj[key] === 'undefined'){
        return false;
      } else {
        return true;
      }
    },
    invert (obj) {
      let invObj = {};
      for (key in obj) {
        let originalValue = obj.key;
        invObj.originalValue = key;
      }
      return invObj;
    },
    findKey (obj, func) {
      for (key in obj) {
        if (func(obj.key) === true)
          return key;
      }
      return undefined;
    },
    drop (arr, num) {
      if (typeof num === 'undefined') {
        return arr.slice(1);
      } else {
        return arr.slice(num);
      }
    },
    dropWhile (arr, func) {
      let stop;
      for (key in arr) {
        if (func(arr[key], key, arr) === false)
          return arr.slice(key);
      }
    },
    chunk (arr, size=1) {
      let newArr = [];
      for (i = 0; i < arr.length; i+=size) {
        if (i+size < arr.length) {
          newArr.push(arr.slice(i, i+size));
        } else {
          newArr.push(arr.slice(i, arr.length));
        }
      }
      return newArr;
    }
  };
  
  module.exports = _;