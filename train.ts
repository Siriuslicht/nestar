console.log('Hello, World!');


// TASK-ZK:

// Shunday function yozing, u har soniyada bir
//  marta consolega 1 dan 5 gacha bolgan raqamlarni 
//  chop etsin va 5 soniyadan keyin ishini toxtatsin.
// MASALAN: printNumbers()

function printNumbers(): void {
  let count: number = 1;

  const interval: NodeJS.Timeout = setInterval(() => {
    console.log(count);
    count++;

    if (count > 5) {
      clearInterval(interval);
    }
  }, 1000);
}

printNumbers();


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
 