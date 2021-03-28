const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

// implemente seus testes aqui

// implemente seus testes aqui
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3),[1,2,4], 'O array deveria ser = [1,2,4]');
assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3),[1,2,3,4], 'O array deveria ser = [1,2,4]');
const array = [3,4,5,6];
myRemoveWithoutCopy(array,6);
assert.deepStrictEqual(array,[3,4,5], 'O array deveria ser = [3,4,5]');
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1,2,3,4]);
