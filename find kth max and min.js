let arr = [2, 1, 4, 3, 6, 5, 7];

function findKthElm(arr, num) {
  let sorted = arr.sort();
  let value = sorted.length;
  let final = [];
  //[1, 2, 3, 4, 5, 6, 7];
  for (let i = 0; i < value; i++) {
    if (i + 1 === num) {
      final.push(sorted[i]);
    } else if (value - i + 1 === num + 1) {
      final.push(sorted[i]);
    }
  }
  return final;
}

findKthElm(arr, 2);
