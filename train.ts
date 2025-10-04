console.log('Hello, World!');


// TASK ZS:

// Shunday function yozing, bu function parametrdagi array ichida
// bir marotaba takrorlangan element'ni qaytarsin

// MASALAN: singleNumber([4, 2, 1, 2, 1]); return 4;



function singleNumber(arr: number[]): number {
  const map: Record<number, number> = {};

  for (const num of arr) {
    map[num] = (map[num] || 0) + 1;
  }

  for (const key in map) {
    if (map[key] === 1) {
      return Number(key);
    }
  }

  throw new Error("No single number found");
}

console.log(singleNumber([4, 2, 1, 2, 1])); // 4




// TASK-ZP:

// Shunday function yozing, u parametridagi string ichidagi 
// raqam va sonlarni sonini sanasin.
// MASALAN: countNumberAndLetters(“string152%\¥”) 
// return {number:3, letter:6}


// function countNumberAndLetters(str) {
//   let result = { number: 0, letter: 0 };

//   for (let ch of str) {
//     if (/[0-9]/.test(ch)) {
//       result.number++;
//     } else if (/[a-zA-Z]/.test(ch)) {
//       result.letter++;
//     }
//   }

//   return result;
// }


// console.log(countNumberAndLetters("laborism1288310(*$(#&$"));



// TASK ZQ:

// Shunday function yozing, u parametridagi array 
// ichida 2 marta qaytarilgan sonlarni alohida araryda qaytarsin.
// MASALAN: findDuplicates([1,2,3,4,5,4,3,4]) return [3, 4]

// function findDuplicates(arr: number[]): number[] {
//   const countMap: Record<number, number> = {};
//   const duplicates: number[] = [];

//   for (const num of arr) {
//     countMap[num] = (countMap[num] || 0) + 1;
//   }

//   for (const key in countMap) {
//     if (countMap[key] > 1) {
//       duplicates.push(Number(key));
//     }
//   }

//   return duplicates;
// }


// console.log(findDuplicates([1, 2, 3, 4, 5, 4, 3, 4, 1]));





// TASK-ZP:

// Shunday function yozing, u parametridagi string ichidagi raqam va sonlarni sonini sanasin.
// MASALAN: countNumberAndLetters(“string152%\¥”) return {number:3, letter:6}

// function countNumberAndLetters(str: string): { number: number; letter: number } {
//   let number = 0;
//   let letter = 0;

//   for (let i = 0; i < str.length; i++) {
//     const ch = str[i];

//     if (/[0-9]/.test(ch)) {
//       number++;
//     } else if (/[a-zA-Z]/.test(ch)) {
//       letter++;
//     }
//   }

//   return { number, letter };
// }

// console.log(countNumberAndLetters("stringofletter231324152%¥")); 



// TASK-ZO:

// Shunday function yozing, u parametrdagi string 
// ichidagi qavslar miqdori balansda ekanligini aniqlasin. 
// Ya'ni ochish("(") va yopish(")") qavslar soni bir xil bolishi kerak.
// MASALAN: areParenthesesBalanced("string()ichida(qavslar)soni()balansda") 
// return true oddiy for loopda tuzaylik, typescriptda

// function areParenthesesBalanced(str: string): boolean {
//   let balance = 0;

//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];

//     if (char === "(") {
//       balance++;
//     } else if (char === ")") {
//       balance--;
//     }

//     if (balance < 0) {
//       return false;
//     }
//   }

//   return balance === 0;
// }

// console.log(areParenthesesBalanced("string()ichida(qavslar)soni()balansda")); 
// console.log(areParenthesesBalanced("((test)")); 
// console.log(areParenthesesBalanced(")(")); 

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
 