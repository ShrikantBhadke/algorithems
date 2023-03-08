let cl = console.log;

// let num = 123;
// let numStr = num.toString();
// let numLength = num.toString().length;

// let first = Math.pow(1,numLength)
// let second = Math.pow(2,numLength)
// let third = Math.pow(3,numLength)

// let add = first + second + third

// cl(add)

// if(num === add){
//   cl("The given num is armstrong no")
// }else{
//   cl("The given num is not armstrong no.")
// }

const isArmstrongNum = num =>{   
  let number = Number(num);
  let numLength = number.toString().length;
let result = 0;

  [...number.toString()].map(num =>{
    return result +=Math.pow(num,numLength)
  })
  if(result === number){
    return `The given ${number} is armstrong number`
  }else{
    return `The given ${number} is not armstrong number`
  }
}

cl(isArmstrongNum('452'))
cl(isArmstrongNum(153))


// const isArmstrong1 = num =>{
//   let reminder, addition = 0;
//   let number = Number(num);
//   let numLength = number.toString().length;
//   let flag = number;
//   while(flag>0){
//     reminder = flag % 10;
//     let temp = 1;
//     for(let i=0; i<numLength;i++){
//       temp *= reminder
//     }

//     addition += temp;
//     flag = parseInt(flag/10);

//   }
//   return number === addition ? `The given is armstrong number` :  `The given is not armstrong number`
// }

// cl(isArmstrong1(370))
// cl(isArmstrong1('153'))

