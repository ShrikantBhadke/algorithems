


let num = 542;


function alternatingSum(num){
 let str = num.toString();
 let sum = 0;

 for(let i=0;i<str.length; i++){
  if(i%2 ===0){
    sum += Number(str[i])
  }else{
    sum -= Number(str[i])
  }
 }
 return sum;

}


console.log(alternatingSum(num));


let n = 542;

let result = n.toString().split("").map(ele=> +ele).reduce((acc,curr,i)=> i%2===0 ? acc += curr :acc -= curr)

console.log(result);


function alternatingSum1(n){
 return n.toString().split("").map(ele=> +ele).reduce((acc,curr,i)=> i%2===0 ? acc += curr :acc -= curr)
}

console.log(alternatingSum1(542));