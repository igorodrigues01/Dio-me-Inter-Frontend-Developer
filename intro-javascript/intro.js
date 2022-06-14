function evenValues(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      newArray.push(array[i]);
    } else {
      console.log("Esse não é " + array[i]);
    }
  }

  console.log("Estes valores são numeros pares " + newArray);
}

let arr = [1, 2, 5, 3, 6, 8, 12, 58, 23];
evenValues(arr);
