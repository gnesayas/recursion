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
})();
