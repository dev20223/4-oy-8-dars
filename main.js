// 1-masala: shartiga tushunmadim

// 2-masala

// let arr1 = [1,2,3];
// let arr2 = [4,5,6];
// let arr3 = [7,8,9]

// let arr4 = arr2.concat(arr3,arr1);
// console.log(arr4);

// 3-masala

// function  firstNumbers(arr) {
//     if (arr.length > 0) {
//       var firstElement = arr.find(function(element) {
//         return Number.isInteger(element);
//       });
//       return firstElement * firstElement;
//     }

//     return -1;
//   }
  
//   var numbers = [true, "salom", 4, 3, 2, 1, "xayr"];
//   console.log(firstNumbers(numbers));


// 4-masala

// function oddArray(arr) {
//     let count = 0;
//     arr.forEach(function(element) {
//       if (element % 2 == 0) {
//         count++;
//       }
//     });

//     return count;
//   }
  
//   let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   let oddCount = oddArray(numbers);
//   console.log("Toqlar soni:", oddCount);

// 5-masala
  
// function fiveArray(string) {
//     let lastLetters = []; 
  
//     string.forEach(function(str) {
//       let lastLetterStr = str.charAt(str.length - 1); 
  
//       lastLetters.push(lastLetterStr); 
//     });
  
//     return lastLetters; 
//   }
  
//   let string = ['JavaScript', 'CSS', 'HTML'];
//   let result = fiveArray(string);
  
//   console.log(result); 
  

// 6-masala

// function tubArray(son) {
//     let caunt = 0;
  
//     function tubson(s) {
//       for (let i = 2, sqrt = Math.sqrt(s); i <= sqrt; i++)
//         if (s % i == 0) return false;
//       return s > 1;
//     }
  
//     for (let arg of son) {
//       if (tubson(arg)) {
//         caunt += arg;
//       }
//     }
  
//     return caunt;
//   }
  
//   let son = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   console.log(tubArray(son)); 



