console.log('Hello, World!');

// TASK ZJ:

// Shunday function yozing, u berilgan array ichidagi
// raqamlarni qiymatini hisoblab qaytarsin.

// MASALAN: reduceNestedArray([1, [1, 2, [4]]]); return 8;

// Yuqoridagi misolda, array nested bo'lgan holdatda ham,
// bizning function ularning yig'indisini hisoblab qaytarmoqda.

function reduceNestedArray(arr: any[]): number {
   let sum = 0;
 
   for (let i = 0; i < arr.length; i++) {
     const item = arr[i];
 
     if (Array.isArray(item)) {
       sum += reduceNestedArray(item);
     } else if (typeof item === "number") {
       sum += item;
     }
   }
 
   return sum; 
 }
 
 console.log(reduceNestedArray([5, [3, [2, 1]], 4])); 
 