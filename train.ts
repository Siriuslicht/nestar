console.log('Hello, World!');

// TASK-ZO:

// Shunday function yozing, u parametrdagi string 
// ichidagi qavslar miqdori balansda ekanligini aniqlasin. 
// Ya'ni ochish("(") va yopish(")") qavslar soni bir xil bolishi kerak.
// MASALAN: areParenthesesBalanced("string()ichida(qavslar)soni()balansda") 
// return true oddiy for loopda tuzaylik, typescriptda

function areParenthesesBalanced(str: string): boolean {
  let balance = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char === "(") {
      balance++;
    } else if (char === ")") {
      balance--;
    }

    if (balance < 0) {
      return false;
    }
  }

  return balance === 0;
}

console.log(areParenthesesBalanced("string()ichida(qavslar)soni()balansda")); 
console.log(areParenthesesBalanced("((test)")); 
console.log(areParenthesesBalanced(")(")); 

// TASK ZN:

// Shunday function yozing, uni array va number parametri bo'lsin.
// Function'ning vazifasi ikkinchi parametr'da berilgan raqam, birinchi
// array parametr'ning indeksi bo'yicha hisoblanib, shu indeksgacha bo'lgan
// raqamlarni indeksdan tashqarida bo'lgan raqamlar bilan o'rnini
// almashtirib qaytarsin.

// MASALAN: rotateArray([1, 2, 3, 4, 5, 6], 3); return [5, 6, 1, 2, 3, 4];

// function rotateArray(arr, index) {
//    let left = arr.slice(0, index);
//    let right = arr.slice(index);
 
//    return right.concat(left);
//  }
 
//  console.log(rotateArray([1, 2, 3, 4, 5, 6], 3)); 
//  console.log(rotateArray([10, 20, 30, 40, 50], 2)); 
 

// TASK ZM:

// Shunday function yozing, va bu function parametr
// sifatida raqamlarni qabul qilsin. Bu function qabul qilingan
// raqamlarni orqasiga o'girib qaytarsin

// MASALAN: reverseInteger(123456789); return 987654321;

// Yuqoridagi misolda, function kiritilgan raqamlarni orqasiga
// o'girib (reverse) qilib qaytarmoqda.


// function reverseInteger(num: number): number {
//   const reversed = num.toString().split("").reverse().join("");
//   return Number(reversed);
// }

// console.log(reverseInteger(123456789));


// TASK-ZL:

// Shunday function yozing, u parametrda berilgan stringni 
// kebab casega otkazib qaytarsin. Bosh harflarni kichik 
// harflarga ham otkazsin.
// MASALAN: stringToKebab(“I love Kebab”) return “i-love-kebab”

// function stringToKebab(str: string): string {
//   let result = "";

//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];

//     if (char === " ") {
//       result += "-"; 
//     } else {
//       result += char.toLowerCase();
//     }
//   }

//   return result;
// }

// const result36 = stringToKebab("I Just Wanted To Stay Down The Road!")
// console.log("stringToKebab:", result36); 



// TASK-ZK:

// Shunday function yozing, u har soniyada bir
//  marta consolega 1 dan 5 gacha bolgan raqamlarni 
//  chop etsin va 5 soniyadan keyin ishini toxtatsin.
// MASALAN: printNumbers()

// function printNumbers(): void {
//   let count: number = 1;

//   const interval: NodeJS.Timeout = setInterval(() => {
//     console.log(count);
//     count++;

//     if (count > 5) {
//       clearInterval(interval);
//     }
//   }, 1000);
// }

// printNumbers();


// TASK ZJ:

// Shunday function yozing, u berilgan array ichidagi
// raqamlarni qiymatini hisoblab qaytarsin.

// MASALAN: reduceNestedArray([1, [1, 2, [4]]]); return 8;

// Yuqoridagi misolda, array nested bo'lgan holdatda ham,
// bizning function ularning yig'indisini hisoblab qaytarmoqda.

// function reduceNestedArray(arr: any[]): number {
//    let sum = 0;
 
//    for (let i = 0; i < arr.length; i++) {
//      const item = arr[i];
 
//      if (Array.isArray(item)) {
//        sum += reduceNestedArray(item);
//      } else if (typeof item === "number") {
//        sum += item;
//      }
//    }
 
//    return sum; 
//  }
 
//  console.log(reduceNestedArray([5, [3, [2, 1]], 4])); 
 