let cl = console.log;


let arr = [451,785,623,985];





function revers(arr){

  return arr.join(" ").split("").reverse().join("").split(" ").reverse().map(ele=>+ele)

}

cl(arr)
cl(revers(arr))
// function revers(arr){
//   let output = []
//   for(let i=0;i<arr.length;i++){
//     let number = arr[i]
//     let result = 0;

//     while(number>0){
//      let remindar = number%10;
//       result = result*10 +remindar;
//       number = Math.floor(number/10)
//     }
//     output.push(result)
//   }
//   return output
// }

// console.log(arr);
// console.log(revers(arr));