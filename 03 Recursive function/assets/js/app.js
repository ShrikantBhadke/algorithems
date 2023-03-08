let cl = console.log;

// function printNum(num) {
//   if (num === 1) {
//     cl(num);
//     return;
//   }
//   cl(num);
//   printNum(num - 1);
// }

// printNum(10);

// function printfact(num) {
//   let result = 1;
//   for (let i = num; i > 0; i--) {
//     result *= i;
//   }
//   return result;
// }

// cl(printfact(5));

// function printfact(num) {
  // if (num === 1) {
  //   return 1;
  // }
  // return num * printfact(num - 1);
//   if (num <= 0) {
//     alert("Please enter valid Number");
//     return;
//   }
//   return num === 1 ? 1 : num * printfact(num - 1);
// }
// cl(printfact(5));

// let arr = new Array(5).fill(0).map((num, i) => num + i + 1);
// cl(arr);
// let x = arr.reduce((acc, cv) => {
//   return (acc *= cv);
// });
// cl(x);




function add(num){
  cl(num)
  if(num>= 0){
    add(num-1)
  }
}


add(10)


function reverseCount(n) {
  if (n <= 0) {
    return;
  } else {
    console.log(n);
    reverseCount(n-1);
  }
}

reverseCount(10);

// let a = 1
// function add(){
// let c = a++;
// console.log(c)
// if(c<10){
// add();
// }
// }
// add()

function PrintReverseOrder(N)
{
 
    // if N is less than 1
    // then return void function
    if (N <= 0)
    {
        return;
    }
    else
    {
        document.write(N + " ");

        // recursive call of the function
        PrintReverseOrder(N - 1);
    }
}
 
// Driver code
let N = 5;
PrintReverseOrder(N);