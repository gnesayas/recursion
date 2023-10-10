(function () {
  function fibs(n) {
    result = [];
    let a = 0;
    let b = 1;
    for (let i = 0; i < n; i++) {
      result.push(a);
      const temp = a;
      a = b;
      b = temp + b;
    }
    return result;
  }

  function fibsRec(n) {
    if (n <= 0) {
        return [];
    } else if (n === 1) {
        return [0];
    } else if (n === 2) {
        return [0, 1];
    }
    const result = fibsRec(n - 1);
    result.push(result[result.length - 2] + result[result.length - 1]);
    return result;
  }

  console.log(fibs(25));
  console.log(fibsRec(25));

  function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    const sortedLeftHalf = mergeSort(arr.slice(0, arr.length/2));
    const sortedRightHalf = mergeSort(arr.slice(arr.length/2, arr.length));
    
    let i = 0;
    let j = 0;
    let k = 0;
    while (i < sortedLeftHalf.length && j < sortedRightHalf.length) {
        if (sortedLeftHalf[i] < sortedRightHalf[j]) {
            arr[k] = sortedLeftHalf[i];
            i++;
        } else {
            arr[k] = sortedRightHalf[j];
            j++;
        }
        k++;
    }
    while (i < sortedLeftHalf.length) {
        arr[k] = sortedLeftHalf[i];
        i++;
        k++;
    }
    while (j < sortedRightHalf.length) {
        arr[k] = sortedRightHalf[j];
        j++;
        k++;
    }
    return arr;
  }

  const numbers = Array.from({length: 100}, () => Math.floor(Math.random() * 100));
  console.log(numbers);
  console.log(mergeSort(numbers));
})();
